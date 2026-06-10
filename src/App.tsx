import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import CaseStudies from "./components/CaseStudies";
import ProductApproach from "./components/ProductApproach";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MeetingModal from "./components/MeetingModal";
import CVModal from "./components/CVModal";
import portraitImage from "./assets/images/rebeca_portrait_1780958067690.png";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);

  // References to our generated assets
  const portraitPath = portraitImage;

  const handleOpenBooking = () => {
    window.open("https://calendar.app.google/PbUj2akPXhnNKP7u7", "_blank", "noopener,noreferrer");
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleOpenCV = () => {
    setIsCVOpen(true);
  };

  const handleCloseCV = () => {
    setIsCVOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111111] selection:bg-[#BFA8FF]/30 selection:text-[#111111] font-sans antialiased overflow-x-hidden relative" id="portfolio-app-root">
      
      {/* Universal Floating Glowing background lights - Softened for light theme */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#BFA8FF]/10 rounded-full blur-[110px] pointer-events-none z-0" />
      <div className="absolute top-[35%] left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[70%] right-0 w-[450px] h-[450px] bg-[#DFFF5E]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Glassmorphic Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Structured Content Sections */}
      <main className="relative z-10">
        
        {/* 1. Hero Entry */}
        <Hero 
          onOpenBooking={handleOpenBooking} 
          onOpenCV={handleOpenCV}
          portraitPath={portraitPath}
        />

        {/* 2. Bento Metrics Impact */}
        <Impact />



        {/* 4. Products Case Studies */}
        <CaseStudies />

        {/* 5. PM Framework Blueprint */}
        <ProductApproach />

        {/* 6. Competencies Skill Chipset */}
        <Skills />

        {/* 7. Warm Biographical Story & Q&A */}
        <AboutMe portraitPath={portraitPath} />

        {/* 8. LinkedIn Endorsements Card Wall */}
        <Testimonials />

        {/* 9. Direct Contact & Quick Mail */}
        <Contact onOpenBooking={handleOpenBooking} />

      </main>

      {/* High-fidelity Footer */}
      <Footer onOpenBooking={handleOpenBooking} onOpenCV={handleOpenCV} />

      {/* MODALS LAYOVER */}
      
      {/* Interactive Booking / Slot Scheduler Modal */}
      <MeetingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

      {/* Interactive CV / PDF printer Modal */}
      <CVModal isOpen={isCVOpen} onClose={handleCloseCV} portraitPath={portraitPath} />

    </div>
  );
}
