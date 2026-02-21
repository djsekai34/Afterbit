import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';
import HomePage from "./Pages/Home.jsx";
import SobreMi from "./Pages/SobreMi.jsx";
import Contacto from "./Pages/Contacto.jsx";
import ScrollToTop from "./components/ArribaSiempre.jsx"; 
import Proyectos from './Pages/Proyectos.jsx';
import PixelMetroid from './Pages/PixelMetroid.jsx';
import XRAdventure from './Pages/XRAdventure.jsx';
import SuperRodolfoGDD from './Pages/SuperRodolfo.jsx';
import SuperRodolfoAnalisis from './Pages/AnalisisyPreproudccion.jsx';
import SuperRodolfoGuion from './Pages/GuionyNarrativa.jsx';
import SuperRodolfoMecanicas from './Pages/MecanicasyExperencias.jsx';
import SuperRodolfoEstado from './Pages/EstadosDelVideojuego.jsx'; 
import SuperRodolfoUI from './Pages/InterfazyUI.jsx';
import SuperRodolfoSonido from './Pages/Sonido.jsx'; 
import SuperRodolfoProduccion from './Pages/ProduccionyArquitectura.jsx';
import SuperRodolfoConceptos from './Pages/ConceptoyObjetivos.jsx';
import SuperRodolfoStrike from './Pages/SuperRodolfoStrike.jsx';
import Eventos from './Pages/Eventos.jsx';
import IA from "./components/IA.jsx"
import "./index.css";

function App() {
  const [isDark, setIsDark] = useState(true);
  
  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
      
      <ScrollToTop />
      
      <Menu isDark={isDark} setIsDark={setIsDark} />
      
      <Routes>
        <Route path="/" element={<HomePage isDark={isDark} />} />
        <Route path="/SobreMi" element={<SobreMi isDark={isDark} />} />
        <Route path="/Contacto" element={<Contacto isDark={isDark} />} />
        <Route path="/Proyectos" element={<Proyectos isDark={isDark} />} />
        <Route path="/Eventos" element={<Eventos isDark={isDark} />} />
        <Route path="/Proyectos/PixelMetroid2D" element={<PixelMetroid isDark={isDark} />} />
        <Route path="/Proyectos/XRAdventure" element={<XRAdventure isDark={isDark} />} />
        <Route path="/Proyectos/SuperRodolfo" element={<SuperRodolfoGDD isDark={isDark} />} />
        <Route path="/Proyectos/SuperRodolfo/AnalisisyPreproduccion" element={<SuperRodolfoAnalisis isDark={isDark} />} />
        <Route path="/Proyectos/SuperRodolfo/GuionyNarrativa" element={<SuperRodolfoGuion isDark={isDark} />} />
        <Route path="/Proyectos/SuperRodolfo/MecanicasyExperiencias" element={<SuperRodolfoMecanicas isDark={isDark} />} />
        <Route path="/Proyectos/SuperRodolfo/EstadosDelVideojuego" element={<SuperRodolfoEstado isDark={isDark} />} />
        <Route path="/Proyectos/SuperRodolfo/InterfazyUI" element={<SuperRodolfoUI isDark={isDark} />} />
        <Route path="/Proyectos/SuperRodolfo/Sonido" element={<SuperRodolfoSonido isDark={isDark} />} />
        <Route path="/Proyectos/SuperRodolfo/ProduccionyArquitectura" element={<SuperRodolfoProduccion isDark={isDark} />} />
        <Route path="/Proyectos/SuperRodolfo/ConceptoyObjetivos" element={<SuperRodolfoConceptos isDark={isDark} />} />
        <Route path="/Proyectos/SuperRodolfoStrike" element={<SuperRodolfoStrike isDark={isDark} />} />
      </Routes>
      <IA/>
      <Footer isDark={isDark} setIsDark={setIsDark}/>
    </div>
  );
}

export default App;