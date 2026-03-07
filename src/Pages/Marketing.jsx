import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaHammer, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function UnderConstruction({ isDark }) {
  const accentGreen = "#008012";
  const accentBlue = "#0414ec";
  const accentRed = "#cc0000";
  const currentTextColor = isDark ? "white" : "black";

  // Lógica de rotación fija: Rojo -> Azul -> Verde
  const hoverColors = [accentRed, accentBlue, accentGreen];
  const [colorIndex, setColorIndex] = useState(0);

  const nextColor = () => {
    // Incrementa el índice y vuelve a 0 al llegar al final (Rojo -> Azul -> Verde -> Rojo...)
    setColorIndex((prevIndex) => (prevIndex + 1) % hoverColors.length);
  };

  const terminalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <Motion.div
      initial="hidden"
      animate="visible"
      className={`min-h-screen pt-32 pb-20 px-4 md:px-12 lg:px-24 flex flex-col ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="flex-grow flex flex-col items-center justify-center max-w-6xl mx-auto w-full">
        
        <Motion.div variants={terminalVariants} className="text-center space-y-12">
          
          {/* ICONO CON CICLO DE COLORES */}
          <div className="relative inline-block">
            <Motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                color: [accentRed, accentBlue, accentGreen, accentRed] 
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="text-7xl md:text-9xl mb-6 flex justify-center"
            >
              <FaHammer />
            </Motion.div>
            <Motion.div 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="absolute -top-4 -right-4 text-3xl md:text-4xl"
              style={{ color: accentRed }}
            >
              <FaExclamationTriangle />
            </Motion.div>
          </div>

          {/* TEXTO CON LOS COLORES SOLICITADOS */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-none">
              <span style={{ color: accentBlue }}>ESTAMOS</span> <br />
              <span style={{ color: accentRed }}>EN</span> <br />
              <span style={{ color: accentGreen }}>CONSTRUCCIÓN</span>
            </h1>
            
            <div className="font-mono text-sm md:text-base opacity-80 flex flex-col items-center gap-3">
              <p className="flex items-center gap-2 border-y-2 py-2 px-4" style={{ borderColor: accentBlue }}>
                <span className="animate-pulse" style={{ color: accentRed }}>[!]</span> 
                [ ERROR_CODE: SECTION_UNDER_HEAVY_DEVELOPMENT ]
              </p>
              <p className="max-w-xl italic leading-relaxed">
                Gracias por su paciencia. Estamos compilando los últimos assets para ofrecerte la mejor experiencia posible.
              </p>
            </div>
          </div>

          {/* FIRMA AFTERBIT */}
          <div className="py-4 border-b-4 border-double" style={{ borderColor: accentRed }}>
            <p className="font-mono text-2xl md:text-3xl font-black tracking-[0.4em] uppercase text-center">
              ATENTAMENTE: <span style={{ color: accentBlue }}>AFTER</span><span style={{ color: accentGreen }}>BIT</span>
            </p>
          </div>

          {/* BOTÓN DE RETORNO CON ROTACIÓN FIJA Y FIX DE BORDES TOTAL */}
          <Link to="/">
            <Motion.button
              onMouseLeave={nextColor} // Al salir, prepara el siguiente color del ciclo
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 font-mono text-sm font-black uppercase tracking-widest border-4 transition-all duration-300 overflow-hidden"
              style={{ borderColor: currentTextColor, color: currentTextColor }}
            >
              {/* FONDO: Coordenadas negativas y tamaño extra para asegurar cobertura total */}
              <div 
                className="absolute -top-1 -bottom-1 -left-1 -right-1 w-[105%] h-[105%] transition-transform duration-500 ease-in-out translate-x-[-101%] group-hover:translate-x-0 -z-10"
                style={{ backgroundColor: hoverColors[colorIndex] }}
              ></div>
              
              <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-all duration-300">
                <FaArrowLeft /> VOLVER AL ACCESO PRINCIPAL
              </span>
            </Motion.button>
          </Link>
        </Motion.div>
      </main>
    </Motion.div>
  );
}