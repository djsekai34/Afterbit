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

  const [viewDate, setViewDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [showSelector, setShowSelector] = useState(false);
  const [tempSelection, setTempSelection] = useState({
    month: viewDate.getMonth(),
    year: viewDate.getFullYear(),
  });

  // --- LÓGICA DE EXPORTACIÓN FINAL (GOOGLE + IPHONE REPARADOS) ---

  const pad = (n) => String(n).padStart(2, "0");

  const formatLocal = (date, timeStr) => {
    const d = new Date(date);
    const y = d.getFullYear();
    const m = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    if (timeStr) {
      const [hh, mm] = timeStr.split(":");
      return `${y}${m}${day}T${hh}${mm}00`;
    }
    return `${y}${m}${day}`;
  };

  const generateGoogleCalendarLink = (event) => {
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    let start, end, scheduleDesc = `📍 UBICACIÓN: ${event.ubicacion}\n`;
    
    // AÑADIMOS EL ENLACE EN LA DESCRIPCIÓN
    if (event.url) scheduleDesc += `🔗 ENLACE: ${event.url}\n\n`;
    else scheduleDesc += `\n`;

    scheduleDesc += `--- HORARIOS ---\n`;

    if (event.horariosPorDia) {
      const dayKeys = Object.keys(event.horariosPorDia).sort();
      const firstDay = dayKeys[0];
      const lastDay = dayKeys[dayKeys.length - 1];
      
      // Para Google, para evitar que se vea como un bloque infinito en la vista de cuadrícula,
      // enviamos el rango pero detallamos los cortes en la descripción:
      start = formatLocal(parseInt(firstDay), event.horariosPorDia[firstDay][0].inicio);
      end = formatLocal(parseInt(lastDay), event.horariosPorDia[lastDay][event.horariosPorDia[lastDay].length - 1].fin);
      
      Object.entries(event.horariosPorDia).sort().forEach(([ts, hrs]) => {
        const dateStr = new Date(parseInt(ts)).toLocaleDateString("es-ES");
        scheduleDesc += `• ${dateStr}: ${hrs.map(h => `${h.inicio} a ${h.fin}`).join(" y ")}\n`;
      });
    } else {
      const firstDate = event.especificos ? event.especificos[0] : event.inicio;
      const lastDate = event.especificos ? event.especificos[event.especificos.length - 1] : (event.fin || event.inicio);
      start = formatLocal(firstDate, event.horarios?.[0]?.inicio);
      end = formatLocal(lastDate, event.horarios?.[event.horarios.length - 1]?.fin);
    }

    return `${baseUrl}&text=${encodeURIComponent(event.titulo)}&details=${encodeURIComponent(event.descripcion + "\n\n" + scheduleDesc)}&location=${encodeURIComponent(event.ubicacion)}&dates=${start}/${end}&ctz=Europe/Madrid`;
  };

  const downloadIcsFile = (event) => {
    const events = [];
    const commonHeader = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Afterbit//Calendar//ES",
      "X-WR-TIMEZONE:Europe/Madrid",
    ];

    let extraDesc = `\\n\\n📍 UBICACIÓN: ${event.ubicacion}`;
    if (event.url) extraDesc += `\\n🔗 ENLACE: ${event.url}`;

    if (event.horariosPorDia) {
      // Creamos un evento por día para que en iPhone salgan bloques separados (10h-21h y 10h-20h)
      Object.entries(event.horariosPorDia).forEach(([ts, hrs]) => {
        hrs.forEach((turno, idx) => {
          const start = formatLocal(parseInt(ts), turno.inicio);
          const end = formatLocal(parseInt(ts), turno.fin);
          events.push(
            "BEGIN:VEVENT",
            `DTSTART:${start}`,
            `DTEND:${end}`,
            `SUMMARY:${event.titulo}`,
            `DESCRIPTION:${event.descripcion.replace(/\n/g, "\\n")}${extraDesc}`,
            `LOCATION:${event.ubicacion}`,
            "END:VEVENT"
          );
        });
      });
    } else {
      const firstDate = event.especificos ? event.especificos[0] : event.inicio;
      const lastDate = event.especificos ? event.especificos[event.especificos.length - 1] : (event.fin || event.inicio);
      const isAllDay = !event.horarios;
      const vProp = isAllDay ? ";VALUE=DATE" : "";
      const start = formatLocal(firstDate, event.horarios?.[0]?.inicio);
      const end = formatLocal(lastDate, event.horarios?.[event.horarios.length - 1]?.fin);

      events.push(
        "BEGIN:VEVENT",
        `DTSTART${vProp}:${start}`,
        `DTEND${vProp}:${end}`,
        `SUMMARY:${event.titulo}`,
        `DESCRIPTION:${event.descripcion.replace(/\n/g, "\\n")}${extraDesc}`,
        `LOCATION:${event.ubicacion}`,
        "END:VEVENT"
      );
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

  // --- RESTO DE LÓGICA DE UI (SIN CAMBIOS) ---

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
    const baseDate = event.especificos 
      ? event.especificos.map((t) => f(new Date(t))).join(" , ")
      : !event.fin ? f(event.inicio) : `${f(event.inicio)} al ${f(event.fin)}`;
    
    return (
      <div>
        <span className="opacity-90">{baseDate}</span>
        <br />
        <span className="opacity-60 text-[10px] uppercase">
          {event.horarios ? event.horarios.map(h => `${h.inicio} a ${h.fin}`).join(" / ") : "Día completo"}
        </span>
      </div>
    );
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

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen pt-28 pb-12 px-6 lg:px-20 transition-colors duration-500 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <Motion.h1 className="text-4xl md:text-8xl font-black italic mb-20 uppercase tracking-tighter text-center">
        / EVENTOS<span className="text-red-600">.</span>
      </Motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className={`relative border-2 ${isDark ? "border-zinc-800 bg-zinc-900/20" : "border-zinc-200 bg-zinc-50"} p-6 shadow-2xl`}>
            {/* NAVEGACIÓN */}
            <div className="flex justify-between items-center mb-8">
              <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))} className="hover:scale-125 transition-transform p-2 font-black text-xl">{"<<"}</button>
              <button onClick={() => setShowSelector(!showSelector)} className="font-mono font-bold uppercase text-sm sm:text-2xl tracking-[0.1em] sm:tracking-[0.4em]">
                {viewDate.toLocaleString("es-ES", { month: "long", year: "numeric" })} {showSelector ? "▲" : "▼"}
              </button>
              <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))} className="hover:scale-125 transition-transform p-2 font-black text-xl">{">>"}</button>
            </div>

            <div className="grid grid-cols-7 border-t border-l border-zinc-500/20">
              {["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"].map((day) => (
                <div key={day} className="p-2 sm:p-4 text-center font-mono text-[10px] opacity-40 border-r border-b border-zinc-500/20">{day}</div>
              ))}
              {daysInMonth.map((date, index) => {
                const event = getEventForDay(date);
                const visualColor = event ? getVisibleColor(event.color) : "transparent";
                return (
                  <div key={index} onClick={() => event && setSelectedEvent(event)} className={`relative h-16 sm:h-24 border-r border-b border-zinc-500/20 p-2 transition-all ${event ? "cursor-pointer hover:bg-zinc-500/10" : ""} ${!date ? "bg-zinc-500/5" : ""}`}>
                    {date && <span className={`font-mono text-xs ${event ? "font-black" : "opacity-30"}`}>{date.getDate()}</span>}
                    {event && <div className="absolute left-0 right-0 h-1.5 sm:h-2 bottom-4 opacity-80" style={{ backgroundColor: visualColor }} />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <AnimatePresence mode="wait">
              {selectedEvent ? (
                <Motion.div key={selectedEvent.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className={`border-2 p-6 shadow-2xl ${isDark ? "border-zinc-700 bg-zinc-900" : "border-black bg-zinc-50"}`}>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: getVisibleColor(selectedEvent.color) }}>{selectedEvent.tipo}</span>
                    <button onClick={() => setSelectedEvent(null)} className="text-[10px] font-mono font-bold">[CERRAR]</button>
                  </div>
                  <h4 className="text-2xl font-black italic uppercase mb-6 tracking-tighter">{selectedEvent.titulo}</h4>
                  <div className="space-y-6 font-mono text-[11px]">
                    <p className="opacity-70 leading-relaxed border-l-2 border-zinc-500/30 pl-4">{selectedEvent.descripcion}</p>
                    <div className="space-y-4">
                      <div><span style={{ color: getVisibleColor(selectedEvent.color) }}>[ FECHA ]</span><div className="mt-1">{formatEventDate(selectedEvent)}</div></div>
                      <div>
                        <span style={{ color: getVisibleColor(selectedEvent.color) }}>[ LOCALIZACIÓN ]</span><br />
                        {selectedEvent.url ? (
                          <a href={selectedEvent.url} target="_blank" rel="noopener noreferrer" className="opacity-90 underline underline-offset-4 hover:text-[#008000] transition-colors">{selectedEvent.ubicacion} ↗</a>
                        ) : (
                          <span className="opacity-90">{selectedEvent.ubicacion}</span>
                        )}
                      </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-zinc-500/20 space-y-3">
                      <p className="text-[9px] opacity-50 uppercase tracking-widest">// GUARDAR EN AGENDA</p>
                      <a href={generateGoogleCalendarLink(selectedEvent)} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center py-2 px-4 border font-black transition-all ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>GOOGLE CALENDAR</a>
                      <button onClick={() => downloadIcsFile(selectedEvent)} className="w-full py-2 px-4 border border-zinc-500/30 font-black hover:bg-zinc-500/10">APPLE / OUTLOOK (.ICS)</button>
                    </div>
                  </div>
                </Motion.div>
              ) : (
                <div className="border-2 border-dashed p-12 text-center opacity-20 font-mono text-[10px] uppercase">Selecciona un evento</div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Motion.div>
  );
}