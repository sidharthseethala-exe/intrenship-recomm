import React, { useState, useEffect } from 'react';
import ProgressHeader from "../../components/ui/ProgressHeader.jsx"
import NavigationButtons from '../../components/ui/NavigationButtons';
import LoadingAnimation from './components/LoadingAnimation';
import InternshipCard from './components/InternshipCard';
import NoResultsMessage from './components/NoResultsMessage';
import ResultsHeader from './components/ResultsHeader';

const LoadingAndResults = ({ 
  currentPage = 'loading-and-results',
  onNavigate = () => {},
  userProfile = null
}) => {
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  // Mock internship data
  const mockInternships = [
    {
      id: 1,  
      company: 'Infosys',
      title: {
        en: 'Software Development Intern',
        hi: 'सॉफ्टवेयर डेवलपमेंट इंटर्न'
      },
      salary: 25000,
      location: {
        en: 'Bangalore, Karnataka',
        hi: 'बैंगलोर, कर्नाटक'
      },
      duration: {
        en: '6 months',
        hi: '6 महीने'
      },
      description: {
        en: `Join Infosys as a Software Development Intern and work on cutting-edge technology projects. You'll collaborate with experienced developers, learn industry best practices, and contribute to real-world applications that serve millions of users globally.`,
        hi: `इन्फोसिस में सॉफ्टवेयर डेवलपमेंट इंटर्न के रूप में शामिल हों और अत्याधुनिक तकनीकी परियोजनाओं पर काम करें। आप अनुभवी डेवलपर्स के साथ सहयोग करेंगे, उद्योग की सर्वोत्तम प्रथाओं को सीखेंगे।`
      },
      requirements: {
        en: [
          'Bachelor\'s degree in Computer Science or related field',
          'Basic knowledge of programming languages (Java, Python, C++)',
          'Understanding of software development lifecycle',
          'Strong problem-solving and analytical skills'
        ],
        hi: [
          'कंप्यूटर साइंस या संबंधित क्षेत्र में स्नातक की डिग्री',
          'प्रोग्रामिंग भाषाओं का बुनियादी ज्ञान (Java, Python, C++)',
          'सॉफ्टवेयर डेवलपमेंट लाइफसाइकिल की समझ',
          'मजबूत समस्या-समाधान और विश्लेषणात्मक कौशल'
        ]
      },
      benefits: {
        en: [
          'Competitive stipend and performance bonuses',
          'Mentorship from industry experts',
          'Certificate of completion',
          'Potential for full-time employment'
        ],
        hi: [
          'प्रतिस्पर्धी वेतन और प्रदर्शन बोनस',
          'उद्योग विशेषज्ञों से मार्गदर्शन',
          'पूर्णता प्रमाणपत्र',
          'पूर्णकालिक रोजगार की संभावना'
        ]
      },
      matchPercentage: 95,
      sector: 'technology'
    },
    {
      id: 2,
      company: 'State Bank of India',
      title: {
        en: 'Banking Operations Intern',
        hi: 'बैंकिंग संचालन इंटर्न'
      },
      salary: 20000,
      location: {
        en: 'Mumbai, Maharashtra',
        hi: 'मुंबई, महाराष्ट्र'
      },
      duration: {
        en: '4 months',
        hi: '4 महीने'
      },
      description: {
        en: `Gain hands-on experience in banking operations with India's largest public sector bank. Learn about financial services, customer relationship management, and digital banking solutions while working with experienced banking professionals.`,
        hi: `भारत के सबसे बड़े सार्वजनिक क्षेत्र के बैंक के साथ बैंकिंग संचालन में व्यावहारिक अनुभव प्राप्त करें। वित्तीय सेवाओं, ग्राहक संबंध प्रबंधन के बारे में सीखें।`
      },
      requirements: {
        en: [
          'Graduate in Commerce, Economics, or related field','Basic understanding of banking and finance','Good communication skills in English and Hindi','Customer service orientation'
        ],
        hi: [
          'वाणिज्य, अर्थशास्त्र या संबंधित क्षेत्र में स्नातक','बैंकिंग और वित्त की बुनियादी समझ','अंग्रेजी और हिंदी में अच्छे संचार कौशल','ग्राहक सेवा अभिविन्यास'
        ]
      },
      benefits: {
        en: [
          'Government sector experience','Training in banking operations','Professional development opportunities','Networking with banking professionals'
        ],
        hi: [
          'सरकारी क्षेत्र का अनुभव','बैंकिंग संचालन में प्रशिक्षण','व्यावसायिक विकास के अवसर','बैंकिंग पेशेवरों के साथ नेटवर्किंग'
        ]
      },
      matchPercentage: 88,
      sector: 'finance'
    },
    {
      id: 3,
      company: 'AIIMS Delhi',
      title: {
        en: 'Healthcare Administration Intern',hi: 'स्वास्थ्य सेवा प्रशासन इंटर्न'
      },
      salary: 18000,
      location: {
        en: 'New Delhi, Delhi',hi: 'नई दिल्ली, दिल्ली'
      },
      duration: {
        en: '3 months',hi: '3 महीने'
      },
      description: {
        en: `Work with India's premier medical institution in healthcare administration. Gain exposure to hospital management, patient care coordination, and healthcare policy implementation while contributing to public health initiatives.`,
        hi: `स्वास्थ्य सेवा प्रशासन में भारत की प्रमुख चिकित्सा संस्था के साथ काम करें। अस्पताल प्रबंधन, रोगी देखभाल समन्वय का अनुभव प्राप्त करें।`
      },
      requirements: {
        en: [
          'Bachelor\'s degree in any discipline',
          'Interest in healthcare and public service',
          'Good organizational and communication skills',
          'Ability to work in a fast-paced environment'
        ],
        hi: [
          'किसी भी विषय में स्नातक की डिग्री',
          'स्वास्थ्य सेवा और सार्वजनिक सेवा में रुचि',
          'अच्छे संगठनात्मक और संचार कौशल',
          'तेज़ गति वाले वातावरण में काम करने की क्षमता'
        ]
      },
      benefits: {
        en: [
          'Experience in premier healthcare institution',
          'Exposure to public health systems',
          'Certificate from AIIMS',
          'Career guidance in healthcare sector'
        ],
        hi: [
          'प्रमुख स्वास्थ्य सेवा संस्थान में अनुभव',
          'सार्वजनिक स्वास्थ्य प्रणालियों का अनुभव',
          'AIIMS से प्रमाणपत्र',
          'स्वास्थ्य सेवा क्षेत्र में करियर मार्गदर्शन'
        ]
      },
      matchPercentage: 82,
      sector: 'healthcare'
    },
    {
      id: 4,
      company: 'Tata Motors',
      title: {
        en: 'Manufacturing Engineering Intern',
        hi: 'विनिर्माण इंजीनियरिंग इंटर्न'
      },
      salary: 22000,
      location: {
        en: 'Pune, Maharashtra',
        hi: 'पुणे, महाराष्ट्र'
      },
      duration: {
        en: '6 months',
        hi: '6 महीने'
      },
      description: {
        en: `Join Tata Motors' manufacturing team and learn about automotive production processes. Work on quality control, process optimization, and lean manufacturing principles while gaining hands-on experience in India's automotive industry.`,
        hi: `टाटा मोटर्स की विनिर्माण टीम में शामिल हों और ऑटोमोटिव उत्पादन प्रक्रियाओं के बारे में सीखें। गुणवत्ता नियंत्रण, प्रक्रिया अनुकूलन पर काम करें।`
      },
      requirements: {
        en: [
          'Engineering degree in Mechanical, Production, or related field',
          'Understanding of manufacturing processes',
          'Knowledge of quality control principles',
          'Willingness to work in manufacturing environment'
        ],
        hi: [
          'मैकेनिकल, प्रोडक्शन या संबंधित क्षेत्र में इंजीनियरिंग डिग्री',
          'विनिर्माण प्रक्रियाओं की समझ',
          'गुणवत्ता नियंत्रण सिद्धांतों का ज्ञान',
          'विनिर्माण वातावरण में काम करने की इच्छा'
        ]
      },
      benefits: {
        en: [
          'Experience with leading automotive manufacturer',
          'Training in lean manufacturing',
          'Industry exposure and networking',
          'Potential for permanent placement'
        ],
        hi: [
          'अग्रणी ऑटोमोटिव निर्माता के साथ अनुभव',
          'लीन मैन्युफैक्चरिंग में प्रशिक्षण',
          'उद्योग एक्सपोज़र और नेटवर्किंग',
          'स्थायी नियुक्ति की संभावना'
        ]
      },
      matchPercentage: 79,
      sector: 'manufacturing'
    },
    {
      id: 5,
      company: 'Flipkart',
      title: {
        en: 'Digital Marketing Intern',
        hi: 'डिजिटल मार्केटिंग इंटर्न'
      },
      salary: 24000,
      location: {
        en: 'Bangalore, Karnataka',
        hi: 'बैंगलोर, कर्नाटक'
      },
      duration: {
        en: '4 months',
        hi: '4 महीने'
      },
      description: {
        en: `Join Flipkart's marketing team and learn about e-commerce marketing strategies. Work on digital campaigns, social media marketing, and customer acquisition while gaining insights into India's largest e-commerce platform.`,
        hi: `फ्लिपकार्ट की मार्केटिंग टीम में शामिल हों और ई-कॉमर्स मार्केटिंग रणनीतियों के बारे में सीखें। डिजिटल अभियानों, सोशल मीडिया मार्केटिंग पर काम करें।`
      },
      requirements: {
        en: [
          'Bachelor\'s degree in Marketing, Business, or related field',
          'Basic understanding of digital marketing',
          'Creative thinking and analytical skills',
          'Familiarity with social media platforms'
        ],
        hi: [
          'मार्केटिंग, बिजनेस या संबंधित क्षेत्र में स्नातक की डिग्री',
          'डिजिटल मार्केटिंग की बुनियादी समझ',
          'रचनात्मक सोच और विश्लेषणात्मक कौशल',
          'सोशल मीडिया प्लेटफॉर्म से परिचय'
        ]
      },
      benefits: {
        en: [
          'Experience with leading e-commerce company',
          'Training in digital marketing tools',
          'Exposure to large-scale marketing campaigns',
          'Networking opportunities in tech industry'
        ],
        hi: [
          'अग्रणी ई-कॉमर्स कंपनी के साथ अनुभव',
          'डिजिटल मार्केटिंग टूल्स में प्रशिक्षण',
          'बड़े पैमाने पर मार्केटिंग अभियानों का अनुभव',
          'टेक इंडस्ट्री में नेटवर्किंग के अवसर'
        ]
      },
      matchPercentage: 91,
      sector: 'marketing'
    }
  ];

  // Load language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLanguage);
  }, []);

  // Simulate loading and API call
  useEffect(() => {
    const timer = setTimeout(() => {
      // Filter recommendations based on user profile
      const filteredRecommendations = mockInternships?.filter(internship => {
        if (!userProfile) return true;
        
        let score = 0;
        
        // Education matching (30% weight)
        if (userProfile?.education) {
          score += 0.3;
        }
        
        // Sector matching (50% weight)
        if (userProfile?.sectors && userProfile?.sectors?.includes(internship?.sector)) {
          score += 0.5;
        }
        
        // Location matching (20% weight)
        if (userProfile?.location) {
          score += 0.2;
        }
        
        return score > 0.3;
      })?.slice(0, 5); // Top 5 matches
      
      setRecommendations(filteredRecommendations);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [userProfile]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
  };

  const handleApply = (internship) => {
    // Simulate external application process
    window.open(`https://careers.${internship?.company?.toLowerCase()?.replace(/\s+/g, '')}.com`, '_blank');
  };

  const handleModifyPreferences = () => {
    onNavigate('profile-creation-wizard');
  };

  const handleBack = () => {
    onNavigate('profile-creation-wizard');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <ProgressHeader
          currentStep={3}
          totalSteps={3}
          language={language}
          onLanguageChange={handleLanguageChange}
        />
        
        <main className="pt-32 pb-24">
          <LoadingAnimation language={language} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ProgressHeader
        currentStep={3}
        totalSteps={3}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
      <main className="pt-32 pb-32 px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          {recommendations?.length > 0 ? (
            <>
              <ResultsHeader
                resultsCount={recommendations?.length}
                language={language}
                onModifyPreferences={handleModifyPreferences}
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {recommendations?.map((internship) => (
                  <InternshipCard
                    key={internship?.id}
                    internship={internship}
                    language={language}
                    onApply={handleApply}
                  />
                ))}
              </div>
            </>
          ) : (
            <NoResultsMessage
              language={language}
              onModifyPreferences={handleModifyPreferences}
            />
          )}
        </div>
      </main>
      <NavigationButtons
        currentStep={3}
        totalSteps={3}
        onBack={handleBack}
        language={language}
        showBackButton={true}
        nextButtonLabel={language === 'en' ? 'Back to Profile' : 'प्रोफाइल पर वापस जाएं'}
        onNext={handleBack}
      />
    </div>
  );
};

export default LoadingAndResults;