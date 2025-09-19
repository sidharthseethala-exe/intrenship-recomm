import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SuccessStories = ({ language }) => {
  const stories = {
    en: [
      {
        id: 1,
        name: 'Priya Sharma',
        age: 22,
        location: 'Rajasthan',
        company: 'Infosys',
        role: 'Software Development Intern',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        quote: `The PM Internship Scheme changed my life completely. Coming from a small village in Rajasthan, I never thought I could work at a company like Infosys. The AI recommendations matched me perfectly with opportunities that suited my computer science background.`,
        achievement: 'Now working full-time at Infosys',
        stipend: '₹22,000/month'
      },
      {
        id: 2,
        name: 'Rahul Kumar',
        age: 21,
        location: 'Bihar',
        company: 'Tata Motors',
        role: 'Mechanical Engineering Intern',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        quote: `Being the first in my family to get a corporate internship was overwhelming, but the platform made it so simple. The Hindi language support helped my parents understand the process too. I learned so much during my 6-month internship.`,
        achievement: 'Received pre-placement offer',
        stipend: '₹18,000/month'
      },
      {
        id: 3,
        name: 'Anita Patel',
        age: 20,
        location: 'Gujarat',
        company: 'BYJU\'S',
        role: 'Content Development Intern',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        quote: `The personalized recommendations were spot-on! As someone interested in education technology, getting matched with BYJU'S was perfect. The internship not only gave me practical experience but also helped me build confidence.`,achievement: 'Started own EdTech startup',stipend: '₹20,000/month'
      }
    ],
    hi: [
      {
        id: 1,
        name: 'प्रिया शर्मा',age: 22,location: 'राजस्थान',company: 'इन्फोसिस',role: 'सॉफ्टवेयर डेवलपमेंट इंटर्न',image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',quote: `पीएम इंटर्नशिप योजना ने मेरी जिंदगी पूरी तरह बदल दी। राजस्थान के एक छोटे से गांव से आकर, मैंने कभी नहीं सोचा था कि मैं इन्फोसिस जैसी कंपनी में काम कर सकूंगी। AI सिफारिशों ने मुझे मेरी कंप्यूटर साइंस बैकग्राउंड के अनुकूल अवसरों के साथ बिल्कुल सही मैच किया।`,achievement: 'अब इन्फोसिस में फुल-टाइम काम कर रही हूं',stipend: '₹22,000/महीना'
      },
      {
        id: 2,
        name: 'राहुल कुमार',age: 21,location: 'बिहार',company: 'टाटा मोटर्स',role: 'मैकेनिकल इंजीनियरिंग इंटर्न',image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',quote: `अपने परिवार में पहला कॉर्पोरेट इंटर्नशिप पाना बहुत रोमांचक था, लेकिन प्लेटफॉर्म ने इसे बहुत आसान बना दिया। हिंदी भाषा की सहायता से मेरे माता-पिता भी प्रक्रिया को समझ सके। मैंने अपनी 6 महीने की इंटर्नशिप के दौरान बहुत कुछ सीखा।`,achievement: 'प्री-प्लेसमेंट ऑफर मिला',stipend: '₹18,000/महीना'
      },
      {
        id: 3,
        name: 'अनीता पटेल',age: 20,location: 'गुजरात',company: 'बायजूस',role: 'कंटेंट डेवलपमेंट इंटर्न',image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',quote: `व्यक्तिगत सिफारिशें बिल्कुल सटीक थीं! शिक्षा प्रौद्योगिकी में रुचि रखने वाले के रूप में, बायजूस के साथ मैच होना परफेक्ट था। इंटर्नशिप ने न केवल मुझे व्यावहारिक अनुभव दिया बल्कि आत्मविश्वास बनाने में भी मदद की।`,achievement: 'अपना EdTech स्टार्टअप शुरू किया',stipend: '₹20,000/महीना'
      }
    ]
  };

  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Success Stories from Rural Youth' : 'ग्रामीण युवाओं की सफलता की कहानियां'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en' ?'Real stories from young Indians who transformed their careers through government internships' :'उन युवा भारतीयों की वास्तविक कहानियां जिन्होंने सरकारी इंटर्नशिप के माध्यम से अपने करियर को बदला'
            }
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories?.[language]?.map((story) => (
            <div
              key={story?.id}
              className="bg-white rounded-2xl border-2 border-gray-100 p-6 lg:p-8 hover:shadow-xl hover:border-orange-200 transition-all duration-300 group"
            >
              {/* Profile Section */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <Image
                    src={story?.image}
                    alt={story?.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-200"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{story?.name}</h3>
                  <p className="text-sm text-gray-600">
                    {language === 'en' ? `Age ${story?.age} • ${story?.location}` : `उम्र ${story?.age} • ${story?.location}`}
                  </p>
                </div>
              </div>

              {/* Company Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full mb-4">
                <Icon name="Building2" size={14} className="text-orange-600" />
                <span className="text-sm font-medium text-orange-800">{story?.company}</span>
              </div>

              {/* Role */}
              <p className="text-base font-medium text-gray-800 mb-4">{story?.role}</p>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 relative">
                <Icon name="Quote" size={20} className="text-orange-300 absolute -top-2 -left-1" />
                <p className="pl-6 italic">{story?.quote}</p>
              </blockquote>

              {/* Achievement & Stipend */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Trophy" size={16} className="text-yellow-500" />
                  <span className="text-sm font-medium text-gray-800">{story?.achievement}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="IndianRupee" size={16} className="text-green-500" />
                  <span className="text-sm font-medium text-gray-800">{story?.stipend}</span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50/0 to-orange-100/0 group-hover:from-orange-50/50 group-hover:to-orange-100/30 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
            <Icon name="Users" size={24} className="text-orange-600" />
            <div className="text-left">
              <p className="text-lg font-semibold text-orange-900">
                {language === 'en' ? 'Join 50,000+ Success Stories' : '50,000+ सफलता की कहानियों में शामिल हों'}
              </p>
              <p className="text-sm text-orange-700">
                {language === 'en' ? 'Your success story could be next!' : 'आपकी सफलता की कहानी अगली हो सकती है!'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;