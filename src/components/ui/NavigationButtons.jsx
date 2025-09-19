import React from 'react';
import Button from './Button';


const NavigationButtons = ({ 
  currentStep = 1,
  totalSteps = 3,
  onBack = () => {},
  onNext = () => {},
  onApply = () => {},
  language = 'en',
  isLoading = false,
  isValid = true,
  showBackButton = true,
  nextButtonLabel = null,
  applyButtonLabel = null
}) => {
  const content = {
    en: {
      back: 'Back',
      next: 'Continue',
      apply: 'Apply Now',
      loading: 'Processing...',
      viewRecommendations: 'View Recommendations'
    },
    hi: {
      back: 'वापस',
      next: 'जारी रखें',
      apply: 'अभी आवेदन करें',
      loading: 'प्रसंस्करण...',
      viewRecommendations: 'सिफारिशें देखें'
    }
  };

  const isLastStep = currentStep === totalSteps;
  const isFirstStep = currentStep === 1;

  const getNextButtonText = () => {
    if (nextButtonLabel) return nextButtonLabel;
    if (isLastStep) return applyButtonLabel || content?.[language]?.apply;
    return content?.[language]?.next;
  };

  const getNextButtonIcon = () => {
    if (isLastStep) return 'ExternalLink';
    return 'ChevronRight';
  };

  const handleNextClick = () => {
    if (isLastStep) {
      onApply();
    } else {
      onNext();
    }
  };

  return (
    <div className="sticky bottom-0 bg-background border-t border-border p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 max-w-md lg:max-w-none mx-auto">
        {/* Back Button */}
        {showBackButton && !isFirstStep && (
          <Button
            variant="outline"
            onClick={onBack}
            disabled={isLoading}
            className="w-full lg:w-auto lg:min-w-[120px] order-2 lg:order-1"
            iconName="ChevronLeft"
            iconPosition="left"
          >
            {content?.[language]?.back}
          </Button>
        )}

        {/* Next/Apply Button */}
        <Button
          variant="default"
          onClick={handleNextClick}
          disabled={!isValid || isLoading}
          loading={isLoading}
          className="w-full lg:flex-1 lg:max-w-xs order-1 lg:order-2 lg:ml-auto"
          iconName={!isLoading ? getNextButtonIcon() : undefined}
          iconPosition="right"
        >
          {isLoading ? content?.[language]?.loading : getNextButtonText()}
        </Button>
      </div>
    </div>
  );
};

export default NavigationButtons;