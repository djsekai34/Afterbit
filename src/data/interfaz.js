// Bocetos
import MenuConcepto from "../Imagenes/Interfaz/Concepto/MenuPrincipal.png";
import SelectorConcepto from "../Imagenes/Interfaz/Concepto/SelectorNivel.png";
import CreditosConcpeto from "../Imagenes/Interfaz/Concepto/Creditos.png";
import ControlesConcepto from "../Imagenes/Interfaz/Concepto/Controles.png";
import HudConcepto from "../Imagenes/Interfaz/Concepto/Juego.png";
import PausaGeneralConcepto from "../Imagenes/Interfaz/Concepto/Pausa.png";
import PausaSelectorConcepto from "../Imagenes/Interfaz/Concepto/PausaSelectorNivel.png";
import MuerteConcepto from "../Imagenes/Interfaz/Concepto/Muerte.png";
import MuerteSelectorConcepto from "../Imagenes/Interfaz/Concepto/MuerteSelector.png";
// Resultados
import MenuFinal from "../Imagenes/Interfaz/ResultadoFinal/MenuFinal.png";
import SelectorFinal from "../Imagenes/Interfaz/ResultadoFinal/SelectorNivelFinal.png";
import CreditosFinal from "../Imagenes/Interfaz/ResultadoFinal/CreditosFinal.png";
import ControlesFinal from "../Imagenes/Interfaz/ResultadoFinal/ControlesFinal.png";
import HudFinal from "../Imagenes/Interfaz/ResultadoFinal/HudFinal.png";
import PausaGeneralFinal from "../Imagenes/Interfaz/ResultadoFinal/PausaFinal.png";
import PausaSelectorFinal from "../Imagenes/Interfaz/ResultadoFinal/PausaFinalSN.png";
import MuerteFinal from "../Imagenes/Interfaz/ResultadoFinal/MuerteFinal.png";
import MuerteSelectorFinal from "../Imagenes/Interfaz/ResultadoFinal/MuerteFinalSN.png";
import hud from "../Imagenes/Interfaz/ResultadoFinal/Hud.png";

export const pantallas = [
  {
    id: "01",
    titulo: "Menú Principal",
    desc: "Punto de entrada videojuego donde podremos encontar para ir al gameplay, saber los controles del videojuego, los creditos y salir del videojuego.",
    elementos: [
      "Modo Historia",
      "Selector de nivel",
      "Creditos",
      "Controles",
      "Salir",
    ],
    interactividad:
      "Botones interactuables que cuando le haces click te lleva a cualquier apartado o al gameplay",
    justificacion:
      "Buscamos un diseño intuitivo y atractivo donde este todo a primera mano para el usuario.",
      notas: "Las imagenes de rodolfo y los enemigos son animadas.",
    imgBoceto: MenuConcepto,
    imgFinal: MenuFinal,
  },
  {
    id: "02",
    titulo: "Selector de Nivel",
    desc: "Poder seleccionar diferentes niveles para jugar al videojuego o tambien volver al menu o ir a los creditos.",
    elementos: ["Cards Niveles", "Menu", "Creditos"],
    interactividad:
      "Botones interactuables que cuando le haces click te lleva a cualquier apartado o al gameplay",
    justificacion:
      "Buscamos un diseño intuitivo y atractivo donde veamos una imagen del nivel y el usuario pueda acceder al nivel deseado sabiendo de que sitio se encuentra.",
    imgBoceto: SelectorConcepto,
    imgFinal: SelectorFinal,
  },
  {
    id: "03",
    titulo: "Créditos",
    desc: "Reconocimiento al staff técnico especializado en que es para el curso de especialización, tambien el equipo de desarrollo, los assets usados y el sonido, como tambien importante el copyright.",
    elementos: [
      "Texto de créditos",
      "Texto de aviso legal",
      "Boton de volver al menu",
    ],
    interactividad:
      "Boton para volver al menu principal + visualizacion del texto de los creditos",
    justificacion:
      "Buscamos un diseño sencillo y efectivo donde se pueda leer fácilmente a un tamaño de letra adecuado.",
    imgBoceto: CreditosConcpeto,
    imgFinal: CreditosFinal,
  },
  {
    id: "04",
    titulo: "Controles",
    desc: "Mapeo detallado de acciones que puede realizar el jugador en nuestro videojuego.",
    elementos: ["Texto de controles", "Volver al menu"],
    interactividad:
      "Visual Key Feedback + visualizacion del texto de los controles",
    justificacion:
      "Buscamos un diseño sencillo y efectivo donde se pueda leer fácilmente a un tamaño de letra adecuado.",
    imgBoceto: ControlesConcepto,
    imgFinal: ControlesFinal,
  },
  {
    id: "05",
    titulo: "HUD Gameplay",
    desc: "Hud sencillo donde muestra la vida de Rodolfo y la bolas magicas bajo su control.",
    elementos: ["Barra de Vida", "Contador de Bolas Mágicas"],
    interactividad: "Ninguna es un hud informativo",
    justificacion:
      "Buscamos un diseño sencillo donde el hud moleste lo menos posible y se muestre la información necesaria.",
    imgBoceto: HudConcepto,
    imgFinal: HudFinal,
    imgExtra: hud, // AQUÍ VA TU TERCERA IMAGEN EXTRA
  },
  {
    id: "06",
    titulo: "Pausa General",
    desc: "Menu de pausa para que el usuario pueda pausar el juego y hacer lo que desee en la vida real.",
    elementos: ["Reanudar", "Reiniciar el nivel", "Salir"],
    interactividad:
      "Botones interactuables que cuando le haces click te lleva a cualquier apartado o al gameplay de nuevo",
    justificacion:
      "Buscamos un menu sencillo donde el usuario vea facilmente los botones para volver al juego o irse a otros apartados.",
    imgBoceto: PausaGeneralConcepto,
    imgFinal: PausaGeneralFinal,
  },
  {
    id: "07",
    titulo: "Pausa (Selector nivel)",
    desc: "Menu de pausa para que el usuario pueda pausar el juego y hacer lo que desee en la vida real, con la diferencia que este tiene un apartado para volver al selector del nivel.",
    elementos: [
      "Reanudar",
      "Reiniciar el nivel",
      "Seleccionar otro nivel",
      "Salir",
    ],
    interactividad:
      "Botones interactuables que cuando le haces click te lleva a cualquier apartado o al gameplay de nuevo",
    justificacion:
      "Buscamos un menu sencillo donde el usuario vea facilmente los botones para volver al juego o irse a otros apartados.",
    imgBoceto: PausaSelectorConcepto,
    imgFinal: PausaSelectorFinal,
  },
  {
    id: "08",
    titulo: "Muerte",
    desc: "Feedback tras haber perdido donde podemos ir al menu o reiniciar el nivel.",
    elementos: ["Reiniciar el nivel", "Salir"],
    interactividad:
      "Botones interactuables que cuando le haces click te lleva al menu principal o al gameplay de nuevo",
    justificacion:
      "Buscamos un diseño sencillo y efectivo donde el usuario sepa que ha muerto y pueda volver a intentarlo o ir al menu.",
    imgBoceto: MuerteConcepto,
    imgFinal: MuerteFinal,
  },
  {
    id: "09",
    titulo: "Muerte (Selector nivel)",
    desc: "Feedback tras haber perdido donde podemos ir al menu, reiniciar el nivel o ir al selector del nivel.",
    elementos: ["Reiniciar el nivel", "Salir"],
    interactividad:
      "Botones interactuables que cuando le haces click te lleva al menu principal, al selector de niveles o al gameplay de nuevo",
    justificacion:
      "Buscamos un diseño sencillo y efectivo donde el usuario sepa que ha muerto y pueda volver a intentarlo ir al selector de niveles o ir al menu.",
    imgBoceto: MuerteSelectorConcepto,
    imgFinal: MuerteSelectorFinal,
  },
];
