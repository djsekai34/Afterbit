import React from "react";
import { motion as Motion } from "framer-motion";
import ImagenMetroid from "../Imagenes/Pixelmetroid.png";
import JuegoMetroid from "../Imagenes/Pixelmetroidjuego.png";

// 1. Definimos la coreografía: los hijos aparecen uno tras otro (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

// 2. Definimos el movimiento individual: suave subida con desenfoque (Fade + Blur)
const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PixelMetroidExplicacion({ isDark }) {
  const currentTextColor = isDark ? "white" : "black";
  const accentColor = isDark ? "#ff0000" : "#cc0000";

  return (
    <Motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`min-h-screen pt-32 pb-20 px-4 md:px-12 lg:px-24 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Motion.header
        variants={itemVariants}
        className="max-w-6xl mx-auto border-b-8 pb-8 mb-16"
        style={{ borderColor: currentTextColor }}
      >
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs md:text-sm font-bold opacity-60 tracking-[0.5em] block mt-6 md:mt-0">
            // ACADEMIC_MODULE: CORE_SKILLS
          </span>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter break-words md:whitespace-nowrap">
            PIXEL METROID <span style={{ color: accentColor }}>2D</span>
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mt-4">
            <div className="font-mono text-[10px] md:text-xs space-y-2 opacity-80 uppercase tracking-widest flex flex-col items-center md:items-start">
              <p className="flex items-start sm:items-center gap-2 mt-4 md:mt-0">
                <span className="w-2 h-2 bg-red-600 inline-block shrink-0 mt-1.5 sm:mt-0"></span>
                <span className="font-mono text-[10px] xs:text-xs sm:text-sm opacity-80 leading-relaxed uppercase tracking-tight sm:tracking-normal">
                  [ COURSE: ESPECIALIZACIÓN_VIDEOJUEGOS_Y_VR ]
                </span>
              </p>
              <p className="flex items-start sm:items-center gap-2 mt-3 md:mt-0">
                <span className="w-2 h-2 bg-red-600 inline-block shrink-0 mt-1.5 sm:mt-0"></span>
                <span className="font-mono text-[10px] xs:text-xs sm:text-sm opacity-80 leading-relaxed uppercase tracking-tight sm:tracking-normal">
                  [ LOCATION: IES_VIRGEN_DEL_CARMEN_JAEN ]
                </span>
              </p>
            </div>

            <div
              className="w-fit text-center md:text-right font-mono text-[10px] md:text-xs opacity-80 uppercase tracking-widest border-2 px-4 py-2"
              style={{ borderColor: currentTextColor }}
            >
              [ ENGINE: UNITY ]
            </div>
          </div>
        </div>
      </Motion.header>

      <Motion.main variants={itemVariants} className="max-w-5xl mx-auto">
        {/* SECCIÓN 1: ORIGEN */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-start">
          <div className="space-y-6 pt-4">
            <h2
              className="text-3xl font-black italic uppercase border-l-8 pl-4"
              style={{ borderColor: accentColor }}
            >
              Génesis del Proyecto
            </h2>
            <div className="space-y-8 pt-2">
              <div className="space-y-6">
                <p className="text-xl leading-tight opacity-90">
                  Este proyecto nace como un profundo tributo a la legendaria
                  saga{" "}
                  <span className="text-red-600 font-bold">
                    Metroid de Nintendo
                  </span>
                  , pero su propósito trasciende la nostalgia. Fue el eje
                  central de mi aprendizaje en el
                  <span className="font-bold text-red-600">
                    {" "}
                    Curso de Especialización en Desarrollo de Videojuegos y VR
                  </span>{" "}
                  del IES Virgen del Carmen.
                </p>

                <p className="text-lg leading-relaxed opacity-80 border-l-2 pl-6 border-zinc-500">
                  Utilicé este desarrollo como un laboratorio integral para
                  dominar el ciclo de vida de un videojuego: desde la{" "}
                  <span
                    className={`font-bold ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    arquitectura de escenas
                  </span>{" "}
                  y el diseño de mapas interconectados, hasta la creación de
                  personajes complejos y enemigos con IA básica. Fue aquí donde
                  perfeccioné mi{" "}
                  <span
                    className={`font-bold ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    lógica en C#
                  </span>
                  , gestionando sistemas de colisiones, físicas 2D y una
                  integración limpia de <span className="italic">assets</span>{" "}
                  externos.
                </p>

                <p className="text-lg leading-relaxed opacity-80">
                  No se trató solo de programar; fue aprender a{" "}
                  <span className="font-bold uppercase tracking-tighter text-red-600">
                    ordenar un proyecto profesional
                  </span>
                  . Implementé sistemas de audio dinámicos para música y efectos
                  que definen la atmósfera, asegurándome de que cada componente
                  de Unity trabajara en sintonía.
                </p>

                <div
                  className={`p-6 border-2 font-mono text-sm ${
                    isDark
                      ? "bg-zinc-900/50 border-white/10"
                      : "bg-zinc-100 border-black/10"
                  }`}
                >
                  <h4 className="font-black uppercase mb-3 text-red-600 tracking-widest">
                    Mastering_The_Build:
                  </h4>
                  <p className="opacity-70 leading-relaxed">
                    El proceso finalizó con la{" "}
                    <span
                      className={`font-bold ${
                        isDark ? "text-white" : "text-black"
                      }`}
                    >
                      optimización y compilación
                    </span>{" "}
                    del ejecutable. Aprendí a configurar los{" "}
                    <span className="italic">Build Settings</span>, gestionar la
                    compresión de texturas y asegurar que el rendimiento fuera
                    estable, logrando un producto final listo para ser
                    distribuido y jugado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full lg:max-w-[600px] ml-auto">
            <div
              className="relative overflow-hidden border-4 transition-all duration-500 ease-out group hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(220,38,38,0.3)]"
              style={{
                borderColor: currentTextColor,
                aspectRatio: "1550 / 868",
              }}
            >
              <img
                src={ImagenMetroid}
                alt="Metroid Gameplay 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div
              className="relative overflow-hidden border-4 transition-all duration-500 ease-out group mt-20 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(220,38,38,0.3)]"
              style={{
                borderColor: currentTextColor,
                aspectRatio: "1550 / 868",
              }}
            >
              <img
                src={JuegoMetroid}
                alt="Metroid Gameplay 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: DESGLOSE TÉCNICO */}
        <section
          className="border-t-2 pt-16 mb-32"
          style={{
            borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <span className="text-4xl font-black opacity-20 italic">01</span>
              <h3 className="text-xl font-black uppercase italic">
                Arquitectura C#
              </h3>
              <p className="text-sm leading-relaxed opacity-70">
                El mayor reto fue aprender a escribir código escalable.
                Implementé patrones para la gestión de la salud, el movimiento
                basado en físicas (RigidBody2D) y un sistema de proyectiles que
                me permitió entender la instanciación y el ciclo de vida de los
                objetos en memoria.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-4xl font-black opacity-20 italic">02</span>
              <h3 className="text-xl font-black uppercase italic">
                Pipeline de Assets
              </h3>
              <p className="text-sm leading-relaxed opacity-70">
                Aprender a importar no es solo arrastrar archivos. Configuré
                correctamente los Pixels Per Unit (PPU), filtros de textura
                "Point" para mantener el Pixel Art nítido y creé animaciones
                complejas mediante{" "}
                <span className="italic font-bold">Animator Controllers</span> y
                transiciones por parámetros.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-4xl font-black opacity-20 italic">03</span>
              <h3 className="text-xl font-black uppercase italic">
                Diseño de Niveles
              </h3>
              <p className="text-sm leading-relaxed opacity-70">
                Utilicé la herramienta{" "}
                <span className="font-bold">Tilemap de Unity</span> para
                construir el entorno. Esto incluyó el manejo de capas (Sorting
                Layers) para crear profundidad y colisionadores compuestos que
                optimizan el rendimiento del motor físico.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: CONCLUSIÓN */}
        <section
          className={`p-10 md:p-14 border-4 flex flex-col items-center text-center max-w-4xl mx-auto mb-20 ${
            isDark ? "bg-zinc-900" : "bg-zinc-100"
          }`}
          style={{ borderColor: currentTextColor }}
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase mb-6 tracking-tight">
              Objetivo de Aprendizaje Cumplido
            </h2>

            <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-6">
              "Pixel Metroid 2D" fue mi{" "}
              <span className="text-red-600 font-bold">
                primer paso decisivo
              </span>{" "}
              en el
              <span className="font-bold uppercase block mt-1 text-sm md:text-base">
                Curso de Especialización en Videojuegos y VR
              </span>
            </p>

            <p className="text-md opacity-70 mb-8 leading-relaxed">
              Aquí la teoría se volvió práctica. Dominar la{" "}
              <span className="text-red-600 font-bold italic">
                Lógica Integral de un Videojuego
              </span>{" "}
              para que el flujo entre el{" "}
              <span
                className={`font-bold ${isDark ? "text-white" : "text-black"}`}
              >
                movimiento, el salto y el sistema de vida
              </span>{" "}
              del jugador respondiera con total precisión, fue la base necesaria
              para construir lo que será mi juego final del curso:
            </p>

            <div className="mb-10">
              <span className="text-red-600 font-black text-xl md:text-2xl italic uppercase tracking-tighter">
                Super Rodolfo y las esferas del santo reino
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "UNITY_2D_FRAMEWORK",
                "C#_SYSTEM_BUILDER",
                "HEALTH_SYSTEM_LOGIC",
                "GAME_LOGIC_ARCHITECTURE",
                "ACADEMIC_PROJECT",
                "SUPER_RODOLFO_FOUNDATIONS",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] border-2 px-3 py-1.5 opacity-60 hover:opacity-100 hover:border-red-600 transition-all cursor-default"
                  style={{ borderColor: `${currentTextColor}40` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/djsekai34/PixelMetroid2D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <button
              className="group relative border-4 py-6 px-12 font-black italic uppercase overflow-hidden transition-all duration-300 w-full"
              style={{ borderColor: currentTextColor }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                GITHUB_REPOSITORY // VIEW_SOURCE_CODE
              </span>
              <div className="absolute -inset-y-1 -left-1 -right-1 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
            </button>
          </a>
        </div>
      </Motion.main>
    </Motion.div>
  );
}
