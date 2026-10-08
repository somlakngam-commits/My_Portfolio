import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  AlertCircle,
  ClipboardCheck
} from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  const { lang } = useLanguage();

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl my-2 sm:my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative px-4 sm:px-8 py-4 sm:py-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span className="uppercase">{project.category}</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">
              {lang === 'th' ? project.titleTh : project.titleEn}
            </h3>
            <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-1">
              {lang === 'th' ? project.metricsTh : project.metrics}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8 max-h-[80vh] sm:max-h-[75vh] overflow-y-auto">
          
          {/* Unified Narrative / Description if provided (e.g. Star Micronics Quality Operations) */}
          {caseStudy.descriptionTh ? (
            <div className="space-y-3">
              {caseStudy.sectionTitleTh && (
                <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                  <ClipboardCheck className="w-4 h-4 text-indigo-500" />
                  <span>
                    {lang === 'th' ? caseStudy.sectionTitleTh : caseStudy.sectionTitleEn}
                  </span>
                </h4>
              )}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed bg-indigo-50/50 dark:bg-indigo-950/20 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-900/40">
                {lang === 'th' ? caseStudy.descriptionTh : caseStudy.descriptionEn}
              </p>
            </div>
          ) : (
            <>
              {/* 1. The Challenge / Problem */}
              {caseStudy.problemTh && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>{lang === 'th' ? 'โจทย์และปัญหาที่พบ (The Problem)' : 'The Challenge & Context'}</span>
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed bg-rose-50/50 dark:bg-rose-950/20 p-4 rounded-2xl border border-rose-100 dark:border-rose-900/40">
                    {lang === 'th' ? caseStudy.problemTh : caseStudy.problemEn}
                  </p>
                </div>
              )}

              {/* 2. The Solution & Design Thinking */}
              {caseStudy.solutionTh && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{lang === 'th' ? 'การแก้ปัญหาและแนวคิดดีไซน์ (The Solution)' : 'The Solution & Craft'}</span>
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed bg-indigo-50/50 dark:bg-indigo-950/20 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-900/40">
                    {lang === 'th' ? caseStudy.solutionTh : caseStudy.solutionEn}
                  </p>
                </div>
              )}
            </>
          )}

          {/* 3. Results & Quantifiable Metrics */}
          {caseStudy.results && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>{lang === 'th' ? 'ผลลัพธ์ที่วัดผลได้จริง (Measurable Impact)' : 'Measurable Results & Impact'}</span>
              </h4>
              <div className={`grid gap-3 ${
                caseStudy.results.length >= 3 
                  ? 'grid-cols-1 sm:grid-cols-3' 
                  : caseStudy.results.length === 2 
                    ? 'grid-cols-1 sm:grid-cols-2' 
                    : 'grid-cols-1'
              }`}>
                {caseStudy.results.map((res, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/60 text-center"
                  >
                    <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 block mb-1">
                      {res.value}
                    </span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      {lang === 'th' ? res.labelTh : res.labelEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}



        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {lang === 'th' ? 'ปิดหน้าต่าง' : 'Close Case Study'}
          </button>
        </div>

      </div>
    </div>
  );
};
