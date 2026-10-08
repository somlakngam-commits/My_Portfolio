import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { 
  Sparkles, 
  Layers, 
  Zap, 
  Cpu
} from 'lucide-react';

export const WhyHireMe = () => {
  const { lang, t } = useLanguage();
  const { whyHireMe } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-6 h-6 text-indigo-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-emerald-500" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-500" />;
      default: return <Sparkles className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <section id="why-hire-me" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>{lang === 'th' ? 'จุดเด่นสำหรับสัมภาษณ์งาน' : 'Interview Value Proposition'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4">
              {lang === 'th' ? 'ทำไมองค์กรถึงต้องการ Mechanical Design Engineer?' : 'Why Hire a Mechanical Design Engineer?'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {lang === 'th' 
                ? 'การผสานความเชี่ยวชาญด้าน 3D CAD, การจำลอง FEA และหลัก DFM ช่วยลดความผิดพลาดในการผลิตชิ้นงานจริง และประหยัดเวลาได้อย่างมหาศาล'
                : 'Combining 3D CAD modeling with FEA simulation and DFM manufacturing principles eliminates physical trial-and-error.'}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {whyHireMe.map((item, idx) => (
            <ScrollReveal key={item.id} animation="fade-up" delay={idx * 90}>
              <div 
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-5 sm:p-7 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {lang === 'th' ? item.titleTh : item.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {lang === 'th' ? item.descTh : item.descEn}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
