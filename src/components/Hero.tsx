import { motion } from "motion/react";
import { Sparkles, ArrowRight, Download, FileText, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenCV: () => void;
  portraitPath: string;
}

export default function Hero({ onOpenBooking, onOpenCV, portraitPath }: HeroProps) {
  const handleScrollToCasos = () => {
    const el = document.getElementById("casos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingBadges = [
    { text: "✓ Product Strategy", pos: "top-4 -left-12 md:-left-16", color: "bg-white border-gray-200 text-[#111111] font-bold shadow-md", delay: 0 },
    { text: "✓ Product Discovery", pos: "top-28 -right-8 md:-right-12", color: "bg-white border-gray-200 text-[#111111] font-bold shadow-md", delay: 1 },
    { text: "✓ Roadmapping", pos: "top-1/3 -right-12 md:-right-16", color: "bg-white border-gray-200 text-[#111111] font-bold shadow-md", delay: 0.5 },
    { text: "✓ Fintech Expert", pos: "bottom-1/3 -left-8 md:-left-12", color: "bg-white border-gray-200 text-[#111111] font-bold shadow-md", delay: 1.5 },
    { text: "✓ Agile Delivery", pos: "bottom-4 -right-10 md:-right-14", color: "bg-white border-gray-200 text-[#111111] font-bold shadow-md", delay: 0.8 },
  ];

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#F9FAFB] text-[#111111] flex flex-col justify-center min-h-screen"
    >
      {/* Background gradients for Mercury/Linear app style ambiance */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#BFA8FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#DFFF5E]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left" id="hero-left-content">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#DFFF5E] rounded-full text-[11px] font-bold tracking-wider uppercase text-[#111111] border border-[#111111] shadow-[2px_2px_0_#111111]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Senior Product Manager
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.1]"
              >
                Especialista en{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  Productos Digitales
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-sans text-lg sm:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl"
              >
                Transformo necesidades complejas en productos escalables que generan impacto para usuarios y resultados para el negocio.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl"
              >
                Más de 4 años liderando productos digitales, definiendo estrategias, construyendo roadmaps, priorizando iniciativas y colaborando con equipos multidisciplinarios para lanzar soluciones fintech centradas en el usuario.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
              id="hero-ctas"
            >
              <button
                onClick={handleScrollToCasos}
                className="px-6 py-3.5 bg-[#111111] hover:bg-black text-white font-display text-sm font-bold rounded-full transition-all duration-200 flex items-center gap-2 group shadow-lg shadow-black/10 cursor-pointer"
                id="hero-primary-cta"
              >
                Ver casos de éxito
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCV}
                className="px-6 py-3.5 bg-white hover:bg-gray-50 text-[#111111] border border-gray-200/80 font-display text-sm font-bold rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm cursor-pointer"
                id="hero-secondary-cta"
              >
                <Download className="h-4 w-4 text-[#BFA8FF]" />
                Descargar CV (PDF / ATS)
              </button>
            </motion.div>

            {/* Empty space after CTAs */}
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-15 lg:col-start-9 flex justify-center py-6 lg:py-10" id="hero-right-content">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, type: "spring", damping: 20 }}
              className="relative w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-100"
            >
              {/* Photo Box Container in modern Rotate form with shadow offset */}
              <div className="absolute inset-0 bg-[#BFA8FF] rounded-3xl transform rotate-3 shadow-[10px_10px_0_#DFFF5E] border border-[#111111] pointer-events-none" />
              
              <div className="absolute inset-2 overflow-hidden rounded-2xl border border-[#111111] bg-[#111111] shadow-2xl group transform rotate-1">
                <img
                  src={portraitPath}
                  alt="Rebeca Pareyón - Senior PM Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 font-sans"
                  id="hero-profile-image"
                />
                
                {/* Visual Glass Filter on image bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#111111] via-[#111111]/45 to-transparent p-4 pt-12 flex flex-col gap-0.5">
                  <span className="font-display font-bold text-base text-white">Rebeca Pareyón</span>
                  <span className="font-mono text-[9px] text-[#DFFF5E] uppercase tracking-wider font-bold">Sr. Product Manager / Fintech Lead</span>
                </div>
              </div>

              {/* Seamless floating badges using motion.div physics simulation */}
              {floatingBadges.map((badge, idx) => (
                <motion.div
                  key={badge.text}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: badge.delay,
                    }
                  }}
                  className={`absolute ${badge.pos} z-20 hidden sm:inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-xs font-bold text-[#111111] shadow-md whitespace-nowrap`}
                  id={`hero-badge-${idx}`}
                >
                  {badge.text}
                </motion.div>
              ))}

              {/* Card visual elements representing fintech dashboard */}
              <div className="absolute -bottom-8 -right-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-xl max-w-[170px] z-20 hidden md:block text-left">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  +58% Growth
                </div>
                <div className="text-[10px] text-gray-500 mt-1 font-medium select-none">Suscripciones crediticias anualizadas</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
