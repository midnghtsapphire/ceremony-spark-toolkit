
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Download, Copy, BookOpen } from 'lucide-react';
import { ceremonyTypes } from '@/data/ceremonyTypes';
import { useAuth } from '@/hooks/useAuth';

interface ScriptTemplate {
  id: string;
  title: string;
  category: string;
  duration: string;
  preview: string;
  isFree: boolean;
  tags: string[];
}

const scriptTemplates: ScriptTemplate[] = [
  {
    id: 'classic-traditional',
    title: 'Classic Traditional Wedding',
    category: 'traditional',
    duration: '15-20 minutes',
    preview: 'Dearly beloved, we are gathered here today in the sight of God and these witnesses...',
    isFree: true,
    tags: ['Religious', 'Formal', 'Traditional Vows']
  },
  {
    id: 'simple-elegant',
    title: 'Simple & Elegant',
    category: 'non-religious',
    duration: '10-15 minutes',
    preview: 'Welcome friends and family. Today we celebrate the love between...',
    isFree: true,
    tags: ['Secular', 'Elegant', 'Concise']
  },
  {
    id: 'beach-ceremony',
    title: 'Beach Wedding Ceremony',
    category: 'outdoor',
    duration: '12-15 minutes',
    preview: 'As we gather here today with the ocean as our witness...',
    isFree: true,
    tags: ['Beach', 'Nature', 'Romantic']
  },
  {
    id: 'unity-candle',
    title: 'Unity Candle Ceremony',
    category: 'traditional',
    duration: '18-22 minutes',
    preview: 'Today we witness the joining of two flames into one...',
    isFree: false,
    tags: ['Unity Ritual', 'Symbolic', 'Traditional']
  },
  {
    id: 'multicultural',
    title: 'Multicultural Celebration',
    category: 'cultural',
    duration: '20-25 minutes',
    preview: 'We honor the beautiful traditions that have brought us together...',
    isFree: false,
    tags: ['Multicultural', 'Inclusive', 'Traditions']
  },
  {
    id: 'vow-renewal',
    title: 'Vow Renewal Ceremony',
    category: 'intimate',
    duration: '10-12 minutes',
    preview: 'Today we celebrate not a new beginning, but the continuation of your beautiful journey...',
    isFree: true,
    tags: ['Renewal', 'Anniversary', 'Intimate']
  }
];

const ScriptLibrary = () => {
  const { subscribed } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [previewScript, setPreviewScript] = useState<string | null>(null);

  const filteredTemplates = selectedCategory === 'all' 
    ? scriptTemplates 
    : scriptTemplates.filter(template => template.category === selectedCategory);

  const availableTemplates = filteredTemplates.filter(template => 
    template.isFree || subscribed
  );

  const handlePreview = (scriptId: string) => {
    // In a real app, this would load the full script
    setPreviewScript(`This is a preview of the ${scriptId} script...`);
  };

  const handleDownload = (scriptId: string) => {
    // In a real app, this would download the actual script
    console.log(`Downloading script: ${scriptId}`);
  };

  return (
    <section id="library" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Professional Wedding Script Library
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our curated collection of marriage ceremony scripts crafted by experienced wedding officiants. 
            Perfect templates for ministers, celebrants, and professional officiant services.
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid grid-cols-4 lg:grid-cols-9 gap-2">
            <TabsTrigger value="all">All Scripts</TabsTrigger>
            {ceremonyTypes.map((type) => (
              <TabsTrigger key={type.value} value={type.value} className="text-xs">
                {type.icon} {type.label.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableTemplates.map((template) => (
            <Card key={template.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{template.title}</CardTitle>
                  {template.isFree ? (
                    <Badge className="bg-green-100 text-green-800">FREE</Badge>
                  ) : (
                    <Badge className="bg-blue-100 text-blue-800">PREMIUM</Badge>
                  )}
                </div>
                <CardDescription className="text-sm">
                  Duration: {template.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4 italic">
                  "{template.preview}..."
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {template.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handlePreview(template.id)}
                    className="flex-1"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Preview
                  </Button>
                  {(template.isFree || subscribed) && (
                    <Button 
                      size="sm" 
                      onClick={() => handleDownload(template.id)}
                      className="flex-1"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Use Script
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!subscribed && (
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Unlock Full Script Library</CardTitle>
                <CardDescription className="text-sm">
                  Get access to over 50 professional wedding ceremony scripts, including premium templates 
                  for specialized ceremonies, cultural traditions, and unique celebration styles.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>• Unity ceremony scripts</div>
                  <div>• Multicultural ceremonies</div>
                  <div>• Handfasting rituals</div>
                  <div>• Sand ceremony scripts</div>
                  <div>• Interfaith wedding ceremonies</div>
                  <div>• Elopement scripts</div>
                </div>
                <Button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-primary/90 text-sm"
                  size="sm"
                >
                  Upgrade for Full Access
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScriptLibrary;
