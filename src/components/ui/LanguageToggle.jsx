import React, { useState } from 'react';
import Icon from '../AppIcon';

const LanguageToggle = ({ language = 'en', onLanguageChange = () => {}, availableLanguages = ['en', 'hi'], selectedState }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Language configuration with regional support
  const languageConfig = {
    en: { label: 'English', code: 'EN', nativeLabel: 'English' },
    hi: { label: 'Hindi', code: 'हिं', nativeLabel: 'हिंदी' },
    te: { label: 'Telugu', code: 'తె', nativeLabel: 'తెలుగు' },
    ta: { label: 'Tamil', code: 'த', nativeLabel: 'தமிழ்' },
    ml: { label: 'Malayalam', code: 'മ', nativeLabel: 'മലയാളം' },
    kn: { label: 'Kannada', code: 'ಕ', nativeLabel: 'ಕನ್ನಡ' },
    bn: { label: 'Bengali', code: 'বা', nativeLabel: 'বাংলা' },
    gu: { label: 'Gujarati', code: 'ગુ', nativeLabel: 'ગુજરાતી' },
    mr: { label: 'Marathi', code: 'म', nativeLabel: 'मराठी' },
    pa: { label: 'Punjabi', code: 'ਪੰ', nativeLabel: 'ਪੰਜਾਬੀ' },
    or: { label: 'Odia', code: 'ଓ', nativeLabel: 'ଓଡ଼ିଆ' },
    as: { label: 'Assamese', code: 'অ', nativeLabel: 'অসমীয়া' }
  };

  // State-based language mapping
  const stateLanguageMap = {
    'andhra-pradesh': ['en', 'hi', 'te'],
    'telangana': ['en', 'hi', 'te'],
    'tamil-nadu': ['en', 'hi', 'ta'],
    'kerala': ['en', 'hi', 'ml'],
    'karnataka': ['en', 'hi', 'kn'],
    'west-bengal': ['en', 'hi', 'bn'],
    'gujarat': ['en', 'hi', 'gu'],
    'maharashtra': ['en', 'hi', 'mr'],
    'punjab': ['en', 'hi', 'pa'],
    'odisha': ['en', 'hi', 'or'],
    'assam': ['en', 'hi', 'as']
  };

  // Get available languages based on selected state
  const getAvailableLanguages = () => {
    if (selectedState && stateLanguageMap?.[selectedState]) {
      return stateLanguageMap?.[selectedState];
    }
    return availableLanguages;
  };

  const currentAvailableLanguages = getAvailableLanguages();

  const handleLanguageSelect = (newLanguage) => {
    onLanguageChange(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
    setIsOpen(false);
  };

  const currentLanguageConfig = languageConfig?.[language] || languageConfig?.en;

  // If only two languages available, show toggle behavior
  if (currentAvailableLanguages?.length <= 2) {
    const toggleLanguage = currentAvailableLanguages?.find(lang => lang !== language) || 'hi';
    const toggleConfig = languageConfig?.[toggleLanguage];

    return (
      <button
        onClick={() => handleLanguageSelect(toggleLanguage)}
        className="flex items-center space-x-2 px-3 py-2 min-h-touch min-w-touch bg-muted hover:bg-accent/10 rounded-lg border border-border transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label={`Switch to ${toggleConfig?.label}`}
      >
        <Icon name="Languages" size={18} className="text-secondary" />
        <span className="text-sm font-medium text-secondary">
          {toggleConfig?.code}
        </span>
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 min-h-touch min-w-touch bg-muted hover:bg-accent/10 rounded-lg border border-border transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="Select Language"
      >
        <Icon name="Languages" size={18} className="text-secondary" />
        <span className="text-sm font-medium text-secondary">
          {currentLanguageConfig?.code}
        </span>
        <Icon name="ChevronDown" size={14} className={`text-secondary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {/* Language Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 top-full mt-2 z-20 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
            <div className="py-1">
              {currentAvailableLanguages?.map((langCode) => {
                const langConfig = languageConfig?.[langCode];
                if (!langConfig) return null;
                
                const isSelected = langCode === language;
                
                return (
                  <button
                    key={langCode}
                    onClick={() => handleLanguageSelect(langCode)}
                    className={`
                      w-full px-4 py-2 text-left text-sm transition-colors hover:bg-accent/10
                      ${isSelected ? 'bg-primary/10 text-primary font-medium' : 'text-foreground'}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono bg-muted px-2 py-1 rounded">
                          {langConfig?.code}
                        </span>
                        <span>{langConfig?.nativeLabel}</span>
                      </div>
                      {isSelected && (
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Helper text */}
            {selectedState && (
              <div className="border-t border-border px-4 py-2 bg-muted/30">
                <p className="text-xs text-muted-foreground">
                  {language === 'en' ?'Languages available for your state' :'आपके राज्य के लिए उपलब्ध भाषाएं'
                  }
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageToggle;