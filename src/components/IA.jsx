import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const ChatIA = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [historial, setHistorial] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [isOffline, setIsOffline] = useState(false); // Nuevo estado para el error
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [historial, cargando]);

  const limpiarChat = () => setHistorial([]);

  const renderizarRespuesta = (texto) => {
    if (!texto)
      return "¡Hola! Soy la IA de Afterbit. \n\nPuedo ayudarte con info sobre David, sus proyectos o contacto.\n\n¿Qué deseas consultar?";

    const partes = texto.split(
      /(\/Proyectos\/[a-zA-Z0-9]+|\/Proyectos|\/Contacto|https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?|https:\/\/github\.com\/[a-zA-Z0-9-]+\/?|[a-zA-Z0-9._%+-]+@gmail\.com)/g,
    );

    return partes.map((parte, index) => {
      if (!parte) return null;
      if (parte.startsWith("/")) {
        let nombreVisible = parte.split("/").pop();
        return (
          <Link
            key={index}
            to={parte}
            onClick={() => setIsOpen(false)}
            className="text-blue-400 font-bold underline hover:text-blue-300 mx-1 transition-colors"
          >
            {nombreVisible}
          </Link>
        );
      }
      if (parte.includes("linkedin.com"))
        return (
          <a
            key={index}
            href={parte}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 font-bold underline hover:text-sky-400 mx-1"
          >
            LinkedIn
          </a>
        );
      if (parte.includes("github.com"))
        return (
          <a
            key={index}
            href={parte}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 font-bold underline hover:text-zinc-300 mx-1"
          >
            GitHub
          </a>
        );
      if (parte.includes("@gmail.com"))
        return (
          <a
            key={index}
            href={`mailto:${parte}`}
            className="text-rose-400 font-bold underline hover:text-rose-300 mx-1"
          >
            {parte}
          </a>
        );
      return parte;
    });
  };

  const enviarPregunta = async () => {
    if (!mensaje.trim()) return;
    const preguntaUsuario = mensaje;
    setHistorial((prev) => [...prev, { rol: "user", texto: preguntaUsuario }]);
    setMensaje("");
    setCargando(true);

    const apiKey =
      import.meta.env.VITE_CLAVE_CHAT_IA || import.meta.env.VITE_GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
    try {
      // PROMPT ORIGINAL INTACTO (No se toca)
      const promptSistema = `Eres el asistente de Afterbit, el portfolio de David Jiménez.

PERFIL Y AFTERBIT:
- David Jiménez: 23 años, Programador Web Junior con título DAW y cursando la especialización en Videojuegos y VR.
- ¿Qué es Afterbit?: Es un sitio que reúne todos los proyectos de su curso de especialización junto con su proyecto integral final. Es el espacio donde David muestra su trayectoria técnica y creativa.

CONTACTO (David o Jefe):
- Responde: "Para contactar con él es sencillo: ve a la página de /Contacto y escríbele un correo o, si prefieres, escríbele directamente a davidjimenezvillena@gmail.com. También puedes encontrarlo en su LinkedIn (https://www.linkedin.com/in/david-jimenez-villena/) o revisar sus proyectos en GitHub (https://github.com/djsekai34)".

REGLAS PARA PROYECTOS:
1. SI PREGUNTAN POR PROYECTOS EN GENERAL:
   Responde exactamente:
   "Los proyectos disponibles en Afterbit son:
   - Pixel Metroid 2D: Es un proyecto de plataformas estilo metroidvania para aprender Unity (/Proyectos/PixelMetroid2D).
   - Super Rodolfo y las esferas del santo reino: Es un proyecto integral final de especialización (/Proyectos/SuperRodolfo).
   - Super Rodolfo Strike: Spinoff de la saga Super Rodolfo donde jugamos a los bolos (/Proyectos/SuperRodolfoStrike).
   - XR Adventure: Es un proyecto colaborativo de Realidad Extendida que carga contenido desde la nube con Pokémon interactivos (/Proyectos/XRAdventure).
   Si desea ver los demás proyectos, diríjase a /Proyectos."

2. SI PREGUNTAN POR UNO ESPECÍFICO (Rodolfo, Metroid, XR o Strike):
   - Empieza: "[Nombre Completo]: Es un proyecto de David..." (o "proyecto colaborativo" si es XR Adventure).
   - Detalla lo técnico: Pixel Metroid (físicas Unity), Super Rodolfo (final de curso, GDD, guion), Super Rodolfo Strike (uso de la clase touch screen y botones personalizados), XR Adventure (colaborativo, Pokémon, carga desde la nube).
   - Incluye siempre su ruta entre paréntesis: (/Proyectos/Nombre).
   - Termina: "Si desea ver los demás proyectos, diríjase a /Proyectos."

REGLAS DE ORO:
- Prohibido inventar datos.
- Usa siempre las rutas y URLs exactas proporcionadas.
- En la frase de GitHub usa siempre: "revisar sus proyectos en GitHub".
- Máximo 3-4 frases. Sé muy directo.`;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: `${promptSistema}\n\nPregunta: ${preguntaUsuario}` },
              ],
            },
          ],
        }),
      });

      const data = await response.json();

      // CONTROL DE ERRORES (Traído de vuelta)
      if (response.status === 429) {
        setIsOffline(true);
        setHistorial((prev) => [
          ...prev,
          { rol: "ai", texto: "Lo siento, he recibido demasiadas consultas. Por favor, inténtalo de nuevo en un minuto." },
        ]);
        return;
      }

      if (data.candidates && data.candidates[0].content) {
        setIsOffline(false); // Si funciona, vuelve a online
        setHistorial((prev) => [
          ...prev,
          { rol: "ai", texto: data.candidates[0].content.parts[0].text },
        ]);
      }
    } catch (error) {
      setIsOffline(true);
      setHistorial((prev) => [
        ...prev,
        { rol: "ai", texto: "Error de conexión." },
      ]);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] font-sans">
      <div className="relative group">
        {!isOpen && (
          <span className="absolute inset-0 rounded-2xl bg-blue-500/40 animate-ping pointer-events-none"></span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90 border-2 ${
            isDark
              ? "bg-zinc-900 border-zinc-700 text-white hover:border-blue-500 shadow-blue-500/20"
              : "bg-white border-zinc-200 text-black hover:border-blue-500 shadow-xl"
          }`}
        >
          <span
            className={`text-2xl transition-transform duration-500 ${isOpen ? "rotate-90" : "group-hover:rotate-12"}`}
          >
            {isOpen ? "✕" : "🤖"}
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          className={`absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[360px] md:w-[400px] h-[500px] max-h-[75vh] rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-2 backdrop-blur-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-500 ${
            isDark
              ? "bg-zinc-950/90 border-zinc-800 text-zinc-100"
              : "bg-white/95 border-zinc-100 text-zinc-900"
          }`}
        >
          <div className="px-6 py-5 border-b border-zinc-500/10 flex justify-between items-center bg-gradient-to-r from-transparent via-blue-500/5 to-transparent">
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* Lógica de la luz parpadeante apagada si es Offline */}
                <div className={`w-2.5 h-2.5 rounded-full ${isOffline ? "bg-zinc-600" : "bg-green-500"}`}></div>
                {!isOffline && (
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-60"></div>
                )}
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-black tracking-[0.25em] uppercase opacity-40">
                  Status: {isOffline ? "Offline" : "Online"}
                </span>
                <span className="text-xs font-black italic uppercase tracking-tighter">
                  Afterbit_IA
                </span>
              </div>
            </div>
            <button
              onClick={limpiarChat}
              className="p-2 hover:bg-rose-500/10 rounded-lg transition-colors group"
            >
              <span className="text-[10px] font-bold text-rose-500 opacity-40 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                Limpiar
              </span>
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-hide scroll-smooth"
          >
            {historial.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center space-y-4 px-4">
                <p className="text-center opacity-40 italic text-xs leading-relaxed max-w-[200px]">
                  {renderizarRespuesta("")}
                </p>
              </div>
            )}
            {historial.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.rol === "user" ? "items-end" : "items-start animate-in fade-in slide-in-from-left-2 duration-300"}`}
              >
                <div
                  className={`p-4 rounded-[1.5rem] max-w-[90%] text-xs md:text-sm leading-relaxed shadow-sm transition-all ${
                    msg.rol === "user"
                      ? "bg-blue-600 text-white rounded-tr-none shadow-blue-600/20"
                      : isDark
                        ? "bg-zinc-800/80 border border-zinc-700/50 rounded-tl-none"
                        : "bg-zinc-100 rounded-tl-none border border-zinc-200/50"
                  }`}
                >
                  <div className="whitespace-pre-wrap">
                    {renderizarRespuesta(msg.texto)}
                  </div>
                </div>
              </div>
            ))}
            {cargando && (
              <div className="flex flex-col items-start animate-pulse">
                <div
                  className={`p-4 rounded-[1.5rem] rounded-tl-none ${isDark ? "bg-zinc-800/50" : "bg-zinc-100"}`}
                >
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-gradient-to-t from-zinc-500/5 to-transparent border-t border-zinc-500/10">
            <div className="relative group">
              <input
                type="text"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && enviarPregunta()}
                disabled={isOffline} // Bloquea input si está offline para evitar spam
                placeholder={isOffline ? "Sistema saturado..." : "Escribe tu consulta aquí..."}
                className={`w-full p-4 pr-14 rounded-2xl text-xs md:text-sm outline-none transition-all duration-300 border-2 ${
                  isDark
                    ? "bg-zinc-900 border-zinc-800 focus:border-blue-500/50 text-white placeholder:text-zinc-600"
                    : "bg-white border-zinc-200 focus:border-blue-500 text-black shadow-inner"
                } ${isOffline ? "opacity-50 cursor-not-allowed" : ""}`}
              />
              <button
                onClick={enviarPregunta}
                disabled={isOffline}
                className={`absolute right-2.5 top-2.5 w-10 h-10 text-white rounded-xl transition-all active:scale-90 flex items-center justify-center shadow-lg ${
                  isOffline ? "bg-zinc-600 shadow-none cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 shadow-blue-600/20"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center mt-3 gap-1 opacity-50 transition-opacity hover:opacity-80">
               <p className="text-[8px] uppercase tracking-[0.3em] font-black">
                 Afterbit IA System 
               </p>
               <span className="text-[7px] font-bold uppercase tracking-widest">
                 Powered by <span className="text-blue-500">Gemini</span>
               </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatIA;