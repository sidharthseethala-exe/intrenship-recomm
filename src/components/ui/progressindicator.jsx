import React from 'react';
import Icon from '../AppIcon';

const ProgressIndicator = ({ currentStep = 1, totalSteps = 3, language = 'en' }) => {
  const steps = {
    en: [
      { id: 1, label: 'Welcome', shortLabel: 'Start' },
      { id: 2, label: 'Profile Setup', shortLabel: 'Profile' },
      { id: 3, label: 'Recommendations', shortLabel: 'Results' }
    ],
    hi: [
      { id: 1, label: 'स्वागत', shortLabel: 'शुरू' },
      { id: 2, label: 'प्रोफाइल सेटअप', shortLabel: 'प्रोफाइल' },
      { id: 3, label: 'सिफारिशें', shortLabel: 'परिणाम' }
    ]
  };

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'upcoming';
  };

  const getStepIcon = (stepId, status) => {
    if (status === 'completed') return 'CheckCircle2';
    if (status === 'current') return 'Circle';
    return 'Circle';
  };

  const getStepClasses = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success bg-success/10 border-success';
      case 'current':
        return 'text-primary bg-primary/10 border-primary';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getConnectorClasses = (stepId) => {
    return stepId <= currentStep ? 'bg-primary' : 'bg-border';
  };

  return (
    <div className="w-full">
      {/* Mobile Progress Bar */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">
            {language === 'en' ? 'Step' : 'चरण'} {currentStep} {language === 'en' ? 'of' : 'का'} {totalSteps}
          </span>
          <span className="text-sm text-muted-foreground">
            {steps?.[language]?.[currentStep - 1]?.shortLabel}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-smooth"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>
      {/* Desktop Step Indicator */}
      <div className="hidden lg:flex items-center justify-center space-x-4">
        {steps?.[language]?.map((step, index) => {
          const status = getStepStatus(step?.id);
          const isLast = index === steps?.[language]?.length - 1;
          
          return (
            <div key={step?.id} className="flex items-center">
              {/* Step Circle */}
              <div className="flex items-center">
                <div className={`
                  flex items-center justify-center w-10 h-10 rounded-full border-2 transition-smooth
                  ${getStepClasses(status)}
                `}>
                  <Icon 
                    name={getStepIcon(step?.id, status)} 
                    size={20} 
                    className={status === 'completed' ? 'fill-current' : ''}
                  />
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    status === 'current' ? 'text-primary' : 
                    status === 'completed' ? 'text-success' : 'text-muted-foreground'
                  }`}>
                    {step?.label}
                  </p>
                </div>
              </div>
              {/* Connector Line */}
              {!isLast && (
                <div className={`
                  w-16 h-0.5 mx-4 transition-smooth
                  ${getConnectorClasses(step?.id)}
                `} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressIndicator;