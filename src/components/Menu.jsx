import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import AfterbitLogo from "../Imagenes/Afterbit_sin_fondo.png";
import { mapaWeb } from "../data/mapaweb";

export default function Barra({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuDirection, setSubMenuDirection] = useState("left-full");
  const rodolfoRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // --- LÓGICA DE BÚSQUEDA ---
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const sugerencias =
    searchQuery.trim() === ""
      ? []
      : mapaWeb
          .filter((item) => {
            const query = searchQuery.toLowerCase();
            return (
              item.label.toLowerCase().includes(query) ||
              item.tags.some((tag) => tag.toLowerCase().includes(query))
            );
          })
          .slice(0, 6);

  // --- MANEJADORES DE EVENTOS ---
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenu = () => {
    setIsOpen(false);
    setSearchQuery("");
    setShowSuggestions(false);
    // CRÍTICO: Evita zoom persistente en iOS al cerrar menús
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const toggleDarkMode = () => setIsDark(!isDark);

  const handleMouseEnter = () => {
    if (rodolfoRef.current) {
      const rect = rodolfoRef.current.getBoundingClientRect();
      setSubMenuDirection(
        window.innerWidth - rect.right < 300
          ? "right-full mr-[2px]"
          : "left-full ml-[2px]"
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    document.documentElement.style.backgroundColor = isDark ? "#000000" : "#ffffff";
  }, [isDark]);

  // --- ESTILOS COMPARTIDOS ---
  const linkStyles = `relative block py-2 font-bold uppercase tracking-widest text-sm transition-all duration-300 whitespace-nowrap
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:transition-all after:duration-300
    hover:after:w-full ${isDark ? "text-white after:bg-white" : "text-black after:bg-black"}`;

  const dropdownItemStyles = `w-full text-left py-4 px-6 flex justify-between items-center transition-all uppercase font-black text-xs ${
    isDark ? "text-white hover:bg-white hover:text-black" : "text-black hover:bg-black hover:text-white"
  }`;

  return (
    <nav ref={menuRef} className={`fixed w-full z-[100] top-0 left-0 shadow-md transition-colors duration-500 ${isDark ? "!bg-black" : "!bg-white"}`}>
      <div className="container mx-auto px-6 lg:px-8 py-4 flex justify-between items-center h-[95px]">
        
        {/* SECCIÓN: LOGO */}
        <div className="flex-shrink-0">
          <Link to="/" onClick={closeMenu}>
            <img src={AfterbitLogo} alt="Afterbit logo" className="h-28 sm:h-32 md:h-35 lg:h-36 w-auto mt-3 hover:scale-105 transition-transform cursor-pointer" />
          </Link>
        </div>

        {/* SECCIÓN: NAVEGACIÓN PRINCIPAL */}
        <ul className={`flex flex-col lg:flex-row items-center lg:gap-4 xl:gap-10 absolute lg:static left-0 w-full lg:w-auto transition-all duration-500 ease-in-out
          ${isOpen ? "top-[95px] opacity-100 p-8" : "top-[-800px] opacity-0 lg:opacity-100"}
          ${isDark ? "bg-black" : "bg-white"} lg:bg-transparent`}>
          
          {/* COMPONENTE: BUSCADOR (Ajustado para tablets y Opera GX) */}
          <li className="relative py-2 lg:py-0 lg:mr-1 xl:mr-6" ref={searchRef}>
            <div className={`flex items-center group border-b-2 transition-all duration-300 lg:w-[150px] xl:w-[220px] focus-within:lg:w-[190px] focus-within:xl:w-[260px] ${isDark ? "border-white/30 focus-within:border-white shadow-[0_1px_0_0_rgba(255,255,255,0.1)]" : "border-black/30 focus-within:border-black shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"}`}>
              <span className={`font-mono text-[12px] font-black px-2 transition-all duration-300 ${searchQuery || showSuggestions ? "opacity-100 scale-110" : "opacity-50"} ${isDark ? "text-white" : "text-black"}`}>
                {">"}
              </span>
              <input
                type="text"
                placeholder="BUSCAR..."
                value={searchQuery}
                onFocus={() => setShowSuggestions(true)}
                onChange={(e) => { setSearchQuery(e.target.value); setShowSuggestions(true); }}
                className={`w-full bg-transparent font-mono text-[16px] lg:text-[10px] xl:text-[11px] font-bold tracking-[0.15em] outline-none py-2 uppercase scale-90 lg:scale-100 origin-left ${isDark ? "text-white placeholder-white/40" : "text-black placeholder-black/40"}`}
              />
            </div>

            {/* SUGERENCIAS DEL BUSCADOR (SOLO LABELS) */}
            {showSuggestions && sugerencias.length > 0 && (
              <ul className={`absolute top-[110%] left-0 w-72 mt-2 border-2 shadow-[0_25px_60px_rgba(0,0,0,0.4)] z-[120] backdrop-blur-md ${isDark ? "bg-black/95 border-white" : "bg-white/95 border-black"}`}>
                {sugerencias.map((s, i) => (
                  <li key={i} className={`border-b last:border-0 ${isDark ? "border-white/10" : "border-black/10"}`}>
                    <button 
                      onClick={() => { navigate(s.path); closeMenu(); }} 
                      className={`w-full text-left p-5 flex items-center transition-all group/item ${isDark ? "hover:bg-white" : "hover:bg-black"}`}
                    >
                      <span className={`font-black text-[11px] tracking-wider uppercase transition-colors ${isDark ? "text-white group-hover/item:text-black" : "text-black group-hover/item:text-white"}`}>
                        {s.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link to="/" className={linkStyles} onClick={closeMenu}>Inicio</Link></li>

          {/* SECCIÓN: DROPDOWN PROYECTOS */}
          <li className="relative group py-2">
            <Link to="/Proyectos" onClick={closeMenu} className="group">
              <button className={`font-bold uppercase tracking-widest text-sm flex items-center gap-2 whitespace-nowrap ${isDark ? "text-white" : "text-black"}`}>
                Proyectos
                <span className="text-[12px] group-hover:rotate-180 transition-transform duration-300 pointer-events-none hidden lg:block [@media(pointer:coarse)]:!hidden">↓</span>
              </button>
            </Link>
            
            <ul className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 top-[100%] pt-2 min-w-[320px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col z-[110]">
              {/* SUBMENU: SUPER RODOLFO */}
              <li ref={rodolfoRef} onMouseEnter={handleMouseEnter} className={`border-2 ${isDark ? "border-white bg-black" : "border-black bg-white"} relative group/rodolfo`}>
                <Link to="/Proyectos/SuperRodolfo" className={dropdownItemStyles} onClick={closeMenu}>
                  <span className="max-w-[220px]">SUPER RODOLFO Y LAS ESFERAS DEL SANTO REINO</span>
                  <span className="text-lg">{subMenuDirection.includes("right-full") ? "←" : "→"}</span>
                </Link>
                <ul className={`absolute top-[-2px] ${subMenuDirection} min-w-[280px] max-h-[80vh] overflow-y-auto invisible group-hover/rodolfo:visible opacity-0 group-hover/rodolfo:opacity-100 transition-all border-2 ${isDark ? "border-white bg-black" : "border-black bg-white"}`}>
                  {mapaWeb.filter((i) => i.path.includes("SuperRodolfo/")).map((p, idx) => (
                    <li key={idx} className="border-b border-zinc-500/30 last:border-0">
                      <Link to={p.path} className={dropdownItemStyles} onClick={closeMenu}>{p.label.toUpperCase()}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              {/* OTROS PROYECTOS */}
              <li className={`border-2 border-t-0 ${isDark ? "border-white bg-black" : "border-black bg-white"}`}><Link to="/Proyectos/SuperRodolfoStrike" className={dropdownItemStyles} onClick={closeMenu}>Super Rodolfo Strike</Link></li>
              <li className={`border-2 border-t-0 ${isDark ? "border-white bg-black" : "border-black bg-white"}`}><Link to="/Proyectos/PixelMetroid2D" className={dropdownItemStyles} onClick={closeMenu}>Pixel Metroid 2D</Link></li>
              <li className={`border-2 border-t-0 ${isDark ? "border-white bg-black" : "border-black bg-white"}`}><Link to="/Proyectos/XRAdventure" className={dropdownItemStyles} onClick={closeMenu}>XR Adventure</Link></li>
            </ul>
          </li>

          <li><Link to="/Eventos" className={linkStyles} onClick={closeMenu}>Eventos</Link></li>
          <li><Link to="/SobreMi" className={linkStyles} onClick={closeMenu}>Sobre mí</Link></li>
          <li><Link to="/Contacto" className={linkStyles} onClick={closeMenu}>Contacto</Link></li>

          {/* BOTÓN DARK MODE AJUSTADO */}
          <li className="lg:ml-2">
            <button onClick={() => { toggleDarkMode(); closeMenu(); }} className={`py-2 px-4 xl:px-6 font-black uppercase italic tracking-tighter border-2 transition-all transform hover:scale-110 active:scale-95 text-xs xl:text-sm whitespace-nowrap ${isDark ? "bg-white text-black border-white" : "bg-black text-white border-black"}`}>
              {isDark ? "Claro" : "Oscuro"}
            </button>
          </li>
        </ul>

        {/* SECCIÓN: HAMBURGUESA MÓVIL */}
        <button className="lg:hidden flex flex-col gap-1.5" onClick={toggleMenu}>
          <span className={`w-8 h-1 transition-all ${isDark ? "bg-white" : "bg-black"} ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
          <span className={`w-8 h-1 transition-all ${isDark ? "bg-white" : "bg-black"} ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-8 h-1 transition-all ${isDark ? "bg-white" : "bg-black"} ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
        </button>
      </div>
    </nav>
  );
}