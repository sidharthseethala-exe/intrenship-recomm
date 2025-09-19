import React from 'react';
import Icon from '../../../components/AppIcon';

const OpportunityStats = ({ language }) => {
  const stats = {
    en: [
      {
        id: 1,
        number: '10,000+',
        label: 'Opportunities Waiting',
        description: 'Active internship positions across India',
        icon: 'Briefcase',
        color: 'orange'
      },
      {
        id: 2,
        number: '500+',
        label: 'Partner Companies',
        description: 'Leading Indian companies offering internships',
        icon: 'Building2',
        color: 'blue'
      },
      {
        id: 3,
        number: '₹15-25k',
        label: 'Monthly Stipend',
        description: 'Average stipend range for interns',
        icon: 'IndianRupee',
        color: 'green'
      },
      {
        id: 4,
        number: '28',
        label: 'States Covered',
        description: 'Opportunities available across India',
        icon: 'MapPin',
        color: 'purple'
      }
    ],
    hi: [
      {
        id: 1,
        number: '10,000+',
        label: 'अवसर प्रतीक्षारत',
        description: 'भारत भर में सक्रिय इंटर्नशिप पद',
        icon: 'Briefcase',
        color: 'orange'
      },
      {
        id: 2,
        number: '500+',
        label: 'साझीदार कंपनियां',
        description: 'इंटर्नशिप प्रदान करने वाली प्रमुख भारतीय कंपनियां',
        icon: 'Building2',
        color: 'blue'
      },
      {
        id: 3,
        number: '₹15-25k',
        label: 'मासिक वेतन',
        description: 'इंटर्न के लिए औसत वेतन सीमा',
        icon: 'IndianRupee',
        color: 'green'
      },
      {
        id: 4,
        number: '28',
        label: 'राज्य शामिल',
        description: 'भारत भर में उपलब्ध अवसर',
        icon: 'MapPin',
        color: 'purple'
      }
    ]
  };

  const getColorClasses = (color) => {
    switch (color) {
      case 'orange':
        return 'from-orange-500 to-orange-600 text-white';
      case 'blue':
        return 'from-blue-500 to-blue-600 text-white';
      case 'green':
        return 'from-green-500 to-green-600 text-white';
      case 'purple':
        return 'from-purple-500 to-purple-600 text-white';
      default:
        return 'from-gray-500 to-gray-600 text-white';
    }
  };

  const getBgColorClasses = (color) => {
    switch (color) {
      case 'orange':
        return 'bg-orange-50 border-orange-100';
      case 'blue':
        return 'bg-blue-50 border-blue-100';
      case 'green':
        return 'bg-green-50 border-green-100';
      case 'purple':
        return 'bg-purple-50 border-purple-100';
      default:
        return 'bg-gray-50 border-gray-100';
    }
  };

  return (
    <div className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Opportunities at Your Fingertips' : 'आपकी उंगलियों पर अवसर'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en' ?'Discover the vast network of internship opportunities waiting for talented youth like you' :'आपके जैसे प्रतिभाशाली युवाओं की प्रतीक्षा कर रहे इंटर्नशिप अवसरों के विशाल नेटवर्क की खोज करें'
            }
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats?.[language]?.map((stat) => (
            <div
              key={stat?.id}
              className={`relative rounded-2xl border-2 p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-300 group ${getBgColorClasses(stat?.color)}`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br mb-6 group-hover:scale-110 transition-transform duration-300 ${getColorClasses(stat?.color)}`}>
                <Icon 
                  name={stat?.icon} 
                  size={32}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Number */}
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat?.number}
              </div>

              {/* Label */}
              <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                {stat?.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {stat?.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl border-2 border-orange-200 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Icon name="TrendingUp" size={24} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold text-gray-900">
                  {language === 'en' ? 'New opportunities added daily!' : 'रोज़ाना नए अवसर जोड़े जाते हैं!'}
                </p>
                <p className="text-sm text-gray-600">
                  {language === 'en' ? 'Don\'t miss out on your perfect match' : 'अपने परफेक्ट मैच को न चूकें'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityStats;