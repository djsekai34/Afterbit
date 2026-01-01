import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Forzamos al navegador a ir arriba del todo cada vez que cambia la ruta
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}