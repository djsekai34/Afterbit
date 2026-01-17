import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contacto({ isDark }) {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  // --- LÓGICA DE ENVÍO (EMAILJS) ---
  const sendEmail = (e) => {
    e.preventDefault();
    if (e.target.bot_field.value) return;
    setCargando(true);

    emailjs
      .sendForm(
        "service_ejavni3",
        "template_q2faekl",
        form.current,
        "VzhXwXSzp3zgMwKUP",
      )
      .then(
        () => {
          setEnviado(true);
          setCargando(false);
          form.current.reset();
          setTimeout(() => setEnviado(false), 5000);
        },
        (err) => {
          setCargando(false);
          console.error(err.text);
        },
      );
  };

  const fechaActual = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60 },
    },
  };

  const Highlight = ({ children }) => (
    <span
      className={`px-1 rounded-sm font-bold italic transition-all ${
        isDark ? "bg-red-600/20 text-white" : "bg-red-600/10 text-black"
      }`}
    >
      {children}
    </span>
  );

  return (
    <motion.div
      /* AJUSTE DE ESPACIADO: pt-28 (más arriba) y pb-12 (menos abajo) */
      className={`min-h-screen pt-28 pb-12 transition-colors duration-500 overflow-x-hidden max-w-full relative ${
        isDark ? "text-white bg-black" : "text-black bg-white"
      }`}
      initial="hidden"
      animate="visible"
    >
      <div className="relative z-10 px-4 md:px-8 lg:px-16 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto relative">
          <motion.h1
            className="text-4xl md:text-8xl font-black italic mb-20 uppercase tracking-tighter text-center"
            variants={itemVariants}
          >
            / CONTACTO<span className="text-red-600">.</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 space-y-12 flex flex-col items-start md:items-center lg:items-start"
            >
              <div className="space-y-6 text-center lg:text-center">
                <h3 className="text-3xl font-black italic uppercase text-red-600">
                  ¿Hablamos?
                </h3>
                <p className="opacity-70 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                  Estoy disponible para proyectos freelance, colaboraciones y{" "}
                  <Highlight>
                    nuevas oportunidades en equipos de alto rendimiento
                  </Highlight>
                  .
                  <br />
                  <br />
                  Si buscas a alguien que no solo escriba código, sino que ayude
                  a <Highlight>hacer crecer tu empresa</Highlight> aportando
                  soluciones creativas y escalables, has llegado al sitio
                  correcto.
                </p>
              </div>

              <div className="space-y-8 font-mono flex flex-col items-start md:items-center lg:items-start w-full overflow-hidden">
                <a
                  href="https://www.google.com/maps/place/Ja%C3%A9n"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-6 group cursor-pointer w-fit"
                >
                  <span className="text-red-600 text-xs font-bold border border-red-600 px-2 py-1 flex-shrink-0">
                    LOC
                  </span>
                  <span className="group-hover:text-red-600 transition-colors uppercase tracking-widest text-sm md:text-base">
                    Jaén, España
                  </span>
                </a>
                <a
                  href="mailto:davidjimenezvillena@gmail.com"
                  className="flex items-center gap-6 group cursor-pointer w-fit max-w-full"
                >
                  <span className="text-red-600 text-[10px] md:text-xs font-bold border border-red-600 px-2 py-1 flex-shrink-0">
                    MSG
                  </span>
                  <span className="group-hover:text-red-600 transition-colors uppercase tracking-tighter md:tracking-widest text-[11px] md:text-base truncate">
                    davidjimenezvillena@gmail.com
                  </span>
                </a>
              </div>

              <div className="pt-8 w-full text-center">
                <p className="text-[10px] font-bold mb-6 opacity-40 tracking-[0.4em] uppercase">
                  Connect_Hub
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-6 gap-y-4 font-black italic text-[17px] md:text-xl">
                  <a
                    href="https://djsekai34.github.io/portfolio/"
                    target="_blank"
                    rel="noreferrer"
                    className="relative group opacity-80 hover:opacity-100 hover:text-red-600 transition-all hover:-translate-y-1 duration-300 cursor-pointer tracking-tighter"
                  >
                    <span className="relative z-10">PORTFOLIO</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <span className="opacity-20 font-thin italic select-none">
                    |
                  </span>
                  <a
                    href="https://www.linkedin.com/in/david-jimenez-villena/"
                    target="_blank"
                    rel="noreferrer"
                    className="relative group opacity-80 hover:opacity-100 hover:text-red-600 transition-all hover:-translate-y-1 duration-300 cursor-pointer tracking-tighter"
                  >
                    <span className="relative z-10">LINKEDIN</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <span className="opacity-20 font-thin italic select-none">
                    |
                  </span>
                  <a
                    href="https://github.com/djsekai34"
                    target="_blank"
                    rel="noreferrer"
                    className="relative group opacity-80 hover:opacity-100 hover:text-red-600 transition-all hover:-translate-y-1 duration-300 cursor-pointer tracking-tighter"
                  >
                    <span className="relative z-10">GITHUB</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-7">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-10"
              >
                <input
                  type="text"
                  name="bot_field"
                  style={{ display: "none" }}
                  tabIndex="-1"
                />
                <input type="hidden" name="date" value={fechaActual} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="TU NOMBRE"
                    className={`w-full bg-transparent border-b-2 p-4 outline-none font-black italic focus:border-red-600 transition-all ${isDark ? "border-white/10" : "border-black/10"}`}
                  />
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="TU EMAIL"
                    className={`w-full bg-transparent border-b-2 p-4 outline-none font-black italic focus:border-red-600 transition-all ${isDark ? "border-white/10" : "border-black/10"}`}
                  />
                </div>

                <input
                  type="text"
                  name="user_subject"
                  required
                  placeholder="ASUNTO DEL PROYECTO"
                  className={`w-full bg-transparent border-b-2 p-4 outline-none font-black italic focus:border-red-600 transition-all ${isDark ? "border-white/10" : "border-black/10"}`}
                />

                <textarea
                  name="message"
                  required
                  placeholder="CUÉNTAME LOS DETALLES..."
                  rows="5"
                  className={`w-full bg-transparent border-b-2 p-4 outline-none font-black italic focus:border-red-600 transition-all resize-none ${isDark ? "border-white/10" : "border-black/10"}`}
                ></textarea>

                <button
                  type="submit"
                  disabled={cargando || enviado}
                  className={`group relative border-4 py-6 px-10 font-black uppercase italic overflow-hidden transition-all text-xl
                    ${
                      enviado
                        ? isDark
                          ? "bg-white text-black border-white"
                          : "bg-black text-white border-black"
                        : isDark
                          ? "border-white hover:bg-white hover:text-black"
                          : "border-black hover:bg-black hover:text-white"
                    }
                  `}
                >
                  <div
                    className={`absolute inset-0 w-full h-full -translate-x-full group-hover:animate-[shimmer_2s_infinite] z-0 pointer-events-none ${isDark ? "bg-black/20" : "bg-white/20"}`}
                  ></div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={cargando ? "l" : enviado ? "s" : "i"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="relative z-10 flex flex-col items-center pointer-events-none"
                    >
                      {cargando ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-pulse text-red-600">●</span>{" "}
                          ENVIANDO_DATOS...
                        </span>
                      ) : enviado ? (
                        "SISTEMA: EMAIL_ENVIADO"
                      ) : (
                        <>
                          <span className="block group-hover:hidden transition-all uppercase text-sm md:text-xl">
                            ENVIAR MENSAJE →
                          </span>
                          <span
                            className={`hidden group-hover:block text-[10px] md:text-sm font-mono tracking-tighter animate-pulse uppercase ${isDark ? "text-black" : "text-white"}`}
                          >
                            SISTEMA_AFTERBIT: LISTO_PARA_ENVIAR
                          </span>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}