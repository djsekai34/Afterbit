import React from "react";
import { motion as Motion } from "framer-motion";
import Logo from "../Imagenes/LogoSupervivencia.png";
import iconoComida from "../Imagenes/Bocata.png";
import iconoBebida from "../Imagenes/Agua.png";
import iconoSueno from "../Imagenes/Almohada.png";
import iconoSalud from "../Imagenes/Revista.png";
import iconoHuir from "../Imagenes/Copa.png";
import esquemaArquitectura from "../Imagenes/VideojuegoSupervivencia.png";
import BosqueSeparador from "../components/separador";
import playerSprite from "../Imagenes/Malagueno.png";
import enemySprite from "../Imagenes/Nastic.png";

export default function SupervivenciaPage({ isDark, currentTextColor }) {
  // Colores del módulo académico
  const malagaBlue = "#a7d6f5"; // Azul Málaga CF
  const nasticRed = "#E30613"; // Rojo Gimnàstic de Tarragona
  const accentGreen = "#008012"; // Verde de interfaz/supervivencia

  // Variantes de animación Framer Motion
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.15 },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Motion.div
      key="supervivencia-page"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`min-h-screen pt-[80px] pb-32 px-6 font-sans transition-colors duration-500 pointer-events-auto ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* ══ HEADER ══ */}
        <Motion.section
          variants={fadeIn}
          className="pt-12 pb-10 px-8 md:px-12 border-b-[10px] relative overflow-hidden mb-25 transition-colors duration-500"
          style={{
            backgroundColor: "transparent",
            color: currentTextColor,
            borderColor: currentTextColor,
          }}
        >
          <div className="relative z-10 flex flex-col gap-6">
            <span className="font-mono text-[12px] md:text-sm font-bold opacity-60 tracking-[0.3em] md:tracking-[0.5em] block text-center uppercase mt-6 md:mt-0">
              // ACADEMIC_MODULE: SURVIVAL_GAME
            </span>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black italic uppercase leading-[0.9] tracking-tighter break-words text-center">
              HONOR Y RENCOR: <br className="hidden md:block" />
              <span style={{ color: "#a7d6f5" }}>LA PESADILLA BLANQUIAZUL</span>
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mt-4">
              <div className="font-mono text-[10px] md:text-xs space-y-2 opacity-80 uppercase tracking-widest flex flex-col items-center md:items-start">
                <p className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 inline-block shrink-0"
                    style={{ backgroundColor: "#a7d6f5" }}
                  ></span>
                  <span>[ AUTHOR: DAVID_JIMENEZ ]</span>
                </p>
                <p className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 inline-block shrink-0"
                    style={{ backgroundColor: "#a7d6f5" }}
                  ></span>
                  <span>[ STATUS: SURVIVAL ]</span>
                </p>
              </div>
              <div
                className="w-fit mx-auto md:mx-0 text-center md:text-right font-mono text-[9.3px] sm:text-[10px] md:text-xs opacity-80 uppercase tracking-widest border-2 px-3 md:px-4 py-1.5 md:py-2 transition-colors duration-500"
                style={{ borderColor: currentTextColor }}
              >
                [ UNITY_ENGINE // DEVELOPMENT ]
              </div>
            </div>
          </div>
        </Motion.section>

        {/* ══ SECCIÓN 1: LORE DEL JUEGO ══ */}
        <Motion.section variants={fadeIn} className="mb-28">
          <div
            className="flex flex-wrap items-end justify-between border-b-4 pb-4 mb-12"
            style={{ borderColor: currentTextColor }}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] sm:text-xs px-2 py-1.5 sm:px-2 sm:py-1 bg-red-700 text-white font-black animate-pulse tracking-tighter sm:tracking-normal inline-block text-center max-w-[110px] sm:max-w-none leading-tight sm:leading-normal">
                [ADVERTENCIA: <br className="block sm:hidden" /> LOCURA]
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tighter uppercase font-mono italic pr-2 sm:pr-0">
                HOJAS_ARRANCADAS // DÍA_22
              </h2>
            </div>
            <div className="font-mono text-[10px] opacity-40 tracking-widest uppercase hidden md:block">
              [ REGISTRO RECUPERADO DE LA CABAÑA EN EL BOSQUE DE LA PERDICIÓN ]
            </div>
          </div>

          {/* Contenedor Doble Página: Simula un libro físico abierto */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 divide-y-2 lg:divide-y-0 lg:divide-x-2 transition-colors duration-500"
            style={{ borderColor: currentTextColor }}
          >
            {/* PÁGINA IZQUIERDA: DIARIO ESCRITO */}
            <div className="lg:col-span-7 p-6 md:p-8 space-y-8 min-h-[600px] flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex justify-between items-center font-mono text-[11px] opacity-50 border-b border-dashed pb-2">
                  <span># NOTA_ENCUENTRO_01</span>
                  <span style={{ color: "#a7d6f5" }}>M122.LOG</span>
                </div>

                <p className="text-base sm:text-lg md:text-2xl leading-snug sm:leading-relaxed md:leading-none font-black italic tracking-tight uppercase">
                  El mundo que conocías se detuvo para siempre en el{" "}
                  <span style={{ color: "#a7d6f5" }}>minuto 122</span>.
                  Despiertas con el eco de un rugido de estadio vibrando en tus
                  oídos, tendido sobre el suelo de una cabaña de troncos que
                  cruje con un viento gélido.
                </p>

                <p className="text-sm leading-relaxed font-mono opacity-80 border-l-2 pl-4 italic border-zinc-500">
                  Al mirar por la ventana, la realidad ha sido sustituida por un
                  atardecer rojizo y eterno que tiñe el bosque de un color
                  sangre; es un clima pesado y sobrenatural donde el sol parece
                  clavado en el horizonte, negándose a morir.
                </p>

                <p className="text-sm leading-relaxed font-sans opacity-90">
                  Tras el heroico ascenso del Málaga CF, el rencor acumulado de
                  los vencidos ha fracturado la existencia, arrastrándote al{" "}
                  <span className="font-mono font-bold text-red-500">
                    [BOSQUE DE LA PERDICIÓN]
                  </span>
                  . Aquí, bajo un cielo rojizo que nunca oscurece del todo, los{" "}
                  <span className="font-bold">"Nastiqueros"</span> acechan entre
                  las sombras alargadas, esperando el momento de cobrarse su
                  venganza. Estás solo, sin cobertura ni esperanza de auxilio,
                  en una tierra que te odia por haber vencido.
                </p>
              </div>

              {/* REJILLA DE CRAFTEO: Mecánica e Interacción de la cabaña */}
              <div className="pt-6 border-t-2 border-dashed border-zinc-700/50">
                <div className="font-mono text-[10px] font-bold uppercase mb-3 flex justify-between items-center">
                  <span style={{ color: "#a7d6f5" }}>
                    [ ESQUEMA_DE_MESA // CONDICIÓN_DE_ESCAPE ]
                  </span>
                  <span className="text-red-500">¿CÓMO VOLVER?</span>
                </div>

                <p className="text-xs font-mono mb-4 opacity-80 leading-relaxed">
                  Tu vida ahora se mide en cuatro constantes vitales: Hambre,
                  Sed, Sueño y Vida. Tu única aliada es una{" "}
                  <span className="font-bold underline">chimenea normal</span>{" "}
                  cuya llama naranja es la última barrera de cordura frente a la
                  locura del exterior. Debes cazar, recolectar agua y buscar
                  leña bajo ese sol sangriento, gestionando tus recursos en la
                  mesa de madera y descansando en la vieja cama para no perder
                  la mente. Deberas de buscar poniendio tu vida en juego la
                  forma de poder de escapar de ese bosque para poder volver a tu
                  casa.
                </p>

                <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                  {[
                    { img: iconoComida, tag: "NUT", name: "COMIDA" },
                    { img: iconoBebida, tag: "HYD", name: "BEBIDA" },
                    { img: iconoSueno, tag: "ZZ", name: "SUEÑO" },
                    { img: iconoSalud, tag: "VIT", name: "SALUD" },
                    { img: iconoHuir, tag: "EX", name: "HUIR" },
                  ].map((slot, idx) => (
                    <div
                      key={idx}
                      className={`border-2 h-[95px] flex flex-col items-center justify-center text-center font-mono text-[9px] sm:text-[10px] relative transition-colors overflow-hidden ${
                        idx === 4
                          ? "border-red-600 bg-red-950/20 text-red-500"
                          : isDark
                            ? "border-zinc-800 bg-zinc-950"
                            : "border-zinc-300 bg-zinc-100"
                      }`}
                    >
                      <span className="absolute top-1 right-1 opacity-30 text-[7px] font-bold leading-none select-none">
                        {slot.tag}
                      </span>

                      <img
                        src={slot.img}
                        alt={slot.name}
                        className={`w-12 h-12 object-contain max-w-full max-h-full z-10 ${idx === 4 ? "filter invert sepia-[100%] saturate-[1000%] hue-rotate-[315deg]" : "opacity-95"}`}
                      />

                      <span className="absolute bottom-1 left-0 right-0 font-black tracking-tighter leading-none break-words px-0.5 select-none">
                        {slot.name}
                      </span>

                      {/* Puntito azul */}
                      {idx !== 4 && (
                        <div
                          className="absolute top-0.5 left-0.5 sm:top-auto sm:left-auto sm:right-0.5 sm:bottom-0.5 w-1 h-1 z-0"
                          style={{ backgroundColor: "#a7d6f5" }}
                        />
                      )}

                      {/* Interrogante rojo */}
                      {idx === 4 && (
                        <span className="absolute top-0 left-0.5 sm:top-auto sm:left-auto sm:right-0.5 sm:bottom-0 font-bold text-red-600 text-[11px] animate-ping z-0">
                          ?
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PÁGINA DERECHA: CROQUIS / MAPA DE PRESIÓN & CONSTANTES */}
            <div className="lg:col-span-5 p-6 md:p-8 space-y-8 flex flex-col justify-between min-h-[600px]">
              <div className="space-y-3">
                <div className="font-mono text-[10px] font-bold flex justify-between items-center opacity-60">
                  <span>[ CROQUIS_FOTOGRÁFICO ]</span>
                  <span className="text-red-500 font-mono">CRUDE_RENDER</span>
                </div>

                <div
                  className={`border-4 p-2 relative ${isDark ? "bg-zinc-950 border-black" : "bg-white border-zinc-300"}`}
                >
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-white font-bold bg-black/80 px-1.5 py-0.5">
                    ¿REAL?
                  </div>

                  <img
                    src={Logo}
                    alt="Cartografía del Bosque de la Perdición"
                    className="w-full h-auto object-cover aspect-[4/3] border border-zinc-800"
                  />

                  <div className="pt-2 font-mono text-[8px] opacity-40 flex justify-between">
                    <span>REG: HORIZONTE_SANGRE</span>
                    <span>ERROR_RENDER_NAV</span>
                  </div>
                </div>
              </div>

              {/* ESTADO MENTAL / CONSTANTES VITALES */}
              <div
                className={`p-4 border-2 border-red-900/40 font-mono text-xs space-y-4 ${isDark ? "bg-red-950/5" : "bg-zinc-50"}`}
              >
                <div className="flex justify-between items-center border-b border-zinc-700/30 pb-2">
                  <span className="font-black text-red-600 tracking-wider">
                    // CHEQUEO_DE_CARNE
                  </span>
                  <span className="text-[10px] text-zinc-500">
                    SISTEMA APAGÁNDOSE
                  </span>
                </div>

                <div className="space-y-3 text-[11px]">
                  {[
                    {
                      name: "HAMBRE",
                      status: "MUERTO DE HAMBRE",
                      detail: "[ COMER BOCADILLO ]",
                      color: "inherit",
                    },
                    {
                      name: "SED",
                      status: "SEDIENTO",
                      detail: "[ NO HAS BEBIDO EN HORAS ]",
                      color: "#a7d6f5",
                    },
                    {
                      name: "SUEÑO",
                      status: "LOCURA",
                      detail: "[ NO HAS DORMIDO EN HORAS ]",
                      color: "#a7d6f5",
                    },
                    {
                      name: "VIDA",
                      status: "CRÍTICO",
                      detail:
                        "[ TE AGITA EL CORAZÓN TRAS LO VIVIDO EN EL 124 ]",
                      color: "inherit",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col border-b border-zinc-800/10 dark:border-zinc-800/60 pb-1.5"
                    >
                      <div className="flex justify-between items-center font-bold">
                        <span className="flex items-center gap-1">
                          » {item.name}
                        </span>
                        <span style={{ color: item.color }}>{item.status}</span>
                      </div>
                      <span className="text-[9px] opacity-40 italic tracking-tight">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center font-mono text-[10px] opacity-30 uppercase tracking-tighter pt-4 border-t border-dashed border-zinc-500/30">
                NO REVOLVER LAS PÁGINAS // EL BOSQUE ESCUCHA EL RENCOR
              </div>
            </div>
          </div>
        </Motion.section>

        <BosqueSeparador
          bocataImg={iconoSalud}
          playerImg={playerSprite}
          enemyImg={enemySprite}
          isDark={isDark}
        />

        {/* ══ SECCIÓN 3: MALETIN DE CONCEPTOS ══ */}
        <Motion.section variants={fadeIn} className="mt-24 mb-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-6 w-2" style={{ backgroundColor: malagaBlue }} />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black italic tracking-tighter uppercase font-mono">
              Maletin de conceptos del videojuego de supervivencia
            </h2>
          </div>

          {/* Contenedor del Maletín: Rejilla base de celdas RE style */}
          <div
            className={`p-4 border-4 bg-grid-pattern relative min-h-[550px] grid grid-cols-2 md:grid-cols-4 gap-3 font-mono border-zinc-900 ${
              isDark ? "bg-zinc-950" : "bg-zinc-100"
            }`}
            style={{
              backgroundImage: isDark
                ? "radial-gradient(circle, #3f3f46 1px, transparent 1px), linear-gradient(to right, rgba(63,63,70,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(63,63,70,0.3) 1px, transparent 1px)"
                : "radial-gradient(circle, #a1a1aa 1px, transparent 1px), linear-gradient(to right, rgba(24,24,27,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.08) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          >
            <div className="absolute inset-0 border border-zinc-500/20 pointer-events-none m-1" />

            {[
              {
                num: "3x2",
                title: "INVENTARIO DINÁMICO",
                desc: "Sistema modular con apilamiento automático y menú de inspección interactivo. Al seleccionar un objeto, el gameloop permite consumirlo para recuperar vida, comer, beber o dormir. Incluye mecánicas de descarte para soltar y reinstanciar ítems físicamente en el mapa.",
                gridClass: isDark
                  ? "col-span-2 md:col-span-3 md:row-span-2 border-emerald-600/60 bg-emerald-950/10 dark:bg-emerald-950/20 text-emerald-500 hover:bg-emerald-950/30"
                  : "col-span-2 md:col-span-3 md:row-span-2 border-emerald-700 bg-emerald-100/95 text-emerald-900 hover:bg-emerald-200/95",
                size: "[🟢 ITEM_PRINCIPAL]",
              },
              {
                num: "1x2",
                title: "RAYCAST INTELIGENTE",
                desc: "Optimización de escaneo. Detecta si apuntamos a un objeto recolectable calculando la física del rayo únicamente 2 veces por segundo, reduciendo el impacto en el procesador.",
                gridClass: isDark
                  ? "col-span-2 md:col-span-1 md:row-span-2 border-amber-600/60 bg-amber-950/10 dark:bg-amber-950/20 text-amber-500 hover:bg-amber-950/30"
                  : "col-span-2 md:col-span-1 md:row-span-2 border-amber-600 bg-amber-100/95 text-amber-900 hover:bg-amber-200/95",
                size: "[🟡 AMMO_SLOT]",
              },
              {
                num: "2x2",
                title: "DISEÑO DE DATOS: SCRIPTABLEOBJECTS",
                desc: (
                  <div className="flex flex-col justify-between h-full space-y-3">
                    <p className="leading-relaxed">
                      Fichas técnicas que almacenan en el disco duro los datos
                      fijos (Nombre, Icono, Tipo) una sola vez. Los objetos del
                      juego solo leen esta plantilla, evitando saturar la
                      memoria RAM de forma redundante y optimizando las llamadas
                      de instanciación.
                    </p>
                    <div
                      className={`p-2 border rounded border-dashed text-[11px] space-y-1 font-mono mt-1 ${
                        isDark
                          ? "border-sky-500/30 bg-sky-950/30"
                          : "border-sky-400/40 bg-sky-50/60"
                      }`}
                    >
                      <div className="flex justify-between">
                        <span className="opacity-50">MEM_ADDRESS:</span>
                        <span className="font-bold">0x7FFF8A3C</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-50">DATA_STRUCTURE:</span>
                        <span className="font-bold">STATIC_TEMPLATE</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-50">STATUS:</span>
                        <span className="font-bold animate-pulse text-sky-500 dark:text-sky-400">
                          ● CACHED_READY
                        </span>
                      </div>
                    </div>
                  </div>
                ),
                gridClass: isDark
                  ? "col-span-2 md:col-span-2 md:row-span-2 border-sky-600/60 bg-sky-950/10 dark:bg-sky-950/20 text-sky-400 hover:bg-sky-950/30"
                  : "col-span-2 md:col-span-2 md:row-span-2 border-sky-600 bg-sky-100/95 text-sky-900 hover:bg-sky-200/95",
                size: "[🔵 EQUIP_TOOL]",
              },
              {
                num: "2x1",
                title: "INPUT PERSONALIZADO",
                desc: "Estructura de controles específicos desacoplados. Permite remapear o expandir el mapeo de teclas de supervivencia de manera ágil sin alterar los scripts principales.",
                gridClass: isDark
                  ? "col-span-2 md:col-span-2 md:row-span-1 border-red-600/60 bg-red-950/10 dark:bg-red-950/20 text-red-500 hover:bg-red-950/30"
                  : "col-span-2 md:col-span-2 md:row-span-1 border-red-600 bg-red-100/95 text-red-900 hover:bg-red-200/95",
                size: "[🔴 KEY_ITEM]",
              },
              {
                num: "1x1",
                title: "PELIGROS CONSTANTES",
                desc: "Amenazas en el mapa con feedback visual inmediato en el HUD al recibir daño.",
                gridClass: isDark
                  ? "col-span-1 md:col-span-1 md:row-span-1 border-rose-700/60 bg-rose-950/10 dark:bg-rose-950/20 text-rose-400 hover:bg-rose-950/30"
                  : "col-span-1 md:col-span-1 md:row-span-1 border-rose-600 bg-rose-100/95 text-rose-900 hover:bg-rose-200/95",
                size: "[💀 HAZARD]",
              },
              {
                num: "1x1",
                title: "ALTO RENDIMIENTO",
                desc: "Optimización CPU/RAM total mediante ScriptableObjects y control desacoplado.",
                gridClass: isDark
                  ? "col-span-1 md:col-span-1 md:row-span-1 border-violet-600/60 bg-violet-950/10 dark:bg-violet-950/20 text-violet-400 hover:bg-violet-950/30"
                  : "col-span-1 md:col-span-1 md:row-span-1 border-violet-600 bg-violet-100/95 text-violet-900 hover:bg-violet-200/95",
                size: "[⚡ PERF]",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-4 border-2 flex flex-col justify-between relative backdrop-blur-[1px] transition-all duration-200 cursor-help group hover:scale-[1.01] hover:shadow-lg ${item.gridClass}`}
              >
                <div className="flex justify-between items-center text-[9px] font-bold tracking-wider opacity-60 border-b border-current pb-1.5 mb-2">
                  <span>{item.size}</span>
                  <span>SIZE_{item.num}</span>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-tighter italic leading-none">
                      {item.title}
                    </h3>
                    <div
                      className={`text-[12px] md:text-[13px] leading-tight font-sans tracking-normal font-medium mt-3 ${
                        isDark
                          ? "opacity-90 dark:text-zinc-200"
                          : "text-zinc-800"
                      }`}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>

                <div className="w-full flex items-center justify-between text-[8px] opacity-40 pt-2 border-t border-dashed border-current mt-4">
                  <span>RE_ENGINE_SYS</span>
                  <span className="animate-pulse">● LOADED</span>
                </div>
              </div>
            ))}
          </div>
        </Motion.section>

        <BosqueSeparador
          bocataImg={iconoSueno}
          playerImg={playerSprite}
          enemyImg={enemySprite}
          isDark={isDark}
        />

        {/* ══ SECCIÓN 3: CONOCIMIENTOS ADQUIRIDOS ══ */}
        <Motion.section variants={fadeIn} className="mt-24 mb-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-6 w-2" style={{ backgroundColor: malagaBlue }} />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black italic tracking-tighter uppercase font-mono">
              Aprendizajes completados en el desarrollo del videojuego de
              supervivencia
            </h2>
          </div>

          {/* Contenedor estilo Libreta de Campo / The Forest */}
          <div
            className={`p-6 md:p-8 border-4 border-zinc-900 relative font-mono shadow-2xl ${
              isDark
                ? "bg-zinc-900/40 border-t-zinc-800 border-b-zinc-950"
                : "bg-amber-50/60 border-t-amber-100/50 border-b-zinc-400"
            }`}
          >
            <div className="absolute left-3 top-0 bottom-0 w-0.5 border-l border-dashed border-current opacity-20 pointer-events-none" />

            <div className="pl-4 space-y-8">
              <div className="border-b-2 border-current pb-2 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-50 block">
                  SURVIVAL_MANUAL_v1.0
                </span>
                <h3 className="text-lg md:text-xl font-black italic uppercase tracking-tight">
                  Tareas de Desarrollo Completadas
                </h3>
              </div>

              <div className="group flex items-start gap-4 transition-all">
                <div
                  className={`mt-0.5 w-5 h-5 flex items-center justify-center border-2 border-current rounded-sm shrink-0 font-sans font-black text-sm relative ${
                    isDark
                      ? "bg-zinc-950 text-emerald-400"
                      : "bg-white text-emerald-700"
                  }`}
                >
                  <span className="absolute -top-[3px] scale-125 select-none animate-fade-in">
                    ✓
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-black uppercase tracking-tight line-through opacity-60">
                    DISEÑO DE INVENTARIO INTELIGENTE
                  </h4>
                  <p
                    className={`text-[13px] md:text-[14px] leading-relaxed font-sans font-medium mt-1.5 ${
                      isDark ? "text-zinc-300" : "text-zinc-800"
                    }`}
                  >
                    Capacidad para estructurar e implementar mi primer
                    inventario modular interactivo donde los objetos se
                    almacenan, gestionan y consumen de forma lógica. Este
                    sistema sienta las bases arquitectónicas definitivas que
                    reutilizaré para desarrollar el sistema de minimapa en
                    futuros proyectos.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 transition-all">
                <div
                  className={`mt-0.5 w-5 h-5 flex items-center justify-center border-2 border-current rounded-sm shrink-0 font-sans font-black text-sm relative ${
                    isDark
                      ? "bg-zinc-950 text-emerald-400"
                      : "bg-white text-emerald-700"
                  }`}
                >
                  <span className="absolute -top-[3px] scale-125 select-none">
                    ✓
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-black uppercase tracking-tight line-through opacity-60">
                    MAPEADO DE INPUT PERSONALIZADO
                  </h4>
                  <p
                    className={`text-[13px] md:text-[14px] leading-relaxed font-sans font-medium mt-1.5 ${
                      isDark ? "text-zinc-300" : "text-zinc-800"
                    }`}
                  >
                    Creación desde cero de un mapa de controles nativo e
                    independiente. He configurado la lectura de acciones
                    adaptada totalmente a mis preferencias de gameplay,
                    integrando soporte híbrido instantáneo para alternar de
                    forma fluida entre teclado/ratón y mando de consola.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 transition-all">
                <div
                  className={`mt-0.5 w-5 h-5 flex items-center justify-center border-2 border-current rounded-sm shrink-0 font-sans font-black text-sm relative ${
                    isDark
                      ? "bg-zinc-950 text-emerald-400"
                      : "bg-white text-emerald-700"
                  }`}
                >
                  <span className="absolute -top-[3px] scale-125 select-none">
                    ✓
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-black uppercase tracking-tight line-through opacity-60">
                    OPTIMIZACIÓN ABSOLUTA DEL ENTORNO
                  </h4>
                  <p
                    className={`text-[13px] md:text-[14px] leading-relaxed font-sans font-medium mt-1.5 ${
                      isDark ? "text-zinc-300" : "text-zinc-800"
                    }`}
                  >
                    Desacoplamiento total del motor lógico mediante código
                    optimizado de alto rendimiento. He controlado las llamadas
                    de actualización (Update loops) de manera tan estricta que
                    el videojuego mantiene una estabilidad rocosa, reduciendo el
                    cuello de botella para asegurar cero caídas de FPS durante
                    la sesión de juego.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 transition-all">
                <div
                  className={`mt-0.5 w-5 h-5 flex items-center justify-center border-2 border-current rounded-sm shrink-0 font-sans font-black text-sm relative ${
                    isDark
                      ? "bg-zinc-950 text-emerald-400"
                      : "bg-white text-emerald-700"
                  }`}
                >
                  <span className="absolute -top-[3px] scale-125 select-none">
                    ✓
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-black uppercase tracking-tight line-through opacity-60">
                    SISTEMA DE PELIGROS CON FEEDBACK
                  </h4>
                  <p
                    className={`text-[13px] md:text-[14px] leading-relaxed font-sans font-medium mt-1.5 ${
                      isDark ? "text-zinc-300" : "text-zinc-800"
                    }`}
                  >
                    Implementación de colliders y objetos nocivos distribuidos
                    por el mapa bajo un estricto filtrado de físicas de
                    colisión. Si el jugador entra en contacto con ellos, el
                    sistema procesa el daño de manera óptima e inyecta
                    inmediatamente una respuesta visual reactiva directo al HUD
                    para alertar de la amenaza.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-between text-[7.5px] sm:text-[9px] opacity-30 pt-4 border-t border-dashed border-current mt-8 pl-4">
              <span>CAMP_LOG_BOOK_REPLICATED</span>
              <span>STATUS: ALL_OBJECTIVES_MET</span>
            </div>
          </div>
        </Motion.section>

        <BosqueSeparador
          bocataImg={iconoBebida}
          playerImg={playerSprite}
          enemyImg={enemySprite}
          isDark={isDark}
        />

        {/* ══ SECCIÓN 4: DESCARGA EL JUEGO ══ */}
        <Motion.section
          variants={fadeIn}
          className={`my-20 p-8 md:p-12 border-[4px] border-dashed text-center relative overflow-hidden transition-all duration-300 ${
            isDark
              ? "bg-stone-950 border-red-700/60 shadow-[inset_0_0_40px_rgba(0,0,0,1),0_0_20px_rgba(185,28,28,0.1)] text-red-500"
              : "bg-orange-50/60 border-red-800 text-red-950 shadow-[inset_0_0_20px_rgba(153,27,27,0.05)]" // MODO CLARO: Efecto documento/expediente de terror
          }`}
        >
          {/* Línea superior con patrón de peligro */}
          <div
            className="absolute top-0 left-0 w-full h-3 bg-stripes opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #991b1b 25%, transparent 25%, transparent 50%, #991b1b 50%, #991b1b 75%, transparent 75%, transparent)",
              backgroundSize: "20px 20px",
            }}
          />

          <span
            className={`font-mono text-xs font-black tracking-widest block uppercase mb-6 animate-pulse ${
              isDark ? "text-red-600" : "text-red-800"
            }`}
          >
            ⚡ TRANSMISIÓN_INTERRUMPIDA // SEÑAL_DE_EMERGENCIA_LOCALIZADA
          </span>

          <h2
            className={`text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 font-mono ${
              isDark
                ? "text-stone-100 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]"
                : "text-stone-900"
            }`}
          >
            EL BOSQUE TE CONSUMIRA
          </h2>

          <p
            className={`max-w-2xl mx-auto text-[13px] md:text-[14px] leading-relaxed font-sans font-medium mt-6 mb-8 ${
              isDark ? "text-stone-300" : "text-stone-800"
            }`}
          >
            Escúchame bien: no hay margen de error. Si te quedas ahí quieto, el
            bosque te consumirá. Descarga la build ejecutable para PC, sobrevive
            y escapa de la forma mas rapida, organiza bien tu inventario con los
            objetos y sobre todo reza para que tus signos vitales te dure lo
            suficiente para escapar. Cada segundo que pasas leyendo esto, el
            bosque te consumirá mas rapido y no podras escapar nunca.
          </p>

          {/* ADVERTENCIA SMARTSCREEN ADAPTADA */}
          <div
            className={`max-w-xl mx-auto p-4 border rounded mb-8 text-left font-mono text-[11px] md:text-[12px] leading-tight shadow-md ${
              isDark
                ? "border-red-900/60 bg-black/90 text-stone-400 shadow-2xl"
                : "border-red-300 bg-red-50/90 text-stone-800" // MODO CLARO: Alerta corporativa limpia de peligro
            }`}
          >
            <div
              className={`flex items-center gap-2 font-black mb-2 border-b pb-1.5 ${
                isDark
                  ? "text-red-500 border-red-950"
                  : "text-red-700 border-red-200"
              }`}
            >
              <span
                className={`animate-ping h-2 w-2 rounded-full inline-block ${isDark ? "bg-red-500" : "bg-red-700"}`}
              />
              <span>[!] ALERTA DEL FIREWALL: CÓDIGO NO RECONOCIDO</span>
            </div>
            <p
              className={`font-sans font-medium ${isDark ? "text-stone-400" : "text-stone-700"}`}
            >
              El sistema Windows SmartScreen se volverá loco al lanzar la build
              y te bloqueará el archivo diciendo que es un{" "}
              <span
                className={`font-bold ${isDark ? "text-red-500" : "text-red-700"}`}
              >
                "archivo no seguro" o virus
              </span>
              . Es un falso positivo provocado porque este ejecutable casero de
              supervivencia no tiene una firma digital pagada a Microsoft. Está
              limpio. Si quieres ver lo que hay en la espesura, dale a{" "}
              <span
                className={`italic font-bold ${isDark ? "text-stone-200" : "text-stone-900"}`}
              >
                "Más información"
              </span>{" "}
              y luego fuerza el inicio en{" "}
              <span
                className={`italic font-bold ${isDark ? "text-stone-200" : "text-stone-900"}`}
              >
                "Ejecutar de todas formas"
              </span>
              . Bajo tu propio riesgo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://github.com/djsekai34/Afterbit/releases/download/SupervivenciaMalaga/HonoryRencorlapesadillablaquiazul.rar"
              className={`px-8 py-4 font-mono text-sm font-black uppercase tracking-wider transition-all duration-300 border-2 shadow-lg hover:scale-105 active:scale-95 ${
                isDark
                  ? "bg-red-900 text-stone-100 border-red-800 hover:bg-red-600 hover:border-red-500 shadow-[0_0_15px_rgba(153,27,27,0.4)]"
                  : "bg-red-800 text-white border-red-900 hover:bg-red-700 hover:border-red-600" // MODO CLARO: Botón integrado con contraste alto
              }`}
            >
              [ DESCARGAR VIDEOJUEGO.EXE ]
            </a>
          </div>
        </Motion.section>

        <BosqueSeparador
          bocataImg={iconoComida}
          playerImg={playerSprite}
          enemyImg={enemySprite}
          isDark={isDark}
        />
      </div>
    </Motion.div>
  );
}
