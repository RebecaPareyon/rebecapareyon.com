import { PRODUCT_APPROACH } from "../data";
import { Compass, Target, Cpu, BarChart3, CheckSquare, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function ProductApproach() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="h-6 w-6 text-purple-600" />;
      case "Target":
        return <Target className="h-6 w-6 text-red-500" />;
      case "Cpu":
        return <Cpu className="h-6 w-6 text-indigo-650" />;
      case "BarChart3":
        return <BarChart3 className="h-6 w-6 text-blue-650" />;
      default:
        return <Compass className="h-6 w-6 text-[#111111]" />;
    }
  };

  return (
    <section
      id="enfoque"
      className="py-20 md:py-28 bg-[#F9FAFB] relative border-t border-gray-200/60"
    >
      <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-[#DFFF5E]/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-800 border border-gray-200 shadow-sm">
            <Compass className="h-3.5 w-3.5 text-purple-600" />
            Product Management Blueprint
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
            Cómo abordo el desarrollo de productos
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
            Metodología estructurada de extremo a extremo que garantiza la alineación estratégica, la velocidad de ejecución y resultados de negocio repetibles.
          </p>
        </div>

        {/* 4 Cards Grid Layout with seamless responsive behavior */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="product-approach-grid">
          {PRODUCT_APPROACH.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border-2 border-gray-250 bg-white p-6 lg:p-8 hover:border-purple-300 shadow-md shadow-gray-200/30 transition-all text-left"
              id={`approach-card-${index}`}
            >
              {/* Card visual status indicators */}
              <div className="flex items-start justify-between">
                <div className="p-3 bg-gray-100 border border-gray-200 rounded-xl group-hover:bg-[#BFA8FF]/10 transition-colors">
                  {getIcon(approach.icon)}
                </div>
                <span className="text-[9px] font-mono font-bold uppercase py-1 px-2.5 rounded-lg bg-gray-100 border border-gray-200 text-gray-600">
                  {approach.metricsText}
                </span>
              </div>

              {/* Approach core body details */}
              <div className="mt-6 space-y-3">
                <h3 className="font-display text-xl font-extrabold text-[#111111] group-hover:text-purple-700 transition-colors">
                  {index + 1}. {approach.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {approach.description}
                </p>
              </div>

              {/* Action activities items */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3" id={`approach-bullets-${index}`}>
                <h4 className="text-[10px] font-mono uppercase tracking-wider text-gray-500 font-bold">Entregables & Acciones Clave</h4>
                <div className="space-y-2.5">
                  {approach.activities.map((act, actIdx) => (
                    <div key={actIdx} className="flex items-start gap-2 text-xs text-gray-700 font-normal">
                      <CheckSquare className="h-4 w-4 text-purple-650 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Enlaces directos a Canva y Miro para ver el proceso interactivo */}
        <div className="mt-14 max-w-3xl mx-auto p-6 md:p-8 bg-gradient-to-tr from-purple-50/40 to-indigo-50/20 border border-purple-100 rounded-2xl text-center space-y-5 shadow-sm" id="process-interactive-blueprint">
          <div className="space-y-1">
            <h4 className="font-display text-base font-extrabold text-slate-900">
              ⚡ ¿Quieres explorar mi proceso a nivel de detalle diagramado?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
              He consolidado mis metodologías, artefactos y flujos reales de descubrimiento en blueprints de proceso directos en Miro y Canva.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://miro.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white text-slate-800 border border-gray-250 hover:border-purple-300 hover:text-purple-700 hover:shadow-md transition-all duration-300 group shadow-sm cursor-pointer"
              id="miro-process-link"
            >
              <span className="w-2 h-2 rounded-full bg-[#0500FF]" />
              Ver Proceso en Miro
              <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </a>
            <a
              href="https://www.canva.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white text-slate-800 border border-gray-250 hover:border-purple-300 hover:text-purple-700 hover:shadow-md transition-all duration-300 group shadow-sm cursor-pointer"
              id="canva-process-link"
            >
              <span className="w-2 h-2 rounded-full bg-[#00C4CC]" />
              Ver Blueprint en Canva
              <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
