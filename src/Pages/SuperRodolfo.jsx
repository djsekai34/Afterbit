import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGamepad, FaArrowRight } from "react-icons/fa";

// IMPORTAMOS LOS DATOS Y LAS IMÁGENES DESDE EL OTRO ARCHIVO
import { sections } from "../data/SeccionSR";

import LogoRodolfo from "../Imagenes/LogoJuego.png";
import RodolfoHola from "../Imagenes/ImagenesSR/RodolfoHola.png";
import GDDRodolfo from "../PDF/GDDSuperRodolfoylasEsferasdelSantoReino.pdf"

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

export default function SuperRodolfoGDD({ isDark }) {
  const currentTextColor = isDark ? "white" : "black";
  const accentGreen = "#008012";

  return (
    <Motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`min-h-screen pt-32 pb-20 px-4 md:px-12 lg:px-24 transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* --- HEADER TÉCNICO --- */}
      <Motion.header
        variants={itemVariants}
        className="max-w-6xl mx-auto border-b-8 pb-8 mb-16"
        style={{ borderColor: currentTextColor }}
      >
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs md:text-sm font-bold opacity-60 tracking-[0.3em] md:tracking-[0.5em] block">
            // MASTER_PROJECT: GAME_DESIGN_DOCUMENT
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.1] tracking-tighter break-words">
            SUPER RODOLFO <br />
            <span style={{ color: accentGreen }}>
              Y LAS ESFERAS DEL SANTO REINO
            </span>
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mt-4">
            <div className="font-mono opacity-80 uppercase tracking-widest flex flex-col items-center md:items-start space-y-2">
              <p className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 lg:w-2 lg:h-2 inline-block shrink-0"
                  style={{ backgroundColor: accentGreen }}
                ></span>
                <span className="text-[9px] md:text-xs leading-none">
                  [ AUTHOR: DAVID_JIMENEZ ]
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 lg:w-2 lg:h-2 inline-block shrink-0"
                  style={{ backgroundColor: accentGreen }}
                ></span>
                <span className="text-[9px] md:text-xs leading-none">
                  [ STATUS: EXPERIMENTAL_BUILD ]
                </span>
              </p>
            </div>
            <div
              className="w-fit text-center md:text-right font-mono text-[10px] md:text-xs opacity-80 uppercase tracking-widest border-2 px-4 py-2"
              style={{ borderColor: currentTextColor }}
            >
              [ UNITY_ENGINE // C# ]
            </div>
          </div>
        </div>
      </Motion.header>

      {/* --- SECCIÓN: EL PORQUÉ Y SINOPSIS --- */}
      <Motion.section
        variants={itemVariants}
        className="max-w-6xl mx-auto mb-32 space-y-16"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <Motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[240px] md:max-w-[280px] flex justify-center items-center group"
          >
            <img
              src={LogoRodolfo}
              alt="Logo"
              className="relative z-10 w-full h-auto transition-all duration-500 ease-out group-hover:scale-110"
              style={{
                filter: isDark
                  ? `drop-shadow(0 5px 15px rgba(0,0,0,0.8))`
                  : `drop-shadow(0 5px 15px rgba(0,0,0,0.1))`,
              }}
            />
          </Motion.div>
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2
                className="text-lg md:text-xl font-black uppercase tracking-widest italic"
                style={{ color: accentGreen }}
              >
                // EL PORQUÉ DEL PROYECTO
              </h2>
              <p className="text-base md:text-lg opacity-80 leading-relaxed">
                Este videojuego nace dentro del curso de{" "}
                <span className="font-bold underline">
                  Especialización en Desarrollo de Videojuegos y Realidad
                  Virtual
                </span>{" "}
                como la pieza central de mi portafolio. Se ha concebido como un
                proyecto personal ambicioso, diseñado para poner en práctica{" "}
                <span className="font-bold" style={{ color: accentGreen }}>
                  todo el arsenal técnico y creativo adquirido durante mi
                  formación
                </span>
                . Con él, busco reflejar mi capacidad para gestionar
                integralmente el desarrollo de una experiencia de juego sólida.
              </p>
            </div>
            <div className="space-y-4">
              <h2
                className="text-lg md:text-xl font-black uppercase tracking-widest italic"
                style={{ color: accentGreen }}
              >
                // SINOPSIS
              </h2>
              <p
                className="text-base md:text-xl opacity-90 leading-relaxed italic border-l-4 pl-6"
                style={{ borderColor: accentGreen }}
              >
                "En las tierras del Santo Reino, la armonía se ha quebrado. Solo
                Rodolfo, un héroe inesperado, emprenderá una épica travesía...
                Su misión es recuperar las{" "}
                <span className="font-bold" style={{ color: accentGreen }}>
                  bolas mágicas
                </span>{" "}
                para resucitar a sus amigos caídos y devolver la paz."
              </p>
            </div>
          </div>
        </div>
      </Motion.section>

      {/* --- ÍNDICE --- */}
      <Motion.div variants={itemVariants} className="max-w-6xl mx-auto mb-40">
        <div
          className="flex flex-wrap justify-center gap-2 border-2 p-2"
          style={{ borderColor: isDark ? "#ffffff20" : "#00000020" }}
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="font-mono text-[9px] md:text-[10px] p-4 text-center hover:bg-[#008012] hover:text-white transition-all duration-300 uppercase font-black border flex-grow sm:flex-grow-0 basis-full sm:basis-[calc(50%-8px)] lg:basis-[calc(25%-8px)]"
              style={{ borderColor: isDark ? "#ffffff10" : "#00000010" }}
            >
              {section.title}
            </a>
          ))}
        </div>
      </Motion.div>

      {/* --- CUERPO: Ajuste Crítico ID 08 --- */}
      <Motion.main
        variants={itemVariants}
        className="max-w-6xl mx-auto space-y-40"
      >
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-32 border-t pt-16"
            style={{ borderColor: isDark ? "#ffffff10" : "#00000010" }}
          >
            <Link to={section.path} className="group block">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black italic uppercase leading-tight md:leading-none group-hover:text-[#008012] transition-colors break-words max-w-full">
                  {section.title}
                </h2>

                <div className="hidden md:flex items-center gap-2 font-mono text-[10px] opacity-40 uppercase tracking-widest group-hover:opacity-100 group-hover:text-[#008012] transition-all">
                  <span>Acceder</span> <FaArrowRight />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-base md:text-lg opacity-70 leading-relaxed">
                  <p>{section.desc}</p>
                  <div
                    className="mt-6 inline-block border-b-2 pb-1"
                    style={{ borderColor: accentGreen }}
                  >
                    <span className="font-mono text-xs uppercase font-bold tracking-tighter text-[#008012]">
                      Módulo técnico //
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center lg:items-end gap-6">
                  <div
                    className={`relative w-full overflow-hidden transition-all duration-500 ${
                      section.img === RodolfoHola
                        ? "max-w-2xl"
                        : "max-w-sm group-hover:scale-[1.02]"
                    }`}
                  >
                    <div
                      className="absolute -inset-1 border border-dashed opacity-20 group-hover:opacity-100 transition-opacity"
                      style={{ borderColor: accentGreen }}
                    ></div>
                    <img
                      src={section.img}
                      alt={section.title}
                      className={`w-full h-48 md:h-64 object-contain grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl ${
                        section.img === RodolfoHola
                          ? "scale-[2.5] md:scale-[3] group-hover:scale-[2.8] md:group-hover:scale-[3.4]"
                          : "scale-100"
                      }`}
                    />
                  </div>

                  <div className="flex md:hidden items-center gap-2 font-mono text-[10px] opacity-40 uppercase tracking-widest group-hover:opacity-100 group-hover:text-[#008012] transition-all self-center">
                    <span>Acceder</span> <FaArrowRight />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        ))}
      </Motion.main>

      {/* --- SECCIÓN FINAL: INVITACIÓN Y DESCARGAS --- */}
      <Motion.div
        variants={itemVariants}
        className="max-w-6xl mx-auto mt-40 flex flex-col items-center text-center px-4"
      >
        <div className="mb-16 space-y-4">
          <h3
            className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter"
            style={{ color: accentGreen }}
          >
            <span className="mr-2">¿</span>LISTO PARA LA AVENTURA?
          </h3>
          <p className="max-w-2xl mx-auto text-base md:text-lg opacity-80 italic">
            No te quedes solo en el papel. Te invito a sumergirte en el Santo
            Reino, poner a prueba las mecánicas o revisar la documentación
            técnica completa.
          </p>
        </div>

        {/* CONTENEDOR DE BOTONES DE JUGAR Y PDF*/}
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-4xl justify-center items-stretch">
          {/* BOTÓN 1: JUGAR */}
          <div className="flex-1 flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50">
              // <span className="mr-1">¿</span>Deseas jugar?
            </p>
            <a
              href="https://github.com/djsekai34"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-6 font-mono text-xs md:text-sm font-black uppercase tracking-widest overflow-hidden border-2 transition-all duration-300 hover:!text-white flex items-center justify-center gap-3"
              style={{
                borderColor: accentGreen,
                color: isDark ? "white" : "black",
              }}
            >
              <div className="absolute inset-0 w-0 bg-[#008012] transition-all duration-500 ease-out group-hover:w-full -z-10"></div>
              <FaGamepad
                size={22}
                className="shrink-0 transition-colors duration-300"
              />
              <span>Ver Repositorio y Jugar</span>
            </a>
          </div>

          {/* BOTÓN 2: DESCARGAR PDF */}
          <div className="flex-1 flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50">
              // ¿Quieres verlo resumido en una hoja?
            </p>
            <a
              href= {GDDRodolfo}
              download
              className={`group relative px-8 py-6 font-mono text-xs md:text-sm font-black uppercase tracking-widest overflow-hidden border-2 border-red-600 transition-all duration-300 flex items-center justify-center gap-3 hover:text-white ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              <div className="absolute inset-0 w-0 bg-red-600 transition-all duration-500 ease-out group-hover:w-full -z-10"></div>

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Descargar GDD PDF</span>
            </a>
          </div>
        </div>
      </Motion.div>
    </Motion.div>
  );
}