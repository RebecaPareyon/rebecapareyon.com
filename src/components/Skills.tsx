import React, { useState } from "react";
import { SKILL_CATEGORIES } from "../data";
import { motion } from "motion/react";
import { Search, Sparkles, Check } from "lucide-react";

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getCategorizedBorderGlow = (categoryName: string) => {
    if (categoryName.includes("Strategy")) return "hover:border-purple-300";
    if (categoryName.includes("Fintech")) return "hover:border-blue-300";
    return "hover:border-emerald-350";
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <section
      id="habilidades"
      className="py-20 md:py-28 bg-[#F9FAFB] relative border-t border-gray-200/50"
    >
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-[#BFA8FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-3 text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-bold text-slate-800 border border-gray-200 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-purple-600" />
              Herramientas & Frameworks
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
              Mi Stack de Competencias
            </h2>
            <p className="font-sans text-sm text-gray-650 leading-relaxed">
              Uso las metodologías y herramientas idóneas para cada fase del producto, uniendo la visión teórica de economista con rigor técnico ejecutivo.
            </p>
          </div>

          {/* Interactive Search Field for Recruiters */}
          <div className="relative w-full max-w-xs" id="search-container">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar (Ej. SQL, Agile, Figma...)"
              className="w-full text-xs rounded-xl bg-white border-2 border-gray-255 p-3 pl-10 text-[#111111] placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all shadow-sm"
              id="skill-search-input"
            />
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-gray-400 hover:text-[#111111]"
                id="clear-search-btn"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="skills-categories-grid">
          {SKILL_CATEGORIES.map((cat, idx) => {
            // Check if any of the skills matches the search
            const matchingSkills = cat.skills.filter(s =>
              s.toLowerCase().includes(searchTerm.toLowerCase())
            );

            const hasMatches = matchingSkills.length > 0;
            const isFilterActive = searchTerm.length > 0;

            return (
              <div
                key={cat.name}
                className={`p-6 sm:p-8 rounded-2xl border bg-white transition-all duration-300 flex flex-col justify-between shadow-md shadow-gray-200/30 ${
                  isFilterActive && hasMatches
                    ? "border-purple-300 scale-[1.01]"
                    : isFilterActive && !hasMatches
                    ? "border-gray-200/40 opacity-30 scale-99"
                    : "border-gray-250"
                } ${getCategorizedBorderGlow(cat.name)}`}
                id={`skill-cat-card-${idx}`}
              >
                <div className="space-y-4 text-left">
                  {/* Category title */}
                  <h3 className="font-display text-xs font-extrabold tracking-wider text-[#111111] uppercase border-b border-gray-150 pb-3">
                    {cat.name}
                  </h3>

                  {/* Skills chips flex pack */}
                  <div className="flex flex-wrap gap-2 pt-2 justify-start">
                    {cat.skills.map((skill) => {
                      const isMatched = skill.toLowerCase().includes(searchTerm.toLowerCase());
                      const highlight = isFilterActive && isMatched;
                      const dimmed = isFilterActive && !isMatched;

                      return (
                        <div
                          key={skill}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-300 font-sans ${
                            highlight
                              ? "bg-purple-600 text-white border-purple-600 shadow-sm shadow-purple-600/10"
                              : hoveredSkill === skill
                              ? "bg-purple-50 text-purple-750 border-purple-250"
                              : dimmed
                              ? "bg-gray-50/50 text-gray-300 border-transparent"
                              : "bg-gray-100 text-gray-700 border-gray-200"
                          }`}
                          id={`skill-chip-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <span className="flex items-center gap-1.5">
                            {highlight && <Check className="h-3.5 w-3.5 text-white stroke-[3]" />}
                            {skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-150 flex items-center justify-between text-[10px] font-mono text-gray-400">
                  <span>Competencia verificada</span>
                  <span className="text-gray-500 font-bold">Senior Level</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recruiter fast-filter keywords triggers */}
        <div className="mt-12 text-center" id="quick-keywords-container">
          <p className="text-xs text-gray-500 font-mono">
            ¿Buscas una palabra clave específica? Haz clic para pre-filtrar:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs">
            {["SQL", "Agile", "Discovery", "Fintech Expert", "JTBD", "Product Analytics"].map((word) => (
              <button
                key={word}
                onClick={() => setSearchTerm(word === "Fintech Expert" ? "Fintech" : word)}
                className="px-2.5 py-1.5 rounded-lg bg-white border border-gray-250 text-gray-650 hover:text-purple-600 hover:border-purple-300 active:bg-gray-55 font-mono cursor-pointer transition-all shadow-sm"
              >
                +{word}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
