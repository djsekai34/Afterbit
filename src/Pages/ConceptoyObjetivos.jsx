import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaLightbulb,
  FaTable,
  FaFileDownload,
} from "react-icons/fa";

// OPCIÓN 2: Importación desde src/Imagenes/
import fotoNegro from "../Imagenes/GDD_Una_Hoja_Negro.jpg";
import fotoBlanco from "../Imagenes/GDD_Una_Hoja_Blanco.jpg";

export default function ConceptosObjetivos({ isDark }) {
  const accentGreen = "#008012";
  const currentTextColor = isDark ? "white" : "black";

  const imagenResumen = isDark ? fotoNegro : fotoBlanco;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const tableData = [
    {
      label: "TÍTULO",
      value: "Super Rodolfo y las Esferas del Santo Reino",
      desc: "El nombre posiciona a Rodolfo como el héroe central y rinde homenaje al antiguo Reino de Jaén, jurisdicción histórica de la Corona de Castilla en el siglo XIII.",
    },
    {
      label: "CONCEPTO",
      value: "Plataformas de acción y recolección",
      desc: "Una odisea por el Santo Reino donde la agilidad y el combate se unen para recuperar las siete bolas magicas en niveles ambientados en toda la provincia de Jaén.",
    },
    {
      label: "GÉNERO",
      value: "Plataformas / Acción",
      desc: "Fusionamos el plataformeo clásico de los títulos de antaño con un sistema de combate dinámico frente a diversos enemigos.",
    },
    {
      label: "PÚBLICO",
      value: "Todo tipo de jugadores",
      desc: "Un título diseñado para todas las edades, desde veteranos nostálgicos hasta nuevos jugadores, gracias a un control intuitivo y una experiencia de juego directa y disfrutable.",
    },
    {
      label: "PLATAFORMA",
      value: "PC (Windows)",
      desc: "Desarrollado en Unity para ser jugado directamente en Windows; el objetivo es que el juego sea ligero y funcione bien en cualquier ordenador estándar.",
    },
    {
      label: "ESTILO VISUAL",
      value: "Pixel Art & Fondos Ilustrados",
      desc: "El juego utiliza Pixel Art para todos los personajes y elementos interactivos (sprites), combinándolos con fondos ilustrados.",
    },
    {
      label: "CLASIFICACIÓN",
      value: "PEGI 7",
      desc: "Clasificado así por incluir combates con habilidades mágicas. Al ser derrotados, los enemigos simplemente se vuelven transparentes y dejan de tener colisión, evitando cualquier tipo de contenido violento o explícito.",
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
      {/* HEADER */}
      <motion.header
        variants={itemVariants}
        className="max-w-6xl mx-auto border-b-8 pb-8 mb-20"
        style={{ borderColor: currentTextColor }}
      >
        <span className="font-mono text-xs font-bold opacity-60 tracking-[0.4em] block mb-4 uppercase">
          // Documentación_Fase_01
        </span>
        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
          CONCEPTOS <span style={{ color: accentGreen }}>Y OBJETIVOS</span>
        </h1>
      </motion.header>

      <main className="max-w-6xl mx-auto space-y-32">
        {/* SECCIÓN 1: OBJETIVOS */}
        <motion.section variants={itemVariants} className="space-y-12">
          <div
            className="flex items-center gap-3 md:gap-4 border-b-2 pb-4"
            style={{ borderColor: isDark ? "#ffffff10" : "#00000010" }}
          >
            <FaBullseye className="text-[18px] md:text-[24px]" style={{ color: accentGreen }} />
            <h2 className="text-lg md:text-xl font-black uppercase tracking-[0.1em] md:tracking-[0.3em] italic leading-none">
              // CORE_OBJECTIVES
            </h2>
          </div>

          <div className="flex flex-col gap-12 max-w-4xl">
            <div className="space-y-4">
              <h3 className="font-mono text-[10px] font-bold uppercase opacity-40 tracking-widest">[ Objetivos Generales ]</h3>
              <div className="text-lg md:text-xl leading-relaxed opacity-80 italic border-l-4 pl-6 space-y-4" style={{ borderColor: accentGreen }}>
                <p>Desarrollar un videojuego funcional que ofrezca libertad total al jugador desde el primer día, integrando un <strong>Modo Historia</strong> y un <strong>Selector de Niveles</strong> accesible de forma inmediata.</p>
                <p>Entender y dominar la lógica de creación desde el "scripting" puro hasta el despliegue final, complementándolo con la creación de <strong>arte original y personalizado</strong>, asegurando que cada asset visual refleje la identidad única del proyecto.</p>
                <p>El fin último es garantizar una experiencia 100% jugable donde la técnica y la estética propia converjan en un producto sólido.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-[10px] font-bold uppercase opacity-40 tracking-widest">[ Objetivos Particulares ]</h3>
              <div className="text-lg md:text-xl leading-relaxed opacity-80 italic border-l-4 pl-6 space-y-4" style={{ borderColor: accentGreen }}>
                <p>Priorizar el <strong>"Game Feel"</strong> mediante un sistema de movimiento fluido, logrando una transición perfecta entre las animaciones de caminar, saltar y atacar para que el control de Rodolfo sea totalmente intuitivo.</p>
                <p>Programar una <strong>Inteligencia Artificial equilibrada</strong>: comportamientos enemigos sencillos de entender pero que supongan un reto divertido, evitando la frustración y fomentando el dinamismo.</p>
                <p>Diseñar una experiencia ágil basada en <strong>niveles de duración corta/media</strong>. El objetivo es ofrecer sesiones de juego directas y satisfactorias, ideales para partidas rápidas donde la diversión sea inmediata, respetando la curva de aprendizaje de un primer proyecto sólido.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-[10px] font-bold uppercase opacity-40 tracking-widest">[ Objetivos Personales ]</h3>
              <div className="text-lg md:text-xl leading-relaxed opacity-80 italic border-l-4 pl-6 space-y-4" style={{ borderColor: accentGreen }}>
                <p>Culminar con éxito el desarrollo de mi <strong>primer videojuego desde cero</strong>, transformando una idea propia en un producto tangible; un hito que representa un gran orgullo personal e inicia oficialmente mi trayectoria como <strong>desarrollador de videojuegos</strong>.</p>
                <p>Consolidar mis habilidades técnicas mediante el aprendizaje activo de <strong>C# y el motor Unity</strong>, dominando los fundamentos esenciales que me permitan asentar una base sólida para afrontar proyectos cada vez más ambiciosos en el futuro.</p>
                <p>Superar barreras creativas en el <strong>apartado artístico</strong>, utilizando el diseño de Rodolfo como una oportunidad para evolucionar mis capacidades de dibujo y composición visual, demostrando que la dedicación puede suplir la falta de experiencia inicial.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECCIÓN 2: BRAINSTORMING */}
        <motion.section variants={itemVariants} className="space-y-8">
          <div className="flex items-center gap-3 md:gap-4 border-b-2 pb-4" style={{ borderColor: isDark ? "#ffffff10" : "#00000010" }}>
            <FaLightbulb className="text-[18px] md:text-[24px]" style={{ color: accentGreen }} />
            <h2 className="text-lg md:text-xl font-black uppercase tracking-[0.1em] md:tracking-[0.3em] italic leading-none">// INITIAL_BRAINSTORMING</h2>
          </div>
          <div className={`p-8 font-mono text-sm leading-relaxed border-2 border-dashed ${isDark ? "border-white/20" : "border-black/20"}`}>
            <p className="mb-6 font-bold" style={{ color: accentGreen }}>{">"} EJECUTANDO PROCESO_CREATIVO.EXE...</p>
            <div className="text-lg md:text-xl leading-relaxed opacity-90 italic space-y-6">
              <p>En su origen, el proyecto nació bajo la idea de un videojuego de carreras (2D/3D) donde Rodolfo debía competir por toda la geografía de Jaén, recorriendo desde sus calles hasta sus diferentes poblados para alzarse como el mejor piloto. Sin embargo, tras analizar la complejidad técnica, la idea sufrió una <strong>metamorfosis radical</strong>.</p>
              <p>Inspirado por la pasión hacia la saga <em>Dragon Ball</em> y, específicamente, por el estilo de juego de <em>Dragon Ball: Advanced Adventure (GBA)</em>, decidí convertir a Rodolfo en un héroe de plataformas.</p>
              <p>
                El objetivo es simple y claro: localizar las 7 bolas mágicas para resucitar a sus amigos caídos {" "}
                <span className="opacity-40 not-italic"> [ ESTADO: DIFUNTOS ]: </span> 
                <span style={{ color: accentGreen }}>Goku†, Krillin† y Gohan†</span>. Rodolfo deberá encontrarlas antes que sus enemigos para proteger el reino de aquellos que amenazan con romper su paz para siempre.
              </p>
            </div>
          </div>
        </motion.section>

        {/* SECCIÓN 3: DATA SHEET */}
        <motion.section variants={itemVariants} className="space-y-8 pb-20">
          <div className="flex items-center gap-3 md:gap-4 border-b-2 pb-4" style={{ borderColor: isDark ? "#ffffff10" : "#00000010" }}>
            <FaTable className="text-[18px] md:text-[24px]" style={{ color: accentGreen }} />
            <h2 className="text-lg md:text-xl font-black uppercase tracking-[0.1em] md:tracking-[0.3em] italic leading-none">// DATA_SHEET</h2>
          </div>

          <div className="overflow-x-auto border-2 rounded-sm" style={{ borderColor: currentTextColor }}>
            <table className="w-full border-collapse min-w-[600px] md:min-w-full">
              <thead>
                <tr className="text-center border-b-2 font-mono text-[10px] uppercase tracking-widest opacity-60" style={{ borderColor: currentTextColor }}>
                  <th className="py-4 px-4 border-r w-1/4" style={{ borderColor: isDark ? "#ffffff10" : "#00000010" }}>Parámetro</th>
                  <th className="py-4 px-4 border-r w-1/3" style={{ borderColor: isDark ? "#ffffff10" : "#00000010" }}>Valor</th>
                  <th className="py-4 px-4">Detalles</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm text-center">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="border-b last:border-b-0 group transition-colors hover:bg-[#00801208]" style={{ borderColor: isDark ? "#ffffff10" : "#00000010" }}>
                    <td className="py-6 px-4 font-black opacity-50 text-[10px] md:text-xs border-r" style={{ borderColor: isDark ? "#ffffff10" : "#00000010" }}>{row.label}</td>
                    <td className="py-6 px-4 font-black italic uppercase text-sm md:text-lg border-r" style={{ color: accentGreen, borderColor: isDark ? "#ffffff10" : "#00000010" }}>{row.value}</td>
                    <td className="py-6 px-4 opacity-60 italic text-[10px] md:text-xs leading-relaxed">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden mt-4 text-center">
             <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 animate-pulse">
               {">"} desliza la tabla para ver todos los parámetros
             </p>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
}