import { useState, useEffect } from "react";

export default function Barra() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // empieza en modo oscuro

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDark(!isDark);

  // Cambiar fondo de toda la página según el modo (solo menú)
  useEffect(() => {
    document.documentElement.style.backgroundColor = isDark ? "#000000" : "#ffffff";
  }, [isDark]);

  return (
    <nav
      className={`fixed w-full z-10 top-0 left-0 shadow-md transition-colors duration-500 ${
        isDark ? "!bg-black" : "!bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1
          className={`text-2xl font-bold transition-colors duration-500 ${
            isDark ? "!text-white" : "!text-black"
          }`}
        >
          Afterbit
        </h1>

        {/* Botón hamburguesa móvil/tablet */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden focus:outline-none text-2xl transition-colors duration-500 px-3 py-2 rounded ${
            isDark
              ? "!bg-black !text-white !border !border-white"
              : "!bg-white !text-black !border !border-black"
          }`}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Menú */}
          <ul
            className={`flex flex-col lg:flex-row items-center lg:items-center lg:space-x-12 absolute lg:static left-0 w-full lg:w-auto transition-all duration-500 ease-in-out
              ${isOpen ? "top-20 opacity-100" : "top-[-400px] opacity-0 lg:opacity-100"}
              ${isDark ? "bg-black pt-4 pb-2.5 lg:pt-0 lg:pb-0" : "bg-white pt-4 pb-2.5 lg:pt-0 lg:pb-0"} lg:bg-transparent`}
          >

          {["Inicio", "Servicios", "Sobre mí", "Contacto"].map((item) => (
            <li key={item} className="pt-2 lg:pt-0">
              <a
                href="#"
                className={`block py-2 px-4 hover:opacity-70 transition-colors duration-500 whitespace-nowrap text-sm lg:text-[0.875rem] lg:text-black ${
                  isDark ? "!text-white lg:text-black" : "!text-black lg:text-black"
                }`}
              >
                {item}
              </a>
            </li>
          ))}

          {/* Botón toggle centrado en móvil/tablet */}
          <li className="w-full flex justify-center mt-4 lg:mt-0">
            <button
              onClick={toggleDarkMode}
              className={`py-2 px-8 font-semibold rounded border-2 transition-colors duration-500
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
