import { motion as Motion } from "framer-motion";

// ASSETS
import ImgMovimiento from "../Imagenes/Rodolfo anda_final.gif";
import ImgSalto from "../Imagenes/Rodolfo Salta.gif";
import shagamido1 from "../Imagenes/shagamido1.png";
import shagamido2 from "../Imagenes/shagamido2.png";
import shagamido3 from "../Imagenes/shagamido3.png";

// ANIMATION CONFIG
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

/**
 * COMPONENTE: FichaMecanica
 * Estructura base para cada mecánica del GDD.
 * Incluye efecto hover tricolor (Bandera Francia) y soporte dinámico Dark/Light.
 */
const FichaMecanica = ({
  titulo,
  categoria,
  datos,
  isDark,
  accentGreen,
  children,
}) => (
  <div
    className={`
    relative group mb-16 border-2 p-6 md:p-10 rounded-sm transition-all duration-300
    ${isDark ? "border-zinc-800 bg-zinc-900/20" : "border-zinc-300 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]"}
    hover:border-transparent
  `}
  >
    {/* EFECTO VISUAL: Borde Tricolor en Hover */}
    <div
      className={`
      absolute -inset-[2px] rounded-sm opacity-0 group-hover:opacity-100 
      transition-opacity duration-300 pointer-events-none
    `}
      style={{
        background:
          "linear-gradient(to right, #002395 33.3%, #ffffff 33.3%, #ffffff 66.6%, #ed2939 66.6%)",
        padding: "2px",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    />

    <div className="flex justify-between items-start mb-8 border-b pb-4 border-zinc-500/20">
      <div>
        <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 block mb-1">
          Mecánica Core:
        </span>
        <h3
          className="text-2xl md:text-3xl font-black italic uppercase"
          style={{ color: accentGreen }}
        >
          {titulo}
        </h3>
      </div>
      <div className="text-right hidden sm:block">
        <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 block mb-1">
          Categoría:
        </span>
        <span
          className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${isDark ? "bg-white text-black" : "bg-black text-white"}`}
        >
          {categoria}
        </span>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Visual Display: Área de Sprites/GIFs */}
      <div
        className={`flex flex-col items-center justify-center rounded-lg p-4 italic ${isDark ? "bg-black/20" : "bg-zinc-50 border border-zinc-100"}`}
      >
        {children}
      </div>

      {/* Technical Data: Grid de información técnica */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-left">
        {Object.entries(datos)
          .filter(([key]) => key !== "flujo")
          .map(([campo, descripcion]) => (
            <div key={campo} className="border-b border-zinc-500/10 pb-2">
              <span
                className="font-mono text-[9px] font-bold uppercase block mb-1 opacity-40"
                style={{ color: accentGreen }}
              >
                {campo}
              </span>
              <p
                className={`text-xs md:text-sm leading-snug ${isDark ? "text-zinc-300" : "text-zinc-700"}`}
              >
                {descripcion}
              </p>
            </div>
          ))}
      </div>
    </div>

    {/* Logic Diagram: Pseudocódigo o flujo de la mecánica */}
    {datos.flujo && (
      <div
        className={`mt-10 p-4 font-mono text-[11px] border ${isDark ? "bg-black/40 border-zinc-800" : "bg-white border-zinc-200 shadow-inner"}`}
      >
        <span className="text-red-500 font-bold block mb-2 underline decoration-red-500/30 tracking-tighter">
          📝 DIAGRAMA DE LÓGICA (PSEUDOCÓDIGO):
        </span>
        <div className="opacity-70 space-y-1 whitespace-pre-line leading-relaxed italic">
          {datos.flujo}
        </div>
      </div>
    )}
  </div>
);

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
      {/* SECTION: CABECERA PRINCIPAL */}
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
        {/* SECTION 01: MECÁNICAS SISTÉMICAS (Locomoción y Habilidades) */}
        <div className="space-y-4">
          <div className="space-y-4">
            <Motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-12"
            >
              <h2 className="text-3xl font-black italic uppercase tracking-widest">
                01.{" "}
                <span style={{ color: accentGreen }}>Mecánicas Sistémicas</span>
              </h2>

              <div
                className={`h-px flex-1 ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`}
              />
            </Motion.div>
          </div>

          <Motion.section variants={itemVariants}>
            <FichaMecanica
              titulo="Movimiento horizontal"
              categoria="Locomoción Principal"
              isDark={isDark}
              accentGreen={accentGreen}
              datos={{
                Definición:
                  "Control de desplazamiento lateral con inercia controlada.",
                Acción: "[A] [D] o [←] [→] (Pulsación mantenida).",
                Lógica:
                  "Caminata progresiva hasta Max (6.5 units/s). El correr aumenta su velocidad maximo a (8 units/s).",
                "Reglas y Límites":
                  "Velocidad aumentada cuando pulsas Shift (carrera).",
                "Feedback Visual":
                  "Visualizacion los diferentes sprites de caminata.",
                "Feedback Sonoro": "No existe.",
              }}
            >
              <img
                src={ImgMovimiento}
                alt="Movimiento"
                className="w-64 h-64 object-contain pixelated"
              />
            </FichaMecanica>
          </Motion.section>

          <Motion.section variants={itemVariants}>
            <FichaMecanica
              titulo="Salto Vertical"
              categoria="Locomoción Vertical"
              isDark={isDark}
              accentGreen={accentGreen}
              datos={{
                Definición:
                  "Impulso instantáneo en el eje Y con gravedad adaptativa.",
                Acción: "[ESPACIO] (Pulsación única).",
                Lógica:
                  "Impulso ascendente + herencia de inercia lateral. Gravedad aumentada en el descenso.",
                "Reglas y Límites":
                  "Se permite salto infinito. Con el Shift este salto aumenta su altura.",
                "Feedback Visual":
                  "Visualizacion los diferentes sprites de salto.",
                "Feedback Sonoro": "No existe.",
              }}
            >
              <img
                src={ImgSalto}
                alt="Salto"
                className="w-64 h-64 object-contain pixelated"
              />
            </FichaMecanica>
          </Motion.section>

          {/* CRÍTICO: Galería masiva El Arte del Shagami-Dō */}
          <Motion.section variants={itemVariants}>
            <FichaMecanica
              titulo="El Arte del Shagami-Dō"
              categoria="Habilidad Especial."
              isDark={isDark}
              accentGreen={accentGreen}
              datos={{
                Definición: "Ataque legendario de Rodolfo.",
                Acción: "[Q] (Ejecución instantánea).",
                Lógica: "Activa la animacion de la habilidad.",
                "Reglas y Límites":
                  "Rodolfo es inmortal, puede quedarse suspendido en el aire para realizarlo y es inmortal.",
                "Feedback Visual":
                  "Visualización de los diferentes sprites de la habilidad mas salida de la bola que hara daño.",
                "Feedback Sonoro": "Audio 'FAHHHHH'.",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full min-h-[450px]">
                {/* Imagen 01 - Escala Principal */}
                <div className="relative flex items-center justify-center bg-white rounded-xl overflow-hidden border-2 border-zinc-200 shadow-sm">
                  <img
                    src={imagenesShagami[0]}
                    alt="Shagami-do_01"
                    className="w-full h-full object-contain pixelated transform scale-[1.5] transition-transform hover:scale-[1.7]"
                    style={{ imageRendering: "pixelated" }}
                  />
                  <div
                    className="absolute bottom-2 right-2 font-mono text-[10px] font-black uppercase tracking-wider"
                    style={{ color: accentGreen }}
                  >
                    Shagami-do_01
                  </div>
                </div>

                <div className="grid grid-rows-2 gap-4">
                  {/* Imagen 02 - Escala Secundaria */}
                  <div className="relative flex items-center justify-center bg-white rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
                    <img
                      src={imagenesShagami[1]}
                      alt="Shagami-do_02"
                      className="w-full h-full max-h-[200px] object-contain pixelated transform scale-125 transition-transform hover:scale-150"
                      style={{ imageRendering: "pixelated" }}
                    />
                    <div
                      className="absolute bottom-2 right-2 font-mono text-[10px] font-black uppercase tracking-wider"
                      style={{ color: accentGreen }}
                    >
                      Shagami-do_02
                    </div>
                  </div>
                  {/* Imagen 03 - Escala Reducida */}
                  <div className="relative flex items-center justify-center bg-white rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
                    <img
                      src={imagenesShagami[2]}
                      alt="Shagami-do_03"
                      className="w-full h-full max-h-[200px] object-contain pixelated transform scale-110 transition-transform hover:scale-125"
                      style={{ imageRendering: "pixelated" }}
                    />
                    <div
                      className="absolute bottom-2 right-2 font-mono text-[10px] font-black uppercase tracking-wider"
                      style={{ color: accentGreen }}
                    >
                      Shagami-do_03
                    </div>
                  </div>
                </div>
              </div>
            </FichaMecanica>
          </Motion.section>
        </div>

        {/* SECTION 02: INPUT MAPPING (Acciones del Jugador) */}
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

        {/* SECTION 03: WORLD RULES (Lógica de juego) */}
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

        {/* SECTION 04: ECONOMY & RISK (Recompensas / Penalización) */}
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
                    cielo, estos nos otorgan una vida extra.
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
            <h2 className="text-3xl font-black italic uppercase tracking-widest text-left md:text-right">
              <span className="inline md:hidden">05. </span>
              <span className="text-red-600">Penalización</span>
              <span className="hidden md:inline"> .05</span>
            </h2>
            <div
              className={`p-6 border-r-4 border-red-600 ${isDark ? "bg-zinc-900/50" : "bg-zinc-50"} text-right`}
            >
              <p className="text-sm italic leading-relaxed">
                El fracaso en el Santo Reino conlleva el{" "}
                <span className="text-red-600 font-bold uppercase">
                  Colapso del Ciclo
                </span>
                . Si la vida llega a cero, se produce un reinicio absoluto del
                nivel actual.
              </p>
            </div>
          </div>
        </Motion.section>

        {/* SECTION 05: UX (Sensación de juego y Pilares) */}
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
            <div className="inline-block px-3 py-1 border border-zinc-500 rounded-full font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] opacity-50 truncate">
              // Final_User_Experience_Report_v1.0
            </div>
            <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]">
              MÁXIMA <span style={{ color: accentGreen }}>PRECISIÓN</span>{" "}
              <br />
              <span className="opacity-20">FLUJO CONSTANTE</span>
            </h2>
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
                    className={`text-xs md:text-sm font-medium italic leading-relaxed border-l-2 pl-4 transition-opacity duration-300 ${isDark ? "text-zinc-400 opacity-80" : "text-zinc-600 opacity-90"}`}
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
