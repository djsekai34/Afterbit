export default function BosqueSeparador({ bocataImg, playerImg, enemyImg, isDark = true }) {
  // Paleta dual: en oscuro mantenemos el tono "bosque sangriento" original.
  // En claro subimos luminosidad y bajamos saturación para que no choque con el fondo blanco.
  const colors = isDark
    ? {
        bgTop: "#1a0505",
        bgBottom: "#200a02",
        sun: "#5a1a00",
        fog: "#3a0a00",
        groundBase: "#1a0d05",
        groundEdge: "#2a1a08",
        treeFar: "#0d2210",
        treeNear: "#1a3a1a",
        line: "#a7d6f5",
        lineOpacity: 0.3,
        cornerOpacity: 0.5,
        shadow: "#000",
        shadowOpacity: 0.25,
      }
    : {
        bgTop: "#fbeae6",
        bgBottom: "#f3d9c8",
        sun: "#e8956a",
        fog: "#f0c9a8",
        groundBase: "#d9b88f",
        groundEdge: "#c79f6e",
        treeFar: "#5a7a52",
        treeNear: "#3f6238",
        line: "#1a5d8a",
        lineOpacity: 0.35,
        cornerOpacity: 0.6,
        shadow: "#3a2010",
        shadowOpacity: 0.18,
      };

  return (
    <div className="w-full overflow-hidden select-none pointer-events-none my-3">
      <svg width="100%" viewBox="0 0 680 90" role="img" xmlns="http://www.w3.org/2000/svg">
        <title>Separador bosque supervivencia</title>
        <defs>
          <style>{`
            @keyframes pw{
              0%{transform:translateX(-60px);opacity:0}
              2%{opacity:1}
              55%{transform:translateX(480px);opacity:1}
              65%{transform:translateX(490px);opacity:1}
              82%{transform:translateX(900px);opacity:1}
              92%{transform:translateX(940px);opacity:0}
              100%{transform:translateX(-60px);opacity:0}
            }
            @keyframes ew{
              0%{transform:translateX(-140px);opacity:0}
              2%{opacity:1}
              55%{transform:translateX(360px);opacity:1}
              65%{transform:translateX(370px);opacity:1}
              82%{transform:translateX(800px);opacity:1}
              92%{transform:translateX(840px);opacity:0}
              100%{transform:translateX(-140px);opacity:0}
            }
            @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
            @keyframes bob-fast{0%,100%{transform:translateY(0)}50%{transform:translateY(-1.5px)}}
            @keyframes food-anim{0%,53%{opacity:1}57%,100%{opacity:0}}
            @keyframes hp-anim{
              0%,53%{opacity:0;transform:translateY(4px)}
              56%{opacity:1;transform:translateY(0)}
              68%{opacity:1;transform:translateY(-14px)}
              76%,100%{opacity:0;transform:translateY(-20px)}
            }
            @keyframes flash{0%,53%{opacity:0;r:1px}56%{opacity:0.8;r:16px}62%,100%{opacity:0;r:0}}
            @keyframes t1{0%{transform:translateX(0)}100%{transform:translateX(-680px)}}
            @keyframes t2{0%{transform:translateX(0)}100%{transform:translateX(-680px)}}
            @keyframes fog{0%,100%{opacity:0.07}50%{opacity:0.17}}

            .gp{animation:pw 7s linear infinite}
            .ge{animation:ew 7s linear infinite}
            .pb{animation:bob .45s ease-in-out infinite}
            .eb{animation:bob-fast .32s ease-in-out infinite}
            .fd{animation:food-anim 7s ease-in-out infinite}
            .hp{animation:hp-anim 7s ease-in-out infinite}
            .ef{animation:flash 7s ease-in-out infinite}
            .fog{animation:fog 3s ease-in-out infinite}
            .tl1{animation:t1 18s linear infinite}
            .tl2{animation:t2 7s linear infinite}
          `}</style>
          <clipPath id="sep-sc"><rect x="0" y="0" width="680" height="90"/></clipPath>
        </defs>
        <g clipPath="url(#sep-sc)">
          {/* FONDO */}
          <rect x="0" y="0" width="680" height="90" fill={colors.bgTop} />
          <rect x="0" y="38" width="680" height="52" fill={colors.bgBottom} />
          <ellipse cx="340" cy="40" rx="48" ry="10" fill={colors.sun} opacity="0.4" />
          <rect className="fog" x="0" y="30" width="680" height="35" fill={colors.fog} />

          {/* SUELO */}
          <rect x="0" y="68" width="680" height="22" fill={colors.groundBase} />
          <rect x="0" y="68" width="680" height="3" fill={colors.groundEdge} />

          {/* PARALLAX CAPA LEJANA - lenta (18s) */}
          <g className="tl1" opacity="0.4">
            <g>
              <polygon points="40,52 50,34 60,52" fill={colors.treeFar} />
              <polygon points="180,49 192,30 204,49" fill={colors.treeFar} />
              <polygon points="320,51 330,36 340,51" fill={colors.treeFar} />
              <polygon points="460,47 472,28 484,47" fill={colors.treeFar} />
              <polygon points="600,50 610,33 620,50" fill={colors.treeFar} />
            </g>
            <g transform="translate(680,0)">
              <polygon points="40,52 50,34 60,52" fill={colors.treeFar} />
              <polygon points="180,49 192,30 204,49" fill={colors.treeFar} />
              <polygon points="320,51 330,36 340,51" fill={colors.treeFar} />
              <polygon points="460,47 472,28 484,47" fill={colors.treeFar} />
              <polygon points="600,50 610,33 620,50" fill={colors.treeFar} />
            </g>
          </g>

          {/* PARALLAX CAPA CERCANA - rápida (7s) */}
          <g className="tl2">
            <g>
              <polygon points="0,66 14,40 28,66" fill={colors.treeNear} />
              <polygon points="140,64 156,36 172,64" fill={colors.treeNear} />
              <polygon points="290,65 304,38 318,65" fill={colors.treeNear} />
              <polygon points="450,63 466,34 482,63" fill={colors.treeNear} />
              <polygon points="600,64 614,37 628,64" fill={colors.treeNear} />
            </g>
            <g transform="translate(680,0)">
              <polygon points="0,66 14,40 28,66" fill={colors.treeNear} />
              <polygon points="140,64 156,36 172,64" fill={colors.treeNear} />
              <polygon points="290,65 304,38 318,65" fill={colors.treeNear} />
              <polygon points="450,63 466,34 482,63" fill={colors.treeNear} />
              <polygon points="600,64 614,37 628,64" fill={colors.treeNear} />
            </g>
          </g>

          <line x1="0" y1="1" x2="680" y2="1" stroke={colors.line} strokeWidth="0.5" strokeDasharray="4,4" opacity={colors.lineOpacity} />
          <line x1="0" y1="89" x2="680" y2="89" stroke={colors.line} strokeWidth="0.5" strokeDasharray="4,4" opacity={colors.lineOpacity} />

          {/* BOCADILLO: imagen importada, a nivel del suelo */}
          <g className="fd" transform="translate(480,62)">
            {bocataImg && (
              <image href={bocataImg} x="-11" y="-11" width="22" height="22" preserveAspectRatio="xMidYMid meet" />
            )}
          </g>
          <circle className="ef" cx="480" cy="62" r="1" fill="#f5c542" />

          {/* JUGADOR: imagen fija importada por prop */}
          <g className="gp">
            <g className="pb">
              <ellipse cx="0" cy="76" rx="5" ry="1.5" fill={colors.shadow} opacity={colors.shadowOpacity} />
              {playerImg && (
                <image href={playerImg} x="-11" y="44" width="22" height="32" preserveAspectRatio="xMidYMid meet" />
              )}
              {/* +20 HP sigue al jugador, aparece justo cuando llega al bocadillo. y=40 = justo encima de la cabeza del sprite (que empieza en y=44) */}
              <g className="hp">
                <text fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#4ade80" textAnchor="middle" x="0" y="40">+20 HP</text>
              </g>
            </g>
          </g>

          {/* ENEMIGO: imagen fija importada por prop */}
          <g className="ge">
            <g className="eb">
              <ellipse cx="0" cy="76" rx="5" ry="1.5" fill={colors.shadow} opacity={colors.shadowOpacity} />
              {enemyImg && (
                <image href={enemyImg} x="-11" y="44" width="22" height="32" preserveAspectRatio="xMidYMid meet" />
              )}
            </g>
          </g>

          {/* ESQUINAS */}
          <rect x="1" y="1" width="3" height="3" fill={colors.line} opacity={colors.cornerOpacity} />
          <rect x="676" y="1" width="3" height="3" fill={colors.line} opacity={colors.cornerOpacity} />
          <rect x="1" y="86" width="3" height="3" fill={colors.line} opacity={colors.cornerOpacity} />
          <rect x="676" y="86" width="3" height="3" fill={colors.line} opacity={colors.cornerOpacity} />
        </g>
      </svg>
    </div>
  );
}
