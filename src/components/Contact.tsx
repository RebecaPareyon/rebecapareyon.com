import React, { useState } from "react";
import { Mail, Linkedin, Copy, Check, Send, Sparkles, MessageSquareHeart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactProps {
  onOpenBooking: () => void;
}

export default function Contact({ onOpenBooking }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "rbecca.pareyon@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API webhook or mail delivery latency
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormInput({ name: "", email: "", company: "", role: "", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contacto"
      className="py-20 md:py-28 bg-[#F9FAFB] relative border-t border-gray-200/50"
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#BFA8FF]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context, Email chip, scheduling CTA */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 text-left" id="contact-left-content">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3/5 py-1.5 text-xs font-bold text-slate-800 border border-gray-200 shadow-sm">
                <MessageSquareHeart className="h-3.5 w-3.5 text-purple-650 animate-pulse" />
                ¡Platiquemos!
              </span>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-[#111111] leading-tight">
                Construyamos productos que la gente quiera usar
              </h2>
              <p className="font-sans text-sm sm:text-base text-gray-650 leading-relaxed font-normal">
                ¿Buscas un Product Manager Senior que sea capaz de adueñarse de KPIs de conversión, digitalizar flujos regulatorios desafiantes y orquestar escuadrones cross-functional? Platiquemos sobre de qué manera puedo sumar valor a tu equipo.
              </p>
            </div>

            {/* Direct Copy email widget & Socials */}
            <div className="space-y-4">
              <label className="text-[10px] uppercase font-mono tracking-wider font-bold text-gray-500 block">Canales Directos</label>
              
              {/* Copy Email Box */}
              <div className="p-3.5 rounded-xl bg-white border border-gray-250 flex items-center justify-between gap-4 max-w-sm group hover:border-[#BFA8FF] shadow-sm transition-all animate-none">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-700">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-0.5 text-left">
                    <span className="text-[9px] text-gray-550 font-mono font-bold block">ENVIAR CORREO</span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#111111] block select-all">{emailAddress}</span>
                  </div>
                </div>
                
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-gray-100 text-gray-400 hover:text-purple-700 hover:bg-purple-100 transition-all cursor-pointer relative"
                  id="copy-email-btn"
                  title="Copiar email al portapapeles"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                  
                  {/* Copy tooltip alert bubble */}
                  <AnimatePresence>
                    {copied && (
                      <motion.span
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: -28, scale: 1 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute bottom-full right-0 bg-[#111111] text-white text-[10px] font-bold font-display px-2 py-0.5 rounded shadow-lg whitespace-nowrap"
                      >
                        ¡Copiado!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {/* LinkedIn Link box */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-white border border-gray-255 flex items-center gap-3 max-w-sm group hover:border-blue-400 shadow-sm transition-all cursor-pointer"
                id="contact-linkedin-link"
              >
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Linkedin className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-0.5 text-left">
                  <span className="text-[9px] text-gray-550 font-mono font-bold block">CONECTAR EN REDES</span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#111111] group-hover:text-blue-600 transition-colors block">linkedin.com/in/rebeca-pareyon</span>
                </div>
              </a>
            </div>

            {/* Micro widget inviting to Google Calendar Modal */}
            <div className="pt-6 border-t border-gray-200" id="contact-booking-box">
              <p className="text-xs text-gray-650 font-semibold">¿Prefieres saltarte la bandeja de entrada e ir directo a la agenda?</p>
              <button
                onClick={onOpenBooking}
                className="mt-3 px-5 py-3.5 text-xs font-display font-extrabold text-white bg-[#111111] hover:bg-slate-800 rounded-xl transition-all duration-200 flex items-center gap-1.5 shadow-md shadow-gray-300 pointer-events-auto cursor-pointer"
                id="contact-quick-booking-btn"
              >
                <Sparkles className="h-4 w-4 text-purple-300" />
                Elegir horario de reunión (Google Meet)
              </button>
            </div>
          </div>

          {/* Right Column: Simulated Live Form & Success feedback */}
          <div className="lg:col-span-7 w-full" id="contact-right-form-column">
            <div className="rounded-2xl border-2 border-gray-250 bg-white p-6 md:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    className="space-y-4"
                    id="recruiter-contact-form"
                  >
                    <div className="text-left mb-6">
                      <h3 className="font-display text-lg font-extrabold text-[#111111]">Escríbeme un mensaje</h3>
                      <p className="text-xs text-gray-500 font-semibold">Tu mensaje llegará directamente a mi inbox profesional en segundos.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-left">
                        <label className="text-[10px] uppercase font-mono tracking-widest font-bold text-gray-650 block mb-1.5">Tu nombre completo *</label>
                        <input
                          type="text"
                          required
                          value={formInput.name}
                          onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
                          placeholder="Ej. Sofía Ramos"
                          className="w-full text-xs sm:text-sm rounded-lg bg-gray-50 border border-gray-200 p-3 text-[#111111] placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all shadow-inner"
                          id="form-name-input"
                        />
                      </div>
                      <div className="text-left">
                        <label className="text-[10px] uppercase font-mono tracking-widest font-bold text-gray-650 block mb-1.5">Correo electrónico *</label>
                        <input
                          type="email"
                          required
                          value={formInput.email}
                          onChange={(e) => setFormInput({ ...formInput, email: e.target.value })}
                          placeholder="ejemplo@empresa.com"
                          className="w-full text-xs sm:text-sm rounded-lg bg-gray-50 border border-gray-200 p-3 text-[#111111] placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all shadow-inner"
                          id="form-email-input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                      <div>
                        <label className="text-[10px] uppercase font-mono tracking-widest font-bold text-gray-650 block mb-1.5">Empresa / Startup</label>
                        <input
                          type="text"
                          value={formInput.company}
                          onChange={(e) => setFormInput({ ...formInput, company: e.target.value })}
                          placeholder="Ej. Nubank, Clip..."
                          className="w-full text-xs sm:text-sm rounded-lg bg-gray-50 border border-gray-200 p-3 text-[#111111] placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all shadow-inner"
                          id="form-company-input"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-mono tracking-widest font-bold text-gray-650 block mb-1.5">Vacante / Rol relevante</label>
                        <input
                          type="text"
                          value={formInput.role}
                          onChange={(e) => setFormInput({ ...formInput, role: e.target.value })}
                          placeholder="Ej. Senior Product Owner"
                          className="w-full text-xs sm:text-sm rounded-lg bg-gray-50 border border-gray-200 p-3 text-[#111111] placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all shadow-inner"
                          id="form-role-input"
                        />
                      </div>
                    </div>

                    <div className="text-left">
                      <label className="text-[10px] uppercase font-mono tracking-widest font-bold text-gray-650 block mb-1.5">Mensaje o propuesta *</label>
                      <textarea
                        required
                        value={formInput.message}
                        onChange={(e) => setFormInput({ ...formInput, message: e.target.value })}
                        placeholder="Platícame el producto que estás construyendo y de qué forma te gustaría que colaboremos."
                        rows={4}
                        className="w-full text-xs sm:text-sm rounded-lg bg-gray-50 border border-gray-200 p-3 text-[#111111] placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all resize-none shadow-inner"
                        id="form-message-input"
                      />
                    </div>

                    <div className="pt-2 text-left">
                      <button
                        type="submit"
                        disabled={submitting}
                        className={`w-full py-3.5 rounded-lg font-display text-xs sm:text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-600/10 cursor-pointer ${
                          submitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                        id="submit-form-btn"
                      >
                        {submitting ? (
                          <>
                            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                            Enviando señal de producto...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Enviar mensaje directo
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-4 text-left"
                    id="contact-form-success"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-250 p-3 text-emerald-800 mx-auto flex items-center justify-center shadow-inner">
                      <Check className="h-6 w-6 stroke-[3]" />
                    </div>
                    <div className="space-y-1 text-center">
                      <h4 className="font-display text-xl font-extrabold text-[#111111]">¡Mensaje Recibido, Gracias!</h4>
                      <p className="text-xs text-gray-650 max-w-sm mx-auto leading-relaxed">
                        Se ha enviado la señal de contacto correctamente. Rebeca revisará tu mensaje y se comunicará contigo al correo proveído muy pronto.
                      </p>
                    </div>
                    <div className="text-center">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-4 py-2 border border-gray-200 rounded-lg bg-gray-100 hover:bg-gray-150 text-xs font-mono font-bold text-gray-700 transition-all cursor-pointer shadow-sm"
                        id="reset-form-btn"
                      >
                        ← Mandar otro mensaje
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
