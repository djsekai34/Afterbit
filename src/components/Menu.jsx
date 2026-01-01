import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AfterbitLogo from "../Imagenes/Afterbit_sin_fondo.png";

export default function Barra({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);

  // --- MANEJADORES DE ESTADO ---
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleDarkMode = () => setIsDark(!isDark);

  // --- EFECTO DE FONDO DEL BODY ---
  useEffect(() => {
    document.documentElement.style.backgroundColor = isDark
      ? "#000000"
      : "#ffffff";
  }, [isDark]);

  // --- ESTILOS REUTILIZABLES ---
  const linkStyles = `relative block py-2 font-bold uppercase tracking-widest text-sm transition-all duration-300
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:transition-all after:duration-300
    hover:after:w-full ${
      isDark ? "text-white after:bg-white" : "text-black after:bg-black"
    }`;

  const dropdownItemStyles = `w-full text-left py-4 px-6 flex justify-between items-center transition-all uppercase font-black text-xs ${
    isDark
      ? "text-white hover:bg-white hover:text-black"
      : "text-black hover:bg-black hover:text-white"
  }`;

  return (
    <nav
      className={`fixed w-full z-[100] top-0 left-0 shadow-md transition-colors duration-500 ${
        isDark ? "!bg-black" : "!bg-white"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 py-4 flex justify-between items-center h-[95px]">
        
        {/* --- LOGOTIPO --- */}
        <div className="flex-shrink-0">
          <Link to="/" onClick={closeMenu}>
            <img
              src={AfterbitLogo}
              alt="Afterbit logo"
              className="h-28 sm:h-32 md:h-35 lg:h-36 w-auto mt-3 transition-transform duration-500 hover:scale-105 cursor-pointer"
            />
          </Link>
        </div>

        {/* --- MENÚ DE NAVEGACIÓN --- */}
        <ul
          className={`flex flex-col lg:flex-row items-center lg:gap-10 absolute lg:static left-0 w-full lg:w-auto transition-all duration-500 ease-in-out
            ${
              isOpen
                ? "top-[95px] opacity-100 p-8"
                : "top-[-500px] opacity-0 lg:opacity-100"
            }
            ${isDark ? "bg-black" : "bg-white"} lg:bg-transparent`}
        >
          <li>
            <Link to="/" className={linkStyles} onClick={closeMenu}>
              Inicio
            </Link>
          </li>

          {/* DROPDOWN: PROYECTOS */}
          <li className="relative group py-2">
            <Link to="/Proyectos" className="group" onClick={closeMenu}>
              <button
                className={`font-bold uppercase tracking-widest bg-transparent border-none outline-none cursor-pointer text-sm flex items-center gap-2 transition-all hover:opacity-70 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Proyectos{" "}
                <span className="text-[12px] transition-transform group-hover:rotate-180 hidden lg:inline">
                  ↓
                </span>
              </button>
            </Link>

            {/* SUBMENÚ PRINCIPAL */}
            <ul className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 top-[100%] pt-2 min-w-[320px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col z-[110]">
              
              {/* SUB-SUBMENÚ: SUPER RODOLFO */}
              <li
                className={`border-2 ${
                  isDark ? "border-white bg-black" : "border-black bg-white"
                } relative group/rodolfo`}
              >
                <Link to="/Proyectos/SuperRodolfo" className={dropdownItemStyles} onClick={closeMenu}>
                  <span className="max-w-[220px]">SUPER RODOLFO Y LAS ESFERAS DEL SANTO REINO</span>
                  <span className="text-lg leading-none ml-4">→</span>
                </Link>

                <ul
                  className={`absolute top-[-2px] left-full ml-[2px] min-w-[280px] invisible group-hover/rodolfo:visible opacity-0 group-hover/rodolfo:opacity-100 transition-all duration-300 flex flex-col border-2 ${
                    isDark ? "border-white bg-black" : "border-black bg-white"
                  }`}
                >
                  <li className="border-b border-zinc-500/30">
                    <Link to="/Proyectos/SuperRodolfo/ConceptoyObjetivos" className={dropdownItemStyles} onClick={closeMenu}>
                      01. CONCEPTOS Y OBJETIVOS
                    </Link>
                  </li>
                  <li className="border-b border-zinc-500/30">
                    <Link to="/Proyectos/SuperRodolfo/AnalisisyPreproduccion" className={dropdownItemStyles} onClick={closeMenu}>
                      02. ANALISIS Y PREPRODUCCION
                    </Link>
                  </li>
                  <li className="border-b border-zinc-500/30">
                    <Link to="/Proyectos/SuperRodolfo/GuionyNarrativa" className={dropdownItemStyles} onClick={closeMenu}>
                      03. GUION Y NARRATIVA
                    </Link>
                  </li>
                  <li className="border-b border-zinc-500/30">
                    <Link to="/Proyectos/SuperRodolfo/MecanicasyExperiencias" className={dropdownItemStyles} onClick={closeMenu}>
                      04. MECANICAS Y EXPERIENCIAS
                    </Link>
                  </li>
                  <li className="border-b border-zinc-500/30">
                    <Link to="/Proyectos/SuperRodolfo/EstadosDelVideojuego" className={dropdownItemStyles} onClick={closeMenu}>
                      05. ESTADOS DEL VIDEOJUEGO
                    </Link>
                  </li>
                  <li className="border-b border-zinc-500/30">
                    <Link to="/Proyectos/SuperRodolfo/InterfazyUI" className={dropdownItemStyles} onClick={closeMenu}>
                      06. INTERFAZ Y UI
                    </Link>
                  </li>
                  <li className="border-b border-zinc-500/30">
                    <Link to="/Proyectos/SuperRodolfo/Sonido" className={dropdownItemStyles} onClick={closeMenu}>
                      07. SONIDO
                    </Link>
                  </li>
                  <li>
                    <Link to="/Proyectos/SuperRodolfo/ProduccionyArquitectura" className={dropdownItemStyles} onClick={closeMenu}>
                      08. PRODUCCION Y ARQUITECTURA
                    </Link>
                  </li>
                </ul>
              </li>

              {/* OTROS PROYECTOS */}
              <li
                className={`border-2 border-t-0 ${
                  isDark ? "border-white bg-black" : "border-black bg-white"
                }`}
              >
                <Link to="/Proyectos/PixelMetroid2D" className={dropdownItemStyles} onClick={closeMenu}>
                  Pixel Metroid 2D
                </Link>
              </li>

              <li
                className={`border-2 border-t-0 ${
                  isDark ? "border-white bg-black" : "border-black bg-white"
                }`}
              >
                <Link to="/Proyectos/XRAdventure" className={dropdownItemStyles} onClick={closeMenu}>
                  XR Adventure
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/SobreMi" className={linkStyles} onClick={closeMenu}>Sobre mí</Link>
          </li>
          <li>
            <Link to="/Contacto" className={linkStyles} onClick={closeMenu}>Contacto</Link>
          </li>

          {/* BOTÓN DARK MODE */}
          <li className="lg:ml-6">
            <button
              onClick={() => { toggleDarkMode(); closeMenu(); }}
              className={`py-2 px-6 font-black uppercase italic tracking-tighter border-2 transition-all duration-300 text-sm transform hover:scale-110 active:scale-95 ${
                isDark
                  ? "bg-white text-black border-white"
                  : "bg-black text-white border-black"
              }`}
            >
              {isDark ? "Claro" : "Oscuro"}
            </button>
          </li>
        </ul>

        {/* --- BOTÓN HAMBURGUESA (MÓVIL) --- */}
        <button className="lg:hidden flex flex-col gap-1.5" onClick={toggleMenu}>
          <span className={`w-8 h-1 transition-all ${isDark ? "bg-white" : "bg-black"} ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
          <span className={`w-8 h-1 transition-all ${isDark ? "bg-white" : "bg-black"} ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-8 h-1 transition-all ${isDark ? "bg-white" : "bg-black"} ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
        </button>
      </div>
    </nav>
  );
}