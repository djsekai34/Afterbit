import React from "react";
import { motion as Motion } from "framer-motion";
import { pantallas } from "../data/interfaz";

export default function ProtocoloUI({ isDark, currentTextColor }) {
  const accentGreen = "#008012";
  const titleColor = isDark ? "text-white" : "text-black";
  const headerLineColor = isDark ? "#ffffff" : currentTextColor;

  // CONFIGURACIÓN DE ANIMACIONES (FRAMER MOTION)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen pt-32 pb-20 px-4 md:px-12 lg:px-24 transition-colors duration-500 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {/* SECCIÓN: HEADER PRINCIPAL */}
      <Motion.header
        variants={itemVariants}
        className="max-w-6xl mx-auto border-b-8 pb-8 mb-40"
        style={{ borderColor: headerLineColor }}
      >
        <span
          className={`font-mono text-xs font-bold opacity-60 tracking-[0.4em] block mb-4 uppercase ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
        >
          // Documentación_Fase_06
        </span>
        <h1
          className={`text-4xl md:text-6xl font-black italic uppercase tracking-tighter ${titleColor}`}
        >
          INTERFAZ <span style={{ color: accentGreen }}>Y UI </span>
        </h1>
      </Motion.header>

      {/* SECCIÓN: LISTADO DINÁMICO DE PANTALLAS */}
      <div className="max-w-7xl mx-auto">
        {pantallas.map((p, index) => (
          <Motion.section
            key={p.id}
            variants={itemVariants}
            className={`flex flex-col-reverse ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-24 mb-80 relative items-start`}
          >
            {/* ELEMENTO CRÍTICO: IDENTIFICADOR NUMÉRICO DE FONDO */}
            <span
              className={`absolute -top-32 ${index % 2 === 0 ? "lg:-left-16" : "lg:-right-16"} left-0 text-[120px] md:text-[240px] font-black opacity-[0.03] pointer-events-none select-none italic`}
            >
              {p.id}
            </span>

            {/* BLOQUE: VISUALIZACIÓN DE IMÁGENES (COLUMNA IZQUIERDA/DERECHA ALTERNA) */}
            <div className="w-full lg:w-[55%] space-y-10">
              <div className="flex flex-col gap-8">
                {/* SUB-BLOQUE: BOCETO */}
                <div className="relative">
                  <div
                    className={`absolute ${index % 2 === 0 ? "lg:-left-12" : "lg:-right-12"} -left-8 top-0 bottom-0 w-8 flex items-center justify-center`}
                  >
                    <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase [writing-mode:vertical-lr] rotate-180 tracking-[0.3em]">
                      BOCETO
                    </span>
                  </div>
                  <div
                    className={`border-2 ${isDark ? "border-zinc-800" : "border-zinc-200"} overflow-hidden`}
                  >
                    {p.imgBoceto ? (
                      <img
                        src={p.imgBoceto}
                        alt="Boceto"
                        className="w-full h-auto"
                      />
                    ) : (
                      <div className="aspect-video bg-zinc-500/5" />
                    )}
                  </div>
                </div>

                {/* SUB-BLOQUE: RESULTADO FINAL */}
                <div className="relative">
                  <div
                    className={`absolute ${index % 2 === 0 ? "lg:-left-12" : "lg:-right-12"} -left-8 top-0 bottom-0 w-8 flex items-center justify-center`}
                  >
                    <span className="font-mono text-[9px] font-bold text-green-600 uppercase [writing-mode:vertical-lr] rotate-180 tracking-[0.3em]">
                      RESULTADO
                    </span>
                  </div>
                  <div
                    className={`border-2 ${isDark ? "border-zinc-800" : "border-zinc-200"} overflow-hidden shadow-2xl`}
                  >
                    {p.imgFinal ? (
                      <img
                        src={p.imgFinal}
                        alt="Final"
                        className="w-full h-auto"
                      />
                    ) : (
                      <div className="aspect-video bg-green-500/5" />
                    )}
                  </div>
                </div>

                {/* SUB-BLOQUE: DETALLE ADICIONAL */}
                {p.imgExtra && (
                  <div className="relative">
                    <div
                      className={`absolute ${index % 2 === 0 ? "lg:-left-12" : "lg:-right-12"} -left-8 top-0 bottom-0 w-8 flex items-center justify-center`}
                    >
                      <span className="font-mono text-[9px] font-bold text-blue-500 uppercase [writing-mode:vertical-lr] rotate-180 tracking-[0.3em]">
                        DETALLE
                      </span>
                    </div>
                    <div
                      className={`border-2 ${isDark ? "border-zinc-800" : "border-zinc-200"} overflow-hidden shadow-xl`}
                    >
                      <img
                        src={p.imgExtra}
                        alt="Extra"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* BLOQUE: INFORMACIÓN TÉCNICA Y CONCEPTUAL */}
            <div className="w-full lg:w-[45%] flex flex-col space-y-12 pt-4">
              <div>
                <h2
  className={`
    font-black uppercase tracking-tighter italic mb-4 
    ${isDark ? "text-white" : "text-zinc-900"}
    ${
      p.id === "07" || p.id === "09"
        ? "text-2xl md:text-4xl lg:text-5xl md:whitespace-nowrap" 
        : "text-4xl md:text-5xl"
    }
  `}
>
  {p.titulo}
</h2>
                <div className="w-20 h-2 bg-green-500 mb-6" />
                <p
                  className={`text-[14px] leading-relaxed font-medium ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
                >
                  {p.desc}
                </p>
              </div>

              {/* PUNTO CRÍTICO: JUSTIFICACIÓN DE DISEÑO */}
              <div className="border-l-4 border-green-600 pl-8 py-4 bg-green-500/5">
                <span className="font-mono text-[10px] uppercase font-bold text-green-500 tracking-widest block mb-2">
                  / Justificación_Concepto
                </span>
                <p
                  className={`text-[14px] font-black italic leading-snug ${isDark ? "text-zinc-100" : "text-zinc-800"}`}
                >
                  "{p.justificacion}"
                </p>
              </div>

              {/* PUNTO CRÍTICO: TAGS DE COMPONENTES UI */}
              <div>
                <span className="font-mono text-[11px] font-bold text-green-500 uppercase tracking-widest block mb-4 opacity-80 text-center">
                  / Componentes_UI
                </span>
                <div className="flex flex-wrap gap-2.5 justify-center">
                  {p.elementos.map((el, i) => (
                    <span
                      key={i}
                      className={`text-[11px] px-3 py-1.5 border font-black uppercase tracking-tighter ${
                        isDark
                          ? "border-zinc-800 bg-zinc-900 text-zinc-400"
                          : "border-zinc-100 bg-zinc-50 text-zinc-700"
                      }`}
                    >
                      {el}
                    </span>
                  ))}
                </div>
              </div>

              {/* BLOQUE: LOG DE INTERACTIVIDAD */}
              <div
                className={`p-6 border-t-2 ${isDark ? "border-zinc-800 bg-zinc-900/40" : "border-zinc-100 bg-zinc-50/50"}`}
              >
                <div className="flex items-start gap-5">
                  <div className="mt-1.5 w-2.5 h-2.5 bg-green-500 rotate-45 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold opacity-50 block mb-1">
                      Registro_Comportamiento:
                    </span>
                    <p className="font-mono text-[13px] font-black uppercase tracking-tight text-green-500">
                      {p.interactividad}
                    </p>
                  </div>
                </div>
              </div>

              {/* BLOQUE: NOTAS DEL SISTEMA (OPCIONAL) */}
              {p.notas && (
                <div className="w-full mt-4 p-6 border-2 border-dashed border-zinc-500/20 bg-zinc-500/5">
                  <span className="font-mono text-[10px] uppercase font-bold text-zinc-500 block mb-2">
                    // Notas_del_Sistema:
                  </span>
                  <p
                    className={`text-[13px] font-mono italic ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
                  >
                    {p.notas}
                  </p>
                </div>
              )}
            </div>
          </Motion.section>
        ))}
      </div>
    </Motion.div>
  );
}
