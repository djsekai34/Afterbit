import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion as Motion, AnimatePresence } from "framer-motion";
import logoJuego from "../Imagenes/LogoJuego.png";

{
  /* Traemos la contraseña y la url de Supabase y creamos un cliente */
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

{
  /* Esqueleto de la seccion */
}
const Section = ({ title, children, isDark }) => (
  <div
    className={`mb-10 p-6 border rounded-sm transition-colors duration-500 
    ${
      isDark
        ? "border-white/10 bg-white/[0.02]"
        : "border-black/10 bg-black/[0.02]"
    }`}
  >
    <h2 className="text-[#008012] font-black italic uppercase tracking-widest mb-6 border-b border-green-500/20 pb-2">
      {title}
    </h2>
    <div className="grid grid-cols-1 gap-6">{children}</div>
  </div>
);

const accentGreen = "#008012";
const accentRed = "#ff0000";

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60 },
  },
};

const FormularioFeedback = ({ isDark }) => {
  const [enviado, setEnviado] = useState(false);
  const [errorExperiencia, setErrorExperiencia] = useState(false);

  {
    /* Como se mostrara los campos de primeras en el formulario */
  }
  const [formData, setFormData] = useState({
    // 01. Datos generales
    nombre: "",
    edad: "",
    experiencia: "Nada",
    juegos_similares: "",
    // 02. Primeras impresiones
    opinion_inicial: "",
    entendiste_sin_ayuda: null,
    detalle_ayuda: "",
    algo_confuso: null,
    detalle_confusion: "",
    // 03. Controles y movimiento
    puntos_controles: 5,
    puntos_fluidez: 5,
    puntos_ataque_rodolfo: 5,
    puntos_timing: 5,
    // 04. Combate
    combate_divertido: "",
    detalle_combate: "",
    dificultad_adecuada: "",
    cantidad_enemigos: "",
    // 05. Arte y sonido
    estilo_visual: "",
    detalle_estilo_visual: "",
    animaciones_claras: "",
    detalle_animaciones_claras: "",
    soundtrack_acorde: "",
    detalle_soundtrack_acorde: "",
    feedback_shagamido: "",
    detalle_feedback_shagamido: "",
    // 06. Errores y rendimiento
    hay_bugs: false,
    descripcion_bugs: "",
    fps_estables: true,
    hay_crasheos: false,
    descripcion_crasheos: "",
    // 07. Opinión general
    opinion_general: "",
    ideas_mejora: "",
    // 08. Evaluación final
    nota_final: 5,
    recomendado: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.experiencia || formData.experiencia === "Nada") {
      setErrorExperiencia(true);
      document
        .getElementById("select-experiencia")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setErrorExperiencia(false);

    const txt = (v) => (v && v.trim() !== "" ? v : null);

    {
      /* Para enviar los datos del formulario a la base de datos*/
    }
    const payload = {
      nombre: txt(formData.nombre),
      edad: formData.edad ? parseInt(formData.edad) : null,
      experiencia: formData.experiencia,
      juegos_similares: txt(formData.juegos_similares),
      opinion_inicial: txt(formData.opinion_inicial),
      entendiste_sin_ayuda: formData.entendiste_sin_ayuda,
      detalle_ayuda: txt(formData.detalle_ayuda),
      algo_confuso: formData.algo_confuso,
      detalle_confusion: txt(formData.detalle_confusion),
      puntos_controles: formData.puntos_controles,
      puntos_fluidez: formData.puntos_fluidez,
      puntos_ataque_rodolfo: formData.puntos_ataque_rodolfo,
      puntos_timing: formData.puntos_timing,
      combate_divertido: txt(formData.combate_divertido),
      detalle_combate: txt(formData.detalle_combate),
      dificultad_adecuada: txt(formData.dificultad_adecuada),
      cantidad_enemigos: txt(formData.cantidad_enemigos),
      estilo_visual: txt(formData.estilo_visual),
      detalle_estilo_visual: txt(formData.detalle_estilo_visual),
      animaciones_claras: txt(formData.animaciones_claras),
      detalle_animaciones: txt(formData.detalle_animaciones_claras),
      soundtrack_acorde: txt(formData.soundtrack_acorde),
      detalle_soundtrack: txt(formData.detalle_soundtrack_acorde),
      feedback_shagamido: txt(formData.feedback_shagamido),
      detalle_shagamido: txt(formData.detalle_feedback_shagamido),
      hay_bugs: formData.hay_bugs,
      descripcion_bugs: txt(formData.descripcion_bugs),
      fps_estables: formData.fps_estables,
      hay_crasheos: formData.hay_crasheos,
      descripcion_crasheos: txt(formData.descripcion_crasheos),
      opinion_general: txt(formData.opinion_general),
      ideas_mejora: txt(formData.ideas_mejora),
      nota_final: formData.nota_final,
      recomendado: formData.recomendado,
    };

    const { error } = await supabase.from("feedback_juego").insert([payload]);
    if (!error) {
      await supabase.functions.invoke("dynamic-processor", {
      body: { record: payload } 
    });
      setEnviado(true);
    } else {
      console.error("Error al enviar:", error);
    }
  };

  {
    /* Si el formulario ya ha pasado la fecha límite, mostramos un mensaje de cierre */
  }
  const fechaLimite = new Date("2026-05-24T23:59:00");
  const hoy = new Date();
  if (hoy >= fechaLimite)
    return (
      <div
        className={`h-screen flex items-center justify-center font-mono transition-colors duration-500 px-6 overflow-hidden ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`max-w-xl w-full p-8 md:p-12 border-2 relative text-center ${
            isDark
              ? "border-[#008012]/30 bg-black shadow-[0_0_50px_rgba(0,128,18,0.1)]"
              : "border-[#008012] bg-white shadow-xl"
          }`}
        >
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#008012]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#008012]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#008012]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#008012]" />
          <div className="absolute top-0 left-0 w-full h-1 bg-[#008012]/30 overflow-hidden">
            <Motion.div
              animate={{ x: ["-300%", "300%"] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "linear",
              }}
              className="w-1/3 h-full bg-[#008012]/50 absolute"
            />
          </div>
          <div className="mb-6 max-w-[190px] mx-auto">
            <img
              src={logoJuego}
              alt="Super Rodolfo y las Esferas del Santo Reino"
              className="w-full h-auto scale-125 drop-shadow-[0_0_10px_rgba(0,128,18,0.3)]"
            />
          </div>
          <div className="w-10 h-[2px] bg-[#ff0000] mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-black italic text-[#008012] mb-4 tracking-tighter uppercase">
            Fase de Testeo Cerrada
          </h1>
          <p
            className={`text-sm leading-relaxed font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}
          >
            El periodo oficial de recogida de testeo de{" "}
            <span
              className="italic tracking-tight"
              style={{ color: "#008012" }}
            >
              Super Rodolfo y las Esferas del Santo Reino
            </span>{" "}
            ha concluido.
          </p>
          <p
            className={`text-[11px] uppercase tracking-widest leading-relaxed max-w-sm mx-auto mb-8 ${isDark ? "opacity-50" : "opacity-60"}`}
          >
            <Motion.span
              animate={{
                textShadow: isDark
                  ? [
                      "0 0 5px #fff",
                      "0 0 20px #fff, 0 0 40px #fff, 0 0 60px #ffffff",
                      "0 0 5px #fff",
                    ]
                  : [
                      "0 0 0px rgba(0,0,0,0)",
                      "0 0 12px rgba(0,0,0,0.5)",
                      "0 0 0px rgba(0,0,0,0)",
                    ],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "circIn",
              }}
              className={`font-black inline-block ${isDark ? "text-white" : "text-black"}`}
            >
              Gracias a todos
            </Motion.span>{" "}
            los que participaron en el testeo del videojuego. Vuestro feedback
            es fundamental para el desarrollo y mejora del juego.
          </p>
          <Motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a
              href="/"
              className={`inline-flex items-center justify-center px-10 py-4 font-black uppercase tracking-[0.4em] text-xs border-2 transition-all ${
                isDark
                  ? "border-[#008012] text-[#008012] hover:bg-[#008012] hover:text-white"
                  : "border-[#008012] text-[#008012] hover:bg-[#008012] hover:text-white"
              }`}
            >
              Volver al inicio
            </a>
          </Motion.div>
        </Motion.div>
      </div>
    );

  {
    /* Si el formulario ya fue enviado, mostramos una pantalla de agradecimiento. De lo contrario, mostramos el formulario. */
  }
  if (enviado)
    return (
      <div
        className={`h-screen flex items-center justify-center font-mono transition-colors duration-500 px-6 overflow-hidden ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`max-w-2xl w-full p-8 md:p-12 border-2 relative ${
            isDark
              ? "border-[#008012]/30 bg-black shadow-[0_0_50px_rgba(0,128,18,0.1)]"
              : "border-[#008012] bg-white shadow-xl"
          }`}
        >
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#008012]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#008012]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#008012]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#008012]" />

          <div className="absolute top-0 left-0 w-full h-1 bg-[#008012] overflow-hidden">
            <Motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-1/3 h-full bg-white/50 shadow-[0_0_10px_white]"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 max-w-[180px] md:max-w-[220px]">
              <img
                src={logoJuego}
                alt="Super Rodolfo y las Esferas del Santo Reino"
                className="w-full h-auto drop-shadow-[0_0_10px_rgba(0,128,18,0.3)]"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-black italic text-[#008012] mb-4 tracking-tighter uppercase text-center">
              ¡Feedback Transmitido!
            </h1>
            <div className="w-16 h-[2px] bg-[#ff0000] mb-8" />{" "}
            <div className="space-y-6 mb-10 text-center">
              <p
                className={`text-sm md:text-lg leading-relaxed font-bold tracking-tight ${isDark ? "text-white" : "text-black"}`}
              >
                Los datos del formulario han sido{" "}
                <span className="text-[#008012]">
                  encriptados y almacenados
                </span>{" "}
                en la base de datos de Afterbit.
              </p>

              <p
                className={`text-[11px] md:text-xs leading-relaxed max-w-sm mx-auto uppercase tracking-widest ${isDark ? "opacity-50" : "opacity-70"}`}
              >
                Tu aporte es vital para la optimización y mejora de{" "}
                <span
                  className={`${isDark ? "text-[#008012]" : "text-[#00640e]"} font-black`}
                >
                  Super Rodolfo y las Esferas del Santo Reino {" "}
                </span>
                <span
                  className={`font-black animate-pulse ${isDark ? "text-white" : "text-[#008012]"}`}
                  style={{
                    textShadow: isDark
                      ? "0 0 10px rgba(0, 128, 18, 0.8), 0 0 20px rgba(0, 128, 18, 0.4)"
                      : "0 0 8px rgba(0, 128, 18, 0.3)",
                  }}
                >
                   Muchas gracias
                </span>{" "}
                por ser parte de la{" "}
                <span className="text-[#ff0000] font-black">
                  fase de pruebas
                </span>{" "}
                de nuestro videojuego.
              </p>
            </div>
            <Motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto"
            >
              <a
                href="/"
                className={`group relative flex items-center justify-center px-12 py-4 font-black uppercase tracking-[0.4em] text-xs transition-all border-2 ${
                  isDark
                    ? "border-[#008012] text-[#008012] hover:bg-[#008012] hover:text-white"
                    : "border-[#008012] text-[#008012] hover:bg-[#008012] hover:text-white"
                }`}
              >
                <span className="relative z-10">Ir a la página principal</span>
              </a>
            </Motion.div>
            <div className="mt-12 flex justify-between w-full border-t border-[#008012]/10 pt-4">
              <div className="text-[7px] opacity-30 font-mono uppercase tracking-[0.2em]">
                ID: SR-2026 // ADDR: 0xAFTERBIT
              </div>
              <div className="text-[7px] text-[#008012] font-black animate-pulse uppercase tracking-[0.2em]">
                Connection: Stable
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    );

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen pt-28 pb-12 px-6 lg:px-20 transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Encabezado con título e introducción al formulario */}
      <div
        className={`relative p-8 md:p-12 overflow-hidden border-t-4 ${
          isDark
            ? "bg-neutral-900/40 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[#008012]"
            : "bg-white text-black shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[#008012]"
        }`}
      >
        <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-[0.03] pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="#008012">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        <div className="relative z-10">
          <span className="inline-block px-3 py-1 mb-6 text-[10px] font-black tracking-[0.3em] uppercase bg-[#008012] text-white">
            Test Oficial
          </span>

          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-6 leading-none">
            Bienvenido al testeo de <br />
            <span className="text-[#008012]">
              Super Rodolfo y las esferas del Santo Reino
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-sm md:text-base leading-relaxed opacity-80 font-medium">
                Muchas gracias por participar en el test oficial de Super
                Rodolfo y las esferas del{" "}
                <span className="font-bold underline decoration-[#008012]/50">
                  Santo Reino
                </span>
                . Tu misión es simple: rellenar el formulario con toda la
                información solicitada tras haber probado una primera build del
                videojuego, siendo lo más honesto posible. Cualquier información
                que me traslades será bien recibida.
              </p>
            </div>

            <div
              className={`flex flex-col justify-between p-5 border ${isDark ? "border-white/10 bg-black/20" : "border-black/5 bg-neutral-50"}`}
            >
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-black mb-2 opacity-100 text-[#008012]">
                  Protocolo de Privacidad
                </h4>
                <p className="text-[11px] leading-tight opacity-60">
                  Tus datos (nombre y edad) se almacenan de forma segura para
                  fines analíticos. Al formar parte del test oficial de Super
                  Rodolfo, aceptas que tus datos y tu feedback sean utilizados
                  para mejorar el juego. Desde{" "}
                  <span className="font-bold">Afterbit</span> aseguramos que no
                  se compartirá tu información con terceros y que se usará
                  exclusivamente para el desarrollo de Super Rodolfo y las esferas del Santo Reino.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-current opacity-30 flex flex-col sm:flex-row justify-between items-center gap-2">
                <span className="text-[8px] md:text-[9px] uppercase font-bold text-center md:text-left">
                  ¿Necesitas soporte técnico?
                </span>
                <a
                  href="/contacto"
                  className="text-[9px] md:text-[10px] font-black underline hover:text-[#008012] transition-colors tracking-tighter sm:tracking-normal"
                >
                  CONTACTO →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicaciones para rellenar el formulario con animaciones llamativas */}
      <div className="flex flex-col items-center mt-8 space-y-2">
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-3"
        >
          <span
            className={`text-[10px] uppercase tracking-[0.4em] font-black italic ${isDark ? "text-white/40" : "text-black/40"}`}
          >
            Rellena el Formulario
          </span>
        </Motion.div>

        <Motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 48, opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`w-[1px] ${isDark ? "bg-white" : "bg-black"}`}
        />
        <Motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#008012] text-xs font-black"
        >
          ↓↓↓
        </Motion.span>
      </div>
      <br />

      <form
        onSubmit={handleSubmit}
        className={`min-h-screen font-mono p-4 md:p-10 max-w-4xl mx-auto transition-colors duration-500 border
          ${
            isDark
              ? "bg-neutral-950 text-white border-white/5 shadow-2xl"
              : "bg-white text-black border-black/10 shadow-xl"
          }`}
      >
        {/* 1º - DATOS GENERALES */}
        <Section title="01. Datos Generales" isDark={isDark}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
                Tu nombre
              </label>
              <input
                value={formData.nombre}
                className={`bg-transparent border-b p-2 focus:border-[#008012] outline-none transition-colors ${
                  isDark
                    ? "border-white/20 text-white"
                    : "border-black/20 text-black"
                }`}
                placeholder="Escribe tu nombre..."
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, nombre: e.target.value }))
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
                Edad
              </label>
              <input
                type="number"
                value={formData.edad}
                className={`bg-transparent border-b p-2 focus:border-[#008012] outline-none transition-colors ${
                  isDark
                    ? "border-white/20 text-white"
                    : "border-black/20 text-black"
                }`}
                placeholder="Tu edad..."
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, edad: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
              Experiencia en los videojuegos
            </label>
            <select
              id="select-experiencia"
              className={`border p-3 outline-none text-sm cursor-pointer transition-colors ${
                errorExperiencia
                  ? "border-[#ff0000] bg-[#ff0000]/5"
                  : isDark
                    ? "bg-neutral-900 border-white/10 text-white focus:border-[#008012]"
                    : "bg-neutral-100 border-black/10 text-black focus:border-[#008012]"
              }`}
              value={formData.experiencia}
              onChange={(e) => {
                setErrorExperiencia(false);
                setFormData((prev) => ({
                  ...prev,
                  experiencia: e.target.value,
                }));
              }}
            >
              <option value="Nada">Selecciona una opcion</option>
              <option value="Ninguna">Ninguna</option>
              <option value="Casual">Casual</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
              Juegos similares jugados
            </label>
            <textarea
              value={formData.juegos_similares}
              className={`bg-transparent border p-3 focus:border-[#008012] outline-none h-24 text-sm resize-none transition-colors ${
                isDark
                  ? "border-white/10 text-white"
                  : "border-black/10 text-black"
              }`}
              placeholder="Ej: Hollow Knight, Celeste, Mario..."
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  juegos_similares: e.target.value,
                }))
              }
            />
          </div>
        </Section>

        {/* 2º - PRIMERAS IMPRESIONES */}
        <Section title="02. Primeras Impresiones" isDark={isDark}>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
              ¿Qué te ha parecido el juego?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {["Malo", "Regular", "Bueno", "Muy Bueno", "GOTY"].map(
                (opcion) => {
                  const esMalo = opcion === "Malo";
                  const esRegular = opcion === "Regular";
                  const colorActivo = esMalo
                    ? "bg-[#ff0000] border-[#ff0000]"
                    : esRegular
                      ? "bg-[#eab308] border-[#eab308]"
                      : "bg-[#008012] border-[#008012]";

                  return (
                    <button
                      key={opcion}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          opinion_inicial: opcion,
                        }))
                      }
                      className={`px-2 py-3 text-[10px] font-bold uppercase border transition-all duration-300 ${
                        formData.opinion_inicial === opcion
                          ? `${colorActivo} text-white`
                          : isDark
                            ? "border-white/10 hover:border-white/30 text-white/60"
                            : "border-black/10 hover:border-black/30 text-black/60"
                      }`}
                    >
                      {opcion}
                    </button>
                  );
                },
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
              ¿Entendiste qué hacer sin ayuda?
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    entendiste_sin_ayuda: true,
                  }))
                }
                className={`flex-1 py-2 border text-xs font-bold uppercase transition-all duration-300 ${
                  formData.entendiste_sin_ayuda === true
                    ? "bg-[#008012] text-white border-[#008012]"
                    : isDark
                      ? "border-white/10 opacity-50 hover:opacity-100"
                      : "border-black/10 opacity-50 hover:opacity-100"
                }`}
              >
                Sí, perfectamente
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    entendiste_sin_ayuda: false,
                  }))
                }
                className={`flex-1 py-2 border text-xs font-bold uppercase transition-all duration-300 ${
                  formData.entendiste_sin_ayuda === false
                    ? "bg-[#ff0000] text-white border-[#ff0000]"
                    : isDark
                      ? "border-white/10 opacity-50 hover:opacity-100"
                      : "border-black/10 opacity-50 hover:opacity-100"
                }`}
              >
                No, necesité ayuda
              </button>
            </div>

            <AnimatePresence>
              {formData.entendiste_sin_ayuda === false && (
                <Motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <label className="text-[9px] uppercase opacity-40 mb-1 block">
                    ¿En qué parte te quedaste bloqueado?
                  </label>
                  <textarea
                    value={formData.detalle_ayuda}
                    className={`w-full bg-transparent border p-3 focus:border-[#008012] outline-none h-20 text-sm transition-colors ${
                      isDark
                        ? "border-white/10 text-white"
                        : "border-black/10 text-black"
                    }`}
                    placeholder="Describe qué no quedó claro..."
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        detalle_ayuda: e.target.value,
                      }))
                    }
                  />
                </Motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
              ¿Hay algo que te confunda?
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, algo_confuso: true }))
                }
                className={`flex-1 py-2 border text-xs font-bold uppercase transition-all duration-300 ${
                  formData.algo_confuso === true
                    ? "bg-yellow-600 text-white border-yellow-600"
                    : isDark
                      ? "border-white/10 opacity-50 hover:opacity-100"
                      : "border-black/10 opacity-50 hover:opacity-100"
                }`}
              >
                Sí, hay cosas raras
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, algo_confuso: false }))
                }
                className={`flex-1 py-2 border text-xs font-bold uppercase transition-all duration-300 ${
                  formData.algo_confuso === false
                    ? "bg-[#008012] text-white border-[#008012]"
                    : isDark
                      ? "border-white/10 opacity-50 hover:opacity-100"
                      : "border-black/10 opacity-50 hover:opacity-100"
                }`}
              >
                No, todo claro
              </button>
            </div>

            <AnimatePresence>
              {formData.algo_confuso === true && (
                <Motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <label className="text-[9px] uppercase opacity-40 mb-1 block">
                    ¿Qué elementos te causaron confusión?
                  </label>
                  <textarea
                    value={formData.detalle_confusion}
                    className={`w-full bg-transparent border p-3 focus:border-yellow-600 outline-none h-20 text-sm transition-colors ${
                      isDark
                        ? "border-white/10 text-white"
                        : "border-black/10 text-black"
                    }`}
                    placeholder="UI, mecánicas, combate..."
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        detalle_confusion: e.target.value,
                      }))
                    }
                  />
                </Motion.div>
              )}
            </AnimatePresence>
          </div>
        </Section>

        {/* 3º - CONTROLES Y MOVIMIENTO */}
        <Section title="03. Controles y Movimiento" isDark={isDark}>
          <div className="grid grid-cols-1 gap-8">
            {[
              {
                label: "¿Responde bien los controles?",
                field: "puntos_controles",
                desc: "Input lag y respuesta general",
              },
              {
                label: "¿Movimiento fluido?",
                field: "puntos_fluidez",
                desc: "Sensación de inercia y velocidad",
              },
              {
                label: "¿El ataque de Rodolfo responde bien?",
                field: "puntos_ataque_rodolfo",
                desc: "Feedback al golpear y ejecución",
              },
              {
                label: "¿Tuviste problemas con timing o precisión?",
                field: "puntos_timing",
                desc: "Ajuste de los frames de acción",
              },
            ].map((q) => (
              <div key={q.field} className="flex flex-col gap-3">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <label className="text-[13px] uppercase tracking-widest opacity-50 font-bold transition-colors">
                      {q.label}
                    </label>
                    <span className="text-[11px] opacity-30 italic">
                      {q.desc}
                    </span>
                  </div>
                  <div className="text-xl font-black italic flex items-baseline gap-1">
                    <span
                      className={
                        formData[q.field] >= 7
                          ? "text-[#008012]"
                          : formData[q.field] >= 5
                            ? "text-[#eab308]"
                            : "text-[#ff0000]"
                      }
                    >
                      {formData[q.field]}
                    </span>
                    <span
                      className={`text-[10px] ${isDark ? "opacity-20" : "opacity-40"}`}
                    >
                      /10
                    </span>
                  </div>
                </div>

                <div className="relative flex items-center h-6">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={formData[q.field]}
                    className="w-full cursor-grab active:cursor-grabbing appearance-none z-10"
                    style={{
                      height: "6px",
                      borderRadius: "4px",
                      outline: "none",
                      background: `linear-gradient(to right,
                        ${formData[q.field] >= 7 ? "#008012" : formData[q.field] >= 5 ? "#eab308" : "#ff0000"}
                        ${((formData[q.field] - 1) / 9) * 100}%,
                        ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} ${((formData[q.field] - 1) / 9) * 100}%)`,
                    }}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        [q.field]: parseInt(e.target.value),
                      }))
                    }
                  />
                  <div className="absolute w-full flex justify-between px-1 -z-10">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-[1px] h-1 ${isDark ? "bg-white/20" : "bg-black/20"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 4º - ANÁLISIS DE COMBATE */}
        <Section title="04. Análisis de Combate" isDark={isDark}>
          <div className="flex flex-col gap-4">
            <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold italic">
              ¿El combate es divertido?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                "Sí, muy divertido",
                "Bien, me gusta",
                "Regular",
                "No me gusta",
              ].map((opcion) => {
                const esNegativo = opcion === "No me gusta";
                const esRegular = opcion === "Regular";
                const colorActivo = esNegativo
                  ? "bg-[#ff0000] border-[#ff0000]"
                  : esRegular
                    ? "bg-[#eab308] border-[#eab308]"
                    : "bg-[#008012] border-[#008012]";

                return (
                  <button
                    key={opcion}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        combate_divertido: opcion,
                      }))
                    }
                    className={`px-2 py-3 text-[9px] font-black uppercase border transition-all duration-300 ${
                      formData.combate_divertido === opcion
                        ? `${colorActivo} text-white`
                        : isDark
                          ? "border-white/10 hover:border-white/30 text-white/50"
                          : "border-black/10 hover:border-black/30 text-black/50"
                    }`}
                  >
                    {opcion}
                  </button>
                );
              })}
            </div>
            <textarea
              value={formData.detalle_combate}
              className={`w-full bg-transparent border p-3 focus:border-[#008012] outline-none h-20 text-sm italic transition-colors ${
                isDark
                  ? "border-white/5 text-white"
                  : "border-black/10 text-black"
              }`}
              placeholder="Cuéntanos más sobre el combate (impactos, ritmo, sensaciones)..."
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  detalle_combate: e.target.value,
                }))
              }
            />
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold italic">
              ¿Dificultad adecuada a tus habilidades?
            </label>
            <div className="flex gap-2">
              {["Sí", "Regular", "No"].map((opcion) => {
                const esNo = opcion === "No";
                const esRegular = opcion === "Regular";
                const colorActivo = esNo
                  ? "bg-[#ff0000] border-[#ff0000]"
                  : esRegular
                    ? "bg-[#eab308] border-[#eab308]"
                    : "bg-[#008012] border-[#008012]";

                return (
                  <button
                    key={opcion}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        dificultad_adecuada: opcion,
                      }))
                    }
                    className={`flex-1 py-2 text-[10px] font-bold border transition-all duration-300 ${
                      formData.dificultad_adecuada === opcion
                        ? `${colorActivo} text-white`
                        : isDark
                          ? "border-white/10 opacity-40 hover:opacity-100"
                          : "border-black/10 opacity-40 hover:opacity-100"
                    }`}
                  >
                    {opcion}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold italic">
              ¿Buena cantidad de enemigos por escena?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "Si son los adecuados",
                "Si pero me falta unos pocos",
                "Esta bien",
                "No son pocos",
              ].map((opcion) => {
                const esNegativo = opcion === "No son pocos";
                const esAviso = opcion === "Si pero me falta unos pocos";
                const colorText = esNegativo
                  ? "text-[#ff0000]"
                  : esAviso
                    ? "text-[#eab308]"
                    : "text-[#008012]";
                const colorBorder = esNegativo
                  ? "border-[#ff0000]"
                  : esAviso
                    ? "border-[#eab308]"
                    : "border-[#008012]";
                const colorBg = esNegativo
                  ? "bg-[#ff0000]/5"
                  : esAviso
                    ? "bg-[#eab308]/5"
                    : "bg-[#008012]/5";

                return (
                  <button
                    key={opcion}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        cantidad_enemigos: opcion,
                      }))
                    }
                    className={`px-4 py-2 text-[10px] text-left border transition-all duration-300 ${
                      formData.cantidad_enemigos === opcion
                        ? `${colorBorder} ${colorText} ${colorBg}`
                        : isDark
                          ? "border-white/5 opacity-50 hover:border-white/20"
                          : "border-black/10 opacity-50 hover:border-black/20"
                    }`}
                  >
                    <span className="mr-2">
                      {formData.cantidad_enemigos === opcion ? "●" : "○"}
                    </span>
                    {opcion}
                  </button>
                );
              })}
            </div>
          </div>
        </Section>

        {/* 5º - ARTE Y SONIDO */}
        <Section title="05. Arte y Sonido" isDark={isDark}>
          {[
            {
              id: "estilo_visual",
              detalleKey: "detalle_estilo_visual",
              label: "¿Te gusta el estilo visual?",
              options: [
                "Si me gusta mucho",
                "Si",
                "Esta bien",
                "Regular",
                "Muy mejorable",
              ],
            },
            {
              id: "animaciones_claras",
              detalleKey: "detalle_animaciones_claras",
              label: "¿Las animaciones de Rodolfo y enemigos son claras?",
              options: [
                "Si animaciones muy claras",
                "Si",
                "Esta bien",
                "Regular",
                "Muy mejorable",
              ],
            },
            {
              id: "soundtrack_acorde",
              detalleKey: "detalle_soundtrack_acorde",
              label: "¿El soundtrack es acorde al juego?",
              options: [
                "Si me gusta mucho el soundtrack",
                "Si",
                "Esta bien",
                "Regular",
                "Muy mejorable",
              ],
            },
            {
              id: "feedback_shagamido",
              detalleKey: "detalle_feedback_shagamido",
              label: "¿El feedback sonoro del shagamido es adecuado?",
              options: [
                "Si es muy adecuado",
                "Si",
                "Esta bien",
                "Regular",
                "Muy mejorable",
              ],
            },
          ].map((q) => (
            <div key={q.id} className="flex flex-col gap-3 mb-6">
              <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold italic">
                {q.label}
              </label>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {q.options.map((opcion) => {
                  const esAmarillo = opcion === "Regular";
                  const esRojo = opcion === "Muy mejorable";
                  const colorActivo = esRojo
                    ? "bg-[#ff0000] border-[#ff0000]"
                    : esAmarillo
                      ? "bg-[#eab308] border-[#eab308]"
                      : "bg-[#008012] border-[#008012]";

                  return (
                    <button
                      key={opcion}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, [q.id]: opcion }))
                      }
                      className={`px-2 py-3 text-[9px] font-black uppercase border transition-all leading-tight h-full flex items-center justify-center text-center duration-300 ${
                        formData[q.id] === opcion
                          ? `${colorActivo} text-white`
                          : isDark
                            ? "border-white/10 hover:border-white/30 text-white/50"
                            : "border-black/10 hover:border-black/30 text-black/50"
                      }`}
                    >
                      {opcion}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {formData[q.id] === "Muy mejorable" && (
                  <Motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <textarea
                      value={formData[q.detalleKey] || ""}
                      className={`w-full bg-transparent border p-3 mt-2 outline-none h-20 text-xs italic transition-colors ${
                        isDark
                          ? "border-[#ff0000]/30 focus:border-[#ff0000] text-white"
                          : "border-[#ff0000]/20 focus:border-[#ff0000] text-black"
                      }`}
                      placeholder={`Cuéntanos qué mejorarías en ${q.label.toLowerCase()}...`}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          [q.detalleKey]: e.target.value,
                        }))
                      }
                    />
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Section>

        {/* 6º - REPORTE DE ERRORES Y RENDIMIENTO */}
        <Section title="06. Reporte de Errores y Rendimiento" isDark={isDark}>
          <div className="grid grid-cols-1 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold italic">
                  ¿Has encontrado algún bug?
                </label>
                <div className="flex gap-2 w-full md:w-auto">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, hay_bugs: true }))
                    }
                    className={`flex-1 md:px-6 py-2 text-[10px] font-black border transition-all duration-300 ${
                      formData.hay_bugs === true
                        ? "bg-[#ff0000] text-white border-[#ff0000]"
                        : isDark
                          ? "border-white/10 opacity-40 hover:opacity-100"
                          : "border-black/10 opacity-40 hover:opacity-100"
                    }`}
                  >
                    SÍ
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, hay_bugs: false }))
                    }
                    className={`flex-1 md:px-6 py-2 text-[10px] font-black border transition-all duration-300 ${
                      formData.hay_bugs === false
                        ? "bg-[#008012] text-white border-[#008012]"
                        : isDark
                          ? "border-white/10 opacity-40 hover:opacity-100"
                          : "border-black/10 opacity-40 hover:opacity-100"
                    }`}
                  >
                    NO
                  </button>
                </div>
              </div>
              <AnimatePresence>
                {formData.hay_bugs && (
                  <Motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <textarea
                      value={formData.descripcion_bugs}
                      className={`w-full bg-transparent border p-3 outline-none h-24 text-xs italic transition-colors ${
                        isDark
                          ? "border-[#ff0000]/30 focus:border-[#ff0000] text-white"
                          : "border-[#ff0000]/20 focus:border-[#ff0000] text-black"
                      }`}
                      placeholder="Describe qué pasó, dónde y cómo podemos reproducir el error..."
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          descripcion_bugs: e.target.value,
                        }))
                      }
                    />
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className={`flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-y gap-4 ${isDark ? "border-white/5" : "border-black/5"}`}
            >
              <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold italic">
                ¿FPS estables durante la sesión?
              </label>
              <div className="flex gap-2 w-full md:w-auto">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, fps_estables: true }))
                  }
                  className={`flex-1 md:px-6 py-2 text-[10px] font-black border transition-all duration-300 ${
                    formData.fps_estables === true
                      ? "bg-[#008012] text-white border-[#008012]"
                      : isDark
                        ? "border-white/10 opacity-40 hover:opacity-100"
                        : "border-black/10 opacity-40 hover:opacity-100"
                  }`}
                >
                  SÍ
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, fps_estables: false }))
                  }
                  className={`flex-1 md:px-6 py-2 text-[10px] font-black border transition-all duration-300 ${
                    formData.fps_estables === false
                      ? "bg-[#ff0000] text-white border-[#ff0000]"
                      : isDark
                        ? "border-white/10 opacity-40 hover:opacity-100"
                        : "border-black/10 opacity-40 hover:opacity-100"
                  }`}
                >
                  NO
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold italic">
                  ¿Algún crasheo o congelamiento?
                </label>
                <div className="flex gap-2 w-full md:w-auto">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, hay_crasheos: true }))
                    }
                    className={`flex-1 md:px-6 py-2 text-[10px] font-black border transition-all duration-300 ${
                      formData.hay_crasheos === true
                        ? "bg-[#ff0000] text-white border-[#ff0000]"
                        : isDark
                          ? "border-white/10 opacity-40 hover:opacity-100"
                          : "border-black/10 opacity-40 hover:opacity-100"
                    }`}
                  >
                    SÍ
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, hay_crasheos: false }))
                    }
                    className={`flex-1 md:px-6 py-2 text-[10px] font-black border transition-all duration-300 ${
                      formData.hay_crasheos === false
                        ? "bg-[#008012] text-white border-[#008012]"
                        : isDark
                          ? "border-white/10 opacity-40 hover:opacity-100"
                          : "border-black/10 opacity-40 hover:opacity-100"
                    }`}
                  >
                    NO
                  </button>
                </div>
              </div>
              <AnimatePresence>
                {formData.hay_crasheos && (
                  <Motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <textarea
                      value={formData.descripcion_crasheos}
                      className={`w-full bg-transparent border p-3 outline-none h-24 text-xs italic transition-colors ${
                        isDark
                          ? "border-[#ff0000]/30 focus:border-[#ff0000] text-white"
                          : "border-[#ff0000]/20 focus:border-[#ff0000] text-black"
                      }`}
                      placeholder="¿En qué momento se cerró el juego? (Carga, combate, menú...)"
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          descripcion_crasheos: e.target.value,
                        }))
                      }
                    />
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Section>

        {/* 7º - OPINIÓN EN GENERAL */}
        <Section title="07. Opinión en General" isDark={isDark}>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
              ¿Describe tu opinión del videojuego?
            </label>
            <textarea
              value={formData.opinion_general}
              className={`bg-transparent border p-4 focus:border-[#008012] outline-none h-32 text-sm resize-none transition-all duration-300 ${
                isDark
                  ? "border-white/10 text-white"
                  : "border-black/10 text-black"
              }`}
              placeholder="Cuéntanos tu experiencia general..."
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  opinion_general: e.target.value,
                }))
              }
            />
            <p className="text-[9px] opacity-30 italic text-right">
              Campo de texto libre
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
              ¿Ideas para mejorar?
            </label>
            <div className="relative">
              <textarea
                value={formData.ideas_mejora}
                className={`w-full border p-4 focus:border-[#008012] outline-none h-32 text-sm resize-none transition-all duration-300 ${
                  isDark
                    ? "bg-neutral-900/50 border-white/5 text-white"
                    : "bg-neutral-100 border-black/5 text-black"
                }`}
                placeholder="Mecánicas nuevas, cambios..."
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    ideas_mejora: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </Section>

        {/* 8º - EVALUACIÓN FINAL */}
        <Section title="08. Evaluación Final" isDark={isDark}>
          <div className="flex flex-col items-center gap-10 py-6">
            <div className="flex flex-col items-center gap-4 w-full">
              <label className="text-[11px] uppercase tracking-[0.3em] opacity-60 font-black italic text-center">
                ¿Qué nota le das al proyecto?
              </label>

              <div className="flex flex-wrap justify-center gap-2">
                {[...Array(10)].map((_, i) => {
                  const starValue = i + 1;
                  const isActive = formData.nota_final >= starValue;
                  return (
                    <button
                      key={starValue}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          nota_final: starValue,
                        }))
                      }
                      className="transition-all duration-200 transform hover:scale-125 active:scale-95"
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill={isActive ? "#008012" : "none"}
                        stroke={isActive ? "#008012" : "currentColor"}
                        className={`w-6 h-6 md:w-8 md:h-8 transition-all ${
                          isActive
                            ? "drop-shadow-[0_0_10px_rgba(0,128,18,0.8)]"
                            : "opacity-20 hover:opacity-50"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    </button>
                  );
                })}
              </div>
              <div className="text-5xl font-black italic font-mono text-[#008012] mt-2">
                {formData.nota_final}
                <span className="text-lg opacity-20 ml-1">/10</span>
              </div>
            </div>

            <div
              className={`flex flex-col items-center gap-4 w-full border-t pt-10 ${isDark ? "border-white/5" : "border-black/5"}`}
            >
              <label className="text-[11px] uppercase tracking-[0.3em] opacity-60 font-black italic">
                ¿Recomendarías el juego?
              </label>
              <div className="flex gap-4 w-full max-w-xs">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, recomendado: true }))
                  }
                  className={`flex-1 py-4 font-black italic border transition-all duration-300 ${
                    formData.recomendado === true
                      ? "bg-[#008012] text-white border-[#008012]"
                      : isDark
                        ? "border-white/10 opacity-30 hover:opacity-100"
                        : "border-black/10 opacity-30 hover:opacity-100"
                  }`}
                >
                  SÍ
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, recomendado: false }))
                  }
                  className={`flex-1 py-4 font-black italic border transition-all duration-300 ${
                    formData.recomendado === false
                      ? "bg-[#ff0000] text-white border-[#ff0000]"
                      : isDark
                        ? "border-white/10 opacity-30 hover:opacity-100"
                        : "border-black/10 opacity-30 hover:opacity-100"
                  }`}
                >
                  NO
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`group relative mt-10 w-full overflow-hidden border-2 py-6 transition-all duration-300 ${
                isDark
                  ? "border-[#008012] bg-transparent text-[#008012] hover:text-white"
                  : "border-[#008012] bg-transparent text-[#008012] hover:text-white"
              }`}
            >
              <div className="absolute inset-0 translate-y-full bg-[#008012] transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center justify-center gap-4 font-black uppercase italic tracking-[0.5em]">
                Enviar Feedback
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-current" />
              <div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-current" />
            </button>
          </div>
        </Section>
      </form>
    </Motion.div>
  );
};

export default FormularioFeedback;
