import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImagenRodolfo from "../Imagenes/LogoJuego.png";
import Metroid2d from "../Imagenes/Pixelmetroid.png";
import XRAdventure from "../Imagenes/XRAdventure.jpeg";
import SuperRodolofStrike from "../Imagenes/LogoSRS.png";

export default function Cuerpo({ isDark }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const proyectos = [
    {
      id: 1,
      title: "Super Rodolfo y las Esferas del Santo Reino",
      desc: "Proyecto Final: Plataformas 2D ambientado en Jaén, desarrollado para el dominio de mecánicas clásicas y diseño de niveles.",
      tag: "Gamedev",
      image: ImagenRodolfo,
      link: "/Proyectos/SuperRodolfo",
    },
    {
      id: 2,
      title: "Pixel Metroid 2D",
      desc: "Dominio técnico de Unity 2D: mecánicas de exploración, arquitectura de estados y gestión de físicas.",
      tag: "Learning",
      image: Metroid2d,
      link: "/Proyectos/PixelMetroid2D",
    },
    {
      id: 3,
      title: "XRAdventure",
      desc: "Aplicacion movil de realidad aumentada para posicionar objetos y rotarlos en un entorno real.",
      tag: "Mixed Reality Experience",
      image: XRAdventure,
      link: "/Proyectos/XRAdventure",
    },
    {
      id: 4,
      title: "Super Rodolfo Strike",
      desc: "Videojuego 2D de movil estilo bolos, donde jugamos a la bolera con Rodolfo.",
      tag: "Mobile Game",
      image: SuperRodolofStrike,
      link: "/Proyectos/SuperRodolfoStrike",
    },
  ];

  const currentTextColor = isDark ? "#ffffff" : "#000000";
  const currentBgColor = isDark ? "#000000" : "#ffffff";

  return (
    <main
      className="min-h-screen transition-colors duration-500 pt-[95px] font-sans"
      style={{ color: currentTextColor }}
    >
      {/* SECCIÓN: HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-start items-center px-6 overflow-hidden pt-16 md:pt-28">
        <div
          className="absolute top-[25%] left-1/2 -translate-x-1/2 z-0 text-[22vw] font-black select-none pointer-events-none uppercase tracking-tighter italic opacity-10 whitespace-nowrap"
          style={{
            color: "transparent",
            WebkitTextStroke: `1.5px ${currentTextColor}`,
            lineHeight: 1,
          }}
        >
          AFTERBIT
        </div>
        <div className="container mx-auto flex flex-col items-center">
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-6xl"
          >
            <div className="flex justify-center mb-6">
              <span
                className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase flex items-center gap-3 px-4 py-2 rounded-full border shadow-lg transition-all duration-500"
                style={{
                  borderColor: `${currentTextColor}44`,
                  backgroundColor: `${currentTextColor}11`,
                  color: currentTextColor,
                  boxShadow: `0 0 20px ${currentTextColor}22`,
                }}
              >
                <Motion.span
                  animate={{
                    opacity: [1, 0.4, 1],
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      `0 0 2px ${currentTextColor}`,
                      `0 0 10px ${currentTextColor}`,
                      `0 0 2px ${currentTextColor}`,
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: currentTextColor }}
                />
                <span className="opacity-90 font-bold">
                  SYSTEM.BOOTING (v1.0.4) //{" "}
                  <span className="opacity-50">JAEN_DEPT_INIT</span> [OK]
                </span>
              </span>
            </div>

            <h1
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[13rem] font-black uppercase tracking-tighter leading-[0.75] transition-colors duration-500 mb-6 text-center"
              style={{ color: currentTextColor }}
            >
              <Motion.span
                initial={{ letterSpacing: "0.1em", filter: "blur(8px)" }}
                animate={{ letterSpacing: "-0.05em", filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-block"
              >
                AFTERBIT
              </Motion.span>
            </h1>

            <Motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-[5px] mb-10 mx-auto"
              style={{ backgroundColor: currentTextColor }}
            ></Motion.div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-8 px-2">
              <p className="text-xl md:text-2xl font-medium tracking-tight uppercase leading-[1.1] transition-colors duration-500 text-left max-w-md">
                Experiencias en{" "}
                <span className="italic font-black">Videojuegos</span> <br />y
                entornos de{" "}
                <span className="italic font-black">Realidad Mixta</span>.
              </p>

              <div className="text-left md:text-right w-full md:w-auto self-end">
                <p className="font-mono text-[11px] uppercase opacity-60 tracking-widest mb-1 italic text-current">
                  Core Engine: Unity 2024.1
                </p>
                <p className="font-mono text-[11px] uppercase opacity-60 tracking-widest border-b-2 border-current inline-block pb-1">
                  Status: Ready to play
                </p>
              </div>
            </div>
          </Motion.div>
        </div>

        <Motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-32 md:mt-40 flex flex-col items-center gap-4 z-10"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-30">
              Input Detected: Scroll
            </span>
            <span className="font-mono text-xs md:text-sm font-black uppercase tracking-[0.6em] opacity-60">
              Explore Universe
            </span>
          </div>
          <div className="w-[2px] h-20 bg-current opacity-30 relative overflow-hidden">
            <Motion.div
              className="absolute top-0 left-0 w-full bg-current"
              animate={{
                height: ["0%", "100%", "0%"],
                top: ["0%", "0%", "100%"],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
        </Motion.div>
      </section>

      {/* SECCIÓN: ESTUDIO */}
      <section className="py-32 px-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-4"
          >
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
              THE <br />
              <span
                className="italic"
                style={{
                  WebkitTextStroke: `1px ${currentTextColor}`,
                  color: "transparent",
                }}
              >
                STUDIO
              </span>
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.4em] opacity-60">
              Establecido en 2025 / Jaén, España
            </p>
          </Motion.div>

          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-8 lg:pl-12 border-l-0 lg:border-l-2"
            style={{ borderColor: currentTextColor }}
          >
            <div className="text-2xl md:text-4xl font-medium leading-tight tracking-tight mb-10">
              <p className="mb-6">
                Afterbit nace de la pasión por el desarrollo y la{" "}
                <span className="font-black italic hover:line-through transition-all cursor-crosshair">
                  nostalgia del píxel
                </span>
                . Especializados en el ecosistema de{" "}
                <span className="italic font-bold">Unity</span>, forjamos
                experiencias interactivas donde el usuario es el centro de cada
                mecánica y cada mundo que construimos.
              </p>

              <p className="text-lg md:text-xl opacity-90 leading-snug">
                Esta plataforma representa el culmen técnico y creativo
                desarrollado como proyecto final para el
                <Motion.span
                  initial="tapado"
                  whileHover="destapado"
                  className="relative inline-block mx-2 cursor-help align-bottom group"
                >
                  <span className="relative z-10 font-bold uppercase tracking-tighter transition-colors duration-300">
                    Curso de Especialización en Desarrollo de videojuegos y
                    realidad virtual
                  </span>

                  <Motion.span
                    variants={{
                      tapado: { scaleX: 1 },
                      destapado: { scaleX: 0 },
                    }}
                    transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                    className="absolute inset-0 z-20 origin-left hidden lg:block max-lg:hidden [@media(hover:none)]:hidden"
                    style={{ backgroundColor: currentTextColor }}
                  />
                </Motion.span>
                demostrando la capacidad de transformar código en puro
                entretenimiento digital.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
              {[
                { label: "Visión", val: "Brutalista" },
                { label: "Tecnología", val: "Unity Engine" },
                { label: "Status", val: "Proyecto Final" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`border-t pt-4 ${
                    i === 2
                      ? "col-span-2 text-center md:col-span-1 md:text-left"
                      : "text-left"
                  }`}
                  style={{ borderColor: currentTextColor }}
                >
                  <span className="block font-mono text-[10px] uppercase opacity-50 mb-1">
                    {item.label}
                  </span>
                  <span className="font-black uppercase italic text-lg">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* SECCIÓN: PROYECTOS */}
      <section className="py-24 px-6 container mx-auto">
        <Motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-black mb-16 uppercase tracking-tighter inline-block border-b-4 pb-2"
          style={{ borderColor: currentTextColor }}
        >
          / Proyectos
        </Motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {proyectos.map((proyecto) => (
            <Link key={proyecto.id} to={proyecto.link}>
              <Motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group relative p-8 border-2 transition-all duration-700 overflow-hidden cursor-pointer min-h-[400px] flex flex-col justify-end"
                style={{ borderColor: currentTextColor }}
              >
                <div
                  className="absolute inset-0 z-0 grayscale contrast-110 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 opacity-30 group-hover:opacity-70"
                  style={{
                    backgroundImage: `url(${proyecto.image})`,
                    backgroundSize:
                      proyecto.id === 1 || proyecto.id === 4
                        ? "80% auto"
                        : "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition:
                      proyecto.id === 1 || proyecto.id === 4
                        ? "top center"
                        : "center",
                    paddingTop: "0px",
                    backgroundOrigin: "content-box",
                  }}
                ></div>
                <div
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: isDark
                      ? "linear-gradient(to top, rgba(255,255,255,0.98) 10%, rgba(255,255,255,0.4) 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.98) 10%, rgba(0,0,0,0.4) 100%)",
                  }}
                ></div>
                <div className="absolute top-5 right-6 text-6xl font-black opacity-20 group-hover:opacity-100 transition-all duration-500 z-20 italic">
                  <span
                    className={
                      isDark
                        ? "group-hover:text-black"
                        : "group-hover:text-white"
                    }
                  >
                    0{proyecto.id}
                  </span>
                </div>
                <div className="relative z-30 w-full">
                  <div
                    className={
                      isDark
                        ? "group-hover:text-black"
                        : "group-hover:text-white"
                    }
                  >
                    <span
                      className={`font-mono tracking-widest uppercase border border-current px-2 py-1 ${proyecto.id === 3 ? "text-[8px] md:text-xs" : "text-xs"}`}
                    >
                      {proyecto.tag}
                    </span>
                    <h3
                      className={`font-black mt-5 mb-3 uppercase italic tracking-tighter leading-[0.9] transition-transform duration-500 group-hover:translate-x-2 ${
                        proyecto.id === 4
                          ? "text-4xl"
                          : proyecto.id === 3
                            ? "text-2xl md:text-4xl lg:text-5xl"
                            : proyecto.title.length > 25
                              ? "text-2xl md:text-3xl"
                              : "text-4xl md:text-5xl"
                      }`}
                    >
                      {proyecto.title}
                    </h3>
                    <p className="text-base md:text-lg opacity-90 max-w-2xl font-normal leading-tight mb-6">
                      {proyecto.desc}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-[2px] w-10 bg-current transition-all duration-500 group-hover:w-16"></div>
                      <span className="text-xl font-black italic tracking-tighter uppercase">
                        Ver Proyecto
                      </span>
                    </div>
                  </div>
                </div>
              </Motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECCIÓN: MARQUESINA */}
      <section
        className="py-12 border-y-2 overflow-hidden transition-colors duration-500"
        style={{
          borderColor: currentTextColor,
          backgroundColor: currentTextColor,
          color: currentBgColor,
        }}
      >
        <Motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="text-6xl md:text-8xl font-black uppercase whitespace-nowrap flex gap-20"
        >
          <span>
            Desarrollo de Videojuegos • Realidad Virtual • Entornos Interactivos
            • Motor Unity • Especialización XR • Made in Jaén • Cultura Pixel •
            Afterbit •
          </span>
          <span>
            Desarrollo de Videojuegos • Realidad Virtual • Entornos Interactivos
            • Motor Unity • Especialización XR • Made in Jaén • Cultura Pixel •
            Afterbit •
          </span>
        </Motion.div>
      </section>

      {/* SECCIÓN: CONTACTO */}
      <section className="py-40 px-6 flex flex-col items-center justify-center overflow-hidden">
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-full max-w-4xl"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-12 tracking-tighter text-center">
            ¿Tienes un <span className="italic">Proyecto?</span>
          </h2>

          <Link
            to="/contacto"
            className="group relative w-full flex items-center justify-between p-8 md:p-12 border-4 transition-all duration-500 overflow-hidden"
            style={{ borderColor: currentTextColor }}
          >
            <div
              className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full transition-all duration-500 ease-out z-0"
              style={{ backgroundColor: currentTextColor }}
            ></div>
            <div
              className="absolute top-2 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500 font-mono text-xs uppercase tracking-widest pointer-events-none z-20"
              style={{ color: isDark ? "#000000" : "#ffffff" }}
            >
              Afterbit Contact System
            </div>
            <span className="relative z-10 text-4xl md:text-6xl font-black uppercase tracking-tighter transition-colors duration-500">
              <div
                className={
                  isDark ? "group-hover:text-black" : "group-hover:text-white"
                }
              >
                Hablemos
              </div>
            </span>
            <div className="relative z-10 text-5xl md:text-7xl transition-transform duration-500 group-hover:rotate-45">
              <div
                className={
                  isDark ? "group-hover:text-black" : "group-hover:text-white"
                }
              >
                ↗
              </div>
            </div>
          </Link>

          <div className="mt-12 text-center px-4">
            <p className="font-mono text-[10px] sm:text-sm opacity-50 tracking-widest uppercase">
              O escribe directamente a:
            </p>
            <a
              href="mailto:davidjimenezvillena@gmail.com"
              className="text-xs sm:text-base md:text-lg font-bold hover:opacity-100 transition-opacity border-b-2 break-all md:break-normal tracking-wider"
              style={{
                color: currentTextColor,
                borderColor: `${currentTextColor}44`,
              }}
            >
              DAVIDJIMENEZVILLENA@GMAIL.COM
            </a>
          </div>
        </Motion.div>
      </section>
    </main>
  );
}
