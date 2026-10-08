import React, { useState } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { WhyHireMe } from './components/WhyHireMe';
import { CredentialsSection } from './components/CredentialsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { EditProfileModal } from './components/EditProfileModal';
import { ScrollDynamics } from './components/ScrollDynamics';

function PortfolioApp() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      
      {/* Dynamic Scroll Progress Bar & Scroll-Up Controls */}
      <ScrollDynamics />

      {/* Sticky Top Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenEditProfile={() => setIsEditProfileOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section with Interactive Design Token Card */}
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenEditProfile={() => setIsEditProfileOpen(true)}
        />

        {/* 1. ประสบการณ์ (Work Experience, Education & Career Timeline) */}
        <ExperienceTimeline />

        {/* 2. ผลงาน (Featured Case Studies & Projects) */}
        <Projects />

        {/* 3. จุดเด่น (Why Hire Me: Interview Value Proposition) */}
        <WhyHireMe />

        {/* 5. ใบรับรอง (Engineering Licenses, TOEIC & Professional Credentials) */}
        <CredentialsSection 
          onOpenEditProfile={() => setIsEditProfileOpen(true)}
        />

        {/* 6. ติดต่อ (Contact & Schedule Interview Section) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      <CommandPalette 
        isOpen={isCommandOpen} 
        onClose={() => setIsCommandOpen(false)} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioProvider>
          <PortfolioApp />
        </PortfolioProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
