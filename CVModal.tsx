import { motion, AnimatePresence } from "motion/react";
import { X, Printer, Download, Mail, Linkedin, FileText, Globe, Award, BookOpen, Phone } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  portraitPath: string;
}

export default function CVModal({ isOpen, onClose, portraitPath }: CVModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 print:p-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm print:hidden"
            id="cv-modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 15 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="relative z-10 w-full max-w-4xl bg-white rounded-2xl border-2 border-gray-250 text-[#111111] shadow-2xl flex flex-col max-h-[92vh] print:max-h-none print:h-auto print:border-none print:shadow-none print:bg-white print:text-black text-left"
            id="cv-modal-content"
          >
            {/* Control Bar - Hidden in Print */}
            <div className="flex items-center justify-between border-b border-gray-150 p-4 md:px-6 print:hidden ml-0 mr-0" id="cv-control-bar">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                <span className="font-display font-extrabold text-xs tracking-wider uppercase text-gray-500">Curriculum Vitae</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-3.5 py-1.5 rounded-lg text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold border border-gray-250 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                  id="print-cv-btn"
                >
                  <Printer className="h-4.5 w-4.5 text-slate-700" />
                  Imprimir / Guardar PDF
                </button>
                <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-[#111111] transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                  id="close-cv-btn"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Scroll Area */}
            <div className="overflow-y-auto p-6 md:p-8 flex-1 print:overflow-visible print:p-0" id="resume-body">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 print:block print:text-black">
                
                {/* Side Info Panel */}
                <div className="md:col-span-4 space-y-6 md:border-r md:border-gray-200 md:pr-6 print:block print:w-full print:border-none print:pr-0">
                  <div className="text-center md:text-left space-y-3">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border border-gray-200 mx-auto md:mx-0 print:hidden">
                      <img
                        src={portraitPath}
                        alt="Rebeca Pareyón"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover font-sans"
                      />
                    </div>
                    <div>
                      <h4 className="font-display text-2xl font-extrabold tracking-tight print:text-black text-[#111111]">Rebeca Pareyón</h4>
                      <p className="text-xs font-mono text-purple-750 uppercase tracking-wider font-extrabold mt-1 print:text-gray-700">Senior Product Manager</p>
                    </div>
                  </div>

                  <div className="space-y-4 border-t border-gray-150 pt-4 print:border-gray-200 text-left">
                    <h5 className="text-xs font-display uppercase tracking-wider font-extrabold text-gray-500 print:text-gray-800">Contacto</h5>
                    <ul className="space-y-2 text-xs text-gray-650 font-semibold print:text-gray-700">
                      <li className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                        <span>rbecca.pareyon@gmail.com</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                        <span>5519530611</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Linkedin className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                        <span>LinkedIn: rebeca-pareyon</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                        <span>CDMX, México</span>
                      </li>
                    </ul>
                  </div>

                  {/* Education Section */}
                  <div className="space-y-4 border-t border-gray-150 pt-4 print:border-gray-200 text-left">
                    <h5 className="text-xs font-display uppercase tracking-wider font-extrabold text-gray-500 print:text-gray-800">Educación</h5>
                    <div className="space-y-4 text-xs text-gray-650 font-medium print:text-gray-700">
                      <div className="space-y-1">
                        <div className="flex items-start gap-1.5 text-[#111111] print:text-black font-extrabold">
                          <BookOpen className="h-3.5 w-3.5 text-purple-650 print:text-gray-600 mt-0.5 shrink-0" />
                          <div>
                            <span>Maestría en Economía, Finanzas e Innovación</span>
                            <span className="block text-[10px] text-gray-500 font-mono font-medium">(promedio 9.8)</span>
                          </div>
                        </div>
                        <p className="text-[10px] text-gray-500 leading-normal font-semibold pl-5">Universidad Autónoma Metropolitana (UAM)</p>
                        <ul className="list-disc list-outside pl-9 text-[10px] text-gray-500 space-y-0.5">
                          <li>Medalla al mérito universitario por mejor promedio de la generación.</li>
                          <li>Mención Académica por Tesis de Investigación.</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-start gap-1.5 text-[#111111] print:text-black font-extrabold">
                          <Award className="h-3.5 w-3.5 text-indigo-600 print:text-gray-600 mt-0.5 shrink-0" />
                          <div>
                            <span>Licenciatura en Economía</span>
                            <span className="block text-[10px] text-gray-500 font-mono font-medium">(promedio 9.0)</span>
                          </div>
                        </div>
                        <p className="text-[10px] text-gray-500 leading-normal font-semibold pl-5">Universidad Autónoma Metropolitana (UAM)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Experience Column */}
                <div className="md:col-span-8 space-y-6 print:block print:w-full print:mt-4 text-left">
                  
                  {/* Executive Summary */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-display uppercase tracking-wider font-extrabold text-gray-500 print:text-gray-800 text-left">Perfil Profesional</h5>
                    <p className="text-xs text-gray-650 leading-relaxed font-normal print:text-gray-700 text-left">
                      Product Manager especialista en la conceptualización, lanzamiento y escalabilidad de productos Fintech y SaaS. Dominio experto en Product Strategy, priorización basada en valor al negocio, gestión de stakeholders y ejecución bajo marcos Agile/Scrum. Con un enfoque en Product-Led Growth, utilizo el análisis de datos e investigación de usuarios para identificar oportunidades de mercado, reducir la fricción en flujos digitales y construir soluciones financieras que maximizan el valor del negocio.
                    </p>
                  </div>

                  {/* Employment History */}
                  <div className="space-y-4 border-t border-gray-150 pt-4 print:border-gray-200 text-left">
                    <h5 className="text-xs font-display uppercase tracking-wider font-extrabold text-gray-500 print:text-gray-800">Experiencia Laboral</h5>
                    
                    <div className="space-y-4">
                      {/* Job 1 */}
                      <div className="space-y-1.5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500">
                          <span className="font-mono text-purple-750 font-extrabold print:text-gray-700">Marzo 2022 - Presente</span>
                          <span className="print:text-gray-500 font-semibold">Círculo de Crédito</span>
                        </div>
                        <h6 className="text-sm font-extrabold text-[#111111] print:text-black">
                          Product Manager / Product Owner
                        </h6>
                        <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-gray-650 font-normal print:text-gray-700 leading-relaxed">
                          <li>Definí la estrategia de evolución de 4 productos B2C y 7 productos B2B enfocados en monitoreo crediticio, protección y engagement recurrente.</li>
                          <li>Lideré la transformación digital del negocio, aumentando la participación de canales digitales de 40% a 80% de las solicitudes totales, generando eficiencias operativas y escalabilidad.</li>
                          <li>Rediseñé el onboarding digital reduciendo el tiempo de contratación en 57%, mejorando la conversión y experiencia del usuario.</li>
                          <li>Diseñé estrategias de cross-sell y productos complementarios que generaron un crecimiento superior al 400% en la adopción de servicios digitales adicionales.</li>
                          <li className="list-none pl-0 mt-1 text-[11px] font-bold text-purple-750 print:text-purple-700">
                            <strong>Logro Clave:</strong> Lideré la estrategia y evolución de un portafolio digital utilizado por más de 500 mil usuarios, impulsando de manera transversal iniciativas de crecimiento, retención y monetización que fortalecieron la adopción digital y la generación de valor para el negocio.
                          </li>
                        </ul>
                      </div>

                      {/* Job 2 */}
                      <div className="space-y-1.5 pt-2 border-t border-dashed border-gray-150 print:border-gray-250">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500">
                          <span className="font-mono text-purple-750 font-extrabold print:text-gray-700">Junio 2021 - Marzo 2022</span>
                          <span className="print:text-gray-500 font-semibold">iVoy delivery</span>
                        </div>
                        <h6 className="text-sm font-extrabold text-[#111111] print:text-black">
                          Financial Planning
                        </h6>
                        <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-gray-650 font-normal print:text-gray-700 leading-relaxed">
                          <li>Lideré el análisis de datos transaccionales y el comportamiento de los modelos de negocio para identificar fricciones operativas y definir iniciativas de optimización en la rentabilidad de la plataforma.</li>
                          <li>Diseñé e implementé las reglas de negocio y el sistema de monitoreo automatizado de costos transaccionales, logrando una reducción del 15% en pérdidas por fraude en colaboración con los equipos de ingeniería y operaciones.</li>
                          <li>Fungí como stakeholder estratégico clave, traduciendo análisis de viabilidad financiera en requerimientos de negocio y roadmaps trimestrales para la toma de decisiones C-Level (CFO y CEO).</li>
                          <li className="list-none pl-0 mt-1 text-[11px] font-bold text-emerald-750 print:text-emerald-700">
                            <strong>Logro Clave:</strong> En mi desarrollo profesional en iVoy recibí un reconocimiento especial del CEO por mi destacado desempeño en el área de finanzas durante el cuarto trimestre de 2021.
                          </li>
                        </ul>
                      </div>

                      {/* Job 3 */}
                      <div className="space-y-1.5 pt-2 border-t border-dashed border-gray-150 print:border-gray-250">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500">
                          <span className="font-mono text-purple-750 font-extrabold print:text-gray-700">Agosto 2019 - Junio 2021</span>
                          <span className="print:text-gray-500 font-semibold">ADO</span>
                        </div>
                        <h6 className="text-sm font-extrabold text-[#111111] print:text-black">
                          Head of Financial Planning
                        </h6>
                        <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-gray-650 font-normal print:text-gray-700 leading-relaxed">
                          <li>Lideré la planeación financiera y el control de gestión para 3 líneas de negocio concurrentes, asegurando la asignación óptima de recursos y la alineación de los objetivos operativos con la visión de crecimiento de la compañía.</li>
                          <li className="list-none pl-0 mt-1 text-[11px] font-bold text-indigo-750 print:text-indigo-700">
                            <strong>Logro Clave:</strong> Establecí comités de seguimiento y marcos de gobernanza presupuestal que redujeron las desviaciones financieras en un 6% global, automatizando la visibilidad de métricas críticas en tiempo real para agilizar la toma de decisiones de la alta dirección.
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  {/* Competencias Block */}
                  <div className="space-y-3 border-t border-gray-150 pt-4 print:border-gray-200 text-left">
                    <h5 className="text-xs font-display uppercase tracking-wider font-extrabold text-gray-500 print:text-gray-800">Competencias</h5>
                    <div className="flex flex-wrap gap-1.5 print:block print:space-x-1.5">
                      {["Growth & Monetization", "Product Strategy / Product Discovery", "Customer Journey Optimization"].map((s) => (
                        <span key={s} className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-800 print:border-gray-300 print:bg-gray-100 print:text-black">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Herramientas Block */}
                  <div className="space-y-3 border-t border-gray-150 pt-4 print:border-gray-200 text-left">
                    <h5 className="text-xs font-display uppercase tracking-wider font-extrabold text-gray-500 print:text-gray-800">Herramientas</h5>
                    <div className="flex flex-wrap gap-1.5 print:block print:space-x-1.5">
                      {["Power BI / Tableau", "Google Analytics", "Miro / JIRA", "Scrum / Kanban / SAFe"].map((h) => (
                        <span key={h} className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-gray-50 border border-gray-200 text-gray-650 print:border-gray-300 print:bg-gray-100 print:text-black">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Print Friendly CSS - Injected directly into the modal container for isolation */}
            <style>{`
              @media print {
                body * {
                  visibility: hidden;
                }
                #cv-modal-content, #cv-modal-content * {
                  visibility: visible;
                }
                #cv-modal-content {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  background: white !important;
                  color: black !important;
                }
                #cv-control-bar, #cv-modal-backdrop {
                  display: none !important;
                }
                #resume-body {
                  background: white !important;
                  color: black !important;
                  padding: 20px !important;
                }
                h4, h5, h6, p, ul, li, span, div {
                  color: black !important;
                }
              }
            `}</style>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
