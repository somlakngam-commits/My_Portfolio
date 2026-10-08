import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Save, 
  Check, 
  User, 
  Briefcase, 
  Layers, 
  Copy, 
  RotateCcw,
  Sparkles,
  Plus,
  Trash2,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const EditProfileModal = ({ isOpen, onClose }) => {
  const { data, updatePortfolioData, resetToDefault } = usePortfolio();
  const { lang } = useLanguage();

  const [activeTab, setActiveTab] = useState('personal'); // 'personal' | 'projects' | 'skills' | 'credentials'
  const [formData, setFormData] = useState(() => JSON.parse(JSON.stringify(data)));
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);

  if (!isOpen) return null;

  const handlePersonalChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value
      }
    }));
  };

  const handlePersonalNestedChange = (parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [parent]: {
          ...prev.personal[parent],
          [field]: value
        }
      }
    }));
  };

  const handleSave = () => {
    updatePortfolioData(formData);
    setSavedSuccess(true);
    confetti({ particleCount: 40, spread: 60 });
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    if (window.confirm(lang === 'th' ? 'ต้องการคืนค่าเริ่มต้นหรือไม่?' : 'Reset to default data?')) {
      resetToDefault();
      setFormData(JSON.parse(JSON.stringify(data)));
      onClose();
    }
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl my-2 sm:my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh] sm:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                {lang === 'th' ? 'แก้ไขข้อมูลพอร์ตโฟลิโอของคุณ' : 'Customize Your Portfolio Data'}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 truncate">
                {lang === 'th' ? 'กรอกข้อมูลจริงของคุณ แล้วกดบันทึกเพื่อแสดงผลทันที' : 'Enter your real details and hit save to apply instantly'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-4 sm:px-6 pt-3 border-b border-slate-100 dark:border-slate-800 text-xs font-semibold overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('personal')}
            className={`pb-2.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'personal'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>{lang === 'th' ? '1. ข้อมูลส่วนตัว' : '1. Personal Info'}</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`pb-2.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'projects'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'th' ? '2. ผลงาน / โปรเจกต์' : '2. Projects'}</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`pb-2.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'skills'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'th' ? '3. ทักษะเด่น' : '3. Key Skills'}</span>
          </button>

          <button
            onClick={() => setActiveTab('credentials')}
            className={`pb-2.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'credentials'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'th' ? '4. ใบรับรอง' : '4. Certificates'}</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 text-xs sm:text-sm">
          
          {/* TAB 1: Personal Info */}
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    ชื่อภาษาไทย (Thai Name):
                  </label>
                  <input
                    type="text"
                    value={formData.personal.nameTh || ''}
                    onChange={(e) => handlePersonalChange('nameTh', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    placeholder="เช่น สมชาย ใจดี"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    ชื่อภาษาอังกฤษ (English Name):
                  </label>
                  <input
                    type="text"
                    value={formData.personal.name || ''}
                    onChange={(e) => handlePersonalChange('name', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    placeholder="e.g. Somchai Jaidee"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    ตำแหน่งงาน (Role):
                  </label>
                  <input
                    type="text"
                    value={formData.personal.role || ''}
                    onChange={(e) => handlePersonalChange('role', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    placeholder="Design Engineer / Frontend Developer"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    อีเมลติดต่อ (Email):
                  </label>
                  <input
                    type="email"
                    value={formData.personal.email || ''}
                    onChange={(e) => handlePersonalChange('email', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    placeholder="your.email@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  คำแนะนำตัวสั้น / สโลแกน (ภาษาไทย):
                </label>
                <textarea
                  rows={2}
                  value={formData.personal.subtitle?.th || ''}
                  onChange={(e) => handlePersonalNestedChange('subtitle', 'th', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                  placeholder="เขียนสรุปจุดเด่น ความเชี่ยวชาญ และความมุ่งมั่นของคุณ"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  คำแนะนำตัวสั้น / สโลแกน (ภาษาอังกฤษ):
                </label>
                <textarea
                  rows={2}
                  value={formData.personal.subtitle?.en || ''}
                  onChange={(e) => handlePersonalNestedChange('subtitle', 'en', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                  placeholder="Brief pitch highlighting your strengths and craft"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    ลิงก์ GitHub:
                  </label>
                  <input
                    type="text"
                    value={formData.personal.socials?.github || ''}
                    onChange={(e) => handlePersonalNestedChange('socials', 'github', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    placeholder="https://github.com/username"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    ลิงก์ LinkedIn:
                  </label>
                  <input
                    type="text"
                    value={formData.personal.socials?.linkedin || ''}
                    onChange={(e) => handlePersonalNestedChange('socials', 'linkedin', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Projects */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                {lang === 'th' ? 'แก้ไขหรือปรับเปลี่ยนชื่อโปรเจกต์และผลลัพธ์ที่คุณต้องการโชว์:' : 'Update your projects list:'}
              </p>

              {formData.projects?.map((proj, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-indigo-600 dark:text-indigo-400">
                      โปรเจกต์ #{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded">
                      {proj.category}
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      ชื่อโปรเจกต์:
                    </label>
                    <input
                      type="text"
                      value={proj.titleTh || proj.titleEn}
                      onChange={(e) => {
                        const newProjects = [...formData.projects];
                        newProjects[idx].titleTh = e.target.value;
                        newProjects[idx].titleEn = e.target.value;
                        setFormData({ ...formData, projects: newProjects });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      คำอธิบายสั้น (ผลงานที่คุณทำ):
                    </label>
                    <textarea
                      rows={2}
                      value={proj.shortDescTh || proj.shortDescEn}
                      onChange={(e) => {
                        const newProjects = [...formData.projects];
                        newProjects[idx].shortDescTh = e.target.value;
                        newProjects[idx].shortDescEn = e.target.value;
                        setFormData({ ...formData, projects: newProjects });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Skills */}
          {activeTab === 'skills' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                {lang === 'th' ? 'ปรับเปลี่ยนทักษะความชำนาญในแต่ละด้าน:' : 'Fine-tune your skills matrix:'}
              </p>
              {formData.skillCategories?.map((cat, cIdx) => (
                <div key={cIdx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <h5 className="font-bold text-xs text-slate-800 dark:text-white">
                    {lang === 'th' ? cat.titleTh : cat.titleEn}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono">
                        {s.name} ({s.level}%)
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: Credentials (ใบ กว. & ผลสอบ TOEIC) */}
          {activeTab === 'credentials' && (
            <div className="space-y-5">
              <p className="text-xs text-slate-500">
                {lang === 'th' 
                  ? 'แก้ไขข้อมูลใบอนุญาตวิศวกรรมควบคุม (กว.) และผลคะแนนสอบภาษาอังกฤษ TOEIC ของคุณ:' 
                  : 'Customize your Council of Engineers (COE) license and TOEIC English scores:'}
              </p>

              {/* 1. Engineering License (กว.) Box */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs">
                  <Award className="w-4 h-4" />
                  <span>{lang === 'th' ? '1. ใบอนุญาตประกอบวิชาชีพวิศวกรรมควบคุม (กว.)' : '1. COE Engineering License'}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      เลขที่ใบอนุญาต (License No.):
                    </label>
                    <input
                      type="text"
                      value={formData.credentials?.engineeringLicense?.licenseNo || ''}
                      onChange={(e) => {
                        setFormData(prev => ({
                          ...prev,
                          credentials: {
                            ...prev.credentials,
                            engineeringLicense: {
                              ...prev.credentials?.engineeringLicense,
                              licenseNo: e.target.value
                            }
                          }
                        }));
                      }}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400"
                      placeholder="เช่น ภก.51138"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      ปีที่ได้รับใบอนุญาต (Issue Year):
                    </label>
                    <input
                      type="text"
                      value={formData.credentials?.engineeringLicense?.issueYear || ''}
                      onChange={(e) => {
                        setFormData(prev => ({
                          ...prev,
                          credentials: {
                            ...prev.credentials,
                            engineeringLicense: {
                              ...prev.credentials?.engineeringLicense,
                              issueYear: e.target.value
                            }
                          }
                        }));
                      }}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-mono"
                      placeholder="เช่น 2565 (2022)"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      ระดับใบอนุญาต (ไทย):
                    </label>
                    <input
                      type="text"
                      value={formData.credentials?.engineeringLicense?.licenseTypeTh || ''}
                      onChange={(e) => {
                        setFormData(prev => ({
                          ...prev,
                          credentials: {
                            ...prev.credentials,
                            engineeringLicense: {
                              ...prev.credentials?.engineeringLicense,
                              licenseTypeTh: e.target.value
                            }
                          }
                        }));
                      }}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                      placeholder="ภาคีวิศวกร (Associate Eng.)"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      สาขาวิชาชีพ (Discipline):
                    </label>
                    <input
                      type="text"
                      value={formData.credentials?.engineeringLicense?.disciplineTh || ''}
                      onChange={(e) => {
                        setFormData(prev => ({
                          ...prev,
                          credentials: {
                            ...prev.credentials,
                            engineeringLicense: {
                              ...prev.credentials?.engineeringLicense,
                              disciplineTh: e.target.value
                            }
                          }
                        }));
                      }}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                      placeholder="เครื่องกล (Mechanical Eng.)"
                    />
                  </div>
                </div>
              </div>

              {/* 2. TOEIC English Score Box */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs">
                  <Award className="w-4 h-4" />
                  <span>{lang === 'th' ? '2. ผลคะแนนสอบภาษาอังกฤษ TOEIC' : '2. TOEIC English Score'}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      คะแนนรวม (Total / 990):
                    </label>
                    <input
                      type="number"
                      value={formData.credentials?.englishProficiency?.totalScore || ''}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        setFormData(prev => ({
                          ...prev,
                          credentials: {
                            ...prev.credentials,
                            englishProficiency: {
                              ...prev.credentials?.englishProficiency,
                              totalScore: val
                            }
                          }
                        }));
                      }}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-mono font-extrabold text-blue-600 dark:text-blue-400 text-base"
                      placeholder="590"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      คะแนนฟัง (Listening / 495):
                    </label>
                    <input
                      type="number"
                      value={formData.credentials?.englishProficiency?.listeningScore || ''}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        setFormData(prev => ({
                          ...prev,
                          credentials: {
                            ...prev.credentials,
                            englishProficiency: {
                              ...prev.credentials?.englishProficiency,
                              listeningScore: val
                            }
                          }
                        }));
                      }}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-mono font-bold"
                      placeholder="375"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      คะแนนอ่าน (Reading / 495):
                    </label>
                    <input
                      type="number"
                      value={formData.credentials?.englishProficiency?.readingScore || ''}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        setFormData(prev => ({
                          ...prev,
                          credentials: {
                            ...prev.credentials,
                            englishProficiency: {
                              ...prev.credentials?.englishProficiency,
                              readingScore: val
                            }
                          }
                        }));
                      }}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-mono font-bold"
                      placeholder="345"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    คำอธิบายระดับความสามารถ (Proficiency Level):
                  </label>
                  <input
                    type="text"
                    value={formData.credentials?.englishProficiency?.levelTh || ''}
                    onChange={(e) => {
                      setFormData(prev => ({
                        ...prev,
                        credentials: {
                          ...prev.credentials,
                          englishProficiency: {
                            ...prev.credentials?.englishProficiency,
                            levelTh: e.target.value,
                            levelEn: e.target.value
                          }
                        }
                      }));
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                    placeholder="ระดับ: สื่อสารในการทำงานได้อย่างคล่องแคล่ว (Professional Working Proficiency - CEFR B2)"
                  />
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="text-xs text-rose-500 hover:text-rose-600 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'th' ? 'คืนค่าเดิม' : 'Reset'}</span>
            </button>
            <button
              onClick={handleCopyJson}
              className="text-xs text-slate-500 hover:text-indigo-600 flex items-center gap-1 cursor-pointer ml-3"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedJson ? (lang === 'th' ? 'คัดลอก JSON แล้ว!' : 'Copied!') : 'Copy JSON'}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {lang === 'th' ? 'ยกเลิก' : 'Cancel'}
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md shadow-indigo-500/25 flex items-center gap-2 cursor-pointer"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{lang === 'th' ? 'บันทึกสำเร็จ!' : 'Saved!'}</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>{lang === 'th' ? 'บันทึกและแสดงผลทันที' : 'Save & Apply'}</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
