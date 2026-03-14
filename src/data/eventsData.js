/**
 * ==========================================================================================
 * AFTERBIT EVENT SYSTEM - MANUAL DE MANTENIMIENTO Y CREACIÓN
 * ==========================================================================================
 * Este archivo gestiona la agenda de la empresa. Para añadir un evento, inserta un objeto 
 * en el array 'eventsData'. Sigue estas reglas para que el calendario lo pinte correctamente:
 * * ------------------------------------------------------------------------------------------
 * 1. CAMPOS OBLIGATORIOS (EL "ESQUELETO"):
 * ------------------------------------------------------------------------------------------
 * - id: (Número) Único. Si el último es 9, el siguiente es 10.
 * - titulo: (String) Nombre del evento. Sé breve y directo.
 * - inicio: (Date) Objeto fecha: 'new Date(AÑO, MES, DIA)'. 
 * ⚠️ OJO: Los meses en JavaScript empiezan en 0 (Enero = 0, Diciembre = 11).
 * Ejemplo Octubre: 'new Date(2025, 9, 1)'.
 * - fin: Le fecha de finalizacion
 * - color: (Hex) Color de la marca del evento. Ejemplo: "#ff0000".
 * - descripcion: (String) Resumen de qué trata el evento.
 * - ubicacion: (String) Lugar físico o digital (Ej: "Discord", "Madrid").
 * - url: (String) Enlace a Google Maps o web oficial. Si no hay, usa "".
 * - tipo: (String) Categoría (Ej: "FUNDACIÓN", "Presentacion", "Feria de Videojuegos").
 * * ------------------------------------------------------------------------------------------
 * 2. TIPOS DE EVENTOS SEGÚN SU HORARIO (Sigue estos patrones):
 * ------------------------------------------------------------------------------------------
 * * CASO A: EVENTO DE "DÍA COMPLETO" (Ejemplo: Id 1 - Creación de Afterbit)
 * -> Uso: Cuando no hay una hora de inicio/fin, solo el hito del día.
 * -> Configuración: Define 'inicio', pon 'fin: null' y NO añadidas 'horarios'.
 * * CASO B: EVENTO DE VARIOS DÍAS CON HORARIO FIJO (Ejemplo: Id 3, 7 u 8)
 * -> Uso: El evento dura varios días y todos los días se abre y cierra a la misma hora.
 * -> Configuración: 
 * fin: new Date(...) // Fecha de fin
 * horarios: [{ inicio: "08:15", fin: "13:45" }]
 * * CASO C: HORARIO DE MAÑANA Y TARDE FIJO (Ejemplo: Id 5)
 * -> Uso: Todos los días del evento tienen un descanso al mediodía.
 * -> Configuración: Añade dos objetos al array de horarios:
 * horarios: [
 * { inicio: "10:00", fin: "14:00" }, 
 * { inicio: "17:00", fin: "20:00" }
 * ]
 * * CASO D: HORARIOS VARIABLES POR DÍA (Ejemplo: Id 6 o Granada Gaming)
 * -> Uso: Cuando el viernes cierras a una hora, el sábado a otra y el domingo haces jornada partida.
 * -> Configuración: Usa la propiedad 'horariosPorDia'. La clave es el timestamp del día:
 * horariosPorDia: {
 * [new Date(2026, 2, 18).getTime()]: [{ inicio: "10:00", fin: "14:00" }],
 * [new Date(2026, 2, 20).getTime()]: [ // Este día tiene mañana y tarde
 * { inicio: "10:00", fin: "14:00" }, 
 * { inicio: "17:00", fin: "20:00" }
 * ]
 * }
 * * CASO E: DÍAS ESPECÍFICOS SALTEADOS (Ejemplo: Id 2)
 * -> Uso: El evento es el lunes y el miércoles, pero el martes NO.
 * -> Configuración: Usa la propiedad 'especificos' con los timestamps de los días exactos:
 * especificos: [
 * new Date(2025, 11, 8).getTime(),
 * new Date(2025, 11, 10).getTime()
 * ]
 * ------------------------------------------------------------------------------------------
 */
export const eventsData = [
  {
    id: 1,
    titulo: "Creación de Afterbit",
    inicio: new Date(2025, 9, 1),
    fin: null,
    color: "#008000",
    descripcion: "Fundación de Afterbit como empresa de desarrollo de videojuegos para el curso de especialización.",
    ubicacion: "IES Virgen del Carmen",
    url: "http://googleusercontent.com/maps.google.com/9",
    tipo: "FUNDACIÓN",
  },
  {
    id: 2,
    titulo: "Presentacion de XR Adventure",
    especificos: [
      new Date(2025, 11, 8).getTime(),
      new Date(2025, 11, 10).getTime(),
    ],
    horariosPorDia: {
      [new Date(2025, 11, 8).getTime()]: [{ inicio: "08:15", fin: "09:15" }],
      [new Date(2026, 11, 10).getTime()]: [{ inicio: "11:45", fin: "13:45" }],
    },
    color: "#ff4500",
    descripcion: "Presentación del proyecto de realidad extendida con demostraciones jugables y charla sobre el desarrollo.",
    ubicacion: "IES Virgen del Carmen",
    url: "http://googleusercontent.com/maps.google.com/9",
    tipo: "Presentacion",
  },
  {
    id: 3,
    titulo: "Presentacion de Pixel Metroid 2D",
    inicio: new Date(2025, 11, 15),
    fin: new Date(2025, 11, 19),
    horarios: [{ inicio: "08:15", fin: "13:45" }],
    color: "#8a2be2",
    descripcion: "Presentamos el videjuego de Pixel Metroid 2D con charlas sobre el desarrollo, diseño del juego.",
    ubicacion: "IES Virgen del Carmen",
    url: "http://googleusercontent.com/maps.google.com/9",
    tipo: "Presentacion",
  },
  {
    id: 4,
    titulo: "Presentacion: Super Rodolfo y las esferas del Santo Reino",
    inicio: new Date(2026, 0, 5),
    fin: new Date(2026, 0, 8),
    horarios: [{ inicio: "10:00", fin: "13:00" }],
    color: "#aae40b",
    descripcion: "Presentamos el proyecto a posibles inversores. Cada día tiene un horario de atención diferente.",
    ubicacion: "Alcalá la Real",
    url: "https://goo.gl/maps/AlcalaReal",
    tipo: "Exposición",
  },
  {
    id: 5,
    titulo: "Presentacion de Super Rodolfo Strike",
    inicio: new Date(2026, 0, 19),
    fin: new Date(2026, 0, 22),
    horarios: [
      { inicio: "10:00", fin: "14:00" },
      { inicio: "17:00", fin: "20:00" }
    ],
    color: "#12122B",
    descripcion: "Presentamos el videojuego Super Rodolfo Strike con demostraciones jugables.",
    ubicacion: "IES Virgen del Carmen",
    url: "http://googleusercontent.com/maps.google.com/9",
    tipo: "Presentacion",
  },
  {
    id: 6,
    titulo: "Presentacion del primer gameplay",
    inicio: new Date(2026, 2, 18),
    fin: new Date(2026, 2, 20),
    horariosPorDia: {
      [new Date(2026, 2, 18).getTime()]: [{ inicio: "10:00", fin: "14:00" }],
      [new Date(2026, 2, 19).getTime()]: [{ inicio: "17:00", fin: "19:00" }],
      [new Date(2026, 2, 20).getTime()]: [
        { inicio: "10:00", fin: "14:00" }, 
        { inicio: "17:00", fin: "20:00" }
      ],
    },
    color: "#aae40b",
    descripcion: "Presentamos el primer gameplay en nuestro discord oficial.",
    ubicacion: "Discord de Afterbit",
    url: "https://discord.com/users/4335",
    tipo: "Gameplay Reveal",
  },

  {
    id: 7,
    titulo: "Presentacion de el Malagueño vs los nastiqueros",
    inicio: new Date(2026, 2, 23),
    fin: new Date(2026, 2, 25),
     horarios: [
      { inicio: "08:15", fin: "13:45" },
    ],
    color: "#a7d6f5",
    descripcion: "Presentamos el gameplay de nuestro juego Shooter el Malageueño vs el Nastiquero, tambien se presnta su version VR.",
    ubicacion: "IES Virgen del Carmen",
    url: "https://maps.app.goo.gl/S3R1aTRSbLYZBXsP9",
    tipo: "Gameplay Reveal",
  },

  {
    id: 8,
    titulo: "Gamergy 2026",
    inicio: new Date(2026, 11, 12),
    fin: new Date(2026, 11, 14),
     horarios: [
      { inicio: "08:15", fin: "13:45" },
    ],
    color: "#a7d6f5",
    descripcion: "Feria de videojuegos realizada en Madrid en el IFEMA.",
    ubicacion: "Madrid",
    url: "https://maps.app.goo.gl/zG5wQg8t4uVEpjm87",
    tipo: "Feria de Videojuegos",
  },

  {
    id: 8,
    titulo: "Granada Gaming Festival 2026",
    inicio: new Date(2026, 3, 25),
    fin: new Date(2026, 3, 26),
    horariosPorDia: {
      [new Date(2026, 3, 25).getTime()]: [{ inicio: "10:00", fin: "21:00" }],
      [new Date(2026, 3, 26).getTime()]: [{ inicio: "10:00", fin: "20:00" }],
    },
    color: "#ff0000",
    descripcion: "Feria de videojuegos realizada en Granada en la FicZone.",
    ubicacion: "Granada",
    url: "https://maps.app.goo.gl/wT8FP29kvDb1ZriR8",
    tipo: "Feria de Videojuegos",
  },

    {
    id: 9,
    titulo: "RetroBarcelona 2026",
    inicio: new Date(2026, 4, 16),
    fin: new Date(2026, 4, 17),
   horarios: [
      { inicio: "10:00", fin: "20:00" },
    ],
    color: "#a50044",
    descripcion: "Feria de videojuegos realizada en L’Hospitalet de Llobregat (Barcelona), enfocada en los videojuegos retro",
    ubicacion: "Centro Comercial La Farga (L’Hospitalet de Llobregat)",
    url: "https://maps.app.goo.gl/wT8FP29kvDb1ZriR8",
    tipo: "Feria de Videojuegos",
  },
];