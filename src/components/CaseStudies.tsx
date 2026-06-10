import React, { useState } from "react";
import { CASE_STUDIES } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, CheckCircle, ArrowUpRight, Lock, Bell, Sparkles, LayoutGrid, CreditCard, ShieldAlert, Cpu, Zap, Building2 } from "lucide-react";

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState<string>("Todos");
  const [expandedId, setExpandedId] = useState<string | null>("reporte-credito"); // default one open

  const filters = ["Todos", "Estrategia", "Monetización", "Seguridad", "Eficiencia Operativa", "B2B"];

  const filteredStudies = activeFilter === "Todos"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(study => study.impactCategory.includes(activeFilter) || study.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())));

  const handleToggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const getCustomStudyIcon = (id: string) => {
    switch (id) {
      case "reporte-credito":
        return <LayoutGrid className="h-5 w-5 text-purple-600" />;
      case "pagos-digitales":
        return <CreditCard className="h-5 w-5 text-emerald-500" />;
      case "notificaciones":
        return <Bell className="h-5 w-5 text-amber-500" />;
      case "protege-historial":
        return <ShieldAlert className="h-5 w-5 text-indigo-600" />;
      case "transformacion-digital":
        return <Cpu className="h-5 w-5 text-blue-600" />;
      case "optimizacion-onboarding":
        return <Zap className="h-5 w-5 text-amber-600" />;
      case "soluciones-b2b":
        return <Building2 className="h-5 w-5 text-slate-500" />;
      default:
        return <Sparkles className="h-5 w-5 text-indigo-500" />;
    }
  };

  return (
    <section
      id="casos"
      className="py-20 md:py-28 bg-[#F9FAFB] relative border-t border-gray-200/60"
    >
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#BFA8FF]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left md:flex md:items-end md:justify-between mb-12">
          <div className="max-w-xl space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-bold text-slate-800 border border-gray-200 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-purple-600" />
              Casos Prácticos de Negocio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
              Productos que he liderado
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
              Explora una selección de iniciativas clave donde diseñé la estrategia de producto, dirigí la ejecución y entregué valor.
            </p>
          </div>

          {/* Quick interactive category filters */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2" id="cases-filters-container">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all duration-300 border ${
                  activeFilter === f
                    ? "bg-[#111111] text-white border-transparent shadow-sm"
                    : "bg-white text-gray-650 border-gray-200/80 hover:text-[#111111] hover:bg-gray-50"
                }`}
                id={`filter-btn-${f.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {f === "Todos" ? "Todo" : f}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Cards Stack */}
        <div className="space-y-6" id="case-studies-container">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, idx) => {
              const isExpanded = expandedId === study.id;
              
              return (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "border-purple-350 bg-white shadow-lg shadow-gray-200/40"
                      : "border-gray-200/85 bg-white hover:border-purple-250 hover:bg-gray-50/20 shadow-sm"
                  }`}
                  id={`case-card-${study.id}`}
                >
                  {/* Card Header Panel */}
                  <div
                    onClick={() => handleToggleExpand(study.id)}
                    className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 cursor-pointer select-none"
                    id={`case-card-header-${study.id}`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Unique customized logo for each item */}
                      <div className="p-3.5 rounded-xl bg-gray-100 border border-gray-200/60 shrink-0">
                        {getCustomStudyIcon(study.id)}
                      </div>
                      <div className="space-y-1 text-left">
                        <div className="flex flex-wrap items-center gap-1.5 col-span-full">
                          <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-purple-700">
                            {study.impactCategory}
                          </span>
                          <span className="text-gray-300 font-light">•</span>
                          <span className="text-xs text-gray-500 font-medium">{study.subtitle}</span>
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#111111] group-hover:text-purple-700 transition-colors">
                          {study.title}
                        </h3>
                      </div>
                    </div>

                    {/* Collapsed stats view on right for quick scan */}
                    <div className="flex items-center gap-6 self-stretch md:self-auto justify-between border-t border-gray-100 md:border-none pt-4 md:pt-0">
                      <div className="text-right">
                        <div className="text-2xl font-display font-extrabold text-purple-700">
                          {study.keyMetric}
                        </div>
                        <div className="text-[9px] uppercase font-mono tracking-wider font-bold text-gray-500">
                          {study.metricLabel}
                        </div>
                      </div>
                      <div className="text-gray-500 p-2.5 bg-gray-100 rounded-lg">
                        {isExpanded ? <ChevronUp className="h-4.5 w-4.5" /> : <ChevronDown className="h-4.5 w-4.5" />}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Case Details (Discovery, Deliverables, Actions & Results metrics) */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-gray-150"
                        id={`case-expandable-body-${study.id}`}
                      >
                        <div className="p-6 md:p-8 bg-gray-50/50 space-y-8 text-left">
                          
                          {/* Tags row */}
                          <div className="flex flex-wrap gap-1.5" id={`case-tags-${study.id}`}>
                            {study.tags.map(t => (
                              <span key={t} className="px-2.5 py-1 text-[10px] font-mono bg-white border border-gray-250/70 text-gray-500 rounded font-bold">
                                #{t}
                              </span>
                            ))}
                          </div>

                          {/* Quick intro summary */}
                          <p className="text-sm font-semibold text-gray-700 border-l-2 border-purple-600 pl-3 leading-relaxed max-w-4xl">
                            {study.description}
                          </p>

                          {/* Problem vs Solution Split */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                            <div className="bg-white border border-gray-200/80 p-5 sm:p-6 rounded-xl space-y-2 shadow-sm">
                              <h4 className="text-xs font-mono uppercase tracking-widest text-purple-750 font-bold">El Reto de Negocio</h4>
                              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                                {study.challenge}
                              </p>
                            </div>
                            <div className="bg-purple-50/30 border border-purple-100 p-5 sm:p-6 rounded-xl space-y-2 shadow-sm">
                              <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-850 font-bold">La Solución Adoptada</h4>
                              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                                {study.solution}
                              </p>
                            </div>
                          </div>

                          {/* Bulleted quantified results section */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-3.5 bg-purple-600 rounded" />
                              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111]">Impacto y Resultados de Negocio</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3" id={`case-results-grid-${study.id}`}>
                              {study.results.map((res, rIdx) => (
                                <div
                                  key={rIdx}
                                  className="flex items-start gap-2.5 p-3.5 bg-white border border-gray-200/80 rounded-xl text-xs sm:text-sm text-gray-650 shadow-sm"
                                >
                                  <CheckCircle className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{res}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Call-to-action simulated detail copy */}
                          <div className="border-t border-gray-200/80 pt-5 flex items-center justify-between text-xs text-gray-500 font-mono">
                            <span>Socio estratégico: Product + Engineering + Design</span>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
