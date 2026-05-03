import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);
const PASSWORD = import.meta.env.VITE_DASHBOARD_PASSWORD;

{/* Funciones auxiliares para cálculos estadísticos y componentes de UI reutilizables. */}
const GREEN = "#008012";
const RED = "#ff0000";
const YELLOW = "#eab308";
const CYAN = "#06b6d4";
const PALETTE = [
  GREEN,
  CYAN,
  YELLOW,
  "#a855f7",
  "#f97316",
  "#ec4899",
  "#14b8a6",
  RED,
];

const avg = (arr, key) =>
  arr.length
    ? (arr.reduce((s, r) => s + (r[key] || 0), 0) / arr.length).toFixed(1)
    : "—";
const pct = (arr, fn) =>
  arr.length ? Math.round((arr.filter(fn).length / arr.length) * 100) : 0;
const count = (arr, key, val) => arr.filter((r) => r[key] === val).length;
const freq = (arr, key) => {
  const map = {};
  arr.forEach((r) => {
    if (r[key]) map[r[key]] = (map[r[key]] || 0) + 1;
  });
  return Object.entries(map)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
};

{/* Componentes reutilizables para el diseño del dashboard */}
const Card = ({ children, className = "", isDark = true }) => (
  <div
    className={`border rounded-sm p-5 transition-colors duration-500 ${isDark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-black/[0.02]"} ${className}`}
  >
    {children}
  </div>
);

const StatBig = ({ label, value, color = GREEN, sub, isDark = true }) => (
  <div className="flex flex-col gap-1">
    <span
      className={`text-[9px] uppercase tracking-[0.25em] font-bold ${isDark ? "text-white/40" : "text-black/40"}`}
    >
      {label}
    </span>
    <span className="text-4xl font-black italic font-mono" style={{ color }}>
      {value}
    </span>
    {sub && (
      <span
        className={`text-[10px] ${isDark ? "text-white/30" : "text-black/30"}`}
      >
        {sub}
      </span>
    )}
  </div>
);

const SectionTitle = ({ n, title, isDark = true }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="text-[10px] font-black text-[#008012] border border-[#008012]/40 px-2 py-0.5">
      {n}
    </span>
    <h2
      className={`text-sm font-black uppercase tracking-widest ${isDark ? "text-white/70" : "text-black/70"}`}
    >
      {title}
    </h2>
    <div className={`flex-1 h-px ${isDark ? "bg-white/5" : "bg-black/5"}`} />
  </div>
);
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const val = payload[0].value;
  if (!val) return null;
  const name = payload[0].payload?.name || payload[0].name;
  if (!name) return null;
  return (
    <div
      style={{
        background: "#171717",
        border: "1px solid rgba(255,255,255,0.1)",
        padding: "8px 12px",
        fontFamily: "monospace",
        fontSize: 12,
        color: "white",
        pointerEvents: "none",
      }}
    >
      <p style={{ fontWeight: 900, marginBottom: 2 }}>{name}</p>
      <p style={{ color: payload[0].fill || payload[0].color || GREEN }}>
        {val} {val === 1 ? "respuesta" : "respuestas"}
      </p>
    </div>
  );
};

const PctBar = ({ label, value, color = GREEN, isDark = true }) => (
  <div className="flex flex-col gap-1">
    <div
      className={`flex justify-between text-[10px] font-bold uppercase tracking-wider ${isDark ? "text-white/50" : "text-black/50"}`}
    >
      <span>{label}</span>
      <span style={{ color }}>{value}%</span>
    </div>
    <div
      className={`h-1.5 w-full rounded-full overflow-hidden ${isDark ? "bg-white/5" : "bg-black/5"}`}
    >
      <Motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: color }}
      />
    </div>
  </div>
);

 {/*Seccion de loguearse */}
const Login = ({ onLogin, isDark = true }) => {
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (pass === PASSWORD) {
        onLogin();
      } else {
        setError(true);
        setPass("");
        setLoading(false);
      }
    }, 600);
  };

  const theme = {
    bg: isDark ? "bg-black" : "bg-white",
    card: isDark ? "bg-black border-white/10" : "bg-white border-black/10",
    text: isDark ? "text-white" : "text-black",
    shadow: isDark
      ? "shadow-[0_0_40px_-15px_rgba(0,128,18,0.3)]"
      : "shadow-[10px_10px_0px_0px_rgba(0,128,18,0.1)]",
  };

  return (
    <div
      className={`h-screen w-full flex items-center justify-center px-6 font-mono relative overflow-hidden transition-colors duration-500 ${theme.bg}`}
    >
      {isDark && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#008012]/5 blur-[120px] pointer-events-none" />
      )}

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-sm"
      >
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#008012] z-20" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#008012] z-20" />

        <div
          className={`relative border-2 ${theme.card} ${theme.shadow} p-10 backdrop-blur-md transition-all duration-500`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-6 bg-[#008012]" />
              <span className="text-[9px] text-[#008012] uppercase tracking-[0.5em] font-black">
                Secure Access
              </span>
              <span className="h-[1px] w-6 bg-[#008012]" />
            </div>

            <h1
              className={`text-4xl font-black italic uppercase tracking-tighter mb-2 ${theme.text}`}
            >
              Log<span className="text-[#008012]">in</span>
            </h1>
            <p
              className={`text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 ${theme.text}`}
            >
              Super Rodolfo data test results
            </p>
          </div>
          {/* Formulario de acceso */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label
                className={`text-[10px] uppercase tracking-widest font-black opacity-50 ${theme.text}`}
              >
                Terminal_Key:
              </label>

              <div className="relative group">
                <input
                  type={show ? "text" : "password"}
                  value={pass}
                  autoFocus
                  onChange={(e) => {
                    setPass(e.target.value);
                    setError(false);
                  }}
                  className={`bg-transparent border-b-2 p-2 outline-none text-base transition-all w-full font-bold
                    ${error ? "border-red-600" : isDark ? "border-white/10 text-white focus:border-[#008012]" : "border-black/10 text-black focus:border-[#008012]"}`}
                  placeholder="••••••••"
                />

                {/* Botón para mostrar/ocultar contraseña con icono de ojo*/}
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className={`absolute right-3 top-3 opacity-30 hover:opacity-100 transition-all duration-300 transform hover:scale-110 ${theme.text}`}
                  title={show ? "Ocultar" : "Mostrar"}
                >
                  {show ? (
                    /* Icono Ojo Abierto */
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    /* Icono Ojo Cerrado (con tachado) */
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                      <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                      <line x1="2" y1="2" x2="22" y2="22" />
                    </svg>
                  )}
                </button>
              </div>
              {/* Mensaje de error animado que aparece solo cuando la contraseña es incorrecta */}
              <AnimatePresence>
                {error && (
                  <Motion.p
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-600 text-[9px] font-black uppercase tracking-tighter mt-1"
                  >
                    × Acceso denegado: Contraseña incorrecta
                  </Motion.p>
                )}
              </AnimatePresence>
            </div>
            {/* Botón para acceder al formulario */}
            <button
              type="submit"
              disabled={loading}
              className="relative w-full group overflow-hidden"
            >
              <div
                className={`
                  relative py-4 px-6 border-2 transition-all duration-300 flex items-center justify-center gap-4
                  ${
                    isDark
                      ? "border-[#008012] bg-transparent group-hover:bg-[#008012]/10"
                      : "border-[#008012] bg-transparent group-hover:bg-[#008012]/10"
                  }
                `}
                >
                <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[#008012] opacity-0 group-hover:opacity-100 transition-all" />
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[#008012] opacity-0 group-hover:opacity-100 transition-all" />

                <span
                  className={`
                    relative z-10 font-black italic uppercase tracking-[0.4em] text-xs transition-colors
                    ${isDark ? "text-[#008012]" : "text-[#008012] group-hover:text-[#008012]"}
                  `}
                  >
                  {loading ? "Cargando informe..." : "Autorizar ver informe"}
                </span>

                {!loading && (
                  <span
                    className={`text-lg transition-transform duration-300 group-hover:translate-x-2 ${isDark ? "text-[#008012]" : "text-[#008012]"}`}
                  >
                    //
                  </span>
                )}

                {loading && (
                  <Motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-[#008012]/20 w-1/3 skew-x-12"
                  />
                )}
              </div>
              <div
                className={`absolute top-0 right-0 w-12 h-[2px] ${isDark ? "bg-[#008012]" : "bg-black"} opacity-30`}
              />
              <div
                className={`absolute bottom-0 left-0 w-12 h-[2px] ${isDark ? "bg-[#008012]" : "bg-black"} opacity-30`}
              />
            </button>
          </form>
        </div>
      </Motion.div>
    </div>
  );
};

{/* El componente principal del dashboard que muestra las estadísticas y gráficos. */}
const Dashboard = ({ onLogout, isDark = true }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("feedback_juego")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data: rows, error }) => {
        if (!error) setData(rows || []);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div
        className={`min-h-screen flex items-center justify-center font-mono text-[#008012] text-sm uppercase tracking-widest animate-pulse transition-colors duration-500 ${isDark ? "bg-black" : "bg-white"}`}
      >
        Cargando datos...
      </div>
    );

  const n = data.length;

  const radarData = [
    { subject: "Controles", value: parseFloat(avg(data, "puntos_controles")) },
    { subject: "Fluidez", value: parseFloat(avg(data, "puntos_fluidez")) },
    {
      subject: "Ataque",
      value: parseFloat(avg(data, "puntos_ataque_rodolfo")),
    },
    { subject: "Timing", value: parseFloat(avg(data, "puntos_timing")) },
  ];

  const notaData = Array.from({ length: 10 }, (_, i) => ({
    nota: `${i + 1}★`,
    total: count(data, "nota_final", i + 1),
  }));
  const opinionData = freq(data, "opinion_inicial");
  const experienciaData = freq(data, "experiencia");
  const combateData = freq(data, "combate_divertido");
  const dificultadData = freq(data, "dificultad_adecuada");
  const enemigoData = freq(data, "cantidad_enemigos");
  const visualData = freq(data, "estilo_visual");
  const animData = freq(data, "animaciones_claras");
  const soundData = freq(data, "soundtrack_acorde");
  const shagData = freq(data, "feedback_shagamido");

  const notaMedia = avg(data, "nota_final");
  const notaMediaFmt = Number.isInteger(parseFloat(notaMedia))
    ? `${parseInt(notaMedia)}/10`
    : `${parseFloat(notaMedia).toFixed(1)}/10`;
  const pctReco = pct(data, (r) => r.recomendado === true);
  const pctBugs = pct(data, (r) => r.hay_bugs === true);
  const pctFps = pct(data, (r) => r.fps_estables === true);
  const pctCrash = pct(data, (r) => r.hay_crasheos === true);
  const pctEntendio = pct(data, (r) => r.entendiste_sin_ayuda === true);
  const pctClaro = pct(data, (r) => r.algo_confuso === false);

  const opiniones = data
    .filter((r) => r.opinion_general)
    .map((r) => r.opinion_general);
  const ideas = data.filter((r) => r.ideas_mejora).map((r) => r.ideas_mejora);
  const bugDesc = data
    .filter((r) => r.hay_bugs && r.descripcion_bugs)
    .map((r) => r.descripcion_bugs);

  return (
    <div
      className={`min-h-screen font-mono transition-colors duration-500 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {/* HEADER */}
      <header
        className={`py-6 px-10 border-b ${isDark ? "border-white/10" : "border-black/10"} flex items-center justify-between`}
      >
        {" "}
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-14">
        {n === 0 ? (
          <div
            className={`text-center py-40 uppercase tracking-widest text-sm ${isDark ? "text-white/20" : "text-black/20"}`}
          >
            No hay datos todavía. ¡Espera el primer tester!
          </div>
        ) : (
          <>
            {/* SECCIÓN 01 - RESUMEN GLOBAL */}
            <Motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <SectionTitle isDark={isDark} n="01" title="Resumen Global" />

              {/* Grid de Métricas Principales */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Card
                  isDark={isDark}
                  className="flex items-top justify-center min-w-0 overflow-hidden"
                >
                  <StatBig
                    isDark={isDark}
                    label="Nota Media"
                    value={notaMediaFmt}
                    className="text-2xl md:text-4xl"
                    color={
                      parseFloat(notaMedia) >= 7
                        ? GREEN
                        : parseFloat(notaMedia) >= 5
                          ? YELLOW
                          : RED
                    }
                  />
                </Card>

                <Card isDark={isDark}>
                  <StatBig
                    isDark={isDark}
                    label="Recomendarían"
                    value={`${pctReco}%`}
                    color={pctReco >= 70 ? GREEN : YELLOW}
                    sub={`${data.filter((r) => r.recomendado).length} de ${n}`}
                  />
                </Card>

                <Card isDark={isDark}>
                  <StatBig
                    isDark={isDark}
                    label="Bugs reportados"
                    value={`${pctBugs}%`}
                    color={pctBugs > 40 ? RED : pctBugs > 20 ? YELLOW : GREEN}
                    sub={`${data.filter((r) => r.hay_bugs).length} testers`}
                  />
                </Card>

                <Card isDark={isDark}>
                  <StatBig
                    isDark={isDark}
                    label="Total Testers"
                    value={n}
                    color={CYAN}
                    sub="respuestas completas"
                  />
                </Card>
              </div>

              {/* Gráfico de Distribución de Edad */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card
                  isDark={isDark}
                  className="relative overflow-hidden group"
                >
                  <div
                    className={`absolute right-[-20px] top-[-20px] text-8xl font-black italic opacity-[0.03] pointer-events-none select-none ${isDark ? "text-white" : "text-black"}`}
                  >
                    AGE
                  </div>

                  <div className="relative z-10 flex flex-col justify-center h-full p-2">
                    <p
                      className={`text-[9px] uppercase tracking-widest mb-2 font-bold ${isDark ? "text-white/30" : "text-black/30"}`}
                    >
                      Edad media de los testers
                    </p>

                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-6xl font-black italic font-mono leading-none tracking-tighter"
                        style={{ color: CYAN }}
                      >
                        {data.filter((r) => r.edad).length > 0
                          ? (
                              data
                                .filter((r) => r.edad)
                                .reduce((s, r) => s + Number(r.edad), 0) /
                              data.filter((r) => r.edad).length
                            ).toFixed(1)
                          : "—"}
                      </span>
                      <span
                        className={`text-xl font-black italic uppercase opacity-40 ${isDark ? "text-white" : "text-black"}`}
                      >
                        años
                      </span>
                    </div>

                    <div
                      className={`mt-4 flex items-center gap-2 text-[10px] font-mono ${isDark ? "text-white/30" : "text-black/30"}`}
                    >
                      <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: CYAN }}
                      ></span>
                      {data.filter((r) => r.edad).length} MUESTRAS REGISTRADAS
                    </div>
                  </div>
                </Card>

                <Card
                  isDark={isDark}
                  className="relative overflow-hidden group min-h-[160px]"
                >
                  <div
                    className={`absolute right-[-10px] top-[-10px] text-7xl font-black italic opacity-[0.03] pointer-events-none select-none transition-transform duration-700 group-hover:scale-110 ${isDark ? "text-white" : "text-black"}`}
                  >
                    AGE
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <p
                        className={`text-[9px] uppercase tracking-[0.2em] font-black ${isDark ? "text-white/40" : "text-black/40"}`}
                      >
                        EDAD DE LOS TESTERS
                      </p>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 rounded-full ${isDark ? "bg-white/20" : "bg-black/20"}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                      {data.filter((r) => r.edad).length === 0 ? (
                        <div className="w-full py-4 flex flex-col items-center justify-center opacity-30 border border-dashed rounded-lg">
                          <p className="text-[10px] font-mono tracking-tighter">
                            No tenemos datos de edad todavía. ¡Espera a que los testers completen esa sección!
                          </p>
                        </div>
                      ) : (
                        data
                          .filter((r) => r.edad)
                          .map((r, i) => (
                            <div
                              key={i}
                              className={`px-2 py-1 rounded border transition-all duration-300 hover:scale-105 ${
                                isDark
                                  ? "bg-white/5 border-white/10 hover:border-white/30"
                                  : "bg-black/5 border-black/10 hover:border-black/30"
                              }`}
                            >
                              <span
                                className="text-sm font-black italic font-mono"
                                style={{ color: CYAN }}
                              >
                                {r.edad}
                                <span className="text-[8px] ml-0.5 opacity-50 font-sans not-italic">
                                  YRS
                                </span>
                              </span>
                            </div>
                          ))
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            </Motion.section>

            {/* SECCIÓN 02 - PRIMERAS IMPRESIONES */}
            <Motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <SectionTitle
                isDark={isDark}
                n="02"
                title="Primeras Impresiones"
              />

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* 01. Gráfico Circular de que le parece el juego */}
                  <Card isDark={isDark}>
                    <p
                      className={`text-[9px] uppercase tracking-widest mb-3 ${isDark ? "text-white/30" : "text-black/30"}`}
                    >
                      ¿Qué te pareció?
                    </p>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={opinionData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          paddingAngle={3}
                        >
                          {opinionData.map((_, i) => (
                            <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                          iconType="circle"
                          iconSize={8}
                          wrapperStyle={{
                            fontSize: 10,
                            fontFamily: "monospace",
                            paddingTop: "10px",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </Card>

                  {/* 02. Barras de Porcentaje (Sin ayuda / Sin confusión) */}
                  <Card
                    isDark={isDark}
                    className="flex flex-col justify-center"
                  >
                    <p
                      className={`text-[9px] uppercase tracking-widest mb-6 ${isDark ? "text-white/30" : "text-black/30"}`}
                    >
                      Facilidad de uso y claridad
                    </p>
                    <div className="space-y-8">
                      <PctBar
                        isDark={isDark}
                        label="Entendió sin ayuda"
                        value={pctEntendio}
                        color={pctEntendio >= 70 ? GREEN : YELLOW}
                      />
                      <PctBar
                        isDark={isDark}
                        label="Sin confusión"
                        value={pctClaro}
                        color={pctClaro >= 70 ? GREEN : YELLOW}
                      />
                    </div>
                  </Card>

                  {/* 03. Nivel de Experiencia */}
                  <Card isDark={isDark}>
                    <p
                      className={`text-[9px] uppercase tracking-widest mb-3 ${isDark ? "text-white/30" : "text-black/30"}`}
                    >
                      Nivel de experiencia
                    </p>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart
                        data={experienciaData}
                        layout="vertical"
                        barCategoryGap="25%"
                      >
                        <XAxis type="number" hide />
                        <YAxis
                          type="category"
                          dataKey="name"
                          tick={{
                            fill: isDark
                              ? "rgba(255,255,255,0.5)"
                              : "rgba(0,0,0,0.5)",
                            fontSize: 10,
                            fontFamily: "monospace",
                          }}
                          axisLine={false}
                          tickLine={false}
                          width={80}
                        />
                        <Tooltip
                          content={<CustomTooltip />}
                          cursor={{
                            fill: isDark
                              ? "rgba(255,255,255,0.03)"
                              : "rgba(0,0,0,0.05)",
                          }}
                        />
                        <Bar dataKey="value" radius={[0, 2, 2, 0]}>
                          {experienciaData.map((_, i) => (
                            <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </Card>
                </div>

                {/* FILA INFERIOR: FEEDBACK CUALITATIVO  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      label: "Juegos similares mencionados",
                      key: "juegos_similares",
                      color: "#06b6d4",
                    },
                    {
                      label: "¿Dónde necesitó ayuda?",
                      key: "detalle_ayuda",
                      color: "#008012",
                    },
                    {
                      label: "Elementos de confusión",
                      key: "detalle_confusion",
                      color: "#eab308",
                    },
                  ].map((item) => (
                    <Card isDark={isDark} key={item.key}>
                      <p
                        className={`text-[9px] uppercase tracking-widest mb-3 ${isDark ? "text-white/30" : "text-black/30"}`}
                      >
                        {item.label}
                      </p>
                      <div className="flex flex-col gap-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                        {data.filter((r) => r[item.key]).length === 0 ? (
                          <p
                            className={`text-xs italic ${isDark ? "text-white/20" : "text-black/20"}`}
                          >
                            Sin respuestas registradas.
                          </p>
                        ) : (
                          data
                            .filter((r) => r[item.key])
                            .map((r, i) => (
                              <div
                                key={i}
                                style={{
                                  borderLeft: `2px solid ${item.color}60`,
                                }}
                                className="pl-3 py-1 bg-white/5"
                              >
                                <p
                                  className={`text-[11px] leading-relaxed ${isDark ? "text-white/70" : "text-black/70"}`}
                                >
                                  {r[item.key]}
                                </p>
                              </div>
                            ))
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Motion.section>

            {/*SECCION 03 - CONTROLES Y MOVIMIENTO */}
            <Motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SectionTitle
                isDark={isDark}
                n="03"
                title="Controles y Movimiento"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card isDark={isDark}>
                  <ResponsiveContainer width="100%" height={260}>
                    <RadarChart
                      data={radarData}
                      margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
                    >
                      <PolarGrid stroke="rgba(255,255,255,0.08)" />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{
                          fill: isDark
                            ? "rgba(255,255,255,0.5)"
                            : "rgba(0,0,0,0.5)",
                          fontSize: 11,
                          fontFamily: "monospace",
                        }}
                      />{" "}
                      <Radar
                        dataKey="value"
                        stroke={GREEN}
                        fill={GREEN}
                        fillOpacity={0.15}
                        strokeWidth={2}
                        dot={{ fill: GREEN, r: 4 }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </Card>
                <Card
                  isDark={isDark}
                  className="flex flex-col justify-center gap-5"
                >
                  {[
                    { label: "Controles", key: "puntos_controles" },
                    { label: "Fluidez", key: "puntos_fluidez" },
                    { label: "Ataque Rodolfo", key: "puntos_ataque_rodolfo" },
                    { label: "Timing", key: "puntos_timing" },
                  ].map(({ label, key }) => {
                    const v = parseFloat(avg(data, key));
                    return (
                      <PctBar
                        isDark={isDark}
                        key={key}
                        label={label}
                        value={Math.round(v * 10)}
                        color={v >= 7 ? GREEN : v >= 5 ? YELLOW : RED}
                      />
                    );
                  })}
                </Card>
              </div>
            </Motion.section>

            {/* SECCION 04 - COMBATE */}
            <Motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-12"
            >
              <SectionTitle
                isDark={isDark}
                n="04"
                title="Análisis de Combate"
              />

              {/* GRID DE MÉTRICAS PRINCIPALES */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card isDark={isDark}>
                  <p
                    className={`text-[9px] uppercase tracking-widest mb-3 ${isDark ? "text-white/30" : "text-black/30"}`}
                  >
                    ¿Es divertido el combate?
                  </p>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={combateData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={75}
                        paddingAngle={3}
                      >
                        {combateData.map((_, i) => (
                          <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                      <Legend
                        iconType="circle"
                        iconSize={8}
                        wrapperStyle={{ fontSize: 9, fontFamily: "monospace" }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </Card>

                <Card
                  isDark={isDark}
                  className="flex flex-col justify-center gap-5"
                >
                  <p
                    className={`text-[9px] uppercase tracking-widest ${isDark ? "text-white/30" : "text-black/30"}`}
                  >
                    Dificultad acorde a tu nivel
                  </p>
                  {dificultadData.map(({ name, value }) => (
                    <PctBar
                      isDark={isDark}
                      key={name}
                      label={name}
                      value={Math.round((value / n) * 100)}
                      color={
                        name === "Sí"
                          ? GREEN
                          : name === "Regular"
                            ? YELLOW
                            : RED
                      }
                    />
                  ))}
                </Card>

                <Card isDark={isDark}>
                  <p
                    className={`text-[9px] uppercase tracking-widest mb-3 ${isDark ? "text-white/30" : "text-black/30"}`}
                  >
                    Cantidad de enemigos
                  </p>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart
                      data={enemigoData}
                      layout="vertical"
                      barCategoryGap="25%"
                    >
                      <XAxis type="number" hide />
                      <YAxis
                        type="category"
                        dataKey="name"
                        tick={{
                          fill: isDark
                            ? "rgba(255,255,255,0.4)"
                            : "rgba(0,0,0,0.4)",
                          fontSize: 9,
                          fontFamily: "monospace",
                        }}
                        axisLine={false}
                        tickLine={false}
                        width={110}
                      />
                      <Tooltip
                        content={<CustomTooltip />}
                        cursor={{ fill: "rgba(255,255,255,0.03)" }}
                      />
                      <Bar dataKey="value" radius={[0, 2, 2, 0]}>
                        {enemigoData.map((_, i) => (
                          <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </div>

              {/* COMENTARIOS  DEL COMBATE */}
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    label: "Detalles sobre el combate",
                    key: "detalle_combate",
                    color: GREEN,
                  },
                ].map(({ label, key, color }) => (
                  <Card
                    isDark={isDark}
                    key={key}
                    className="border-t-2"
                    style={{ borderTopColor: `${color}40` }}
                  >
                    <p
                      className={`text-[9px] uppercase tracking-widest mb-4 font-bold ${isDark ? "text-white/30" : "text-black/30"}`}
                    >
                      {label}
                    </p>
                    <div className="flex flex-col gap-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                      {data.filter((r) => r[key]).length === 0 ? (
                        <p
                          className={`text-[10px] font-mono italic opacity-20 ${isDark ? "text-white" : "text-black"}`}
                        >
                          NO_FEEDBACK_DATA
                        </p>
                      ) : (
                        data
                          .filter((r) => r[key])
                          .map((r, i) => (
                            <div
                              key={i}
                              style={{ borderLeft: `2px solid ${color}40` }}
                              className={`pl-4 py-2 transition-colors ${isDark ? "hover:bg-white/5" : "hover:bg-black/5"}`}
                            >
                              <p
                                className={`text-xs leading-relaxed font-mono ${isDark ? "text-white/60" : "text-black/60"}`}
                              >
                                <span className="text-emerald-500/50 mr-2">
                                  #
                                </span>
                                {r[key]}
                              </p>
                            </div>
                          ))
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </Motion.section>

            {/* SECCION 05 - ARTE Y SONIDO */}
            <Motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12"
            >
              <SectionTitle isDark={isDark} n="05" title="Arte y Sonido" />

              {/* BLOQUE DE GRÁFICAS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Estilo Visual", d: visualData },
                  { label: "Animaciones", d: animData },
                  { label: "Soundtrack", d: soundData },
                  { label: "Feedback Shagamido", d: shagData },
                ].map(({ label, d }) => (
                  <Card isDark={isDark} key={label}>
                    <p
                      className={`text-[9px] uppercase tracking-widest mb-3 ${isDark ? "text-white/30" : "text-black/30"}`}
                    >
                      {label}
                    </p>
                    <ResponsiveContainer width="100%" height={140}>
                      <BarChart data={d} barCategoryGap="30%">
                        <XAxis
                          dataKey="name"
                          tick={{
                            fill: isDark
                              ? "rgba(255,255,255,0.4)"
                              : "rgba(0,0,0,0.4)",
                            fontSize: 8,
                            fontFamily: "monospace",
                          }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis hide />
                        <Tooltip
                          content={<CustomTooltip />}
                          cursor={{
                            fill: isDark
                              ? "rgba(255,255,255,0.03)"
                              : "rgba(0,0,0,0.03)",
                          }}
                        />
                        <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                          {d.map((entry, i) => (
                            <Cell
                              key={i}
                              fill={
                                entry.name === "Muy mejorable"
                                  ? RED
                                  : entry.name === "Regular"
                                    ? YELLOW
                                    : GREEN
                              }
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </Card>
                ))}
              </div>

              {/* BLOQUE DE FEEDBACK  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    label: "Qué mejorar — Estilo visual",
                    key: "detalle_estilo_visual",
                    color: "#a855f7",
                  },
                  {
                    label: "Qué mejorar — Animaciones",
                    key: "detalle_animaciones",
                    color: "#a855f7",
                  },
                  {
                    label: "Qué mejorar — Soundtrack",
                    key: "detalle_soundtrack",
                    color: "#a855f7",
                  },
                  {
                    label: "Qué mejorar — Feedback Shagamido",
                    key: "detalle_shagamido",
                    color: "#a855f7",
                  },
                ].map(({ label, key, color }) => (
                  <Card isDark={isDark} key={key}>
                    <div className="flex justify-between items-center mb-3">
                      <p
                        className={`text-[9px] uppercase tracking-widest ${isDark ? "text-white/30" : "text-black/30"}`}
                      >
                        {label}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                      {data.filter((r) => r[key]).length === 0 ? (
                        <p
                          className={`text-[10px] italic font-mono opacity-20 ${isDark ? "text-white" : "text-black"}`}
                        >
                          NO_ENTRIES_FOUND
                        </p>
                      ) : (
                        data
                          .filter((r) => r[key])
                          .map((r, i) => (
                            <div
                              key={i}
                              style={{ borderLeft: `2px solid ${color}40` }}
                              className={`pl-3 py-1.5 transition-colors ${isDark ? "hover:bg-white/5" : "hover:bg-black/5"}`}
                            >
                              <p
                                className={`text-[11px] leading-relaxed font-mono ${isDark ? "text-white/60" : "text-black/60"}`}
                              >
                                <span className="opacity-40 mr-1">&gt;</span>
                                {r[key]}
                              </p>
                            </div>
                          ))
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </Motion.section>

            {/* SECCION 06 - RENDIMIENTO */}
            <Motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-12"
            >
              <SectionTitle isDark={isDark} n="06" title="Rendimiento y Bugs" />

              {/* GRID SUPERIOR: MÉTRICAS Y BUGS REPORTADOS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card
                  isDark={isDark}
                  className="flex flex-col gap-5 justify-center"
                >
                  <PctBar
                    isDark={isDark}
                    label="FPS estables"
                    value={pctFps}
                    color={pctFps >= 80 ? GREEN : YELLOW}
                  />
                  <PctBar
                    isDark={isDark}
                    label="Sin crasheos"
                    value={100 - pctCrash}
                    color={100 - pctCrash >= 80 ? GREEN : RED}
                  />
                  <PctBar
                    isDark={isDark}
                    label="Sin bugs"
                    value={100 - pctBugs}
                    color={100 - pctBugs >= 70 ? GREEN : YELLOW}
                  />
                </Card>

                <Card isDark={isDark} className="md:col-span-2">
                  <p
                    className={`text-[10px] uppercase tracking-widest mb-3 ${isDark ? "text-white/30" : "text-black/30"}`}
                  >
                    Bugs reportados
                  </p>
                  <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {bugDesc.length === 0 ? (
                      <p
                        className={`text-sm italic ${isDark ? "text-white/20" : "text-black/20"}`}
                      >
                        ¡Sin bugs reportados! 🎉
                      </p>
                    ) : (
                      bugDesc.map((b, i) => (
                        <div
                          key={i}
                          className="border-l-2 border-[#ff0000]/40 pl-3 py-1.5 transition-colors hover:bg-red-500/5"
                        >
                          <p
                            className={`text-[11px] font-mono leading-relaxed ${isDark ? "text-white/60" : "text-black/60"}`}
                          >
                            {b}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </Card>
              </div>

              {/* SECCIÓN INFERIOR: DETALLE DE CRASHEOS */}
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    label: "Crasheos reportados",
                    key: "descripcion_crasheos",
                    color: RED,
                  },
                ].map(({ label, key, color }) => (
                  <Card
                    isDark={isDark}
                    key={key}
                    className="border-t-2"
                    style={{ borderTopColor: `${color}40` }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <p
                        className={`text-[10px] uppercase tracking-widest ${isDark ? "text-white/30" : "text-black/30"}`}
                      >
                        {label}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                      {data.filter((r) => r[key]).length === 0 ? (
                        <p
                          className={`text-[10px] font-mono italic opacity-20 ${isDark ? "text-white" : "text-black"}`}
                        >
                          NO_CRITICAL_ERRORS_DETECTED
                        </p>
                      ) : (
                        data
                          .filter((r) => r[key])
                          .map((r, i) => (
                            <div
                              key={i}
                              style={{ borderLeft: `2px solid ${color}40` }}
                              className={`pl-3 py-1.5 transition-colors ${isDark ? "hover:bg-white/5" : "hover:bg-black/5"}`}
                            >
                              <p
                                className={`text-[11px] leading-relaxed font-mono ${isDark ? "text-red-400/80" : "text-red-600/80"}`}
                              >
                                {r[key]}
                              </p>
                            </div>
                          ))
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </Motion.section>

            {/*SECCION 07 - OPINIONES */}
            <Motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SectionTitle
                isDark={isDark}
                n="07"
                title="Opiniones e Ideas de Mejora"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card isDark={isDark}>
                  <p
                    className={`text-[9px] uppercase tracking-widest mb-4 ${isDark ? "text-white/30" : "text-black/30"}`}
                  >
                    Opiniones generales ({opiniones.length})
                  </p>
                  <div className="flex flex-col gap-3 max-h-72 overflow-y-auto pr-2">
                    {opiniones.length === 0 ? (
                      <p
                        className={`text-sm italic ${isDark ? "text-white/20" : "text-black/20"}`}
                      >
                        Sin comentarios.
                      </p>
                    ) : (
                      opiniones.map((o, i) => (
                        <div
                          key={i}
                          className="border-l-2 border-[#008012]/40 pl-3 py-1"
                        >
                          <p
                            className={`text-xs leading-relaxed ${isDark ? "text-white/60" : "text-black/60"}`}
                          >
                            {o}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </Card>
                <Card isDark={isDark}>
                  <p
                    className={`text-[9px] uppercase tracking-widest mb-4 ${isDark ? "text-white/30" : "text-black/30"}`}
                  >
                    Ideas de mejora ({ideas.length})
                  </p>
                  <div className="flex flex-col gap-3 max-h-72 overflow-y-auto pr-2">
                    {ideas.length === 0 ? (
                      <p
                        className={`text-sm italic ${isDark ? "text-white/20" : "text-black/20"}`}
                      >
                        Sin ideas registradas.
                      </p>
                    ) : (
                      ideas.map((o, i) => (
                        <div
                          key={i}
                          className="border-l-2 border-[#eab308]/40 pl-3 py-1"
                        >
                          <p
                            className={`text-xs leading-relaxed ${isDark ? "text-white/60" : "text-black/60"}`}
                          >
                            {o}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </Card>
              </div>
            </Motion.section>

            {/*SECCION 08 - EVALUACION */}
            <Motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <SectionTitle
                isDark={isDark}
                n="08"
                title="Evaluación Final — Notas"
              />
              <Card isDark={isDark} className="overflow-hidden">
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart
                    data={notaData}
                    barCategoryGap="25%"
                    margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
                  >
                    <XAxis
                      dataKey="nota"
                      interval={0}
                      tick={{
                        fill: isDark
                          ? "rgba(255,255,255,0.4)"
                          : "rgba(0,0,0,0.4)",
                        fontSize: 9,
                        fontFamily: "monospace",
                      }}
                      axisLine={false}
                      tickLine={false}
                      dy={5}
                    />
                    <YAxis
                      tick={{
                        fill: isDark
                          ? "rgba(255,255,255,0.3)"
                          : "rgba(0,0,0,0.3)",
                        fontSize: 9,
                      }}
                      axisLine={false}
                      tickLine={false}
                      allowDecimals={false}
                      width={25}
                    />
                    <Tooltip
                      content={<CustomTooltip />}
                      cursor={{
                        fill: isDark
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.05)",
                      }}
                    />
                    <Bar dataKey="total" radius={[4, 4, 0, 0]}>
                      {notaData.map((entry, i) => (
                        <Cell
                          key={i}
                          fill={
                            parseInt(entry.nota) >= 7
                              ? GREEN
                              : parseInt(entry.nota) >= 5
                                ? YELLOW
                                : RED
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </Motion.section>
          </>
        )}
      </div>
    </div>
  );
};

{/* El componente raíz que decide si mostrar el login o el dashboard según el estado de autenticación. */}
const ResultadoTest = ({ isDark = true }) => {
  const [auth, setAuth] = useState(false);

  if (!auth) return <Login onLogin={() => setAuth(true)} isDark={isDark} />;
  return <Dashboard onLogout={() => setAuth(false)} isDark={isDark} />;
};

export default ResultadoTest;
