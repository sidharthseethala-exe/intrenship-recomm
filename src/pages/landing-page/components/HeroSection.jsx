import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ language, onStartJourney }) => {
  const content = {
    en: {
      title: "Find Your Perfect Government Internship",
      subtitle: "AI-powered recommendations for rural youth and first-generation learners",
      description: "Join thousands of young Indians who have found meaningful career opportunities through the PM Internship Scheme. Get personalized recommendations based on your education, interests, and location.",
      startButton: "Start Your Journey",
      learnMore: "Learn More About PM Internship Scheme"
    },
    hi: {
      title: "अपनी परफेक्ट सरकारी इंटर्नशिप खोजें",
      subtitle: "ग्रामीण युवाओं और पहली पीढ़ी के शिक्षार्थियों के लिए AI-संचालित सिफारिशें",
      description: "हजारों युवा भारतीयों के साथ जुड़ें जिन्होंने पीएम इंटर्नशिप योजना के माध्यम से अर्थपूर्ण करियर के अवसर पाए हैं। अपनी शिक्षा, रुचियों और स्थान के आधार पर व्यक्तिगत सिफारिशें प्राप्त करें।",
      startButton: "अपनी यात्रा शुरू करें",
      learnMore: "पीएम इंटर्नशिप योजना के बारे में और जानें"
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {content?.[language]?.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
            {content?.[language]?.subtitle}
          </p>

          {/* Description */}
          <p className="text-base lg:text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            {content?.[language]?.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="lg"
              onClick={onStartJourney}
              className="w-full sm:w-auto min-w-[200px] h-14 text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              iconName="ArrowRight"
              iconPosition="right"
            >
              {content?.[language]?.startButton}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[200px] h-14 text-lg font-medium border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
              iconName="BookOpen"
              iconPosition="left"
            >
              {content?.[language]?.learnMore}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-2 text-gray-600">
              <Icon name="Shield" size={20} className="text-green-500" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'Government Verified' : 'सरकार द्वारा सत्यापित'}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Icon name="Users" size={20} className="text-blue-500" />
              <span className="text-sm font-medium">
                {language === 'en' ? '50,000+ Users' : '50,000+ उपयोगकर्ता'}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Icon name="Award" size={20} className="text-orange-500" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'Award Winning' : 'पुरस्कार विजेता'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;