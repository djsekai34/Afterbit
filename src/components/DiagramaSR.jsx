import React from "react";
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  MarkerType,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";

/* LOGICA DEl COMPONENTE PERSONALIZADO */
const RetornoCustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style = {},
  markerEnd,
}) => {
  // Forzamos el "rodeo" por debajo para evitar colisión vertical
  const dropY = sourceY + 100;
  const shiftX = sourceX + 150;

  // Construcción manual de la ruta Step (Escalera)
  const edgePath = `M ${sourceX},${sourceY} 
                    V ${dropY} 
                    H ${shiftX} 
                    V ${targetY + 20} 
                    H ${targetX}`;

  return (
    <path
      id={id}
      style={{ ...style, strokeDasharray: "5,5", strokeWidth: 2.5 }}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
    />
  );
};

// Registro de tipos de línea para React Flow
const edgeTypes = {
  retornoPersonalizado: RetornoCustomEdge,
};

/* COMPONENTE PRINCIPAL DEL DIAGRAMA */
const SRDiagrama = ({ isDark }) => {
  // Configuración de paleta de colores reactiva al tema
  const colors = {
    accentGreen: isDark ? "#16a34a" : "#15803d",
    accentBlue: isDark ? "#3b82f6" : "#1d4ed8",
    accentRed: "#ef4444",
    deathRed: isDark ? "#ef4444" : "#991b1b",
    victoryGold: isDark ? "#fbbf24" : "#d97706",
    pausePurple: isDark ? "#a855f7" : "#7e22ce",
    nodeBg: isDark ? "#09090b" : "#ffffff",
    nodeBorder: isDark ? "#3f3f46" : "#d4d4d8",
    textMain: isDark ? "#ffffff" : "#000000",
    textMuted: isDark ? "#a1a1aa" : "#71717a",
  };

  // Estilo base para los nodos del sistema
  const nodeStyle = {
    padding: "10px",
    borderRadius: "0px",
    fontSize: "9px",
    fontFamily: "monospace",
    textTransform: "uppercase",
    border: `2px solid ${colors.nodeBorder}`,
    backgroundColor: colors.nodeBg,
    color: colors.textMuted,
    textAlign: "center",
    width: 150,
  };

  /* DEFINICIÓN DE NODOS */
  const initialNodes = [
    {
      id: "splash",
      data: { label: "Splash Screen" },
      position: { x: 425, y: 0 },
      style: nodeStyle,
    },
    {
      id: "menu",
      data: { label: "MENÚ PRINCIPAL" },
      position: { x: 410, y: 100 },
      style: {
        ...nodeStyle,
        width: 180,
        fontWeight: "bold",
        color: colors.textMain,
        borderColor: isDark ? "#fff" : "#000",
      },
    },
    {
      id: "historia",
      data: { label: "Modo Historia" },
      position: { x: -50, y: 250 },
      style: {
        ...nodeStyle,
        borderColor: colors.accentGreen,
        color: colors.accentGreen,
      },
    },
    {
      id: "selector",
      data: { label: "Selector Nivel" },
      position: { x: 180, y: 250 },
      style: {
        ...nodeStyle,
        borderColor: colors.accentGreen,
        color: colors.accentGreen,
      },
    },
    {
      id: "creditos",
      data: { label: "Créditos" },
      position: { x: 425, y: 250 },
      sourcePosition: Position.Bottom,
      style: {
        ...nodeStyle,
        borderColor: colors.accentBlue,
        color: colors.accentBlue,
      },
    },
    {
      id: "controles",
      data: { label: "Controles" },
      position: { x: 670, y: 250 },
      style: {
        ...nodeStyle,
        borderColor: colors.accentBlue,
        color: colors.accentBlue,
      },
    },
    {
      id: "salir",
      data: { label: "SALIR (EXIT)" },
      position: { x: 900, y: 250 },
      style: { ...nodeStyle, borderColor: "#7f1d1d", color: colors.accentRed },
    },
    {
      id: "gameplay",
      data: { label: "[ GAMEPLAY CORE ]" },
      position: { x: 50, y: 480 },
      style: {
        ...nodeStyle,
        width: 250,
        border: `4px solid ${colors.accentGreen}`,
        color: colors.textMain,
        fontWeight: "900",
      },
    },
    {
      id: "pausa",
      data: { label: "Pausa (ESC)" },
      position: { x: 450, y: 480 },
      style: {
        ...nodeStyle,
        borderColor: colors.pausePurple,
        color: colors.pausePurple,
        borderWidth: "3px",
      },
    },
    {
      id: "muerte",
      data: { label: "GAME OVER" },
      position: { x: -80, y: 680 },
      style: {
        ...nodeStyle,
        borderColor: colors.deathRed,
        color: colors.deathRed,
        fontWeight: "bold",
      },
    },
    {
      id: "victoria",
      data: { label: "¡VICTORIA!" },
      position: { x: 280, y: 680 },
      style: {
        ...nodeStyle,
        borderColor: colors.victoryGold,
        color: colors.victoryGold,
        fontWeight: "bold",
        borderWidth: "3px",
      },
    },
  ];

  /* DEFINICIÓN DE CONEXIONES (TRANSICIONES) */
  const initialEdges = [
    {
      id: "e-sp-me",
      source: "splash",
      target: "menu",
      type: "step",
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    { id: "e-me-hi", source: "menu", target: "historia", type: "step" },
    { id: "e-me-se", source: "menu", target: "selector", type: "step" },
    { id: "e-me-cr", source: "menu", target: "creditos", type: "step" },
    { id: "e-me-co", source: "menu", target: "controles", type: "step" },
    { id: "e-me-sa", source: "menu", target: "salir", type: "step" },

    // Retorno manual desde Créditos con lógica Step Custom
    {
      id: "r-cr-me",
      source: "creditos",
      target: "menu",
      type: "retornoPersonalizado",
      sourcePosition: Position.Bottom,
      targetPosition: Position.Bottom,
      markerEnd: { type: MarkerType.ArrowClosed, color: colors.accentBlue },
      style: { stroke: colors.accentBlue, strokeWidth: 2.5 },
    },

    {
      id: "e-hi-ga",
      source: "historia",
      target: "gameplay",
      type: "step",
      animated: true,
      style: { stroke: colors.accentGreen, strokeWidth: 2 },
    },
    {
      id: "e-se-ga",
      source: "selector",
      target: "gameplay",
      type: "step",
      animated: true,
      style: { stroke: colors.accentGreen, strokeWidth: 2 },
    },
    {
      id: "e-ga-pa",
      source: "gameplay",
      target: "pausa",
      type: "step",
      style: { stroke: colors.pausePurple, strokeWidth: 2 },
    },
    {
      id: "e-pa-ga",
      source: "pausa",
      target: "gameplay",
      type: "step",
      animated: true,
      style: { stroke: colors.pausePurple, strokeDasharray: "5,5" },
    },
    {
      id: "e-pa-me",
      source: "pausa",
      target: "menu",
      type: "smoothstep",
      style: { stroke: colors.pausePurple, opacity: 0.5 },
      pathOptions: { borderRadius: 120 },
    },
    {
      id: "e-pa-se",
      source: "pausa",
      target: "selector",
      type: "smoothstep",
      style: { stroke: colors.accentGreen, opacity: 0.4 },
      pathOptions: { borderRadius: 100 },
    },
    {
      id: "e-ga-mu",
      source: "gameplay",
      target: "muerte",
      type: "step",
      style: { stroke: colors.deathRed, strokeWidth: 2 },
    },
    {
      id: "e-mu-ga",
      source: "muerte",
      target: "gameplay",
      type: "smoothstep",
      animated: true,
      style: { stroke: colors.accentGreen },
      pathOptions: { borderRadius: 40 },
    },
    {
      id: "e-mu-me",
      source: "muerte",
      target: "menu",
      type: "smoothstep",
      style: { stroke: colors.accentRed, opacity: 0.4 },
      pathOptions: { borderRadius: 250 },
    },
    {
      id: "e-mu-se",
      source: "muerte",
      target: "selector",
      type: "smoothstep",
      style: { stroke: colors.accentGreen, opacity: 0.4 },
      pathOptions: { borderRadius: 180 },
    },
    {
      id: "e-ga-vi",
      source: "gameplay",
      target: "victoria",
      type: "step",
      style: { stroke: colors.victoryGold, strokeWidth: 2 },
    },
    {
      id: "e-vi-ga",
      source: "victoria",
      target: "gameplay",
      type: "smoothstep",
      animated: true,
      style: { stroke: colors.victoryGold },
      pathOptions: { borderRadius: 40 },
    },
    {
      id: "e-vi-se",
      source: "victoria",
      target: "selector",
      type: "smoothstep",
      style: { stroke: colors.accentGreen, opacity: 0.6 },
      pathOptions: { borderRadius: 200 },
    },
    {
      id: "e-se-me",
      source: "selector",
      target: "menu",
      type: "smoothstep",
      style: {
        stroke: colors.accentGreen,
        strokeDasharray: "5,5",
        opacity: 0.6,
      },
      pathOptions: { borderRadius: 80 },
    },
    {
      id: "e-co-me",
      source: "controles",
      target: "menu",
      type: "step",
      style: { stroke: colors.accentBlue, strokeDasharray: "5,5" },
    },
  ];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  /* RENDERIZADO DEL DIAGRAMA */
  return (
    <div
      className={`w-full h-[850px] mt-10 border-2 rounded-3xl overflow-hidden shadow-2xl transition-colors duration-500 ${isDark ? "border-zinc-800 bg-zinc-950/20" : "border-zinc-200 bg-white"}`}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        colorMode={isDark ? "dark" : "light"}
        minZoom={0.85}
        maxZoom={1.5}
        panOnDrag={true}
        zoomOnScroll={true}
        translateExtent={[
          [-300, -100],
          [1300, 950],
        ]}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color={isDark ? "#222" : "#ddd"} gap={25} variant="lines" />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
};

export default SRDiagrama;