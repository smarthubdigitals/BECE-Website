import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Palette, Globe, PenTool, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'why-me', label: 'Why Me' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background effect
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlight
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-navy-light/60 backdrop-blur-sm border-2 border-emerald-cta/60 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.25)] group-hover:scale-105 group-hover:border-cyan-accent group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
              <img 
                src="https://imgur.com/SciBXp8.png" 
                alt="Abdul Waheed Logo" 
                className="w-full h-full object-contain p-1"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-poppins font-bold text-lg text-white block leading-none group-hover:text-cyan-accent transition-colors duration-300">
                Abdul Waheed
              </span>
              <span className="font-sans text-[10px] text-cyan-accent font-semibold uppercase tracking-widest block mt-0.5">
                Digital Creator
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md font-poppins font-medium text-sm transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-cyan-accent bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden lg:block">
            <button
              id="cta-nav-hire"
              onClick={onContactClick}
              className="inline-flex items-center space-x-2 bg-emerald-cta hover:bg-emerald-cta/90 text-white px-5 py-2 rounded-full font-poppins font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-emerald-cta/20 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              id="btn-mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-item-mobile-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-md font-poppins font-medium text-base transition-colors ${
                    activeSection === item.id
                      ? 'text-cyan-accent bg-white/5 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  id="cta-mobile-hire"
                  onClick={() => {
                    setIsOpen(false);
                    onContactClick();
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-emerald-cta hover:bg-emerald-cta/90 text-white px-5 py-3 rounded-full font-poppins font-semibold text-base transition-all duration-200"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
