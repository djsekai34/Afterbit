import { motion as Motion, AnimatePresence} from "framer-motion";
import { useState } from "react";

// ASSETS
import DAFO_Dark from "../Imagenes/DAFO_Negro_Super_Rodolfo.png";
import DAFO_Light from "../Imagenes/DAFO_Blanco_Super_Rodolfo.png";
import CAME_Dark from "../Imagenes/Analisis_CAME_Negro_Super_Rodolfo.png";
import CAME_Light from "../Imagenes/Analisis_CAME_Blanco_Super_Rodolfo.png";
import Moodboard_Dark from "../Imagenes/GDD_Una_Hoja_Negro.jpg";
import Moodboard_Light from "../Imagenes/GDD_Una_Hoja_Blanco.jpg";

import RefImg1 from "../Imagenes/DBZ_Adventure.png";
import RefImg2 from "../Imagenes/Sonic.jpg";
import RefImg3 from "../Imagenes/MarioBros.png";
import RefImg4 from "../Imagenes/BT2.jpg";
import RefImg5 from "../Imagenes/Jaen.jpg"

// DEFINICIÓN DE ANIMACIONES REPLICADAS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FasePreproduccion = ({
  isDark,
  currentTextColor,
}) => {
  const accentGreen = "#008012";
  const [selectedRef, setSelectedRef] = useState(null);
  const [activeAnalysis, setActiveAnalysis] = useState("DAFO");


  const referentesData = [
    {
      id: 1,
      img: RefImg1,
      desc: "Juego de Dragon Ball Z lanzado en la GBA, donde hacemos una aventura en 2D lanzando ataques y derrotando enemigos.",
    },
    {
      id: 2,
      img: RefImg2,
      desc: "Como fan de Sonic, me inspire en el para hacer niveles con diferente alturas etc y que el juego tenga un estilo retro.",
    },
    {
      id: 3,
      img: RefImg3,
      desc: "El padre de los juegos de plataformas, el cual me inspiro para hacer un juego con ese estilo",
    },
    {
      id: 4,
      img: RefImg4,
      desc: "Mi videojuego mas jugado de dragon ball en mi infancia, el cual me inspiro para para el tema de los enemigos.",
    },
    {
      id: 5,
      img: RefImg5,
      desc: "Es la comarca donde vivo, por lo que utilizo distintos lugares como inspiración para ambientar el juego, basándome en el lore del Santo Reino de Jaén del siglo XIII.",
    },
  ];

  return (
    <Motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`min-h-screen pt-32 pb-20 px-4 md:px-12 lg:px-24 transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >

      {/* SECCIÓN: CABECERA */}
      <Motion.header
        variants={itemVariants}
        className="max-w-6xl mx-auto border-b-8 pb-8 mb-20"
        style={{ borderColor: currentTextColor }}
      >
        <span className="font-mono text-xs font-bold opacity-60 tracking-[0.4em] block mb-4 uppercase">
          // Documentación_Fase_02
        </span>
        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
          ANÁLISIS <span style={{ color: accentGreen }}>Y PREPRODUCCIÓN</span>
        </h1>
      </Motion.header>

      <div className="max-w-6xl mx-auto space-y-40">
        
        {/* SECCIÓN 1: ESTUDIO DE MERCADO */}
        <Motion.section
          variants={itemVariants}
          className="space-y-6 text-left mb-32 w-full"
        >
          <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">
            ESTUDIO DE <span style={{ color: accentGreen }}>MERCADO</span>
          </h2>
          <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
            <p>
              El proceso comenzó con un análisis exhaustivo del sector de los
              juegos de plataformas. Utilizando herramientas como{" "}
              <span style={{ color: accentGreen }}>Steam</span>, se evaluó el
              volumen de ventas y la media de usuarios activos para medir el
              interés comercial. Complementariamente, se exploró{" "}
              <span style={{ color: accentGreen }}>Itch.io</span> para identificar
              tendencias en la escena indie. Tras este análisis, se detectó una
              baja saturación de títulos con este estilo específico, revelando una{" "}
              <span style={{ color: accentGreen }} className="font-bold">
                oportunidad estratégica
              </span>{" "}
              para el éxito del proyecto.
            </p>
            
            <p>
              Tras el análisis del mercado hemos detectado que los jugadores de{" "}
              <span className="font-bold" style={{ color: accentGreen }}>7 años o más</span> (ya que es nuestro pegi) le gusta los videojuegos de acción y plataformas con un{" "}
              <span className="italic">lore divertido y curioso</span> con una jugabilidad fácil, corta y que sea agradable.
            </p>
          </div>

          <div className={`p-8 border-2 ${isDark ? "bg-zinc-900/30 border-zinc-800" : "bg-zinc-50 border-zinc-200"} rounded-sm relative overflow-hidden w-full`}>
            <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: accentGreen }} />
            <h4 className="font-mono text-sm font-bold mb-6 uppercase" style={{ color: accentGreen }}>
              // Análisis_Plataformas
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm font-bold italic uppercase">
              {[
                "Steam DB Metrics",
                "Itch.io Indie Trends",
                "Market Gap Analysis",
                "Player Retention Study",
              ].map((ref) => (
                <li key={ref} className="flex items-center gap-2">
                  <span style={{ color: accentGreen }}>›</span> {ref}
                </li>
              ))}
            </ul>
          </div>
        </Motion.section>

       {/* SECCIÓN 2: REFERENTES VISUALES */}
        <Motion.section variants={itemVariants} className="space-y-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-bold uppercase tracking-widest opacity-80">
                Referentes
              </h3>
              <div className="h-[1px] flex-grow bg-zinc-500/20"></div>
            </div>
            <p className={`text-lg leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
              Aqui puedes ver mis referentes que me ayudo a hacer{" "}
              <span className="font-bold" style={{ color: accentGreen }}>
                Super Rodolfo y las{" "}
              </span>
              <span className="font-bold" style={{ color: accentGreen }}>
                esferas del Santo Reino
              </span>
              , no dudes en <span className="italic">darle clic</span> a la
              imagen para saber mas.
            </p>
          </div>

          {/* CONTENEDOR FLEXIBLE: Centra los elementos sobrantes */}
          <div className="flex flex-wrap justify-center gap-4">
            {referentesData.map((ref) => (
              <div
                key={ref.id}
                onClick={() => setSelectedRef(selectedRef === ref.id ? null : ref.id)}
                className={`relative w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] aspect-square rounded-sm cursor-pointer border transition-all duration-300 overflow-hidden ${
                  selectedRef === ref.id
                    ? "border-green-500 ring-2 ring-green-500/20 scale-[1.02]"
                    : "border-zinc-500/10 opacity-80 hover:opacity-100"
                }`}
              >
                <img
                  src={ref.img}
                  alt="Referente"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${selectedRef !== ref.id ? "grayscale" : "grayscale-0"}`}
                />
              </div>
            ))}
          </div>

          <AnimatePresence>
            {selectedRef && (
              <Motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className={`p-6 border-l-4 font-mono text-sm ${isDark ? "bg-zinc-900/50 border-green-700" : "bg-zinc-50 border-green-600"}`}>
                  <span style={{ color: accentGreen }} className="font-bold uppercase tracking-tighter mr-2">
                    // INFO_REF:
                  </span>
                  {referentesData.find((r) => r.id === selectedRef)?.desc}
                </div>
              </Motion.div>
            )}
          </AnimatePresence>
        </Motion.section>

        {/* SECCIÓN 3: DIAGNÓSTICO ESTRATÉGICO (DAFO/CAME) */}
        <Motion.section variants={itemVariants} className="space-y-12">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between border-b border-zinc-500/20 pb-4">
              <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">
                Análisis <span style={{ color: accentGreen }}>Estratégico</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-2 mt-6 sm:mt-0">
                {["DAFO", "CAME"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveAnalysis(tab)}
                    className={`px-5 py-2 sm:px-6 sm:py-2 font-mono text-[10px] sm:text-xs font-bold transition-all duration-700 rounded-sm self-start sm:self-auto ${
                      activeAnalysis === tab
                        ? "bg-[#008012] text-white shadow-[0_0_12px_rgba(0,128,18,0.3)]"
                        : "bg-zinc-500/10 text-zinc-500 hover:bg-zinc-500/20"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2 flex flex-col justify-center space-y-8 min-h-full">
                <div className="space-y-6">
                  <AnimatePresence mode="wait">
                    <Motion.div
                      key={activeAnalysis}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-black italic uppercase tracking-tighter">
                        {activeAnalysis === "DAFO" ? "Análisis DAFO" : "Análisis CAME"}
                      </h3>
                      <p className={`text-lg leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                        {activeAnalysis === "DAFO"
                          ? "Identificación de fortalezas internas amenazas externas, debilidades personales y oportunidades para asegurar la viabilidad del videojuego."
                          : "Análisis concreto para Corregir, Afrontar, Mantener y Explotar los resultados obtenidos tanto del juego como personales."}
                      </p>

                      <Motion.a
                        href={activeAnalysis === "DAFO" ? (isDark ? DAFO_Dark : DAFO_Light) : (isDark ? CAME_Dark : CAME_Light)}
                        download={`Analisis_${activeAnalysis}_SuperRodolfo.png`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative inline-flex items-center gap-3 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] overflow-hidden group transition-all duration-300 border border-[#008012]/30"
                        style={{ backgroundColor: isDark ? "rgba(24, 24, 27, 0.5)" : "rgba(250, 250, 250, 0.5)" }}
                      >
                        <div className="absolute bottom-0 left-0 w-full h-0 bg-[#008012] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-full" style={{ zIndex: 0 }} />
                        <div className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:-translate-y-1">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          <span className="relative">
                            {activeAnalysis === "DAFO" ? "Descargar Informe DAFO" : "Descargar Informe CAME"}
                          </span>
                        </div>
                      </Motion.a>
                    </Motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="md:col-span-3">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={activeAnalysis}
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="relative"
                  >
                    <img
                      src={activeAnalysis === "DAFO" ? (isDark ? DAFO_Dark : DAFO_Light) : (isDark ? CAME_Dark : CAME_Light)}
                      alt={activeAnalysis}
                      className="w-full h-auto border border-zinc-500/10 rounded-sm shadow-2xl"
                    />
                  </Motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Motion.section>

        {/* SECCIÓN 4: MOODBOARD VISUAL (SCOUTER) */}
        <Motion.section
          variants={itemVariants}
          className="relative pt-10 pb-20 flex flex-col items-center justify-center overflow-hidden px-4"
        >
          <div className="mb-8 md:mb-12 text-center relative z-30">
            <h2 className={`text-3xl md:text-5xl font-black italic uppercase tracking-tighter flex flex-col items-center transition-all duration-300 ${isDark ? "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]" : "text-black"}`}>
              <span className="md:whitespace-nowrap">
                Moodboard <span style={{ color: accentGreen }}>Visual</span>
              </span>
            </h2>
            <p className={`mt-4 font-mono text-xs md:text-sm max-w-2xl mx-auto leading-relaxed transition-all duration-300 ${isDark ? "text-gray-200 drop-shadow-[0_2px_4px_rgba(0,0,0,1)] group-hover:text-white" : "text-gray-700 group-hover:text-black font-medium"}`}>
              Echa un vistazo al moodboard de{" "}
              <span style={{ color: accentGreen }} className="font-bold">Super Rodolfo y las Esferas del Santo Reino</span>, no dudes en poner el ratón encima para ver la sorpresa y poder descargarlo.
            </p>
          </div>

          <div className="relative group w-full max-w-5xl mx-auto p-1 md:p-4 cursor-none transition-transform duration-500 ease-out md:group-hover:scale-110">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-4 bg-yellow-400/20 blur-[40px] md:blur-[60px] animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-500/20 to-yellow-200/40 animate-[aura-flow_1.5s_infinite_linear] blur-xl" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay animate-[shake_0.1s_infinite]" />
            </div>

            <div className="absolute inset-0 border-2 border-[#008012]/30 rounded-[1.5rem] md:rounded-[2rem] pointer-events-none transition-all duration-200 group-hover:border-yellow-500 group-hover:opacity-0" />

            <div className="relative overflow-hidden rounded-xl border-2 md:border-4 border-[#008012]/20 group-hover:border-yellow-500 shadow-[0_0_20px_rgba(0,128,18,0.2)] md:shadow-[0_0_40px_rgba(0,128,18,0.2)] group-hover:shadow-[0_0_100px_rgba(234,179,8,0.6)] transition-all duration-200">
              <a href={isDark ? Moodboard_Dark : Moodboard_Light} download="SuperRodolfo_Moodboard" className="block relative z-10">
                <img
                  src={isDark ? Moodboard_Dark : Moodboard_Light}
                  alt="Moodboard"
                  className={`w-full h-auto transition-all duration-300 group-hover:saturate-[1.5] ${isDark ? "group-hover:brightness-125" : "group-hover:brightness-105"}`}
                />
              </a>

              <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none">
                <div className={`absolute inset-0 ${isDark ? "bg-white/20" : "bg-black/10"}`} style={{ clipPath: "polygon(48% 48%, 52% 48%, 100% 0, 100% 5%, 52% 52%, 55% 100%, 45% 100%, 48% 52%, 0 40%, 0 35%)" }} />
              </div>

              <div className="absolute inset-0 z-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-100">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-48 md:h-48 border-2 border-[#008012]/40 rounded-full animate-[ping_3s_infinite]" />
                <div className="absolute inset-0 bg-[#008012]/10" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#008012]/40 animate-[scan_2.5s_linear_infinite]" />
              </div>

              <div className="absolute inset-0 z-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none">
                <div className="text-white font-mono text-3xl md:text-6xl font-black italic drop-shadow-[0_0_15px_rgba(234,179,8,1)] animate-bounce text-center px-4">
                  OVER 9000!
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-50 flex items-end gap-1">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Motion.div
                  key={i}
                  animate={{ height: [10, 30, 10] }}
                  transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.05 }}
                  className="w-1 md:w-2 bg-[#008012] group-hover:bg-yellow-400 group-hover:shadow-[0_0_100px_rgba(234,179,8,1)] group-hover:animate-[shake_0.1s_infinite]"
                />
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes scan { 0% { top: 0%; } 100% { top: 100%; } }
            @keyframes aura-flow { 
              0% { transform: translateY(0%) scale(1); opacity: 0.5; }
              50% { transform: translateY(-5%) scale(1.1); opacity: 0.8; }
              100% { transform: translateY(-10%) scale(1.2); opacity: 0; }
            }
            @keyframes shake {
              0% { transform: translate(1px, 1px); }
              50% { transform: translate(-1px, -1px); }
              100% { transform: translate(1px, -1px); }
            }
          `}</style>
        </Motion.section>

        {/* SECCIÓN 5: PLAN DE FINANCIACIÓN */}
        <Motion.section
          variants={itemVariants}
          className="relative pt-10 md:pt-16 pb-20 md:pb-24 border-t border-zinc-500/10"
        >
          <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-16">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-xs font-mono uppercase tracking-[0.4em] text-zinc-500">
                Financial_Model
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-[#008012]/30" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
              Plan de <span style={{ color: accentGreen }}>Financiación</span>
            </h2>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="pt-0 md:pt-4 order-first lg:order-last">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008012]/10 border border-[#008012]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#008012] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: accentGreen }}>
                  Plan Estratégico
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                Sostenibilidad <br />
                <span style={{ color: accentGreen }}>del Desarrollo</span>
              </h2>

              <div className={`space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed max-w-2xl ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                <p>
                  El dinero para{" "}
                  <span style={{ color: accentGreen }} className="font-bold">
                    Super Rodolfo y las Esferas del Santo Reino
                  </span>{" "}
                  no surge del azar. Hemos investigado formas de financiación
                  para poder sacar el proyecto adelante.
                </p>
                <p>
                  Cada euro recolectado se invertirá en el desarrollo del
                  videojuego para asegurar su calidad y éxito en el mercado.
                </p>
              </div>
            </div>

            <div className={`p-6 md:p-10 rounded-2xl md:rounded-3xl border w-full ${isDark ? "bg-zinc-900/40 border-zinc-800" : "bg-white border-zinc-200 shadow-xl"}`}>
              <div className="mb-8 md:mb-10">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-2">
                  Funding_Sources
                </h3>
                <p className="text-2xl md:text-3xl font-black tracking-tight">
                  ¿Cómo se financia el <span style={{ color: accentGreen }}>Reino</span>?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  {
                    title: "01. KickStarter",
                    amount: "60%",
                    desc: "Ingresos que vendrán mediante donaciones que la gente desee aportar.",
                  },
                  {
                    title: "02. Dinero familiar",
                    amount: "40%",
                    desc: "Será el dinero que nos ayudará a pagar los gastos básicos durante el proceso.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`group p-5 md:p-6 rounded-xl md:rounded-2xl border transition-all duration-300 ${isDark ? "hover:bg-zinc-800/50 border-transparent" : "hover:bg-zinc-50 border-transparent"}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-black text-xs md:text-sm uppercase tracking-widest" style={{ color: accentGreen }}>
                        {item.title}
                      </span>
                      <span className={`text-lg md:text-xl font-black ${isDark ? "text-white" : "text-zinc-900"}`}>
                        {item.amount}
                      </span>
                    </div>
                    <p className={`text-xs md:text-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Motion.section>
      </div>
    </Motion.div>
  );
};

export default FasePreproduccion;