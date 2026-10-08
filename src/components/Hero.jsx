import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePortfolio } from '../context/PortfolioContext';
import { ScrollReveal } from './ScrollReveal';
import { 
  ArrowRight, 
  Sparkles, 
  Phone, 
  GraduationCap, 
  Building, 
  FileCheck2,
  UserCheck,
  ChevronDown
} from 'lucide-react';

export const Hero = ({ onOpenResume, onOpenEditProfile }) => {
  const { lang } = useLanguage();
  const { data } = usePortfolio();
  const { personal, stats } = data;

  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-20 sm:pt-24 pb-6 sm:pb-8 flex flex-col justify-between overflow-hidden">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/15 via-blue-500/10 to-teal-500/10 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center my-auto py-2 sm:py-4">
          
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-6 w-full flex flex-col items-start text-left">
            
            <ScrollReveal animation="fade-up">
              {/* Interviewee Introduction Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold mb-4">
                <UserCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>{lang === 'th' ? 'ข้อมูลแนะนำผู้สมัครงาน • วิศวกรเครื่องกล' : 'Candidate Profile • Mechanical Engineer'}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.25] sm:leading-[1.2] mb-5">
                {lang === 'th' ? (
                  <>
                    วิศวกรออกแบบ <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">ที่ใส่ใจในทุกปัญหาและการออกแบบ</span> เพื่อให้ได้ผลงานที่ดีที่สุด
                  </>
                ) : (
                  <>
                    Design Engineer <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">dedicated to every challenge and design detail</span> to deliver the finest results.
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-7">
                {lang === 'th' ? personal.subtitle.th : personal.subtitle.en}
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal animation="fade-up" delay={120} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="#experience"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all duration-200 active:scale-95 group text-center"
                >
                  <span>{lang === 'th' ? 'สำรวจประวัติการทำงาน' : 'Explore Experience'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-sm transition-all duration-200 active:scale-95 text-center"
                >
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  <span>{lang === 'th' ? 'ผลงานโปรเจกต์' : 'Featured Projects'}</span>
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Engineering Credential Card */}
          <div className="lg:col-span-6 w-full">
            <ScrollReveal animation="zoom-in" delay={150}>
              <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 p-5 sm:p-7 md:p-8 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl">
                
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400/80"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-400/80"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400/80"></div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{lang === 'th' ? 'พร้อมสัมภาษณ์งาน' : 'Ready for Interview'}</span>
                  </div>
                </div>

                {/* Profile Card Content */}
                <div className="py-5 sm:py-6 space-y-5 sm:space-y-6">
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Photo from CV */}
                    <div className="w-24 h-32 sm:w-28 sm:h-38 md:w-32 md:h-44 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-lg shrink-0 bg-slate-100 dark:bg-slate-800">
                      <img 
                        src={`${import.meta.env.BASE_URL}profile.png`} 
                        alt="Mr. Somlak Ngamkoh" 
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>

                    <div className="space-y-2 flex-1 min-w-0 text-left">
                      <span className="text-xs sm:text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold block truncate">
                        Engineering Credential
                      </span>
                      <h4 className="text-lg sm:text-2xl md:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight truncate">
                        {lang === 'th' ? personal.nameTh : personal.name}
                      </h4>
                      <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 block truncate">
                        {lang === 'th' ? personal.roleTh : personal.role}
                      </span>

                      <div className="pt-2 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-mono">
                        <div className="flex items-center gap-2 min-w-0">
                          <Building className="w-4 h-4 text-indigo-500 shrink-0" />
                          <span className="truncate" title="Seagate Technology (Prime Design Solutions)">Seagate Technology (Prime Design Solutions)</span>
                        </div>
                        <div className="flex items-center gap-2 min-w-0">
                          <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0" />
                          <span className="truncate">B.Eng. Mechanical (Vongchavalitkul)</span>
                        </div>
                        <div className="flex items-center gap-2 min-w-0">
                          <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="font-semibold text-slate-800 dark:text-slate-200">098-635-7422</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs sm:text-sm">
                    <span className="text-slate-600 dark:text-slate-300 font-semibold">
                      {lang === 'th' ? 'ความเชี่ยวชาญหลัก:' : 'Core Expertise:'}
                    </span>
                    <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold text-xs sm:text-sm">
                      SolidWorks • FEA • Jigs & Fixtures
                    </span>
                  </div>

                  {/* Action Button: View Full CV */}
                  <div className="pt-1.5">
                    <button
                      onClick={onOpenResume}
                      className="group w-full relative inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-blue-600 hover:from-indigo-500 hover:via-indigo-500 hover:to-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35 transition-all duration-200 active:scale-[0.99] cursor-pointer"
                    >
                      <FileCheck2 className="w-5 h-5 text-indigo-100 group-hover:scale-110 transition-transform" />
                      <span>{lang === 'th' ? 'เปิดดู CV ฉบับเต็ม' : 'View Full CV'}</span>
                      <ArrowRight className="w-4 h-4 text-indigo-200 group-hover:translate-x-1 transition-transform ml-0.5" />
                    </button>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Bottom Key Stats Bar & Scroll Down Prompt */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center sm:items-start">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1 text-center sm:text-left">
                    {lang === 'th' ? stat.labelTh : stat.labelEn}
                  </span>
                </div>
              ))}
            </div>

            {/* Subtle Scroll Indicator */}
            <div className="pt-6 sm:pt-7 flex justify-center">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors py-1.5 px-4 rounded-full bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800/70 shadow-xs group cursor-pointer"
              >
                <span>{lang === 'th' ? 'เลื่อนลงเพื่อดูประวัติการทำงานและผลงาน' : 'Scroll down for experience & portfolio'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-indigo-500 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
