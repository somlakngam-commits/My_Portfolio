import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePortfolio } from '../context/PortfolioContext';
import { ScrollReveal } from './ScrollReveal';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building
} from 'lucide-react';

export const ExperienceTimeline = () => {
  const { lang } = useLanguage();
  const { data } = usePortfolio();
  const { experience, education } = data;

  return (
    <section id="experience" className="py-20 sm:py-24 bg-slate-100/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
              <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
              <span>{lang === 'th' ? 'เส้นทางการทำงาน' : 'Career Trajectory'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 sm:mb-4">
              {lang === 'th' ? 'Work Experience & History' : 'Work Experience & History'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {lang === 'th' 
                ? 'ประวัติการทำงานและการสร้างผลลัพธ์ในองค์กรระดับผู้นำ'
                : 'A track record of precision mechanical engineering, tooling design, and production impact.'}
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline List */}
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10 relative before:absolute before:inset-0 before:left-3 sm:before:left-1/2 sm:before:-translate-x-1/2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {experience.map((item, idx) => (
            <ScrollReveal 
              key={idx} 
              animation="fade-up" 
              delay={idx * 120}
            >
              <div 
                className="relative flex flex-col sm:flex-row items-start group"
              >
                {/* Timeline Center Dot */}
                <div className="absolute left-3 sm:left-1/2 -translate-x-1/2 w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-600 z-10 top-7 group-hover:scale-125 transition-transform" />

                {/* Content Card */}
                <div className={`w-full sm:w-[calc(50%-2.5rem)] ml-8 sm:ml-0 ${idx % 2 === 0 ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto'}`}>
                  <div className="p-5 sm:p-7 lg:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-lg transition-all text-left">
                    
                    {/* Period Badge & Company */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-mono text-xs sm:text-sm font-semibold">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                      {lang === 'th' ? item.roleTh : item.roleEn}
                    </h3>
                    <div className="mb-4">
                      <h4 className="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <Building className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                        <span>{item.company}</span>
                      </h4>
                      {item.subContract && (
                        <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono block pl-6 sm:pl-7 mt-0.5">
                          {item.subContract}
                        </span>
                      )}
                    </div>

                    {/* Summary */}
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-5 font-normal">
                      {lang === 'th' ? item.descTh : item.descEn}
                    </p>

                    {/* Bullet Achievements */}
                    <ul className="space-y-3 sm:space-y-3.5 text-sm sm:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed">
                      {(lang === 'th' ? item.achievementsTh : item.achievementsEn).map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5 sm:gap-3">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Education Section */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="max-w-4xl mx-auto mt-16 sm:mt-20">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-md">
              <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400 font-bold text-base sm:text-lg mb-5">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>{lang === 'th' ? 'ประวัติการศึกษา' : 'Education & Degree'}</span>
              </div>
              {education.map((edu, eIdx) => (
                <div key={eIdx} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 font-semibold">{edu.year}</span>
                    {edu.gpa && (
                      <span className="text-xs sm:text-sm font-mono px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold">
                        {edu.gpa}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                    {lang === 'th' ? edu.degreeTh : edu.degreeEn}
                  </h4>
                  <h5 className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400">
                    {lang === 'th' ? edu.institutionTh : edu.institutionEn}
                  </h5>
                  {(lang === 'th' ? edu.detailsTh : edu.detailsEn) && (
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                      {lang === 'th' ? edu.detailsTh : edu.detailsEn}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
