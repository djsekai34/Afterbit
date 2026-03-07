// imagenes
import img01 from "../Imagenes/ImagenesSR/RodolfoHud.png";
import img02 from "../Imagenes/ImagenesSR/Frieza.png";
import img03 from "../Imagenes/ImagenesSR/BrolyMuere.png";
import img04 from "../Imagenes/ImagenesSR/Hit.png";
import img05 from "../Imagenes/ImagenesSR/Janemba.png";
import img06 from "../Imagenes/ImagenesSR/Klefa.png";
import img07 from "../Imagenes/ImagenesSR/Turles.png";
import img08 from "../Imagenes/ImagenesSR/Cell Perfecto.png";
import img09 from "../Imagenes/ImagenesSR/BlackFreezer.png";
import img10 from "../Imagenes/ImagenesSR/CellAtaque.png";
import img11 from "../Imagenes/GokuSSJ4.png";
import img12 from "../Imagenes/shagamido3.png";
import img13 from "../Imagenes/Vegeta.png";
import img14 from "../Imagenes/GohanSSJ2.png";
import img15 from "../Imagenes/LogoJuego.png";
import img16 from "../Imagenes/ImagenesSR/TurlesMuere.png"

// audios
import audioMenuPrincipal from "../audio/MenuPrincipal.mp3";
import audioPausa from "../audio/Pausa.mp3";
import audioMuerte from "../audio/Muerte.mp3";
import audioJaen from "../audio/NivelJaen.mp3";
import audioCazorla from "../audio/NivelCazorla.mp3";
import audioMartos from "../audio/MusicaMartos.mp3";
import audioTP from "../audio/TP.mp3";
import audioAtaque from "../audio/FAHHH.mp3";
import audioExtra from "../audio/NivelExtra.mp3";
import audioDeseo from "../audio/PedirDeseo.mp3";
import audioFinal from "../audio/MusicaFinalBueno.mp3";
import audioAndujar from "../audio/MusicaAndujar.mp3";
import audioUbeda from "../audio/MusicaUbeda.mp3";
import audioTorredonjimeno from "../audio/NivelTorredonjimeno.mp3";
import audioAlcala from "../audio/NivelAlcala.mp3";
import audioIntroudccion from "../audio/Introduccion.mp3";
import audioFinalMalo from "../audio/FinalMalo.mp3"

export const playlist = [
  {
    id: "01",
    title: "Menú Principal / Selector de Nivel / Créditos / Controles",
    desc: "Música de fondo para navegación entre menús del videojuego",
    type: "music",
    url: audioMenuPrincipal,
    cover: img01,
    experiencia: "Música tranquila para el menú donde el jugador navega de forma intuitiva con una música que no le altera.",
  },
  {
    id: "02",
    title: "Introducción",
    desc: "Introducción al jugador a la narrativa del Santo Reino y a la aventura que le espera, la música es épica y emocionante para sumergir al jugador en el mundo.",
    type: "music",
    url: audioIntroudccion,
    cover: img15,
    experiencia: "El usuario sentirá que el lore es épico y que se enfrenta a una súper aventura por todo el Santo Reino.",
  },
  {
    id: "03",
    title: "Pausa / Pausa SN",
    desc: "Música feliz y alegre para el estado de pausa, con un toque de humor y ligereza.",
    type: "pause",
    url: audioPausa,
    cover: img02,
    experiencia: "Le ofrece un momento de descanso y diversión durante la pausa.",
  },
  {
    id: "04",
    title: "Muerte / Muerte SN",
    desc: "Música triste ya que el jugador ha perdido. Transmite la gravedad de la situación.",
    type: "pause",
    url: audioMuerte,
    cover: img03,
    experiencia: "Impacto seco ante la derrota.",
  },
  {
    id: "05",
    title: "Jaén",
    desc: "Música de nuestro primer nivel, nos mete en tensión y aventura épica.",
    type: "map",
    url: audioJaen,
    cover: img04,
    experiencia: "Experiencia épica donde sienta que está en una aventura legendaria.",
  },
  {
    id: "06",
    title: "Cazorla",
    desc: "Inmersión en Cazorla, experiencia misteriosa y envolvente, que el jugador experimentará que estamos en un sitio misterioso.",
    type: "map",
    url: audioCazorla,
    cover: img05,
    experiencia: "Le ofrece una experiencia misteriosa y envolvente al jugador.",
  },
  {
    id: "07",
    title: "Martos",
    desc: "Ofrecemos una música rápida dinámica y llena de energía para el nivel de Martos, que se caracteriza por su ritmo acelerado y su intensidad.",
    type: "map",
    url: audioMartos,
    cover: img06,
    experiencia: "Dureza.",
  },
  {
    id: "08",
    title: "Andújar",
    desc: "Música de alto voltaje como es Andújar donde ofrecemos un ritmo rápido y lleno de energía para el nivel de Andújar, que se caracteriza por su ritmo acelerado y su intensidad.",
    type: "map",
    url: audioAndujar,
    cover: img07,
    experiencia: "El usuario sentirá la energía y la intensidad del nivel en un sitio mítico del santo reino como es Andújar.",
  },
  {
    id: "09",
    title: "Úbeda",
    desc: "Ofrecemos una música diferente, rápida dinámica y llena de energía para el nivel de Úbeda, para un nivel único por su rapidez.",
    type: "map",
    url: audioUbeda,
    cover: img08,
    experiencia: "El jugador siente la rapidez y la intensidad del nivel que será el nivel más rápido de todos.",
  },
  {
    id: "10",
    title: "Torredonjimeno",
    desc: "Música tensa llena de pulsos rítmicos como es Torredonjimeno, un nivel que se caracteriza porque estamos casi al final de la aventura y nos queda poco para reunir las 7 bolas mágicas.",
    type: "map",
    url: audioTorredonjimeno,
    cover: img09,
    experiencia: "Le ofrece al jugador una experiencia que sepa que estamos cerca del final de la aventura.",
  },
  {
    id: "11",
    title: "Alcalá la Real",
    desc: "El último nivel del santo reino, el nivel que nos dará la última bola mágica, la música es épica llena de ritmo para demostrarnos que estamos al final.",
    type: "map",
    url: audioAlcala,
    cover: img10,
    experiencia: "La experiencia que obtiene el jugador es de saber que está ante el último nivel del santo reino, el nivel más épico de todos y que nos dará la última bola mágica para pedir el deseo a Shenlong.",
  },
  {
    id: "12",
    title: "Aliados TP",
    desc: "Sonido característico de los aliados que harán cuando nos den su fuerza para seguir en el santo reino luchando contra el enemigo.",
    type: "star",
    url: audioTP,
    cover: img11,
    experiencia: "Le indicamos al jugador que nuestros aliados están con nosotros pero físicamente se fueron.",
  },
  {
    id: "13",
    title: "Shagami-dō",
    desc: "Sonido de ataque de Rodolfo, es característico de su ataque Shagami-dō, un sonido único como su ataque.",
    type: "sword",
    url: audioAtaque,
    cover: img12,
    experiencia: "Le demostramos al usuario todo el poder del ataque de Rodolfo.",
  },
  {
    id: "14",
    title: "Pedir Deseo a Shenlong",
    desc: "Momento tenso el jugador ha conseguido reunir las 7 esferas del dragón y ahora puede pedir un deseo a Shenlong, la música se vuelve tensa es un momento emocionante para la aventura.",
    type: "star",
    url: audioDeseo,
    cover: img13,
    experiencia: "Le ofrece una experiencia tensa y emocionante al jugador ya que debe de pedir su deseo.",
  },
  {
    id: "15",
    title: "Nivel Extra",
    desc: "Nivel secreto que se desbloquea al pedir un deseo, con una música intensa y emocionante que acompaña al jugador en acabar para siempre con los enemigos.",
    type: "star",
    url: audioExtra,
    cover: img14,
    experiencia: "El nivel secreto el usuario sentirá que este nivel mágico especial lo tendrá que dar todo.",
  },
  {
    id: "16",
    title: "Final Bueno y Final Bueno (nivel extra)",
    desc: "Rodolfo lo ha conseguido, ha derrotado a todos los enemigos y ha salvado el santo reino, la música es triunfal y alegre para celebrar la victoria del jugador.",
    type: "star",
    url: audioFinal,
    cover: img01,
    experiencia: "Le ofrece una experiencia triunfal y alegre al jugador que sepa que ha ganado.",
  },
  {
    id: "17",
    title: "Final Malo",
    desc: "Rodolfo ha sucumbido al poder de las bolas magicas, ahora es una mala persona y controla el Santo Reino con maldad.",
    type: "star",
    url: audioFinalMalo,
    cover: img16,
    experiencia: "Le ofrecemos una experencia triste al jugador nuestro heroe favorito ahora se ha convertido en mala persona, lo cual es un momento triste y se lo reflejamos asi.",
  },
];