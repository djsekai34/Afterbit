import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const ChatIA = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [historial, setHistorial] = useState([]);
  const [cargando, setCargando] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [historial, cargando]);

  const limpiarChat = () => {
    setHistorial([]);
  };

  const renderizarRespuesta = (texto) => {
    if (!texto)
      return "¡Hola! Soy la IA de Afterbit. 🤖\n\nPuedo ayudarte con:\n• Información sobre David (creador) y su perfiles.\n• Datos de contacto y redes sociales.\n• Detalles de todos los Proyectos o uno en concreto.\n\n¿Qué deseas consultar?";

    const partes = texto.split(
      /(\/Proyectos\/[a-zA-Z0-9]+|\/Proyectos|\/Contacto|https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?|https:\/\/github\.com\/[a-zA-Z0-9-]+\/?|[a-zA-Z0-9._%+-]+@gmail\.com)/g,
    );

    return partes.map((parte, index) => {
      if (!parte) return null;

      if (parte.startsWith("/")) {
        let nombreVisible = parte;
        if (parte.includes("SuperRodolfo")) nombreVisible = "Super Rodolfo";
        if (parte.includes("PixelMetroid2D"))
          nombreVisible = "Pixel Metroid 2D";
        if (parte.includes("XRAdventure")) nombreVisible = "XR Adventure";
        if (parte === "/Proyectos") nombreVisible = "Proyectos";
        if (parte === "/Contacto") nombreVisible = "Contacto";

        return (
          <Link
            key={index}
            to={parte}
            onClick={() => setIsOpen(false)}
            className="text-blue-400 font-bold underline hover:text-blue-300 mx-1"
          >
            {nombreVisible}
          </Link>
        );
      }

      if (parte.includes("linkedin.com")) {
        return (
          <a
            key={index}
            href={parte}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-bold underline hover:text-blue-400 mx-1"
          >
            LinkedIn
          </a>
        );
      }

      if (parte.includes("github.com")) {
        return (
          <a
            key={index}
            href={parte}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 font-bold underline hover:text-gray-300 mx-1"
          >
            GitHub
          </a>
        );
      }

      if (parte.includes("@gmail.com")) {
        return (
          <a
            key={index}
            href={`mailto:${parte}`}
            className="text-red-400 font-bold underline hover:text-red-300 mx-1"
          >
            {parte}
          </a>
        );
      }

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
      const promptSistema = `Eres el asistente de Afterbit, el portfolio de David Jiménez.

PERFIL Y AFTERBIT:
- David Jiménez: 22 años, Programador Web Junior con título DAW y cursando la especialización en Videojuegos y VR.
- ¿Qué es Afterbit?: Es un sitio que reúne todos los proyectos de su curso de especialización junto con su proyecto integral final. Es el espacio donde David muestra su trayectoria técnica y creativa.

CONTACTO (David o Jefe):
- Responde: "Para contactar con él es sencillo: ve a la página de /Contacto y escríbele un correo o, si prefieres, escríbele directamente a davidjimenezvillena@gmail.com. También puedes encontrarlo en su LinkedIn (https://www.linkedin.com/in/david-jimenez-villena/) o revisar sus proyectos en GitHub (https://github.com/djsekai34)".

REGLAS PARA PROYECTOS:
1. SI PREGUNTAN POR PROYECTOS EN GENERAL:
   Responde exactamente:
   "Los proyectos disponibles en Afterbit son:
   - Pixel Metroid 2D: Es un proyecto de plataformas estilo metroidvania para aprender Unity (/Proyectos/PixelMetroid2D).
   - Super Rodolfo y las esferas del santo reino: Es un proyecto integral final de especialización (/Proyectos/SuperRodolfo).
   - XR Adventure: Es un proyecto colaborativo de Realidad Extendida que carga contenido desde la nube con Pokémon interactivos (/Proyectos/XRAdventure).
   Si desea ver los demás proyectos, diríjase a /Proyectos."

2. SI PREGUNTAN POR UNO ESPECÍFICO (Rodolfo, Metroid o XR):
   - Empieza: "[Nombre Completo]: Es un proyecto de David..." (o "proyecto colaborativo" si es XR Adventure).
   - Detalla lo técnico: Pixel Metroid (físicas Unity), Super Rodolfo (final de curso, GDD, guion), XR Adventure (colaborativo, Pokémon, carga desde la nube).
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

      if (response.status === 429) {
        const ahora = new Date();
        ahora.setMinutes(ahora.getMinutes() + 1);
        const horaLibre = ahora.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        setHistorial((prev) => [
          ...prev,
          {
            rol: "ai",
            texto: `Hola soy un modelo gratuito me has preguntado mucho ahora no te puedo responder hasta las ${horaLibre} mas o menos no es exacto.\n\nTe invito a explorar la pagina /Proyectos.`,
          },
        ]);
        return;
      }

      if (data.candidates && data.candidates[0].content) {
        setHistorial((prev) => [
          ...prev,
          { rol: "ai", texto: data.candidates[0].content.parts[0].text },
        ]);
      }
    } catch (error) {
      setHistorial((prev) => [
        ...prev,
        { rol: "ai", texto: "Error de conexión. Inténtalo de nuevo." },
      ]);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
          isDark ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {isOpen ? "✕" : "🤖"}
      </button>

      {isOpen && (
        <div
          className={`absolute bottom-20 right-0 w-[340px] rounded-3xl shadow-2xl border backdrop-blur-lg animate-in slide-in-from-bottom-4 duration-300 overflow-hidden ${
            isDark
              ? "bg-gray-900/95 border-gray-700 text-white"
              : "bg-white/95 border-gray-200 text-black"
          }`}
        >
          <div className="p-4 border-b border-gray-500/10 bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">
                Afterbit AI
              </span>
            </div>
            {historial.length > 0 && (
              <button
                onClick={limpiarChat}
                className="text-[10px] font-bold uppercase tracking-tighter bg-red-500/20 hover:bg-red-500/40 text-red-500 px-2 py-1 rounded-md transition-all border border-red-500/30"
              >
                🗑️ Borrar
              </button>
            )}
          </div>

          <div
            ref={scrollRef}
            className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-hide"
          >
            {historial.length === 0 && (
              <div className="text-left opacity-40 text-xs mt-10 italic px-4 whitespace-pre-wrap">
                {renderizarRespuesta("")}
              </div>
            )}
            {historial.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.rol === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] text-sm shadow-sm ${
                    msg.rol === "user"
                      ? "bg-blue-600 text-white rounded-tr-none"
                      : isDark
                        ? "bg-gray-800 text-gray-100 rounded-tl-none border border-gray-700"
                        : "bg-gray-100 text-black rounded-tl-none"
                  }`}
                >
                  <div className="whitespace-pre-wrap">
                    {renderizarRespuesta(msg.texto)}
                  </div>
                </div>
              </div>
            ))}
            {cargando && (
              <div className="flex justify-start">
                <div
                  className={`p-3 rounded-2xl rounded-tl-none ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
                >
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white/5 border-t border-gray-500/10 flex gap-2">
            <input
              type="text"
              value={mensaje}
              onKeyDown={(e) => e.key === "Enter" && enviarPregunta()}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Pregunta al sistema..."
              className={`flex-1 text-sm p-3 rounded-xl outline-none border transition-all ${
                isDark
                  ? "bg-gray-800 border-gray-700 focus:border-blue-500 text-white"
                  : "bg-gray-50 border-gray-200 focus:border-blue-400 text-black"
              }`}
            />
            <button
              onClick={enviarPregunta}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all active:scale-90"
            >
              ➔
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatIA;
