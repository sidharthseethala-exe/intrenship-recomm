import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressHeader from '../../components/ui/ProgressHeader.jsx';
import NavigationButtons from '../../components/ui/NavigationButtons.jsx';
import StepIndicator from './components/StepIndicator.jsx';
import EducationStep from './components/EducationStep.jsx';
import SectorStep from './components/SectorStep.jsx';
import LocationStep from './components/LocationStep.jsx';
import Icon from '../../components/AppIcon.jsx';

const ProfileCreationWizard = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);
  const [availableLanguages, setAvailableLanguages] = useState(['en', 'hi']);
  
  // Form data state with enhanced structure
  const [formData, setFormData] = useState({
    education: '',
    sectors: [],
    location: '',
    regionalLanguage: null,
    selectedSkills: []
  });

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Load saved form data
  useEffect(() => {
    const savedFormData = localStorage.getItem('profileWizardData');
    if (savedFormData) {
      try {
        const parsedData = JSON.parse(savedFormData);
        setFormData(parsedData);
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('profileWizardData', JSON.stringify(formData));
  }, [formData]);

  // New language support mapping
  const updateLanguageSupport = (regionalLanguage, selectedState) => {
    const stateLanguageMap = {
      'andhra-pradesh': ['en', 'hi', 'te'],
      'telangana': ['en', 'hi', 'te'], 
      'tamil-nadu': ['en', 'hi', 'ta'],
      'kerala': ['en', 'hi', 'ml'],
      'karnataka': ['en', 'hi', 'kn'],
      'west-bengal': ['en', 'hi', 'bn'],
      'gujarat': ['en', 'hi', 'gu'],
      'maharashtra': ['en', 'hi', 'mr'],
      'punjab': ['en', 'hi', 'pa'],
      'odisha': ['en', 'hi', 'or'],
      'assam': ['en', 'hi', 'as']
    };

    const languages = stateLanguageMap?.[selectedState] || ['en', 'hi'];
    setAvailableLanguages(languages);
    
    setFormData(prev => ({
      ...prev,
      regionalLanguage,
      availableLanguages: languages
    }));
  };

  // Enhanced content with regional language support awareness
  const content = {
    en: {
      title: 'Create Your Tech Profile',
      subtitle: 'Help us find the perfect tech internship matching your skills and location',
      processing: 'Processing your technical profile...',
      error: 'Please complete this step before continuing',
      backToLanding: 'Back to Home',
      skillsMatching: 'Matching skills with opportunities...',
      languageSetup: 'Setting up regional language support...'
    },
    hi: {
      title: 'अपनी टेक प्रोफ़ाइल बनाएं', 
      subtitle: 'हमें आपके कौशल और स्थान के अनुकूल सही टेक इंटर्नशिप खोजने में मदद करें',
      processing: 'आपकी तकनीकी प्रोफ़ाइल प्रोसेस की जा रही है...',
      error: 'कृपया जारी रखने से पहले इस चरण को पूरा करें',
      backToLanding: 'होम पर वापस जाएं',
      skillsMatching: 'कौशल के साथ अवसरों का मिलान...',
      languageSetup: 'क्षेत्रीय भाषा सहायता सेट अप की जा रही है...'
    }
  };

  const totalSteps = 3;

  // Validation functions
  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return formData?.education !== '';
      case 2:
        return formData?.sectors?.length > 0;
      case 3:
        return formData?.location !== '';
      default:
        return false;
    }
  };

  const isCurrentStepValid = () => isStepValid(currentStep);

  // Enhanced event handlers
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
  };

  const handleEducationSelect = (education) => {
    setFormData(prev => ({ ...prev, education }));
  };

  const handleSectorToggle = (sectorId) => {
    setFormData(prev => ({
      ...prev,
      sectors: prev?.sectors?.includes(sectorId)
        ? prev?.sectors?.filter(id => id !== sectorId)
        : [...prev?.sectors, sectorId],
      // Track detailed skill selections for matching
      selectedSkills: prev?.sectors?.includes(sectorId)
        ? prev?.selectedSkills?.filter(skill => skill !== sectorId)
        : [...(prev?.selectedSkills || []), sectorId]
    }));
  };

  const handleLocationSelect = (location) => {
    setFormData(prev => ({ ...prev, location }));
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      navigate('/landing-page');
    }
  };

  const handleNext = () => {
    if (!isCurrentStepValid()) {
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleComplete = async () => {
    if (!isCurrentStepValid()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Enhanced profile data with skill matching and language preferences
      const profileData = {
        ...formData,
        language,
        availableLanguages,
        skillsCount: formData?.sectors?.length || 0,
        hasRegionalLanguage: availableLanguages?.length > 2,
        completedAt: new Date()?.toISOString(),
        profileType: 'tech-focused'
      };
      
      localStorage.setItem('userProfile', JSON.stringify(profileData));
      
      // Simulate enhanced processing with skill matching
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Navigate to loading and results page
      navigate('/loading-and-results');
    } catch (error) {
      console.error('Error completing profile:', error);
      setIsLoading(false);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <EducationStep
            selectedEducation={formData?.education}
            onEducationSelect={handleEducationSelect}
            language={language}
          />
        );
      case 2:
        return (
          <SectorStep
            selectedSectors={formData?.sectors}
            onSectorToggle={handleSectorToggle}
            language={language}
          />
        );
      case 3:
        return (
          <LocationStep
            selectedState={formData?.location}
            onStateSelect={handleLocationSelect}
            onRegionalLanguageUpdate={updateLanguageSupport}
            language={language}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Progress Header with dynamic language support */}
      <ProgressHeader
        currentStep={currentStep}
        totalSteps={totalSteps}
        language={language}
        onLanguageChange={handleLanguageChange}
        availableLanguages={availableLanguages}
        selectedState={formData?.location}
      />
      {/* Main Content */}
      <main className="pt-32 pb-24 px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              {content?.[language]?.title}
            </h1>
            <p className="text-muted-foreground">
              {content?.[language]?.subtitle}
            </p>
            
            {/* Skills Counter for Step 2 */}
            {currentStep === 2 && formData?.sectors?.length > 0 && (
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  <Icon name="Target" size={16} className="mr-2" />
                  {formData?.sectors?.length} {language === 'en' ? 'tech skills selected' : 'तकनीकी कौशल चयनित'}
                </span>
              </div>
            )}
          </div>

          {/* Step Indicator */}
          <StepIndicator
            currentStep={currentStep}
            totalSteps={totalSteps}
            language={language}
          />

          {/* Step Content */}
          <div className="bg-card rounded-xl shadow-card border border-border p-6 lg:p-8 mb-8">
            {renderCurrentStep()}
          </div>

          {/* Validation Error */}
          {!isCurrentStepValid() && currentStep > 1 && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div className="flex items-center space-x-2 text-destructive">
                <Icon name="AlertCircle" size={20} />
                <span className="text-sm font-medium">
                  {content?.[language]?.error}
                </span>
              </div>
            </div>
          )}

          {/* Enhanced Loading State */}
          {isLoading && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
              <div className="bg-card rounded-xl shadow-interactive border border-border p-8 text-center max-w-sm mx-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Loader2" size={32} className="text-primary animate-spin" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {content?.[language]?.processing}
                </h3>
                
                {/* Enhanced progress with steps */}
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    {content?.[language]?.skillsMatching}
                  </div>
                  {availableLanguages?.length > 2 && (
                    <div className="text-sm text-muted-foreground">
                      {content?.[language]?.languageSetup}
                    </div>
                  )}
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      {/* Navigation Buttons */}
      <NavigationButtons
        currentStep={currentStep}
        totalSteps={totalSteps}
        onBack={handleBack}
        onNext={handleNext}
        onApply={handleComplete}
        language={language}
        isLoading={isLoading}
        isValid={isCurrentStepValid()}
        showBackButton={true}
        nextButtonLabel={currentStep === totalSteps ? (language === 'en' ? 'Find Tech Matches' : 'टेक मैच खोजें') : null}
      />
    </div>
  );
};

export default ProfileCreationWizard;