import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // ค่าเริ่มต้นเป็น 'th' (ภาษาไทย) เพื่อความสะดวกของผู้ใช้ สามารถกดสลับเป็น 'en' ได้ทันที
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'th';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'th' ? 'en' : 'th'));
  };

  /**
   * Helper function สำหรับดึงข้อความตามภาษาที่เลือก
   * @param {Object} obj ออบเจกต์ที่มีคีย์ th / en หรือฟังก์ชัน
   * @param {string} fallback ข้อความสำรอง
   */
  const t = (obj, fallback = '') => {
    if (!obj) return fallback;
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.en || obj.th || fallback;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
