import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePortfolio } from '../context/PortfolioContext';
import { resolveAssetUrl } from '../utils/assetUrl';
import { ScrollReveal } from './ScrollReveal';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Globe, 
  FileText, 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink, 
  Languages, 
  SlidersHorizontal,
  Building2,
  Stamp,
  Maximize2,
  X,
  Eye,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CredentialsSection = ({ onOpenEditProfile }) => {
  const { lang } = useLanguage();
  const { data } = usePortfolio();
  const credentials = data.credentials || {};
  const { engineeringLicense, englishProficiency } = credentials;

  const [copiedLicense, setCopiedLicense] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState(null); // { url, title, subtitle }

  const handleCopyLicense = (e) => {
    if (!engineeringLicense?.licenseNo) return;
    navigator.clipboard.writeText(engineeringLicense.licenseNo);
    setCopiedLicense(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 35,
      spread: 50,
      origin: { x, y },
      colors: ['#6366f1', '#10b981', '#f59e0b']
    });

    setTimeout(() => setCopiedLicense(false), 2000);
  };

  return (
    <section id="credentials" className="py-20 sm:py-24 bg-slate-100/60 dark:bg-slate-900/40 relative overflow-hidden border-t border-slate-200/60 dark:border-slate-800/60">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5 text-indigo-500" />
              <span>{lang === 'th' ? 'ใบรับรอง' : 'Certifications & Credentials'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 sm:mb-4">
              {lang === 'th' ? 'ใบรับรอง' : 'Certifications & Official Credentials'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {lang === 'th' 
                ? 'เอกสารหลักฐานจริง: ใบอนุญาตประกอบวิชาชีพวิศวกรรมควบคุม (กว. เครื่องกล) และผลสอบภาษาอังกฤษ TOEIC อย่างเป็นทางการ'
                : 'Verified documentation: Official Council of Engineers (COE) license card and official TOEIC score report.'}
            </p>
          </div>
        </ScrollReveal>

        {/* Primary Row: 2 Verified Hero Cards (Engineering License & TOEIC English Score) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: ใบอนุญาตประกอบวิชาชีพวิศวกรรมควบคุม (COE License Card) */}
          <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-6 flex flex-col">
            <div className="flex-1 rounded-3xl bg-gradient-to-br from-white via-white to-indigo-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/20 border border-slate-200/90 dark:border-slate-800/90 p-5 sm:p-7 shadow-lg shadow-indigo-500/5 relative overflow-hidden flex flex-col justify-between">
              
              <div>
                {/* Header Badge & Active Status (Uniform min-height for alignment) */}
                <div className="flex items-start justify-between gap-3 mb-5 min-h-[52px]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold block truncate">
                        COE Thailand • สภาวิศวกร
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                        {lang === 'th' ? engineeringLicense?.titleTh : engineeringLicense?.titleEn}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200/80 dark:border-emerald-800/80 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{lang === 'th' ? 'ใบอนุญาตสมบูรณ์' : 'Active Licensed'}</span>
                  </span>
                </div>

                {/* Real License Card Image Preview */}
                {engineeringLicense?.imageUrl && (
                  <div className="mb-5">
                    <div 
                      onClick={() => setActiveModalImage({
                        url: resolveAssetUrl(engineeringLicense.imageUrl),
                        title: lang === 'th' ? 'ใบอนุญาตประกอบวิชาชีพวิศวกรรมควบคุม (กว.)' : 'Thai Professional Engineering License',
                        subtitle: `${engineeringLicense.licenseTypeTh} • ${engineeringLicense.disciplineTh} • ${engineeringLicense.licenseNo}`
                      })}
                      className="group relative rounded-2xl overflow-hidden border-2 border-indigo-100 dark:border-indigo-900/50 bg-slate-950 shadow-md cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-200"
                    >
                      <img 
                        src={resolveAssetUrl(engineeringLicense.imageUrl)} 
                        alt="ใบอนุญาตประกอบวิชาชีพวิศวกรรมควบคุม นายสมลักษณ์ งามเกาะ" 
                        className="w-full h-44 sm:h-52 object-cover object-center group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                      />
                      {/* Gradient Overlay & Zoom Prompt */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end justify-between p-3 sm:p-4 text-white">
                        <div>
                          <span className="text-[10px] sm:text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-indigo-600/90 text-white backdrop-blur-xs block mb-1 w-fit">
                            เลขทะเบียน: {engineeringLicense.licenseNo}
                          </span>
                          <span className="text-xs sm:text-sm font-bold block drop-shadow-xs">
                            {lang === 'th' ? 'นาย สมลักษณ์ งามเกาะ' : 'Mr. Somlak Ngamkoh'}
                          </span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                          <span>{lang === 'th' ? 'ดูรูปบัตรจริง' : 'View Full Card'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* License Information Container (Identical 3-row layout) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3 mb-5">
                  {/* Row 1: Level, Discipline & License ID */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-slate-700/60 pb-3">
                    <div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                        {lang === 'th' ? 'ระดับ & สาขาวิชาชีพ' : 'Discipline & Level'}
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white block">
                        {lang === 'th' ? engineeringLicense?.licenseTypeTh : engineeringLicense?.licenseTypeEn}
                      </span>
                      <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold block">
                        {lang === 'th' ? engineeringLicense?.disciplineTh : engineeringLicense?.disciplineEn}
                      </span>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                        {lang === 'th' ? 'เลขทะเบียน กว.' : 'License ID'}
                      </span>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="font-mono text-sm sm:text-base font-extrabold text-indigo-700 dark:text-indigo-300 bg-white dark:bg-slate-700/80 px-2.5 py-1 rounded-lg border border-indigo-200 dark:border-indigo-800/80 shadow-2xs">
                          {engineeringLicense?.licenseNo}
                        </span>
                        <button
                          onClick={handleCopyLicense}
                          className="p-1.5 rounded-lg bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
                          title="Copy license ID"
                        >
                          {copiedLicense ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Dates & Validity */}
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-b border-slate-200/60 dark:border-slate-700/60 pb-3">
                    <div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block mb-1">
                        {lang === 'th' ? 'วันอนุญาต (Issue Date):' : 'Date of Issue:'}
                      </span>
                      <span className="font-mono font-semibold text-slate-800 dark:text-slate-200 text-xs block">
                        {engineeringLicense?.issueDate || '11 Jan 2022'}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono block mt-1">
                        Status: Licensed
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block mb-1">
                        {lang === 'th' ? 'วันหมดอายุ (Expiry Date):' : 'Date of Expiry:'}
                      </span>
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-1">
                        <Calendar className="w-3 h-3 shrink-0" />
                        {engineeringLicense?.expiryDate || '10 Jan 2027'}
                      </span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono block mt-1">
                        Valid & Active
                      </span>
                    </div>
                  </div>

                  {/* Row 3: Board & Member ID */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
                    <span className="flex items-center gap-1.5 truncate">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{lang === 'th' ? engineeringLicense?.issuerTh : engineeringLicense?.issuerEn}</span>
                    </span>
                    <span className="font-mono text-[11px] shrink-0 font-semibold">
                      สมาชิก: {engineeringLicense?.memberNo || '271506'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Tag */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px] font-mono text-slate-400">
                  {lang === 'th' ? '✓ สำเนาบัตรใบอนุญาตพร้อมตรวจสอบ' : '✓ Official License Verified'}
                </span>
                {onOpenEditProfile && (
                  <button
                    onClick={onOpenEditProfile}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                  >
                    <SlidersHorizontal className="w-3 h-3" />
                    <span>{lang === 'th' ? 'แก้ไขเลขใบอนุญาต' : 'Edit License'}</span>
                  </button>
                )}
              </div>

            </div>
          </ScrollReveal>

          {/* Card 2: ผลสอบภาษาอังกฤษ TOEIC (TOEIC Official English Score Card) */}
          <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-6 flex flex-col">
            <div className="flex-1 rounded-3xl bg-gradient-to-br from-white via-white to-blue-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20 border border-slate-200/90 dark:border-slate-800/90 p-5 sm:p-7 shadow-lg shadow-blue-500/5 relative overflow-hidden flex flex-col justify-between">
              
              <div>
                {/* Header Badge (Uniform min-height for alignment) */}
                <div className="flex items-start justify-between gap-3 mb-5 min-h-[52px]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold block truncate">
                        Official ETS Score Report
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                        {englishProficiency?.testName}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-200/80 dark:border-blue-800/80 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    <span>{lang === 'th' ? 'รายงานผลทางการ' : 'Official Report'}</span>
                  </span>
                </div>

                {/* Real TOEIC Score Report Image Preview */}
                {englishProficiency?.imageUrl && (
                  <div className="mb-5">
                    <div 
                      onClick={() => setActiveModalImage({
                        url: resolveAssetUrl(englishProficiency.imageUrl),
                        title: 'TOEIC® Listening & Reading Official Score Report',
                        subtitle: `Report No: ${englishProficiency.reportNo} • Total Score: ${englishProficiency.totalScore} / 990`
                      })}
                      className="group relative rounded-2xl overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 bg-slate-950 shadow-md cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200"
                    >
                      <img 
                        src={resolveAssetUrl(englishProficiency.imageUrl)} 
                        alt="TOEIC Official Score Report นายสมลักษณ์ งามเกาะ" 
                        className="w-full h-44 sm:h-52 object-cover object-center group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                      />
                      {/* Gradient Overlay & Zoom Prompt */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end justify-between p-3 sm:p-4 text-white">
                        <div>
                          <span className="text-[10px] sm:text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-blue-600/90 text-white backdrop-blur-xs block mb-1 w-fit">
                            Total Score: {englishProficiency.totalScore} / 990
                          </span>
                          <span className="text-xs sm:text-sm font-bold block drop-shadow-xs">
                            SOMLAK NGAMKOH • CEFR B1
                          </span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                          <span>{lang === 'th' ? 'ดูใบรายงานคะแนนจริง' : 'View Full Report'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Score Showcase Display (Identical 3-row layout) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3 mb-5">
                  {/* Row 1: Total Score, Level & Report ID */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-slate-700/60 pb-3">
                    <div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                        {lang === 'th' ? 'คะแนนรวมทางการ (Total Score)' : 'Official Total Score'}
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono">
                          {englishProficiency?.totalScore}
                        </span>
                        <span className="text-xs font-mono text-slate-400 font-bold">
                          / {englishProficiency?.maxScore || 990}
                        </span>
                      </div>
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold block">
                        {lang === 'th' ? 'ระดับ CEFR B1 • Independent User' : 'CEFR Level B1 • Independent User'}
                      </span>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                        {lang === 'th' ? 'เลขที่รายงานผล' : 'Report No.'}
                      </span>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="font-mono text-sm sm:text-base font-extrabold text-blue-700 dark:text-blue-300 bg-white dark:bg-slate-700/80 px-2.5 py-1 rounded-lg border border-blue-200 dark:border-blue-800/80 shadow-2xs">
                          {englishProficiency?.reportNo || 'IJ 0080518'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Listening & Reading Subscore Meters */}
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-b border-slate-200/60 dark:border-slate-700/60 pb-3">
                    {/* Listening Subscore */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          {lang === 'th' ? 'การฟัง (Listening):' : 'Listening:'}
                        </span>
                        <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                          {englishProficiency?.listeningScore || 345}/495
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-600 overflow-hidden mb-1">
                        <div 
                          className="h-full bg-blue-500 rounded-full transition-all duration-500"
                          style={{ width: `${((englishProficiency?.listeningScore || 345) / 495) * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono block">
                        Level: {englishProficiency?.listeningLevel || 'B1'}
                      </span>
                    </div>

                    {/* Reading Subscore */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          {lang === 'th' ? 'การอ่าน (Reading):' : 'Reading:'}
                        </span>
                        <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                          {englishProficiency?.readingScore || 245}/495
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-600 overflow-hidden mb-1">
                        <div 
                          className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                          style={{ width: `${((englishProficiency?.readingScore || 245) / 495) * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono block">
                        Level: {englishProficiency?.readingLevel || 'A2'}
                      </span>
                    </div>
                  </div>

                  {/* Row 3: Institution & Test Date */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
                    <span className="flex items-center gap-1.5 truncate">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">TOEIC® Services Thailand (ETS)</span>
                    </span>
                    <span className="font-mono text-[11px] shrink-0 font-semibold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{lang === 'th' ? (englishProficiency?.testDateTh || '4 เม.ย. 2569') : (englishProficiency?.testDate || 'April 4, 2026')}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Tag */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px] font-mono text-slate-400">
                  {lang === 'th' ? '✓ รายงานผลสอบทางการจากสถาบัน ETS' : '✓ Official ETS Certified Score'}
                </span>
                {onOpenEditProfile && (
                  <button
                    onClick={onOpenEditProfile}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                  >
                    <SlidersHorizontal className="w-3 h-3" />
                    <span>{lang === 'th' ? 'แก้ไขคะแนน TOEIC' : 'Edit TOEIC'}</span>
                  </button>
                )}
              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>

      {/* Lightbox Modal for Full Image Inspection */}
      {activeModalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                  {activeModalImage.title}
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {activeModalImage.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href={activeModalImage.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Open image in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setActiveModalImage(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image View */}
            <div className="p-2 sm:p-4 bg-slate-950/40 flex items-center justify-center max-h-[75vh] overflow-auto">
              <img 
                src={resolveAssetUrl(activeModalImage.url)} 
                alt={activeModalImage.title} 
                className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">
                Official Credential Document • Verified
              </span>
              <button
                onClick={() => setActiveModalImage(null)}
                className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                {lang === 'th' ? 'ปิดหน้าต่าง' : 'Close'}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
