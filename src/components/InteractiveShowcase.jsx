import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { 
  Sparkles, 
  PartyPopper, 
  CheckCircle2, 
  MoveHorizontal, 
  Compass, 
  Cpu, 
  ShieldCheck, 
  Settings, 
  Activity 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveShowcase = () => {
  const { lang } = useLanguage();

  // Tolerance slider state (microns)
  const [toleranceMicron, setToleranceMicron] = useState(12);

  const triggerBigCelebration = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x, y },
      colors: ['#3b82f6', '#6366f1', '#10b981', '#06b6d4']
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950/60 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5 text-blue-500" />
              <span>{lang === 'th' ? 'ความแม่นยำทางวิศวกรรม' : 'Precision & Quality Craft'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              {lang === 'th' ? 'Precision Engineering & Tolerance Control' : 'Precision Engineering & Tolerance Control'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {lang === 'th'
                ? 'การควบคุมพิกัดความเผื่อระดับไมครอน และการตรวจสอบความแข็งแรงเพื่อสายการผลิตระดับอุตสาหกรรม'
                : 'Micron-level GD&T tolerances and rigorous simulation for high-precision manufacturing lines.'}
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Interactive Engineering Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Mechanism Cycle Simulation */}
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-indigo-500 font-semibold uppercase">01 / Mechanism Simulation</span>
                <Activity className="w-4 h-4 text-indigo-500" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {lang === 'th' ? 'จำลองรอบการทำงาน (Jig Actuation)' : 'Jig Clamping Cycle Test'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                {lang === 'th'
                  ? 'ทดสอบความต่อเนื่องของกลไกล็อกจับยึดชิ้นงานและการคืนตัวของสปริง'
                  : 'Validating rapid-clamp mechanism cycles and zero-play locating pin alignment.'}
              </p>
            </div>

            <button
              onClick={triggerBigCelebration}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-indigo-500/25 transition-transform duration-150 active:scale-90 cursor-pointer flex items-center justify-center gap-2"
            >
              <Settings className="w-4 h-4" />
              <span>{lang === 'th' ? 'ทดสอบรอบการจับยึด (Actuate)' : 'Test Clamping Actuation'}</span>
            </button>
          </div>
          </ScrollReveal>

          {/* Card 2: Micron Tolerance Fit Calculator */}
          <ScrollReveal animation="fade-up" delay={120}>
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-emerald-500 font-semibold uppercase">02 / GD&T Fit Control</span>
                  <MoveHorizontal className="w-4 h-4 text-emerald-500" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {lang === 'th' ? 'พิกัดความเผื่อระดับไมครอน' : 'Micron Tolerance Calculator'}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                  {lang === 'th'
                    ? 'คำนวณระยะสวมพอดี (Clearance Fit) สำหรับหมุดนำทาง HDD'
                    : 'Parametric hole/pin clearance fit for delicate HDD assembly.'}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Tolerance (±µm):</span>
                  <span className="text-lg font-mono font-extrabold text-emerald-600 dark:text-emerald-400">
                    ±{(toleranceMicron / 1000).toFixed(3)} mm
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  value={toleranceMicron}
                  onChange={(e) => setToleranceMicron(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full transition-all duration-75 rounded-full"
                    style={{ width: `${(toleranceMicron / 50) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: ISO & Cleanroom Compliance */}
          <ScrollReveal animation="fade-up" delay={240}>
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-cyan-500 font-semibold uppercase">03 / Cleanroom & ISO Quality</span>
                  <ShieldCheck className="w-4 h-4 text-cyan-500" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {lang === 'th' ? 'มาตรฐานคลีนรูม & ISO 9001' : 'ISO & Cleanroom Auditing'}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                  {lang === 'th'
                    ? 'วัสดุปลอดไฟฟ้าสถิต (ESD-Safe) และการควบคุมเอกสาร 2D BOM สมบูรณ์'
                    : 'ESD-Safe tooling materials, cleanroom compatibility, and ISO BOM control.'}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-indigo-600 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider opacity-80 block">Quality Standard</span>
                  <span className="text-sm font-bold">HDD Cleanroom Class 100</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                  <span>100% Pass</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
