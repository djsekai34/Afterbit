import React from "react";

// --- TREE ITEM ESTÁTICO ADAPTATIVO ---
const TreeItem = ({ name, isFolder, children, color, level = 0, isDark }) => {
  const hasChildren = children && children.length > 0;
  const finalColor = color 
    ? color 
    : isDark ? "text-white/80" : "text-zinc-700";

  return (
    <div className="relative select-none min-w-max">
      {/* Línea vertical de jerarquía */}
      {hasChildren && (
        <div 
          className={`absolute w-[1px] ${isDark ? "bg-white/10" : "bg-black/10"}`} 
          style={{ 
            left: `${level * 20 + 17}px`, 
            top: '28px', 
            bottom: '10px' 
          }}
        />
      )}

      <div 
        className={`flex items-center gap-2 py-1 px-2 ${finalColor} ${isDark ? "active:bg-white/5" : "active:bg-black/5"} transition-colors`}
        style={{ paddingLeft: `${level * 20}px` }}
      >
        {/* Conector de rama ├─ */}
        <span className={`font-mono text-[11px] w-4 shrink-0 ${isDark ? "text-white/20" : "text-black/30"}`}>
          {level > 0 ? "├─" : ""}
        </span>
        
        {/* Icono de carpeta */}
        <span className="text-sm shrink-0">
          {isFolder ? "📂" : "📁"}
        </span>
        
        {/* Nombre del archivo/directorio */}
        <span className={`tracking-tight whitespace-nowrap ${
          isFolder ? "font-bold" : `font-mono text-[11px] ${isDark ? "opacity-70" : "opacity-85"}`
        }`}>
          {name}
        </span>
      </div>

      {hasChildren && (
        <div className="overflow-hidden">
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { isDark });
            }
            return child;
          })}
        </div>
      )}
    </div>
  );
};

// --- EXPLORADOR DE ARCHIVOS CON SOPORTE TÁCTIL ---
export const ComplexTreeAssets = ({ isDark }) => {
  return (
    <div className={`font-mono rounded-sm shadow-2xl max-h-[600px] flex flex-col relative overflow-hidden transition-colors duration-300 border ${
      isDark ? "bg-neutral-900 border-white/10" : "bg-zinc-100 border-zinc-300"
    }`}>
      
      {/* CABECERA STICKY */}
      <div className={`shrink-0 z-20 px-6 pt-6 pb-4 border-b transition-colors duration-300 ${
        isDark ? "bg-neutral-900 border-white/10" : "bg-zinc-100 border-zinc-300"
      }`}>
        <div className="text-[10px] text-green-500 font-bold tracking-[0.2em] flex items-center gap-2 uppercase">
          <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
          Jerarquía del proyecto
        </div>
      </div>

      {/* CONTENEDOR DE LOS DIRECTORIOS CON SCROLL DOBLE */}
      <div className="overflow-auto touch-pan-x touch-pan-y p-6 pt-2 relative custom-scrollbar flex-1">
        
        <TreeItem 
          name="Assets" 
          isFolder 
          level={0} 
          isDark={isDark}
          color={isDark ? "text-white font-black italic" : "text-black font-black italic"}
        >
          <TreeItem name="Aliados" isFolder level={1} isDark={isDark} color={isDark ? "text-green-400 italic" : "text-green-600 font-bold italic"}>
            {["Gohan","Goku","Vegeta"].map(f => (
              <TreeItem key={f} name={f} isFolder level={2} isDark={isDark} />
            ))}
          </TreeItem>
          
          <TreeItem name="Animator" isFolder level={1} isDark={isDark} color={isDark ? "text-green-400 italic" : "text-green-600 font-bold italic"}>
            <TreeItem name="Animaciones" isFolder level={2} isDark={isDark} color={isDark ? "text-blue-400" : "text-blue-600 font-bold"}>
              {["Animaciones Aliados","Animaciones Cinematicas","Animaciones Rodolfo", "Bolas Mágicas", "Broly", "Freezer", "Janemba", "Kefla"].map(f => (
                <TreeItem key={f} name={f} isFolder level={3} isDark={isDark} />
              ))}
            </TreeItem>
            <TreeItem name="Controlador" isFolder level={2} isDark={isDark} color={isDark ? "text-blue-400" : "text-blue-600 font-bold"}>
              {["Controlador Aliados", "Controlador Bolas Magicas", "Controlador cinematicas", "Controlador Enemigos", "Controlador Rodolfo", "Controlador Transformaciones + Menu principal"].map(f => (
                <TreeItem key={f} name={f} isFolder level={3} isDark={isDark} />
              ))}
            </TreeItem>
          </TreeItem>

          <TreeItem name="Audio" isFolder level={1} isDark={isDark} color={isDark ? "text-green-400 italic" : "text-green-600 font-bold italic"}>
              <TreeItem name="Cinematica Deseo shenlong" isFolder level={2} isDark={isDark} />
              <TreeItem name="Cinematica Inicial" isFolder level={2} isDark={isDark} />
          </TreeItem>

          <TreeItem name="Bolas Mágicas" isFolder level={1} isDark={isDark} color={isDark ? "text-green-400 italic" : "text-green-600 font-bold italic"}>
            {[1,2,3,4,5,6,7].map(n => (
              <TreeItem key={n} name={`${n} Estrella${n > 1 ? 's' : ''}`} isFolder level={2} isDark={isDark} />
            ))}
            <TreeItem name="Bolas cinematica inicial" isFolder level={2} isDark={isDark} />
          </TreeItem>

          <TreeItem name="Enemigos" isFolder level={1} isDark={isDark} color={isDark ? "text-green-400 italic" : "text-green-600 font-bold italic"}>
            {["Broly", "Cell", "Freezer", "Hit", "Janemba", "Kefla", "Turles"].map(e => (
              <TreeItem key={e} name={e} isFolder level={2} isDark={isDark} />
            ))}
          </TreeItem>

          <TreeItem name="Imagenes" isFolder level={1} isDark={isDark} color={isDark ? "text-green-400 italic" : "text-green-600 font-bold italic"}>
            {["Fin de Nivel", "Fondos", "Fondos Cinematicas", "HUD"].map((img) => {
              if (img === "Fondos") {
                return (
                  <TreeItem key={img} name={img} isFolder level={2} isDark={isDark}>
                    <TreeItem name="Fondos Alcala" isFolder level={3} isDark={isDark} />
                    <TreeItem name="Fondos Andujar" isFolder level={3} isDark={isDark} />
                    <TreeItem name="Fondos de los menus" isFolder level={3} isDark={isDark} />
                    <TreeItem name="Fondos Martos" isFolder level={3} isDark={isDark} />
                    <TreeItem name="Fondos Nivel Cazorla" isFolder level={3} isDark={isDark} />
                    <TreeItem name="Fondos Nivel Jaen" isFolder level={3} isDark={isDark} />
                    <TreeItem name="Fondos Selector de nivel" isFolder level={3} isDark={isDark} />
                    <TreeItem name="Fondos Torredonjimeno" isFolder level={3} isDark={isDark} />
                    <TreeItem name="Fondos Ubeda" isFolder level={3} isDark={isDark} />
                    <TreeItem name="Fondos Nivel Extra" isFolder level={3} isDark={isDark} />
                  </TreeItem>
                );
              }
              return <TreeItem key={img} name={img} isFolder level={2} isDark={isDark} />;
            })}
          </TreeItem>

          <TreeItem name="Materials" isFolder level={1} isDark={isDark} color={isDark ? "text-green-400 italic" : "text-green-600 font-bold italic"} />
          <TreeItem name="Prefabs" isFolder level={1} isDark={isDark} color={isDark ? "text-green-400 italic" : "text-green-600 font-bold italic"} />
          
          <TreeItem name="Rodolfo" isFolder level={1} isDark={isDark} color={isDark ? "text-green-500 italic" : "text-green-600 font-bold italic"}>
             {["Cinematicas"].map(f => (
                <TreeItem key={f} name={f} isFolder level={2} isDark={isDark} />
              ))}
          </TreeItem>
          
          <TreeItem name="Scenes" isFolder level={1} isDark={isDark} color={isDark ? "text-green-400 italic" : "text-green-600 font-bold italic"}>
            <TreeItem name="Cinematicas" isFolder level={2} isDark={isDark} />
            <TreeItem name="Escena SN" isFolder level={2} isDark={isDark} />
            <TreeItem name="Escenas de menus etc" isFolder level={2} isDark={isDark} />
            <TreeItem name="Escenas Historia" isFolder level={2} isDark={isDark} />
          </TreeItem>

          <TreeItem name="Scripts" isFolder level={1} isDark={isDark} color={isDark ? "text-green-400 italic" : "text-green-600 font-bold italic"}>
            {["Aliados", "Animaciones Menus", "Cinematicas", "FinDeNivel", "FinDeNivelSN", "Otros Controladores", "Rodolfo", "Script Control del Menu", "Scripts Transformacion", "Scripts enemigos"].map(s => (
              <TreeItem key={s} name={s} isFolder level={2} isDark={isDark} />
            ))}
          </TreeItem>
        </TreeItem>

        {/* PIE DE LISTADO */}
        <div className={`mt-8 pt-4 border-t text-[9px] text-center italic uppercase tracking-widest min-w-full ${
          isDark ? "border-white/5 text-white/20" : "border-black/5 text-black/40"
        }`}>
          Fin del listado de directorios
        </div>
      </div>
    </div>
  );
};