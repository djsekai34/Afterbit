import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import MiFoto from "../Imagenes/Foto_Mia.jpg";
import LogoGithubBlanco from "../Imagenes/githubBlanco.png";
import LogoGithubNegro from "../Imagenes/githubNegro.png";
import Linkedin from "../Imagenes/linkedin.png";

export default function SobreMi({ isDark }) {
  const currentTextColor = isDark ? "white" : "black";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <Motion.div
      className={`min-h-screen pt-32 pb-16 px-4 md:px-8 lg:px-16 ${
        isDark ? "text-white bg-black" : "text-black bg-white"
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* TÍTULO PRINCIPAL */}
      <Motion.h1
        className="text-center text-5xl md:text-7xl font-black italic mb-12 uppercase"
        variants={itemVariants}
      >
        / ¿QUIÉN SOY?
      </Motion.h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* COLUMNA FOTO Y REDES */}
        <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
          <Motion.div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4"
            style={{ borderColor: currentTextColor }}
            variants={itemVariants}
          >
            <img
              src={MiFoto}
              alt="David Jiménez"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </Motion.div>

          <Motion.h2
            className="text-3xl font-black italic mt-6 hidden lg:block"
            variants={itemVariants}
          >
            David Jiménez Villena
          </Motion.h2>
          <Motion.p
            className="text-lg opacity-70 mb-8 hidden lg:block"
            variants={itemVariants}
          >
            Desarrollador de Videojuegos & Desarrollador Web
          </Motion.p>
          
          {/* BOTONES GITHUB Y LINKEDIN */}
          <Motion.div
            className="flex space-x-10 mt-12 justify-center w-full"
            variants={itemVariants}
          >
            <a
              href="https://github.com/djsekai34"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-all duration-300"
            >
              <div
                className={`w-20 h-20 flex items-center justify-center border-2 transition-all duration-500 transform group-hover:-translate-y-3 ${
                  isDark
                    ? "border-white/10 group-hover:border-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                    : "border-black/10 group-hover:border-black group-hover:shadow-[0_0_30px_rgba(0,0,0,0.1)]"
                }`}
              >
                <img
                  src={isDark ? LogoGithubBlanco : LogoGithubNegro}
                  alt="GitHub"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 group-hover:translate-y-[-4px] transition-all">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/david-jimenez-villena/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-all duration-300"
            >
              <div
                className={`w-20 h-20 flex items-center justify-center border-2 transition-all duration-500 transform group-hover:-translate-y-3 ${
                  isDark
                    ? "border-white/10 group-hover:border-[#0077b5] group-hover:shadow-[0_0_30px_rgba(0,119,181,0.4)]"
                    : "border-black/10 group-hover:border-[#0077b5] group-hover:shadow-[0_0_30px_rgba(0,119,181,0.2)]"
                }`}
              >
                <img
                  src={Linkedin}
                  alt="LinkedIn"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 group-hover:translate-y-[-4px] transition-all">
                LinkedIn
              </span>
            </a>
          </Motion.div>
        </div>

        {/* COLUMNA CONTENIDO PRINCIPAL */}
        <div className="lg:col-span-2">
          <Motion.h2
            className="text-3xl font-black italic mt-6 lg:hidden text-center"
            variants={itemVariants}
          >
            David Jiménez Villena
          </Motion.h2>
          <Motion.p
            className="text-lg opacity-70 mb-8 lg:hidden text-center"
            variants={itemVariants}
          >
            Desarrollador de Videojuegos & Desarrollador Web
          </Motion.p>

          {/* SECCIÓN PERFIL BIO */}
          <Motion.section className="mb-20" variants={itemVariants}>
            <div
              className="flex justify-between items-end border-b-4 pb-2 mb-10"
              style={{ borderColor: currentTextColor }}
            >
              <h3 className="text-xl md:text-2xl font-black uppercase italic">
                / PERFIL
              </h3>
              <span className="font-mono text-[10px] opacity-50 tracking-[0.3em] hidden md:block">
                ID: djsekai34
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-center">
              <div
                className="md:col-span-7 border-b-4 pb-8 md:pb-0 md:border-b-0 md:border-r-4 md:pr-8"
                style={{ borderColor: currentTextColor }}
              >
                <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-tighter">
                  DAVID
                  <br />
                  JIMÉNEZ
                  <br />
                  VILLENA<span className="text-red-600">.</span>
                </h2>
              </div>

              {/* DERECHA: TARJETAS APILADAS */}
              <div className="md:col-span-5 flex flex-col gap-3 max-w-[280px] mx-auto md:mx-0">
                <div
                  className="p-3 border-2 border-dashed"
                  style={{ borderColor: currentTextColor }}
                >
                  <span className="font-mono text-[9px] uppercase opacity-50 block mb-1 italic">
                    Engine_Mastery
                  </span>
                  <p className="font-black italic text-lg uppercase leading-none">
                    UNITY ENGINE
                  </p>
                  <p className="text-[10px] mt-1 opacity-70">
                    Sistemas y mecánicas.
                  </p>
                </div>

                <div
                  className="p-3 border-2 border-dashed"
                  style={{ borderColor: currentTextColor }}
                >
                  <span className="font-mono text-[9px] uppercase opacity-50 block mb-1 italic">
                    Web_Architecture
                  </span>
                  <p className="font-black italic text-lg uppercase leading-none">
                    FULLSTACK DEV
                  </p>
                  <p className="text-[10px] mt-1 opacity-70">
                    Webs personalizadas.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="border-t-2 mb-10 opacity-20"
              style={{ borderColor: currentTextColor }}
            ></div>

            <div className="max-w-4xl space-y-8 text-lg md:text-xl leading-relaxed">
              <p
                className="font-black uppercase italic text-2xl"
                style={{ color: isDark ? "#ff0000" : "#cc0000" }}
              >
                Gaming & Code: Una evolución natural
              </p>

              <div className="space-y-6 opacity-90 text-lg md:text-xl">
                <p>
                  Mi relación con la tecnología no es nueva; es una pasión que
                  empezó a los 6 años con un mando de la PS2 en las manos. Lo
                  que comenzó como pura curiosidad infantil se convirtió en mi
                  profesión tras completar el{" "}
                  <span
                    className="inline-block border-b-4 leading-none font-bold"
                    style={{ borderColor: currentTextColor }}
                  >
                    Grado en Desarrollo de Aplicaciones Web (DAW)
                  </span>
                  , donde aprendí a construir los cimientos del internet
                  moderno.
                </p>

                <p>
                  Actualmente, me encuentro cursando la{" "}
                  <span
                    className="inline-block border-b-4 leading-none font-bold"
                    style={{ borderColor: currentTextColor }}
                  >
                    Especialización en Videojuegos y VR
                  </span>
                  , el paso definitivo para fusionar mis dos grandes pasiones:
                  jugar y crear. He pasado de ser un espectador a ser el
                  arquitecto que diseña cada interacción detrás de la pantalla.{" "}
                </p>

                <p
                  className="border-l-4 pl-6 italic font-medium py-2"
                  style={{ borderColor: currentTextColor }}
                >
                  "He convertido mi curiosidad de la infancia en mi arquitectura
                  de trabajo, uniendo la interactividad de los videojuegos con
                  la robustez del desarrollo web."
                </p>

                <p>
                  <span
                    className="px-1 font-black uppercase tracking-tighter"
                    style={{
                      backgroundColor: currentTextColor,
                      color: isDark ? "black" : "white",
                    }}
                  >
                    Afterbit
                  </span>{" "}
                  es el resultado final de esta fusión: un espacio donde
                  proyecto mi evolución en la industria del gaming a través de
                  los títulos que he desarrollado, junto a mi experiencia
                  técnica creando plataformas web con diversas tecnologías de
                  vanguardia.
                </p>
              </div>
            </div>
          </Motion.section>

          {/* SECCIÓN HOJA DE RUTA */}
          <Motion.section className="mb-12" variants={itemVariants}>
            <h3
              className="text-xl md:text-2xl font-black italic mb-8 uppercase tracking-[0.3em]"
              style={{
                borderBottom: `1px solid ${currentTextColor}`,
                paddingBottom: "0.5rem",
              }}
            >
              / HOJA DE RUTA AFTERBIT
            </h3>

            <div className="text-lg md:text-xl leading-relaxed opacity-90 space-y-10">
              <p>
                Afterbit constituye el nodo central de todos los desarrollos
                ejecutados durante el
                <span
                  className="font-bold italic ml-2"
                  style={{ color: currentTextColor }}
                >
                  Curso de Especialización en Videojuegos y VR.
                </span>
              </p>

              <div
                className="relative group p-6 border-4 overflow-hidden"
                style={{ borderColor: currentTextColor }}
              >
                <div className="absolute top-0 right-0 p-2 font-mono text-[10px] opacity-20 uppercase vertical-text">
                  Main_Project_v1.0
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.4em] mb-2 block opacity-60 italic">
                  PILAR CENTRAL // PLATAFORMAS
                </span>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
                  Super Rodolfo y las Esferas del Santo Reino
                </h2>
                <p className="text-base md:text-lg max-w-2xl font-medium">
                  Mi obra principal. Un desafío técnico donde he volcado toda mi
                  visión sobre el diseño de niveles, mecánicas de precisión y
                  sistemas complejos en Unity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="p-4 border-2 flex flex-col justify-between"
                  style={{ borderColor: currentTextColor }}
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase opacity-50 block mb-1">
                      Desktop Gaming
                    </span>
                    <p className="font-black uppercase italic text-lg leading-tight">
                      Juegos en PC 2D y en 3D
                    </p>
                  </div>
                  <p className="text-sm mt-2 opacity-70">
                    Desarrollo de experiencias clásicas y mecánicas
                    tradicionales para ordenador.
                  </p>
                </div>

                <div
                  className="p-4 border-2 flex flex-col justify-between"
                  style={{ borderColor: currentTextColor }}
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase opacity-50 block mb-1">
                      Mobile & Inmersive Tech
                    </span>
                    <p className="font-black uppercase italic text-lg leading-tight">
                      Realidad Aumentada & Juegos Móviles
                    </p>
                  </div>
                  <p className="text-sm mt-2 opacity-70">
                    Creación de experiencias de realidad aumentada y desarrollo
                    de juegos móviles nativos.
                  </p>
                </div>
              </div>

              <p className="text-sm font-mono opacity-60 italic">
                {">"} Afterbit funciona como el archivo de todo lo realizado en
                mi curso de especialización.
              </p>
            </div>
          </Motion.section>

          {/* SECCIÓN CONTACTO Y BOTONES */}
          <Motion.section className="mt-20" variants={itemVariants}>
            <div
              className="border-t-4 mb-10 opacity-100"
              style={{ borderColor: currentTextColor }}
            ></div>

            <div className="mb-8 space-y-2">
              <p className="font-mono text-[10px] uppercase opacity-50 tracking-[0.4em]">
                // ESTADO: DISPONIBLE_PARA_PROYECTOS
              </p>
              <h4 className="text-2xl md:text-3xl font-black uppercase italic leading-tight">
                Si te interesa profundizar en mi trabajo, <br />
                no dudes en{" "}
                <span style={{ color: isDark ? "#ff0000" : "#cc0000" }}>
                  explorar mi portafolio
                </span>{" "}
                o conectar conmigo.
              </h4>
            </div>

            <Motion.div
              className="flex flex-col md:flex-row gap-6"
              variants={itemVariants}
            >
              {/* BOTÓN PORTAFOLIO */}
              <a
                href="https://djsekai34.github.io/DJVPortFolio/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex-1 border-4 py-6 px-8 transition-all duration-300 transform hover:scale-[1.02] hover:-rotate-1 active:scale-95
                ${
                  isDark
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <span className="block font-mono text-[9px] uppercase opacity-50">
                      View_Works_v2.0
                    </span>
                    <span className="text-2xl font-black uppercase italic tracking-tighter">
                      Ver Portafolio
                    </span>
                  </div>
                  <span className="text-3xl transform group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </a>

              {/* BOTÓN CONTACTAR */}
              <Link
                to="/Contacto"
                className={`group flex-1 border-4 py-6 px-8 transition-all duration-300 transform hover:scale-[1.02] hover:rotate-1 active:scale-95
                ${
                  isDark
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <span className="block font-mono text-[9px] uppercase opacity-50">
                      Open_Communication
                    </span>
                    <span className="text-2xl font-black uppercase italic tracking-tighter">
                      Contactar
                    </span>
                  </div>
                  <span className="text-3xl transform group-hover:-rotate-45 transition-transform">
                    ↗
                  </span>
                </div>
              </Link>
            </Motion.div>
          </Motion.section>
        </div>
      </div>
    </Motion.div>
  );
}