import React from "react";
import { motion as Motion } from "framer-motion";
import AfterbitFlowDiagram from "../components/DiagramaSR.jsx";

const AfterbitGDD = ({ isDark, currentTextColor }) => {
  const accentGreen = "#008012";

  // ANIMACIÓN ACTUALIZADA SEGÚN NARRATIVA
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  /*DATASET DE ESTADOS DEL SISTEMA */
  const estadosData = [
    {
      titulo: "Pantalla de Inicio (Splash Screen)",
      definicion: "Punto de entrada del juego.",
      queOcurre: "Logo de Afterbit Studio.",
      transicion: "Carga automática del Menú principal tras 5 segundos.",
    },
    {
      titulo: "Menú Principal",
      definicion: "Hub central de navegación del usuario.",
      queOcurre:
        "Interfaz con opciones interactivas: Historia, Selector de niveles, Créditos, Controles y Salida.",
      transicion:
        "Basada en selección: Historia → Gameplay | Selector de niveles → Niveles | Creditos → Creditos | Controles → Controles | Salir → Cierre.",
    },
    {
      titulo: "Selector de Nivel",
      definicion:
        "Selector de nivel que desee el usuario de los disponibles en el Santo Reino.",
      queOcurre: "Visualización de niveles disponibles en el Santo Reino.",
      transicion:
        "Selección → Gameplay | Creditos → Creditos | Atrás → Menú Principal.",
    },
    {
      titulo: "Pantallas de Información",
      definicion: "Estados de consulta (Créditos / Controles).",
      queOcurre:
        "Mapeo de teclas de Rodolfo (Shift, Q, Espacio, AD) y los creditos del videjuego.",
      transicion: "Botón Menú → Menú Principal.",
    },
    {
      titulo: "Gameplay (Juego Activo)",
      definicion:
        "Estado de ejecución del gameplay del videojuego con todas sus mecanicas.",
      queOcurre:
        "Rodolfo: Físicas de salto, combate  y recolección de esferas.",
      transicion:
        "ESC → Pausa | HP=0 → Muerte | Meta → Victoria/Siguiente Nivel.",
    },
    {
      titulo: "Estados de Finalización",
      definicion: "Resultados y suspensión del ciclo de juego.",
      queOcurre: "Gestión de victoria, derrota o interrupción voluntaria.",
      sublogica: [
        {
          subtitulo: "⏸️ PAUSA",
          info: "Reanudar | Reiniciar | Selector de nivel* | Menú Principal",
        },
        {
          subtitulo: "💀 MUERTE",
          info: "Reintentar | Selector de nivel* | Menú Principal",
        },
        {
          subtitulo: "🏆 VICTORIA",
          info: "Inmovilidad 5s + Bola Mágica → Siguiente Nivel / Selector de nivel*.",
        },
      ],
    },
  ];
  const titleColor = isDark ? "text-white" : "text-black";
  const headerLineColor = isDark ? "#ffffff" : currentTextColor;

  return (
    <Motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen pt-32 pb-20 px-4 md:px-12 lg:px-24 transition-colors duration-500 ${isDark ? "bg-black" : "bg-white"}`}
    >
      {/* HEADER DE DOCUMENTACIÓN */}
      <Motion.header
        variants={itemVariants}
        className="max-w-6xl mx-auto border-b-8 pb-8 mb-24"
        style={{ borderColor: headerLineColor }}
      >
        <span
          className={`font-mono text-xs font-bold opacity-60 tracking-[0.4em] block mb-4 uppercase ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
        >
          // Documentación_Fase_05
        </span>
        <h1
          className={`text-4xl md:text-6xl font-black italic uppercase tracking-tighter ${titleColor}`}
        >
          ESTADOS DEL <span style={{ color: accentGreen }}>VIDEOJUEGO</span>
        </h1>
      </Motion.header>

      <div className="max-w-6xl mx-auto space-y-12 px-4 py-10">
        {/* SECCIÓN: ESTADOS DE SUPER RODOLFO */}
        <Motion.div variants={itemVariants} className="mb-12">
          <h2
            className={`text-3xl md:text-3xl font-black uppercase tracking-tighter ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            Estados de <span style={{ color: accentGreen }}>Super Rodolfo</span>{" "}
            y las esferas del{" "}
            <span style={{ color: accentGreen }}>Santo Reino</span>
          </h2>
        </Motion.div>

        {/* METADATOS DEL SISTEMA */}
        <Motion.div
          variants={itemVariants}
          className="flex items-center justify-between mb-8 border-b border-zinc-500/10 pb-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <div
                className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`}
              ></div>
              <div
                className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`}
              ></div>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">
              System_State_Architecture
            </span>
          </div>
          <span className="font-mono text-[9px] text-green-500/50 hidden sm:block tracking-[0.2em]">
            KERNEL_V2.6 // 2026
          </span>
        </Motion.div>

        {/* GRID DE ESTADOS (CARDS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {estadosData.map((estado, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              className={`group relative transition-all duration-500 shadow-xl flex flex-col min-h-[480px] ${
                isDark ? "hover:shadow-green-500/5" : "hover:shadow-zinc-200"
              }`}
            >
              {/* Glow Effect en el borde al hacer hover */}
              <div
                className={`absolute -inset-[1px] opacity-20 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDark
                    ? "bg-gradient-to-br from-green-500 via-transparent to-zinc-800"
                    : "bg-gradient-to-br from-green-600 via-transparent to-zinc-300"
                }`}
              />

              <div
                className={`relative h-full flex flex-col p-8 flex-grow ${
                  isDark ? "bg-[#09090b]" : "bg-white"
                }`}
              >
                {/* ID Badge */}
                <div
                  className={`absolute top-0 right-0 px-4 py-2 font-mono text-[10px] border-b border-l ${
                    isDark
                      ? "border-zinc-800 text-zinc-600"
                      : "border-zinc-100 text-zinc-400"
                  }`}
                >
                  ID: 00{index + 1}
                </div>

                {/* Título de la Card */}
                <div className="mb-8">
                  <h3
                    className={`font-black text-2xl tracking-tighter uppercase mb-2 ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {estado.titulo}
                  </h3>
                  <div className="w-12 h-1 bg-green-500"></div>
                </div>

                <div className="flex-grow flex flex-col">
                  <div className="space-y-8 flex-grow">
                    {/* Definición Principal */}
                    <section>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-green-500 block mb-2 opacity-80">
                        / Log_Definition
                      </span>
                      <p
                        className={`text-[13px] leading-relaxed font-medium ${
                          isDark ? "text-zinc-400" : "text-zinc-600"
                        }`}
                      >
                        {estado.definicion}
                      </p>
                    </section>

                    {/* Lógica condicional: Sub-estados o Stimulus */}
                    {estado.sublogica ? (
                      <div className="space-y-3">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-green-500 block mb-2 opacity-80">
                          / Sub_Logic_Flow
                        </span>
                        <div className="grid grid-cols-1 gap-2">
                          {estado.sublogica.map((sub, i) => (
                            <div
                              key={i}
                              className={`p-4 border group/item transition-colors ${
                                isDark
                                  ? "bg-zinc-900/30 border-zinc-800 hover:bg-zinc-900/60"
                                  : "bg-zinc-50 border-zinc-100 hover:bg-zinc-100/50"
                              }`}
                            >
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-black text-[10px] text-green-500 uppercase tracking-tighter">
                                  {sub.subtitulo}
                                </span>
                                <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
                              </div>
                              <p
                                className={`text-[11px] leading-snug font-medium ${
                                  isDark ? "text-zinc-300" : "text-zinc-700"
                                }`}
                              >
                                {sub.info.split("*").map((text, idx, arr) => (
                                  <React.Fragment key={idx}>
                                    {text}
                                    {idx < arr.length - 1 && (
                                      <span className="text-green-500 font-bold">
                                        *
                                      </span>
                                    )}
                                  </React.Fragment>
                                ))}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Nota especial para Finalización */}
                        {estado.titulo === "Estados de Finalización" && (
                          <div
                            className={`mt-4 p-3 border-l-2 border-green-500 font-mono ${
                              isDark
                                ? "bg-green-500/5 text-zinc-500"
                                : "bg-green-50 text-zinc-500"
                            }`}
                          >
                            <p className="text-[9px] leading-tight uppercase">
                              <span className="text-green-500 font-bold mr-1">
                                [!]
                              </span>
                              La ejecución del{" "}
                              <span
                                className={
                                  isDark ? "text-zinc-300" : "text-zinc-700"
                                }
                              >
                                "Selector de nivel*"
                              </span>{" "}
                              requiere inicialización previa del nivel desde el
                              selector.
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Bloque Stimulus Detection (para las que no tienen sublogica) */
                      <div
                        className={`relative p-5 border ${
                          isDark
                            ? "bg-black/40 border-zinc-800"
                            : "bg-zinc-50 border-zinc-200"
                        }`}
                      >
                        <span className="font-mono text-[9px] text-zinc-500 block mb-2 tracking-tighter">
                          {`> STIMULUS_DETECTION`}
                        </span>
                        <p
                          className={`text-[13px] font-bold italic ${
                            isDark ? "text-zinc-100" : "text-zinc-800"
                          }`}
                        >
                          "{estado.queOcurre}"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Espaciador dinámico */}
                  {!estado.sublogica && <div className="h-12 flex-grow"></div>}

                  {/* Footer de Card: Transition Logic (Solo si no es Finalización) */}
                  {!estado.sublogica && (
                    <div
                      className={`pt-6 border-t ${
                        isDark ? "border-zinc-800" : "border-zinc-100"
                      }`}
                    >
                      {/* flex-col en móvil / md:flex-row en PC */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0 group/logic">
                        {/* Etiqueta Transition_Logic */}
                        <div className="flex items-center gap-2 md:mr-12">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              isDark ? "bg-zinc-700" : "bg-zinc-300"
                            }`}
                          ></div>
                          <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 whitespace-nowrap">
                            Transition_Logic
                          </span>
                        </div>

                        {/* Recuadro de contenido: Ocupa todo el ancho en móvil, se ajusta a la derecha en PC */}
                        <div
                          className={`relative px-4 py-1.5 overflow-hidden transition-all duration-300 w-full md:w-auto md:max-w-fit md:ml-auto ${
                            isDark
                              ? "bg-green-500/5 border-green-500/20"
                              : "bg-green-50 border-green-600/10"
                          } border`}
                        >
                          <div className="absolute top-0 left-0 w-[2px] h-full bg-green-500"></div>
                          <span
                            className={`font-mono text-[10px] font-black uppercase tracking-tighter block md:inline ${
                              isDark ? "text-green-400" : "text-green-700"
                            }`}
                          >
                            {`> `}
                            {estado.transicion
                              .split("*")
                              .map((text, idx, arr) => (
                                <React.Fragment key={idx}>
                                  {text}
                                  {idx < arr.length - 1 && (
                                    <span className="text-green-500 font-bold">
                                      *
                                    </span>
                                  )}
                                </React.Fragment>
                              ))}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Decoración SVG Afterbit en la esquina */}
              <div
                className={`absolute bottom-0 right-0 w-6 h-6 ${
                  isDark ? "text-zinc-800" : "text-zinc-200"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M24 14V24H14" />
                </svg>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* VISUALIZADOR TÉCNICO: DIAGRAMA DE FLUJO */}
        <Motion.div variants={itemVariants} className="pt-32 pb-20">
          <div className="flex flex-col items-center mb-16">
            <h2
              className={`text-2xl md:text-3xl font-black uppercase tracking-[0.2em] text-center mb-4 ${isDark ? "text-white" : "text-zinc-900"}`}
            >
              Diagrama de{" "}
              <span style={{ color: accentGreen }}>Flujo de Datos</span>
            </h2>

            <div className="flex items-center gap-2 mt-4">
              <div
                className="w-2 h-2 rotate-45 animate-pulse"
                style={{ backgroundColor: accentGreen }}
              ></div>
              <div
                className={`h-px w-32 ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`}
              ></div>
              <div
                className="w-2 h-2 rotate-45 animate-pulse"
                style={{ backgroundColor: accentGreen }}
              ></div>
            </div>
          </div>

          {/* INTEGRACIÓN DEL COMPONENTE REACT FLOW */}
          <div className="w-full h-full min-h-[400px] flex items-center justify-center -mt-10">
            <AfterbitFlowDiagram isDark={isDark} />
          </div>

          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="flex gap-4">
              <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500">
                Status: <span className="text-green-500">Full_Access</span>
              </span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500">
                Protocol: <span className="text-green-500">SR-256</span>
              </span>
            </div>
            <p
              className={`text-[7px] font-mono italic uppercase tracking-[0.3em] transition-colors duration-500 ${
                isDark ? "text-zinc-500 opacity-80" : "text-zinc-950 opacity-70"
              }`}
            >
              Afterbit Engine v1.0.4 // Data Architecture Visualization
            </p>
          </div>
        </Motion.div>
      </div>
    </Motion.div>
  );
};

export default AfterbitGDD;
