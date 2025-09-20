import React from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from './LanguageToggle.jsx';
import Icon from '../AppIcon.jsx';

const ProgressHeader = ({ 
  currentStep = 1, 
  totalSteps = 3, 
  language = 'en', 
  onLanguageChange = () => {},
  availableLanguages = ['en', 'hi'],
  selectedState
}) => {
  const navigate = useNavigate();
  
  const content = {
    en: {
      step: 'Step',
      of: 'of',
      backToHome: 'Back to Home'
    },
    hi: {
      step: 'चरण', 
      of: 'का',
      backToHome: 'होम पर वापस जाएं'
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Back Button */}
          <button
            onClick={() => navigate('/landing-page')}
            className="flex items-center space-x-2 px-3 py-2 min-h-touch text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
            aria-label={content?.[language]?.backToHome}
          >
            <Icon name="ArrowLeft" size={20} />
            <span className="hidden sm:inline text-sm font-medium">
              {content?.[language]?.backToHome}
            </span>
          </button>

          {/* Progress Section */}
          <div className="flex-1 max-w-md mx-8">
            {/* Step Counter */}
            <div className="text-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                {content?.[language]?.step} {currentStep} {content?.[language]?.of} {totalSteps}
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary rounded-full h-2 transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Enhanced Language Toggle with regional support */}
          <LanguageToggle 
            language={language}
            onLanguageChange={onLanguageChange}
            availableLanguages={availableLanguages}
            selectedState={selectedState}
          />
        </div>
      </div>
    </header>
  );
};

export default ProgressHeader;