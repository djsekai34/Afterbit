import { useState, useEffect } from "react";
import AfterbitLogo from "../Imagenes/Afterbit_sin_fondo.png"; // asegúrate de la ruta correcta

export default function Barra() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // empieza en modo oscuro

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDark(!isDark);

  // Cambiar fondo de toda la página según el modo
  useEffect(() => {
    document.documentElement.style.backgroundColor = isDark ? "#000000" : "#ffffff";
  }, [isDark]);

  return (
    <nav
      className={`fixed w-full z-10 top-0 left-0 shadow-md transition-colors duration-500 ${
        isDark ? "!bg-black" : "!bg-white"
      }`}
    >
      {/* Más alto y con el logo un poco más a la izquierda */}
      <div className="container mx-auto px-6 lg:px-8 py-4 flex justify-between items-center h-[95px] gap-8">
        {/* Logo ajustado con menos margen lateral y buen espaciado superior */}
        <img
          src={AfterbitLogo}
          alt="Afterbit logo"
          className="h-28 sm:h-32 md:h-35 lg:h-36 w-auto mt-3 ml-[-9px] transition-transform duration-500 hover:scale-105"
        />

        {/* Botón hamburguesa móvil/tablet */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden focus:outline-none text-2xl transition-all duration-500 px-3 py-1 rounded border ${
            isDark
              ? "!bg-black !text-white !border-white"
              : "!bg-white !text-black !border-black"
          }`}
        >
          <span
            className={`transition-colors duration-500 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {isOpen ? "✖" : "☰"}
          </span>
        </button>

        {/* Menú */}
        <ul
          className={`flex flex-col lg:flex-row items-center lg:items-center lg:space-x-10 absolute lg:static left-0 w-full lg:w-auto transition-all duration-500 ease-in-out
            ${isOpen ? "top-28 opacity-100" : "top-[-400px] opacity-0 lg:opacity-100"}
            ${
              isDark
                ? "bg-black pt-4 pb-5 lg:pt-0 lg:pb-0"
                : "bg-white pt-4 pb-5 lg:pt-0 lg:pb-0"
            } lg:bg-transparent`}
        >
          {["Inicio", "Servicios", "Sobre mí", "Contacto"].map((item) => (
            <li key={item} className="pt-1 lg:pt-0">
              <a
                href="#"
                className={`block py-2 px-4 hover:opacity-70 transition-colors duration-500 whitespace-nowrap text-[0.95rem] lg:text-[0.9rem] ${
                  isDark ? "!text-white lg:text-black" : "!text-black lg:text-black"
                }`}
              >
                {item}
              </a>
            </li>
          ))}

          {/* Botón toggle centrado en móvil/tablet */}
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
