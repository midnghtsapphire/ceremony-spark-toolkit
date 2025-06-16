
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import ScriptForm from '@/components/ScriptForm';
import ScriptPreview from '@/components/ScriptPreview';
import ScriptVariationSelector from '@/components/ScriptVariationSelector';
import { generateEnhancedScript } from '@/utils/enhancedScriptGenerator';
import { useAuth } from '@/hooks/useAuth';

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
  const { user, subscribed } = useAuth();
  const [formData, setFormData] = useState<ScriptFormData>({
    ceremonyType: '',
    duration: '',
    personalNotes: '',
    couple1Name: '',
    couple2Name: ''
  });
  const [selectedVariation, setSelectedVariation] = useState('');
  const [generatedScript, setGeneratedScript] = useState('');
  const [scriptCount, setScriptCount] = useState(0);

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
    // Reset variation when ceremony type changes
    if (field === 'ceremonyType') {
      setSelectedVariation('');
    }
  };

  const generateScript = () => {
    // Check if user can generate scripts
    if (!user) {
      if (scriptCount >= 1) {
        return;
      }
      setScriptCount(prev => prev + 1);
    } else if (!subscribed && scriptCount >= 1) {
      return;
    }

    const script = generateEnhancedScript({
      partner1: formData.couple1Name,
      partner2: formData.couple2Name,
      state: userPreferences?.state,
      personalNotes: formData.personalNotes,
      ceremonyType: formData.ceremonyType,
      variationId: selectedVariation
    });
    
    setGeneratedScript(script);
  };

  const generateAnotherScript = () => {
    if (canGenerateScript()) {
      generateScript();
    }
  };

  const canGenerateScript = () => {
    if (!user && scriptCount >= 1) return false;
    if (user && !subscribed && scriptCount >= 1) return false;
    return true;
  };

  return (
    <section id="scripts" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Wedding Officiant Script Generator</h2>
          <p className="text-lg text-gray-600">Create personalized marriage ceremony scripts in minutes. Perfect for wedding officiants, ministers, and celebrants conducting wedding ceremonies.</p>
          {userPreferences && (
            <div className="flex justify-center gap-2 mt-4">
              <Badge variant="secondary">{userPreferences.ceremonyType}</Badge>
              <Badge variant="secondary">{userPreferences.state}</Badge>
              <Badge variant="secondary">{userPreferences.duration}</Badge>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ScriptForm
              formData={formData}
              onFormChange={handleFormChange}
              onGenerate={generateScript}
              canGenerate={canGenerateScript()}
              isSubscribed={subscribed}
            />
            
            {formData.ceremonyType && (
              <ScriptVariationSelector
                ceremonyType={formData.ceremonyType}
                selectedVariation={selectedVariation}
                onVariationSelect={setSelectedVariation}
                onGenerateAnother={generateAnotherScript}
              />
            )}
          </div>
          
          <ScriptPreview
            script={generatedScript}
            coupleNames={{ partner1: formData.couple1Name, partner2: formData.couple2Name }}
            ceremonyType={formData.ceremonyType}
            isSubscribed={subscribed}
          />
        </div>

        {!canGenerateScript() && (
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-200 max-w-md mx-auto">
              <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unlock Unlimited Wedding Scripts</h3>
              <p className="text-gray-600 mb-4">Get unlimited AI-generated ceremony scripts for all your wedding officiant needs</p>
              <Button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600"
              >
                Upgrade to Premium
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScriptGenerator;
