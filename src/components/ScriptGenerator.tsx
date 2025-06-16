
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import ScriptForm from '@/components/ScriptForm';
import ScriptPreview from '@/components/ScriptPreview';
import { generateScriptTemplate } from '@/utils/scriptGenerator';

interface OnboardingData {
  ceremonyType: string;
  state: string;
  duration: string;
  experience: string;
}

interface ScriptGeneratorProps {
  userPreferences?: OnboardingData | null;
}

interface ScriptFormData {
  ceremonyType: string;
  duration: string;
  personalNotes: string;
  couple1Name: string;
  couple2Name: string;
}

const ScriptGenerator = ({ userPreferences }: ScriptGeneratorProps) => {
  const [formData, setFormData] = useState<ScriptFormData>({
    ceremonyType: '',
    duration: '',
    personalNotes: '',
    couple1Name: '',
    couple2Name: ''
  });
  const [generatedScript, setGeneratedScript] = useState('');

  // Auto-populate from user preferences
  useEffect(() => {
    if (userPreferences) {
      setFormData(prev => ({
        ...prev,
        ceremonyType: userPreferences.ceremonyType,
        duration: userPreferences.duration
      }));
    }
  }, [userPreferences]);

  const handleFormChange = (field: keyof ScriptFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateScript = () => {
    const script = generateScriptTemplate({
      partner1: formData.couple1Name,
      partner2: formData.couple2Name,
      state: userPreferences?.state,
      personalNotes: formData.personalNotes,
      ceremonyType: formData.ceremonyType
    });
    
    setGeneratedScript(script);
  };

  return (
    <section id="scripts" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Script Generator</h2>
          <p className="text-lg text-gray-600">Create personalized ceremony scripts in minutes</p>
          {userPreferences && (
            <div className="flex justify-center gap-2 mt-4">
              <Badge variant="secondary">{userPreferences.ceremonyType}</Badge>
              <Badge variant="secondary">{userPreferences.state}</Badge>
              <Badge variant="secondary">{userPreferences.duration}</Badge>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScriptForm
            formData={formData}
            onFormChange={handleFormChange}
            onGenerate={generateScript}
          />
          
          <ScriptPreview
            script={generatedScript}
            coupleNames={{ partner1: formData.couple1Name, partner2: formData.couple2Name }}
            ceremonyType={formData.ceremonyType}
          />
        </div>
      </div>
    </section>
  );
};

export default ScriptGenerator;
