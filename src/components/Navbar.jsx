import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Sun, 
  Moon, 
  Globe, 
  Menu, 
  X, 
  Sparkles, 
  FileText, 
  Code2, 
  Briefcase, 
  Mail,
  Sliders,
  UserCheck,
  Award,
  FolderKanban
} from 'lucide-react';

export const Navbar = ({ onOpenResume, onOpenCommand, onOpenEditProfile }) => {
  const { lang, toggleLang, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const { data } = usePortfolio();
  const personal = data.personal;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#experience", labelEn: "Experience", labelTh: "ประสบการณ์", icon: Briefcase },
    { href: "#projects", labelEn: "Projects", labelTh: "ผลงาน", icon: FolderKanban },
    { href: "#why-hire-me", labelEn: "Why Hire Me", labelTh: "จุดเด่น", icon: Sparkles },
    { href: "#credentials", labelEn: "Certificates", labelTh: "ใบรับรอง", icon: Award },
    { href: "#contact", labelEn: "Contact", labelTh: "ติดต่อ", icon: Mail },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo / Brand */}
          <a 
            href="#" 
            className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <div className="flex flex-col min-w-0 text-left">
              <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate max-w-[160px] sm:max-w-none">
                {lang === 'th' ? (personal.nameTh || personal.name) : personal.name}
              </span>
              <span className="text-[10px] sm:text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 truncate max-w-[160px] sm:max-w-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="truncate">{personal.role || "Design Engineer"}</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 px-3 py-1.5 rounded-full shadow-inner shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 whitespace-nowrap shrink-0"
              >
                {lang === 'th' ? link.labelTh : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Action Tools & Switches */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* Edit My Profile Button (Desktop / Tablet) */}
            <button
              onClick={onOpenEditProfile}
              title={lang === 'th' ? 'ใส่ข้อมูลจริงของคุณ' : 'Customize Profile Data'}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800/80 bg-indigo-50/80 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 text-xs font-bold hover:bg-indigo-100 dark:hover:bg-indigo-900 shadow-sm transition-all duration-200 cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
            >
              <UserCheck className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
              <span>{lang === 'th' ? 'ข้อมูลของฉัน' : 'My Data'}</span>
            </button>



            {/* Language Switcher Button (TH / EN) */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
              <span className={lang === 'th' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}>TH</span>
              <span className="text-slate-300 dark:text-slate-700">/</span>
              <span className={lang === 'en' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}>EN</span>
            </button>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm transition-all duration-200 cursor-pointer shrink-0"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 rotate-0 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 rotate-0 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Resume / CV Modal Trigger (Desktop / Tablet) */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-medium shadow-md shadow-indigo-500/25 transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === 'th' ? 'เรซูเม่ (CV)' : 'Resume'}</span>
            </button>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 cursor-pointer shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-2 animate-in fade-in slide-in-from-top duration-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Icon className="w-4 h-4 text-indigo-500" />
                  {lang === 'th' ? link.labelTh : link.labelEn}
                </a>
              );
            })}
            
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 pb-1">
                <button
                  onClick={toggleLang}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{lang === 'th' ? 'ภาษาไทย (TH)' : 'English (EN)'}</span>
                </button>
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
                >
                  {isDark ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>โหมดสว่าง (Light)</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-indigo-500" />
                      <span>โหมดมืด (Dark)</span>
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === 'th' ? 'ดูเรซูเม่ / พิมพ์ CV' : 'View Resume / Print CV'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEditProfile();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors cursor-pointer"
              >
                <UserCheck className="w-4 h-4 text-indigo-500" />
                <span>{lang === 'th' ? 'แก้ไขข้อมูลของฉัน (My Data)' : 'Customize My Data'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
