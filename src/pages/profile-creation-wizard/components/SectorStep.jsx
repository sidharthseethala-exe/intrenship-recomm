import React from 'react';
import Icon from '../../../components/AppIcon';

const SectorStep = ({ selectedSectors, onSectorToggle, language }) => {
  const content = {
    en: {
      title: 'Which tech skills interest you?',
      subtitle: 'Select one or more specialized tech skills for your internship (you can choose multiple)',
      sectors: [
        {
          id: 'machine-learning',
          title: 'Machine Learning & AI',
          description: 'Neural networks, deep learning, computer vision, NLP, predictive analytics',
          icon: 'Brain',
          color: 'purple'
        },
        {
          id: 'data-science',
          title: 'Data Science',
          description: 'Data analysis, statistical modeling, Python/R, data visualization, analytics',
          icon: 'BarChart3',
          color: 'blue'
        },
        {
          id: 'software-engineer',
          title: 'Software Engineering',
          description: 'Full-stack development, system design, algorithms, code architecture',
          icon: 'Code',
          color: 'green'
        },
        {
          id: 'data-analyst',
          title: 'Data Analyst',
          description: 'Business intelligence, SQL, Excel, reporting, data interpretation',
          icon: 'TrendingUp',
          color: 'orange'
        },
        {
          id: 'data-engineer',
          title: 'Data Engineering',
          description: 'ETL pipelines, big data, cloud platforms, database optimization',
          icon: 'Database',
          color: 'indigo'
        },
        {
          id: 'blockchain',
          title: 'Blockchain & Web3',
          description: 'Smart contracts, cryptocurrency, DeFi, blockchain development',
          icon: 'Link',
          color: 'yellow'
        },
        {
          id: 'cybersecurity',
          title: 'Cybersecurity',
          description: 'Ethical hacking, security audits, penetration testing, network security',
          icon: 'Shield',
          color: 'red'
        },
        {
          id: 'mobile-development',
          title: 'Mobile Development',
          description: 'iOS, Android, React Native, Flutter, mobile app architecture',
          icon: 'Smartphone',
          color: 'teal'
        },
        {
          id: 'cloud-computing',
          title: 'Cloud Computing',
          description: 'AWS, Azure, GCP, DevOps, containerization, microservices',
          icon: 'Cloud',
          color: 'sky'
        },
        {
          id: 'frontend-development',
          title: 'Frontend Development',
          description: 'React, Angular, Vue.js, HTML/CSS, responsive design, UI/UX',
          icon: 'Layout',
          color: 'pink'
        },
        {
          id: 'backend-development',
          title: 'Backend Development',
          description: 'Node.js, Python, Java, APIs, databases, server architecture',
          icon: 'Server',
          color: 'gray'
        },
        {
          id: 'devops',
          title: 'DevOps & Infrastructure',
          description: 'CI/CD, Docker, Kubernetes, automation, monitoring, deployment',
          icon: 'GitBranch',
          color: 'violet'
        }
      ]
    },
    hi: {
      title: 'कौन से तकनीकी कौशल आपकी रुचि के हैं?',
      subtitle: 'अपनी इंटर्नशिप के लिए एक या अधिक विशेषीकृत तकनीकी कौशल चुनें (आप कई विकल्प चुन सकते हैं)',
      sectors: [
        {
          id: 'machine-learning',
          title: 'मशीन लर्निंग और AI',
          description: 'न्यूरल नेटवर्क, डीप लर्निंग, कंप्यूटर विजन, NLP, भविष्यवाणी विश्लेषण',
          icon: 'Brain',
          color: 'purple'
        },
        {
          id: 'data-science',
          title: 'डेटा साइंस',
          description: 'डेटा विश्लेषण, सांख्यिकीय मॉडलिंग, Python/R, डेटा विज़ुअलाइज़ेशन, एनालिटिक्स',
          icon: 'BarChart3',
          color: 'blue'
        },
        {
          id: 'software-engineer',
          title: 'सॉफ्टवेयर इंजीनियरिंग',
          description: 'फुल-स्टैक डेवलपमेंट, सिस्टम डिज़ाइन, एल्गोरिदम, कोड आर्किटेक्चर',
          icon: 'Code',
          color: 'green'
        },
        {
          id: 'data-analyst',
          title: 'डेटा एनालिस्ट',
          description: 'बिज़नेस इंटेलिजेंस, SQL, Excel, रिपोर्टिंग, डेटा व्याख्या',
          icon: 'TrendingUp',
          color: 'orange'
        },
        {
          id: 'data-engineer',
          title: 'डेटा इंजीनियरिंग',
          description: 'ETL पाइपलाइन, बिग डेटा, क्लाउड प्लेटफॉर्म, डेटाबेस ऑप्टिमाइज़ेशन',
          icon: 'Database',
          color: 'indigo'
        },
        {
          id: 'blockchain',
          title: 'ब्लॉकचेन और Web3',
          description: 'स्मार्ट कॉन्ट्रैक्ट्स, क्रिप्टोकरेंसी, DeFi, ब्लॉकचेन डेवलपमेंट',
          icon: 'Link',
          color: 'yellow'
        },
        {
          id: 'cybersecurity',
          title: 'साइबर सिक्यूरिटी',
          description: 'एथिकल हैकिंग, सिक्यूरिटी ऑडिट, पेनेट्रेशन टेस्टिंग, नेटवर्क सिक्यूरिटी',
          icon: 'Shield',
          color: 'red'
        },
        {
          id: 'mobile-development',
          title: 'मोबाइल डेवलपमेंट',
          description: 'iOS, Android, React Native, Flutter, मोबाइल ऐप आर्किटेक्चर',
          icon: 'Smartphone',
          color: 'teal'
        },
        {
          id: 'cloud-computing',
          title: 'क्लाउड कंप्यूटिंग',
          description: 'AWS, Azure, GCP, DevOps, कंटेनराइज़ेशन, माइक्रोसर्विसेज',
          icon: 'Cloud',
          color: 'sky'
        },
        {
          id: 'frontend-development',
          title: 'फ्रंटएंड डेवलपमेंट',
          description: 'React, Angular, Vue.js, HTML/CSS, रेस्पॉन्सिव डिज़ाइन, UI/UX',
          icon: 'Layout',
          color: 'pink'
        },
        {
          id: 'backend-development',
          title: 'बैकएंड डेवलपमेंट',
          description: 'Node.js, Python, Java, APIs, डेटाबेस, सर्वर आर्किटेक्चर',
          icon: 'Server',
          color: 'gray'
        },
        {
          id: 'devops',
          title: 'DevOps और इन्फ्रास्ट्रक्चर',
          description: 'CI/CD, Docker, Kubernetes, ऑटोमेशन, मॉनिटरिंग, डिप्लॉयमेंट',
          icon: 'GitBranch',
          color: 'violet'
        }
      ]
    }
  };

  const getColorClasses = (color, isSelected) => {
    const colorMap = {
      blue: isSelected ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-300',
      green: isSelected ? 'border-green-500 bg-green-50' : 'hover:border-green-300',
      red: isSelected ? 'border-red-500 bg-red-50' : 'hover:border-red-300',
      orange: isSelected ? 'border-orange-500 bg-orange-50' : 'hover:border-orange-300',
      purple: isSelected ? 'border-purple-500 bg-purple-50' : 'hover:border-purple-300',
      indigo: isSelected ? 'border-indigo-500 bg-indigo-50' : 'hover:border-indigo-300',
      yellow: isSelected ? 'border-yellow-500 bg-yellow-50' : 'hover:border-yellow-300',
      teal: isSelected ? 'border-teal-500 bg-teal-50' : 'hover:border-teal-300',
      sky: isSelected ? 'border-sky-500 bg-sky-50' : 'hover:border-sky-300',
      pink: isSelected ? 'border-pink-500 bg-pink-50' : 'hover:border-pink-300',
      gray: isSelected ? 'border-gray-500 bg-gray-50' : 'hover:border-gray-300',
      violet: isSelected ? 'border-violet-500 bg-violet-50' : 'hover:border-violet-300'
    };
    return colorMap?.[color] || '';
  };

  const getIconColorClasses = (color, isSelected) => {
    const colorMap = {
      blue: isSelected ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600',
      green: isSelected ? 'bg-green-500 text-white' : 'bg-green-100 text-green-600',
      red: isSelected ? 'bg-red-500 text-white' : 'bg-red-100 text-red-600',
      orange: isSelected ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-600',
      purple: isSelected ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-600',
      indigo: isSelected ? 'bg-indigo-500 text-white' : 'bg-indigo-100 text-indigo-600',
      yellow: isSelected ? 'bg-yellow-500 text-white' : 'bg-yellow-100 text-yellow-600',
      teal: isSelected ? 'bg-teal-500 text-white' : 'bg-teal-100 text-teal-600',
      sky: isSelected ? 'bg-sky-500 text-white' : 'bg-sky-100 text-sky-600',
      pink: isSelected ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-600',
      gray: isSelected ? 'bg-gray-500 text-white' : 'bg-gray-100 text-gray-600',
      violet: isSelected ? 'bg-violet-500 text-white' : 'bg-violet-100 text-violet-600'
    };
    return colorMap?.[color] || '';
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
      
      {/* Selected Count */}
      {selectedSectors?.length > 0 && (
        <div className="text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
            <Icon name="CheckCircle2" size={16} className="mr-2" />
            {selectedSectors?.length} {language === 'en' ? 'skills selected' : 'कौशल चयनित'}
          </span>
        </div>
      )}
      
      {/* Sector Options */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {content?.[language]?.sectors?.map((sector) => {
          const isSelected = selectedSectors?.includes(sector?.id);
          
          return (
            <button
              key={sector?.id}
              onClick={() => onSectorToggle(sector?.id)}
              className={`
                p-6 rounded-xl border-2 transition-smooth min-h-touch text-left
                ${isSelected
                  ? `${getColorClasses(sector?.color, true)} shadow-interactive`
                  : `border-border bg-card ${getColorClasses(sector?.color, false)}`
                }
                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
              `}
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className={`
                  w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0
                  ${getIconColorClasses(sector?.color, isSelected)}
                `}>
                  <Icon name={sector?.icon} size={24} />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {sector?.title}
                    </h3>
                    {isSelected && (
                      <Icon name="CheckCircle2" size={20} className="text-primary fill-current" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sector?.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Helper Text */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          {language === 'en' ?'Tip: Select multiple tech skills to get more targeted internship matches' :'सुझाव: अधिक लक्षित इंटर्नशिप मैच पाने के लिए कई तकनीकी कौशल चुनें'
          }
        </p>
      </div>
    </div>
  );
};

export default SectorStep;