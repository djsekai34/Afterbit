import { motion as Motion } from "framer-motion";

// ASSETS
import ImgMovimiento from "../Imagenes/Rodolfo anda_final.gif";
import ImgSalto from "../Imagenes/Rodolfo Salta.gif";
import shagamido1 from "../Imagenes/shagamido1.png";
import shagamido2 from "../Imagenes/shagamido2.png";
import shagamido3 from "../Imagenes/shagamido3.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Mecanicas = ({ isDark, currentTextColor }) => {
  const accentGreen = "#008012";
  const imagenesShagami = [shagamido1, shagamido2, shagamido3];

  return (
    <Motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`min-h-screen pt-32 pb-20 px-4 md:px-12 lg:px-24 transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* --- CABECERA --- */}
      <Motion.header
        variants={itemVariants}
        className="max-w-6xl mx-auto border-b-8 pb-8 mb-20"
        style={{ borderColor: currentTextColor }}
      >
        <span className="font-mono text-xs font-bold opacity-60 tracking-[0.4em] block mb-4 uppercase">
          // Documentación_Fase_04
        </span>
        <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">
          MECÁNICAS{" "}
          <span style={{ color: accentGreen }}>Y EXPERIENCIAS DE JUEGO</span>
        </h1>
      </Motion.header>

      <div className="max-w-6xl mx-auto space-y-40">
        {/* --- 01. MECÁNICAS SISTÉMICAS --- */}
        <Motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl font-black italic uppercase tracking-widest">
            01. <span style={{ color: accentGreen }}>Mecánicas Sistémicas</span>
          </h2>
          <div
            className={`h-px flex-1 ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`}
          ></div>
        </Motion.div>

        <div className="space-y-40">
          {/* MOVIMIENTO */}
          <Motion.section
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-12 items-center justify-between"
          >
            <div className="space-y-6 max-w-xl">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-center md:text-right">
                <span style={{ color: accentGreen }}>Movimiento</span>
              </h2>
              <p
                className={`text-lg leading-relaxed text-center md:text-right ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
              >
                Control de desplazamiento fluido con respuesta instantánea. La
                velocidad base de exploración se transforma en una carrera
                táctica al mantener pulsada la tecla{" "}
                <span
                  className={`font-mono font-bold ${isDark ? "text-white" : "text-black"}`}
                >
                  [SHIFT]
                </span>
                , permitiendo a Rodolfo cruzar el Reino con una agilidad
                superior.
              </p>
            </div>
            <div
              className={`w-72 h-72 border-2 overflow-hidden rounded-sm flex-shrink-0 flex items-center justify-center transition-all duration-300
    ${isDark ? "bg-zinc-900 border-[#008012]/30" : "bg-zinc-100 border-[#008012]/30"}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderWidth = "6px";
                e.currentTarget.style.borderImage =
                  "linear-gradient(to right, #002654 33%, #FFFFFF 33%, #FFFFFF 66%, #ED2939 66%) 1";

                if (isDark) {
                  e.currentTarget.style.boxShadow =
                    "-10px 0 20px -10px rgba(0,38,84,0.8), 10px 0 20px -10px rgba(237,41,57,0.8)";
                } else {
                  e.currentTarget.style.boxShadow =
                    "0 0 0 1px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.1)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderWidth = "2px";
                e.currentTarget.style.borderImage = "none";
                e.currentTarget.style.borderColor = "#0080124d";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={ImgMovimiento}
                alt="Movimiento"
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </Motion.section>

          {/* SALTO */}
          <Motion.section
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-12 items-center justify-between"
          >
            <div
              className={`order-last md:order-first w-72 h-72 border-2 overflow-hidden rounded-sm flex-shrink-0 flex items-center justify-center transition-all duration-300
    ${isDark ? "bg-zinc-900 border-[#008012]/30" : "bg-zinc-100 border-[#008012]/30"}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderWidth = "6px";
                e.currentTarget.style.borderImage =
                  "linear-gradient(to right, #002654 33%, #FFFFFF 33%, #FFFFFF 66%, #ED2939 66%) 1";

                if (isDark) {
                  e.currentTarget.style.boxShadow =
                    "-10px 0 20px -10px rgba(0,38,84,0.8), 10px 0 20px -10px rgba(237,41,57,0.8)";
                } else {
                  e.currentTarget.style.boxShadow =
                    "0 0 0 1px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.1)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderWidth = "2px";
                e.currentTarget.style.borderImage = "none";
                e.currentTarget.style.borderColor = "#0080124d";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={ImgSalto}
                alt="Salto"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <div className="space-y-6 max-w-xl">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-center md:text-left">
                <span style={{ color: accentGreen }}>Salto</span>
              </h2>
              <p
                className={`text-lg leading-relaxed text-center md:text-left ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
              >
                Sistema de salto dinámico: vertical en reposo y parabólico en
                carrera. La fuerza del impulso se puede potenciar mediante la
                tecla{" "}
                <span
                  className={`font-mono font-bold ${isDark ? "text-white" : "text-black"}`}
                >
                  [SHIFT]
                </span>
                , permitiendo a Rodolfo superar obstáculos de gran envergadura y
                ajustar su trayectoria en el aire.
              </p>
            </div>
          </Motion.section>

          {/* SHAGAMI-DŌ */}
          <Motion.section
            variants={itemVariants}
            className="space-y-12 w-full block"
          >
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
                EL ARTE DEL{" "}
                <span style={{ color: accentGreen }}>SHAGAMI-DŌ</span>
              </h2>
              <p
                className={`text-lg leading-relaxed max-w-2xl mx-auto ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
              >
                Técnica milenaria perfeccionada por el propio Rodolfo,
                convertida en su sello de identidad. Al ejecutar el comando{" "}
                <span
                  className={`font-mono font-bold ${isDark ? "text-white" : "text-black"}`}
                >
                  [Q]
                </span>
                , se desata una secuencia de tres estados críticos que definen
                el arte del combate y la supervivencia en el Santo Reino.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 w-full">
              {imagenesShagami.map((img, index) => (
                <div
                  key={`shagami-${index}`}
                  className="flex flex-col items-center space-y-4"
                >
                  <div
                    className="w-64 h-64 border-2 overflow-hidden rounded-sm bg-white flex items-center justify-center transition-all duration-300"
                    style={{ borderColor: "#00801280" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderWidth = "6px";
                      e.currentTarget.style.borderImage =
                        "linear-gradient(to right, #002654 33%, #ffffff 33%, #ffffff 66%, #ed2939 66%) 1";

                      if (!isDark) {
                        e.currentTarget.style.boxShadow =
                          "0 0 0 1px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05)";
                      } else {
                        e.currentTarget.style.boxShadow =
                          "-10px 0 20px -10px rgba(0,38,84,0.8), 10px 0 20px -10px rgba(237,41,57,0.8)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderWidth = "2px";
                      e.currentTarget.style.borderImage = "none";
                      e.currentTarget.style.borderColor = "#00801280";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <img
                      src={img}
                      alt={`Shagami-do fase ${index + 1}`}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      style={{ imageRendering: "pixelated" }}
                    />
                  </div>
                  <div
                    className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-center"
                    style={{ color: accentGreen }}
                  >
                    // SHAGAMI-DŌ_STATE_0{index + 1}
                  </div>
                </div>
              ))}
            </div>
          </Motion.section>
        </div>

        {/* --- 02. ACCIONES DEL JUGADOR --- */}
        <Motion.section variants={itemVariants} className="space-y-12">
          <div className="flex items-center gap-4">
            <div
              className={`h-px flex-1 ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`}
            ></div>
            <h2 className="text-3xl font-black italic uppercase tracking-widest text-center md:text-right">
              02.{" "}
              <span style={{ color: accentGreen }}>Acciones del Jugador</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { label: "Movimiento", key: "A D / ← →", desc: "Desplazamiento" },
              { label: "Salto", key: "ESPACIO", desc: "Eje Vertical" },
              { label: "Correr", key: "SHIFT", desc: "Aceleración" },
              { label: "Shagami-dō", key: "Q", desc: "Habilidad" },
              { label: "Menú", key: "ESC", desc: "Sistema" },
            ].map((accion, i) => (
              <div
                key={i}
                className={`relative p-6 border-2 ${isDark ? "border-zinc-800 bg-zinc-900/40" : "border-zinc-200 bg-white"} rounded-xl flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300 hover:border-[#008012] group cursor-default`}
              >
                <span className="absolute top-2 font-mono text-[9px] opacity-40 tracking-[0.2em] uppercase">
                  {accion.desc}
                </span>
                <div
                  className={`mt-2 mb-3 px-3 py-1 rounded border-b-4 transition-all duration-300 ${isDark ? "bg-zinc-800 border-zinc-950 text-white group-hover:bg-[#008012] group-hover:border-green-900" : "bg-zinc-100 border-zinc-300 text-black group-hover:bg-[#008012] group-hover:text-white group-hover:border-green-800"} font-bold text-sm tracking-tighter`}
                >
                  {accion.key}
                </div>
                <span className="font-black text-xs uppercase tracking-widest italic transition-colors duration-300 group-hover:text-[#008012]">
                  {accion.label}
                </span>
              </div>
            ))}
          </div>
        </Motion.section>

        {/* --- 03. REGLAS DEL MUNDO --- */}
        <Motion.section variants={itemVariants} className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black italic uppercase tracking-widest">
              03. <span style={{ color: accentGreen }}>Reglas del Mundo</span>
            </h2>
            <div
              className={`h-px flex-1 ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`}
            ></div>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border ${isDark ? "border-zinc-800 bg-zinc-800" : "border-zinc-200 bg-zinc-200"}`}
          >
            {[
              {
                t: "Gravedad Adaptativa",
                d: "Al alcanzar el cénit del salto, la fricción atmosférica se densifica, otorgando a Rodolfo un descenso lento y controlado para dominar los cielos del Reino.",
              },
              {
                t: "Shagami-Infinito",
                d: "Protocolo de anulación de inercia: la técnica puede ejecutarse en suspensión para congelar la caída o desde tierra firme. Durante la carga, Rodolfo entra en estado de 'Vulnerabilidad Cero', otorgando inmunidad total ante cualquier impacto.",
              },
              {
                t: "Protocolo de Combate",
                d: "Intercambio de daño basado en colisiones; aquí no hay azar, solo el dominio absoluto del espacio determina quién sobrevive al choque de ataques.",
              },
              {
                t: "Sistema de Recolección",
                d: "Interacción activa con el entorno para extraer recursos vitales u objetos de poder necesarios para abrirse paso y trascender al siguiente nivel.",
              },
              {
                t: "Extracción del Orbe",
                d: "Al portar 'La Bola', el jugador debe estabilizar su esencia en el punto de extracción durante 5.0s. Solo el que resiste la presión completa el nodo.",
              },
            ].map((regla, i) => (
              <div
                key={i}
                className={`p-8 ${isDark ? "bg-black hover:bg-zinc-950" : "bg-white hover:bg-zinc-50"} transition-all duration-300 group`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-[#008012]"></div>
                  <div
                    className="font-bold uppercase font-mono text-xs tracking-tighter"
                    style={{ color: accentGreen }}
                  >
                    SYS_REG_{i + 1}
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-500"} italic`}
                >
                  {regla.d}
                </p>
              </div>
            ))}
            <div
              className={`p-8 ${isDark ? "bg-zinc-900/20" : "bg-zinc-100/50"} flex items-center justify-center`}
            >
              <span className="font-mono text-[10px] opacity-20 uppercase tracking-[0.4em]">
                Awaiting_Rules...
              </span>
            </div>
          </div>
        </Motion.section>

        {/* --- 04. RECOMPENSAS Y PENALIZACIÓN --- */}
        <Motion.section
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic uppercase tracking-widest">
              04. <span style={{ color: accentGreen }}>Recompensas</span>
            </h2>
            <div
              className={`p-6 border-l-4 border-green-600 ${isDark ? "bg-zinc-900/50" : "bg-zinc-50"}`}
            >
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex gap-3">
                  <span className="text-green-500">✔</span>
                  <span>
                    Vínculo Celestial: Al reunirnos con nuestros amigos en el
                    cielo, estos nos otorgan una vida extra, transfiriendo su
                    fuerza a Rodolfo para continuar el camino.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">✔</span>
                  <span>
                    Legado Sagrado: Recolección de las 7 Esferas para el ritual
                    de resurrección de los caídos (End-Game).
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic uppercase tracking-widest text-right">
              <span className="text-red-600">Penalización</span> .05
            </h2>
            <div
              className={`p-6 border-r-4 border-red-600 ${isDark ? "bg-zinc-900/50" : "bg-zinc-50"} text-right`}
            >
              <p className="text-sm italic leading-relaxed">
                El fracaso en el Santo Reino conlleva el{" "}
                <span className="text-red-600 font-bold uppercase">
                  Colapso del Ciclo
                </span>
                . Si la vida de Rodolfo llega a cero, se produce un reinicio
                absoluto del nivel actual, invalidando cualquier progreso en el
                nivel y obligando a una recalibración total de la estrategia.
              </p>
            </div>
          </div>
        </Motion.section>

        {/* --- 05. EXPERIENCIA DEL JUGADOR --- */}
        <Motion.section
          variants={itemVariants}
          className="pt-10 pb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
            <span className="text-[20vw] font-black italic select-none uppercase">
              Rodolfo
            </span>
          </div>
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="inline-block px-3 py-1 border border-zinc-500 rounded-full font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] opacity-50 max-w-[90vw] truncate md:max-w-none">
              // Final_User_Experience_Report_v1.0
            </div>
            <div className="space-y-2">
              <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]">
                MÁXIMA <span style={{ color: accentGreen }}>PRECISIÓN</span>{" "}
                <br />
                <span className="opacity-20">FLUJO CONSTANTE</span>
              </h2>
            </div>
            <div
              className={`relative p-6 md:p-10 border ${isDark ? "border-zinc-800 bg-zinc-900/40" : "border-zinc-200 bg-zinc-50/50"} rounded-3xl backdrop-blur-sm`}
            >
              <div
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2"
                style={{ borderColor: accentGreen }}
              ></div>
              <div
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2"
                style={{ borderColor: accentGreen }}
              ></div>
              <p
                className={`text-lg md:text-2xl font-light italic leading-relaxed ${isDark ? "text-zinc-300" : "text-zinc-700"}`}
              >
                "El objetivo es que el jugador alcance un estado de{" "}
                <span className="font-bold underline decoration-[#008012]">
                  flow
                </span>{" "}
                donde la pulsación de teclas sea una extensión del pensamiento.
                Rodolfo no solo se mueve, se desliza por un mundo donde{" "}
                <span className="font-bold text-white"> cada píxel cuenta</span>
                , generando una fluidez orgánica que elimina la frustración y
                permite disfrutar la maestría del control de principio a fin."
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
              {[
                {
                  t: "Inmersión",
                  d: "Sincronía total entre el input y el movimiento pixel-perfect.",
                },
                {
                  t: "Desafío",
                  d: "Curva de aprendizaje basada puramente en la habilidad del usuario.",
                },
                {
                  t: "Catarsis",
                  d: "Satisfacción táctica al dominar el Shagami-dō en situaciones críticas.",
                },
              ].map((pilar, i) => (
                <div key={i} className="space-y-2 group">
                  <div
                    className="font-mono text-sm font-black uppercase tracking-[0.2em]"
                    style={{ color: accentGreen }}
                  >
                    {pilar.t}
                  </div>
                  <p
                    className={`text-xs md:text-sm font-medium italic leading-relaxed border-l-2 pl-4 transition-opacity duration-300
        ${isDark ? "text-zinc-400 opacity-80" : "text-zinc-600 opacity-90"}`}
                    style={{ borderColor: `${accentGreen}40` }}
                  >
                    {pilar.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Motion.section>
      </div>
    </Motion.div>
  );
};

export default Mecanicas;
