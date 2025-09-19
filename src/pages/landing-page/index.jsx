import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import OpportunityStats from './components/OpportunityStats';
import SchemeInfo from './components/SchemeInfo';
import SuccessStories from './components/SucessStories';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(saved);
  }, []);

  const onLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  const onStartJourney = () => navigate('/profile-creation-wizard');

  return (
    <div className="min-h-screen bg-background">
      {/* Top Government Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <Icon name="Flag" size={18} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">{language === 'en' ? 'Government of India' : 'भारत सरकार'}</div>
              <div className="text-xs text-muted-foreground">{language === 'en' ? 'Ministry of Skill Development' : 'कौशल विकास मंत्रालय'}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant={language === 'en' ? 'default' : 'outline'} onClick={() => onLanguageChange('en')}>English</Button>
            <Button size="sm" variant={language === 'hi' ? 'default' : 'outline'} onClick={() => onLanguageChange('hi')}>हिंदी</Button>
          </div>
        </div>
      </header>

      {/* Sections */}
      <HeroSection language={language} onStartJourney={onStartJourney} />
      <OpportunityStats language={language} />
      <SchemeInfo language={language} />
      <SuccessStories language={language} />

      {/* Bottom CTA */}
      <footer className="bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 text-center">
          <Button
            variant="default"
            size="lg"
            onClick={onStartJourney}
            className="w-full sm:w-auto min-w-[240px] h-16 text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600"
            iconName="ChevronRight"
            iconPosition="right"
          >
            {language === 'en' ? 'Get Started' : 'शुरू करें'}
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;


