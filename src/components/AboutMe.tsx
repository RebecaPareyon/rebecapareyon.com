import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, User, Sparkles, ChevronDown } from "lucide-react";

interface AboutMeProps {
  portraitPath: string;
}

export default function AboutMe({ portraitPath }: AboutMeProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // default first open

  const faqItems = [
    {
      q: "¿Cómo influye mi formación como economista en mi visión de Producto?",
      a: "Tener un background analítico profundo como economista me permite ver el producto como un motor microeconómico. Siento una inclinación innata por modelar flujos de monetización, comprender estímulos de incentivos en el usuario, realizar análisis rigurosos de costes directos y priorizar bajo variables de costo de retraso (Cost of Delay). No solo me enfoco en lanzar código; me aseguro de que haya equilibrio financiero y viabilidad de negocio clara."
    },
    {
      q: "¿Por qué elegí enfocar mi carrera en la industria Fintech?",
      a: "La inclusión y salud financiera son dos de los mayores retos en Latinoamérica y en mercados emergentes. Fintech ofrece la oportunidad única de transformar vidas democratizando el acceso a herramientas que antes eran de uso exclusivo de corporativos gigantes. Solucionar disputas, agilizar onboarding regulatorio de forma digital y dotar a la gente de control real sobre su patrimonio es el mejor uso de la tecnología disponible."
    },
    {
      q: "¿Cómo colaboro con el equipo técnico y de ingeniería?",
      a: "Creo firmemente que el liderazgo de producto se gana resolviendo impedimentos conceptuales y no ordenando tareas. Escribo PRDs sumamente claros que exponen el 'por qué' y el 'para quién', permitiendo que los ingenieros aporten ideas valiosas al 'cómo'. Respeto las restricciones de arquitectura y me gusta dominar las nociones de bases de datos, APIs y procesos asíncronos para hablar un lenguaje común y estimar de forma más asertiva."
    }
  ];

  const handleToggleFaq = (idx: number) => {
    if (openFaqIndex === idx) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(idx);
    }
  };

  return (
    <section
      id="sobre-mi"
      className="py-20 md:py-28 bg-white relative border-t border-gray-200/50"
    >
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Decorative stats */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1" id="about-left-image-column">
            <div className="relative">
              {/* Glow border background decoration */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-300 to-indigo-305 rounded-3xl blur opacity-25 pointer-events-none" />
              
              <div className="relative w-72 h-85 rounded-2xl overflow-hidden border-2 border-gray-200 bg-white shadow-2xl">
                <img
                  src={portraitPath}
                  alt="Rebeca Pareyon - About Section Closeup Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-all duration-700 font-sans"
                  id="about-profile-image"
                />
              </div>

              {/* Fast fact layout board */}
              <div className="absolute -bottom-6 -left-6 bg-white border-2 border-gray-250 rounded-2xl p-4 shadow-xl max-w-[250px] z-20 text-left">
                <div className="flex items-start gap-1.5 text-xs font-bold text-purple-700">
                  <BookOpen className="h-4 w-4 mt-0.5 shrink-0" />
                  <span className="leading-tight">Maestría en Economía con especialización en Finanzas e Innovación</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Copy & Accordion FAQ */}
          <div className="lg:col-span-7 space-y-8 text-left order-1 lg:order-2" id="about-right-content-column">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-bold text-slate-800 border border-gray-200 shadow-sm">
                <User className="h-3.5 w-3.5 text-purple-650" />
                Más allá del producto
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
                Una economista liderando productos de alto crecimiento
              </h2>
              <div className="space-y-4 font-sans text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                <p>
                  Siempre me ha gustado entender cómo funcionan las cosas. Desde pequeña era de las personas que preguntaban por qué y buscaban una mejor forma de hacerlas.
                </p>
                <p>
                  Esa curiosidad me llevó a estudiar economía y, años después, a descubrir el mundo de producto, donde encontré el espacio perfecto para combinar análisis, estrategia y creatividad.
                </p>
                <p>
                  Disfruto aprender constantemente, cuestionar procesos establecidos y encontrar oportunidades donde otros solo ven problemas. Me entusiasma construir soluciones que simplifiquen la vida de las personas y generar impacto a través de productos que realmente sean útiles.
                </p>
              </div>
            </div>

            {/* Q&A Accordion */}
            <div className="space-y-3 pt-4 border-t border-gray-150" id="about-faq-container">
              <h3 className="font-display text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-600" />
                Preguntas comunes de Recruiters
              </h3>
              
              <div className="space-y-2">
                {faqItems.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;

                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-100/30 transition-all overflow-hidden"
                      id={`faq-item-${idx}`}
                    >
                      <button
                        type="button"
                        onClick={() => handleToggleFaq(idx)}
                        className="w-full p-4 flex items-center justify-between text-left font-sans text-xs sm:text-sm font-extrabold text-[#111111] focus:outline-none focus:text-purple-700 transition-colors cursor-pointer"
                        id={`faq-trigger-${idx}`}
                      >
                        <span className="pr-4 leading-normal">{item.q}</span>
                        <ChevronDown className={`h-4 w-4 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-purple-750" : ""}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                            id={`faq-answer-${idx}`}
                          >
                            <div className="p-4 pt-0 border-t border-gray-200/80 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
