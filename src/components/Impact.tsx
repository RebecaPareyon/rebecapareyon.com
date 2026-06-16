import { METRICS } from "../data";
import { TrendingUp, Activity, Zap, Clock, ChevronUp } from "lucide-react";
import { motion } from "motion/react";

export default function Impact() {
  const getIcon = (iconName: string, idx: number) => {
    const iconClass = idx === 3 ? "h-5 w-5 text-[#DFFF5E]" : "h-5 w-5 text-[#111111]";
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp className={iconClass} />;
      case "Activity":
        return <Activity className={iconClass} />;
      case "Zap":
        return <Zap className={iconClass} />;
      case "Clock":
        return <Clock className={iconClass} />;
      default:
        return <Activity className={iconClass} />;
    }
  };

  const getCardStyle = (idx: number) => {
    switch (idx) {
      case 0:
        return "bg-[#BFA8FF] border-2 border-[#111111] text-[#111111] shadow-[6px_6px_0_#111111]";
      case 1:
        return "bg-[#DFFF5E] border-2 border-[#111111] text-[#111111] shadow-[6px_6px_0_#111111]";
      case 2:
        return "bg-white border-2 border-gray-200/80 text-[#111111] shadow-md shadow-gray-200/40";
      default:
        return "bg-[#111111] border-2 border-[#111111] text-white shadow-[6px_6px_0_#BFA8FF]";
    }
  };

  return (
    <section
      id="impacto"
      className="py-20 md:py-28 bg-[#F9FAFB] relative border-t border-gray-200/60"
    >
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/10 px-3 py-1 text-xs font-bold text-slate-900">
            <TrendingUp className="h-3 w-3" />
            Aportando valor al negocio y al usuario
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
            El impacto de un producto se mide en resultados
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
            No mido el éxito por líneas de código o reuniones asistidas, sino por objetivos de negocio alcanzados, la eliminación de fricción para el usuario y un impacto tangible en los ingresos y la retención.
          </p>
        </div>

        {/* Bento Grid layout style card deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="impact-metrics-grid">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default min-h-[250px] ${getCardStyle(idx)}`}
              id={`impact-card-${metric.id}`}
            >
              {/* Card Head */}
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-xl border transition-colors ${idx === 3 ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"}`}>
                  {getIcon(metric.icon, idx)}
                </div>
                <span className={`font-mono text-[9px] uppercase font-bold tracking-wider ${idx === 3 ? "text-gray-400" : "text-gray-600"}`}>
                  METRIC_0{idx + 1}
                </span>
              </div>

              {/* Card Body - Large highlight value */}
              <div className="my-5 space-y-1.5 relative z-10">
                <h3 className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight group-hover:scale-101 transition-transform origin-left ${idx === 3 ? "text-white" : "text-[#111111]"}`}>
                  {metric.value}
                </h3>
                <h4 className={`font-sans text-sm font-bold ${idx === 3 ? "text-gray-200" : "text-[#111111]/90"}`}>
                  {metric.label}
                </h4>
                <p className={`font-sans text-xs leading-relaxed ${idx === 3 ? "text-gray-300" : "text-gray-600"}`}>
                  {metric.description}
                </p>
              </div>

              {/* Card Footer - Trend badge */}
              <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-mono ${idx === 3 ? "border-white/10" : "border-black/5"}`}>
                <span className={idx === 3 ? "text-gray-400" : "text-gray-600"}>Resultado </span>
                <span className={`font-extrabold flex items-center gap-0.5 ${idx === 3 ? "text-[#DFFF5E]" : "text-purple-700"}`}>
                  <ChevronUp className="h-3 w-3" />
                  {metric.trend}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
