import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "impacto", label: "Impacto" },
    { id: "casos", label: "Productos" },
    { id: "enfoque", label: "Enfoque" },
    { id: "habilidades", label: "Habilidades" },
    { id: "sobre-mi", label: "Sobre Mí" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background glow trigger
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section
      const scrollPosition = window.scrollY + 120;
      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-3 shadow-md shadow-gray-200/5"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          {/* Logo with clean typography */}
          <div className="flex lg:flex-1">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("inicio");
              }}
              className="flex items-center gap-2 group cursor-pointer"
              id="navbar-logo"
            >
              <span className="font-display text-base font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#BFA8FF] transition-colors">
                Rebeca Pareyón
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BFA8FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BFA8FF]"></span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:gap-x-1 rounded-full bg-white border border-gray-200/80 p-1 shadow-sm" id="desktop-menu">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`relative w-[96px] h-8 flex items-center justify-center text-center rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-500 hover:text-[#111111]"
                }`}
                id={`nav-link-${item.id}`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[#111111] rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Right Action CTA Button */}
          <div className="hidden md:flex md:flex-1 md:justify-end">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2 text-xs font-display font-bold text-white bg-[#111111] hover:bg-black rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-sm cursor-pointer"
              id="navbar-booking-cta"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#DFFF5E]" />
              Agendar conversación
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100/80 hover:text-[#111111] transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              id="mobile-menu-toggle"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Slidedown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-lg text-left shadow-lg"
            id="mobile-menu"
          >
            <div className="space-y-1.5 px-4 pb-6 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-semibold border transition-all ${
                    activeSection === item.id
                      ? "bg-[#DFFF5E]/20 border-[#DFFF5E]/40 text-[#111111]"
                      : "border-transparent text-gray-600 hover:bg-gray-100 hover:text-black"
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full text-center py-3 text-xs font-display font-bold text-white bg-[#111111] hover:bg-black rounded-full transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  id="mobile-navbar-booking-cta"
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#DFFF5E]" />
                  Agendar conversación
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
