import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePortfolio } from '../context/PortfolioContext';
import { ScrollReveal } from './ScrollReveal';
import { 
  Layers, 
  Code2, 
  Wrench, 
  Check, 
  Sparkles, 
  ChevronRight 
} from 'lucide-react';

export const SkillsMatrix = () => {
  const { lang } = useLanguage();
  const { data } = usePortfolio();
  const { skillCategories } = data;

  return (
    <section id="skills" className="py-20 sm:py-24 relative bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-indigo-500" />
              <span>{lang === 'th' ? 'ทักษะและความเชี่ยวชาญ' : 'Skill Matrix & Tooling'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4">
              {lang === 'th' ? 'ความเชี่ยวชาญด้านวิศวกรรมเครื่องกล' : 'Core Engineering Expertise'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {lang === 'th' 
                ? 'ทักษะที่ครอบคลุมตั้งแต่การออกแบบ 3D CAD, การจำลอง Finite Element Analysis (FEA) จนถึงกระบวนการสั่งผลิตชิ้นงานจริง'
                : 'End-to-end expertise spanning 3D CAD modeling, FEA simulation validation, and high-precision tooling manufacturing.'}
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((cat, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 120}>
              <div
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-5 sm:p-7 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {lang === 'th' ? cat.titleTh : cat.titleEn}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                    {lang === 'th' ? cat.descTh : cat.descEn}
                  </p>

                  {/* Skills List with Progress Bar */}
                  <div className="space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className="text-slate-700 dark:text-slate-200">{skill.name}</span>
                          <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Craft Note */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>Production Tested</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
