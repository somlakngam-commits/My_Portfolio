import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePortfolio } from '../context/PortfolioContext';
import { ScrollReveal } from './ScrollReveal';
import { 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles,
  Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection = () => {
  const { lang } = useLanguage();
  const { data } = usePortfolio();
  const { personal } = data;

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 35,
      spread: 50,
      origin: { x, y },
      colors: ['#6366f1', '#10b981', '#f59e0b']
    });

    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
              <Mail className="w-3.5 h-3.5 text-indigo-500" />
              <span>{lang === 'th' ? 'ติดต่อและนัดสัมภาษณ์' : 'Get In Touch'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4">
              {lang === 'th' ? 'พร้อมร่วมงานและสร้างสรรค์ผลงาน' : "Let's Build Something Exceptional"}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {lang === 'th' 
                ? 'สนใจนัดสัมภาษณ์งาน ปรึกษาโปรเจกต์ หรือต้องการดูผลงานเพิ่มเติม สามารถติดต่อได้โดยตรง'
                : 'Open for full-time Mechanical Design Engineer roles, precision tooling projects, and technical interviews.'}
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Content Card (Centered) */}
        <div className="max-w-2xl mx-auto">
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-10 shadow-sm space-y-6 text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold block mb-2">
                  Fast Contact
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {lang === 'th' ? 'ช่องทางติดต่อโดยตรง' : 'Direct Channels'}
                </h3>
              </div>

              {/* Copy Email Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                <span className="text-xs text-slate-500 block">Email Address:</span>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm sm:text-base font-mono font-semibold text-slate-800 dark:text-slate-100 truncate">
                    {personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-white dark:bg-slate-700 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-indigo-600 dark:text-indigo-300 transition-colors shadow-xs cursor-pointer shrink-0"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                <span className="text-xs text-slate-500 block">Phone / เบอร์โทรศัพท์:</span>
                <div className="flex items-center justify-between gap-3">
                  <a 
                    href={`tel:${personal.phone.replace(/[^0-9]/g, '')}`} 
                    className="text-sm sm:text-base font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    {personal.phone}
                  </a>
                  <a
                    href={`tel:${personal.phone.replace(/[^0-9]/g, '')}`}
                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-500 transition-colors flex items-center gap-2 cursor-pointer shadow-sm shadow-emerald-500/20 shrink-0"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{lang === 'th' ? 'โทรออก' : 'Call'}</span>
                  </a>
                </div>
              </div>

              {/* Location & Status */}
              <div className="pt-2 space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span>{lang === 'th' ? (personal.addressTh || personal.address) : personal.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{lang === 'th' ? personal.statusBadge.th : personal.statusBadge.en}</span>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
