import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData as initialData } from '../data/portfolioData';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem('my_portfolio_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.personal?.role !== "Mechanical Design Engineer" || parsed?.personal?.name === "Alex Kittisuk") {
          localStorage.removeItem('my_portfolio_data');
          return initialData;
        }
        const creds = (!parsed.credentials || parsed.credentials?.engineeringLicense?.licenseNo === "ภก. 89412" || !parsed.credentials?.engineeringLicense?.imageUrl)
          ? initialData.credentials
          : parsed.credentials;
        const stats = (!parsed.stats || parsed.stats[0]?.value === "6+" || parsed.stats[0]?.labelTh === "ปี ประสบการณ์สายการผลิตความแม่นยำสูง")
          ? initialData.stats
          : parsed.stats;
        const education = (!parsed.education || parsed.education[0]?.detailsTh)
          ? initialData.education
          : parsed.education;
        const personal = (!parsed.personal || parsed.personal.roleTh?.includes("วิศวกรออกแบบเครื่องกล") || !parsed.personal.subtitle?.th?.includes("อัตราการไหล"))
          ? initialData.personal
          : parsed.personal;
        const experience = (!parsed.experience || parsed.experience[0]?.descTh?.includes("วิศวกรออกแบบเครื่องกล"))
          ? initialData.experience
          : parsed.experience;
        const projects = (!parsed.projects || parsed.projects.length < 6 || !parsed.projects.some(p => p.id === "hdd-sensor-alignment-jig") || parsed.projects.some(p => p.id === "hdd-sensor-alignment-jig" && p.caseStudy?.results?.length !== 1) || parsed.projects.some(p => p.id === "facility-roof-sprinkler-cooling" && p.caseStudy?.results) || parsed.projects.some(p => p.id === "ergonomic-machinery-new-model" && (!p.caseStudy?.problemTh?.includes("Manual Load") || p.caseStudy?.results?.[0]?.value !== "100%")) || parsed.projects.some(p => p.id === "hdd-assembly-jigs" && (!p.caseStudy?.problemTh?.includes("ตรวจสอบรับเข้าชิ้นงาน") || p.caseStudy?.codeSnippet || p.caseStudy?.results?.length !== 2 || p.caseStudy?.results?.[1]?.value !== "100%")) || parsed.projects.some(p => p.id === "quality-defect-rectification" && (!p.caseStudy?.descriptionTh || p.caseStudy?.problemTh || p.caseStudy?.results)))
          ? initialData.projects
          : parsed.projects;
        return {
          ...initialData,
          ...parsed,
          personal: personal,
          experience: experience,
          credentials: creds,
          stats: stats,
          education: education,
          projects: projects
        };
      }
    } catch (e) {
      console.error('Error loading saved portfolio data:', e);
    }
    return initialData;
  });

  // บันทึกลง localStorage อัตโนมัติเมื่อข้อมูลเปลี่ยนแปลง
  const updatePortfolioData = (newData) => {
    setData(newData);
    try {
      localStorage.setItem('my_portfolio_data', JSON.stringify(newData));
    } catch (e) {
      console.error('Error saving portfolio data:', e);
    }
  };

  const updatePersonal = (personalFields) => {
    setData(prev => {
      const updated = {
        ...prev,
        personal: {
          ...prev.personal,
          ...personalFields
        }
      };
      localStorage.setItem('my_portfolio_data', JSON.stringify(updated));
      return updated;
    });
  };

  const resetToDefault = () => {
    localStorage.removeItem('my_portfolio_data');
    setData(initialData);
  };

  return (
    <PortfolioContext.Provider value={{ data, setData, updatePortfolioData, updatePersonal, resetToDefault }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
