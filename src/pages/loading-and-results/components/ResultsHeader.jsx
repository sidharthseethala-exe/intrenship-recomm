import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResultsHeader = ({ 
  resultsCount = 0, 
  language = 'en', 
  onModifyPreferences = () => {} 
}) => {
  const content = {
    en: {
      title: 'Your Personalized Recommendations',
      subtitle: 'Based on your profile, here are the best internship matches',
      resultsFound: 'opportunities found',
      modifyPreferences: 'Modify Preferences',
      poweredBy: 'Powered by AI Matching Algorithm'
    },
    hi: {
      title: 'आपकी व्यक्तिगत सिफारिशें',
      subtitle: 'आपकी प्रोफाइल के आधार पर, यहाँ सबसे अच्छे इंटर्नशिप मैच हैं',
      resultsFound: 'अवसर मिले',
      modifyPreferences: 'प्राथमिकताएं संशोधित करें',
      poweredBy: 'AI मैचिंग एल्गोरिदम द्वारा संचालित'
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Title Section */}
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Target" size={20} className="text-primary" />
            </div>
            <h1 className="text-xl lg:text-2xl font-semibold text-foreground">
              {content?.[language]?.title}
            </h1>
          </div>
          
          <p className="text-muted-foreground mb-3">
            {content?.[language]?.subtitle}
          </p>
          
          {/* Results Count */}
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle2" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">
              {resultsCount} {content?.[language]?.resultsFound}
            </span>
          </div>
          
          {/* AI Badge */}
          <div className="flex items-center space-x-2 mt-2">
            <Icon name="Brain" size={16} className="text-accent" />
            <span className="text-xs text-muted-foreground">
              {content?.[language]?.poweredBy}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex-shrink-0">
          <Button
            variant="outline"
            onClick={onModifyPreferences}
            iconName="Settings"
            iconPosition="left"
            className="min-h-touch"
          >
            {content?.[language]?.modifyPreferences}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsHeader;