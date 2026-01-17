import React from "react";

export default function Footer({ isDark }) {
  return (
    <footer
      className={`mt-40 border-t-4 py-12 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
        isDark
          ? "border-white text-white opacity-80"
          : "border-black text-black opacity-90"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 px-4 md:px-8">
        {/* STATUS SECTION */}
        <div className="flex items-center gap-3">
          <span
            className={`w-2.5 h-2.5 rounded-full animate-pulse ${
              isDark ? "bg-red-500" : "bg-red-600"
            }`}
          ></span>
          <span className="font-bold">System_Status: Online</span>
        </div>

        {/* LOGO SECTION */}
        <span className="font-black italic text-lg md:text-xl tracking-tighter border-x-2 px-4 text-center">
          AFTERBIT_CORE_STATION
        </span>

        {/* BUILD SECTION */}
        <div className="font-bold">
          Build: {new Date().toLocaleDateString().replace(/\//g, ".")}
        </div>
      </div>

      {/* BOTTOM CREDITS */}
      <div
        className={`text-center pt-8 border-t-2 border-dashed ${
          isDark ? "border-white/30" : "border-black/20"
        }`}
      >
        <p className="font-black text-sm md:text-base mb-1">
          David Jiménez Villena — Afterbit
        </p>
        <p className="opacity-60">
          Copyright © {new Date().getFullYear()} // All rights reserved
        </p>
      </div>
    </footer>
  );
}