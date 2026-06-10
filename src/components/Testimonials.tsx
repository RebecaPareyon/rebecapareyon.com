import { TESTIMONIALS } from "../data";
import { Linkedin, Quote, MessageSquare, Check } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section
      id="testimoniales"
      className="py-20 md:py-28 bg-[#F9FAFB] relative border-t border-gray-200/50"
    >
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#BFA8FF]/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-bold text-slate-800 border border-gray-200 shadow-sm">
            <MessageSquare className="h-3.5 w-3.5 text-purple-650" />
            Referencias & Colegas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
            Qué dicen quienes colaboran conmigo
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-650">
            Testimoniales y referencias profesionales de líderes de ingeniería, diseño de producto y operaciones con los que he lanzado productos fintech de alta complejidad.
          </p>
        </div>

        {/* Testimonials Deck Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl border-2 border-gray-250 bg-white p-6 lg:p-8 hover:border-purple-300 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden text-left"
              id={`testimonial-card-${t.id}`}
            >
              {/* Giant clean quote layout element */}
              <div className="absolute top-4 right-4 text-gray-100/70 group-hover:text-[#BFA8FF]/10 pointer-events-none transition-colors">
                <Quote className="h-24 w-24 shrink-0" />
              </div>

              {/* Endorsement Body Copy */}
              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-100 px-2.5 py-1 text-[10px] font-mono font-bold text-emerald-800 border border-emerald-250">
                  <Check className="h-3 w-3" />
                  RECOMENDACIÓN VERIFICADA
                </div>
                <p className="font-sans text-xs sm:text-sm text-gray-750 leading-relaxed font-normal italic whitespace-pre-line">
                  "{t.text}"
                </p>
              </div>

              {/* Author Row Profile */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between gap-4 relative z-10" id={`testimonial-author-${t.id}`}>
                <div className="flex items-center gap-3">
                  {/* Round initial avatar */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm text-white shrink-0 shadow-sm ${t.avatarBg}`}>
                    {t.avatarLetter}
                  </div>
                  <div>
                    <h4 className="font-display text-xs sm:text-sm font-extrabold text-[#111111]">
                      {t.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 leading-tight font-medium">
                      {t.role} en <strong className="text-gray-700 font-bold">{t.company}</strong>
                    </p>
                  </div>
                </div>

                {/* Simulated linkedin verification trigger */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-550 hover:text-purple-700 hover:bg-purple-50 hover:border-purple-200 transition-all cursor-pointer"
                  title="Verificar en LinkedIn"
                  id={`testimonial-li-link-${t.id}`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
