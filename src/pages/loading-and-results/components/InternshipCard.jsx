import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InternshipCard = ({ internship, language = 'en', onApply = () => {} }) => {
  const getMatchBadgeColor = (percentage) => {
    if (percentage >= 90) return 'bg-success text-success-foreground';
    if (percentage >= 70) return 'bg-accent text-accent-foreground';
    return 'bg-warning text-warning-foreground';
  };

  const getMatchLabel = (percentage) => {
    const labels = {
      en: {
        excellent: 'Excellent Match',
        good: 'Good Match',
        fair: 'Fair Match'
      },
      hi: {
        excellent: 'उत्कृष्ट मैच',
        good: 'अच्छा मैच',
        fair: 'ठीक मैच'
      }
    };

    if (percentage >= 90) return labels?.[language]?.excellent;
    if (percentage >= 70) return labels?.[language]?.good;
    return labels?.[language]?.fair;
  };

  const content = {
    en: {
      applyNow: 'Apply Now',
      perMonth: '/month',
      location: 'Location',
      duration: 'Duration',
      requirements: 'Requirements',
      benefits: 'Benefits'
    },
    hi: {
      applyNow: 'अभी आवेदन करें',
      perMonth: '/महीना',
      location: 'स्थान',
      duration: 'अवधि',
      requirements: 'आवश्यकताएं',
      benefits: 'लाभ'
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-interactive transition-smooth">
      {/* Header with Company Logo and Match Badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={`https://logo.clearbit.com/${internship?.company?.toLowerCase()?.replace(/\s+/g, '')}.com`}
              alt={`${internship?.company} logo`}
              className="w-full h-full object-contain p-2"
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-foreground leading-tight">
              {internship?.title?.[language]}
            </h3>
            <p className="text-secondary font-medium">
              {internship?.company}
            </p>
          </div>
        </div>
        
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getMatchBadgeColor(internship?.matchPercentage)}`}>
          {internship?.matchPercentage}% {getMatchLabel(internship?.matchPercentage)}
        </div>
      </div>
      {/* Salary and Location */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="IndianRupee" size={18} className="text-success" />
          <span className="text-lg font-semibold text-success">
            ₹{internship?.salary?.toLocaleString('en-IN')}{content?.[language]?.perMonth}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="MapPin" size={18} className="text-muted-foreground" />
          <span className="text-foreground">
            {internship?.location?.[language]}
          </span>
        </div>
      </div>
      {/* Duration */}
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="Clock" size={18} className="text-muted-foreground" />
        <span className="text-foreground">
          {content?.[language]?.duration}: {internship?.duration?.[language]}
        </span>
      </div>
      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {internship?.description?.[language]}
      </p>
      {/* Requirements */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center space-x-2">
          <Icon name="CheckSquare" size={16} className="text-primary" />
          <span>{content?.[language]?.requirements}</span>
        </h4>
        <ul className="space-y-1">
          {internship?.requirements?.[language]?.map((req, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
              <Icon name="Dot" size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Benefits */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center space-x-2">
          <Icon name="Gift" size={16} className="text-accent" />
          <span>{content?.[language]?.benefits}</span>
        </h4>
        <ul className="space-y-1">
          {internship?.benefits?.[language]?.map((benefit, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
              <Icon name="Dot" size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Apply Button */}
      <Button
        variant="default"
        fullWidth
        onClick={() => onApply(internship)}
        iconName="ExternalLink"
        iconPosition="right"
        className="min-h-touch"
      >
        {content?.[language]?.applyNow}
      </Button>
    </div>
  );
};

export default InternshipCard;