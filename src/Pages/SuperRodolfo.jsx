import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGamepad, FaArrowRight } from "react-icons/fa";

import LogoRodolfo from "../Imagenes/LogoJuego.png";
import FriezaImg from "../Imagenes/ImagenesSR/Frieza.png";
import RodolfoHola from "../Imagenes/ImagenesSR/RodolfoHola.png";
import Broly from "../Imagenes/ImagenesSR/Broly.png";
import Kefla from "../Imagenes/ImagenesSR/Klefa.png";
import Janemba from "../Imagenes/ImagenesSR/Janemba.png";
import Hit from "../Imagenes/ImagenesSR/Hit.png";
import Turles from "../Imagenes/ImagenesSR/Turles.png";
import Cell from "../Imagenes/ImagenesSR/Cell Perfecto.png";

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

  const sections = [
    {
      id: "conceptos",
      title: "01. CONCEPTOS Y OBJETIVOS",
      path: "/Proyectos/SuperRodolfo/ConceptoyObjetivos",
      desc: "En este apartado vamos a descubrir los objetivos generales, particulares y personales de nuestro juego, el brainstorming inicial de nuestro proyecto, los datos principales del título y el PEGI que usamos.",
      img: RodolfoHola,
    },
    {
      id: "preproduccion",
      title: "02. ANÁLISIS Y PREPRODUCCIÓN",
      path: "/Proyectos/SuperRodolfo/AnalisisyPreproduccion",
      desc: "Hacemos un estudio del mercado inicial, referentes también el análisis del DAFO y CAME, los moodboards y plantearnos cómo monetizarlo",
      img: FriezaImg,
    },
    {
      id: "narrativa",
      title: "03. GUIÓN Y NARRATIVA",
      path: "/Proyectos/SuperRodolfo/GuionyNarrativa",
      desc: "Decimos la historia general, el mundo, los personajes principales y secundarios, los enemigos, también las misiones principales y secundarias, cómo esto lo ligamos con la narrativa y mecánicas del juego",
      img: Broly,
    },
    {
      id: "mecanicas",
      title: "04. MECÁNICAS Y EXPERIENCIAS",
      path: "/Proyectos/SuperRodolfo/MecanicasyExperiencias",
      desc: "Definimos las mecánicas principales y secundarias de nuestro juego, las acciones que hará el jugador, reglas, sistemas de recompensas y penalización, también la experiencia que tendrá el jugador",
      img: Kefla,
    },
    {
      id: "estados",
      title: "05. ESTADOS DEL VIDEOJUEGO",
      path: "/Proyectos/SuperRodolfo/EstadosDelVideojuego",
      desc: "Vamos a identificar y damos una descripción de los estados del videojuego como puede ser la pantalla de inicio, menú, etc. Donde vamos a incluir un diagrama simple de transición de esos estados",
      img: Janemba,
    },
    {
      id: "interfaz",
      title: "06. INTERFAZ Y UI",
      path: "/Proyectos/SuperRodolfo/InterfazyUI",
      desc: "Diseño de la interfaz de cada estado como puede ser el HUD, los elementos interactivos y bocetos o wireframes",
      img: Hit,
    },
    {
      id: "sonido",
      title: "07. SONIDO",
      path: "/Proyectos/SuperRodolfo/Sonido",
      desc: "Determinamos la música de cada escena, los efectos de sonido, voces si tenemos en nuestro juego y la relación entre el sonido, estado y experiencia de nuestro juego",
      img: Turles,
    },
    {
      id: "arquitectura",
      title: "08. PRODUCCIÓN Y ARQUITECTURA",
      path: "/Proyectos/SuperRodolfo/ProduccionyArquitectura",
      desc: "Organización del proyecto, los roles que hay en el proyecto y la arquitectura del software que usamos (motor, estructura de carpetas, escenas y assets). Las conclusiones y el diario de trabajo",
      img: Cell,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`min-h-screen pt-32 pb-20 px-4 md:px-12 lg:px-24 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* --- HEADER TÉCNICO --- */}
      <motion.header
        variants={itemVariants}
        className="max-w-6xl mx-auto border-b-8 pb-8 mb-16"
        style={{ borderColor: currentTextColor }}
      >
        <div className="flex flex-col gap-6">
          <span className="font-mono text-sm font-bold opacity-60 tracking-[0.5em] block">
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
                <span className="text-[10px] md:text-xs leading-none">
                  [ AUTHOR: DAVID_JIMENEZ ]
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 lg:w-2 lg:h-2 inline-block shrink-0"
                  style={{ backgroundColor: accentGreen }}
                ></span>
                <span className="text-[10px] md:text-xs leading-none">
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
      </motion.header>

      {/* --- SECCIÓN: EL PORQUÉ Y SINOPSIS --- */}
      <motion.section
        variants={itemVariants}
        className="max-w-6xl mx-auto mb-32 space-y-16"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full max-w-[280px] flex justify-center">
            <img
              src={LogoRodolfo}
              alt="Logo"
              className="w-full h-auto drop-shadow-[0_0_20px_rgba(0,128,18,0.2)]"
            />
          </div>
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2
                className="text-xl font-black uppercase tracking-widest italic"
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
                integralmente el desarrollo de una experiencia de juego sólida,
                funcional y que represente mi evolución como desarrollador.
              </p>
            </div>
            <div className="space-y-4">
              <h2
                className="text-xl font-black uppercase tracking-widest italic"
                style={{ color: accentGreen }}
              >
                // SINOPSIS
              </h2>
              <p
                className="text-lg md:text-xl opacity-90 leading-relaxed italic border-l-4 pl-6"
                style={{ borderColor: accentGreen }}
              >
                "En las tierras del Santo Reino, la armonía se ha quebrado. Solo
                Rodolfo, un héroe inesperado, emprenderá una épica travesía que
                lo llevará a recorrer cada rincón del reino: desde sus sierras
                más profundas hasta sus pueblos y fortalezas más antiguas. Su
                misión es recuperar las{" "}
                <span className="font-bold" style={{ color: accentGreen }}>
                  bolas mágicas
                </span>{" "}
                esparcidas por todo el reino con un único fin:{" "}
                <span className="font-bold" style={{ color: accentGreen }}>
                  resucitar a sus amigos caídos y devolver la paz a su hogar
                </span>
                . En este viaje, no estará solo; deberá enfrentarse a legiones
                de enemigos atraídos por el poder de las bolas, quienes ansían
                reclamarlas para alcanzar la inmortalidad y someter al reino
                bajo su control eterno."
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- INTRODUCCIÓN AL GDD --- */}
      <motion.section
        variants={itemVariants}
        className="max-w-3xl mx-auto mb-12 text-center"
      >
        <div
          className="inline-block px-6 py-2 border-x-2 mb-6"
          style={{ borderColor: accentGreen }}
        >
          <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase opacity-60">
            Game Design Document (GDD)
          </span>
        </div>
        <p className="text-lg opacity-70 italic">
          A continuación se presenta el{" "}
          <span className="font-bold">Game Design Document</span> detallado. Un
          desglose técnico y creativo donde se analizan las mecánicas, la
          narrativa y la arquitectura que dan vida a este proyecto. Explora cada
          sección para conocer el proceso de desarrollo.
        </p>
      </motion.section>

      {/* --- ÍNDICE --- */}
      <motion.div variants={itemVariants} className="max-w-6xl mx-auto mb-40">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 border-2 p-2"
          style={{ borderColor: isDark ? "#ffffff20" : "#00000020" }}
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="font-mono text-[10px] p-4 text-center hover:bg-[#008012] hover:text-white transition-all duration-300 uppercase font-black border"
              style={{ borderColor: isDark ? "#ffffff10" : "#00000010" }}
            >
              {section.title}
            </a>
          ))}
        </div>
      </motion.div>

      {/* --- CUERPO --- */}
      <motion.main
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
                <h2 className="text-2xl md:text-4xl font-black italic uppercase leading-none group-hover:text-[#008012] transition-colors">
                  {section.title}
                </h2>
                
                <div className="hidden md:flex items-center gap-2 font-mono text-[10px] opacity-40 uppercase tracking-widest group-hover:opacity-100 group-hover:text-[#008012] transition-all">
                  <span>Acceder</span> <FaArrowRight />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-lg opacity-70 leading-relaxed">
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
                      className={`w-full h-64 object-contain grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl ${
                        section.img === RodolfoHola
                          ? "scale-[3] group-hover:scale-[3.4]"
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
      </motion.main>

      {/* --- INVITACIÓN AL JUEGO --- */}
      <motion.div
        variants={itemVariants}
        className="max-w-6xl mx-auto mt-40 flex flex-col items-center text-center"
      >
        <div className="mb-10 space-y-4">
          <h3
            className="text-2xl md:text-3xl font-black uppercase italic"
            style={{ color: accentGreen }}
          >
            ¿LISTO PARA LA AVENTURA?
          </h3>
          <p className="max-w-xl mx-auto text-lg opacity-80 italic">
            No te quedes solo en el papel. Te invito a sumergirte en el Santo
            Reino, poner a prueba las mecánicas y ver el código fuente en
            acción. ¡Dale play al proyecto!
          </p>
        </div>
        <a
          href="https://github.com/djsekai34"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-12 py-6 font-mono text-sm font-black uppercase tracking-widest overflow-hidden border-2 transition-all duration-300 hover:text-white"
          style={{
            borderColor: accentGreen,
            color: isDark ? "white" : "black",
          }}
        >
          <div className="absolute inset-0 w-0 bg-[#008012] transition-all duration-500 ease-out group-hover:w-full -z-10"></div>
          <span className="flex items-center gap-3">
            <FaGamepad size={22} /> Ver Repositorio y Jugar
          </span>
        </a>
      </motion.div>
    </motion.div>
  );
}