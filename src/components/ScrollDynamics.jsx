import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Sparkles, Compass } from 'lucide-react';

export const ScrollDynamics = () => {
  const { lang } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Calculate progress percentage
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScrollY / docHeight) * 100));
        setScrollProgress(progress);
      }

      // Check if user is scrolling UP
      if (currentScrollY < lastScrollY && currentScrollY > 250) {
        setIsScrollingUp(true);
        setShowScrollTop(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsScrollingUp(false);
        // Only hide if scrolled far down
        if (currentScrollY > 400) {
          setShowScrollTop(false);
        }
      } else if (currentScrollY <= 250) {
        setShowScrollTop(false);
        setIsScrollingUp(false);
      }

      lastScrollY = currentScrollY;

      // Track active section for dynamic floating badge (bottom-to-top check)
      const sections = ['contact', 'credentials', 'why-hire-me', 'projects', 'experience'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
      if (currentScrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSectionLabel = () => {
    switch (activeSection) {
      case 'experience':
        return lang === 'th' ? 'ประสบการณ์ & CV' : 'Experience';
      case 'projects':
        return lang === 'th' ? 'ผลงานออกแบบ' : 'Projects';
      case 'why-hire-me':
        return lang === 'th' ? 'จุดเด่นวิศวกร' : 'Why Hire Me';
      case 'credentials':
        return lang === 'th' ? 'ใบรับรอง' : 'Certificates';
      case 'contact':
        return lang === 'th' ? 'ติดต่อสัมภาษณ์' : 'Contact';
      default:
        return '';
    }
  };

  return (
    <>
      {/* 1. Dynamic Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-slate-200/30 dark:bg-slate-800/30"
        aria-hidden="true"
      >
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 transition-all duration-150 ease-out shadow-sm shadow-indigo-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Dynamic Floating Scroll-Up Button & Current Section Indicator */}
      <div 
        className={`fixed bottom-6 right-5 sm:right-8 z-40 flex items-center gap-2 transition-all duration-300 transform-gpu ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
            : 'opacity-0 translate-y-8 scale-90 pointer-events-none'
        }`}
      >
        {/* Dynamic Active Section Badge when scrolling up */}
        {activeSection && isScrollingUp && (
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 text-xs font-semibold shadow-lg border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md animate-in fade-in slide-in-from-right-4 duration-200">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span>{getSectionLabel()}</span>
          </div>
        )}

        {/* Floating Quick Scroll to Top button */}
        <button
          onClick={scrollToTop}
          title={lang === 'th' ? 'เลื่อนขึ้นบนสุด' : 'Back to Top'}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-semibold shadow-xl shadow-indigo-500/30 backdrop-blur-md border border-indigo-400/30 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          <span className="hidden sm:inline font-medium">
            {lang === 'th' ? 'เลื่อนขึ้นบน' : 'Top'}
          </span>
        </button>
      </div>
    </>
  );
};
