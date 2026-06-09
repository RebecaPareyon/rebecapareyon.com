import { Linkedin, Mail, FileText, Calendar, ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
  onOpenCV: () => void;
}

export default function Footer({ onOpenBooking, onOpenCV }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 md:py-16 relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#BFA8FF]/3 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 pb-12 border-b border-white/5">
          
          {/* Logo & Slogan */}
          <div className="space-y-3 text-center md:text-left">
            <h4 className="font-display text-xl font-bold uppercase tracking-wider text-white">
              REBECA PAREYÓN
            </h4>
            <p className="font-sans text-sm text-gray-400">
              Construyamos productos que la gente quiera usar.
            </p>
          </div>

          {/* Core Footer Interactive Actions */}
          <div className="flex flex-wrap items-center justify-center gap-2" id="footer-actions-container">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg bg-white/5 text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2 text-xs font-semibold"
              id="footer-li-btn"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>

            {/* Resume CV Modal trigger */}
            <button
              onClick={onOpenCV}
              className="p-3 rounded-lg bg-white/5 text-gray-400 hover:text-[#BFA8FF] hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2 text-xs font-semibold"
              id="footer-cv-btn"
            >
              <FileText className="h-4 w-4" />
              CV (PDF / ATS)
            </button>

            {/* Email mailto link */}
            <a
              href="mailto:rbecca.pareyon@gmail.com"
              className="p-3 rounded-lg bg-white/5 text-gray-400 hover:text-[#DFFF5E] hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2 text-xs font-semibold"
              id="footer-mail-btn"
            >
              <Mail className="h-4 w-4" />
              Correo
            </a>

            {/* Calendar trigger */}
            <button
              onClick={onOpenBooking}
              className="p-3 rounded-lg bg-white/5 text-gray-400 hover:text-emerald-400 hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2 text-xs font-semibold"
              id="footer-booking-btn"
            >
              <Calendar className="h-4 w-4" />
              Agendar Conversación
            </button>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500 font-mono">
            © {currentYear} Rebeca Pareyón. Todos los derechos reservados.
          </div>
          
          {/* Scroll to top button */}
          <button
            onClick={handleScrollToTop}
            className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer"
            id="footer-scroll-top"
          >
            Subir al inicio
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
