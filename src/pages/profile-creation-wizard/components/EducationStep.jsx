import React from 'react';
import Icon from '../../../components/AppIcon';

const options = [
  { id: '10th', icon: 'BookOpen', en: '10th Pass', hi: '10वीं पास' },
  { id: '12th', icon: 'GraduationCap', en: '12th Pass', hi: '12वीं पास' },
  { id: 'diploma', icon: 'Certificate', en: 'Diploma', hi: 'डिप्लोमा' },
  { id: 'graduate', icon: 'User', en: 'Graduate', hi: 'स्नातक' },
];

const EducationStep = ({ selectedEducation, onEducationSelect, language = 'en' }) => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {options.map(opt => {
          const selected = selectedEducation === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onEducationSelect(opt.id)}
              className={`rounded-xl border-2 p-4 flex flex-col items-center justify-center h-28 focus:outline-none transition-all ${
                selected ? 'border-orange-500 bg-orange-50' : 'border-border bg-white hover:border-orange-300'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${selected ? 'bg-orange-500' : 'bg-gray-100'}`}>
                <Icon name={opt.icon} size={24} className={selected ? 'text-white' : 'text-gray-700'} />
              </div>
              <span className="text-sm font-medium text-foreground">{language === 'en' ? opt.en : opt.hi}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EducationStep;


