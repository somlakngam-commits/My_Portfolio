import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

export const Footer = () => {
  const { lang } = useLanguage();
  const { data } = usePortfolio();
  const { personal } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Craft Statement */}
          <div className="text-center sm:text-left">
            <span className="font-bold text-sm text-slate-900 dark:text-white">
              {lang === 'th' ? personal.nameTh : personal.name}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {lang === 'th'
                ? 'ออกแบบและพัฒนาด้วย React, Tailwind CSS และ Lucide Icons'
                : 'Crafted with React 19, Tailwind CSS & Lucide Icons.'}
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{lang === 'th' ? 'กลับขึ้นด้านบน' : 'Back to Top'}</span>
          </button>

        </div>

        {/* Copyright notice */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-mono gap-2">
          <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
          <span>Designed & Engineered for Tech Interviews</span>
        </div>
      </div>
    </footer>
  );
};
