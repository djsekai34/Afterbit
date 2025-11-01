import { useState, useEffect } from "react";
import AfterbitLogo from "../Imagenes/Afterbit_sin_fondo.png";

export default function Barra() {
  const [isOpen, setIsOpen] = useState(false); //Estado del menu
  const [isDark, setIsDark] = useState(true); //Estado del modo oscuro

  const toggleMenu = () => setIsOpen(!isOpen); //Menu hamburguesa o menu normal
  const toggleDarkMode = () => setIsDark(!isDark); //

  // Cambiar fondo de toda la página según el modo que desee el usuario
  useEffect(() => {
    document.documentElement.style.backgroundColor = isDark ? "#000000" : "#ffffff";
  }, [isDark]);

  return (
    <nav
      className={`fixed w-full z-10 top-0 left-0 shadow-md transition-colors duration-500 ${
        isDark ? "!bg-black" : "!bg-white"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 py-4 flex justify-between items-center h-[95px] gap-8">
        {/* Logo */}
        <img
          src={AfterbitLogo}
          alt="Afterbit logo"
          className="h-28 sm:h-32 md:h-35 lg:h-36 w-auto mt-3 ml-[-9px] transition-transform duration-500 hover:scale-105"
        />

        {/* Botón hamburguesa para movil y tablet */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden focus:outline-none text-2xl transition-all duration-500 px-3 py-1 rounded border ${
            isDark
              ? "!bg-black !text-white !border-white"
              : "!bg-white !text-black !border-black"
          }`}
        >
          <span className={`${isDark ? "text-white" : "text-black"}`}>
            {isOpen ? "✖" : "☰"}
          </span>
        </button>

        {/* Menú principal */}
        <ul
          className={`flex flex-col lg:flex-row items-center lg:space-x-9 absolute lg:static left-0 w-full lg:w-auto transition-all duration-500 ease-in-out
            ${isOpen ? "top-28 opacity-100" : "top-[-400px] opacity-0 lg:opacity-100"}
            ${
              isDark
                ? "bg-black pt-4 pb-5 lg:pt-0 lg:pb-0"
                : "bg-white pt-4 pb-5 lg:pt-0 lg:pb-0"
            } lg:bg-transparent`}
        >
          {/* Inicio */}
          <li>
            <a
              href="#"
              className={`block py-2 px-4 whitespace-nowrap hover:opacity-70 transition-colors duration-500 text-[0.95rem] ${
                isDark ? "!text-white lg:text-black" : "!text-black lg:text-black"
              }`}
            >
              Inicio
            </a>
          </li>

          {/* Apartado proyectos con los submenus */}
          <li className="relative group">
            <button
              className={`block py-2 px-4 whitespace-nowrap text-[0.95rem] font-normal !bg-transparent !border-none hover:!border-none focus:!border-none outline-none cursor-pointer transition-colors duration-300 
                ${
                  isDark
                    ? "text-white hover:text-gray-300"
                    : "text-black hover:text-gray-700"
                }`}
            >
              Proyectos
            </button>
            {/* 1º Submenu de Proyecto */}
            <ul
              className={`absolute left-0 top-full rounded-md shadow-lg min-w-[160px] hidden group-hover:flex flex-col ${
                isDark
                  ? "border border-white bg-black text-white"
                  : "border border-black bg-white text-black"
              }`}
            >
              {/* Rodolfo Race con 2 subniveles */}
              <li className="relative group/rodolfo">
                <button
                  className={`relative w-full text-left py-2 px-4 flex justify-between items-center transition-colors duration-300
                    !bg-transparent !border-none hover:!bg-transparent focus:!bg-transparent focus:!outline-none active:!bg-transparent
                    ${
                      isDark
                        ? "!text-white after:absolute after:inset-0 after:bg-[rgba(255,255,255,0.15)] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:rounded"
                        : "!text-black !bg-white !border !border-black after:absolute after:inset-0 after:bg-[rgba(0,0,0,0.08)] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:rounded"
                    }`}
                >
                  Rodolfo Race <span>▸</span>
                </button>
                {/* Submenú nivel 2 del apartado Rodolfo Race */}
                <ul
                  className={`absolute top-0 left-full rounded-md shadow-lg min-w-[160px] hidden group-hover/rodolfo:flex flex-col ${
                    isDark
                      ? "border border-white bg-black"
                      : "border border-black bg-white"
                  }`}
                >
                  <li>
                    <a
                      href="#"
                      className={`block py-2 px-4 transition-colors duration-300 ${
                        isDark
                          ? "!text-white hover:bg-[rgba(255,255,255,0.20)] hover:!text-white"
                          : "!text-black hover:bg-gray-200 hover:!text-black border border-black"
                      }`}
                    >
                      Inspiración
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`block py-2 px-4 transition-colors duration-300 ${
                        isDark
                          ? "!text-white hover:bg-[rgba(255,255,255,0.20)] hover:!text-white"
                          : "!text-black hover:bg-gray-200 hover:!text-black border border-black"
                      }`}
                    >
                      Mecánicas
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          {/* Sobre mí */}
          <li>
            <a
              href="#"
              className={`block py-2 px-4 whitespace-nowrap hover:opacity-70 transition-colors duration-500 text-[0.95rem] ${
                isDark ? "!text-white lg:text-black" : "!text-black lg:text-black"
              }`}
            >
              Sobre mí
            </a>
          </li>

          {/* Contacto */}
          <li>
            <a
              href="#"
              className={`block py-2 px-4 whitespace-nowrap hover:opacity-70 transition-colors duration-500 text-[0.95rem] ${
                isDark ? "!text-white lg:text-black" : "!text-black lg:text-black"
              }`}
            >
              Contacto
            </a>
          </li>

          {/* Botón modo oscuro */}
          <li className="w-full flex justify-center mt-3 lg:mt-0">
            <button
              onClick={toggleDarkMode}
              className={`py-2 px-7 font-semibold rounded border transition-colors duration-500 text-[0.9rem]
                ${
                  isDark
                    ? "!bg-white !text-black !border-black lg:bg-transparent lg:text-black lg:border-transparent"
                    : "!bg-black !text-white !border-black lg:bg-transparent lg:text-black lg:border-transparent"
                }`}
            >
              {isDark ? "Blanco" : "Negro"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
