import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LogoSRS from "../Imagenes/LogoSRS.png";
import JuegoRodolfo from "../Imagenes/RodolfoStrike.jpeg";
import boloImg from "../Imagenes/ImagenesSR/Frieza.png";
import boloImg2 from "../Imagenes/ImagenesSR/Cell Perfecto.png";
import boloImg3 from "../Imagenes/ImagenesSR/Broly.png";
import boloImg4 from "../Imagenes/ImagenesSR/Janemba.png";
import bolaImg from "../Imagenes/ImagenesSR/RodolfoHud.png";

export default function SuperRodolfoStrike({ isDark }) {
  const currentTextColor = isDark ? "#ffffff" : "#000000";
  const currentBgColor = isDark ? "#000000" : "#ffffff";
  const srsGreen = "#008000";

  // EFECTO DE RESET DE SCROLL (SOLO AL ENTRAR A LA PÁGINA)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Se ejecuta solo una vez al montar

  // GESTIÓN DINÁMICA DEL FONDO (MODO CLARO/OSCURO)
  useEffect(() => {
    document.body.style.backgroundColor = currentBgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [currentBgColor]); // Solo se dispara si cambia el color, no afecta al scroll

  // Configuración de animación para entrada
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main
      className="min-h-screen pt-[80px] pb-32 px-6 font-sans transition-colors duration-500"
      style={{ color: currentTextColor }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* SECTION_01: HEADER & TECH_STACK */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="p-8 md:p-12 border-b-[10px] relative overflow-hidden mb-24 transition-colors duration-500"
          style={{
            backgroundColor: "transparent",
            color: currentTextColor,
            borderColor: currentTextColor,
          }}
        >
          <div className="relative z-10 flex flex-col gap-6">
            <span className="font-mono text-xs md:text-sm font-bold opacity-60 tracking-[0.5em] block text-center uppercase">
              // ACADEMIC_MODULE: MOBILE_GAME
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter break-words md:whitespace-nowrap text-center">
              SUPER RODOLFO <span style={{ color: srsGreen }}>STRIKE</span>
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mt-4">
              <div className="font-mono text-[10px] md:text-xs space-y-2 opacity-80 uppercase tracking-widest flex flex-col items-center md:items-start">
                <p className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 inline-block shrink-0"
                    style={{ backgroundColor: srsGreen }}
                  ></span>
                  <span>[ AUTHOR: DAVID_JIMENEZ ]</span>
                </p>
                <p className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 inline-block shrink-0"
                    style={{ backgroundColor: srsGreen }}
                  ></span>
                  <span>[ STATUS: MOBILE_GAME_2D ]</span>
                </p>
              </div>

              <div
                className="w-fit text-center md:text-right font-mono text-[10px] md:text-xs opacity-80 uppercase tracking-widest border-2 px-4 py-2 transition-colors duration-500"
                style={{ borderColor: currentTextColor }}
              >
                [ UNITY_ENGINE // C# ]
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECTION_02: BRANDING & CONCEPT_OVERVIEW */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40 py-10 -mt-10"
        >
          <motion.div
            animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex justify-center items-center group cursor-pointer"
          >
            <div
              className="absolute w-[120%] h-[120%] rounded-full blur-[60px] md:blur-[100px] transition-all duration-700 group-hover:scale-110 group-hover:opacity-60"
              style={{
                background: `radial-gradient(circle, ${srsGreen} 0%, ${srsGreen}33 40%, transparent 70%)`,
                opacity: isDark ? 0.3 : 0.45,
                mixBlendMode: isDark ? "normal" : "multiply",
              }}
            ></div>

            <img
              src={LogoSRS}
              alt="Logo SRS"
              className="relative z-10 w-full max-w-[450px] transition-all duration-500 ease-out group-hover:scale-110"
              style={{ filter: `drop-shadow(0 10px 25px ${srsGreen}88)` }}
            />
          </motion.div>

          <div>
            <h3
              className="text-xl md:text-2xl lg:text-[26px] font-black uppercase italic mb-8 border-l-4 pl-4 tracking-tight md:whitespace-nowrap"
              style={{ borderColor: srsGreen }}
            >
              El Spin-off Móvil de Super Rodolfo
            </h3>

            <div className="text-lg md:text-xl opacity-80 leading-relaxed space-y-4">
              <p>
                El spin-off de la saga Super Rodolfo, es un juego de bolos 2D
                desarrollado para dispositivos móviles Android.
              </p>
              <p>
                En vez de hacer Shagami-dō para derrotar a nuestros enemigos
                como en el Santo Reino, aquí lanzamos la cabeza de Rodolfo como
                si fuera una bola de bolos.
              </p>
              <p>
                Nuestros bolos serán los enemigos del Santo Reino, y el objetivo
                es derribarlos a todos para obtener la máxima puntuación.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Bolera 1 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative w-full h-10 flex items-center my-16 -mt-12 md:-mt-16 overflow-hidden rounded-full border shadow-xl"
          style={{
            backgroundColor: isDark ? "#3d2b1f" : "#e3c08d",
            borderColor: isDark ? "#2a1d15" : "#c5a47e",
          }}
        >
          <div className="relative w-full h-full max-w-5xl mx-auto flex items-center px-10">
            <div
              className={`absolute inset-0 flex items-center pointer-events-none opacity-20 font-black tracking-widest ${isDark ? "text-white" : "text-black"}`}
            >
              <span className="absolute left-[20%]">{">>>"}</span>
              <span className="absolute left-[50%]">{">>>"}</span>
            </div>
            <motion.div
              className="absolute z-20 w-8 h-8 flex items-center justify-center"
              animate={{
                left: ["-15%", "85%", "140%", "140%", "-15%", "-15%"],
                y: [0, 0, 0, -50, -50, 0],
                rotate: [0, 720, 1080, 1080, 1080, 0],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                times: [0, 0.35, 0.5, 0.6, 0.7, 0.75],
                ease: "linear",
              }}
            >
              <img
                src={bolaImg}
                alt="Bola"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </motion.div>
            <motion.div
              className="absolute z-10 w-8 h-8 flex items-center justify-center"
              style={{ left: "85%" }}
              animate={{
                left: ["85%", "85%", "140%", "140%", "85%", "85%"],
                y: [0, 0, 0, 60, 60, 0],
                opacity: [1, 1, 1, 0, 0, 1],
                rotate: [0, 0, 180, 180, 0, 0],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                times: [0, 0.35, 0.5, 0.6, 0.7, 0.8],
                ease: "easeOut",
              }}
            >
              <img
                src={boloImg}
                alt="Bolo"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* SECTION_03: TECHNICAL_SPECIFICATIONS_GRID */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-25 mb-48 md:mb-50"
        >
          <h3
            className="font-mono text-xs uppercase mb-6 opacity-50 tracking-widest"
            style={{ color: currentTextColor }}
          >
            // TECH_SPECIFICATIONS: CORE_LOGIC
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "// 01_INPUT",
                title: "TouchScreen",
                desc: "Aprendizaje de la clase TouchScreen para realizar un juego móvil.",
              },
              {
                id: "// 02_PHYSICS",
                title: "Lanzamiento lógico",
                desc: "Cálculo de fuerza de impacto para derribar correctamente los bolos.",
              },
              {
                id: "// 03_ACADEMY",
                title: "IES Virgen del Carmen",
                desc: "Desarrollado en clase dentro de la especialización para aprender a hacer un juego móvil.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group p-8 border-2 transition-all duration-300 ease-in-out hover:-translate-y-2 cursor-default"
                style={{
                  borderColor: currentTextColor,
                  backgroundColor: "transparent",
                }}
              >
                <span className="font-mono text-xs mb-4 block opacity-50">
                  {card.id}
                </span>
                <h4 className="text-lg lg:text-xl font-black uppercase mb-4 italic transition-colors duration-300 group-hover:text-[#008000]">
                  {card.title}
                </h4>
                <p className="text-sm opacity-70">{card.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Bolera 2 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative w-full h-10 flex items-center my-16 -mt-12 md:-mt-16 overflow-hidden rounded-full border shadow-xl"
          style={{
            backgroundColor: isDark ? "#3d2b1f" : "#e3c08d",
            borderColor: isDark ? "#2a1d15" : "#c5a47e",
          }}
        >
          <div className="relative w-full h-full max-w-5xl mx-auto flex items-center px-10">
            <div
              className={`absolute inset-0 flex items-center pointer-events-none opacity-20 font-black tracking-widest ${isDark ? "text-white" : "text-black"}`}
            >
              <span className="absolute left-[20%]">{">>>"}</span>
              <span className="absolute left-[50%]">{">>>"}</span>
            </div>
            <motion.div
              className="absolute z-20 w-8 h-8 flex items-center justify-center"
              animate={{
                left: ["-15%", "85%", "140%", "140%", "-15%", "-15%"],
                y: [0, 0, 0, -50, -50, 0],
                rotate: [0, 720, 1080, 1080, 1080, 0],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                times: [0, 0.35, 0.5, 0.6, 0.7, 0.75],
                ease: "linear",
              }}
            >
              <img
                src={bolaImg}
                alt="Bola"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </motion.div>
            <motion.div
              className="absolute z-10 w-8 h-8 flex items-center justify-center"
              style={{ left: "85%" }}
              animate={{
                left: ["85%", "85%", "140%", "140%", "85%", "85%"],
                y: [0, 0, 0, 60, 60, 0],
                opacity: [1, 1, 1, 0, 0, 1],
                rotate: [0, 0, 180, 180, 0, 0],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                times: [0, 0.35, 0.5, 0.6, 0.7, 0.8],
                ease: "easeOut",
              }}
            >
              <img
                src={boloImg2}
                alt="Bolo"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* SECTION_04: LEARNING_GOALS_&_OUTCOMES */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-25 mb-50"
        >
          <div
            className="p-8 font-mono text-sm md:text-base border-2 shadow-xl transition-all duration-500"
            style={{
              backgroundColor: isDark ? "#080808" : "#f9f9f9",
              borderColor: srsGreen,
              color: currentTextColor,
            }}
          >
            <div className="mb-6">
              <h4
                className="text-xl md:text-2xl font-black uppercase italic mb-4"
                style={{ color: srsGreen }}
              >
                Objetivo de Aprendizaje Cumplido
              </h4>
              <p className="opacity-90 leading-relaxed mb-4">
                <span className="font-bold">Super Rodolfo Strike</span> fue mi
                primer juego de móvil realizado. Este proyecto me sirvió para
                aprender a implementar la clase{" "}
                <span
                  style={{ color: srsGreen }}
                  className="font-bold underline"
                >
                  TouchScreen
                </span>{" "}
                correctamente, gestionando entradas táctiles de forma precisa.
              </p>
              <p className="opacity-90 leading-relaxed mb-4">
                También cumplí el objetivo crítico de exportar el proyecto a un
                dispositivo real, asegurando que el juego se visualizara y
                rindiera correctamente en pantallas móviles.
              </p>
              <p className="opacity-90 leading-relaxed">
                Además, profundicé en el pulido profesional del juego,
                aprendiendo a configurar el{" "}
                <span className="italic">Splash Screen</span> para mostrar el
                logo de <span className="font-bold">Afterbit</span> al iniciar
                la aplicación.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8 font-mono text-[10px] md:text-xs justify-center">
              {[
                "UNITY_MOBILE",
                "TOUCHSCREEN_CLASS",
                "MOBILE_OPTIMIZATION",
                "AFTERBIT_SPLASH_SCREEN",
                "ANDROID_BUILD_SUCCESS",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="border px-3 py-1.5 transition-all duration-300 opacity-60"
                  style={{
                    borderColor: currentTextColor,
                    color: currentTextColor,
                  }}
                >
                  # {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Bolera 3 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative w-full h-10 flex items-center my-16 -mt-12 md:-mt-16 overflow-hidden rounded-full border shadow-xl"
          style={{
            backgroundColor: isDark ? "#3d2b1f" : "#e3c08d",
            borderColor: isDark ? "#2a1d15" : "#c5a47e",
          }}
        >
          <div className="relative w-full h-full max-w-5xl mx-auto flex items-center px-10">
            <div
              className={`absolute inset-0 flex items-center pointer-events-none opacity-20 font-black tracking-widest ${isDark ? "text-white" : "text-black"}`}
            >
              <span className="absolute left-[20%]">{">>>"}</span>
              <span className="absolute left-[50%]">{">>>"}</span>
            </div>
            <motion.div
              className="absolute z-20 w-8 h-8 flex items-center justify-center"
              animate={{
                left: ["-15%", "85%", "140%", "140%", "-15%", "-15%"],
                y: [0, 0, 0, -50, -50, 0],
                rotate: [0, 720, 1080, 1080, 1080, 0],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                times: [0, 0.35, 0.5, 0.6, 0.7, 0.75],
                ease: "linear",
              }}
            >
              <img
                src={bolaImg}
                alt="Bola"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </motion.div>
            <motion.div
              className="absolute z-10 w-8 h-8 flex items-center justify-center"
              style={{ left: "85%" }}
              animate={{
                left: ["85%", "85%", "140%", "140%", "85%", "85%"],
                y: [0, 0, 0, 60, 60, 0],
                opacity: [1, 1, 1, 0, 0, 1],
                rotate: [0, 0, 180, 180, 0, 0],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                times: [0, 0.35, 0.5, 0.6, 0.7, 0.8],
                ease: "easeOut",
              }}
            >
              <img
                src={boloImg3}
                alt="Bolo"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* SECTION_05: CALL_TO_ACTION_&_GAME_PREVIEW */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-25 flex flex-col items-center text-center pb-20 mb-25"
        >
          <div
            className="p-8 md:p-12 font-sans text-base border-2 rounded-xl shadow-2xl transition-all duration-500 w-full max-w-2xl"
            style={{
              backgroundColor: isDark ? "#050505" : "#f0f0f0",
              borderColor: srsGreen,
              color: currentTextColor,
            }}
          >
            <h2
              className="text-4xl md:text-5xl font-black mb-4 leading-tight italic"
              style={{ color: srsGreen }}
            >
              ¡La Bolera Comienza!
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-prose mx-auto">
              Descarga{" "}
              <span className="font-bold" style={{ color: srsGreen }}>
                Super Rodolfo Strike
              </span>{" "}
              y pon a prueba tu puntería contra los enemigos del Santo Reino.
            </p>
            <div className="mb-10 relative group">
              <img
                src={JuegoRodolfo}
                alt="Portada de Super Rodolfo Strike"
                className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
              />
              <p className="font-mono text-[10px] mt-4 opacity-40">
                / BUILD_VERSION: 1.0.0 / LAST_UPDATE: 2026.01.22
              </p>
            </div>
            <a
              href="https://github.com/djsekai34/SuperRodolfoStrike"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md shadow-sm text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="mr-2">🎮</span> ¡JUGAR AHORA!
            </a>
          </div>
        </motion.section>

        {/* Bolera 4 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative w-full h-10 flex items-center my-16 -mt-12 md:-mt-16 overflow-hidden rounded-full border shadow-xl"
          style={{
            backgroundColor: isDark ? "#3d2b1f" : "#e3c08d",
            borderColor: isDark ? "#2a1d15" : "#c5a47e",
          }}
        >
          <div className="relative w-full h-full max-w-5xl mx-auto flex items-center px-10">
            <div
              className={`absolute inset-0 flex items-center pointer-events-none opacity-20 font-black tracking-widest ${isDark ? "text-white" : "text-black"}`}
            >
              <span className="absolute left-[20%]">{">>>"}</span>
              <span className="absolute left-[50%]">{">>>"}</span>
            </div>
            <motion.div
              className="absolute z-20 w-8 h-8 flex items-center justify-center"
              animate={{
                left: ["-15%", "85%", "140%", "140%", "-15%", "-15%"],
                y: [0, 0, 0, -50, -50, 0],
                rotate: [0, 720, 1080, 1080, 1080, 0],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                times: [0, 0.35, 0.5, 0.6, 0.7, 0.75],
                ease: "linear",
              }}
            >
              <img
                src={bolaImg}
                alt="Bola"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </motion.div>
            <motion.div
              className="absolute z-10 w-14 h-14 flex items-center justify-center"
              style={{ left: "85%" }}
              animate={{
                left: ["85%", "85%", "140%", "140%", "85%", "85%"],
                y: [0, 0, 0, 60, 60, 0],
                opacity: [1, 1, 1, 0, 0, 1],
                rotate: [0, 0, 180, 180, 0, 0],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                times: [0, 0.35, 0.5, 0.6, 0.7, 0.8],
                ease: "easeOut",
              }}
            >
              <img
                src={boloImg4}
                alt="Bolo"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
