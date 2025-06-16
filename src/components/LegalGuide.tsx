
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Scale, MapPin, FileText, AlertCircle, CheckCircle, Users, ExternalLink } from 'lucide-react';
import FormsLibrary from '@/components/FormsLibrary';

interface LegalGuideProps {
  userState?: string;
}

const LegalGuide = ({ userState }: LegalGuideProps) => {
  const [selectedState, setSelectedState] = useState(userState || '');

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const getStateRequirements = (state: string) => {
    // Mock data - in real app this would come from a database
    const requirements = {
      'California': {
        age: '18 years old',
        witnesses: '1 witness required',
        waiting: 'No waiting period',
        registration: 'Officiant must register with county',
        special: 'Marriage license valid for 90 days'
      },
      'New York': {
        age: '18 years old (16-17 with consent)',
        witnesses: '1 witness required',
        waiting: '24 hour waiting period',
        registration: 'Officiant must register with city clerk',
        special: 'Marriage license valid for 60 days'
      }
    };
    return requirements[state as keyof typeof requirements] || null;
  };

  const requirements = selectedState ? getStateRequirements(selectedState) : null;

  return (
    <section id="legal" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Requirements & Forms</h2>
          <p className="text-lg text-gray-600">State-specific guidance to ensure your ceremony is legally valid</p>
          {userState && (
            <Badge variant="secondary" className="mt-2">
              <MapPin className="h-3 w-3 mr-1" />
              {userState}
            </Badge>
          )}
        </div>

        <Tabs defaultValue="requirements" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="forms">Forms Library</TabsTrigger>
            <TabsTrigger value="process">Process Guide</TabsTrigger>
          </TabsList>
          
          <TabsContent value="requirements">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-blue-600" />
                  State Requirements
                </CardTitle>
                <CardDescription>
                  Legal requirements for officiating weddings by state
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Select State</label>
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {requirements && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">Age Requirements</span>
                      </div>
                      <p className="text-sm text-gray-600">{requirements.age}</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-medium">Witnesses</span>
                      </div>
                      <p className="text-sm text-gray-600">{requirements.witnesses}</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium">Waiting Period</span>
                      </div>
                      <p className="text-sm text-gray-600">{requirements.waiting}</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-4 w-4 text-purple-600" />
                        <span className="font-medium">Registration</span>
                      </div>
                      <p className="text-sm text-gray-600">{requirements.registration}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="forms">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Legal Forms Library
                </CardTitle>
                <CardDescription>
                  Search and download required forms for your state
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FormsLibrary />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process">
            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Process</CardTitle>
                <CardDescription>
                  Complete guide to legally officiating a wedding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="font-semibold mb-2">Get Ordained/Registered</h3>
                      <p className="text-gray-600">Become legally authorized to perform marriages in your state.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="font-semibold mb-2">Verify Requirements</h3>
                      <p className="text-gray-600">Check state-specific requirements for witnesses, waiting periods, and documentation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="font-semibold mb-2">Obtain Marriage License</h3>
                      <p className="text-gray-600">Ensure the couple has a valid marriage license before the ceremony.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="font-semibold mb-2">Perform Ceremony</h3>
                      <p className="text-gray-600">Conduct the wedding ceremony according to legal requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                    <div>
                      <h3 className="font-semibold mb-2">Complete Documentation</h3>
                      <p className="text-gray-600">Sign and file the marriage certificate with appropriate authorities.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View State-Specific Guidelines
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LegalGuide;
