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

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(false);
    setSearchQuery("");
    setShowSuggestions(false);
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
          : "left-full ml-[2px]",
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

  const linkStyles = `relative block py-2 font-bold uppercase tracking-widest text-sm transition-all duration-300 whitespace-nowrap
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:transition-all after:duration-300
    hover:after:w-full ${isDark ? "text-white after:bg-white" : "text-black after:bg-black"}`;

  const dropdownItemStyles = `w-full text-left py-4 px-6 flex justify-between items-center transition-all uppercase font-black text-xs ${
    isDark ? "text-white hover:bg-white hover:text-black" : "text-black hover:bg-black hover:text-white"
  }`;

  return (
    <nav ref={menuRef} className={`fixed w-full z-[100] top-0 left-0 shadow-md transition-colors duration-500 ${isDark ? "!bg-black" : "!bg-white"}`}>
      <div className="container mx-auto px-6 lg:px-8 py-4 flex justify-between items-center h-[95px]">
        <div className="flex-shrink-0">
          <Link to="/" onClick={closeMenu}>
            <img src={AfterbitLogo} alt="Afterbit logo" className="h-28 sm:h-32 md:h-35 lg:h-36 w-auto mt-3 hover:scale-105 transition-transform cursor-pointer" />
          </Link>
        </div>

        <ul className={`flex flex-col lg:flex-row items-center lg:gap-4 xl:gap-10 absolute lg:static left-0 w-full lg:w-auto transition-all duration-500 ease-in-out
          ${isOpen ? "top-[95px] opacity-100 p-8" : "top-[-800px] opacity-0 lg:opacity-100"}
          ${isDark ? "bg-black" : "bg-white"} lg:bg-transparent`}
        >
          {/* BUSCADOR */}
          <li className="relative py-2 lg:py-0 lg:mr-1 xl:mr-6" ref={searchRef}>
            <div className={`flex items-center group border-b-2 transition-all duration-300 w-[140px] lg:w-[130px] xl:w-[200px] xl:focus-within:w-[240px] 
              ${isDark ? "border-white/30 focus-within:border-white shadow-[0_1px_0_0_rgba(255,255,255,0.1)]" : "border-black/30 focus-within:border-black shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"}`}>
              <span className={`font-mono text-[12px] font-black px-2 transition-all duration-300 ${searchQuery || showSuggestions ? "opacity-100 scale-110" : "opacity-50"} ${isDark ? "text-white" : "text-black"}`}>
                {">"}
              </span>
              <input
                type="text" placeholder="BUSCAR..." value={searchQuery}
                onFocus={() => setShowSuggestions(true)}
                onChange={(e) => { setSearchQuery(e.target.value); setShowSuggestions(true); }}
                className={`w-full bg-transparent font-mono text-[16px] lg:text-[9px] xl:text-[11px] font-bold tracking-[0.1em] outline-none py-2 uppercase scale-90 lg:scale-100 origin-left ${isDark ? "text-white placeholder-white/40" : "text-black placeholder-black/40"}`}
              />
            </div>
            {showSuggestions && sugerencias.length > 0 && (
              <ul className={`absolute top-[110%] left-0 w-64 mt-2 border-2 shadow-[0_25px_60px_rgba(0,0,0,0.4)] z-[120] backdrop-blur-md ${isDark ? "bg-black/95 border-white" : "bg-white/95 border-black"}`}>
                {sugerencias.map((s, i) => (
                  <li key={i} className={`border-b last:border-0 ${isDark ? "border-white/10" : "border-black/10"}`}>
                    <button onClick={() => { navigate(s.path); closeMenu(); }} className={`w-full text-left p-4 flex items-center transition-all group/item ${isDark ? "hover:bg-white" : "hover:bg-black"}`}>
                      <span className={`font-black text-[10px] tracking-wider uppercase transition-colors ${isDark ? "text-white group-hover/item:text-black" : "text-black group-hover/item:text-white"}`}>
                        {s.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* INICIO */}
          <li><Link to="/" className={linkStyles} onClick={closeMenu}>Inicio</Link></li>

          {/* PROYECTOS */}
          <li className="relative group py-2">
            <Link to="/Proyectos" onClick={closeMenu} className="group">
              <button className={`font-bold uppercase tracking-widest text-sm flex items-center gap-2 whitespace-nowrap ${isDark ? "text-white" : "text-black"}`}>
                Proyectos
                <span className="text-[12px] group-hover:rotate-180 transition-transform duration-300 pointer-events-none hidden lg:block [@media(pointer:coarse)]:!hidden">↓</span>
              </button>
            </Link>
            <ul className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 top-[100%] pt-2 min-w-[350px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col z-[110]">
              {mapaWeb
                .filter(item => item.path.startsWith("/Proyectos/") && item.path.split('/').length === 3)
                .map((proyecto, index) => {
                  const esSuperRodolfoPrincipal = proyecto.path === "/Proyectos/SuperRodolfo";
                  return (
                    <li key={proyecto.path + index} ref={esSuperRodolfoPrincipal ? rodolfoRef : null} onMouseEnter={esSuperRodolfoPrincipal ? handleMouseEnter : null}
                      className={`border-2 ${index > 0 ? "border-t-0" : ""} ${isDark ? "border-white bg-black" : "border-black bg-white"} relative group/item-proyecto`}>
                      <Link to={proyecto.path} className={dropdownItemStyles} onClick={closeMenu}>
                        <span className="whitespace-nowrap">{proyecto.label.toUpperCase()}</span>
                        {esSuperRodolfoPrincipal && <span className="text-lg ml-4">{subMenuDirection.includes("right-full") ? "←" : "→"}</span>}
                      </Link>
                      {esSuperRodolfoPrincipal && (
                        <ul className={`absolute top-[-2px] ${subMenuDirection} min-w-[280px] max-h-[80vh] overflow-y-auto invisible group-hover/item-proyecto:visible opacity-0 group-hover/item-proyecto:opacity-100 transition-all border-2 ${isDark ? "border-white bg-black" : "border-black bg-white"}`}>
                          {mapaWeb.filter((subItem) => subItem.path.startsWith("/Proyectos/SuperRodolfo/")).map((p, idx) => (
                            <li key={idx} className="border-b border-zinc-500/30 last:border-0">
                              <Link to={p.path} className={dropdownItemStyles} onClick={closeMenu}>
                                <span className="whitespace-nowrap">{p.label.toUpperCase()}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
            </ul>
          </li>

          {/* SECCIONES EXTRA DINÁMICAS (Eventos, Sobre mí, Contacto) */}
          {mapaWeb
            .filter(item => ["/Eventos", "/SobreMi", "/Contacto"].includes(item.path))
            .map((seccion) => (
              <li key={seccion.path}>
                <Link to={seccion.path} className={linkStyles} onClick={closeMenu}>
                  {seccion.label}
                </Link>
              </li>
            ))
          }

          {/* BOTÓN MODO OSCURO */}
          <li className="lg:ml-2">
            <button onClick={() => { toggleDarkMode(); closeMenu(); }}
              className={`py-2 px-4 xl:px-6 font-black uppercase italic tracking-tighter border-2 transition-all transform hover:scale-110 active:scale-95 text-xs xl:text-sm whitespace-nowrap ${isDark ? "bg-white text-black border-white" : "bg-black text-white border-black"}`}>
              {isDark ? "Claro" : "Oscuro"}
            </button>
          </li>
        </ul>

        <button className="lg:hidden flex flex-col gap-1.5" onClick={toggleMenu}>
          <span className={`w-8 h-1 transition-all ${isDark ? "bg-white" : "bg-black"} ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
          <span className={`w-8 h-1 transition-all ${isDark ? "bg-white" : "bg-black"} ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-8 h-1 transition-all ${isDark ? "bg-white" : "bg-black"} ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
        </button>
      </div>
    </nav>
  );
}