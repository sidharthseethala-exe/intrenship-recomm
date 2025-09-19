import React from 'react';
import Icon from '../../../components/AppIcon';

const SchemeInfo = ({ language }) => {
  const content = {
    en: {
      title: 'About PM Internship Scheme',
      subtitle: 'Empowering Rural Youth Through Skill Development',
      description: 'The Prime Minister\'s Internship Scheme is a flagship initiative by the Ministry of Skill Development & Entrepreneurship, designed to provide meaningful work experience to rural youth and first-generation learners.',
      benefits: [
        {
          icon: 'GraduationCap',
          title: 'Skill Development',
          description: 'Learn industry-relevant skills from experienced professionals'
        },
        {
          icon: 'IndianRupee',
          title: 'Financial Support',
          description: 'Receive monthly stipend ranging from ₹15,000 to ₹25,000'
        },
        {
          icon: 'Award',
          title: 'Certification',
          description: 'Get official certificates recognized by industry leaders'
        },
        {
          icon: 'Users',
          title: 'Mentorship',
          description: 'Access to dedicated mentors and career guidance'
        },
        {
          icon: 'Briefcase',
          title: 'Job Opportunities',
          description: 'High chances of full-time employment after internship'
        },
        {
          icon: 'Network',
          title: 'Professional Network',
          description: 'Build connections with industry professionals and peers'
        }
      ],
      eligibility: {
        title: 'Who Can Apply?',
        criteria: [
          'Age between 18-25 years',
          'Indian citizen from rural background',
          'Minimum 10th standard education',
          'First-generation learner preferred',
          'Basic English or Hindi communication'
        ]
      }
    },
    hi: {
      title: 'पीएम इंटर्नशिप योजना के बारे में',
      subtitle: 'कौशल विकास के माध्यम से ग्रामीण युवाओं को सशक्त बनाना',
      description: 'प्रधानमंत्री इंटर्नशिप योजना कौशल विकास और उद्यमिता मंत्रालय की एक प्रमुख पहल है, जो ग्रामीण युवाओं और पहली पीढ़ी के शिक्षार्थियों को सार्थक कार्य अनुभव प्रदान करने के लिए डिज़ाइन की गई है।',
      benefits: [
        {
          icon: 'GraduationCap',
          title: 'कौशल विकास',
          description: 'अनुभवी पेशेवरों से उद्योग-प्रासंगिक कौशल सीखें'
        },
        {
          icon: 'IndianRupee',
          title: 'वित्तीय सहायता',
          description: '₹15,000 से ₹25,000 तक मासिक वेतन प्राप्त करें'
        },
        {
          icon: 'Award',
          title: 'प्रमाणन',
          description: 'उद्योग जगत के नेताओं द्वारा मान्यता प्राप्त आधिकारिक प्रमाण पत्र प्राप्त करें'
        },
        {
          icon: 'Users',
          title: 'मार्गदर्शन',
          description: 'समर्पित मेंटर्स और करियर गाइडेंस तक पहुंच'
        },
        {
          icon: 'Briefcase',
          title: 'नौकरी के अवसर',
          description: 'इंटर्नशिप के बाद फुल-टाइम रोजगार की उच्च संभावनाएं'
        },
        {
          icon: 'Network',
          title: 'पेशेवर नेटवर्क',
          description: 'उद्योग पेशेवरों और साथियों के साथ संपर्क बनाएं'
        }
      ],
      eligibility: {
        title: 'कौन आवेदन कर सकता है?',
        criteria: [
          '18-25 वर्ष की आयु के बीच',
          'ग्रामीण पृष्ठभूमि से भारतीय नागरिक',
          'न्यूनतम 10वीं कक्षा की शिक्षा',
          'पहली पीढ़ी के शिक्षार्थी को प्राथमिकता',
          'बुनियादी अंग्रेजी या हिंदी संचार'
        ]
      }
    }
  };

  return (
    <div className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {content?.[language]?.title}
          </h2>
          <p className="text-lg text-orange-600 font-medium mb-6">
            {content?.[language]?.subtitle}
          </p>
          <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {content?.[language]?.description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {content?.[language]?.benefits?.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={benefit?.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit?.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Eligibility Section */}
        <div className="bg-white rounded-2xl border-2 border-orange-100 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Eligibility Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {content?.[language]?.eligibility?.title}
              </h3>
              <ul className="space-y-4">
                {content?.[language]?.eligibility?.criteria?.map((criterion, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <Icon name="Check" size={16} className="text-green-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Users" size={48} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'en' ? 'Ready to Apply?' : 'आवेदन करने के लिए तैयार हैं?'}
                </h4>
                <p className="text-gray-600">
                  {language === 'en' ?'Join thousands of rural youth who have already started their journey' :'हजारों ग्रामीण युवाओं के साथ जुड़ें जिन्होंने पहले ही अपनी यात्रा शुरू कर दी है'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Government Verification */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 px-6 py-4 bg-green-50 border border-green-200 rounded-full">
            <Icon name="ShieldCheck" size={24} className="text-green-600" />
            <span className="text-green-800 font-medium">
              {language === 'en' ?'Official Government Initiative • Ministry of Skill Development & Entrepreneurship' :'आधिकारिक सरकारी पहल • कौशल विकास और उद्यमिता मंत्रालय'
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeInfo;