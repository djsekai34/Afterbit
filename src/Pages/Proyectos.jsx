import React from "react";
import { motion } from "framer-motion";

import ImagenRodolfo from "../Imagenes/LogoJuego.png";
import ImagenMetroid from "../Imagenes/PixelMetroid.png";
import ImagenXR from "../Imagenes/XRAdventure.jpeg";
import { Link } from "react-router-dom";

export default function Proyectos({ isDark }) {
  const currentTextColor = isDark ? "white" : "black";
  const accentColor = isDark ? "#ff0000" : "#cc0000";

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      className={`min-h-screen pt-32 pb-16 px-4 md:px-8 lg:px-16 overflow-x-hidden ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* TÍTULO PRINCIPAL */}
      <motion.h1
        className="text-4xl md:text-7xl lg:text-9xl font-black italic uppercase mb-20 tracking-tighter"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        / PROYECTS<span style={{ color: accentColor }}>_</span>
      </motion.h1>

      <div className="max-w-6xl mx-auto space-y-40">
        
        {/* --- SECCIÓN 01: SUPER RODOLFO --- */}
        <motion.section
          id="rodolfo"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t-4 pt-12"
          style={{ borderColor: currentTextColor }}
          initial="hidden"
          animate="visible" 
          variants={itemVariants}
        >
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs font-bold opacity-50 uppercase tracking-[0.4em] block">
              [ CODE_01 ] // PROYECTO FINAL
            </span>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase leading-[0.9] tracking-tighter">
              Super Rodolfo y las esferas del santo reino
            </h2>
            <div className="flex flex-wrap justify-center lg:justify-center gap-3 py-6 w-full">
              {["Unity 2D", "C#", "Final Project", "Symmetry & Logic"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border-2 px-3 py-1 text-[10px] font-black uppercase italic"
                    style={{ borderColor: currentTextColor }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <p
              className="text-lg opacity-90 leading-tight font-medium border-l-4 pl-4"
              style={{ borderColor: accentColor }}
            >
              Mi juego final demostrando todo lo aprendido en el{" "}
              <span className="text-red-600 font-bold">
                Curso de Especialización en Desarrollo de Videojuegos y Realidad
                Virtual
              </span>{" "}
              para el IES Virgen del Carmen. Un desafío técnico donde volqué
              meses de desarrollo en mecánicas de precisión y sistemas
              complejos.
            </p>
            <Link to="/Proyectos/SuperRodolfo" className="w-full md:w-auto">
              <button
                className="group relative w-full md:w-auto border-4 py-4 px-8 font-black italic uppercase overflow-hidden transition-all duration-300"
                style={{ borderColor: currentTextColor }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Ejecutar_Rodolfo.exe
                </span>
                <div className="absolute -inset-y-1 -left-1 -right-1 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              </button>
            </Link>
          </div>
          <div
            className={`lg:col-span-7 group relative aspect-video overflow-hidden border-4 flex items-center justify-center transition-colors duration-300 ${
              isDark ? "bg-zinc-900" : "bg-zinc-500"
            }`}
            style={{ borderColor: currentTextColor }}
          >
            <img
              src={ImagenRodolfo}
              alt="Rodolfo Logo"
              className="w-full h-full object-contain p-4 md:p-6 scale-125 md:scale-110 group-hover:scale-145 md:group-hover:scale-125 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 font-mono text-[10px] uppercase font-bold">
              Status: Gold_Build
            </div>
          </div>
        </motion.section>

        {/* --- SECCIÓN 02: PIXEL METROID --- */}
        <motion.section
          id="metroid"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t-4 pt-12"
          style={{ borderColor: currentTextColor }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <div
            className="lg:col-span-7 order-2 lg:order-1 aspect-video bg-zinc-900 overflow-hidden border-4"
            style={{ borderColor: currentTextColor }}
          >
            <img
              src={ImagenMetroid}
              alt="Metroid"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <span className="font-mono text-xs font-bold opacity-50 uppercase tracking-[0.4em] block">
              [ CODE_02 ] // CORE_LEARNING_STATION
            </span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-[0.85] tracking-tighter">
              Pixel Metroid 2D
            </h2>
            <div className="flex flex-wrap justify-center lg:justify-center gap-2 py-4 w-full">
              {[
                "Unity 2D",
                "Sprite Animation",
                "Tilemaps",
                "Logic & Structure",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border-2 px-2 py-1 text-[9px] font-black uppercase italic"
                  style={{ borderColor: currentTextColor }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p
              className="text-xl opacity-90 leading-tight font-medium border-l-4 pl-4"
              style={{ borderColor: accentColor }}
            >
              Videojuego realizado para dominar los{" "}
              <span className="text-red-600 font-bold">
                fundamentos de Unity
              </span>
              , la gestión de estados en 2D y el diseño de niveles clásicos. Una
              base sólida en{" "}
              <span className="text-red-600 font-bold">
                lógica de videojuegos
              </span>{" "}
              y arquitectura de software.
            </p>
            <Link to="/Proyectos/PixelMetroid2D" className="w-full md:w-auto">
              <button
                className="group relative w-full md:w-auto border-4 py-4 px-8 font-black italic uppercase overflow-hidden transition-all duration-300"
                style={{ borderColor: currentTextColor }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Ejecutar_Metroid.exe
                </span>
                <div className="absolute -inset-y-1 -left-1 -right-1 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              </button>
            </Link>
          </div>
        </motion.section>

        {/* --- SECCIÓN 03: XR ADVENTURE --- */}
        <motion.section
          id="xr"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t-4 pt-12"
          style={{ borderColor: currentTextColor }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs font-bold opacity-50 uppercase tracking-[0.4em] block">
              [ CODE_03 ] // INMERSIVE_TECH
            </span>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-[0.85] tracking-tighter">
              XR Adventure
            </h2>

            <div className="flex flex-wrap justify-center lg:justify-center gap-1.5 py-4 w-full">
              {[
                "ANDROID_BUILD",
                "Google ARCore",
                "Interaction Toolkit",
                "Mixed Reality",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border-2 px-2 py-0.5 text-[8px] font-black uppercase italic whitespace-nowrap"
                  style={{ borderColor: currentTextColor }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p
              className="text-xl opacity-90 leading-tight font-medium border-l-4 pl-4"
              style={{ borderColor: accentColor }}
            >
              Experiencias de realidad mixta donde exploro la interacción entre
              el mundo físico y digital. Desarrollado con{" "}
              <span className="text-red-600 font-bold">Google ARCore</span>,
              permitiendo manipular, rotar y posicionar objetos virtuales en
              entornos reales
            </p>

            <Link to="/Proyectos/XRAdventure" className="w-full md:w-auto">
              <button
                className="group relative w-full md:w-auto border-4 py-4 px-8 font-black italic uppercase overflow-hidden transition-all duration-300"
                style={{ borderColor: currentTextColor }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Ejecutar_XR_Adventure.exe
                </span>
                <div className="absolute -inset-y-1 -left-1 -right-1 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              </button>
            </Link>
          </div>

          <div
            className={`lg:col-span-7 group relative aspect-video overflow-hidden border-4 flex items-center justify-center transition-colors duration-300 ${
              isDark ? "bg-zinc-900" : "bg-zinc-500"
            }`}
            style={{ borderColor: currentTextColor }}
          >
            <img
              src={ImagenXR}
              alt="XR Adventure"
              className="w-full h-full object-contain p-5 md:p-2"
            />
          </div>
        </motion.section>
      </div>

      {/* FOOTER */}
      <footer
        className={`mt-40 border-t-4 py-12 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
          isDark
            ? "border-white text-white opacity-80"
            : "border-black text-black opacity-90"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 px-2">
          <div className="flex items-center gap-3">
            <span
              className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                isDark ? "bg-red-500" : "bg-red-600"
              }`}
            ></span>
            <span className="font-bold">System_Status: Online</span>
          </div>
          <span className="font-black italic text-lg md:text-xl tracking-tighter border-x-2 px-4">
            AFTERBIT_CORE_STATION
          </span>
          <div className="font-bold">
            Build: {new Date().toLocaleDateString().replace(/\//g, ".")}
          </div>
        </div>
        <div
          className={`text-center pt-8 border-t-2 border-dashed ${
            isDark ? "border-white/30" : "border-black/20"
          }`}
        >
          <p className="font-black text-sm md:text-base mb-1">
            David Jiménez Villena — Afterbit
          </p>
          <p className="opacity-60">
            Copyright © {new Date().getFullYear()} // All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}