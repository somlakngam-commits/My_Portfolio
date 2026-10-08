import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectModal } from './ProjectModal';
import { ScrollReveal } from './ScrollReveal';
import { 
  Briefcase, 
  ArrowUpRight, 
  Layers, 
  Laptop, 
  Sparkles, 
  ChevronRight,
  SlidersHorizontal
} from 'lucide-react';

export const Projects = () => {
  const { lang } = useLanguage();
  const { data } = usePortfolio();
  const { projects } = data;

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', labelEn: 'All Projects', labelTh: 'ทั้งหมด' },
    { id: 'tooling', labelEn: 'Jigs & Fixtures', labelTh: 'Jigs & Fixtures' },
    { id: 'machinery', labelEn: 'Machine Design', labelTh: 'เครื่องจักร & ผ่อนแรง' },
    { id: 'quality', labelEn: 'Quality & Defect', labelTh: 'ควบคุมคุณภาพ' },
    { id: 'facility', labelEn: 'Facility & PM', labelTh: 'วิศวกรรมอาคาร' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3 whitespace-nowrap">
                <Briefcase className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>{lang === 'th' ? 'ผลงานที่คัดสรร' : 'Curated Works'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 sm:mb-3">
                {lang === 'th' ? 'ผลงานโปรเจกต์วิศวกรรม' : 'Featured Engineering Projects'}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
                {lang === 'th' 
                  ? 'โปรเจกต์การออกแบบจิ๊ก อุปกรณ์จับยึด และระบบผ่อนแรงที่ใช้งานจริงในสายการผลิต'
                  : 'Engineering projects demonstrating tooling design, FEA validation, and production optimization.'}
              </p>
            </div>

            {/* Filter Tabs (Horizontal Scrollable on Mobile) */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar max-w-full shrink-0 -mx-4 px-4 sm:mx-0 sm:px-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                    activeCategory === cat.id
                      ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {lang === 'th' ? cat.labelTh : cat.labelEn}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={idx * 100}>
              <div
                className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top Badge & Metric */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-md border border-emerald-200/50 dark:border-emerald-800/50">
                      {lang === 'th' ? project.metricsTh : project.metrics}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3.5 leading-snug">
                    {lang === 'th' ? project.titleTh : project.titleEn}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {lang === 'th' ? project.shortDescTh : project.shortDescEn}
                  </p>
                </div>

                {/* Action Trigger Button */}
                <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>{lang === 'th' ? 'ดูเคสสตัดีเจาะลึก (Case Study)' : 'View Case Study Details'}</span>
                    <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-950/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xs">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
