import React from 'react';
import Icon from '../../../components/AppIcon';

const LoadingAnimation = ({ language = 'en' }) => {
  const content = {
    en: {
      finding: 'Finding perfect matches...',
      analyzing: 'Analyzing your profile',
      matching: 'Matching opportunities'
    },
    hi: {
      finding: 'सही मैच खोजे जा रहे हैं...',
      analyzing: 'आपकी प्रोफाइल का विश्लेषण',
      matching: 'अवसरों का मिलान'
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      {/* AI Brain Animation */}
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-pulse">
          <Icon name="Brain" size={40} className="text-white" />
        </div>
        
        {/* Orbiting Dots */}
        <div className="absolute inset-0 animate-spin">
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1"></div>
          <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 translate-y-1"></div>
          <div className="absolute left-0 top-1/2 w-3 h-3 bg-secondary rounded-full transform -translate-y-1/2 -translate-x-1"></div>
          <div className="absolute right-0 top-1/2 w-3 h-3 bg-success rounded-full transform -translate-y-1/2 translate-x-1"></div>
        </div>
      </div>
      {/* Loading Text */}
      <div className="text-center space-y-3">
        <h2 className="text-xl lg:text-2xl font-semibold text-foreground">
          {content?.[language]?.finding}
        </h2>
        
        {/* Progress Steps */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center justify-center space-x-2">
            <Icon name="CheckCircle2" size={16} className="text-success" />
            <span>{content?.[language]?.analyzing}</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            <span>{content?.[language]?.matching}</span>
          </div>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="w-full max-w-xs mt-8">
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;