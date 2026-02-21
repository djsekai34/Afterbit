import React from "react";
import { motion as Motion } from "framer-motion";
import imagenRodolfo from "../Imagenes/RodolfoDiseño.png";
import aliado01 from "../Imagenes/GokuSSJ4.png";
import aliado02 from "../Imagenes/GohanSSJ2.png";
import aliado03 from "../Imagenes/Vegeta.png";
import FriezaImg from "../Imagenes/ImagenesSR/Frieza.png";
import Broly from "../Imagenes/ImagenesSR/Broly.png";
import Kefla from "../Imagenes/ImagenesSR/Klefa.png";
import Janemba from "../Imagenes/ImagenesSR/Janemba.png";
import Hit from "../Imagenes/ImagenesSR/Hit.png";
import Turles from "../Imagenes/ImagenesSR/Turles.png";
import Cell from "../Imagenes/ImagenesSR/Cell Perfecto.png";
import bt2Ref from "../Imagenes/CinematicaBT2.png";
import bt3Ref from "../Imagenes/CinematicaBT3.png";
import { cinematicas } from "../data/cinematicas";

export default function NarrativaPage({ isDark }) {
  const accentGreen = "#008012";
  const currentTextColor = isDark ? "#ffffff" : "#000000";

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-32 pb-20 px-6"
      style={{ color: currentTextColor }}
    >
      {/* SECCIÓN: CABECERA */}
      <Motion.header
        variants={itemVariants}
        className="max-w-6xl mx-auto border-b-8 pb-8 mb-20"
        style={{ borderColor: currentTextColor }}
      >
        <span className="font-mono text-[10px] sm:text-xs font-bold opacity-60 tracking-[0.2em] sm:tracking-[0.4em] block mb-4 uppercase whitespace-nowrap">
          // Documentación_Fase_03
        </span>
        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
          Guion <span style={{ color: accentGreen }}>Y Narrativa</span>
        </h1>
      </Motion.header>

      <Motion.div
        variants={containerVariants}
        className="max-w-6xl mx-auto space-y-32"
      >
        {/* SECCIÓN 1: HISTORIA DEL SANTO REINO */}
        <Motion.section variants={itemVariants} className="relative py-12">
          <div
            className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 ${isDark ? "border-zinc-800/50" : "border-zinc-200"} rounded-lg overflow-hidden`}
          >
            <div
              className={`lg:col-span-7 p-8 md:p-12 border-b-2 lg:border-b-0 lg:border-r-2 ${isDark ? "border-zinc-800/50 bg-zinc-900/40" : "border-zinc-200 bg-white"}`}
            >
              <div className="max-w-2xl h-full flex flex-col">
                <header className="mb-10">
                  <h2
                    className={`text-3xl md:text-4xl lg:text-[2.50rem] font-black italic uppercase tracking-[-0.05em] leading-none ${isDark ? "text-white" : "text-zinc-900"}`}
                  >
                    Historia del{" "}
                    <span style={{ color: accentGreen }}>Santo Reino</span>
                  </h2>
                </header>

                <div
                  className={`text-xl leading-relaxed space-y-8 flex-grow ${isDark ? "text-zinc-300" : "text-zinc-700"}`}
                >
                  <p>
                    En un mundo donde la leyenda de las{" "}
                    <span className="text-orange-500 font-bold italic">
                      Bolas de Dragón
                    </span>{" "}
                    cobra vida, el Santo Reino se enfrenta a su hora más oscura.
                    Todos los grandes guerreros han caído; ahora, la esperanza
                    recae en{" "}
                    <span style={{ color: accentGreen }} className="font-bold">
                      Rodolfo
                    </span>
                    , un héroe inesperado forjado bajo la tutela de leyendas
                    como Goku, Vegeta y Gohan.
                  </p>

                  <div
                    className={`relative p-6 border-l-4 italic ${isDark ? "bg-orange-500/5" : "bg-orange-500/10"}`}
                    style={{ borderColor: accentGreen }}
                  >
                    A pesar de dominar únicamente el arte del{" "}
                    <span className="font-bold uppercase tracking-widest text-sm px-2 py-0.5 rounded bg-zinc-800 text-white">
                      Shagami-dō
                    </span>
                    , su determinación es inquebrantable: reunir las siete bolas
                    magicas y devolver la vida a sus aliados.
                  </div>

                  <p className="text-lg opacity-80">
                    Acechado por enemigos que ansían la inmortalidad y controlar
                    el Santo Reino, Rodolfo deberá derrotarlos y decidir:
                    ¿Mantendrá la pureza de su corazón o sucumbirá ante el poder
                    corruptor de las esferas?
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`lg:col-span-5 p-8 md:p-12 flex flex-col ${isDark ? "bg-zinc-900/80" : "bg-zinc-50"}`}
            >
              <header className="mb-10">
                <h2
                  className={`text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-none ${isDark ? "text-white" : "text-zinc-900"}`}
                >
                  El Mundo:{" "}
                  <span style={{ color: accentGreen }}>Mezcla Única</span>
                </h2>
              </header>

              <div
                className={`text-xl leading-relaxed space-y-8 flex-grow ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
              >
                <p>
                  La ambientación se inspira en lugares emblemáticos de la
                  comarca jiennense, trazando una ruta desde{" "}
                  <span
                    className={`font-bold italic ${isDark ? "text-zinc-100" : "text-zinc-900"}`}
                  >
                    Alcalá la Real
                  </span>{" "}
                  hasta{" "}
                  <span
                    className={`font-bold italic ${isDark ? "text-zinc-100" : "text-zinc-900"}`}
                  >
                    Martos
                  </span>
                  . Un mapa que recorre montañas, ríos y ciudades para capturar
                  la esencia de nuestra tierra.
                </p>

                <div
                  className={`p-6 border-2 border-dashed rounded-lg ${isDark ? "border-zinc-800 bg-zinc-900/50" : "border-zinc-300 bg-white"}`}
                >
                  <h3
                    className="text-lg font-black italic uppercase mb-3"
                    style={{ color: accentGreen }}
                  >
                    Estética Híbrida
                  </h3>
                  <p
                    className={`text-lg leading-relaxed ${isDark ? "text-zinc-300" : "text-zinc-700"}`}
                  >
                    Los escenarios fusionan la identidad de la comarca con el
                    lenguaje visual de{" "}
                    <span className="text-orange-500 font-bold">
                      Dragon Ball Z
                    </span>
                    . Una mezcla donde el paisaje rural de Jaén convive con
                    auras de energía y mística ancestral.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none hidden lg:flex items-center justify-center overflow-hidden z-[20]">
            <span
              className={`font-black italic select-none tracking-tighter text-center leading-[0.8]
      ${isDark ? "text-zinc-700 opacity-15" : "text-zinc-900/[0.05]"}`}
              style={{ fontSize: "15vw" }}
            >
              RODOLFO <br /> SR
            </span>
          </div>
        </Motion.section>

        {/* SECCIÓN 2: Cinemáticas */}
        <Motion.section
          variants={itemVariants}
          className="py-12 space-y-16 px-4 md:px-0"
        >
          {/* HEADER DE SECCIÓN */}
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">
              Planificación{" "}
              <span style={{ color: accentGreen }}>Cinemática</span>
            </h2>
            <div className="h-[2px] flex-grow bg-zinc-500/20"></div>
            <span className="font-mono text-[10px] opacity-40 uppercase hidden sm:inline">
              Ref: Plantilla_Guion_v1
            </span>
          </div>

          {/* BLOQUE DE REFERENCIAS VISUALES */}
          <div
            className={`p-6 md:p-8 border-2 border-dashed ${isDark ? "border-zinc-800 bg-zinc-900/20" : "border-zinc-200 bg-zinc-50"}`}
          >
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-black uppercase italic mb-2 tracking-tighter">
                Estilo de{" "}
                <span style={{ color: accentGreen }}>Referencia Visual</span>
              </h3>
              <p className="text-sm opacity-70 font-mono leading-relaxed">
                Nuestras cinemáticas se basarán en la estética y narrativa
                visual de los videojuegos:
                <span className="text-white bg-red-600 px-2 mx-1 italic font-bold">
                  Dragon Ball Budokai Tenkaichi 2
                </span>{" "}
                y
                <span className="text-white bg-blue-600 px-2 mx-1 italic font-bold">
                  Dragon Ball Budokai Tenkaichi 3
                </span>
                .
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-video bg-zinc-800 relative overflow-hidden group border border-zinc-700 shadow-xl">
                <img
                  src={bt2Ref}
                  alt="BT2 Ref"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 p-3 text-[10px] font-bold uppercase tracking-widest text-white w-full bg-black/90 border-t border-zinc-700">
                  Visual_Style: BT2
                </div>
              </div>
              <div className="aspect-video bg-zinc-800 relative overflow-hidden group border border-zinc-700 shadow-xl">
                <img
                  src={bt3Ref}
                  alt="BT3 Ref"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 p-3 text-[10px] font-bold uppercase tracking-widest text-white w-full bg-black/90 border-t border-zinc-700">
                  Visual_Style: BT3
                </div>
              </div>
            </div>
          </div>

          {/* RENDERIZADO DINÁMICO DE ESCENAS */}
          {cinematicas.map((cine) => (
            <div
              key={cine.id}
              className={`border-l-8 ${isDark ? "bg-zinc-900/40 border-zinc-800" : "bg-zinc-50 border-zinc-200"} p-5 md:p-10 relative overflow-hidden mb-12`}
              style={{ borderLeftColor: accentGreen }}
            >
              {/* METADATOS DE ESCENA */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <span className="text-[10px] font-mono opacity-50 block mb-1 uppercase tracking-widest">
                    DATA_FILE: SEQ_{cine.id}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase italic leading-tight mb-3">
                    {cine.titulo}
                  </h3>
                  <p className="text-xs md:text-sm mb-2 opacity-80">
                    <span
                      className="font-bold uppercase text-[9px]"
                      style={{ color: accentGreen }}
                    >
                      OBJETIVO:
                    </span>{" "}
                    {cine.objetivo}
                  </p>
                  <p className="text-xs md:text-sm opacity-80">
                    <span
                      className="font-bold uppercase text-[9px]"
                      style={{ color: accentGreen }}
                    >
                      PERSONAJES:
                    </span>{" "}
                    {cine.personajes}
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:flex gap-3 lg:justify-end">
                  <div className="flex-1 lg:w-28 h-16 p-2 border border-zinc-700/30 text-center flex flex-col justify-center items-center shrink-0">
                    <span className="block text-[8px] opacity-40 uppercase mb-1">
                      Finalidad
                    </span>
                    <span
                      className="font-bold text-[9px] md:text-[10px] leading-tight uppercase"
                      style={{ color: accentGreen }}
                    >
                      {cine.tipo}
                    </span>
                  </div>
                  <div className="flex-1 lg:w-28 h-16 p-2 border border-zinc-700/30 text-center flex flex-col justify-center items-center shrink-0">
                    <span className="block text-[8px] opacity-40 uppercase mb-1">
                      Entorno
                    </span>
                    <span className="font-bold text-[9px] md:text-[10px] leading-tight uppercase">
                      {cine.entorno}
                    </span>
                  </div>
                </div>
              </div>

              {/* TABLA DE STORYBOARD (MÓVIL RESPONSIVE) */}
              <div className="mb-10 overflow-x-auto border border-zinc-700/10 rounded-lg">
                <table className="w-full text-left text-[10px] md:text-[11px] font-mono border-collapse min-w-[600px]">
                  <thead>
                    <tr
                      className={isDark ? "bg-zinc-800/50" : "bg-zinc-200/50"}
                    >
                      <th className="p-3 border-b border-zinc-700/20 uppercase font-bold text-[9px]">
                        Nº
                      </th>
                      <th className="p-3 border-b border-zinc-700/20 uppercase font-bold text-[9px]">
                        Tiempo
                      </th>
                      <th className="p-3 border-b border-zinc-700/20 uppercase font-bold text-[9px]">
                        Plano
                      </th>
                      <th className="p-3 border-b border-zinc-700/20 uppercase font-bold text-[9px]">
                        Acción
                      </th>
                      <th className="p-3 border-b border-zinc-700/20 uppercase font-bold text-[9px]">
                        Cámara
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cine.storyboard.map((plano, i) => (
                      <tr
                        key={i}
                        className="hover:bg-green-500/5 transition-colors"
                      >
                        <td className="p-3 border-b border-zinc-700/10 font-bold">
                          {plano.n}
                        </td>
                        <td
                          className="p-3 border-b border-zinc-700/10"
                          style={{ color: accentGreen }}
                        >
                          {plano.t}
                        </td>
                        <td className="p-3 border-b border-zinc-700/10 uppercase font-black">
                          {plano.plano}
                        </td>
                        <td className="p-3 border-b border-zinc-700/10 opacity-90 italic py-3">
                          {plano.accion}
                        </td>
                        <td className="p-3 border-b border-zinc-700/10 text-zinc-500">
                          {plano.cam}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* BLOQUE TÉCNICO AUDIO/VFX */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className={`p-4 rounded border ${isDark ? "border-zinc-800 bg-black/20" : "border-zinc-200 bg-white"}`}
                >
                  <h5 className="text-[9px] font-black uppercase mb-2 flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: accentGreen }}
                    ></div>
                    Audio
                  </h5>
                  <p className="text-[10px] font-mono opacity-70 italic">
                    {cine.audio}
                  </p>
                </div>
                <div
                  className={`p-4 rounded border ${isDark ? "border-zinc-800 bg-black/20" : "border-zinc-200 bg-white"}`}
                >
                  <h5 className="text-[9px] font-black uppercase mb-2 flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: accentGreen }}
                    ></div>
                    VFX
                  </h5>
                  <p className="text-[10px] font-mono opacity-70 italic">
                    {cine.vfx}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* NOTAS OPERATIVAS Y PROTOCOLO */}
          <div
            className={`p-6 md:p-8 border-t-4 ${isDark ? "bg-zinc-900/60 border-zinc-700" : "bg-zinc-100 border-zinc-300"}`}
          >
            <h3 className="text-xl font-black uppercase italic mb-6">
              Notas de las cinemáticas
            </h3>
            <ul className="space-y-4 text-[11px] font-mono opacity-80">
              <li
                className={`flex items-start gap-4 p-4 border-l-4 ${isDark ? "bg-green-500/5 border-green-500/50" : "bg-green-50 border-green-200"}`}
              >
                <span
                  className="text-xl shrink-0 pt-[2px]"
                  style={{ color: accentGreen }}
                >
                  ⚠️
                </span>
                <div className="space-y-1">
                  <span
                    className="font-black uppercase tracking-widest text-[10px]"
                    style={{ color: accentGreen }}
                  >
                    Protocolo Narrativo:
                  </span>
                  <p className="leading-relaxed">
                    <span className="font-bold text-white bg-zinc-800 px-1 mr-1">
                      IMPORTANTE:
                    </span>
                    Todo se narrará estrictamente en{" "}
                    <span
                      className="underline decoration-2"
                      style={{ textDecorationColor: accentGreen }}
                    >
                      3ª persona
                    </span>
                    . La ejecución debe simular a un narrador omnisciente
                    contando la leyenda, manteniendo la estética de los ejemplos
                    de referencia (Budokai Tenkaichi).
                  </p>
                </div>
              </li>
              <li className="flex gap-2 pl-4">
                <span style={{ color: accentGreen }}>[!]</span> La musica sonara
                de fondo en toda la cinemaitica.
              </li>
              <li className="flex gap-2 pl-4">
                <span style={{ color: accentGreen }}>[!]</span> En Escena 02, el
                bucle será infinito hasta selección de opción por el jugador.
              </li>
              <li className="flex gap-2 pl-4">
                <span style={{ color: accentGreen }}>[!]</span> Estilo visual
                minimalista basado en texto plano (referencia DBZ).
              </li>
            </ul>
          </div>
        </Motion.section>

        {/* SECCIÓN 3: PROTAGONISTA */}
        <Motion.section variants={itemVariants} className="relative py-12">
          <header className="mb-12">
            <h2
              className={`text-3xl md:text-4xl font-black italic uppercase tracking-tighter ${isDark ? "text-white" : "text-zinc-900"}`}
            >
              El <span style={{ color: accentGreen }}>Protagonista</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div
                className={`aspect-square rounded-sm border-2 ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-zinc-100 border-zinc-200"} relative overflow-hidden group shadow-2xl`}
              >
                <img
                  src={imagenRodolfo}
                  alt="Diseño de personaje Rodolfo"
                  className="w-full h-full object-contain"
                />

                <div
                  className="absolute bottom-4 left-4 h-1 w-12"
                  style={{ backgroundColor: accentGreen }}
                ></div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <h3 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-4">
                  Rodolfo
                </h3>
                <div
                  className="h-2 w-24 mb-6"
                  style={{ backgroundColor: accentGreen }}
                ></div>
              </div>

              <div
                className={`text-xl md:text-2xl leading-relaxed space-y-4 ${isDark ? "text-zinc-300" : "text-zinc-700"}`}
              >
                <p>
                  El diseño de <span className="font-bold italic">Rodolfo</span>{" "}
                  se basa en la morfología de un
                  <span className="inline-flex mx-2 font-black italic">
                    <span className="text-blue-600">Bull</span>
                    <span
                      className={`px-0.5 ${isDark ? "text-white" : "text-zinc-400"}`}
                    >
                      dog Fran
                    </span>
                    <span className="text-red-600">cés</span>
                  </span>
                  adaptada a un aspecto humanoide. Viste una camiseta inspirada
                  en las esferas mágicas y unos pantalones vaqueros, combinando
                  lo cotidiano con lo heroico.
                </p>
                <p className="text-lg opacity-80 italic">
                  Aquí se puede apreciar la hoja de modelo del personaje,
                  incluyendo su paleta de colores técnica y sus vistas
                  principales: frente, lado y tres cuartos (3/4).
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-zinc-800/20">
                <div
                  className="border-l-4 pl-4 py-2"
                  style={{ borderColor: accentGreen }}
                >
                  <span className="block text-xs uppercase opacity-50 font-mono tracking-widest mb-1">
                    Clase de Héroe
                  </span>
                  <span className="text-2xl font-black uppercase italic">
                    Único
                  </span>
                </div>
                <div
                  className="border-l-4 pl-4 py-2"
                  style={{ borderColor: accentGreen }}
                >
                  <span className="block text-[10px] sm:text-xs uppercase opacity-50 font-mono tracking-wider sm:tracking-widest mb-1 whitespace-nowrap">
                    Estilo de Combate
                  </span>
                  <span className="text-xl sm:text-2xl font-black uppercase italic whitespace-nowrap">
                    Shagami-dō
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </Motion.section>

        {/* SECCIÓN 4: ALIADOS */}
        <Motion.section variants={itemVariants} className="py-12">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-12">
            Aliados <span className="opacity-20">/ Secundarios</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { id: "01", nombre: "Goku", img: aliado01 },
              { id: "02", nombre: "Gohan", img: aliado02 },
              { id: "03", nombre: "Vegeta", img: aliado03 },
            ].map((aliado) => (
              <div
                key={aliado.id}
                className="space-y-4 group w-[calc(50%-0.75rem)] md:w-[calc(30%-1.5rem)] min-w-[140px] flex-grow-0"
              >
                <div
                  className={`aspect-square border-2 transition-all duration-300 ${
                    isDark
                      ? "bg-zinc-900/50 border-zinc-800 group-hover:border-zinc-700"
                      : "bg-zinc-50 border-zinc-200 group-hover:border-zinc-300"
                  } flex items-center justify-center relative overflow-hidden shadow-lg p-4`}
                >
                  <img
                    src={aliado.img}
                    alt={aliado.nombre}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute top-0 left-0 w-3 h-3"
                    style={{ backgroundColor: accentGreen }}
                  ></div>
                  <div className="absolute bottom-2 right-2 font-mono text-[10px] opacity-30 hidden sm:block">
                    Aliado: {aliado.nombre}
                  </div>
                </div>

                <div className="h-px w-full bg-zinc-500/20"></div>

                <h4
                  className="font-bold uppercase tracking-widest text-sm italic transition-colors duration-300 cursor-default text-center"
                  style={{ color: "inherit" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = accentGreen)
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {aliado.nombre}
                </h4>
              </div>
            ))}
          </div>

          <div
            className={`p-8 border-l-4 relative overflow-hidden ${isDark ? "bg-zinc-900/60 border-zinc-800" : "bg-zinc-100 border-zinc-200"}`}
            style={{ borderLeftColor: accentGreen }}
          >
            <div
              className={`absolute top-0 right-0 px-4 py-1.5 font-mono text-[9px] tracking-[0.2em] uppercase font-bold
    ${
      isDark
        ? "bg-white text-black opacity-30 hover:opacity-100"
        : "bg-zinc-900 text-white opacity-40 hover:opacity-100"
    } 
    transition-all duration-500 cursor-help shadow-md`}
            >
              Status: Nuestros_Amigos_Muertos
            </div>

            <h5
              className="text-[15px] sm:text-xl font-black uppercase italic mb-4 flex items-center gap-2 sm:gap-3 whitespace-nowrap"
              style={{ color: accentGreen }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
                style={{ backgroundColor: accentGreen }}
              ></span>
              El Legado de los Caídos
            </h5>

            <div
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-center ${isDark ? "text-zinc-300" : "text-zinc-700"}`}
            >
              <div className="md:col-span-8 text-lg leading-relaxed">
                <p className="mb-4">
                  Nuestros aliados nos guiarán en cada paso, aunque su destino
                  ya esté sellado. Como sabemos,{" "}
                  <span className="text-red-500 font-bold italic">
                    han caído en batalla
                  </span>{" "}
                  y no pueden luchar físicamente a nuestro lado.
                </p>
                <p className="font-medium italic">
                  Sin embargo, al reunirnos con ellos en el Reino Celestial, nos
                  otorgarán su fuerza espiritual para devolver la paz al Santo
                  Reino. Esta conexión mística se manifiesta como una{" "}
                  <span className="px-0.5 py-0.5 rounded bg-orange-500 text-white font-bold uppercase text-sm tracking-widest">
                    Vida Extra
                  </span>{" "}
                  , permitiendo que Rodolfo trascienda sus límites cuando todo
                  parece perdido.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-center items-center min-h-[220px]">
                <div className="relative w-40 h-40 flex items-center justify-center group">
                  <div
                    className={`absolute inset-0 blur-2xl opacity-40 transition-all duration-700 rounded-full
        ${isDark ? "bg-yellow-400" : "bg-orange-300"}`}
                  ></div>

                  <svg
                    viewBox="0 0 24 24"
                    className={`w-20 h-20 relative z-10 animate-spin transition-all duration-500
        ${isDark ? "fill-yellow-400" : "fill-yellow-500"}`}
                    style={{
                      animationDuration: "8s",
                      filter: isDark
                        ? "drop-shadow(0 0 15px rgba(250, 204, 21, 0.8))"
                        : "drop-shadow(0 0 10px rgba(245, 158, 11, 0.4))",
                    }}
                  >
                    <path
                      stroke={isDark ? "none" : "#d97706"}
                      strokeWidth={isDark ? "0" : "0.5"}
                      d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192z"
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className={`absolute w-36 h-36 rounded-full border-2 transition-colors duration-700 animate-[ping_4s_linear_infinite]
        ${isDark ? "border-yellow-500/20" : "border-orange-400/30"}`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion.section>

        {/* SECCIÓN 5: ENEMIGOS */}
        <Motion.section variants={itemVariants} className="py-12">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tight sm:tracking-tighter whitespace-nowrap">
              Nuestros <span style={{ color: accentGreen }}>Enemigos</span>
            </h2>
            <div className="h-[2px] w-full bg-zinc-500/20"></div>
          </div>

          {/* gap-4 en móvil para que quepan dos, gap-8 en el resto */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { id: "01", nombre: "Frieza", img: FriezaImg },
              { id: "02", nombre: "Broly", img: Broly },
              { id: "03", nombre: "Kefla", img: Kefla },
              { id: "04", nombre: "Janemba", img: Janemba },
              { id: "05", nombre: "Hit", img: Hit },
              { id: "06", nombre: "Turles", img: Turles },
              { id: "07", nombre: "Cell", img: Cell },
            ].map((enemy) => (
              <div
                key={enemy.id}
                className="group flex flex-col w-[calc(50%-1rem)] md:w-[calc(30%-1.5rem)] lg:w-[calc(18%-1.5rem)] min-w-[140px] md:min-w-[160px] flex-grow-0"
              >
                <div
                  className={`aspect-square border-2 transition-all duration-500 relative overflow-hidden flex flex-col p-4
          ${
            isDark
              ? "border-zinc-800 bg-zinc-900/40 group-hover:border-red-600/50 group-hover:bg-red-950/20"
              : "border-zinc-200 bg-zinc-50 group-hover:border-red-400 group-hover:bg-red-50"
          } shadow-xl`}
                >
                  <div className="flex justify-between items-start mb-2 relative z-20">
                    <span className="font-mono text-[9px] opacity-40 group-hover:opacity-100 transition-opacity">
                      TGT_{enemy.id}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_rgba(220,38,38,1)]"></div>
                  </div>

                  <div className="flex-1 flex items-center justify-center min-h-0 relative z-10">
                    <img
                      src={enemy.img}
                      alt={enemy.nombre}
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                    />
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none flex items-center justify-center z-0">
                    <span className="font-black text-xl md:text-2xl uppercase italic tracking-tighter">
                      DANGER_FILE
                    </span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <div
                    className="font-black uppercase text-xs italic tracking-[0.2em] transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: accentGreen }}
                  >
                    {enemy.nombre}
                  </div>
                  <div
                    className="h-[1.5px] w-0 group-hover:w-full transition-all duration-500 mt-1 mx-auto"
                    style={{ backgroundColor: accentGreen }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Motion.section>

        {/* SECCIÓN 6: PROGRESO */}
        <Motion.section
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none">
              Progreso <br />{" "}
              <span style={{ color: accentGreen }}>Principal</span>
            </h2>
            <p className="mt-6 font-mono text-xs opacity-50 uppercase tracking-widest">
              // Secuencia de eventos obligatoria // No sidequests detected
            </p>
          </div>
          <div className="lg:col-span-8 space-y-4">
            {[
              "Derrotar a los enemigos.",
              "Recuperar las 7 esferas mágicas.",
              "Resucitar a nuestros amigos o que Rodolfo tome una decisión inesperada.",
            ].map((mision, index) => (
              <div
                key={index}
                className={`p-6 border-l-4 ${isDark ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-50 border-zinc-200"} flex items-center gap-6 hover:translate-x-2 transition-transform`}
              >
                <span className="text-2xl font-black italic opacity-20">
                  0{index + 1}
                </span>
                <p className="font-bold uppercase tracking-tight text-sm md:text-base">
                  {mision}
                </p>
              </div>
            ))}
          </div>
        </Motion.section>

        {/* SECCIÓN 7: Diseño Mecanicas e Historia */}
        <Motion.section variants={itemVariants} className="pb-20">
          <div
            className={`relative p-8 md:p-20 border-4 ${isDark ? "border-zinc-800" : "border-zinc-200"} overflow-hidden flex flex-col items-center text-center`}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <div className="text-[15rem] md:text-[25rem] font-black italic opacity-[0.03] uppercase tracking-tighter">
                Core
              </div>
            </div>

            <div className="relative z-10 max-w-4xl w-full">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-black italic uppercase tracking-tighter mb-10 leading-[0.9] lg:whitespace-nowrap">
                Relación <br className="lg:hidden" />
                <span style={{ color: accentGreen }}>Narrativa / Mecánica</span>
              </h2>

              <div
                className={`space-y-8 text-lg md:text-xl leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
              >
                <p>
                  En{" "}
                  <span
                    className={`font-bold italic ${isDark ? "text-zinc-100" : "text-zinc-900"}`}
                  >
                    Super Rodolfo y las esferas del Santo Reino
                  </span>
                  , las mecánicas y la narrativa están intrínsecamente
                  relacionadas. Por ejemplo, cuando atacamos con Rodolfo para
                  derrotar a nuestros enemigos, utilizamos la legendaria técnica
                  del{" "}
                  <span
                    style={{ color: accentGreen }}
                    className="font-bold uppercase tracking-widest"
                  >
                    Shagami-dō
                  </span>
                  .
                </p>

                <p>
                  Nuestra misión requiere la recolección de las{" "}
                  <span className="italic font-semibold">bolas mágicas</span>{" "}
                  para obtener nuestro deseo final. Además, contamos con el
                  apoyo de nuestros aliados, a quienes veremos en el cielo para
                  otorgarnos una{" "}
                  <span
                    style={{ color: accentGreen }}
                    className="text-500 font-bold uppercase tracking-wider"
                  >
                    vida extra
                  </span>{" "}
                  y permitirnos continuar nuestra senda.
                </p>
              </div>
            </div>
          </div>
        </Motion.section>
      </Motion.div>
    </Motion.div>
  );
}
