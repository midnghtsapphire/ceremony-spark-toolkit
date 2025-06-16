
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, ExternalLink, FileText } from 'lucide-react';

const LegalGuide = () => {
  const [selectedState, setSelectedState] = useState('');

  const stateRequirements = {
    'california': {
      ageRequirement: '18 years old (16-17 with parental consent)',
      witnesses: '1 witness required',
      waitingPeriod: 'None',
      licenseValidity: '90 days',
      officiantRequirements: 'Must be ordained or deputized',
      filingDeadline: '10 days after ceremony',
      specialNotes: 'California recognizes online ordination. Confidential marriage licenses available.',
      forms: ['Marriage License Application', 'Certificate of Marriage', 'Officiant Registration']
    },
    'texas': {
      ageRequirement: '18 years old (16-17 with court order)',
      witnesses: '2 witnesses required',
      waitingPeriod: '72 hours (can be waived)',
      licenseValidity: '90 days',
      officiantRequirements: 'Must be licensed by the state',
      filingDeadline: '30 days after ceremony',
      specialNotes: 'Informal marriage (common law) recognized. Premarital education can waive waiting period.',
      forms: ['Marriage License', 'Declaration of Informal Marriage', 'Return of Marriage License']
    },
    'newyork': {
      ageRequirement: '18 years old (16-17 with parental consent)',
      witnesses: '1 witness required',
      waitingPeriod: '24 hours (can be waived)',
      licenseValidity: '60 days',
      officiantRequirements: 'Must be registered with city clerk',
      filingDeadline: '5 days after ceremony',
      specialNotes: 'One-day marriage officiant permits available. Same-sex marriage legal.',
      forms: ['Marriage License', 'Marriage Certificate', 'Officiant Registration']
    }
  };

  const states = [
    { value: 'california', label: 'California' },
    { value: 'texas', label: 'Texas' },
    { value: 'newyork', label: 'New York' },
    { value: 'florida', label: 'Florida' },
    { value: 'illinois', label: 'Illinois' }
  ];

  const currentRequirements = selectedState ? stateRequirements[selectedState] : null;

  return (
    <section id="legal" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Compliance Guide</h2>
          <p className="text-lg text-gray-600">State-specific requirements and official forms</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Select Your State</CardTitle>
              <CardDescription>
                Get specific legal requirements for your location
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a state to view requirements" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state.value} value={state.value}>
                      {state.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {currentRequirements && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Marriage Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Age Requirement</h4>
                    <p className="text-gray-600">{currentRequirements.ageRequirement}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Witnesses</h4>
                    <p className="text-gray-600">{currentRequirements.witnesses}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Waiting Period</h4>
                    <p className="text-gray-600">{currentRequirements.waitingPeriod}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">License Validity</h4>
                    <p className="text-gray-600">{currentRequirements.licenseValidity}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    Officiant Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Officiant Authorization</h4>
                    <p className="text-gray-600">{currentRequirements.officiantRequirements}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Filing Deadline</h4>
                    <p className="text-gray-600">{currentRequirements.filingDeadline}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Special Notes</h4>
                    <p className="text-gray-600">{currentRequirements.specialNotes}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Required Forms & Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {currentRequirements.forms.map((form, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-900">{form}</span>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex gap-3">
                    <Badge variant="outline" className="text-green-700 border-green-300">
                      Official State Forms
                    </Badge>
                    <Badge variant="outline" className="text-blue-700 border-blue-300">
                      Auto-Fill Available
                    </Badge>
                    <Badge variant="outline" className="text-purple-700 border-purple-300">
                      Downloadable PDF
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {!selectedState && (
            <Card>
              <CardContent className="text-center py-12">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a State</h3>
                <p className="text-gray-600">Choose your state above to view specific legal requirements and access official forms.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default LegalGuide;
