import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Globe, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MeetingModal({ isOpen, onClose }: MeetingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedType, setSelectedType] = useState<string>("15-min");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: ""
  });

  const [timezone, setTimezone] = useState<string>("America/Mexico_City");

  const meetingTypes = [
    {
      id: "15-min",
      title: "Café Virtual (Charla Informal)",
      duration: "15 min",
      description: "Conocernos rápido, ver compatibilidad y platicar sobre la visión de producto fintech.",
      color: "border-gray-200 hover:border-purple-400 bg-white shadow-sm hover:shadow-md"
    },
    {
      id: "30-min",
      title: "Entrevista de Alineación / Rol",
      duration: "30 min",
      description: "Plática a profundidad sobre roles Senior PM, retos del equipo y fit cultural.",
      color: "border-gray-200 hover:border-yellow-550 bg-white shadow-sm hover:shadow-md"
    },
    {
      id: "45-min",
      title: "Deep Dive: Casos de Éxito",
      duration: "45 min",
      description: "Revisión técnica de mis productos, desde discovery hasta resultados de crecimiento.",
      color: "border-gray-200 hover:border-emerald-500 bg-white shadow-sm hover:shadow-md"
    }
  ];

  const availableDates = [
    { day: "Lunes", date: "Junio 15", display: "Lun 15" },
    { day: "Martes", date: "Junio 16", display: "Mar 16" },
    { day: "Miércoles", date: "Junio 17", display: "Mie 17" },
    { day: "Jueves", date: "Junio 18", display: "Jue 18" },
    { day: "Viernes", date: "Junio 19", display: "Vie 19" }
  ];

  const availableSlots = {
    "Junio 15": ["09:00 AM", "10:30 AM", "01:00 PM", "04:30 PM"],
    "Junio 16": ["10:00 AM", "11:30 AM", "02:00 PM", "05:00 PM"],
    "Junio 17": ["09:00 AM", "11:00 AM", "03:30 PM", "04:00 PM"],
    "Junio 18": ["11:00 AM", "01:30 PM", "03:00 PM", "06:00 PM"],
    "Junio 19": ["10:30 AM", "12:00 PM", "02:30 PM", "04:30 PM"]
  };

  const currentSlots = selectedDate ? (availableSlots as any)[selectedDate] || [] : [];

  const handleTypeSelect = (id: string) => {
    setSelectedType(id);
    setStep(2);
  };

  const handleDateTimeSubmit = () => {
    if (selectedDate && selectedTime) {
      setStep(3);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API registration or webhook integration
    setStep(4 as any); 
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSelectedDate("");
      setSelectedTime("");
      setFormData({ name: "", email: "", company: "", role: "", message: "" });
    }, 400);
  };

  const getMeetingLabel = () => {
    const typeObj = meetingTypes.find(t => t.id === selectedType);
    return typeObj ? `${typeObj.title} (${typeObj.duration})` : "";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="absolute inset-0 bg-[#000000]/60 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border-2 border-gray-250 bg-white text-[#111111] shadow-2xl max-h-[90vh] flex flex-col"
            id="meeting-modal-container"
          >
            {/* Top Bar Decoration */}
            <div className="h-1.5 w-full bg-gradient-to-r from-purple-500 via-indigo-400 to-emerald-450" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-150 p-4 md:p-6" id="modal-header">
              <div className="text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-800 border border-gray-200 shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-purple-650" />
                  Product Owner / Senior PM Portfolio
                </span>
                <h3 className="mt-1.5 font-display text-xl font-extrabold tracking-tight text-[#111111]">
                  Agendar Conversación
                </h3>
              </div>
              <button
                onClick={resetAndClose}
                className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-[#111111] transition-colors"
                aria-label="Close modal"
                id="close-modal-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Container */}
            <div className="overflow-y-auto p-4 md:p-6 flex-1 text-left">
              {/* STEP 1: SELECT MEETING TYPE */}
              {step === 1 && (
                <div className="space-y-4" id="step-1-container">
                  <p className="text-sm text-gray-650 leading-relaxed font-normal">
                    ¿En qué tipo de reunión tienes interés? Elige una opción y coordinemos tu horario ideal de manera automatizada.
                  </p>
                  <div className="grid gap-3 mt-4">
                    {meetingTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleTypeSelect(type.id)}
                        className={`flex flex-col md:flex-row md:items-center justify-between text-left p-4 rounded-xl border transition-all duration-300 group cursor-pointer ${type.color}`}
                        id={`meeting-type-${type.id}`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-display font-extrabold text-[#111111] group-hover:text-purple-700 transition-colors">
                              {type.title}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 leading-normal font-medium max-w-md">
                            {type.description}
                          </p>
                        </div>
                        <div className="mt-3 md:mt-0 flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 text-xs font-mono bg-gray-50 border border-gray-200 py-1 px-2.5 rounded-md text-gray-700">
                            <Clock className="h-3 w-3 text-emerald-600" />
                            {type.duration}
                          </span>
                          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="rounded-lg bg-gray-50 border border-gray-200 p-3 flex items-center gap-3 text-xs text-gray-600 font-medium">
                    <Globe className="h-4 w-4 text-purple-600 shrink-0" />
                    <span>Zona horaria detectada automáticamente: <strong className="text-[#111111] font-bold">{timezone}</strong></span>
                  </div>
                </div>
              )}

              {/* STEP 2: SELECT DATE AND TIME */}
              {step === 2 && (
                <div className="space-y-4" id="step-2-container">
                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                    <button 
                      onClick={() => setStep(1)} 
                      className="text-purple-700 font-bold hover:underline font-bold"
                    >
                      ← Cambiar tipo
                    </button>
                    <span>/</span>
                    <span className="text-[#111111] font-bold">{getMeetingLabel()}</span>
                  </div>

                  {/* Date Grid */}
                  <div>
                    <label className="text-sm font-extrabold text-[#111111] block mb-2">1. Selecciona un Día</label>
                    <div className="grid grid-cols-5 gap-2">
                      {availableDates.map((d) => (
                        <button
                          key={d.date}
                          type="button"
                          onClick={() => {
                            setSelectedDate(d.date);
                            setSelectedTime("");
                          }}
                          className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                            selectedDate === d.date
                              ? "border-purple-600 bg-purple-50 text-purple-800 shadow-sm"
                              : "border-gray-200 bg-white hover:border-purple-300"
                          }`}
                          id={`date-btn-${d.display.replace(/\s+/g, '-')}`}
                        >
                          <span className="text-[10px] text-gray-500 font-bold font-mono">{d.day}</span>
                          <span className={`text-sm font-extrabold font-display mt-0.5 ${selectedDate === d.date ? "text-purple-850" : "text-[#111111]"}`}>{d.display}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots Area */}
                  {selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4"
                    >
                      <label className="text-sm font-extrabold text-[#111111] block mb-2">
                        2. Elige un horario (Hora local CDMX)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {currentSlots.length > 0 ? (
                          currentSlots.map((slot: string) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`p-2.5 rounded-lg border text-xs font-mono font-bold tracking-tight text-center transition-all cursor-pointer ${
                                selectedTime === slot
                                  ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                                  : "border-gray-200 bg-gray-50 text-gray-700 hover:border-purple-500 hover:bg-white animate-none"
                              }`}
                              id={`slot-${slot.replace(/\s+|:/g, '-')}`}
                            >
                              {slot}
                            </button>
                          ))
                        ) : (
                          <div className="col-span-full py-4 text-center text-xs text-gray-400 font-semibold">
                            No hay slots disponibles para este día.
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-150 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-gray-500 hover:text-purple-700 font-bold transition-colors"
                    >
                      Atrás
                    </button>
                    <button
                      type="button"
                      disabled={!selectedDate || !selectedTime}
                      onClick={handleDateTimeSubmit}
                      className={`px-5 py-2.5 rounded-lg font-display text-xs font-bold flex items-center gap-1.5 transition-all ${
                        selectedDate && selectedTime
                          ? "bg-purple-600 text-white cursor-pointer hover:bg-purple-750 shadow-md"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                      }`}
                      id="confirm-datetime-btn"
                    >
                      Siguiente paso
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: RECRUITER INFO */}
              {step === 3 && (
                <form onSubmit={handleFormSubmit} className="space-y-4" id="step-3-form">
                  <div className="flex flex-col md:flex-row gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-650 justify-between items-start md:items-center">
                    <div className="flex items-center gap-2 font-semibold text-gray-700">
                      <Calendar className="h-4 w-4 text-purple-650" />
                      <span>{selectedDate}, 2026</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-gray-700">
                      <Clock className="h-4 w-4 text-emerald-600" />
                      <span>{selectedTime} ({getMeetingLabel()})</span>
                    </div>
                    <button 
                      type="button"
                      onClick={() => setStep(2)} 
                      className="text-purple-700 font-bold hover:underline"
                    >
                      Editar
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    <div>
                      <label className="text-xs uppercase tracking-wider font-bold text-gray-650 block mb-1.5">Tu Nombre completo *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Sofía Ramos"
                        className="w-full text-xs sm:text-sm rounded-lg bg-gray-50 border border-gray-200 p-2.5 text-[#111111] focus:outline-none focus:border-purple-600 focus:bg-white transition-all shadow-inner"
                        id="recruiter-name-input"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider font-bold text-gray-650 block mb-1.5">Correo Electrónico *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@empresa.com"
                        className="w-full text-xs sm:text-sm rounded-lg bg-gray-50 border border-gray-200 p-2.5 text-[#111111] focus:outline-none focus:border-purple-600 focus:bg-white transition-all shadow-inner"
                        id="recruiter-email-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs uppercase tracking-wider font-bold text-gray-650 block mb-1.5">Empresa / Startup</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ej. Mercado Libre, Stori..."
                        className="w-full text-xs sm:text-sm rounded-lg bg-gray-50 border border-gray-200 p-2.5 text-[#111111] focus:outline-none focus:border-purple-600 focus:bg-white transition-all shadow-inner"
                        id="recruiter-company-input"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider font-bold text-gray-650 block mb-1.5">Rol sobre el que conversaremos</label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="Ej. Senior Product Manager"
                        className="w-full text-xs sm:text-sm rounded-lg bg-gray-50 border border-gray-200 p-2.5 text-[#111111] focus:outline-none focus:border-purple-600 focus:bg-white transition-all shadow-inner"
                        id="recruiter-role-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider font-bold text-gray-650 block mb-1.5">Mensaje o contexto (Opcional)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Platícame brevemente el enfoque de tu búsqueda o el reto principal de tu equipo."
                      rows={3}
                      className="w-full text-xs sm:text-sm rounded-lg bg-gray-50 border border-gray-200 p-2.5 text-[#111111] focus:outline-none focus:border-purple-600 focus:bg-white transition-all resize-none shadow-inner"
                      id="recruiter-message-input"
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-150 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs text-gray-500 hover:text-purple-700 font-bold transition-colors"
                    >
                      Atrás
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg font-display text-xs font-bold bg-[#111111] hover:bg-slate-800 text-white transition-all flex items-center gap-1.5 shadow-md shadow-black/10 cursor-pointer"
                      id="submit-booking-btn"
                    >
                      Confirmar Reserva
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 4: SUCCESS */}
              {step as any === 4 && (
                <div className="text-center py-6 px-2 space-y-4" id="success-step-container">
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 10, stiffness: 200, delay: 0.1 }}
                      className="rounded-full bg-emerald-100 border border-emerald-250 p-4 text-emerald-800 shadow-sm"
                    >
                      <CheckCircle2 className="h-12 w-12" />
                    </motion.div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display text-2xl font-extrabold tracking-tight text-[#111111]">
                      ¡Reunión Agendada Exitosamente!
                    </h4>
                    <p className="text-sm text-gray-600 font-medium max-w-md mx-auto leading-relaxed">
                      Se ha enviado una confirmación formal para {formData.name || "tu correo"} a <strong className="text-[#111111] font-bold">{formData.email || "ejemplo"}</strong> con la liga para la llamada.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-left max-w-md mx-auto space-y-2.5 text-xs text-gray-650 font-medium shadow-inner">
                    <div className="border-b border-gray-200 pb-2">
                      <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-gray-500">Detalles de la Cita</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tipo de reunión:</span>
                      <span className="font-bold text-[#111111] text-right">{getMeetingLabel()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Fecha y Hora:</span>
                      <span className="font-mono text-purple-750 font-bold text-right">{selectedDate} - {selectedTime}</span>
                    </div>
                    {formData.company && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Empresa:</span>
                        <span className="font-bold text-[#111111] text-right">{formData.company}</span>
                      </div>
                    )}
                    {formData.role && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Rol relevante:</span>
                        <span className="font-bold text-[#111111] text-right">{formData.role}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 flex justify-center">
                    <button
                      onClick={resetAndClose}
                      className="px-6 py-2.5 rounded-lg font-display text-xs font-bold bg-[#111111] hover:bg-slate-800 text-white transition-all cursor-pointer shadow-sm"
                      id="close-success-btn"
                    >
                      Listo, Cerrar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
