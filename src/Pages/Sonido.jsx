import React, { useState, useRef, useEffect, memo } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { playlist } from "../data/playlist";

// COMPONENTE: SoundBars (Visualizador)
// Optimizado con memo para evitar re-renders innecesarios
const SoundBars = memo(({ isPlaying }) => (
  <div className="absolute inset-0 flex items-center justify-between opacity-30 px-0 pointer-events-none">
    {[...Array(60)].map((_, i) => {
      const randomDuration = 0.8 + Math.random() * 1.5;
      const randomHeight = 10 + Math.random() * 60;

      return (
        <div
          key={i}
          className={`w-[2px] bg-current ${isPlaying ? "animate-chill-bars" : ""}`}
          style={{
            height: `${randomHeight}%`,
            animationDelay: `${i * 0.05}s`,
            animationDuration: `${randomDuration}s`,
            transformOrigin: "bottom",
          }}
        ></div>
      );
    })}
  </div>
));

const SeccionSonido = ({ isDark }) => {
  // ESTADOS DEL REPRODUCTOR
  // Controlan la UI, la carga y la lógica de audio
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(1);
  const [currentTimeLabel, setCurrentTimeLabel] = useState("0:00");
  const [durationLabel, setDurationLabel] = useState("0:00");
  const [resetKey, setResetKey] = useState(0);
  const audioRef = useRef(null); // Ref esencial para manipular el nodo <audio> directamente

  const currentTextColor = isDark ? "#ffffff" : "#000000";
  const accentGreen = "#008012";
  const currentTrack = playlist[currentTrackIndex];

  // CONFIGURACIÓN DE ANIMACIONES (Framer Motion)
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

  // --- Efecto de carga inicial ---
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Gestión de pausa automática al cambiar de pestaña
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isPlaying]);

  const formatTime = (time) => {
    if (isNaN(time) || time === Infinity) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // LÓGICA DE CONTROL DE AUDIO
  // Manejo de carga de pistas y estados de reproducción
  useEffect(() => {
    if (audioRef.current) {
      setProgress(0);
      setCurrentTimeLabel("0:00");
      setResetKey((prev) => prev + 1); // Fuerza el reinicio de la animación del vinilo
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [currentTrackIndex]);

  const handleEnded = () => {
    setIsPlaying(false);
    setTimeout(() => {
      setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
      setIsPlaying(true);
    }, 2000);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const handleReset = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setProgress(0);
      setCurrentTimeLabel("0:00");
      setResetKey((prev) => prev + 1);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      setVolume(prevVolume);
      audioRef.current.volume = prevVolume;
      setIsMuted(false);
    } else {
      setPrevVolume(volume);
      setVolume(0);
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((current / duration) * 100);
      setCurrentTimeLabel(formatTime(current));
    }
  };

  const handleMetadata = () => {
    if (audioRef.current) {
      setDurationLabel(formatTime(audioRef.current.duration));
    }
  };

  // Sincronización del Input Range con el Audio ---
  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    if (audioRef.current && audioRef.current.duration) {
      const newTime = (newProgress / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
      setCurrentTimeLabel(formatTime(newTime));
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) audioRef.current.volume = newVol;
    setIsMuted(newVol === 0);
  };

  return (
    <AnimatePresence>
      {/* PANTALLA DE CARGA */}
      {isLoading ? (
        <Motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black font-mono text-white"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#008012] border-t-transparent rounded-full animate-spin"></div>
            <p className="tracking-[0.5em] text-[10px] font-bold animate-pulse uppercase">
              Cargando_Tracklist_oficial_SR
            </p>
          </div>
        </Motion.div>
      ) : (
        <Motion.div
          key="content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className={`min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-12 lg:px-24 transition-colors duration-500 font-sans ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
        >
          {/* CABECERA DE SECCIÓN */}
          <Motion.header
            variants={itemVariants}
            className="max-w-6xl mx-auto border-b-8 pb-8 mb-20"
            style={{ borderColor: currentTextColor }}
          >
            <span className="font-mono text-xs font-bold opacity-60 tracking-[0.4em] block mb-4 uppercase">
              // Documentación_Fase_07
            </span>
            <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">
              SO<span style={{ color: accentGreen }}>NIDO</span>
            </h1>
          </Motion.header>

          <div className="flex flex-col xl:flex-row gap-10 items-start max-w-7xl mx-auto">
            {/*Columna izquierda: TrackList */}
            <Motion.div
              variants={itemVariants}
              className="w-full xl:w-1/3 flex flex-col shrink-0"
            >
              {/* Trigger del Acordeón (Contraportada) */}
              <div
                onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
                className={`p-6 border-t-4 border-x-2 font-mono transition-all duration-500 cursor-pointer select-none group relative overflow-hidden ${
                  isDark
                    ? "border-white bg-zinc-900 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]"
                    : "border-black bg-zinc-50 shadow-[5px_5px_0_0_#000]"
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-col">
                    <span
                      className={`text-[8px] font-black tracking-[0.3em] uppercase ${isDark ? "text-zinc-500" : "text-zinc-400"}`}
                    >
                      Formato: Grabación Maestra Digital
                    </span>
                    <span
                      className={`text-[8px] font-black tracking-[0.3em] uppercase ${isDark ? "text-zinc-500" : "text-zinc-400"}`}
                    >
                      Lanzamiento: Edición Santo Reino{" "}
                    </span>
                  </div>

                  <div
                    className={`w-10 h-10 border-2 rounded-full hidden md:flex items-center justify-center rotate-12 ${isDark ? "border-zinc-700 text-zinc-700" : "border-zinc-300 text-zinc-300"}`}
                  >
                    <span className="text-[7px] font-black text-center leading-none">
                      HIGH
                      <br />
                      FIDELITY
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h3
                    className={`text-xl md:text-2xl font-black italic tracking-tighter uppercase leading-none ${isDark ? "text-white" : "text-black"}`}
                  >
                    Tracklist <span className="text-[#008012]">Oficial</span>
                  </h3>
                  <p
                    className={`text-[10px] font-bold tracking-[0.1em] uppercase opacity-70 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
                  >
                    Super Rodolfo y las esferas del Santo Reino
                  </p>
                </div>

                <div
                  className={`mt-8 flex items-end gap-1 opacity-40 ${isDark ? "invert" : ""}`}
                >
                  {[2, 4, 1, 3, 2, 6, 1, 4, 2].map((w, i) => (
                    <div
                      key={i}
                      className="bg-black"
                      style={{ width: `${w}px`, height: "15px" }}
                    ></div>
                  ))}
                  <span className="text-[8px] ml-2 font-mono tracking-tighter">
                    8 4012026 00007 2
                  </span>
                </div>
                <div
                  className={`absolute bottom-0 left-0 w-full h-[1px] ${isDark ? "bg-white/10" : "bg-black/10"}`}
                ></div>
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${isDark ? "bg-white/5" : "bg-black/5"}`}
                />
              </div>

              {/* Contenedor colapsable del Tracklist */}
              <div
                className={`
                  overflow-y-auto custom-scrollbar transition-all duration-500 ease-in-out
                  ${isPlaylistOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 xl:max-h-[600px] xl:opacity-100"}
                  ${
                    isDark
                      ? "border-x-2 border-b-2 border-white bg-zinc-900"
                      : "border-x-2 border-b-4 border-black bg-zinc-50 shadow-[5px_5px_0_0_#000]"
                  }
                `}
              >
                {playlist.map((track, index) => {
                  const isActive = currentTrackIndex === index;
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentTrackIndex(index);
                        if (window.innerWidth < 1280) setIsPlaylistOpen(false);
                      }}
                      className={`w-full text-left p-5 border-b transition-all duration-300 flex items-center gap-6 group relative overflow-hidden ${isActive ? (isDark ? "bg-white text-black" : "bg-black text-white") : isDark ? "hover:bg-white/5 border-white/5" : "hover:bg-black/5 border-black/5"}`}
                    >
                      <div
                        className={`absolute left-0 top-0 h-full w-1 transition-transform duration-300 ${isActive ? "bg-[#008012]" : "bg-zinc-500 -translate-x-full group-hover:translate-x-0"}`}
                      />
                      <div className="flex flex-col items-center">
                        <span
                          className={`font-mono text-[10px] leading-none mb-1 ${isActive ? "opacity-100" : "opacity-30"}`}
                        >
                          TRK
                        </span>
                        <span
                          className={`font-black text-lg font-mono leading-none ${isActive ? "text-[#008012]" : "opacity-20"}`}
                        >
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <h4
                          className={`font-black text-[11px] md:text-xs uppercase tracking-[0.15em] leading-tight ${isActive ? "" : "group-hover:text-[#008012] transition-colors"}`}
                        >
                          {track.title.includes("/")
                            ? track.title.split("/").map((line, i) => (
                                <span key={i} className="block">
                                  {line.trim()}
                                </span>
                              ))
                            : track.title}
                        </h4>
                      </div>
                      {isActive && (
                        <div className="flex gap-0.5 items-end h-3">
                          <div
                            className={`w-[2px] h-full bg-[#008012] animate-[pulse_0.8s_infinite]`}
                          />
                          <div
                            className={`w-[2px] h-2 bg-[#008012] animate-[pulse_1.2s_infinite]`}
                          />
                          <div
                            className={`w-[2px] h-3 bg-[#008012] animate-[pulse_1s_infinite]`}
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </Motion.div>

            {/*Columna derecha: reproductor + vinilo */}
            <Motion.div
              variants={itemVariants}
              className="w-full xl:w-2/3 flex flex-col gap-8 xl:sticky xl:top-32"
            >
              <div className="flex flex-col md:flex-row items-center gap-12 bg-zinc-500/5 p-8 border-2 border-dashed border-zinc-500/20 relative">
                {/* Vinilo Animado */}
                <div className="relative group shrink-0">
                  <div
                    key={`${currentTrackIndex}-${resetKey}`}
                    className={`w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center relative overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] border-4 border-[#1a1a1a] animate-spin-vinyl`}
                    style={{
                      willChange: "transform",
                      animationPlayState: isPlaying ? "running" : "paused",
                      background: `radial-gradient(circle at center, #050505 0%, #050505 30%, #111 31%, #050505 32%, #111 35%, #050505 38%, #111 45%, #050505 50%, #111 60%, #050505 70%, #151515 80%, #050505 100%), repeating-radial-gradient(circle at center, transparent 0, transparent 2px, rgba(255,255,255,0.03) 3px, transparent 4px)`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        background:
                          "conic-gradient(from 0deg, transparent 0%, white 15%, transparent 30%, transparent 50%, white 65%, transparent 80%, transparent 100%)",
                      }}
                    />
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/40 z-10 bg-zinc-900 flex items-center justify-center overflow-hidden">
                      {currentTrack.cover ? (
                        <img
                          src={currentTrack.cover}
                          alt="cover"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl font-black italic text-white">
                          {currentTrack.title[0]}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Aguja del tocadiscos */}
                  <div
                    className={`absolute -top-4 -right-4 w-1 h-32 bg-zinc-400 origin-top transition-transform duration-700 z-20 ${isPlaying ? "rotate-[25deg]" : "rotate-0"}`}
                  >
                    <div className="absolute bottom-0 -left-1 w-3 h-6 bg-zinc-500 rounded-sm shadow-xl"></div>
                  </div>
                </div>

                <div className="flex-grow text-center md:text-left">
                  <span
                    className="text-white px-2 py-0.5 text-[10px] font-black uppercase tracking-widest"
                    style={{ backgroundColor: accentGreen }}
                  >
                    Reproduciendo
                  </span>
                  <h2 className="text-xl md:text-3xl font-black uppercase mt-2 leading-[1.1] max-w-full md:max-w-md break-words">
                    {currentTrack.title.includes("/")
                      ? currentTrack.title.split("/").map((line, i) => (
                          <span key={i} className="block">
                            {line.trim()}
                          </span>
                        ))
                      : currentTrack.title}
                  </h2>
                  <p className="font-mono text-sm mt-4 opacity-70 italic">
                    {currentTrack.desc}
                  </p>
                </div>
              </div>

              {/* CONTROLES DE REPRODUCCIÓN */}
              <div
                className={`p-6 border-2 ${isDark ? "border-white" : "border-black shadow-[8px_8px_0_0_#000]"}`}
              >
                <div className="flex justify-between items-end mb-2 font-mono text-[10px] font-black">
                  <span>
                    TRACK_{(currentTrackIndex + 1).toString().padStart(2, "0")}
                  </span>
                  <span style={{ color: accentGreen }}>
                    {currentTimeLabel} - {durationLabel}
                  </span>
                </div>

                {/* Input Seek Bar CORREGIDA (Más visible y ancha) */}
                <div className="relative w-full h-12 bg-zinc-800/40 border border-white/5 mb-6 flex items-center overflow-hidden">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleProgressChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
                  />
                  {/* Fondo de progreso más marcado */}
                  <div
                    className="absolute h-full left-0 bg-zinc-500/30"
                    style={{
                      width: `${progress}%`,
                      borderRight: `3px solid ${accentGreen}`,
                    }}
                  />
                  <SoundBars isPlaying={isPlaying} />
                </div>

                <div className="flex items-center gap-8">
                  <button
                    onClick={togglePlay}
                    className="hover:scale-125 transition-transform"
                  >
                    {isPlaying ? (
                      <Pause size={40} fill="currentColor" />
                    ) : (
                      <Play size={40} fill="currentColor" />
                    )}
                  </button>
                  <button
                    onClick={handleReset}
                    className="hover:rotate-[-90deg] transition-transform"
                  >
                    <RotateCcw size={28} />
                  </button>
                  <div className="h-10 w-[1px] bg-current opacity-20 mx-2"></div>

                  {/* Control de Volumen / Mute CORREGIDO para iPhone */}
                  <div className="flex items-center gap-3 flex-grow max-w-[150px]">
                    <button
                      onClick={() => {
                        // Lógica blindada para iOS: usamos la propiedad .muted directamente
                        if (audioRef.current) {
                          audioRef.current.muted = !audioRef.current.muted;
                          // Actualizamos el estado para que la UI reaccione
                          if (audioRef.current.muted) setVolume(0);
                          else setVolume(audioRef.current.volume || 1);
                        }
                      }}
                      className="shrink-0 hover:scale-110"
                    >
                      {/* Detectamos el estado de mute real del elemento de audio */}
                      {audioRef.current?.muted || volume === 0 ? (
                        <VolumeX size={24} style={{ color: accentGreen }} />
                      ) : (
                        <Volume2 size={24} />
                      )}
                    </button>

                    {/* Slider oculto en móviles por incompatibilidad de API, visible en Desktop */}
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="hidden md:block w-full h-1 accent-[#008012] cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Bloque de Información Extra */}
              <div
                className={`p-6 border-2 w-full ${isDark ? "border-white/10" : "border-black/5"}`}
              >
                <h5
                  className="font-black text-[10px] uppercase mb-2"
                  style={{ color: accentGreen }}
                >
                  Relación con la Experiencia
                </h5>
                <p className="text-xs font-bold uppercase italic leading-relaxed">
                  {currentTrack.experiencia || "—"}
                </p>
              </div>
            </Motion.div>
          </div>

          {/*Disclamer Legal y academico */}
          <Motion.footer
            variants={itemVariants}
            className="mt-24 pt-12 pb-20 border-t border-zinc-500/10 px-6 max-w-6xl mx-auto"
          >
            <div className="flex flex-col gap-10 opacity-50 hover:opacity-100 transition-opacity duration-700">
              <div className="flex flex-col gap-4 text-center md:text-left">
                <p className="font-mono text-[10px] md:text-[11px] tracking-[0.15em] leading-relaxed uppercase">
                  Este{" "}
                  <span
                    className={isDark ? "text-white" : "text-black font-bold"}
                  >
                    videojuego y página web
                  </span>{" "}
                  es un proyecto académico sin fines de lucro, desarrollado por{" "}
                  <span
                    className={
                      isDark ? "text-white font-black" : "text-black font-black"
                    }
                  >
                    David Jiménez Villena
                  </span>{" "}
                  como pieza de portfolio personal dentro del{" "}
                  <span className="italic">
                    Curso de Especialización en Desarrollo de Videojuegos y
                    Realidad Virtual
                  </span>
                  .
                </p>
                <p className="font-mono text-[10px] md:text-[11px] tracking-[0.15em] leading-relaxed uppercase">
                  El objetivo de este proyecto es demostrar competencias
                  técnicas en programación, diseño de niveles, integración en el
                  motor{" "}
                  <span
                    className={isDark ? "text-white" : "text-black font-bold"}
                  >
                    Unity
                  </span>
                  , así como el{" "}
                  <span
                    className={
                      isDark ? "text-white font-bold" : "text-black font-bold"
                    }
                  >
                    desarrollo y gestión de un GDD
                  </span>{" "}
                  profesional de un videojuego.
                </p>
              </div>

              <div
                className={`p-6 border-x-2 border-y font-mono ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-zinc-100/50 border-black/5"}`}
              >
                <p className="text-[9px] md:text-[10px] tracking-[0.2em] leading-loose uppercase text-center max-w-5xl mx-auto">
                  Los personajes, música y recursos artísticos pertenecientes a
                  la franquicia
                  <span
                    className={
                      isDark ? "text-zinc-300" : "text-zinc-700 font-bold"
                    }
                  >
                    {" "}
                    Dragon Ball (incluyendo sus etapas original, Z y Super){" "}
                  </span>
                  son propiedad intelectual de Akira Toriyama, Bird Studio,
                  Shueisha y Toei Animation. Estos elementos se utilizan aquí de
                  forma excepcional y exclusivamente con fines demostrativos de
                  desarrollo técnico y aprendizaje,{" "}
                  <span className="font-black underline decoration-[#008012]">
                    sin ninguna intención de explotación comercial
                  </span>
                  .
                </p>
              </div>
            </div>
          </Motion.footer>

          {/* NODO AUDIO OCULTO */}
          <audio
            ref={audioRef}
            src={currentTrack.url}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleMetadata}
            onEnded={handleEnded}
          />

          {/*ESTILOS GLOBALES Y ANIMACIONES CSS*/}
          <style>{`
            @keyframes spin-vinyl { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes chill-wave { 
              0%, 100% { transform: scaleY(1); opacity: 0.5; } 
              50% { transform: scaleY(0.2); opacity: 1; } 
            }
            .animate-spin-vinyl { animation: spin-vinyl 15s linear infinite; }
            .animate-chill-bars { animation: chill-wave ease-in-out infinite; will-change: transform; }
            .custom-scrollbar::-webkit-scrollbar { width: 4px; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: ${accentGreen}; }
          `}</style>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default SeccionSonido;
