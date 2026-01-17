import React from "react";
import { motion } from "framer-motion";
import ImagenVerticalAR from "../Imagenes/XRAdventure.jpeg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function XRAdventureExplicacion({ isDark }) {
  const currentTextColor = isDark ? "white" : "black";
  // CAMBIO: Color de acento actualizado a #0414ec
  const accentColor = "#0414ec";

  const Highlight = ({ children }) => (
    <span
      className={`px-1.5 py-0.5 rounded-sm font-black uppercase tracking-tighter ${
        isDark ? "bg-[#0414ec]/20 text-blue-400" : "bg-blue-100 text-[#0414ec]"
      }`}
    >
      {children}
    </span>
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`min-h-screen pt-32 pb-20 px-4 md:px-12 lg:px-24 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* --- SECCIÓN: HEADER TÉCNICO --- */}
      <motion.header
        variants={itemVariants}
        className="max-w-6xl mx-auto border-b-8 pb-8 mb-16"
        style={{ borderColor: currentTextColor }}
      >
        <div className="flex flex-col gap-6">
          <span className="font-mono text-sm font-bold opacity-60 tracking-[0.5em] block">
            // ACADEMIC_MODULE: AUGMENTED_REALITY
          </span>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter break-words">
            <span style={{ color: accentColor }}>XR </span> ADVENTURE
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mt-4">
            <div className="font-mono text-[10px] md:text-xs space-y-2 opacity-80 uppercase tracking-widest flex flex-col items-center md:items-start">
              <p className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 lg:w-2 lg:h-2 inline-block shrink-0"
                  style={{ backgroundColor: accentColor }}
                ></span>
                <span className="text-[8px] md:text-[11px] lg:text-xs leading-none">
                  [ COLLABORATIVE_PROJECT: DAVID_JIMENEZ & PARTNER ]
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span
                  className="w-2 h-2 inline-block shrink-0"
                  style={{ backgroundColor: accentColor }}
                ></span>
                <span>[ TECHNOLOGY: GOOGLE_ARCORE ]</span>
              </p>
            </div>

            <div
              className="w-fit text-center md:text-right font-mono text-[10px] md:text-xs opacity-80 uppercase tracking-widest border-2 px-4 py-2"
              style={{ borderColor: currentTextColor }}
            >
              [ PLATFORM: ANDROID_XR ]
            </div>
          </div>
        </div>
      </motion.header>

      <motion.main variants={itemVariants} className="max-w-5xl mx-auto">
        {/* --- SECCIÓN: INTRODUCCIÓN Y GÉNESIS --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-start">
          <div className="space-y-6 pt-4">
            <h2
              className="text-3xl font-black italic uppercase border-l-8 pl-4"
              style={{ borderColor: accentColor }}
            >
              Génesis del Proyecto
            </h2>
            <div className="space-y-8 pt-2">
              <div className="space-y-6 text-base leading-relaxed opacity-80">
                <p className="text-lg md:text-xl leading-tight opacity-90">
                  XRAdventure nace como un desafío de vanguardia en el
                  <span style={{ color: accentColor }} className="font-bold">
                    {" "}
                    Curso de Especialización
                  </span>
                  . El objetivo: llevar la experiencia{" "}
                  <span style={{ color: accentColor }} className="font-bold">
                    Pokémon
                  </span>{" "}
                  más allá de la pantalla, integrándola en nuestro mundo
                  mediante Realidad Aumentada avanzada.
                </p>

                <p className="border-l-2 pl-6 border-zinc-500 text-sm md:text-base">
                  Este proyecto fue un{" "}
                  <Highlight>esfuerzo colaborativo</Highlight> intenso. Junto a
                  mi compañero, diseñamos una arquitectura que permitiera el{" "}
                  <Highlight>posicionamiento preciso de criaturas</Highlight>{" "}
                  usando
                  <span className="font-bold"> Google ARCore</span>. Gestionamos
                  el flujo en Git para coordinar la integración técnica. Para
                  optimizar el almacenamiento, implementamos un sistema donde
                  los
                  <Highlight>
                    modelos 3D se descargan dinámicamente desde Google Drive
                  </Highlight>
                  , manteniendo la aplicación ligera y actualizable.
                </p>

                <p className="text-sm md:text-base">
                  No se trata de simples imágenes estáticas; los Pokémon son
                  totalmente interactivos. El usuario puede{" "}
                  <Highlight>rotar y mover</Highlight> a las criaturas en el
                  espacio físico para buscar el ángulo perfecto. Además,
                  incluimos una funcionalidad para{" "}
                  <Highlight>capturar fotografías</Highlight> directamente desde
                  la app y
                  <Highlight>compartirlas al instante con amigos</Highlight>,
                  cerrando el círculo de la experiencia social.
                </p>

                <div
                  className={`p-6 border-2 font-mono text-[11px] md:text-xs ${
                    isDark
                      ? "bg-zinc-900/50 border-white/10"
                      : "bg-zinc-100 border-black/10"
                  }`}
                >
                  <h4
                    style={{ color: accentColor }}
                    className="font-black uppercase mb-3 tracking-widest"
                  >
                    Interaction_Module:
                  </h4>
                  <p className="opacity-70 leading-relaxed italic">
                    Logramos una <Highlight>manipulación fluida</Highlight> de
                    los modelos mediante gestos táctiles integrados con ARCore,
                    permitiendo que el usuario posicione y rote a su Pokémon en
                    el mundo real.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              className="relative overflow-hidden border-4 group transition-all duration-500 hover:shadow-[0_0_50px_rgba(4,20,236,0.3)]"
              style={{
                borderColor: currentTextColor,
                width: "min(100%, 350px)",
                aspectRatio: "921 / 2048",
              }}
            >
              <img
                src={ImagenVerticalAR}
                alt="AR Gameplay"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, ${accentColor}33, transparent)`,
                }}
              />
            </div>
          </div>
        </section>

        {/* --- SECCIÓN: CARACTERÍSTICAS TÉCNICAS --- */}
        <section
          className="border-t-2 pt-16 mb-20"
          style={{
            borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <span className="text-4xl font-black opacity-20 italic">01</span>
              <h3 className="text-xl font-black uppercase italic">
                ARCore Tracking
              </h3>
              <p className="text-sm leading-relaxed opacity-70">
                Detección de superficies para un asentamiento realista,
                permitiendo mover y rotar libremente al Pokémon sobre el suelo
                detectado.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-4xl font-black opacity-20 italic">02</span>
              <h3 className="text-xl font-black uppercase italic">
                Drive Asset Loading
              </h3>
              <p className="text-sm leading-relaxed opacity-70">
                Integración con Google Drive API para el almacenaje y descarga
                dinámica de los modelos 3D, optimizando el peso de la build
                final.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-4xl font-black opacity-20 italic">03</span>
              <h3 className="text-xl font-black uppercase italic">
                Social Capture
              </h3>
              <p className="text-sm leading-relaxed opacity-70">
                Sistema de renderizado de captura y API nativa para compartir
                las fotos de tus Pokémon con amigos al instante.
              </p>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN: OBJETIVO DE APRENDIZAJE --- */}
        <section
          className={`p-10 md:p-14 border-4 flex flex-col items-center text-center max-w-4xl mx-auto mb-10 mt-[-2rem] md:mt-[5rem] relative z-10 ${
            isDark ? "bg-zinc-900" : "bg-zinc-100"
          }`}
          style={{ borderColor: currentTextColor }}
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase mb-6 tracking-tight">
              Objetivo de Aprendizaje Cumplido
            </h2>

            <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-6">
              "XR Adventure" representa mi éxito en el dominio de la{" "}
              <span style={{ color: accentColor }} className="font-bold">
                Realidad Aumentada
              </span>{" "}
              y la arquitectura de sistemas escalables con gestión en la nube.
            </p>

            <p className="text-md opacity-70 mb-10 leading-relaxed">
              A través de este proyecto, he perfeccionado el uso de{" "}
              <span style={{ color: accentColor }} className="font-bold italic">
                Google ARCore
              </span>{" "}
              para la detección de superficies, pero también la{" "}
              <span
                className={`font-bold ${isDark ? "text-white" : "text-black"}`}
              >
                integración de APIs en la nube
              </span>
              . Lograr que todo el contenido 3D se sincronice y funcione
              dinámicamente vía Google Drive fue un resto técnico clave. Además,
              el <span className="font-bold italic">trabajo en equipo</span> con
              mi compañero fue fundamental para coordinar flujos de trabajo y
              resolver la integración de sistemas en tiempo real.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "GOOGLE_ARCORE",
                "CLOUD_DRIVE",
                "TEAM_COLLABORATION",
                "DYNAMIC_ASSET_MANAGEMENT",
                "XR_INTERFACE_DESIGN",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] border-2 px-3 py-1.5 opacity-60 hover:opacity-100 transition-all cursor-default"
                  style={{ borderColor: `${currentTextColor}40` }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = accentColor)
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")} // Esto limpia el color del hover y vuelve al original
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECCIÓN: BOTONES DE ACCIÓN --- */}
        <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="https://github.com/FTorrent-63/XRAdventure"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-sm"
          >
            <button
              className="group relative border-4 py-6 px-12 font-black italic uppercase overflow-hidden transition-all duration-300 w-full"
              style={{ borderColor: currentTextColor }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                VIEW_REPOSITORY
              </span>
              <div
                className="absolute -inset-y-1 -left-1 -right-1 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"
                style={{ backgroundColor: accentColor }}
              />
            </button>
          </a>

          <a
            href="https://github.com/FTorrent-63"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-sm"
          >
            <button
              className="group relative border-4 py-6 px-12 font-black italic uppercase overflow-hidden transition-all duration-300 w-full"
              style={{ borderColor: currentTextColor }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                PARTNER_PROFILE
              </span>
              <div
                className="absolute -inset-y-1 -left-1 -right-1 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"
                style={{ backgroundColor: accentColor }}
              />
            </button>
          </a>
        </div>
      </motion.main>
    </motion.div>
  );
}
