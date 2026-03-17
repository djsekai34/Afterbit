import { useState, useMemo } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { eventsData } from "../data/eventsData";

export default function Eventos({ isDark }) {
  const accentGreen = "#008000";
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60 },
    },
  };

  // --- ESTADOS DE CONTROL ---
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [showSelector, setShowSelector] = useState(false);
  const [tempSelection, setTempSelection] = useState({
    month: viewDate.getMonth(),
    year: viewDate.getFullYear(),
  });

  // --- LÓGICA DE EXPORTACIÓN FINAL (REPARADA CON CONDICIONAL DE TURNO PARTIDO) ---

  const pad = (n) => String(n).padStart(2, "0");

  const formatLocal = (date, timeStr, addDay = false) => {
    const d = new Date(date);
    if (addDay) d.setDate(d.getDate() + 1); // Ajuste para que Google no llore
    const y = d.getFullYear();
    const m = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    if (timeStr) {
      const [hh, mm] = timeStr.split(":");
      return `${y}${m}${day}T${hh}${mm}00`;
    }
    return `${y}${m}${day}`;
  };

  const generateGoogleCalendarLinks = (event) => {
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const links = [];
    
    let commonDesc = `${event.descripcion}\n\n📍 UBICACIÓN: ${event.ubicacion}\n`;
    if (event.url) commonDesc += `🔗 ENLACE: ${event.url}\n`;

    if (event.horariosPorDia) {
      Object.entries(event.horariosPorDia).sort().forEach(([ts, hrs]) => {
        const dateObj = new Date(parseInt(ts));
        const dateStr = dateObj.toLocaleDateString("es-ES");
        
        if (hrs.length > 1) {
          const descConHorarios = `⏰ HORARIO REAL: ${hrs.map(h => `${h.inicio}-${h.fin}`).join(" y ")}\n\n${commonDesc}`;
          links.push({
            label: `GOOGLE: DÍA ${dateStr}`,
            // FECHA FINAL +1 DÍA PARA QUE GOOGLE ACEPTE EL "TODO EL DÍA"
            url: `${baseUrl}&text=${encodeURIComponent(event.titulo)}&details=${encodeURIComponent(descConHorarios)}&location=${encodeURIComponent(event.ubicacion)}&dates=${formatLocal(dateObj)}/${formatLocal(dateObj, null, true)}&ctz=Europe/Madrid`
          });
        } else {
          hrs.forEach((turno) => {
            const start = formatLocal(dateObj, turno.inicio);
            const end = formatLocal(dateObj, turno.fin);
            links.push({
              label: `GOOGLE: DÍA ${dateStr}`,
              url: `${baseUrl}&text=${encodeURIComponent(event.titulo)}&details=${encodeURIComponent(commonDesc)}&location=${encodeURIComponent(event.ubicacion)}&dates=${start}/${end}&ctz=Europe/Madrid`
            });
          });
        }
      });
    } else {
      const firstDate = event.especificos ? event.especificos[0] : event.inicio;
      const lastDate = event.especificos ? event.especificos[event.especificos.length - 1] : (event.fin || event.inicio);
      const start = formatLocal(firstDate, event.horarios?.[0]?.inicio);
      const end = formatLocal(lastDate, event.horarios?.[event.horarios.length - 1]?.fin);

      links.push({
        label: "GOOGLE CALENDAR",
        url: `${baseUrl}&text=${encodeURIComponent(event.titulo)}&details=${encodeURIComponent(commonDesc)}&location=${encodeURIComponent(event.ubicacion)}&dates=${start}/${end}&ctz=Europe/Madrid`
      });
    }
    return links;
  };

  const downloadIcsFile = (event) => {
    const events = [];
    const commonHeader = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Afterbit//Calendar//ES", "X-WR-TIMEZONE:Europe/Madrid"];
    let extraDesc = `\\n\\n📍 UBICACIÓN: ${event.ubicacion}`;
    if (event.url) extraDesc += `\\n🔗 ENLACE: ${event.url}`;

    if (event.horariosPorDia) {
      Object.entries(event.horariosPorDia).forEach(([ts, hrs]) => {
        const dateObj = new Date(parseInt(ts));
        if (hrs.length > 1) {
          const horariStr = `⏰ HORARIO REAL: ${hrs.map(h => `${h.inicio}-${h.fin}`).join(" y ")}`;
          events.push(
            "BEGIN:VEVENT",
            `DTSTART;VALUE=DATE:${formatLocal(dateObj)}`,
            `DTEND;VALUE=DATE:${formatLocal(dateObj, null, true)}`, // Apple también prefiere el +1 día para eventos de día completo
            `SUMMARY:${event.titulo}`,
            `DESCRIPTION:${horariStr}\\n\\n${event.descripcion.replace(/\n/g, "\\n")}${extraDesc}`,
            `LOCATION:${event.ubicacion}`,
            "END:VEVENT"
          );
        } else {
          hrs.forEach((turno) => {
            events.push(
              "BEGIN:VEVENT",
              `DTSTART:${formatLocal(dateObj, turno.inicio)}`,
              `DTEND:${formatLocal(dateObj, turno.fin)}`,
              `SUMMARY:${event.titulo}`,
              `DESCRIPTION:${event.descripcion.replace(/\n/g, "\\n")}${extraDesc}`,
              `LOCATION:${event.ubicacion}`,
              "END:VEVENT"
            );
          });
        }
      });
    } else {
      const firstDate = event.especificos ? event.especificos[0] : event.inicio;
      const lastDate = event.especificos ? event.especificos[event.especificos.length - 1] : (event.fin || event.inicio);
      const isAllDay = !event.horarios;
      const vProp = isAllDay ? ";VALUE=DATE" : "";
      const start = formatLocal(firstDate, event.horarios?.[0]?.inicio);
      const end = formatLocal(lastDate, event.horarios?.[event.horarios.length - 1]?.fin, isAllDay);
      events.push("BEGIN:VEVENT", `DTSTART${vProp}:${start}`, `DTEND${vProp}:${end}`, `SUMMARY:${event.titulo}`, `DESCRIPTION:${event.descripcion.replace(/\n/g, "\\n")}${extraDesc}`, `LOCATION:${event.ubicacion}`, "END:VEVENT");
    }

    const icsContent = [...commonHeader, ...events, "END:VCALENDAR"].join("\n");
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `${event.titulo.replace(/\s+/g, "_")}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getVisibleColor = (hexColor) => {
    if (!hexColor) return accentGreen;
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    if (isDark) {
      if (brightness < 60) return `rgb(${Math.min(r + 90, 255)}, ${Math.min(g + 90, 255)}, ${Math.min(b + 120, 255)})`;
    } else {
      if (brightness > 200) return `rgb(${Math.max(r - 100, 0)}, ${Math.max(g - 100, 0)}, ${Math.max(b - 100, 0)})`;
    }
    return hexColor;
  };

  const formatEventDate = (event) => {
    const f = (date) => date.toLocaleDateString("es-ES");
    if (event.horariosPorDia) {
      return (
        <div className="space-y-3">
          {Object.entries(event.horariosPorDia).sort().map(([ts, hrs]) => (
            <div key={ts}>
              <span className="opacity-90">{f(new Date(parseInt(ts)))}</span>
              <br />
              <span className="opacity-60 text-[10px] uppercase">
                {hrs.map(h => `${h.inicio} a ${h.fin}`).join(" y ")}
              </span>
            </div>
          ))}
        </div>
      );
    }
    if (event.horarios && event.horarios.length > 0) {
      let baseDate = event.especificos 
        ? event.especificos.map((t) => f(new Date(t))).join(" , ")
        : !event.fin ? f(event.inicio) : `${f(event.inicio)} al ${f(event.fin)}`;
      const horasStr = event.horarios.map(h => `${h.inicio} a ${h.fin}`).join(" / ");
      return (
        <div>
          <span className="opacity-90">{baseDate}</span>
          <br />
          <span className="opacity-60 text-[10px] uppercase">{horasStr}</span>
        </div>
      );
    }
    let rangeNormal = event.especificos 
      ? event.especificos.map((t) => f(new Date(t))).join(" , ")
      : !event.fin ? f(event.inicio) : `${f(event.inicio)} al ${f(event.fin)}`;
    return (
      <div>
        <span className="opacity-90">{rangeNormal}</span>
        <br />
        {event.id === 1 ? (
          <span className="opacity-60 text-lg leading-none">∞</span>
        ) : (
          <span className="opacity-60 text-[10px] uppercase tracking-tighter">Día completo</span>
        )}
      </div>
    );
  };

  const changeMonth = (offset) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1);
    setViewDate(newDate);
    setTempSelection({ month: newDate.getMonth(), year: newDate.getFullYear() });
  };

  const jumpToDate = (month, year) => {
    setViewDate(new Date(year, month, 1));
    setShowSelector(false);
  };

  const jumpToToday = () => {
    const today = new Date();
    setViewDate(new Date(today.getFullYear(), today.getMonth(), 1));
    setShowSelector(false);
  };

  const toggleSelector = () => {
    if (!showSelector) setTempSelection({ month: viewDate.getMonth(), year: viewDate.getFullYear() });
    setShowSelector(!showSelector);
  };

  const daysInMonth = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    const calendarDays = [];
    for (let i = 0; i < startOffset; i++) calendarDays.push(null);
    for (let i = 1; i <= days; i++) calendarDays.push(new Date(year, month, i));
    return calendarDays;
  }, [viewDate]);

  const getEventForDay = (date) => {
    if (!date) return null;
    const d = new Date(date).setHours(0, 0, 0, 0);
    return eventsData.find((event) => {
      if (event.especificos) return event.especificos.includes(d);
      const start = new Date(event.inicio).setHours(0, 0, 0, 0);
      if (event.fin === null) return d === start;
      const end = new Date(event.fin).setHours(0, 0, 0, 0);
      return d >= start && d <= end;
    });
  };

  const currentMonthEvents = useMemo(() => {
    const seen = new Set();
    const month = viewDate.getMonth();
    const year = viewDate.getFullYear();
    return eventsData.filter((e) => {
      const isThisMonth = e.especificos
        ? e.especificos.some((t) => new Date(t).getMonth() === month && new Date(t).getFullYear() === year)
        : (e.inicio.getMonth() === month && e.inicio.getFullYear() === year) ||
          (e.fin && e.fin.getMonth() === month && e.fin.getFullYear() === year);
      if (isThisMonth && !seen.has(e.titulo)) {
        seen.add(e.titulo);
        return true;
      }
      return false;
    });
  }, [viewDate]);

  const weekDays = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const years = Array.from({ length: 21 }, (_, i) => 2025 + i);

  const isEventFuture = (event) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const eventEndDate = event.especificos 
      ? Math.max(...event.especificos) 
      : (event.fin ? new Date(event.fin).setHours(0,0,0,0) : new Date(event.inicio).setHours(0,0,0,0));
    return eventEndDate >= today;
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen pt-28 pb-12 px-6 lg:px-20 transition-colors duration-500 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <Motion.h1
        className="text-4xl md:text-8xl font-black italic mb-20 uppercase tracking-tighter text-center"
        variants={itemVariants}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        / EVENTOS<span className="text-red-600">.</span>
      </Motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className={`relative border-2 ${isDark ? "border-zinc-800 bg-zinc-900/20" : "border-zinc-200 bg-zinc-50"} p-6 shadow-2xl`}>
            {/* NAVEGACIÓN */}
            <div className="flex justify-between items-center mb-8">
              <button onClick={() => changeMonth(-1)} className="hover:scale-125 transition-transform p-2 font-black text-xl">{"<<"}</button>
              <div className="relative">
                <button onClick={toggleSelector} className="font-mono font-bold uppercase hover:opacity-70 transition-opacity flex items-center justify-center gap-2 text-sm sm:text-2xl tracking-[0.1em] sm:tracking-[0.4em]">
                  <span className="truncate max-w-[150px] sm:max-w-none">{viewDate.toLocaleString("es-ES", { month: "long", year: "numeric" })}</span>
                  <span className="text-[10px] opacity-50">{showSelector ? "▲" : "▼"}</span>
                </button>
                <AnimatePresence>
                  {showSelector && (
                    <Motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 z-[120] p-6 border-2 shadow-2xl min-w-[320px] ${isDark ? "bg-black border-white" : "bg-white border-black"}`}>
                      <div className="flex justify-between items-center mb-4 pb-2 border-b border-zinc-500/20">
                        <p className="text-[9px] opacity-50 font-mono font-bold uppercase tracking-widest">// SELECCIÓN_FECHA</p>
                        <button onClick={jumpToToday} className="text-[9px] font-black uppercase px-2 py-0.5 border border-current hover:bg-[#008000] hover:text-white transition-colors">Ir a Hoy [NOW]</button>
                      </div>
                      <div className="grid grid-cols-2 gap-8 mb-6">
                        <div>
                          <p className="text-[10px] opacity-50 mb-4 font-mono">// MES</p>
                          <div className="grid grid-cols-1 gap-1 h-48 overflow-y-auto pr-2 custom-scrollbar">
                            {months.map((m, i) => (
                              <button key={m} onClick={() => setTempSelection({ ...tempSelection, month: i })} className={`text-left text-[11px] font-bold uppercase p-1 hover:bg-zinc-500/20 ${tempSelection.month === i ? "text-[#008000] bg-zinc-500/10" : ""}`}>{m}</button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] opacity-50 mb-4 font-mono">// AÑO</p>
                          <div className="grid grid-cols-1 gap-1 h-48 overflow-y-auto pr-2 custom-scrollbar">
                            {years.map((y) => (
                              <button key={y} onClick={() => setTempSelection({ ...tempSelection, year: y })} className={`text-left text-sm font-black p-1 hover:bg-zinc-500/20 ${tempSelection.year === y ? "text-[#008000] bg-zinc-500/10" : ""}`}>{y}</button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <button onClick={() => jumpToDate(tempSelection.month, tempSelection.year)} className={`w-full py-3 font-mono text-xs font-black uppercase tracking-[0.2em] transition-all ${isDark ? "bg-white text-black hover:bg-[#008000] hover:text-white" : "bg-black text-white hover:bg-[#008000]"}`}>Confirmar Selección</button>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button onClick={() => changeMonth(1)} className="hover:scale-125 transition-transform p-2 font-black text-xl">{">>"}</button>
            </div>

            <div className="grid grid-cols-7 border-t border-l border-zinc-500/20">
              {weekDays.map((day) => (
                <div key={day} className="p-2 sm:p-4 text-center font-mono text-[10px] opacity-40 border-r border-b border-zinc-500/20">{day}</div>
              ))}
              {daysInMonth.map((date, index) => {
                const event = getEventForDay(date);
                const visualColor = event ? getVisibleColor(event.color) : "transparent";
                const isSelected = selectedEvent && event && selectedEvent.id === event.id;
                const isHovered = date && hoveredDay === date.getTime();
                return (
                  <div key={index} onMouseEnter={() => date && setHoveredDay(date.getTime())} onMouseLeave={() => setHoveredDay(null)} onClick={() => { if (event) setSelectedEvent(selectedEvent?.id === event.id ? null : event); }} className={`relative h-16 sm:h-24 border-r border-b border-zinc-500/20 p-2 transition-all ${event ? "cursor-pointer" : ""} ${!date ? "bg-zinc-500/5" : ""} ${isSelected ? "bg-zinc-500/15" : ""} ${isHovered && event ? "bg-zinc-500/10" : ""}`}>
                    <AnimatePresence>
                      {isHovered && event && (
                        <Motion.div initial={{ opacity: 0, scale: 0.95, y: 5 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="absolute -top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                          <div className={`flex items-center gap-2 px-3 py-1.5 backdrop-blur-md border shadow-2xl ${isDark ? "bg-zinc-900/90 border-zinc-700 text-white" : "bg-white/95 border-zinc-300 text-black"}`}>
                            <div className="w-1 h-3" style={{ backgroundColor: visualColor }} />
                            <span className="text-[9px] font-black uppercase tracking-wider whitespace-nowrap">{event.titulo}</span>
                          </div>
                        </Motion.div>
                      )}
                    </AnimatePresence>
                    {date && <span className={`font-mono text-xs ${event ? "font-black" : "opacity-30"}`}>{date.getDate()}</span>}
                    {event && <div className="absolute left-0 right-0 h-1.5 sm:h-2 bottom-4 opacity-80" style={{ backgroundColor: visualColor, boxShadow: isDark ? `0 0 15px ${visualColor}66` : "none" }} />}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-6 border-t border-zinc-500/20 pt-6">
              {currentMonthEvents.length > 0 ? (
                currentMonthEvents.map((e) => (
                  <div key={e.id} className="flex items-center gap-2">
                    <div className="w-3 h-3" style={{ backgroundColor: getVisibleColor(e.color) }}></div>
                    <span className="font-mono text-[10px] uppercase tracking-wider">{e.titulo}</span>
                  </div>
                ))
              ) : (
                <div className="flex items-center gap-2 opacity-30"><div className="w-3 h-[1px] bg-current"></div><span className="font-mono text-[10px] uppercase tracking-widest">No hay eventos</span></div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <h3 className="font-mono text-xs opacity-50 mb-4 uppercase tracking-[0.3em]">// EVENT_LOG</h3>
            <AnimatePresence mode="wait">
              {selectedEvent ? (
                <Motion.div key={selectedEvent.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className={`border-2 p-6 shadow-2xl ${isDark ? "border-zinc-700 bg-zinc-900" : "border-black bg-zinc-50"}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: getVisibleColor(selectedEvent.color), boxShadow: `0 0 8px ${getVisibleColor(selectedEvent.color)}` }}></div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest">{selectedEvent.tipo}</span>
                    </div>
                    <button onClick={() => setSelectedEvent(null)} className="text-[10px] font-mono font-bold" style={{ color: getVisibleColor(selectedEvent.color) }}>[CERRAR]</button>
                  </div>
                  <h4 className="text-2xl font-black italic uppercase mb-6 tracking-tighter leading-tight">{selectedEvent.titulo}</h4>
                  <div className="space-y-6 font-mono text-[11px]">
                    <p className="opacity-70 leading-relaxed border-l-2 border-zinc-500/30 pl-4">{selectedEvent.descripcion}</p>
                    <div className="space-y-4 pt-4">
                      <div>
                        <span style={{ color: getVisibleColor(selectedEvent.color) }}>[ FECHA ]</span>
                        <br />
                        <div className="mt-1">
                          {formatEventDate(selectedEvent)}
                        </div>
                      </div>
                      <div>
                        <span style={{ color: getVisibleColor(selectedEvent.color) }}>[ LOCALIZACIÓN ]</span><br />
                        {selectedEvent.url ? <a href={selectedEvent.url} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:underline inline-flex items-center gap-1 group uppercase">{selectedEvent.ubicacion}<span className="text-[8px] group-hover:translate-x-1 transition-transform">↗</span></a> : <span className="opacity-90">{selectedEvent.ubicacion}</span>}
                      </div>
                    </div>

                    {isEventFuture(selectedEvent) && (
                      <div className="mt-8 pt-6 border-t border-zinc-500/20 space-y-3">
                        <p className="text-[9px] opacity-50 uppercase tracking-widest">// GUARDAR EN AGENDA</p>
                        <div className="grid grid-cols-1 gap-2">
                          {generateGoogleCalendarLinks(selectedEvent).map((link, idx) => (
                            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center py-2 px-4 border font-black transition-all hover:scale-[1.02] active:scale-95 ${isDark ? "bg-white text-black border-white" : "bg-black text-white border-black"}`}>
                              {link.label}
                            </a>
                          ))}
                          <button onClick={() => downloadIcsFile(selectedEvent)} className={`flex items-center justify-center py-2 px-4 border font-black transition-all hover:scale-[1.02] active:scale-95 ${isDark ? "border-zinc-700 text-zinc-400 hover:text-white" : "border-zinc-300 text-zinc-600 hover:text-black"}`}>APPLE / OUTLOOK (.ICS)</button>
                        </div>
                      </div>
                    )}
                  </div>
                </Motion.div>
              ) : (
                <div className={`border-2 border-dashed p-12 text-center opacity-20 ${isDark ? "border-white" : "border-black"}`}><p className="font-mono text-[10px] uppercase tracking-widest">Selecciona un evento</p></div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Motion.div>
  );
}