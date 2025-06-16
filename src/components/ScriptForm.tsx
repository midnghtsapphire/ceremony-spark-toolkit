
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';
import { ceremonyTypes, durationOptions } from '@/data/ceremonyTypes';

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
}

const ScriptForm = ({ formData, onFormChange, onGenerate }: ScriptFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-blue-600" />
          Ceremony Details
        </CardTitle>
        <CardDescription>
          Customize your ceremony script based on the couple's preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="couple1">Partner 1 Name</Label>
            <Input
              id="couple1"
              placeholder="Enter first partner's name"
              value={formData.couple1Name}
              onChange={(e) => onFormChange('couple1Name', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="couple2">Partner 2 Name</Label>
            <Input
              id="couple2"
              placeholder="Enter second partner's name"
              value={formData.couple2Name}
              onChange={(e) => onFormChange('couple2Name', e.target.value)}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="ceremony-type">Ceremony Style</Label>
          <Select value={formData.ceremonyType} onValueChange={(value) => onFormChange('ceremonyType', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select ceremony style" />
            </SelectTrigger>
            <SelectContent>
              {ceremonyTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="duration">Ceremony Duration</Label>
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

        <div>
          <Label htmlFor="personal-notes">Personal Notes & Special Requests</Label>
          <Textarea
            id="personal-notes"
            placeholder="Include any special traditions, readings, or personal touches..."
            value={formData.personalNotes}
            onChange={(e) => onFormChange('personalNotes', e.target.value)}
            rows={4}
          />
        </div>

        <Button 
          onClick={onGenerate}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          size="lg"
        >
          Generate Custom Script
        </Button>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Traditional</Badge>
          <Badge variant="secondary">Modern</Badge>
          <Badge variant="secondary">Inclusive</Badge>
          <Badge variant="secondary">Customizable</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScriptForm;
