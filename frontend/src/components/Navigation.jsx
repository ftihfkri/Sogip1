import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { scrollToTop } from '../utils/scrollUtils';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === path) {
      scrollToTop('auto');
      return;
    }

    navigate(path);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/why-sogip', label: 'Why SOGIP' },
    { path: '/master-plan', label: 'Master Plan' },
    { path: '/projects', label: 'Projects' },
    { path: '/news', label: 'News' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      aria-label="Primary navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#0A1628]/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          {/* Logo - CLOSE TO NAV */}
          <div className="flex-shrink-0 lg:mr-8 xl:mr-12">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 min-w-0">
            <div className="flex items-center gap-3 xl:gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                  className="relative group cursor-pointer min-h-11 px-1 flex items-center"
                >
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-[#00D4FF]'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#FFB020]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="flex-1" />
            <motion.button
              onClick={() => handleNavClick('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="min-h-11 px-5 py-2 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-white text-sm font-semibold rounded-lg shadow-lg shadow-[#00D4FF]/20 hover:shadow-[#00D4FF]/40 transition-all duration-300 whitespace-nowrap"
            >
              Contact SOGDC
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden ml-auto w-11 h-11 flex items-center justify-center rounded-lg text-white bg-white/5 hover:bg-white/10 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-navigation"
            className="lg:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain bg-[#0A1628]/98 backdrop-blur-lg border-t border-white/10 shadow-2xl"
          >
            <div className="px-4 sm:px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                  className={`flex items-center w-full min-h-11 px-3 rounded-lg text-left text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#00D4FF] bg-[#00D4FF]/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('/contact')} 
                className="w-full min-h-12 px-6 py-3 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-white font-semibold rounded-lg"
              >
                Contact SOGDC
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
