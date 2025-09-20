import React from 'react';

const ProgressHeader = ({
  currentStep = 1,
  totalSteps = 3,
  language = 'en'
}) => {
  const progressPercentage = (currentStep / totalSteps) * 100;
  
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
  
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Back Button */}
          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <span>←</span>
            <span className="hidden sm:inline text-sm font-medium">
              {content?.[language]?.backToHome}
            </span>
          </button>
          
          {/* Progress Section */}
          <div className="flex-1 max-w-md mx-8">
            {/* Step Counter */}
            <div className="text-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                {content?.[language]?.step} {currentStep} {content?.[language]?.of} {totalSteps}
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 rounded-full h-2 transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          
          {/* Language Toggle Placeholder */}
          <div className="px-3 py-2">
            <span className="text-sm font-medium text-gray-600">
              {language.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProgressHeader;