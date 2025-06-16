
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ceremonyTypes, durationOptions } from '@/data/ceremonyTypes';
import { Wand2, Heart, Lock } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface ScriptFormData {
  ceremonyType: string;
  duration: string;
  personalNotes: string;
  couple1Name: string;
  couple2Name: string;
}

interface ScriptFormProps {
  formData: ScriptFormData;
  onFormChange: (field: keyof ScriptFormData, value: string) => void;
  onGenerate: () => void;
  canGenerate: boolean;
  isSubscribed?: boolean;
}

const ScriptForm = ({ formData, onFormChange, onGenerate, canGenerate, isSubscribed }: ScriptFormProps) => {
  const handleCeremonyTypeClick = (ceremonyType: string) => {
    onFormChange('ceremonyType', ceremonyType);
    
    // Auto-generate if form is valid and user can generate
    setTimeout(() => {
      if (canGenerate && formData.couple1Name && formData.couple2Name) {
        onGenerate();
        // Show toast notification
        toast(`Generating ${ceremonyType} script for ${formData.couple1Name} & ${formData.couple2Name}...`);
        // Scroll to preview section after a short delay
        setTimeout(() => {
          const scriptPreview = document.querySelector('[data-script-preview]');
          if (scriptPreview) {
            scriptPreview.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500);
      }
    }, 100);
  };

  const isFormValid = formData.ceremonyType && formData.couple1Name && formData.couple2Name;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-5 w-5" />
          Create Your Wedding Script
        </CardTitle>
        <CardDescription>
          Generate a personalized ceremony script tailored to your needs
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Ceremony Type Selection */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Choose Ceremony Type</Label>
          <p className="text-sm text-gray-600">Click to select and auto-generate</p>
          <div className="grid grid-cols-2 gap-2">
            {ceremonyTypes.map((type) => (
              <Button
                key={type.value}
                variant={formData.ceremonyType === type.value ? "default" : "outline"}
                className="h-auto p-3 text-left justify-start"
                onClick={() => handleCeremonyTypeClick(type.value)}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span>{type.icon}</span>
                    <span className="font-medium text-sm">{type.label}</span>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Couple Names */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="couple1Name">Partner 1 Name</Label>
            <Input
              id="couple1Name"
              placeholder="Enter first name"
              value={formData.couple1Name}
              onChange={(e) => onFormChange('couple1Name', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="couple2Name">Partner 2 Name</Label>
            <Input
              id="couple2Name"
              placeholder="Enter second name"
              value={formData.couple2Name}
              onChange={(e) => onFormChange('couple2Name', e.target.value)}
            />
          </div>
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <Label>Ceremony Duration</Label>
          <Select value={formData.duration} onValueChange={(value) => onFormChange('duration', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              {durationOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Personal Notes */}
        <div className="space-y-2">
          <Label htmlFor="personalNotes">Personal Notes (Optional)</Label>
          <Textarea
            id="personalNotes"
            placeholder="Add any special requests, themes, or personal touches..."
            value={formData.personalNotes}
            onChange={(e) => onFormChange('personalNotes', e.target.value)}
            rows={3}
          />
        </div>

        {/* Generate Button */}
        <Button
          onClick={onGenerate}
          disabled={!canGenerate || !isFormValid}
          className="w-full"
          size="lg"
        >
          {!canGenerate ? (
            <>
              <Lock className="h-4 w-4 mr-2" />
              Upgrade to Generate More Scripts
            </>
          ) : (
            <>
              <Heart className="h-4 w-4 mr-2" />
              Generate Wedding Script
            </>
          )}
        </Button>

        {!isFormValid && (
          <p className="text-sm text-gray-500 text-center">
            Please select ceremony type and enter both partner names to generate
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ScriptForm;
