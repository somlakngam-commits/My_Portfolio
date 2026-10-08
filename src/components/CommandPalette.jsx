import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import { 
  Search, 
  X, 
  Briefcase, 
  Sliders, 
  Sparkles, 
  FileText, 
  Moon, 
  Sun, 
  Globe, 
  Mail, 
  Code2,
  Award,
  FolderKanban
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CommandPalette = ({ isOpen, onClose, onOpenResume }) => {
  const { lang, toggleLang } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener (Cmd+K / Ctrl+K and ESC)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(true); // Toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'experience',
      labelEn: 'View Work Experience & History',
      labelTh: 'ดู ประวัติการทำงาน (Experience)',
      icon: Briefcase,
      action: () => {
        window.location.hash = '#experience';
        onClose();
      }
    },
    {
      id: 'projects',
      labelEn: 'Go to Featured Projects',
      labelTh: 'ไปยัง ผลงานเด่น (Case Studies)',
      icon: FolderKanban,
      action: () => {
        window.location.hash = '#projects';
        onClose();
      }
    },

    {
      id: 'why-hire-me',
      labelEn: 'Why Hire Me (Interview Pitch)',
      labelTh: 'ดูจุดเด่นสัมภาษณ์ (Why Hire Me)',
      icon: Sparkles,
      action: () => {
        window.location.hash = '#why-hire-me';
        onClose();
      }
    },
    {
      id: 'credentials',
      labelEn: 'View Certifications & Credentials',
      labelTh: 'ดู ใบรับรอง (ใบอนุญาต กว. / ผลสอบ TOEIC)',
      icon: Award,
      action: () => {
        window.location.hash = '#credentials';
        onClose();
      }
    },
    {
      id: 'contact',
      labelEn: 'Schedule Interview & Contact',
      labelTh: 'ติดต่อ นัดสัมภาษณ์งาน (Contact)',
      icon: Mail,
      action: () => {
        window.location.hash = '#contact';
        onClose();
      }
    },
    {
      id: 'resume',
      labelEn: 'Open Printable Resume / CV',
      labelTh: 'เปิด ดูเรซูเม่ (CV) พร้อมสั่งพิมพ์',
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'toggle-theme',
      labelEn: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      labelTh: isDark ? 'เปลี่ยนเป็น โหมดสว่าง (Light)' : 'เปลี่ยนเป็น โหมดมืด (Dark)',
      icon: isDark ? Sun : Moon,
      action: () => {
        toggleTheme();
        onClose();
      }
    },
    {
      id: 'toggle-lang',
      labelEn: lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย (TH)',
      labelTh: lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย (TH)',
      icon: Globe,
      action: () => {
        toggleLang();
        onClose();
      }
    },
    {
      id: 'copy-email',
      labelEn: 'Copy Email to Clipboard',
      labelTh: 'คัดลอกอีเมลสำหรับติดต่อ',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(portfolioData.personal.email);
        confetti({ particleCount: 30, spread: 45 });
        onClose();
      }
    }
  ];

  const filtered = actions.filter((act) => {
    const text = (act.labelEn + ' ' + act.labelTh).toLowerCase();
    return text.includes(query.toLowerCase());
  });

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder={lang === 'th' ? 'พิมพ์คำค้นหาหรือคำสั่ง... (เช่น projects, theme, cv)' : 'Type a command or jump to...'}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-800 dark:text-slate-100 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium flex-1">
                    {lang === 'th' ? item.labelTh : item.labelEn}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    ↵ Jump
                  </span>
                </button>
              );
            })
          ) : (
            <div className="p-8 text-center text-xs text-slate-400">
              {lang === 'th' ? 'ไม่พบคำสั่งที่ค้นหา' : 'No commands found'}
            </div>
          )}
        </div>

        {/* Footer tip */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Navigate with mouse or click</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
