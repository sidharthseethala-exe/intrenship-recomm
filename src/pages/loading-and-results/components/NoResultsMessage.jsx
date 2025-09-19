import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NoResultsMessage = ({ language = 'en', onModifyPreferences = () => {} }) => {
  const content = {
    en: {
      title: 'No Perfect Matches Found',
      subtitle: 'Don\'t worry! We can help you find opportunities.',
      suggestions: [
        'Try selecting different sectors that interest you',
        'Consider expanding your location preferences',
        'Review your education level selection',
        'Explore opportunities in nearby states'
      ],
      modifyButton: 'Modify Preferences',
      helpText: 'Our AI will find better matches with updated preferences'
    },
    hi: {
      title: 'कोई सही मैच नहीं मिला',
      subtitle: 'चिंता न करें! हम आपको अवसर खोजने में मदद कर सकते हैं।',
      suggestions: [
        'अपनी रुचि के अलग-अलग क्षेत्रों का चयन करने का प्रयास करें',
        'अपनी स्थान प्राथमिकताओं का विस्तार करने पर विचार करें',
        'अपने शिक्षा स्तर के चयन की समीक्षा करें',
        'आस-पास के राज्यों में अवसरों का अन्वेषण करें'
      ],
      modifyButton: 'प्राथमिकताएं संशोधित करें',
      helpText: 'अपडेटेड प्राथमिकताओं के साथ हमारा AI बेहतर मैच खोजेगा'
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      {/* Illustration */}
      <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mb-6">
        <Icon name="Search" size={48} className="text-muted-foreground" />
      </div>
      {/* Title and Subtitle */}
      <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3">
        {content?.[language]?.title}
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        {content?.[language]?.subtitle}
      </p>
      {/* Suggestions */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8 max-w-lg w-full">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center justify-center space-x-2">
          <Icon name="Lightbulb" size={20} className="text-accent" />
          <span>{language === 'en' ? 'Suggestions' : 'सुझाव'}</span>
        </h3>
        <ul className="space-y-3 text-left">
          {content?.[language]?.suggestions?.map((suggestion, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Icon name="ArrowRight" size={16} className="text-primary mt-1 flex-shrink-0" />
              <span className="text-muted-foreground text-sm leading-relaxed">
                {suggestion}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Action Button */}
      <Button
        variant="default"
        onClick={onModifyPreferences}
        iconName="Settings"
        iconPosition="left"
        className="min-h-touch px-8"
      >
        {content?.[language]?.modifyButton}
      </Button>
      {/* Help Text */}
      <p className="text-sm text-muted-foreground mt-4 max-w-sm">
        {content?.[language]?.helpText}
      </p>
    </div>
  );
};

export default NoResultsMessage;