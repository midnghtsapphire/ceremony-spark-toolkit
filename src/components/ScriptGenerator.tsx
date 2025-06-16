
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { FileText, Download } from 'lucide-react';

const ScriptGenerator = () => {
  const [ceremonyType, setCeremonyType] = useState('');
  const [duration, setDuration] = useState('');
  const [personalNotes, setPersonalNotes] = useState('');
  const [couple1Name, setCouple1Name] = useState('');
  const [couple2Name, setCouple2Name] = useState('');
  const [generatedScript, setGeneratedScript] = useState('');

  const generateScript = () => {
    const scriptTemplate = `
WEDDING CEREMONY SCRIPT

Officiant: "Welcome, family and friends. We are gathered here today to witness and celebrate the union of ${couple1Name || '[Partner 1]'} and ${couple2Name || '[Partner 2]'} in marriage.

Marriage is a sacred bond, a commitment to love, honor, and cherish one another through all of life's joys and challenges.

${couple1Name || '[Partner 1]'} and ${couple2Name || '[Partner 2]'}, you have chosen to share your lives together. Today, in the presence of your loved ones, you make this commitment official.

DECLARATION OF INTENT

Do you, ${couple1Name || '[Partner 1]'}, take ${couple2Name || '[Partner 2]'} to be your lawfully wedded spouse, to have and to hold, in sickness and in health, for richer or poorer, for better or worse, for as long as you both shall live?

[Response: "I do"]

Do you, ${couple2Name || '[Partner 2]'}, take ${couple1Name || '[Partner 1]'} to be your lawfully wedded spouse, to have and to hold, in sickness and in health, for richer or poorer, for better or worse, for as long as you both shall live?

[Response: "I do"]

EXCHANGE OF RINGS

The ring is a symbol of eternity, with no beginning and no end. May these rings remind you always of the vows you have taken today.

PRONOUNCEMENT

By the power vested in me by the state of [STATE], I now pronounce you married. You may kiss!

${personalNotes ? `\nPersonal Notes:\n${personalNotes}` : ''}
    `;
    
    setGeneratedScript(scriptTemplate);
  };

  const ceremonyTypes = [
    { value: 'traditional', label: 'Traditional Christian' },
    { value: 'non-religious', label: 'Non-Religious' },
    { value: 'interfaith', label: 'Interfaith' },
    { value: 'lgbtqia', label: 'LGBTQIA+' },
    { value: 'humorous', label: 'Light & Humorous' },
    { value: 'cultural', label: 'Cultural/Ethnic' },
    { value: 'outdoor', label: 'Outdoor/Nature' },
    { value: 'intimate', label: 'Small & Intimate' }
  ];

  return (
    <section id="scripts" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Script Generator</h2>
          <p className="text-lg text-gray-600">Create personalized ceremony scripts in minutes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    value={couple1Name}
                    onChange={(e) => setCouple1Name(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="couple2">Partner 2 Name</Label>
                  <Input
                    id="couple2"
                    placeholder="Enter second partner's name"
                    value={couple2Name}
                    onChange={(e) => setCouple2Name(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="ceremony-type">Ceremony Style</Label>
                <Select value={ceremonyType} onValueChange={setCeremonyType}>
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
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10">5-10 minutes</SelectItem>
                    <SelectItem value="10-15">10-15 minutes</SelectItem>
                    <SelectItem value="15-20">15-20 minutes</SelectItem>
                    <SelectItem value="20-30">20-30 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="personal-notes">Personal Notes & Special Requests</Label>
                <Textarea
                  id="personal-notes"
                  placeholder="Include any special traditions, readings, or personal touches..."
                  value={personalNotes}
                  onChange={(e) => setPersonalNotes(e.target.value)}
                  rows={4}
                />
              </div>

              <Button 
                onClick={generateScript}
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

          <Card>
            <CardHeader>
              <CardTitle>Generated Script Preview</CardTitle>
              <CardDescription>
                Your personalized ceremony script will appear here
              </CardDescription>
            </CardHeader>
            <CardContent>
              {generatedScript ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
                      {generatedScript}
                    </pre>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download DOCX
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Fill out the form and click "Generate Custom Script" to see your personalized ceremony script here.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScriptGenerator;
