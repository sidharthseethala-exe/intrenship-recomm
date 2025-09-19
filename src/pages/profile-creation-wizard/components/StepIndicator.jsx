import React from 'react';
import Icon from '../../../components/AppIcon';

const StepIndicator = ({ currentStep, totalSteps, language }) => {
  const content = {
    en: {
      steps: [
        { id: 1, title: 'Education', shortTitle: 'Education' },
        { id: 2, title: 'Interests', shortTitle: 'Interests' },
        { id: 3, title: 'Location', shortTitle: 'Location' }
      ],
      step: 'Step',
      of: 'of'
    },
    hi: {
      steps: [
        { id: 1, title: 'शिक्षा', shortTitle: 'शिक्षा' },
        { id: 2, title: 'रुचियां', shortTitle: 'रुचियां' },
        { id: 3, title: 'स्थान', shortTitle: 'स्थान' }
      ],
      step: 'चरण',
      of: 'का'
    }
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
    <div className="w-full mb-8">
      {/* Mobile Progress Bar */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-foreground">
            {content?.[language]?.step} {currentStep} {content?.[language]?.of} {totalSteps}
          </span>
          <span className="text-sm text-muted-foreground">
            {content?.[language]?.steps?.[currentStep - 1]?.shortTitle}
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
      <div className="hidden lg:flex items-center justify-center space-x-8">
        {content?.[language]?.steps?.map((step, index) => {
          const status = getStepStatus(step?.id);
          const isLast = index === content?.[language]?.steps?.length - 1;
          
          return (
            <div key={step?.id} className="flex items-center">
              {/* Step Circle */}
              <div className="flex items-center">
                <div className={`
                  flex items-center justify-center w-12 h-12 rounded-full border-2 transition-smooth
                  ${getStepClasses(status)}
                `}>
                  <Icon 
                    name={getStepIcon(step?.id, status)} 
                    size={24} 
                    className={status === 'completed' ? 'fill-current' : ''}
                  />
                </div>
                <div className="ml-4">
                  <p className={`text-sm font-medium ${
                    status === 'current' ? 'text-primary' : 
                    status === 'completed' ? 'text-success' : 'text-muted-foreground'
                  }`}>
                    {step?.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {content?.[language]?.step} {step?.id}
                  </p>
                </div>
              </div>
              {/* Connector Line */}
              {!isLast && (
                <div className={`
                  w-20 h-0.5 mx-6 transition-smooth
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

export default StepIndicator;