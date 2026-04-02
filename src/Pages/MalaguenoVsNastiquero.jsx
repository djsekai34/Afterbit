import React, { useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import LogoMalagueno from "../Imagenes/LogoMVSN.png";
import LogoMalaguenoVR from "../Imagenes/LogoMVSNVR.png";
import LogoMalaga from "../Imagenes/Malaga.png";
import LogoNastic from "../Imagenes/Nastic.png";
import Ak47Real from "../Imagenes/AK47.png";
import MVSN from "../rar/ElmalaguenoVSlosnastiqueros.rar";
import RFEF from "../Imagenes/LogoRFEF.png";
import MVSNVR from "../apk/MalaguenoVsNastiquerVR.apk";

const MalaguenoPage = ({ isDark }) => {
  const location = useLocation();

  const currentTextColor = isDark ? "#ffffff" : "#000000";
  const currentBgColor = isDark ? "#000000" : "#ffffff";
  const malagaBlue = "#a7d6f5";
  const nasticRed = "#96232c";
  const dynamicBlue = isDark ? malagaBlue : "#4a90e2"; // Un azul más intenso para el modo claro
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = currentBgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [currentBgColor]);

  // ── Variante de entrada usada en TODAS las secciones ──
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // ── Wrapper de página: orquesta el stagger de todas las secciones hijas ──
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.05,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  // ── Stagger interno del grid de cards ──
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {/*
        key={location.pathname} → al navegar React desmonta/remonta el árbol,
        reiniciando TODAS las animaciones desde "hidden" como si fuera un F5.
        pageVariants propaga "hidden"→"visible" en cascada a cada hijo con variants={fadeIn}.
      */}
      <Motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="min-h-screen pt-[80px] pb-32 px-6 font-sans transition-colors duration-500"
      >
        {/* ══ SECCIÓN 1: HERO ══ */}
        <Motion.section
          variants={fadeIn}
          className="p-8 md:p-12 border-b-[10px] relative overflow-hidden mb-24 transition-colors duration-500"
          style={{
            backgroundColor: "transparent",
            color: currentTextColor,
            borderColor: currentTextColor,
          }}
        >
          <div className="relative z-10 flex flex-col gap-6">
            <span className="font-mono text-[12px] md:text-sm font-bold opacity-60 tracking-[0.3em] md:tracking-[0.5em] block text-center uppercase mt-6 md:mt-0">
              // ACADEMIC_MODULE: SHOOTER_SYSTEM
            </span>

            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[0.8] tracking-tighter break-words text-center">
              <span style={{ color: malagaBlue }}>EL MÁLAGUEÑO</span> VS{" "}
              <span style={{ color: nasticRed }}>LOS NASTIQUEROS </span>
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mt-4">
              <div className="font-mono text-[10px] md:text-xs space-y-2 opacity-80 uppercase tracking-widest flex flex-col items-center md:items-start">
                <p className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 inline-block shrink-0"
                    style={{ backgroundColor: malagaBlue }}
                  ></span>
                  <span>[ AUTHOR: DAVID_JIMENEZ ]</span>
                </p>
                <p className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 inline-block shrink-0"
                    style={{ backgroundColor: nasticRed }}
                  ></span>
                  <span>[ STATUS: PC_SHOOTER ]</span>
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

        {/* ══ SECCIÓN 2: BRIEFING + HUD ══ */}
        <Motion.section
          variants={fadeIn}
          className="max-w-7xl mx-auto px-6 mb-24 relative"
        >
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(${currentTextColor} 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 space-y-12">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Logo principal */}
              <div
                className="lg:col-span-8 relative p-2 border-2"
                style={{ borderColor: `${currentTextColor}15` }}
              >
                <div
                  className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4"
                  style={{ borderColor: malagaBlue }}
                />
                <div
                  className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4"
                  style={{ borderColor: malagaBlue }}
                />
                <div
                  className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4"
                  style={{ borderColor: nasticRed }}
                />
                <div
                  className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4"
                  style={{ borderColor: nasticRed }}
                />
                <div
                  className="overflow-hidden relative"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(0,0,0,0.03)",
                  }}
                >
                  <img
                    src={LogoMalagueno}
                    alt="Logo El Malagueño"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700 p-4 drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#a7d6f5]/10 to-transparent h-1/2 w-full animate-pulse" />
                </div>
              </div>

              {/* Intel report */}
              <div className="lg:col-span-4 space-y-6">
                <div
                  className="p-6 border-t-4 shadow-xl transition-colors duration-500"
                  style={{
                    borderColor: malagaBlue,
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.05)",
                    color: currentTextColor,
                  }}
                >
                  <h3 className="font-mono text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 opacity-60 flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-ping shrink-0"
                      style={{ backgroundColor: malagaBlue }}
                    ></span>
                    <span className="whitespace-nowrap">
                      // INTEL_REPORT: 22_06_24
                    </span>
                  </h3>
                  <ul className="font-mono text-[11px] md:text-xs space-y-5 uppercase tracking-wider">
                    <li
                      className="flex flex-col gap-0.5 border-b pb-2"
                      style={{ borderColor: `${currentTextColor}20` }}
                    >
                      <span className="opacity-40 text-[8px] tracking-wider">
                        LOCATION:
                      </span>
                      <span className="font-bold text-[13px] md:text-sm leading-tight">
                        NOU_ESTADI_TARRAGONA
                      </span>
                    </li>

                    <li
                      className="flex flex-col gap-0.5 border-b pb-2"
                      style={{ borderColor: `${currentTextColor}20` }}
                    >
                      <span className="opacity-40 text-[8px] tracking-wider">
                        TARGET_OBJECTIVE:
                      </span>
                      <span
                        className="font-bold text-[13px] md:text-sm leading-tight"
                        style={{ color: "#96232c" }}
                      >
                        LLORONES_DEL_NASTIC
                      </span>
                    </li>
                    <li
                      className="flex flex-col gap-1 border-b pb-3"
                      style={{ borderColor: `${currentTextColor}20` }}
                    >
                      <span className="opacity-40 text-[9px]">
                        CRITICAL_MOMENT:
                      </span>
                      <span className="font-bold">MIN_122_GOL_CORDERO</span>
                    </li>
                    <li className="flex flex-col gap-1 pb-1">
                      <span className="opacity-40 text-[9px]">
                        THREAT_LEVEL:
                      </span>
                      <span
                        className="font-black tracking-tighter text-lg"
                        style={{ color: "#96232c" }}
                      >
                        EXTREME_RESENTMENT
                      </span>
                    </li>
                  </ul>
                </div>

                <div
                  className="border-2 p-4 bg-red-600/10 animate-pulse flex flex-col items-center gap-2"
                  style={{ borderColor: "#96232c" }}
                >
                  <span className="text-red-500 text-xl font-bold">⚠️</span>
                  <p
                    className="text-[10px] font-black text-center uppercase tracking-tighter leading-none"
                    style={{ color: "#96232c" }}
                  >
                    SISTEMA DETECTA BALONES LANZADOS AL CÉSPED
                    <br />
                    POR AFICIÓN RIVAL
                  </p>
                </div>
              </div>
            </div>

            {/* ── RELATO DE LA VENGANZA ── */}
            <div
              className="w-full flex flex-col items-center gap-12 text-center pt-10 border-t-4 shadow-inner"
              style={{
                borderColor: `${malagaBlue}20`,
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.01)"
                  : "rgba(0,0,0,0.01)",
              }}
            >
              <div className="flex flex-col items-center gap-12 md:gap-16 w-full overflow-hidden md:overflow-visible">
                <div
                  className="relative group w-full max-w-4xl px-4 md:px-6 py-4 border-2 skew-x-[-4deg] md:skew-x-[-10deg]"
                  style={{ borderColor: `${malagaBlue}40` }}
                >
                  <div
                    className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4"
                    style={{ borderColor: malagaBlue }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4"
                    style={{ borderColor: malagaBlue }}
                  />
                  <h2
                    className="w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold italic uppercase tracking-tighter shrink-0 skew-x-[4deg] md:skew-x-[10deg]"
                    style={{
                      color: malagaBlue,
                      textShadow: `0 0 15px ${malagaBlue}40`,
                    }}
                  >
                    EL RELATO DE UNA VENGANZA
                  </h2>
                </div>

                <div
                  className="font-sans text-sm md:text-base lg:text-lg leading-relaxed space-y-6 md:space-y-8 max-w-5xl px-6 relative"
                  style={{ color: currentTextColor }}
                >
                  <div
                    className="relative p-5 md:p-6 border-l-4"
                    style={{ borderColor: `${currentTextColor}15` }}
                  >
                    <p className="opacity-90">
                      Tras la batalla del 22 de junio de 2024, el{" "}
                      <span
                        className="font-bold text-base md:text-lg"
                        style={{ color: malagaBlue }}
                      >
                        Málaga CF
                      </span>{" "}
                      logró el heroico ascenso a Segunda División en un
                      escenario hostil. La polémica estalló cuando la grada del
                      Nàstic, en un intento desesperado por frenar el destino,
                      inundó el césped con balones para interrumpir el juego.
                    </p>
                  </div>

                  <div
                    className="relative p-5 md:p-6 border-l-4"
                    style={{ borderColor: `${currentTextColor}15` }}
                  >
                    <span className="absolute -left-3 top-0 font-mono text-[8px] md:text-[9px] uppercase tracking-wider opacity-40 -rotate-90 origin-top-left whitespace-nowrap">
                      Evento Critico
                    </span>
                    <p className="opacity-90">
                      El árbitro detuvo el tiempo, pero no pudo detener la
                      historia. Al reanudarse, en el minuto 122,{" "}
                      <span
                        className="font-bold text-base md:text-lg"
                        style={{ color: malagaBlue }}
                      >
                        Antoñito Cordero
                      </span>{" "}
                      desató la locura con el gol de la victoria, condenando al
                      Nàstic a la categoría de bronce.
                    </p>
                  </div>

                  <div
                    className="relative italic py-8 md:py-10 px-6 md:px-10 border-2 shadow-2xl skew-x-[-2deg] md:skew-x-[-5deg]"
                    style={{
                      borderColor: `${nasticRed}60`,
                      backgroundColor: `${nasticRed}05`,
                    }}
                  >
                    <div className="absolute -top-3 left-0 md:left-10 px-2 md:px-4 py-1 text-[8px] md:text-xs font-black bg-red-600 text-white uppercase tracking-wider skew-x-[2deg] md:skew-x-[5deg] whitespace-nowrap z-20 shadow-lg">
                      ⚠️ THREAT: EXTREME_RESENTMENT ⚠️
                    </div>
                    <p
                      className="max-w-4xl mx-auto text-base md:text-lg lg:text-xl skew-x-[2deg] md:skew-x-[5deg] font-semibold opacity-100"
                      style={{ color: currentTextColor }}
                    >
                      Hoy, aquellos aficionados consumidos por el rencor, las
                      lágrimas y la frustración te persiguen con un único
                      objetivo: aniquilarte por tu lealtad al escudo
                      blanquiazul. ¡Ha llegado el momento de armarte con tu
                      mejor arma y erradicar a los llorones que aún no superan
                      su destino!
                    </p>
                  </div>

                  <div className="pt-8 relative flex flex-col items-center gap-2 text-center">
                    <div className="h-px w-32 md:w-40 bg-current opacity-20" />
                    <p
                      className="font-black text-lg sm:text-xl md:text-2xl uppercase tracking-tighter leading-tight"
                      style={{
                        color: malagaBlue,
                        textShadow: `0 0 10px ${malagaBlue}30`,
                      }}
                    >
                      Y ALZA EL NOMBRE DEL MÁLAGA CF COMO EL NÚMERO UNO
                      INDISCUTIBLE.
                    </p>
                    <div className="h-px w-32 md:w-40 bg-current opacity-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ══ SEPARADOR TÁCTICO Nº1 ══ */}
          <Motion.div
            variants={fadeIn}
            className="w-full max-w-7xl mx-auto mb-16 md:mb-24 overflow-hidden relative border-y py-8 md:py-12"
            style={{ borderColor: `${currentTextColor}10` }}
          >
            <div className="flex items-center justify-between px-4 md:px-10 relative h-24 md:h-32">
              <div className="flex items-center gap-2 md:gap-4 z-10 relative">
                <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center relative">
                  <img
                    src={LogoMalaga}
                    alt="Malaga CF"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="relative -left-2 md:-left-6 top-0">
                  <img
                    src={Ak47Real}
                    alt="AK-47"
                    className="w-24 md:w-40 h-auto object-contain"
                  />
                  <Motion.div
                    animate={{
                      opacity: [0, 1, 0, 0],
                      scale: [0.8, 1.5, 0.8, 0.8],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.2, 1],
                      ease: "easeOut",
                    }}
                    className="absolute -right-2 md:-right-3 top-[45%] -translate-y-1/2 w-4 h-4 md:w-8 md:h-8 bg-yellow-400 rounded-full blur-sm z-10"
                  />
                  <Motion.div
                    animate={{
                      x: [0, 20, 40],
                      y: [0, -15, 30],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.4, 0.6],
                      ease: "linear",
                    }}
                    className="absolute left-6 md:left-10 top-1/2 w-1.5 h-0.5 md:w-2 md:h-1 bg-yellow-600 shadow-[1px_1px_2px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>

              <Motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{
                  x:
                    typeof window !== "undefined"
                      ? window.innerWidth < 768
                        ? [0, 100] // Móvil
                        : window.innerWidth < 1024
                          ? [0, 420] // TABLET VERTICAL (Evita que atraviese el escudo)
                          : [0, 750] // PC
                      : [0, 750],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  times: [0, 0.1, 0.8, 1],
                  ease: "linear",
                }}
                className="absolute left-[35%] md:left-[24%] top-[45%] -translate-y-1/2 h-0.5 md:h-1 bg-yellow-200 rounded-full blur-[1px] w-4 md:w-6 z-0 shadow-[0_0_10px_2px_rgba(255,255,100,0.6)]"
              />

              <Motion.div
                animate={{ x: [0, -4, 4, 0], scale: [1, 0.98, 1.02, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.15,
                  repeatDelay: 0.45,
                }}
                className="w-16 h-16 md:w-24 md:h-24 flex flex-col items-center justify-center relative"
              >
                <img
                  src={LogoNastic}
                  alt="Nastic"
                  className="w-12 h-12 md:w-20 md:h-20 object-contain"
                />
                <span className="absolute -top-4 md:-top-6 text-[6px] md:text-[8px] font-mono text-red-500 animate-bounce whitespace-nowrap">
                  !IMPACT!
                </span>
              </Motion.div>
            </div>
          </Motion.div>

          {/* ══ SECCIÓN 3: GRID DESPLIEGUE OPERATIVO ══ */}
          <Motion.div
            variants={fadeIn}
            className="w-full max-w-7xl mx-auto mb-12 md:mb-24 px-4 sm:px-6 md:px-10 relative"
          >
            <Motion.div
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] h-24 bg-[#a7d6f5]/20 rounded-full blur-3xl z-0"
            />

            <div className="border-l-4 border-[#a7d6f5] pl-4 mb-8 md:mb-12 relative z-10">
              <h2
                className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic"
                style={{ color: currentTextColor }}
              >
                <span className="underline" style={{ color: "#a7d6f5" }}>
                  Despliegue
                </span>{" "}
                <span style={{ color: "#96232c" }}>Operativo</span>
              </h2>
            </div>

            {/* Cards con stagger propio */}
            <Motion.div
              variants={gridVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 font-mono relative z-10"
            >
              {/* OBJ_01 */}
              <Motion.div
                variants={fadeIn}
                whileHover={{
                  scale: 1.03,
                  borderColor: "#a7d6f5",
                  backgroundColor: "rgba(167,214,245,0.05)",
                }}
                className="border p-5 md:p-6 relative overflow-hidden group transition-all"
                style={{ borderColor: `${currentTextColor}20` }}
              >
                <div className="absolute top-0 right-0 p-2 text-[10px] opacity-20 group-hover:opacity-100 transition-opacity">
                  OBJ_01
                </div>
                <h3 className="text-[#a7d6f5] font-black mb-2 flex items-center gap-2 text-sm md:text-base">
                  <Motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-2 bg-[#a7d6f5] rounded-full"
                  />
                  POOL DE BALAS
                </h3>
                <p
                  className="text-[11px] leading-relaxed opacity-80"
                  style={{ color: currentTextColor }}
                >
                  Optimización de memoria mediante{" "}
                  <span className="font-bold underline text-white">
                    Object Pooling
                  </span>
                  . No instanciamos balas al disparar; reciclamos proyectiles
                  activos para mantener los 60 FPS estables incluso en ráfaga
                  completa.
                </p>
              </Motion.div>

              {/* OBJ_02 */}
              <Motion.div
                variants={fadeIn}
                whileHover={{
                  scale: 1.03,
                  borderColor: "#a7d6f5",
                  backgroundColor: "rgba(167,214,245,0.05)",
                }}
                className="border p-5 md:p-6 relative overflow-hidden group transition-all"
                style={{ borderColor: `${currentTextColor}20` }}
              >
                <div className="absolute top-0 right-0 p-2 text-[10px] opacity-20 group-hover:opacity-100 transition-opacity">
                  OBJ_02
                </div>
                <h3 className="text-[#a7d6f5] font-black mb-2 flex items-center gap-2 text-sm md:text-base">
                  <Motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-[#a7d6f5] rounded-full"
                  />
                  PRIMERA PERSONA (FPS)
                </h3>
                <p
                  className="text-[11px] leading-relaxed opacity-80"
                  style={{ color: currentTextColor }}
                >
                  Control total del eje <span className="italic">X e Y</span>.
                  Cámara anclada al "point of view" del jugador para una
                  inmersión total en el área rival. Colisiones ajustadas al
                  milímetro para el contacto físico.
                </p>
              </Motion.div>

              {/* OBJ_03 */}
              <Motion.div
                variants={fadeIn}
                whileHover={{
                  scale: 1.03,
                  borderColor: "#a7d6f5",
                  backgroundColor: "rgba(167,214,245,0.05)",
                }}
                className="border p-5 md:p-6 relative overflow-hidden group transition-all"
                style={{ borderColor: `${currentTextColor}20` }}
              >
                <div className="absolute top-0 right-0 p-2 text-[10px] opacity-20 group-hover:opacity-100 transition-opacity">
                  OBJ_03
                </div>
                <h3 className="text-[#a7d6f5] font-black mb-2 flex items-center gap-2 text-sm md:text-base">
                  <Motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-[#a7d6f5] rounded-full"
                  />
                  TELETRANSPORTE FLUIDO
                </h3>
                <p
                  className="text-[11px] leading-relaxed opacity-80"
                  style={{ color: currentTextColor }}
                >
                  Sistema de desplazamiento rápido sin pérdida de fotogramas.
                  Transiciones{" "}
                  <span className="font-bold italic">Ease-In-Out</span> para
                  evitar la caida de FPS mientras nos teletransportamos.
                </p>
              </Motion.div>

              {/* OBJ_04 */}
              <Motion.div
                variants={fadeIn}
                whileHover={{
                  scale: 1.03,
                  borderColor: "#a7d6f5",
                  backgroundColor: "rgba(167,214,245,0.05)",
                }}
                className="border p-5 md:p-6 relative overflow-hidden group transition-all"
                style={{ borderColor: `${currentTextColor}20` }}
              >
                <div className="absolute top-0 right-0 p-2 text-[10px] opacity-20 group-hover:opacity-100 transition-opacity">
                  OBJ_04
                </div>
                <h3 className="text-[#a7d6f5] font-black mb-2 flex items-center gap-2 uppercase text-sm md:text-base">
                  <kbd className="px-2 py-1 rounded bg-black border border-[#a7d6f5] text-[10px]">
                    R
                  </kbd>{" "}
                  RECARGA DINÁMICA
                </h3>
                <p
                  className="text-[11px] leading-relaxed opacity-80"
                  style={{ color: currentTextColor }}
                >
                  Animación técnica de recarga activa. Al pulsar la tecla{" "}
                  <span className="text-white font-bold underline">"R"</span>,
                  el sistema bloquea el fuego para reponer el cargador,
                  integrando sonidos y feedback visual de HUD.
                </p>
              </Motion.div>

              {/* OBJ_05 */}
              <Motion.div
                variants={fadeIn}
                whileHover={{
                  scale: 1.03,
                  borderColor: "#a7d6f5",
                  backgroundColor: "rgba(167,214,245,0.05)",
                }}
                className="border p-5 md:p-6 relative overflow-hidden group transition-all"
                style={{ borderColor: `${currentTextColor}20` }}
              >
                <div className="absolute top-0 right-0 p-2 text-[10px] opacity-20 group-hover:opacity-100 transition-opacity">
                  OBJ_05
                </div>
                <h3 className="text-[#a7d6f5] font-black mb-2 flex items-center gap-2 uppercase text-sm md:text-base">
                  ESTÉTICA PERSONALIZADA
                </h3>
                <p
                  className="text-[11px] leading-relaxed opacity-80"
                  style={{ color: currentTextColor }}
                >
                  100% personalizado gracias a la asignatura de{" "}
                  <span className="font-bold underline text-white">
                    Diseño 2D y 3D
                  </span>
                  . Incluye grafitis urbanos, botones con relieves únicos y
                  assets modelados exclusivamente para el juego.
                </p>
              </Motion.div>

              {/* OBJ_06 */}
              <Motion.div
                variants={fadeIn}
                whileHover={{
                  scale: 1.03,
                  borderColor: "#96232c",
                  backgroundColor: "rgba(150,35,44,0.05)",
                }}
                className="border p-5 md:p-6 relative overflow-hidden group transition-all"
                style={{ borderColor: `${currentTextColor}20` }}
              >
                <div className="absolute top-0 right-0 p-2 text-[10px] opacity-20 group-hover:opacity-100 transition-opacity">
                  OBJ_06
                </div>
                <h3 className="text-[#96232c] font-black mb-2 flex items-center gap-2 text-sm md:text-base">
                  <Motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                    className="w-2 h-2 bg-[#96232c] rounded-full"
                  />
                  POWER-UP: BOKERÓN RAGE
                </h3>
                <p
                  className="text-[11px] leading-relaxed opacity-80"
                  style={{ color: currentTextColor }}
                >
                  Protocolo de suministros críticos. La captura de ítems activa
                  la{" "}
                  <span className="text-white font-bold underline italic text-xs">
                    REGENERACIÓN INSTANTÁNEA
                  </span>{" "}
                  de vida y{" "}
                  <span className="text-white font-bold underline italic text-xs">
                    REARME TOTAL
                  </span>{" "}
                  de munición. Otorga una ventana de{" "}
                  <span className="text-[#96232c] font-bold underline">
                    INMORTALIDAD
                  </span>{" "}
                  con balística infinita sin sobrecalentamiento.
                </p>
              </Motion.div>

              {/* BARRA DE VIDA */}
              <Motion.div
                variants={fadeIn}
                whileHover={{
                  scale: 1.01,
                  borderColor: "#a7d6f5",
                  backgroundColor: "rgba(167,214,245,0.05)",
                }}
                className="border p-5 md:p-6 relative col-span-1 sm:col-span-2 lg:col-span-3 overflow-hidden group transition-all"
                style={{ borderColor: `${currentTextColor}20` }}
              >
                <h3 className="text-[#a7d6f5] font-black mb-2 flex items-center gap-2 uppercase tracking-widest text-sm md:text-base">
                  Barra de Vida dinamica
                </h3>
                <p
                  className="text-[11px] leading-relaxed opacity-80 mb-4"
                  style={{ color: currentTextColor }}
                >
                  Sistema de vida dinámico, donde el jugador tendrá una barra{" "}
                  <span className="text-green-500 font-bold">VERDE</span>; si le
                  disparan, esta bajará saliendo una barra{" "}
                  <span className="text-[#96232c] font-bold underline text-xs uppercase">
                    ROJA
                  </span>{" "}
                  que indicará que ha perdido vida. Cuando cojamos el{" "}
                  <span
                    className={`font-bold italic uppercase ${isDark ? "text-white" : "text-black"}`}
                  >
                    POWER UP
                  </span>
                  , esta se rellena a tope devolviendo todas las vidas al
                  jugador.
                </p>
                <div className="h-6 bg-gray-900 border border-gray-700 relative overflow-hidden">
                  {/* Fondo rojo (vida perdida) */}
                  <div className="absolute top-0 left-0 h-full bg-[#96232c]/40 w-full z-0" />

                  <Motion.div
                    initial={{ width: "100%" }}
                    animate={{
                      width: ["100%", "100%", "66.6%", "66.6%", "100%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      times: [0, 0.2, 0.25, 0.8, 0.9], // Daño rápido, pausa en bajo, recarga fluida
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 left-0 h-full bg-green-500 z-10"
                  />
                </div>
              </Motion.div>
            </Motion.div>
          </Motion.div>

          {/* ══ SEPARADOR TÁCTICO Nº2 ══ */}
          <Motion.div
            variants={fadeIn}
            className="w-full max-w-7xl mx-auto mb-16 md:mb-24 overflow-hidden relative border-y py-8 md:py-12"
            style={{ borderColor: `${currentTextColor}10` }}
          >
            <div className="flex items-center justify-between px-4 md:px-10 relative h-24 md:h-32">
              <div className="flex items-center gap-2 md:gap-4 z-10 relative">
                <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center relative">
                  <img
                    src={LogoNastic}
                    alt="Nastic"
                    className="w-12 h-12 md:w-20 md:h-20 object-contain"
                  />
                </div>
                <div className="relative -left-2 md:-left-6 top-0">
                  <img
                    src={Ak47Real}
                    alt="AK-47"
                    className="w-24 md:w-40 h-auto object-contain"
                  />
                  <Motion.div
                    animate={{
                      opacity: [0, 1, 0, 0],
                      scale: [0.8, 1.5, 0.8, 0.8],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.2, 1],
                      ease: "easeOut",
                    }}
                    className="absolute -right-2 md:-right-3 top-[45%] -translate-y-1/2 w-4 h-4 md:w-8 md:h-8 bg-yellow-400 rounded-full blur-sm z-10"
                  />
                  <Motion.div
                    animate={{
                      x: [0, 20, 40],
                      y: [0, -15, 30],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.4, 0.6],
                      ease: "linear",
                    }}
                    className="absolute left-6 md:left-10 top-1/2 w-1.5 h-0.5 md:w-2 md:h-1 bg-yellow-600 shadow-[1px_1px_2px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>

              <Motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{
                  x:
                    typeof window !== "undefined"
                      ? window.innerWidth < 768
                        ? [0, 100] // Móvil
                        : window.innerWidth < 1024
                          ? [0, 420] // TABLET
                          : [0, 750] // PC
                      : [0, 750],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  times: [0, 0.1, 0.8, 1],
                  ease: "linear",
                }}
                className="absolute left-[35%] md:left-[24%] top-[45%] -translate-y-1/2 h-0.5 md:h-1 bg-yellow-200 rounded-full blur-[1px] w-4 md:w-6 z-0 shadow-[0_0_10px_2px_rgba(255,255,100,0.6)]"
              />

              <Motion.div
                animate={{ x: [0, -4, 4, 0], scale: [1, 0.98, 1.02, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.15,
                  repeatDelay: 0.45,
                }}
                className="w-16 h-16 md:w-24 md:h-24 flex flex-col items-center justify-center relative"
              >
                <img
                  src={LogoMalaga}
                  alt="Malaga CF"
                  className="w-12 h-12 md:w-20 md:h-20 object-contain"
                />
                <span className="absolute -top-4 md:-top-6 text-[6px] md:text-[8px] font-mono text-red-500 animate-bounce whitespace-nowrap">
                  !IMPACT!
                </span>
              </Motion.div>
            </div>
          </Motion.div>
        </Motion.section>
        {/* ══ SECCIÓN 4: OBJETIVOS  ══ */}
        <Motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-10 md:mt-25 mb-20 md:mb-50 px-4 md:px-0"
        >
          <div
            className="relative p-4 sm:p-6 md:p-8 font-mono shadow-2xl transition-all duration-500 overflow-hidden border-2"
            style={{
              backgroundColor: isDark ? "#050505" : "#f5f5f5",
              borderColor: `${malagaBlue}40`,
              color: currentTextColor,
            }}
          >
            {/* DECORACIÓN HUD: ESQUINAS */}
            <div
              className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2"
              style={{ borderColor: malagaBlue }}
            />
            <div
              className="absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2"
              style={{ borderColor: malagaBlue }}
            />
            <div
              className="absolute bottom-0 left-0 w-4 h-4 md:w-6 md:h-6 border-b-2 border-l-2"
              style={{ borderColor: malagaBlue }}
            />
            <div
              className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2"
              style={{ borderColor: malagaBlue }}
            />

            {/* CABECERA: REGISTRO DE MISIÓN Y METADATOS */}
            <div
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b-2 pb-6 mb-8 gap-6"
              style={{ borderColor: `${malagaBlue}20` }}
            >
              <div className="text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] uppercase opacity-80 font-bold w-full lg:w-auto">
                <p className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
                    style={{ backgroundColor: nasticRed }}
                  />
                  ADQUISICIÓN DE CONOCIMIENTOS // SECTOR FPS
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-2 text-[7px] sm:text-[8px] md:text-[9px] opacity-80 font-medium">
                  <p>
                    ESTADO:{" "}
                    <span style={{ color: isDark ? malagaBlue : "#4a90e2" }}>
                      DESARROLLADOR_EN_PRIMERA_LÍNEA
                    </span>
                  </p>
                  <p>
                    PROGRESO:{" "}
                    <span style={{ color: isDark ? malagaBlue : "#4a90e2" }}>
                      CAPACIDADES_FPS_ACTIVADAS
                    </span>
                  </p>
                  <p className="sm:col-span-2">
                    ARCHIVO:{" "}
                    <span style={{ color: isDark ? malagaBlue : "#4a90e2" }}>
                      MISIÓN_CUMPLIDA_SIN_BAJAS_DE_RENDIMIENTO
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
                <div
                  className="w-full lg:w-auto text-[10px] md:text-xs tracking-widest uppercase font-black px-4 py-3 border-2 relative overflow-hidden group text-center lg:text-right"
                  style={{ color: malagaBlue, borderColor: malagaBlue }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundColor: malagaBlue }}
                  />
                  <p className="relative z-10">
                    LOGROS_DE_APRENDIZAJE:{" "}
                    <span
                      className="animate-pulse"
                      style={{ color: nasticRed }}
                    >
                      SINC_100%
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* CUERPO: ANÁLISIS DE OBJETIVOS TÁCTICOS */}
            <div className="mb-10 relative z-10">
              <h4
                className="text-lg sm:text-xl md:text-2xl font-black uppercase italic mb-8 tracking-tighter flex flex-wrap items-center gap-2 md:gap-3"
                style={{ color: nasticRed }}
              >
                Análisis de Objetivos /{" "}
                <span style={{ color: malagaBlue }}>
                  El Málagueño VS los Nastiqueros
                </span>
              </h4>

              <div className="grid grid-cols-1 gap-8 text-sm md:text-base">
                {/* BLOQUE 1: PROTOCOLO FPS */}
                <p
                  className="opacity-90 leading-relaxed border-l-4 pl-4 md:pl-5 transition-all hover:pl-6"
                  style={{ borderColor: malagaBlue }}
                >
                  <span
                    className="font-bold uppercase"
                    style={{ color: malagaBlue }}
                  >
                    Protocolo First Person:
                  </span>{" "}
                  El Málagueño VS los Natiqueros marca mi despliegue inicial
                  como desarrollador de{" "}
                  <span
                    className="font-bold px-1"
                    style={{
                      color: nasticRed,
                      backgroundColor: `${nasticRed}15`,
                    }}
                  >
                    FPS (First Person Shooter)
                  </span>
                  . Implementé un controlador de cámara en{" "}
                  <span
                    className="font-bold underline"
                    style={{ color: malagaBlue }}
                  >
                    primera persona
                  </span>{" "}
                  optimizado para garantizar una inmersión total y un gameplay
                  fluido.
                </p>

                {/* BLOQUE 2: EFICIENCIA */}
                <p
                  className="opacity-90 leading-relaxed border-l-4 pl-4 md:pl-5 transition-all hover:pl-6"
                  style={{ borderColor: nasticRed }}
                >
                  <span className="font-bold text-white bg-red-900/30 px-1 uppercase">
                    Eficiencia de Hardware:
                  </span>{" "}
                  El sistema fue optimizado mediante el protocolo de{" "}
                  <span
                    className="italic font-bold px-1"
                    style={{
                      color: malagaBlue,
                      backgroundColor: `${malagaBlue}10`,
                    }}
                  >
                    Object Pooling
                  </span>
                  . Este método permite gestionar el flujo constante de
                  proyectiles y enemigos sin caídas de frames, reutilizando
                  recursos dinámicamente.
                </p>

                {/* BLOQUE 3: MECÁNICAS */}
                <p
                  className="opacity-90 leading-relaxed border-l-4 pl-4 md:pl-5 transition-all hover:pl-6"
                  style={{ borderColor: malagaBlue }}
                >
                  <span
                    className="font-bold uppercase"
                    style={{ color: malagaBlue }}
                  >
                    Mecánicas de Combate:
                  </span>{" "}
                  Desarrollo de sistemas críticos de combate, incluyendo la
                  lógica de{" "}
                  <span className="font-bold" style={{ color: nasticRed }}>
                    recarga de munición
                  </span>{" "}
                  y la gestión de{" "}
                  <span
                    className="font-bold underline"
                    style={{ color: malagaBlue }}
                  >
                    barras de vida dinámicas
                  </span>{" "}
                  que reaccionan visualmente al daño recibido en tiempo real.
                </p>

                {/* BLOQUE 4: SUMINISTROS */}
                <p
                  className="opacity-90 leading-relaxed border-l-4 pl-4 md:pl-5 transition-all hover:pl-6"
                  style={{ borderColor: nasticRed }}
                >
                  <span className="font-bold text-white bg-red-900/30 px-1 uppercase">
                    Suministros:
                  </span>{" "}
                  Integración de sistemas de{" "}
                  <span
                    className="font-bold italic px-1"
                    style={{
                      color: malagaBlue,
                      backgroundColor: `${malagaBlue}10`,
                    }}
                  >
                    Power-Ups
                  </span>{" "}
                  para la recuperación de estado y mejora de capacidades del
                  jugador durante unos segundos, cerrando el ciclo de gameplay
                  de alta intensidad.
                </p>
              </div>
            </div>

            {/* PIE DE SECCIÓN: MÓDULOS TECNOLÓGICOS */}
            <div
              className="pt-6 border-t-2"
              style={{ borderColor: `${malagaBlue}20` }}
            >
              <div className="flex flex-wrap gap-2 md:gap-3 font-mono text-[8px] sm:text-[9px] md:text-[11px] justify-center">
                {[
                  "FPS",
                  "CÁMARA_PRIMERA_PERSONA",
                  "POOL_DE_OBJETOS",
                  "BARRA_VIDA_DINÁMICA",
                  "SISTEMA_DE_RECARGA",
                  "POWER_UP",
                  "OPTIMIZACIÓN_RECURSOS",
                ].map((tag, idx) => {
                  const isEven = idx % 2 === 0;
                  const tagColor = isEven
                    ? isDark
                      ? malagaBlue
                      : "#4a90e2"
                    : nasticRed;
                  return (
                    <span
                      key={idx}
                      className="border px-2 py-1 md:px-3 md:py-1 transition-all duration-300 group hover:bg-white/5 flex items-center shadow-sm"
                      style={{
                        borderColor: `${tagColor}40`,
                        color: currentTextColor,
                      }}
                    >
                      <span
                        style={{ color: tagColor }}
                        className="group-hover:text-white transition-colors mr-1"
                      >
                        {">> "}
                      </span>
                      #{tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Motion.section>
        {/* ══ Separador Marcador  ══ */}
        <Motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="my-16 md:my-40 flex flex-col items-center font-mono overflow-visible px-2 md:px-0"
        >
          <div className="relative flex flex-wrap lg:flex-nowrap items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-[1px] border-white/20 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-visible">
            {/* CRONÓMETRO */}
            <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 border-b lg:border-b-0 lg:border-r border-white/10 bg-black/40 w-full lg:w-auto justify-center">
              <div className="relative w-8 h-8 md:w-14 md:h-14 flex items-center justify-center">
                <img
                  src={RFEF}
                  alt="Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                />
              </div>
              <div className="text-xl md:text-3xl font-black text-white tracking-tighter">
                124:00
              </div>
            </div>

            {/* CONTENEDOR EQUIPOS Y RESULTADO */}
            <div className="flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 w-full lg:w-auto mb-10 lg:mb-0 px-2">
              {/* LOCAL (NAS) */}
              <div className="flex items-center gap-2 md:gap-4 px-2 md:px-6 py-2">
                <span className="text-lg md:text-3xl font-black text-white italic">
                  NAS
                </span>
                <img
                  src={LogoNastic}
                  alt="NAS"
                  className="w-6 h-6 md:w-12 md:h-12 object-contain"
                />
              </div>

              {/* RESULTADO (ROJO) */}
              <div className="bg-red-600 px-4 md:px-8 py-3 md:py-4 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] min-w-fit md:min-w-[150px] relative mx-1">
                <span className="text-2xl md:text-5xl font-black text-white tracking-tighter drop-shadow-lg whitespace-nowrap">
                  2 - 2
                </span>

                {/* Etiqueta Final del Partido */}
                <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 bg-[#0a0a0a] border border-white/10 px-3 md:px-4 py-1 flex items-center gap-1 md:gap-2 rounded-sm shadow-2xl whitespace-nowrap z-30">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_5px_red]" />
                  <span className="text-[8px] md:text-[10px] text-white/80 font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase">
                    Final del Partido
                  </span>
                </div>
              </div>

              {/* VISITANTE (MCF) */}
              <div className="flex items-center gap-2 md:gap-4 px-2 md:px-6 py-2">
                <img
                  src={LogoMalaga}
                  alt="MCF"
                  className="w-6 h-6 md:w-12 md:h-12 object-contain"
                />
                <span className="text-lg md:text-3xl font-black text-white italic">
                  MCF
                </span>
              </div>
            </div>

            {/* GLOBAL */}
            <div className="flex flex-col justify-center items-center bg-black/60 lg:bg-black/40 px-6 py-3 w-full lg:w-auto min-w-fit lg:min-w-[100px] relative z-10">
              <span className="text-[7px] md:text-[9px] text-white/40 uppercase font-black leading-none tracking-widest mb-1">
                Global
              </span>
              <span className="text-xs md:text-xl font-black text-white italic whitespace-nowrap">
                3 - 4
              </span>
            </div>

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full opacity-10 animate-scan" />
          </div>
        </Motion.section>
        {/* ══ SECCIÓN 5: DESPLIEGUE ══ */}
        <Motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-12 md:mt-25 mb-20 md:mb-50 px-4 md:px-0"
        >
          <div
            className="relative p-6 sm:p-10 md:p-16 font-mono shadow-2xl transition-all duration-500 border-b-4 md:border-b-8 overflow-hidden"
            style={{
              backgroundColor: isDark ? "#080808" : "#e5e5e5",
              borderColor: nasticRed,
              color: currentTextColor,
            }}
          >
            {/* MARCA DE AGUA */}
            <div className="absolute top-2 right-[70px] text-[50px] md:top-4 md:right-13 md:text-[140px] font-black opacity-[0.03] italic pointer-events-none select-none leading-none translate-x-8 md:-translate-y-10 md:translate-x-10">
              DEPLOY
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* CABECERA DE ALERTA*/}
              <div className="flex items-center gap-2 md:gap-4 mb-6 md:mb-8">
                <div className="h-[1px] md:h-[2px] w-8 sm:w-16 md:w-24 bg-current opacity-30" />
                <span
                  className="text-[8px] sm:text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] font-black uppercase italic"
                  style={{ color: nasticRed }}
                >
                  Transmisión Prioritaria // Sector de Conflicto
                </span>
                <div className="h-[1px] md:h-[2px] w-8 sm:w-16 md:w-24 bg-current opacity-30" />
              </div>

              {/* TÍTULO AGRESIVO: Escalado fluido de 3xl a 6xl */}
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-[0.9]">
                ¿LISTO PARA EL <br className="block sm:hidden" />
                <span style={{ color: nasticRed }}> ASALTO FINAL</span>?
              </h2>

              {/* TEXTO DE INCITACIÓN: Balanceado para lectura táctica */}
              <div className="max-w-2xl mb-10">
                <p className="text-xs sm:text-sm md:text-lg leading-tight uppercase font-bold italic opacity-90">
                  La tregua ha terminado. Los{" "}
                  <span style={{ color: malagaBlue }}>Málagueños</span> están en
                  posición y los{" "}
                  <span style={{ color: nasticRed }}>Nastiqueros</span> ya han
                  cargado sus armas. Solo falta una pieza:{" "}
                  <span className="underline">TÚ</span>.
                </p>

                <p
                  className="mt-6 text-[10px] sm:text-[11px] md:text-sm opacity-75 font-medium max-w-[95%] mx-auto"
                  style={{ textWrap: "balance" }}
                >
                  No es un simulacro. Descarga el paquete del videojuego y salva
                  al Málaga de los Nastiqueros que quieren ensuciar su nombre.
                  El terreno está listo, la munición está a&nbsp;tope.
                  <span
                    className="font-black mt-4 block text-[11px] sm:text-xs md:text-base"
                    style={{ color: nasticRed }}
                  >
                    ¿VAS A MIRAR DESDE LA BARRERA O VAS A ENTRAR EN LA HISTORIA?
                  </span>
                </p>
              </div>

              {/* BOTÓN TÁCTICO*/}
              <div className="relative group w-full sm:w-auto mb-10">
                <div className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700 animate-pulse" />

                <a
                  href={MVSN}
                  download="MALAGA_VS_NASTIC.rar"
                  className="relative w-full sm:w-auto px-6 sm:px-12 md:px-16 py-4 md:py-5 bg-transparent border-[3px] md:border-4 font-black text-lg sm:text-xl md:text-3xl uppercase italic tracking-tighter transition-all duration-300 hover:skew-x-[-6deg] active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-3 no-underline"
                  style={{
                    borderColor: nasticRed,
                    color: nasticRed,
                    backgroundColor: isDark ? "transparent" : "transparent",
                  }}
                >
                  OBTENER EL VIDEOJUEGO
                </a>
              </div>

              {/* NOTA DE SEGURIDAD ANTIVIRUS */}
              <div
                className="max-w-lg p-4 border border-dashed opacity-80"
                style={{ borderColor: currentTextColor }}
              >
                <p className="text-[10px] md:text-xs uppercase font-bold leading-tight">
                  <span className="text-amber-500 mr-2">
                    ⚠️ PROTOCOLO DE EJECUCIÓN:
                  </span>
                  Windows SmartScreen detectará el archivo como malicioso por
                  falta de firma digital.
                  <span className="block mt-1 opacity-60">
                    No te preocupes, el archivo es 100% seguro. Pulsa en "Más
                    información" y "Ejecutar de todas formas" para iniciar el
                    despliegue.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Motion.section>
        {/* ══ SEPARADOR CÉSPED PRO - ESCALA REAL ══ */}
        <Motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full -mt-12 md:-mt-25 py-8 md:py-10 flex flex-col items-center px-4 overflow-visible font-mono"
        >
          {/* CABECERA TÁCTICA */}
          <div
            className="w-full max-w-5xl flex justify-between px-2 mb-2 text-[9px] md:text-xs font-black uppercase tracking-widest border-b pb-1"
            style={{
              borderColor: `${currentTextColor}20`,
              color: currentTextColor,
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_5px_red]" />
              <span>Nou Estadi Costa Daurada</span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                Min: <span className="text-red-500">115:00</span>
              </span>
            </div>
          </div>

          {/* CONTENEDOR CAMPO */}
          <div
            className={`relative w-full max-w-5xl h-28 md:h-36 rounded-sm border-2 overflow-hidden bg-[#1a3a1a] ${isDark ? "shadow-[0_0_50px_-5px_rgba(0,0,0,0.8)]" : "shadow-none"}`}
            style={{ borderColor: `${currentTextColor}20` }}
          >
            {/* CAPA CÉSPED Y TEXTURA */}
            <div
              className="absolute inset-0 opacity-100"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #1d401d 50%, #204520 50%)",
                backgroundSize: "30px 100%",
              }}
            />
            <div
              className="absolute inset-0 z-0 opacity-10"
              style={{
                backgroundImage:
                  "url(https://www.transparenttextures.com/patterns/pinstripe-thin.png)",
              }}
            />

            {/* LÍNEAS DE CAL Y MARCAJES */}
            <div className="absolute inset-0 z-10">
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/40 -translate-x-1/2" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 border border-white/40 rounded-full" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" />

              {/* LADO IZQUIERDO */}
              <div className="absolute left-0 top-[25%] w-[12%] h-[50%] border-r border-y border-white/40" />
              <div className="absolute left-0 top-[38%] w-[5%] h-[24%] border-r border-y border-white/40 bg-black/10" />
              <div className="absolute left-[9%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" />
              <div className="absolute left-[10%] md:left-[7.66%] lg:left-[6.66%] top-1/2 -translate-y-1/2 w-[7%] h-[28%] border-r border-white/40 rounded-r-full" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[18%] bg-white/80 rounded-r-sm" />

              {/* LADO DERECHO */}
              <div className="absolute right-0 top-[25%] w-[12%] h-[50%] border-l border-y border-white/40" />
              <div className="absolute right-0 top-[38%] w-[5%] h-[24%] border-l border-y border-white/40 bg-black/10" />
              <div className="absolute right-[9%] top-1/2 translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" />
              <div className="absolute right-[10%] md:right-[7.5%] lg:right-[6.65%] top-1/2 -translate-y-1/2 w-[7%] h-[28%] border-l border-white/40 rounded-l-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[18%] bg-white/80 rounded-l-sm" />
            </div>

            {/* LLUVIA DE BALONES */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {[...Array(22)].map((_, i) => (
                <Motion.img
                  key={i}
                  src="https://cdn-icons-png.flaticon.com/512/53/53283.png"
                  className="absolute w-3 h-3 md:w-4 md:h-4 opacity-0"
                  style={{
                    left: `${Math.random() * 90 + 5}%`,
                    top: `${Math.random() * 75 + 12.5}%`,
                  }}
                  animate={{
                    opacity: [0, 0.7, 0.7, 0],
                    scale: [2.5, 0.8, 0.8, 0.4],
                    y: [-30, 0, 0, 15],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 1 + Math.random(),
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "circOut",
                  }}
                />
              ))}
            </div>
          </div>
        </Motion.section>
        {/* VIDEOJUEGO VR */}
        <Motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full pt-24 pb-12 md:pt-45 md:pb-2 font-mono px-4"
          style={{ backgroundColor: currentBgColor }}
        >
          <div
            className="max-w-4xl mx-auto p-6 md:p-10 rounded-sm relative shadow-2xl transition-all"
            style={{
              backgroundColor: isDark ? "#1a1a1a" : "#f0ead6",
              border: `1px solid ${currentTextColor}20`,
              backgroundImage: isDark
                ? 'url("https://www.transparenttextures.com/patterns/dark-leather.png")'
                : 'url("https://www.transparenttextures.com/patterns/beige-paper.png")',
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-500/30 rounded-b shadow-inner" />

            {/* LAYOUT PRINCIPAL: ADAPTATIVO MÓVIL/DESKTOP */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* LADO IZQUIERDO: MULTIMEDIA Y TÉCNICO */}
              <div className="w-full md:w-1/3 flex flex-col gap-6">
                <Motion.div
                  initial={{ rotate: -2 }}
                  whileInView={{ rotate: -2 }}
                  className="bg-white p-2 shadow-lg border border-zinc-300 mx-auto md:mx-0 max-w-[280px] md:max-w-full"
                >
                  <img
                    src={LogoMalaguenoVR}
                    alt="Logo Misión"
                    className="w-full h-auto bg-zinc-900"
                  />
                  <p className="text-[9px] text-zinc-500 font-black text-center mt-2 uppercase tracking-tighter">
                    // ID_SQUAD: MÁLAGUEÑO_VR
                  </p>
                </Motion.div>

                <div
                  className="text-[10px] space-y-1 p-3 border border-dashed border-l-2 mx-auto md:mx-0 w-full max-w-[280px] md:max-w-full"
                  style={{
                    borderColor: `${nasticRed}60 ${nasticRed}10 ${nasticRed}10 ${nasticRed}`,
                    backgroundColor: isDark
                      ? "rgba(0,0,0,0.4)"
                      : "rgba(0,0,0,0.06)",
                  }}
                >
                  <p style={{ color: currentTextColor }}>
                    <span className="opacity-60">HARDWARE:</span> META QUEST 3 /
                    3S
                  </p>
                  <p style={{ color: currentTextColor }}>
                    <span className="opacity-60">TYPE:</span> SURVIVAL
                  </p>
                  <p style={{ color: currentTextColor }}>
                    <span className="opacity-60">STATUS:</span>{" "}
                    <span className="text-green-600 font-bold">VERIFIED</span>
                  </p>
                </div>
              </div>

              {/* LADO DERECHO: BRIEFING Y ACCIÓN */}
              <div className="w-full md:w-2/3">
                <header className="mb-4">
                  <span
                    className="text-[9px] font-black px-2 py-0.5 text-white"
                    style={{ backgroundColor: nasticRed }}
                  >
                    CONFIDENCIAL // OPERACIÓN ASCENSO
                  </span>
                  <h2
                    className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tighter mt-2 break-words leading-none"
                    style={{ color: currentTextColor }}
                  >
                    <span style={{ color: malagaBlue }}>EL MÁLAGUEÑO</span> VS{" "}
                    <span style={{ color: nasticRed }}>LOS NASTIQUEROS</span> VR
                  </h2>
                </header>

                <div className="space-y-4 mb-8">
                  <p
                    className="text-sm leading-tight font-bold"
                    style={{ color: currentTextColor }}
                  >
                    Situación: Victoria en Tarragona confirmada. Hostilidad
                    local nivel máximo.
                  </p>
                  <p
                    className="text-xs md:text-sm leading-relaxed opacity-80 italic border-l-2 pl-4"
                    style={{ color: currentTextColor, borderColor: nasticRed }}
                  >
                    "Acabas de ver la victoria del Málaga en Tarragona. Una
                    legión de nastiqueros va a por ti por la rabia y lo visto en
                    el campo. Deberás armarte con tu mejor arma para matarlos y
                    celebrar el ascenso en paz y tranquilidad."
                  </p>
                </div>

                <div
                  className="p-4 rounded border flex flex-col sm:flex-row items-center gap-4"
                  style={{
                    backgroundColor: isDark ? "#0c0c0c" : "#e8e2d0",
                    borderColor: `${currentTextColor}10`,
                  }}
                >
                  <a
                    href={MVSNVR}
                    className="w-full sm:w-auto px-6 py-3 text-white text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:translate-y-0.5 shadow-md text-center"
                    style={{ backgroundColor: nasticRed }}
                  >
                    DESCARGAR APK
                  </a>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50">
                      <svg
                        className="w-3 h-3 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span
                      className="text-[9px] font-black uppercase opacity-60"
                      style={{ color: currentTextColor }}
                    >
                      Escaneo Limpio // No Virus
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* PIE DE PÁGINA: NOTA TÉCNICA RESPONSIVE */}
            <p className="text-[10px] text-zinc-500 text-left leading-tight w-full italic pt-5 pl-0 md:pl-12">
              * Instalación mediante SideQuest o ADB requerida. Asegúrate de
              tener activado el modo desarrollador en tu cuenta de Meta.
            </p>

            <div
              className="absolute bottom-4 right-4 opacity-20 rotate-12 pointer-events-none hidden sm:block"
              style={{ color: nasticRed }}
            >
              <p className="text-xl font-black border-4 border-current px-2 rounded-lg">
                APROBADO
              </p>
            </div>
          </div>
        </Motion.section>
      </Motion.div>
    </AnimatePresence>
  );
};

export default MalaguenoPage;
