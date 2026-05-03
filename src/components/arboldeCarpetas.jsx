import React from "react";

// --- TREE ITEM ESTÁTICO ---
const TreeItem = ({ name, isFolder, children, color = "text-white/80", level = 0 }) => {
  const hasChildren = children && children.length > 0;

  return (
    <div className="relative select-none min-w-max"> {/* min-w-max evita que el texto se amontone en móvil */}
      {hasChildren && (
        <div 
          className="absolute w-[1px] bg-white/10" 
          style={{ 
            left: `${level * 20 + 17}px`, 
            top: '28px', 
            bottom: '10px' 
          }}
        />
      )}

      <div 
        className={`flex items-center gap-2 py-1 px-2 ${color} active:bg-white/5 transition-colors`}
        style={{ paddingLeft: `${level * 20}px` }}
      >
        <span className="text-white/20 font-mono text-[11px] w-4 shrink-0">
          {level > 0 ? "├─" : ""}
        </span>
        <span className="text-sm shrink-0">
          {isFolder ? "📂" : "📁"}
        </span>
        <span className={`tracking-tight whitespace-nowrap ${isFolder ? "font-bold" : "font-mono opacity-70 text-[11px]"}`}>
          {name}
        </span>
      </div>

      {hasChildren && (
        <div className="overflow-hidden">
          {children}
        </div>
      )}
    </div>
  );
};

// --- EXPLORADOR DE ARCHIVOS CON SOPORTE TÁCTIL ---
export const ComplexTreeAssets = () => {
  return (
    <div className="font-mono bg-neutral-900 border border-white/10 rounded-sm shadow-2xl max-h-[600px] flex flex-col relative overflow-hidden">
      
      {/* CABECERA STICKY */}
      <div className="shrink-0 bg-neutral-900 z-20 px-6 pt-6 pb-4 border-b border-white/10">
        <div className="text-[10px] text-green-500 font-bold tracking-[0.2em] flex items-center gap-2 uppercase">
          <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
          Jerarquía del proyecto
        </div>
      </div>

      {/* CONTENEDOR CON SCROLL DOBLE:
          - overflow-auto: permite scroll vertical y horizontal
          - touch-pan-x touch-pan-y: mejora el gesto táctil en tablets
          - custom-scrollbar: para tus estilos personalizados
      */}
      <div className="overflow-auto touch-pan-x touch-pan-y p-6 pt-2 relative custom-scrollbar flex-1">
        
        <TreeItem name="Assets" isFolder level={0} color="text-white font-black italic">
          <TreeItem name="Aliados" isFolder level={1} color="text-green-400 italic">
            {["Gohan","Goku","Vegeta"].map(f => (
                <TreeItem key={f} name={f} isFolder level={2} />
              ))}
          </TreeItem>
          
          <TreeItem name="Animator" isFolder level={1} color="text-green-400 italic">
            <TreeItem name="Animaciones" isFolder level={2} color="text-blue-400">
              {["Animaciones Aliados","Animaciones Cinematicas","Animaciones Rodolfo", "Bolas Mágicas", "Broly", "Freezer", "Janemba", "Kefla"].map(f => (
                <TreeItem key={f} name={f} isFolder level={3} />
              ))}
            </TreeItem>
            <TreeItem name="Controlador" isFolder level={2} color="text-blue-400 ">
              {["Controlador Aliados", "Controlador Bolas Magicas", "Controlador cinematicas", "Controlador Enemigos", "Controlador Rodolfo", "Controlador Transformaciones + Menu principal"].map(f => (
                <TreeItem key={f} name={f} isFolder level={3} />
              ))}
            </TreeItem>
          </TreeItem>

          <TreeItem name="Audio" isFolder level={1} color="text-green-400 italic">
              <TreeItem name="Cinematica Deseo shenlong" isFolder level={2} />
              <TreeItem name="Cinematica Inicial" isFolder level={2} />
          </TreeItem>

          <TreeItem name="Bolas Mágicas" isFolder level={1} color="text-green-400 italic">
            {[1,2,3,4,5,6,7].map(n => (
              <TreeItem key={n} name={`${n} Estrella${n > 1 ? 's' : ''}`} isFolder level={2} />
            ))}
            <TreeItem name="Bolas cinematica inicial" isFolder level={2} />
          </TreeItem>

          <TreeItem name="Enemigos" isFolder level={1} color="text-green-400 italic">
            {["Broly", "Cell", "Freezer", "Hit", "Janemba", "Kefla", "Turles"].map(e => (
              <TreeItem key={e} name={e} isFolder level={2} />
            ))}
          </TreeItem>

          <TreeItem name="Imagenes" isFolder level={1} color="text-green-400 italic">
  {["Fin de Nivel", "Fondos", "Fondos Cinematicas", "HUD"].map((img) => {
    // Si la carpeta es "Fondos", le añadimos sus subcarpetas
    if (img === "Fondos") {
      return (
        <TreeItem key={img} name={img} isFolder level={2}>
          <TreeItem name="Fondos Alcala" isFolder level={3} />
          <TreeItem name="Fondos Andujar" isFolder level={3} />
          <TreeItem name="Fondos de los menus" isFolder level={3} />
          <TreeItem name="Fondos Martos" isFolder level={3} />
          <TreeItem name="Fondos Nivel Cazorla" isFolder level={3} />
          <TreeItem name="Fondos Nivel Jaen" isFolder level={3} />
          <TreeItem name="Fondos Selector de nivel" isFolder level={3} />
          <TreeItem name="Fondos Torredonjimeno" isFolder level={3} />
          <TreeItem name="Fondos Ubeda" isFolder level={3} />
          <TreeItem name="Fondos Nivel Extra" isFolder level={3} />
        </TreeItem>
      );
    }
    // Para las demás carpetas, se mantienen normales
    return <TreeItem key={img} name={img} isFolder level={2} />;
  })}
</TreeItem>

          <TreeItem name="Materials" isFolder level={1} color="text-green-400 italic" />
          <TreeItem name="Prefabs" isFolder level={1} color="text-green-400 italic" />
          
          <TreeItem name="Rodolfo" isFolder level={1} color="text-green-500 italic">
             {["Cinematicas"].map(f => (
                <TreeItem key={f} name={f} isFolder level={2} />
              ))}
          </TreeItem>
          
          <TreeItem name="Scenes" isFolder level={1} color="text-green-400 italic">
            <TreeItem name="Cinematicas" isFolder level={2} />
            <TreeItem name="Escena SN" isFolder level={2} />
            <TreeItem name="Escenas de menus etc" isFolder level={2} />
            <TreeItem name="Escenas Historia" isFolder level={2} />
          </TreeItem>

          <TreeItem name="Scripts" isFolder level={1} color="text-green-400 italic">
            {["Aliados", "Animaciones Menus", "Cinematicas", "FinDeNivel", "FinDeNivelSN", "Otros Controladores", "Rodolfo", "Script Control del Menu", "Scripts Transformacion", "Scripts enemigos"].map(s => (
              <TreeItem key={s} name={s} isFolder level={2} />
            ))}
          </TreeItem>
        </TreeItem>

        <div className="mt-8 pt-4 border-t border-white/5 text-[9px] text-white/20 text-center italic uppercase tracking-widest min-w-full">
          Fin del listado de directorios
        </div>
      </div>
    </div>
  );
};