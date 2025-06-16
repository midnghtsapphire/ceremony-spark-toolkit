
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Download, FileText, ExternalLink } from 'lucide-react';

interface FormDocument {
  id: string;
  title: string;
  state: string;
  category: string;
  description: string;
  downloadUrl?: string;
  externalUrl?: string;
  required: boolean;
}

const FormsLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const forms: FormDocument[] = [
    {
      id: '1',
      title: 'Marriage License Application',
      state: 'California',
      category: 'License',
      description: 'Official application form for marriage license in California',
      externalUrl: 'https://example.com/ca-marriage-license',
      required: true
    },
    {
      id: '2',
      title: 'Officiant Registration Form',
      state: 'California',
      category: 'Registration',
      description: 'Register as a wedding officiant in California',
      externalUrl: 'https://example.com/ca-officiant-reg',
      required: true
    },
    {
      id: '3',
      title: 'Marriage Certificate Return',
      state: 'California',
      category: 'Certificate',
      description: 'Form to return completed marriage certificate',
      downloadUrl: '/forms/ca-marriage-return.pdf',
      required: true
    },
    {
      id: '4',
      title: 'Witness Affidavit',
      state: 'New York',
      category: 'Documentation',
      description: 'Required witness documentation for New York ceremonies',
      downloadUrl: '/forms/ny-witness-affidavit.pdf',
      required: true
    },
    {
      id: '5',
      title: 'Pre-Ceremony Checklist',
      state: 'All States',
      category: 'Checklist',
      description: 'General pre-ceremony preparation checklist',
      downloadUrl: '/forms/pre-ceremony-checklist.pdf',
      required: false
    }
  ];

  const states = ['All States', ...Array.from(new Set(forms.map(form => form.state))).filter(state => state !== 'All States')];
  const categories = ['All Categories', ...Array.from(new Set(forms.map(form => form.category)))];

  const filteredForms = forms.filter(form => {
    const matchesSearch = form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = !selectedState || selectedState === 'All States' || form.state === selectedState || form.state === 'All States';
    const matchesCategory = !selectedCategory || selectedCategory === 'All Categories' || form.category === selectedCategory;
    
    return matchesSearch && matchesState && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search forms and documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">All States</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredForms.map((form) => (
          <Card key={form.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <FileText className="h-6 w-6 text-blue-600 flex-shrink-0" />
                {form.required && (
                  <Badge variant="destructive" className="text-xs">Required</Badge>
                )}
              </div>
              <CardTitle className="text-lg">{form.title}</CardTitle>
              <div className="flex gap-2">
                <Badge variant="secondary">{form.state}</Badge>
                <Badge variant="outline">{form.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">{form.description}</p>
              <div className="flex gap-2">
                {form.downloadUrl && (
                  <Button size="sm" variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                )}
                {form.externalUrl && (
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Official Site
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredForms.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No forms found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default FormsLibrary;
