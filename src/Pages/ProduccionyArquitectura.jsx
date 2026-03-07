import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ComplexTreeAssets } from "../components/arboldeCarpetas";
import MiFoto from "../Imagenes/Foto_Mia.jpg"
import Firma from "../Imagenes/Firma.png"

export default function Documentacion({ isDark }) {
  const currentTextColor = isDark ? "#ffffff" : "#000000";
  const bgColor = isDark ? "#000000" : "#ffffff";
  const accentGreen = "#008012"; 
  const subtleBorder = `${currentTextColor}22`;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  // --- LÓGICA DE DATOS Y PAGINACIÓN ---
  const [currentPage, setCurrentPage] = useState(0);

  const diaryEntries = [
    { f: 'Noviembre', t: 'Creación del equipo y la idea del videojuego', d: 'Creamos el equipo definitivo para el diseño del videojuego, como también plasmamos la idea que teníamos para el juego hasta llegar a la idea final.' },
    { f: 'Diciembre', t: 'Creación de Rodolfo, los enemigos y el logo del videojuego', d: 'Creamos a Rodolfo en sus diferentes sprites necesarios para el videojuego, también creamos a los enemigos del Santo Reino, como el logo del videojuego.' },
    { f: 'Enero', t: 'Creación del videojuego', d: 'Creamos el videojuego con sus pantallas correspondientes, sus mecánicas y los dos primeros niveles.' },
    { f: 'Feb, Mar y Abr (1ª)', t: 'Terminar el videojuego', d: 'Creamos el resto de los niveles que nos faltaban.' },
    { f: 'Abr (2ª) y May (1ª)', t: 'Testear el videojuego y mejoras', d: 'Testeamos el videojuego, lo pulimos y añadimos mejoras tras el feedback dado.' },
    { f: 'May (2ª) y Junio', t: 'Pulir, testear y lanzar el juego', d: 'Pulimos lo que nos comentaron, lo volvemos a testear y lanzamos el juego oficialmente.' },
  ];

  const entriesPerPage = 2;
  const totalPages = Math.ceil(diaryEntries.length / entriesPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <main 
      className="min-h-screen transition-colors duration-500 pt-[110px] pb-20 px-6 font-sans"
      style={{ color: currentTextColor, backgroundColor: bgColor }}
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* SECCIÓN: HEADER */}
        <Motion.header
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-6xl mx-auto border-b-8 pb-8 mb-20"
          style={{ borderColor: currentTextColor }}
        >
          <span className="font-mono text-xs font-bold opacity-60 tracking-[0.4em] block mb-4 uppercase">
            // Documentación_Fase_07
          </span>
          <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter">
            Producción y <span style={{ color: accentGreen }}>Arquitectura</span>
          </h1>
        </Motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* SECCIÓN: ORGANIZACIÓN Y ROLES */}
          <Motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-5 space-y-16"
          >
            <section>
              <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[2px]" style={{ backgroundColor: accentGreen }}></span>
                Organización
              </h2>
              <div className="border-l-2 pl-6 space-y-4" style={{ borderColor: subtleBorder }}>
                <p className="text-md opacity-80 leading-relaxed italic">
                  Afterbit ha decidido una organización de carpetas clara y sencilla para que cada miembro del equipo localice los recursos instantáneamente. El equipo se dividió en dos áreas core: <strong>Programación</strong> y <strong>Arte + Música</strong>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[2px]" style={{ backgroundColor: accentGreen }}></span>
                Roles & Tools
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { n: "David Jiménez", r: "Tech Developer", t: "Programación C# y lógica de sistemas." },
                  { n: "David Jiménez", r: "Level Designer", t: "Arquitectura de escenas y assets." },
                  { n: "David Jiménez", r: "Lead Animator", t: "Gestión de State Machines y Clips." }
                ].map((role, i) => (
                  <Motion.div key={i} variants={itemVariants} className="p-4 border relative group overflow-hidden" style={{ borderColor: subtleBorder }}>
                    <div className="absolute -right-2 -bottom-2 font-mono text-4xl opacity-[0.03] font-black italic select-none">{role.n.split(' ')[0]}</div>
                    <div className="flex justify-between items-start mb-1">
                      <span className="block text-[10px] font-mono opacity-50 uppercase tracking-tighter">Role_0{i+1}</span>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5" style={{ backgroundColor: `${accentGreen}22`, color: accentGreen }}>{role.n}</span>
                    </div>
                    <span className="font-black italic uppercase text-lg block">{role.r}</span>
                    <p className="text-xs opacity-60 mt-1">{role.t}</p>
                  </Motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-[10px] font-mono opacity-40 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-current opacity-20"></span>
                  System_Stack_v1.0
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Unity 6.66F2', 'C#', 'GitHub', 'Sprite Editor', 'Krita'].map((tool) => (
                    <span key={tool} className="px-3 py-1 border text-[10px] font-mono uppercase font-bold hover:bg-white/5 transition-colors cursor-default" style={{ borderColor: currentTextColor }}>{tool}</span>
                  ))}
                </div>
              </div>
            </section>
          </Motion.div>

          {/* SECCIÓN: ARQUITECTURA DE ARCHIVOS */}
          <div className="lg:col-span-7">
            <Motion.section 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="p-8 border-2 relative overflow-hidden group"
              style={{ borderColor: currentTextColor }}
            >
              <h2 className="text-2xl font-black uppercase mb-8 flex justify-between items-end border-b-2 pb-4" style={{ borderColor: subtleBorder }}>
                Estructura de Carpetas
                <span className="text-[10px] font-mono opacity-50 italic">RA1_Root_Indexing</span>
              </h2>

              <ComplexTreeAssets />

              <div className="mt-8 space-y-4">
                <h3 className="font-black text-xl italic uppercase tracking-tighter">Lógica de Producción</h3>
                <p className="text-sm opacity-80 leading-snug">
                  Hemos implementado una arquitectura sencilla, teniendo en cuenta que es nuestro primer proyecto. Hemos decidido ir por algo sencillo que cualquier parte del equipo de Afterbit lo entienda y la nueva gente que se una al proyecto.
                </p>
              </div>
            </Motion.section>
          </div>
        </div>

        {/* SECCIÓN: DIARIO DE TRABAJO */}
        <section className="mt-40">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
              Diario_de_<span style={{ color: accentGreen }}>Trabajo</span>
            </h2>
            
            <div className="flex w-full lg:w-auto gap-3">
              <button onClick={prevPage} className="flex-1 lg:flex-none whitespace-nowrap px-6 py-3 border text-[10px] md:text-xs font-mono font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2" style={{ borderColor: subtleBorder }}>
                <span>←</span> <span>ANTERIOR</span>
              </button>
              <button onClick={nextPage} className="flex-1 lg:flex-none whitespace-nowrap px-6 py-3 border text-[10px] md:text-xs font-mono font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2" style={{ borderColor: subtleBorder }}>
                <span>SIGUIENTE</span> <span>→</span>
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <Motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {diaryEntries
                  .slice(currentPage * entriesPerPage, (currentPage + 1) * entriesPerPage)
                  .map((entry, idx) => (
                    <div key={idx} className="p-8 border-l-4 relative group overflow-hidden" style={{ borderColor: accentGreen, backgroundColor: `${currentTextColor}05` }}>
                      <div className="absolute top-4 right-6 font-mono text-[60px] opacity-[0.03] font-black italic select-none">
                        0{idx + 1 + (currentPage * entriesPerPage)}
                      </div>
                      <span className="font-mono text-[10px] font-bold opacity-40 block mb-2 tracking-[0.1em] uppercase leading-tight">
                        PERIODO: {entry.f}
                      </span>
                      <h4 className="font-extrabold uppercase italic mb-4 text-xl leading-tight border-b pb-2" style={{ borderColor: `${currentTextColor}11` }}>
                        {entry.t}
                      </h4>
                      <p className="text-xs opacity-70 leading-relaxed italic">
                        "{entry.d}"
                      </p>
                    </div>
                  ))}
              </Motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-center gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <div 
                  key={i}
                  className="h-1 transition-all duration-500 rounded-full"
                  style={{ 
                    width: i === currentPage ? '60px' : '20px',
                    backgroundColor: i === currentPage ? accentGreen : `${currentTextColor}22`
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN: CONCLUSIONES Y FIRMA OFICIAL */}
        <section className="mt-40 border-t-8 pt-20" style={{ borderColor: currentTextColor }}>
          <div className="w-full relative overflow-visible"> 
            <h2 className="text-3xl font-black uppercase mb-12 italic flex items-center gap-4">
              <span className="w-12 h-[2px]" style={{ backgroundColor: accentGreen }}></span>
              Conclusiones_Finales
            </h2>
            
            <p className="text-lg md:text-2xl font-light leading-relaxed italic opacity-90 max-w-5xl mb-16">
              "Este es nuestro primer proyecto. Como <strong className="font-extrabold" style={{ color: accentGreen }}>David Jiménez</strong>, fundador de Afterbit y estudiante del curso de especialización en Videojuegos y VR, debo decir que este camino ha sido hermoso. Ha tenido sus complicaciones, como es normal al tratarse de mi primer videojuego, pero estoy feliz con el resultado. Quién me iba a decir a mí, a ese niño de 6 años, que algún día crearía un videojuego. Me alegra tener bien planteado en nuestra web oficial todo lo relacionado con nuestra primera IP, y que el juego salga de manera adecuada y totalmente profesional."
            </p>
            
            <div className="mb-8">
              <span className="font-mono text-[10px] md:text-xs font-bold opacity-40 uppercase tracking-[0.4em]">
                Firmado por el CEO de Afterbit:
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 relative">
              
              <div className="flex items-center gap-6">
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 shadow-lg flex-shrink-0 bg-neutral-800" 
                  style={{ borderColor: accentGreen }}
                >
                  {MiFoto ? (
                    <img src={MiFoto} alt="David Jiménez" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono text-[10px] text-white p-2">FOTO</div>
                  )}
                </div>

                <div className="flex flex-col relative z-10">
                  <span className="block font-black uppercase italic text-xl md:text-2xl leading-none">David Jiménez</span>
                  <span className="block font-mono text-[10px] md:text-xs opacity-50 uppercase tracking-[0.2em] mt-2">
                    Lead Software Engineer // Founder of Afterbit
                  </span>
                </div>
              </div>

              {/* SELLO DE IDENTIDAD */}
              <div className="flex items-center md:border-l md:pl-16" style={{ borderColor: subtleBorder }}>
                <div className="relative group">
                  <span className="absolute -top-5 left-0 font-mono text-[8px] opacity-30 uppercase tracking-widest">Official_Identity_Seal</span>
                  
                  <div 
                    className="w-24 h-24 md:w-32 md:h-32 bg-white flex items-center justify-center shadow-2xl rounded-sm border relative overflow-visible"
                    style={{ borderColor: `${currentTextColor}15` }}
                  >
                    <img 
                      src={Firma} 
                      alt="Firma Gigante David Jiménez" 
                      className="absolute w-full h-full object-contain p-0 transform scale-[2.2] origin-center opacity-80 top-[10%] left-[-9%]" 
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}