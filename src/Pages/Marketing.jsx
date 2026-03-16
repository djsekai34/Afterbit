import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import trailerOficial from "../Video/Trailer Rodolfo.mp4";
import cabezaRodolfo from "../Imagenes/ImagenesSR/RodolfoHud.png";

const PaginaMarketing = ({ isDark, headerLineColor, titleColor }) => {
  const accentGreen = "#008012";

  // === CONFIGURACIÓN DE ANIMACIONES (FRAMER MOTION) ===
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

  // === LÓGICA DE DESCARGA DE RECURSOS ===
  const handleDescarga = () => {
    const link = document.createElement("a");
    link.href = trailerOficial;
    link.download = "Trailer Super Rodolfo y las esferas del Santo Reino.mp4";
    link.click();
  };

  // === SISTEMA DE CONTROL DE VIDEO (REFS Y ESTADOS) ===
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // GESTIÓN DE INTERFAZ EN PANTALLA COMPLETA
  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFsChange);

    let timeout;
    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timeout);
      if (isFullscreen) {
        timeout = setTimeout(() => setShowControls(false), 2500);
      }
    };

    if (isFullscreen) {
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      setShowControls(true);
      document.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, [isFullscreen]);

  const formatTime = (timeInSeconds) => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const clickedProgress = (x / rect.width) * videoRef.current.duration;
    videoRef.current.currentTime = clickedProgress;
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen)
        containerRef.current.requestFullscreen();
      else if (containerRef.current.webkitRequestFullscreen)
        containerRef.current.webkitRequestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const skip = (time) => {
    videoRef.current.currentTime += time;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  const toggleMute = () => {
    const newVolume = volume === 0 ? 1 : 0;
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen pt-32 pb-20 px-4 md:px-12 lg:px-24 transition-colors duration-500 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {/* === HEADER DE PÁGINA === */}
      <motion.header
        variants={itemVariants}
        className="max-w-6xl mx-auto border-b-8 pb-8 mb-40"
        style={{ borderColor: headerLineColor }}
      >
        <span
          className={`font-mono text-xs font-bold opacity-60 tracking-[0.4em] block mb-4 uppercase ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
        >
          // Documentación_Fase_09
        </span>
        <h1
          className={`text-4xl md:text-6xl font-black italic uppercase tracking-tighter ${titleColor}`}
        >
          Mar<span style={{ color: accentGreen }}>keting</span>
        </h1>
      </motion.header>

      <div className="max-w-7xl mx-auto">
        {/* === SECCIÓN 01: TRÁILER OFICIAL  === */}
        <motion.section
          variants={itemVariants}
          className="flex flex-col items-center relative -mt-24 mb-60"
        >
          <div className="text-center mb-12 relative">
            <motion.h2
              className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none"
              style={{ textShadow: `4px 4px 0px ${accentGreen}` }}
            >
              Tráiler{" "}
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: `1px ${isDark ? "white" : "black"}`,
                }}
              >
                Oficial
              </span>
            </motion.h2>
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] mt-2 italic">
              <span style={{ color: accentGreen }}>Super Rodolfo</span> y las
              esferas del{" "}
              <span style={{ color: accentGreen }}>Santo Reino</span>
            </h3>

            {/* INDICADOR HUD RODOLFO */}
            <div className="h-1 w-80 mx-auto mt-8 bg-zinc-800/50 relative overflow-visible">
              <motion.div
                animate={{ x: [-160, 160] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  repeatType: "reverse",
                }}
                className="absolute -top-6 left-1/2 w-12 h-12 z-20"
              >
                <img
                  src={cabezaRodolfo}
                  alt="Rodolfo"
                  className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(0,128,18,0.8)]"
                  style={{ transform: "translateX(-50%)" }}
                />
              </motion.div>
            </div>
          </div>

          {/* NÚCLEO DEL REPRODUCTOR DE VIDEO */}
          <div
            ref={containerRef}
            className={`w-full max-w-5xl relative group bg-black flex flex-col ${isFullscreen ? "justify-center" : ""}`}
          >
            {!isFullscreen && (
              <>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 z-20"
                  style={{ borderColor: accentGreen }}
                />
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                  className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 z-20"
                  style={{ borderColor: accentGreen }}
                />
              </>
            )}

            <div
              className={`relative bg-black shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden ${isFullscreen ? "h-full w-full" : "border-4 border-zinc-900 aspect-video"}`}
            >
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"></div>

              {/* VIDEO CORREGIDO PARA IPHONE */}
              <video
                ref={videoRef}
                src={trailerOficial}
                playsInline // Evita pantalla completa automática en iOS
                webkit-playsinline="true"
                className="w-full h-full object-contain relative z-0 cursor-pointer"
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={togglePlay}
                onDoubleClick={toggleFullscreen}
              />
            </div>

            {/* BARRA DE INTERFAZ DEL PLAYER */}
            <div
              className={`w-full bg-zinc-900 p-4 font-mono text-[10px] tracking-widest uppercase transition-all duration-500 z-50 ${
                isFullscreen
                  ? `absolute bottom-0 left-0 bg-zinc-900/90 backdrop-blur-md ${showControls ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`
                  : `relative border-x-4 border-b-4 border-zinc-900 ${showControls ? "opacity-100" : "opacity-0"}`
              }`}
              style={{ cursor: showControls ? "default" : "none" }}
            >
              <div
                className="h-2 w-full bg-zinc-800 mb-4 cursor-pointer relative group/progress"
                onClick={handleSeek}
              >
                <motion.div
                  className="absolute inset-y-0 left-0 z-10"
                  style={{
                    backgroundColor: accentGreen,
                    width: `${progress}%`,
                  }}
                />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/progress:opacity-100 transition-opacity" />
              </div>

              <div className="flex flex-wrap justify-center sm:justify-between items-center gap-y-6 gap-x-6 text-white text-center">
                <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap w-full sm:w-auto">
                  <button
                    onClick={togglePlay}
                    className="text-sm font-black italic hover:text-white transition-colors"
                    style={{ color: accentGreen }}
                  >
                    {isPlaying ? "[ PAUSA ]" : "[ PLAY ]"}
                  </button>
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.currentTime = 0;
                        videoRef.current.play();
                      }
                    }}
                    className="opacity-50 hover:opacity-100 transition-opacity text-[9px] border border-white/10 px-2 py-1"
                  >
                    REINICIAR
                  </button>
                  <div className="flex gap-3 border-x border-white/10 px-4">
                    <button
                      onClick={() => skip(-10)}
                      className="opacity-50 hover:opacity-100 transition-opacity"
                    >
                      -10S
                    </button>
                    <button
                      onClick={() => skip(10)}
                      className="opacity-50 hover:opacity-100 transition-opacity"
                    >
                      +10S
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-6 flex-wrap w-full sm:w-auto">
                  <div className="flex items-center gap-3">
                    {/* BOTÓN MUTE CORREGIDO PARA MÓVILES */}
                    <button
                      onClick={() => {
                        if (videoRef.current) {
                          videoRef.current.muted = !videoRef.current.muted;
                          setVolume(
                            videoRef.current.muted
                              ? 0
                              : videoRef.current.volume || 1,
                          );
                        }
                      }}
                      className="opacity-50 hover:opacity-100 transition-opacity"
                    >
                      {videoRef.current?.muted || volume === 0
                        ? "MUTED"
                        : "VOL"}
                    </button>

                    {/* Slider solo visible en desktop (en móvil no funciona el API de volumen) */}
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="hidden sm:block w-20 h-1 bg-zinc-700 appearance-none cursor-pointer accent-[#008012]"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${accentGreen} ${volume * 100}%, #3f3f46 ${volume * 100}%)`,
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="opacity-60 tracking-normal font-bold">
                      {formatTime(videoRef.current?.currentTime)} /{" "}
                      {formatTime(videoRef.current?.duration)}
                    </span>
                    <button
                      onClick={() => {
                        if (!isFullscreen) {
                          // Lógica especial para iPhone si falla el API estándar
                          if (containerRef.current?.requestFullscreen) {
                            containerRef.current.requestFullscreen();
                          } else if (videoRef.current?.webkitEnterFullscreen) {
                            videoRef.current.webkitEnterFullscreen();
                          }
                        } else {
                          if (document.exitFullscreen)
                            document.exitFullscreen();
                        }
                      }}
                      className="border border-white/20 px-3 py-1 hover:bg-white/10 hover:border-white transition-all text-[9px]"
                    >
                      {isFullscreen ? "SALIR" : "FULLSCREEN"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTÓN DE ACCIÓN: DESCARGA TRAILER */}
          <motion.button
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            onClick={handleDescarga}
            className="mt-16 group relative px-12 py-6 overflow-visible"
          >
            <div
              className="absolute inset-0 translate-x-2 translate-y-2 transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3"
              style={{ backgroundColor: `${accentGreen}44` }}
            />
            <div
              className="absolute inset-0 border-2 transition-colors duration-300 group-hover:brightness-110"
              style={{
                backgroundColor: accentGreen,
                borderColor: isDark ? "white" : "black",
              }}
            />
            <motion.div
              animate={{ translateY: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-white/10 h-1/3 pointer-events-none z-10"
            />
            <span className="relative z-20 font-black text-xl md:text-2xl italic uppercase tracking-tighter text-white flex items-center gap-6">
              <span className="drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                Descargar trailer oficial
              </span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-3xl"
              >
                ↓
              </motion.span>
            </span>
            <div
              className={`absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 transition-all group-hover:-top-3 group-hover:-left-3 ${isDark ? "border-white" : "border-black"}`}
            />
            <div
              className={`absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 transition-all group-hover:-bottom-3 group-hover:-right-3 ${isDark ? "border-white" : "border-black"}`}
            />
          </motion.button>
        </motion.section>

       {/* === SECCIÓN 02: ESTRATEGIA DE MARKETING === */}
<motion.section
  variants={itemVariants}
  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20"
>
  <div className="space-y-8">
    <div className="space-y-4">
      <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
        ¡Estrategia <span style={{ color: accentGreen }}>Máxima</span>!
      </h2>
      <div
        className={`h-2 w-32`}
        style={{ backgroundColor: accentGreen, skewX: "-20deg" }}
      ></div>
    </div>

    <p
      className={`text-xl leading-relaxed font-bold italic ${isDark ? "text-zinc-200" : "text-zinc-800"}`}
    >
      ¡Nuestra energía no se queda solo tras la pantalla! Vamos a elevar
      nuestro KI en el entorno digital y físico para que el fenómeno{" "}
      <span
        className="uppercase text-2xl"
        style={{ color: accentGreen }}
      >
        Super Rodolfo
      </span>{" "}
      alcance su fase definitiva.
    </p>

    <div
      className={`space-y-6 text-lg ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
    >
      <p>
        ¡Dominaremos las
        <span
          className={`mx-1 font-black italic tracking-tight uppercase text-xl ${isDark ? "text-white" : "text-black"}`}
          style={{
            textShadow: isDark
              ? `2px 2px 0px ${accentGreen}55`
              : `2px 2px 0px ${accentGreen}aa`,
          }}
        >
          {" "}
          REDES SOCIALES{" "}
        </span>
        con un impacto viral masivo! Pero también conquistaremos las
        calles empapelando cada rincón con nuestro:
      </p>
      <Link
        to="/Proyectos/SuperRodolfo/AnalisisyPreproduccion"
        className="inline-block font-black italic text-2xl underline decoration-4 underline-offset-4 hover:scale-105 transition-transform"
        style={{
          textDecorationColor: accentGreen,
          color: isDark ? "white" : "black",
        }}
      >
        ¡MOODBOARD OFICIAL!
      </Link>
      <p>
        ¡La batalla real empieza en vivo! No te pierdas las fechas de
        los eventos que estamos organizando y asistiendo en nuestra:
      </p>
      <Link
        to="/Eventos"
        className="inline-block font-black italic text-2xl underline decoration-4 underline-offset-4 hover:scale-105 transition-transform"
        style={{
          textDecorationColor: accentGreen,
          color: isDark ? "white" : "black",
        }}
      >
        ¡SECCIÓN DE EVENTOS!
      </Link>
    </div>
  </div>

  {/* PANEL DE ESTADO */}
  <div className="space-y-6">
    <div
      className={`relative p-8 border-4 rotate-1 ${isDark ? "bg-zinc-900/60" : "bg-white shadow-xl"}`}
      style={{
        borderColor: accentGreen,
        borderRadius: "20px 0px 20px 0px",
      }}
    >
      <div
        className="absolute -top-3 -right-3 w-12 h-12 rounded-full border-4 flex items-center justify-center font-black"
        style={{
          borderColor: accentGreen,
          backgroundColor: isDark ? "#18181b" : "white",
        }}
      >
        GO!
      </div>
      <h3 className="font-black italic text-xl tracking-widest mb-8 uppercase flex items-center gap-2">
        <span
          className="w-3 h-3 rounded-full animate-ping"
          style={{ backgroundColor: accentGreen }}
        ></span>
        Estado del Poder
      </h3>
      <ul className="space-y-8 font-black italic text-base">
        <li className="flex flex-col gap-2 border-b-2 border-zinc-800/20 pb-4">
          <div className="flex justify-between items-center">
            <span>IMPACTO VISUAL TERRESTRE</span>
            <span
              className="text-sm px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: accentGreen }}
            >
              ¡LISTO!
            </span>
          </div>
          <span className="text-xs opacity-60 uppercase tracking-widest font-mono">
            Diseños del Moodboard Desplegados
          </span>
        </li>
        <li className="flex flex-col gap-2 border-b-2 border-zinc-800/20 pb-4">
          <div className="flex justify-between items-center">
            <span>COMUNIDAD DIGITAL</span>
            <span
              className="text-sm px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: accentGreen }}
            >
              ¡ACTIVO!
            </span>
          </div>
          <span className="text-xs opacity-60 uppercase tracking-widest font-mono">
            Nivel de Ki en Redes: Máximo
          </span>
        </li>
        <li className="flex flex-col gap-2 border-b-2 border-zinc-800/20 pb-4">
          <div className="flex justify-between items-center">
            <span>TORNEO DE EVENTOS</span>
            <span
              className="text-sm px-3 py-1 rounded-full animate-bounce text-white"
              style={{ backgroundColor: accentGreen }}
            >
              ¡PRÓXIMAMENTE!
            </span>
          </div>
          <span className="text-xs opacity-60 uppercase tracking-widest font-mono">
            Consultar Sección de Eventos
          </span>
        </li>
      </ul>

      {/* BLOQUE DE PRESUPUESTO AÑADIDO */}
      <div className={`mt-8 p-4 border-2 border-dashed flex justify-between items-center ${isDark ? "bg-white/5 border-white/20" : "bg-black/5 border-black/20"}`}>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono opacity-60 uppercase">Inversión Total Marketing</span>
          <span className="text-2xl font-black italic">1.000€</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono opacity-60 uppercase block">Eficiencia</span>
          <span className="text-sm font-bold" style={{ color: accentGreen }}>100% OPTIMIZADO</span>
        </div>
      </div>

      <div className="mt-8 flex items-end gap-1 h-8">
        {[40, 70, 100, 85, 60, 95].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            className="w-3"
            style={{ backgroundColor: accentGreen }}
          />
        ))}
      </div>
    </div>
  </div>
</motion.section>

        {/* === SECCIÓN 03: ARQUITECTURA VISUAL Y PALETA === */}
        <motion.section
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center border-t border-zinc-800 pt-20"
        >
          {/* GRILLA DE COLORES CORPORATIVOS */}
          <div className="order-2 lg:order-1 relative">
            <div className="flex flex-wrap justify-center gap-2 skew-x-[-8deg] p-4 bg-zinc-950/50 border border-zinc-900 rounded-lg shadow-inner">
              <div
                className="group relative h-24 w-[calc(25%-8px)] min-w-[100px] border-2 flex flex-col items-center justify-end p-2 overflow-hidden shadow-[0_0_15px_-3px] shadow-green-900/30"
                style={{ backgroundColor: "#008012", borderColor: "#008012" }}
              >
                <div className="absolute inset-0 bg-white/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative font-black text-[10px] text-white italic leading-none">
                  #008012
                </span>
              </div>
              <div className="group relative h-24 w-[calc(25%-8px)] min-w-[100px] bg-[#0414ec] border-2 border-[#0414ec] flex flex-col items-center justify-end p-2 overflow-hidden shadow-[0_0_15px_-3px] shadow-blue-900/30">
                <div className="absolute inset-0 bg-white/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative font-black text-[10px] text-white italic leading-none">
                  #0414ec
                </span>
              </div>
              <div className="group relative h-24 w-[calc(25%-8px)] min-w-[100px] bg-[#fc0404] border-2 border-[#fc0404] flex flex-col items-center justify-end p-2 overflow-hidden shadow-[0_0_15px_-3px] shadow-red-900/30">
                <div className="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative font-black text-[10px] text-white italic leading-none">
                  #fc0404
                </span>
              </div>
              <div className="group relative h-24 w-[calc(25%-8px)] min-w-[100px] bg-[#F5F5DC] border-2 border-[#F5F5DC] flex flex-col items-center justify-end p-2 overflow-hidden">
                <div className="absolute inset-0 bg-black/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative font-black text-[10px] text-black/80 italic leading-none">
                  #F5F5DC
                </span>
              </div>
              <div className="group relative h-24 w-[calc(25%-8px)] min-w-[100px] bg-[#A07850] border-2 border-[#A07850] flex flex-col items-center justify-end p-2 overflow-hidden">
                <div className="absolute inset-0 bg-white/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative font-black text-[10px] text-white italic leading-none">
                  #A07850
                </span>
              </div>
              <div className="group relative h-24 w-[calc(25%-8px)] min-w-[100px] bg-white border-2 border-zinc-200 flex flex-col items-center justify-end p-2 overflow-hidden">
                <div className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative font-black text-[10px] text-zinc-900 italic leading-none">
                  #FFFFFF
                </span>
              </div>
              <div className="group relative h-24 w-[calc(25%-8px)] min-w-[100px] bg-black border-2 border-zinc-800 flex flex-col items-center justify-end p-2 overflow-hidden">
                <div className="absolute inset-0 bg-zinc-800/30 -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative font-black text-[10px] text-white italic leading-none">
                  #000000
                </span>
              </div>
              <div className="group relative h-24 w-[calc(25%-8px)] min-w-[100px] bg-[#333333] border-2 border-zinc-700 flex flex-col items-center justify-end p-2 overflow-hidden">
                <div className="absolute inset-0 bg-white/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative font-black text-[10px] text-white italic leading-none">
                  #333333
                </span>
              </div>
            </div>

            <div
              className="absolute -top-4 -right-4 w-10 h-10 border-r-4 border-t-4 opacity-30"
              style={{ borderColor: "#008012" }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-10 h-10 border-l-4 border-b-4 opacity-30"
              style={{ borderColor: "#008012" }}
            />
          </div>

          {/* CONTENIDO DE TEXTO DE IDENTIDAD */}
          <div className="order-1 lg:order-2 space-y-6 text-right">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
                Arquitectura <span style={{ color: "#008012" }}>Visual</span>
              </h2>
              <div className="h-1 w-24 bg-zinc-800 ml-auto flex">
                <div
                  className="h-full w-1/2"
                  style={{ backgroundColor: "#008012" }}
                ></div>
              </div>
            </div>

            <div
              className={`space-y-6 text-lg leading-relaxed font-medium ${isDark ? "text-zinc-300" : "text-zinc-700"}`}
            >
              <p>
                Nuestra identidad nace del espíritu de{" "}
                <span className="italic font-black">Afterbit</span>: una visión{" "}
                <span className="font-black italic">Pixel Retro</span> cruda que
                rinde culto a los 8 y 16 bits, capturando la esencia visceral
                del juego.
              </p>
              <p>
                <span
                  className="font-black uppercase italic"
                  style={{ color: "#008012" }}
                >
                  Super Rodolfo y las Esferas del Santo Reino
                </span>{" "}
                es un choque de titanes visual. Hemos fusionado el impacto
                visual y la energía del Dragon ball con el arte sacro del{" "}
                <span className="font-black">Santo Reino</span> de su época.
              </p>
              <p className="text-base border-r-4 pr-4 border-zinc-800 italic opacity-80">
                El resultado es algo único y épico: una iconografía medieval
                bañada en el aura de un Super Guerrero. Un choque entre lo
                divino y lo digital.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default PaginaMarketing;