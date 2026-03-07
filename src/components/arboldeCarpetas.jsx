import React from "react";

// --- TREE ITEM ESTÁTICO (Visualmente jerárquico, pero sin clics) ---
const TreeItem = ({ name, isFolder, children, color = "text-white/80", level = 0 }) => {
  const hasChildren = children && children.length > 0;

  return (
    <div className="relative select-none">
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
        className={`flex items-center gap-2 py-1 px-2 ${color}`}
        style={{ paddingLeft: `${level * 20}px` }}
      >
        <span className="text-white/20 font-mono text-[11px] w-4">
          {level > 0 ? "├─" : ""}
        </span>
        <span className="text-sm">
          {isFolder ? "📂" : "📁"}
        </span>
        <span className={`tracking-tight ${isFolder ? "font-bold" : "font-mono opacity-70 text-[11px]"}`}>
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

// --- EXPLORADOR DE ARCHIVOS CON CABECERA PEGADA PERFECTA ---
export const ComplexTreeAssets = () => {
  return (
    <div className="font-mono bg-neutral-900 border border-white/10 rounded-sm shadow-2xl max-h-[600px] overflow-y-auto custom-scrollbar relative flex flex-col">
      
      {/* CABECERA STICKY CORREGIDA */}
      <div className="sticky top-0 bg-neutral-900 z-20 px-6 pt-6 pb-4 border-b border-white/10">
        <div className="text-[10px] text-green-500 font-bold tracking-[0.2em] flex items-center gap-2 uppercase">
          <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
          Jerarquía del proyecto
        </div>
      </div>

      {/* CONTENIDO DEL ÁRBOL CON PADDING LATERAL Y FILTRO DE DESAPARICIÓN */}
      <div className="p-6 pt-2 relative">
        <TreeItem name="Assets" isFolder level={0} color="text-white font-black italic">
          <TreeItem name="Aliados" isFolder level={1} />
          
          <TreeItem name="Animator" isFolder level={1}>
            <TreeItem name="Animaciones" isFolder level={2} color="text-blue-400">
              {["Aliados", "Rodolfo", "Bolas Mágicas", "Broly", "Freezer", "Janemba", "Kefla"].map(f => (
                <TreeItem key={f} name={f} isFolder level={3} />
              ))}
            </TreeItem>
            <TreeItem name="Controlador" isFolder level={2} color="text-yellow-400">
              {["Aliado", "Bolas Magicas", "Enemigos", "Rodolfo", "Transformaciones"].map(f => (
                <TreeItem key={f} name={f} isFolder level={3} />
              ))}
            </TreeItem>
          </TreeItem>

          <TreeItem name="Audio" isFolder level={1} />

          <TreeItem name="Bolas Mágicas" isFolder level={1} color="text-yellow-500">
            {[1,2,3,4,5,6,7].map(n => (
              <TreeItem key={n} name={`${n} Estrella${n > 1 ? 's' : ''}`} isFolder level={2} />
            ))}
          </TreeItem>

          <TreeItem name="Enemigos" isFolder level={1} color="text-red-400">
            {["Broly", "Cell", "Freezer", "Hit", "Janemba", "Kefla", "Turles"].map(e => (
              <TreeItem key={e} name={e} isFolder level={2} />
            ))}
          </TreeItem>

          <TreeItem name="Imagenes" isFolder level={1} color="text-purple-400">
            {["Fin de Nivel", "Fondo", "HUD"].map(img => (
              <TreeItem key={img} name={img} isFolder level={2} />
            ))}
          </TreeItem>

          <TreeItem name="Materials" isFolder level={1} color="text-emerald-400 italic" />
          <TreeItem name="Prefabs" isFolder level={1} color="text-orange-400 italic" />
          <TreeItem name="Rodolfo" isFolder level={1} />
          <TreeItem name="Scenes" isFolder level={1} />

          <TreeItem name="Scripts" isFolder level={1} color="text-cyan-400 underline font-black">
            {["Aliados", "Animaciones Menus", "FinDeNivel", "FinDeNivelSN", "Otros Controladores", "Rodolfo", "Script Control del Menu", "Scripts Transformacion", "Scripts enemigos"].map(s => (
              <TreeItem key={s} name={s} isFolder level={2} />
            ))}
          </TreeItem>
        </TreeItem>

        <div className="mt-8 pt-4 border-t border-white/5 text-[9px] text-white/20 text-center italic uppercase tracking-widest">
          Fin del listado de directorios
        </div>
      </div>
    </div>
  );
};