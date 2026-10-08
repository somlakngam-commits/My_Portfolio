import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sliders, 
  Copy, 
  Check, 
  Sparkles, 
  ToggleLeft, 
  ToggleRight, 
  Search, 
  Heart, 
  ShieldCheck, 
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const DesignSystemLab = () => {
  const { lang } = useLanguage();

  // Design Token States
  const [selectedColor, setSelectedColor] = useState('indigo');
  const [borderRadius, setBorderRadius] = useState('12px');
  const [density, setDensity] = useState('comfortable'); // 'compact' | 'comfortable' | 'spacious'
  const [elevation, setElevation] = useState('soft'); // 'flat' | 'soft' | 'glow'
  const [toggleActive, setToggleActive] = useState(true);
  const [liked, setLiked] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Color Map configurations
  const colorMap = {
    indigo: {
      name: 'Indigo',
      bgClass: 'bg-indigo-600',
      hoverClass: 'hover:bg-indigo-500',
      borderClass: 'border-indigo-500',
      textClass: 'text-indigo-600 dark:text-indigo-400',
      ringClass: 'focus:ring-indigo-500',
      glowShadow: 'shadow-indigo-500/30',
      hex: '#6366f1',
      bgLight: 'bg-indigo-50 dark:bg-indigo-950/50',
    },
    violet: {
      name: 'Violet',
      bgClass: 'bg-violet-600',
      hoverClass: 'hover:bg-violet-500',
      borderClass: 'border-violet-500',
      textClass: 'text-violet-600 dark:text-violet-400',
      ringClass: 'focus:ring-violet-500',
      glowShadow: 'shadow-violet-500/30',
      hex: '#8b5cf6',
      bgLight: 'bg-violet-50 dark:bg-violet-950/50',
    },
    emerald: {
      name: 'Emerald',
      bgClass: 'bg-emerald-600',
      hoverClass: 'hover:bg-emerald-500',
      borderClass: 'border-emerald-500',
      textClass: 'text-emerald-600 dark:text-emerald-400',
      ringClass: 'focus:ring-emerald-500',
      glowShadow: 'shadow-emerald-500/30',
      hex: '#10b981',
      bgLight: 'bg-emerald-50 dark:bg-emerald-950/50',
    },
    rose: {
      name: 'Rose',
      bgClass: 'bg-rose-600',
      hoverClass: 'hover:bg-rose-500',
      borderClass: 'border-rose-500',
      textClass: 'text-rose-600 dark:text-rose-400',
      ringClass: 'focus:ring-rose-500',
      glowShadow: 'shadow-rose-500/30',
      hex: '#f43f5e',
      bgLight: 'bg-rose-50 dark:bg-rose-950/50',
    },
    amber: {
      name: 'Amber',
      bgClass: 'bg-amber-600',
      hoverClass: 'hover:bg-amber-500',
      borderClass: 'border-amber-500',
      textClass: 'text-amber-600 dark:text-amber-400',
      ringClass: 'focus:ring-amber-500',
      glowShadow: 'shadow-amber-500/30',
      hex: '#d97706',
      bgLight: 'bg-amber-50 dark:bg-amber-950/50',
    },
    sky: {
      name: 'Sky',
      bgClass: 'bg-sky-600',
      hoverClass: 'hover:bg-sky-500',
      borderClass: 'border-sky-500',
      textClass: 'text-sky-600 dark:text-sky-400',
      ringClass: 'focus:ring-sky-500',
      glowShadow: 'shadow-sky-500/30',
      hex: '#0284c7',
      bgLight: 'bg-sky-50 dark:bg-sky-950/50',
    }
  };

  const activeColor = colorMap[selectedColor];

  // Density padding classes
  const getPaddingClass = () => {
    if (density === 'compact') return 'py-1.5 px-3.5 text-xs';
    if (density === 'spacious') return 'py-3.5 px-7 text-base';
    return 'py-2.5 px-5 text-sm'; // comfortable
  };

  // Shadow class
  const getShadowClass = () => {
    if (elevation === 'flat') return 'border border-slate-200 dark:border-slate-800 shadow-none';
    if (elevation === 'glow') return `shadow-xl ${activeColor.glowShadow}`;
    return 'shadow-md shadow-slate-200/50 dark:shadow-slate-950/50';
  };

  const copyGeneratedCode = () => {
    const code = `/* Design Token Config */
:root {
  --color-primary: ${activeColor.hex};
  --radius-component: ${borderRadius};
  --elevation-mode: ${elevation};
  --spacing-density: ${density};
}

/* React Component Usage */
<button style={{ borderRadius: '${borderRadius}' }} className="${activeColor.bgClass} text-white font-medium ${getPaddingClass()} ${getShadowClass()}">
  Confirm Action
</button>`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    confetti({ particleCount: 20, spread: 30, origin: { y: 0.7 } });
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="design-lab" className="py-24 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
            <Sliders className="w-3.5 h-3.5 text-indigo-500" />
            <span>{lang === 'th' ? 'การทดลองอินเทอร์แอคทีฟ' : 'Interactive Playground'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {lang === 'th' ? 'Design Tokens & Component Lab' : 'Design Tokens & Component Lab'}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === 'th' 
              ? 'ลองปรับแต่ง Design Tokens (สี, รัศมีความมน, ความหนาแน่น, เงา) แล้วสังเกตคอมโพเนนต์ด้านขวาตอบสนองแบบเรียลไทม์ทันที'
              : 'Tweak design tokens live and observe how atomic components dynamically adapt styling, spacing, and elevation.'}
          </p>
        </div>

        {/* Main Grid: Controls vs Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Token Controls Panel */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 p-6 shadow-sm space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-indigo-500" />
                <span>{lang === 'th' ? 'แผงควบคุม Tokens' : 'Token Controls'}</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">tokens.config.json</span>
            </div>

            {/* 1. Color Palette Token */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5">
                {lang === 'th' ? '1. สีหลักของแบรนด์ (Brand Accent):' : '1. Brand Accent Color:'}
              </label>
              <div className="grid grid-cols-6 gap-2">
                {Object.keys(colorMap).map((colorKey) => {
                  const item = colorMap[colorKey];
                  const isSelected = selectedColor === colorKey;
                  return (
                    <button
                      key={colorKey}
                      onClick={() => setSelectedColor(colorKey)}
                      title={item.name}
                      className={`h-9 rounded-xl ${item.bgClass} transition-all duration-200 cursor-pointer flex items-center justify-center text-white ${
                        isSelected ? 'scale-110 ring-3 ring-offset-2 ring-indigo-500 dark:ring-offset-slate-900 shadow-md' : 'opacity-80 hover:opacity-100'
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Border Radius Token */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5">
                {lang === 'th' ? '2. รัศมีความมน (Border Radius):' : '2. Corner Radius Token:'}
              </label>
              <div className="grid grid-cols-4 gap-2 text-xs font-medium">
                {[
                  { label: '0px (Sharp)', value: '0px' },
                  { label: '6px (Soft)', value: '6px' },
                  { label: '12px (Modern)', value: '12px' },
                  { label: '9999px (Pill)', value: '9999px' },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setBorderRadius(item.value)}
                    className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer ${
                      borderRadius === item.value
                        ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 font-bold'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Spacing / Density Token */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5">
                {lang === 'th' ? '3. ความหนาแน่น (Density):' : '3. Component Density / Padding:'}
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-medium">
                {[
                  { id: 'compact', labelEn: 'Compact', labelTh: 'กะทัดรัด' },
                  { id: 'comfortable', labelEn: 'Comfortable', labelTh: 'พอดี' },
                  { id: 'spacious', labelEn: 'Spacious', labelTh: 'โปร่งสบาย' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDensity(item.id)}
                    className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                      density === item.id
                        ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 font-bold'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {lang === 'th' ? item.labelTh : item.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Elevation Token */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5">
                {lang === 'th' ? '4. ระดับเงา (Elevation & Shadow):' : '4. Elevation & Shadow:'}
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-medium">
                {[
                  { id: 'flat', label: 'Flat (0)' },
                  { id: 'soft', label: 'Soft Shadow' },
                  { id: 'glow', label: 'Ambient Glow' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setElevation(item.id)}
                    className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                      elevation === item.id
                        ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 font-bold'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Copy Tokens Code Button */}
            <button
              onClick={copyGeneratedCode}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            >
              {copiedCode ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {lang === 'th' ? 'คัดลอกโค้ด Tokens แล้ว!' : 'Tokens Copied!'}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>{lang === 'th' ? 'คัดลอก CSS Tokens สำหรับใช้งาน' : 'Copy Generated Token Spec'}</span>
                </>
              )}
            </button>

          </div>

          {/* Right Column: Live Component Preview Area */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-8 shadow-sm space-y-8">
            
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono text-slate-400">Live Component Rendering</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                Active: {activeColor.name} • {borderRadius}
              </span>
            </div>

            {/* 1. Buttons Showcase */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                {lang === 'th' ? 'ปุ่มกด (Button Variations):' : 'Buttons & Triggers:'}
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {/* Primary Button */}
                <button
                  style={{ borderRadius }}
                  className={`text-white font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${activeColor.bgClass} ${activeColor.hoverClass} ${getPaddingClass()} ${getShadowClass()}`}
                >
                  <span>{lang === 'th' ? 'ปุ่มหลัก (Primary)' : 'Primary Action'}</span>
                </button>

                {/* Secondary Outline Button */}
                <button
                  style={{ borderRadius }}
                  className={`border-2 font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${activeColor.borderClass} ${activeColor.textClass} hover:bg-slate-50 dark:hover:bg-slate-800 ${getPaddingClass()}`}
                >
                  <span>{lang === 'th' ? 'ปุ่มเส้นขอบ (Outline)' : 'Outline Variant'}</span>
                </button>

                {/* Soft Tint Button */}
                <button
                  style={{ borderRadius }}
                  className={`font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${activeColor.bgLight} ${activeColor.textClass} ${getPaddingClass()}`}
                >
                  <span>{lang === 'th' ? 'ปุ่มซอฟต์ (Tinted)' : 'Soft Tint'}</span>
                </button>
              </div>
            </div>

            {/* 2. Interactive Input Field & Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                  {lang === 'th' ? 'ช่องกรอกข้อมูล (Input Focus Ring):' : 'Input Field:'}
                </span>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    defaultValue="Design Systems"
                    style={{ borderRadius }}
                    className={`w-full pl-10 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 ${activeColor.ringClass} transition-all`}
                  />
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                  {lang === 'th' ? 'แท็กและสถานะ (Badges):' : 'Status Badges:'}
                </span>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span
                    style={{ borderRadius }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold ${activeColor.bgLight} ${activeColor.textClass}`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    WCAG AAA
                  </span>
                  <span
                    style={{ borderRadius }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Interactive Toggle & Like Micro-interaction */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
                {lang === 'th' ? 'สวิตช์และไมโครอินเทอร์แอคชัน:' : 'Switches & Toggles:'}
              </span>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center gap-3">
                  <div
                    style={{ borderRadius }}
                    className={`w-10 h-10 flex items-center justify-center text-white ${activeColor.bgClass}`}
                  >
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 dark:text-white">
                      Fluid Motion Engine
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Auto-animate component states
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Like Button */}
                  <button
                    onClick={() => {
                      setLiked(!liked);
                      if (!liked) confetti({ particleCount: 15, spread: 35 });
                    }}
                    className={`p-2 rounded-xl transition-all cursor-pointer ${
                      liked ? 'text-rose-500 bg-rose-50 dark:bg-rose-950/60 scale-110' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  </button>

                  {/* Toggle Switch */}
                  <button
                    onClick={() => setToggleActive(!toggleActive)}
                    className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                      toggleActive ? activeColor.bgClass : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                        toggleActive ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
