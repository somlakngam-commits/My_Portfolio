import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePortfolio } from '../context/PortfolioContext';
import { resolveAssetUrl } from '../utils/assetUrl';
import { 
  X, 
  Printer, 
  Mail, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Layers,
  Award,
  Building
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ResumeModal = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();
  const { data } = usePortfolio();
  const { personal, stats, experience, education, skillCategories } = data;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    confetti({ particleCount: 30, spread: 50 });
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl my-2 sm:my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
              Curriculum Vitae (CV)
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              {lang === 'th' ? 'พร้อมพิมพ์หรือบันทึกเป็น PDF' : 'Printable & PDF Ready'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'th' ? 'พิมพ์ / PDF' : 'Print / Save PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-4 sm:p-8 lg:p-12 max-h-[85vh] sm:max-h-[80vh] overflow-y-auto space-y-6 sm:space-y-8 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 print:max-h-none print:p-0">
          
          {/* Header with Photo */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-start gap-5">
              <div className="w-20 h-28 sm:w-24 sm:h-32 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-sm shrink-0 bg-slate-100 dark:bg-slate-800">
                <img 
                  src={resolveAssetUrl('profile.png')} 
                  alt={personal.name} 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {lang === 'th' ? personal.nameTh : personal.name}
                </h1>
                <h2 className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1 uppercase tracking-wide">
                  {lang === 'th' ? personal.roleTh : personal.role}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-xl leading-relaxed">
                  {lang === 'th' ? personal.subtitle.th : personal.subtitle.en}
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-2 font-mono shrink-0">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="font-bold text-slate-800 dark:text-slate-200">{personal.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>{personal.email}</span>
              </div>
              <div className="flex items-start gap-2 max-w-xs">
                <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                <span>{lang === 'th' ? (personal.addressTh || personal.address) : personal.address}</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-500" />
              <span>{lang === 'th' ? 'ประสบการณ์การทำงาน (Work Experience)' : 'Work Experience'}</span>
            </h3>

            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div key={idx} className="space-y-2 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {lang === 'th' ? item.roleTh : item.roleEn}
                      </h4>
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                        {item.company} {item.subContract ? `(${item.subContract})` : ''}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-semibold">{item.period}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {lang === 'th' ? item.descTh : item.descEn}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    {(lang === 'th' ? item.achievementsTh : item.achievementsEn).map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="text-indigo-500 font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies & Education Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-200 dark:border-slate-800">
            {/* Core Competencies */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-500" />
                <span>{lang === 'th' ? 'ความเชี่ยวชาญหลัก (Core Competencies)' : 'Core Competencies'}</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Mechanical Design (SolidWorks)',
                  'Finite Element Analysis (FEA)',
                  'Jigs & Fixtures Design',
                  'Process Improvement & Automation',
                  'Engineering Drawing & GD&T',
                  'Animation for Presentation',
                  'Bill of Materials (BOM)',
                  'ISO Document Control',
                  'HDD Assembly Cleanroom'
                ].map((s, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                <span>{lang === 'th' ? 'ประวัติการศึกษา (Education)' : 'Education'}</span>
              </h3>
              {education.map((edu, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <span className="font-bold block text-slate-900 dark:text-slate-100 text-sm">
                    {lang === 'th' ? edu.degreeTh : edu.degreeEn}
                  </span>
                  <span className="text-indigo-600 dark:text-indigo-400 block font-semibold">
                    {lang === 'th' ? edu.institutionTh : edu.institutionEn}
                  </span>
                  <span className="text-slate-500 font-mono block">
                    {edu.year} • {edu.gpa}
                  </span>
                  {(lang === 'th' ? edu.detailsTh : edu.detailsEn) && (
                    <p className="text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">
                      {lang === 'th' ? edu.detailsTh : edu.detailsEn}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
