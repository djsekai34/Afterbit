import React from "react";

export const estadosData = [
  {
    titulo: "Pantalla de Inicio (Splash Screen)",
    definicion: "Punto de entrada del juego.",
    queOcurre: "Logo de Afterbit Studio.",
    transicion: "Carga automática del Menú principal tras 5 segundos.",
  },
  {
    titulo: "Menú Principal",
    definicion: "Hub central de navegación del usuario.",
    queOcurre:
      "Interfaz con opciones interactivas: Historia, Selector de niveles, Créditos, Controles y Salida.",
    transicion:
      "Basada en selección: Historia → Gameplay | Selector de niveles → Niveles | Creditos → Creditos | Controles → Controles | Salir → Cierre.",
  },
  {
    titulo: "Selector de Nivel",
    definicion:
      "Selector de nivel que desee el usuario de los disponibles en el Santo Reino.",
    queOcurre: "Visualización de niveles disponibles en el Santo Reino.",
    transicion:
      "Selección → Gameplay | Creditos → Creditos | Atrás → Menú Principal.",
  },
  {
    titulo: "Pantallas de Información",
    definicion: "Estados de consulta (Créditos / Controles).",
    queOcurre:
      "Mapeo de teclas de Rodolfo (Shift, Q, Espacio, AD) y los creditos del videjuego.",
    transicion: "Botón Menú → Menú Principal.",
  },
  {
    titulo: "Gameplay (Juego Activo)",
    definicion:
      "Estado de ejecución del gameplay del videojuego con todas sus mecanicas.",
    queOcurre:
      "Rodolfo: Físicas de salto, combate  y recolección de esferas.",
    transicion:
      "ESC → Pausa | HP=0 → Muerte | Meta → Victoria/Siguiente Nivel.",
  },
  {
    titulo: "Estados de Finalización",
    definicion: "Resultados y suspensión del ciclo de juego.",
    queOcurre: "Gestión de victoria, derrota o interrupción voluntaria.",
    sublogica: [
      {
        subtitulo: "⏸️ PAUSA",
        info: "Reanudar | Reiniciar | Selector de nivel* | Menú Principal",
      },
      {
        subtitulo: "💀 MUERTE",
        info: "Reintentar | Selector de nivel* | Menú Principal",
      },
      {
        subtitulo: "🏆 VICTORIA",
        info: "Inmovilidad 5s + Bola Mágica → Siguiente Nivel / Selector de nivel*.",
      },
    ],
  },
];