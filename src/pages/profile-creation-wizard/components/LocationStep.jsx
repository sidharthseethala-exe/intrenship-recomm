import React, { useState, useMemo } from 'react';
import Icon from '../../../components/AppIcon';

const LocationStep = ({ selectedState, onStateSelect, language, onRegionalLanguageUpdate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // State to regional language mapping
  const stateLanguageMap = {
    'andhra-pradesh': 'te', // Telugu
    'telangana': 'te', // Telugu
    'tamil-nadu': 'ta', // Tamil
    'kerala': 'ml', // Malayalam
    'karnataka': 'kn', // Kannada
    'odisha': 'or', // Odia
    'west-bengal': 'bn', // Bengali
    'assam': 'as', // Assamese
    'punjab': 'pa', // Punjabi
    'gujarat': 'gu', // Gujarati
    'maharashtra': 'mr', // Marathi
    'rajasthan': 'hi', // Hindi (predominantly)
    'haryana': 'hi', // Hindi
    'uttar-pradesh': 'hi', // Hindi
    'bihar': 'hi', // Hindi
    'madhya-pradesh': 'hi', // Hindi
    'chhattisgarh': 'hi', // Hindi
    'jharkhand': 'hi' // Hindi
  };

  const content = {
    en: {
      title: 'Where would you like to work?',
      subtitle: 'Select your preferred state for internship opportunities',
      searchPlaceholder: 'Search for your state...',
      noResults: 'No states found matching your search',
      languageNote: 'Language support will be added based on your state selection',
      states: [
        { value: 'andhra-pradesh', label: 'Andhra Pradesh', languages: ['Telugu', 'English', 'Hindi'] },
        { value: 'arunachal-pradesh', label: 'Arunachal Pradesh', languages: ['English', 'Hindi'] },
        { value: 'assam', label: 'Assam', languages: ['Assamese', 'English', 'Hindi'] },
        { value: 'bihar', label: 'Bihar', languages: ['Hindi', 'English'] },
        { value: 'chhattisgarh', label: 'Chhattisgarh', languages: ['Hindi', 'English'] },
        { value: 'goa', label: 'Goa', languages: ['English', 'Hindi'] },
        { value: 'gujarat', label: 'Gujarat', languages: ['Gujarati', 'English', 'Hindi'] },
        { value: 'haryana', label: 'Haryana', languages: ['Hindi', 'English'] },
        { value: 'himachal-pradesh', label: 'Himachal Pradesh', languages: ['Hindi', 'English'] },
        { value: 'jharkhand', label: 'Jharkhand', languages: ['Hindi', 'English'] },
        { value: 'karnataka', label: 'Karnataka', languages: ['Kannada', 'English', 'Hindi'] },
        { value: 'kerala', label: 'Kerala', languages: ['Malayalam', 'English', 'Hindi'] },
        { value: 'madhya-pradesh', label: 'Madhya Pradesh', languages: ['Hindi', 'English'] },
        { value: 'maharashtra', label: 'Maharashtra', languages: ['Marathi', 'English', 'Hindi'] },
        { value: 'manipur', label: 'Manipur', languages: ['English', 'Hindi'] },
        { value: 'meghalaya', label: 'Meghalaya', languages: ['English', 'Hindi'] },
        { value: 'mizoram', label: 'Mizoram', languages: ['English', 'Hindi'] },
        { value: 'nagaland', label: 'Nagaland', languages: ['English', 'Hindi'] },
        { value: 'odisha', label: 'Odisha', languages: ['Odia', 'English', 'Hindi'] },
        { value: 'punjab', label: 'Punjab', languages: ['Punjabi', 'English', 'Hindi'] },
        { value: 'rajasthan', label: 'Rajasthan', languages: ['Hindi', 'English'] },
        { value: 'sikkim', label: 'Sikkim', languages: ['English', 'Hindi'] },
        { value: 'tamil-nadu', label: 'Tamil Nadu', languages: ['Tamil', 'English', 'Hindi'] },
        { value: 'telangana', label: 'Telangana', languages: ['Telugu', 'English', 'Hindi'] },
        { value: 'tripura', label: 'Tripura', languages: ['English', 'Hindi'] },
        { value: 'uttar-pradesh', label: 'Uttar Pradesh', languages: ['Hindi', 'English'] },
        { value: 'uttarakhand', label: 'Uttarakhand', languages: ['Hindi', 'English'] },
        { value: 'west-bengal', label: 'West Bengal', languages: ['Bengali', 'English', 'Hindi'] },
        { value: 'delhi', label: 'Delhi', languages: ['Hindi', 'English'] },
        { value: 'chandigarh', label: 'Chandigarh', languages: ['Hindi', 'English'] },
        { value: 'puducherry', label: 'Puducherry', languages: ['Tamil', 'English', 'Hindi'] },
        { value: 'jammu-kashmir', label: 'Jammu & Kashmir', languages: ['English', 'Hindi'] },
        { value: 'ladakh', label: 'Ladakh', languages: ['English', 'Hindi'] },
        { value: 'andaman-nicobar', label: 'Andaman & Nicobar Islands', languages: ['English', 'Hindi'] },
        { value: 'lakshadweep', label: 'Lakshadweep', languages: ['English', 'Hindi'] },
        { value: 'dadra-nagar-haveli', label: 'Dadra & Nagar Haveli', languages: ['English', 'Hindi'] },
        { value: 'daman-diu', label: 'Daman & Diu', languages: ['English', 'Hindi'] }
      ]
    },
    hi: {
      title: 'आप कहाँ काम करना चाहते हैं?',
      subtitle: 'इंटर्नशिप अवसरों के लिए अपना पसंदीदा राज्य चुनें',
      searchPlaceholder: 'अपना राज्य खोजें...',
      noResults: 'आपकी खोज से मेल खाने वाला कोई राज्य नहीं मिला',
      languageNote: 'आपके राज्य के चयन के आधार पर भाषा सहायता जोड़ी जाएगी',
      states: [
        { value: 'andhra-pradesh', label: 'आंध्र प्रदेश', languages: ['तेलुगू', 'अंग्रेजी', 'हिंदी'] },
        { value: 'arunachal-pradesh', label: 'अरुणाचल प्रदेश', languages: ['अंग्रेजी', 'हिंदी'] },
        { value: 'assam', label: 'असम', languages: ['असमिया', 'अंग्रेजी', 'हिंदी'] },
        { value: 'bihar', label: 'बिहार', languages: ['हिंदी', 'अंग्रेजी'] },
        { value: 'chhattisgarh', label: 'छत्तीसगढ़', languages: ['हिंदी', 'अंग्रेजी'] },
        { value: 'goa', label: 'गोवा', languages: ['अंग्रेजी', 'हिंदी'] },
        { value: 'gujarat', label: 'गुजरात', languages: ['गुजराती', 'अंग्रेजी', 'हिंदी'] },
        { value: 'haryana', label: 'हरियाणा', languages: ['हिंदी', 'अंग्रेजी'] },
        { value: 'himachal-pradesh', label: 'हिमाचल प्रदेश', languages: ['हिंदी', 'अंग्रेजी'] },
        { value: 'jharkhand', label: 'झारखंड', languages: ['हिंदी', 'अंग्रेजी'] },
        { value: 'karnataka', label: 'कर्नाटक', languages: ['कन्नड़', 'अंग्रेजी', 'हिंदी'] },
        { value: 'kerala', label: 'केरल', languages: ['मलयालम', 'अंग्रेजी', 'हिंदी'] },
        { value: 'madhya-pradesh', label: 'मध्य प्रदेश', languages: ['हिंदी', 'अंग्रेजी'] },
        { value: 'maharashtra', label: 'महाराष्ट्र', languages: ['मराठी', 'अंग्रेजी', 'हिंदी'] },
        { value: 'manipur', label: 'मणिपुर', languages: ['अंग्रेजी', 'हिंदी'] },
        { value: 'meghalaya', label: 'मेघालय', languages: ['अंग्रेजी', 'हिंदी'] },
        { value: 'mizoram', label: 'मिजोरम', languages: ['अंग्रेजी', 'हिंदी'] },
        { value: 'nagaland', label: 'नागालैंड', languages: ['अंग्रेजी', 'हिंदी'] },
        { value: 'odisha', label: 'ओडिशा', languages: ['ओड़िया', 'अंग्रेजी', 'हिंदी'] },
        { value: 'punjab', label: 'पंजाब', languages: ['पंजाबी', 'अंग्रेजी', 'हिंदी'] },
        { value: 'rajasthan', label: 'राजस्थान', languages: ['हिंदी', 'अंग्रेजी'] },
        { value: 'sikkim', label: 'सिक्किम', languages: ['अंग्रेजी', 'हिंदी'] },
        { value: 'tamil-nadu', label: 'तमिल नाडु', languages: ['तमिल', 'अंग्रेजी', 'हिंदी'] },
        { value: 'telangana', label: 'तेलंगाना', languages: ['तेलुगू', 'अंग्रेजी', 'हिंदी'] },
        { value: 'tripura', label: 'त्रिपुरा', languages: ['अंग्रेजी', 'हिंदी'] },
        { value: 'uttar-pradesh', label: 'उत्तर प्रदेश', languages: ['हिंदी', 'अंग्रेजी'] },
        { value: 'uttarakhand', label: 'उत्तराखंड', languages: ['हिंदी', 'अंग्रेजी'] },
        { value: 'west-bengal', label: 'पश्चिम बंगाल', languages: ['बंगाली', 'अंग्रेजी', 'हिंदी'] },
        { value: 'delhi', label: 'दिल्ली', languages: ['हिंदी', 'अंग्रेजी'] },
        { value: 'chandigarh', label: 'चंडीगढ़', languages: ['हिंदी', 'अंग्रेजी'] },
        { value: 'puducherry', label: 'पुडुचेरी', languages: ['तमिल', 'अंग्रेजी', 'हिंदी'] },
        { value: 'jammu-kashmir', label: 'जम्मू और कश्मीर', languages: ['अंग्रेजी', 'हिंदी'] },
        { value: 'ladakh', label: 'लद्दाख', languages: ['अंग्रेजी', 'हिंदी'] },
        { value: 'andaman-nicobar', label: 'अंडमान और निकोबार द्वीप समूह', languages: ['अंग्रेजी', 'हिंदी'] },
        { value: 'lakshadweep', label: 'लक्षद्वीप', languages: ['अंग्रेजी', 'हिंदी'] },
        { value: 'dadra-nagar-haveli', label: 'दादरा और नगर हवेली', languages: ['अंग्रेजी', 'हिंदी'] },
        { value: 'daman-diu', label: 'दमन और दीव', languages: ['अंग्रेजी', 'हिंदी'] }
      ]
    }
  };

  const filteredStates = useMemo(() => {
    if (!searchTerm) return content?.[language]?.states;
    
    return content?.[language]?.states?.filter(state =>
      state?.label?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
  }, [searchTerm, language]);

  const selectedStateInfo = selectedState 
    ? content?.[language]?.states?.find(state => state?.value === selectedState)
    : null;

  const handleStateSelect = (stateValue) => {
    onStateSelect(stateValue);
    
    // Update regional language availability
    const regionalLanguage = stateLanguageMap?.[stateValue];
    if (regionalLanguage && onRegionalLanguageUpdate) {
      onRegionalLanguageUpdate(regionalLanguage, stateValue);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-xl lg:text-2xl font-semibold text-foreground">
          {content?.[language]?.title}
        </h2>
        <p className="text-sm lg:text-base text-muted-foreground">
          {content?.[language]?.subtitle}
        </p>
      </div>
      
      {/* Location Icon */}
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon name="MapPin" size={40} className="text-primary" />
        </div>
      </div>
      
      {/* State Selection */}
      <div className="max-w-md mx-auto space-y-4">
        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="Search" size={20} className="text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder={content?.[language]?.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent min-h-touch"
          />
        </div>

        {/* States List */}
        <div className="max-h-80 overflow-y-auto border border-border rounded-lg bg-card">
          {filteredStates?.length > 0 ? (
            <div className="divide-y divide-border">
              {filteredStates?.map((state) => (
                <button
                  key={state?.value}
                  onClick={() => handleStateSelect(state?.value)}
                  className={`
                    w-full px-4 py-3 text-left transition-smooth min-h-touch
                    ${selectedState === state?.value
                      ? 'bg-primary/10 text-primary border-l-4 border-l-primary' :'hover:bg-muted text-foreground'
                    }
                    focus:outline-none focus:bg-muted
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <span className="font-medium">{state?.label}</span>
                      {state?.languages && state?.languages?.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {state?.languages?.slice(0, 3)?.map((lang, index) => (
                            <span 
                              key={index}
                              className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-full"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    {selectedState === state?.value && (
                      <Icon name="CheckCircle2" size={20} className="text-primary fill-current" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <Icon name="MapPin" size={48} className="text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">{content?.[language]?.noResults}</p>
            </div>
          )}
        </div>

        {/* Selected State Display */}
        {selectedStateInfo && (
          <div className="text-center space-y-3">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full">
              <Icon name="MapPin" size={16} className="mr-2" />
              <span className="font-medium">{selectedStateInfo?.label}</span>
            </div>
            
            {/* Language Support Info */}
            {selectedStateInfo?.languages && selectedStateInfo?.languages?.length > 0 && (
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-xs text-muted-foreground mb-2">
                  {content?.[language]?.languageNote}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {selectedStateInfo?.languages?.map((lang, index) => (
                    <span 
                      key={index}
                      className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Helper Text */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          {language === 'en' ?'Regional language support will be automatically enabled based on your state selection' :'आपके राज्य के चयन के आधार पर क्षेत्रीय भाषा सहायता स्वचालित रूप से सक्रिय हो जाएगी'
          }
        </p>
      </div>
    </div>
  );
};

export default LocationStep;