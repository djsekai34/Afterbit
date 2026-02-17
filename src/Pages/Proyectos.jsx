import React from "react";
import { motion as Motion } from "framer-motion";

import ImagenRodolfo from "../Imagenes/LogoJuego.png";
import ImagenRodolfoStrike from "../Imagenes/LogoSRS.png";
import ImagenMetroid from "../Imagenes/Pixelmetroid.png";
import ImagenXR from "../Imagenes/XRAdventure.jpeg";
import { Link } from "react-router-dom";

export default function Proyectos({ isDark }) {
  const currentTextColor = isDark ? "white" : "black";
  const accentColor = isDark ? "#ff0000" : "#cc0000";
  const rodolfoGreen = "#008012";

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
      <Motion.h1
        className="text-4xl md:text-7xl lg:text-9xl font-black italic uppercase mb-20 tracking-tighter"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        / PROYECTS<span style={{ color: accentColor }}>_</span>
      </Motion.h1>

      <div className="max-w-6xl mx-auto space-y-40">
        {/* --- SECCIÓN 01: SUPER RODOLFO (Texto Izq | Imagen Der) --- */}
        <Motion.section
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
                ),
              )}
            </div>
            <p
              className="text-lg opacity-90 leading-tight font-medium border-l-4 pl-4"
              style={{ borderColor: rodolfoGreen }}
            >
              Mi juego final demostrando todo lo aprendido en el{" "}
              <span style={{ color: rodolfoGreen }} className="font-bold">
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
                <div
                  className="absolute -inset-y-1 -left-1 -right-1 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"
                  style={{ backgroundColor: rodolfoGreen }}
                />
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
            <div
              style={{ backgroundColor: rodolfoGreen }}
              className="absolute top-4 right-4 text-white px-3 py-1 font-mono text-[10px] uppercase font-bold"
            >
              Status: Gold_Build
            </div>
          </div>
        </Motion.section>

        {/* --- SECCIÓN 02: SUPER RODOLFO STRIKE   --- */}
        <Motion.section
          id="rodolfo-strike"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t-4 pt-12"
          style={{ borderColor: currentTextColor }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <div
            className={`lg:col-span-7 order-2 lg:order-1 aspect-video overflow-hidden border-4 flex items-center justify-center transition-colors duration-300 ${
              isDark ? "bg-zinc-900" : "bg-zinc-500"
            }`}
            style={{ borderColor: currentTextColor }}
          >
            <img
              src={ImagenRodolfoStrike}
              alt="Rodolfo Strike Logo"
              className="w-full h-full object-contain p-6 scale-110 hover:scale-125 transition-transform duration-500"
            />
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <span className="font-mono text-xs font-bold opacity-50 uppercase tracking-[0.4em] block">
              [ CODE_02 ] // MOBILE_SPIN_OFF
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-[0.85] tracking-tighter">
              Super Rodolfo Strike
            </h2>
            <div className="flex flex-wrap justify-center lg:justify-center gap-2 py-4 w-full">
              {["Unity Mobile", "Android", "C#", "Touch Controls"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border-2 px-2 py-1 text-[9px] font-black uppercase italic"
                    style={{ borderColor: currentTextColor }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
            <p
              className="text-xl opacity-90 leading-tight font-medium border-l-4 pl-4"
              style={{ borderColor: rodolfoGreen }}
            >
              Spin-off móvil donde jugamos a los bolos con{" "}
              <span style={{ color: rodolfoGreen }} className="font-bold">
                Rodolfo
              </span>{" "}
              y los bolos son los{" "}
              <span style={{ color: rodolfoGreen }} className="font-bold">
                enemigos del Santo Reino
              </span>
              . Un proyecto clave para dominar la clase{" "}
              <span
                style={{ color: rodolfoGreen }}
                className="font-bold italic"
              >
                TouchScreen
              </span>{" "}
              y hacer build para dispositivos Android bajo el sello de{" "}
              <span
                style={{ color: rodolfoGreen }}
                className="font-bold italic"
              >
                Afterbit
              </span>
              .
            </p>
            <Link
              to="/Proyectos/SuperRodolfoStrike"
              className="w-full md:w-auto"
            >
              <button
                className="group relative w-full md:w-auto border-4 py-4 px-8 font-black italic uppercase overflow-hidden transition-all duration-300"
                style={{ borderColor: currentTextColor }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Ejecutar_SRStrike.apk
                </span>
                <div
                  className="absolute -inset-y-1 -left-1 -right-1 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"
                  style={{ backgroundColor: rodolfoGreen }}
                />
              </button>
            </Link>
          </div>
        </Motion.section>

        {/* --- SECCIÓN 03: PIXEL METROID --- */}
        <Motion.section
          id="metroid"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t-4 pt-12"
          style={{ borderColor: currentTextColor }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs font-bold opacity-50 uppercase tracking-[0.4em] block">
              [ CODE_03 ] // CORE_LEARNING_STATION
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
          <div
            className={`lg:col-span-7 group relative aspect-video overflow-hidden border-4 flex items-center justify-center transition-colors duration-300 bg-zinc-900`}
            style={{ borderColor: currentTextColor }}
          >
            <img
              src={ImagenMetroid}
              alt="Metroid"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Motion.section>

        {/* --- SECCIÓN 04: XR ADVENTURE --- */}
        <Motion.section
          id="xr"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t-4 pt-12"
          style={{ borderColor: currentTextColor }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <div
            className={`lg:col-span-7 order-2 lg:order-1 group relative aspect-video overflow-hidden border-4 flex items-center justify-center transition-colors duration-300 ${isDark ? "bg-zinc-900" : "bg-zinc-500"}`}
            style={{ borderColor: currentTextColor }}
          >
            <img
              src={ImagenXR}
              alt="XR Adventure"
              className="w-full h-full object-contain p-2 md:p-4 scale-125 transition-transform duration-500 group-hover:scale-145"
            />
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <span className="font-mono text-xs font-bold opacity-50 uppercase tracking-[0.4em] block">
              [ CODE_04 ] // INMERSIVE_TECH
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
              style={{ borderColor: "#0066ff" }}
            >
              Experiencias de realidad mixta donde exploro la interacción entre
              el mundo físico y digital. Desarrollado con{" "}
              <span className="text-blue-600 font-bold">Google ARCore</span>,
              permitiendo manipular, rotar y posicionar objetos virtuales en
              entornos reales.
            </p>
            <Link to="/Proyectos/XRAdventure" className="w-full md:w-auto">
              <button
                className="group relative w-full md:w-auto border-4 py-4 px-4 md:px-8 font-black italic uppercase overflow-hidden transition-all duration-300"
                style={{ borderColor: currentTextColor }}
              >
                <span className="relative z-10 text-[10px] md:text-sm transition-colors duration-300 group-hover:text-white block text-center break-all">
                  Ejecutar_XR_Adventure.apk
                </span>
                <div className="absolute -inset-y-1 -left-1 -right-1 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              </button>
            </Link>
          </div>
        </Motion.section>
      </div>
    </div>
  );
}