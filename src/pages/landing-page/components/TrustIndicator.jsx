import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = ({ language }) => {
  const indicators = {
    en: [
      {
        id: 1,
        icon: 'ShieldCheck',
        title: 'Government Verified',
        description: 'Official PM Internship Scheme platform backed by Ministry of Skill Development',
        color: 'green'
      },
      {
        id: 2,
        icon: 'Heart',
        title: 'Free for All',
        description: 'Completely free service with no hidden charges or registration fees',
        color: 'blue'
      },
      {
        id: 3,
        icon: 'Languages',
        title: 'Works in Your Language',
        description: 'Available in English and Hindi for better accessibility',
        color: 'orange'
      }
    ],
    hi: [
      {
        id: 1,
        icon: 'ShieldCheck',
        title: 'सरकार द्वारा सत्यापित',
        description: 'कौशल विकास मंत्रालय द्वारा समर्थित आधिकारिक पीएम इंटर्नशिप योजना प्लेटफॉर्म',
        color: 'green'
      },
      {
        id: 2,
        icon: 'Heart',
        title: 'सभी के लिए निःशुल्क',
        description: 'बिना किसी छुपी हुई फीस या पंजीकरण शुल्क के पूर्णतः निःशुल्क सेवा',
        color: 'blue'
      },
      {
        id: 3,
        icon: 'Languages',
        title: 'आपकी भाषा में काम करता है',
        description: 'बेहतर पहुंच के लिए अंग्रेजी और हिंदी में उपलब्ध',
        color: 'orange'
      }
    ]
  };

  const getColorClasses = (color) => {
    switch (color) {
      case 'green':
        return 'bg-green-100 text-green-600 border-green-200';
      case 'blue':
        return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'orange':
        return 'bg-orange-100 text-orange-600 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Why Trust Our Platform?' : 'हमारे प्लेटफॉर्म पर भरोसा क्यों करें?'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en' ?'Built with transparency and trust at its core, ensuring every rural youth gets equal opportunities' :'पारदर्शिता और विश्वास के साथ निर्मित, यह सुनिश्चित करते हुए कि हर ग्रामीण युवा को समान अवसर मिले'
            }
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {indicators?.[language]?.map((indicator) => (
            <div
              key={indicator?.id}
              className="bg-white rounded-2xl border-2 border-gray-100 p-6 lg:p-8 text-center hover:shadow-lg hover:border-gray-200 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 mb-6 group-hover:scale-110 transition-transform duration-300 ${getColorClasses(indicator?.color)}`}>
                <Icon 
                  name={indicator?.icon} 
                  size={32} 
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                {indicator?.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {indicator?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-full border border-orange-200">
            <Icon name="CheckCircle" size={20} className="text-orange-600" />
            <span className="text-orange-800 font-medium">
              {language === 'en' ?'Trusted by 50,000+ rural youth across India' :'भारत भर के 50,000+ ग्रामीण युवाओं द्वारा भरोसेमंद'
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;