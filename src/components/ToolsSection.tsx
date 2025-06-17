
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Gavel, FileText, Award, MapPin, Clock, Users } from 'lucide-react';
import FormsLibrary from './FormsLibrary';
import CertificateGenerator from './CertificateGenerator';

const ToolsSection = () => {
  const [activeTab, setActiveTab] = useState('certificates');

  const tools = [
    {
      id: 'certificates',
      title: 'Certificate Generator',
      description: 'Generate official marriage and officiant certificates',
      icon: Award,
      badge: 'PDF Export'
    },
    {
      id: 'forms',
      title: 'Forms Library',
      description: 'Access state-specific marriage forms and documents',
      icon: FileText,
      badge: 'State-Specific'
    },
    {
      id: 'legal',
      title: 'Legal Requirements',
      description: 'State marriage laws and officiant requirements',
      icon: Gavel,
      badge: 'Legal Guide'
    },
    {
      id: 'timeline',
      title: 'Wedding Timeline',
      description: 'Plan your ceremony schedule and timing',
      icon: Clock,
      badge: 'Planning Tool'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Wedding Officiant Tools</h2>
          <p className="text-lg text-gray-600">Complete toolkit for wedding officiants with PDF generation and legal resources</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <TabsTrigger key={tool.id} value={tool.id} className="flex flex-col items-center gap-2 p-4">
                  <IconComponent className="h-5 w-5" />
                  <span className="text-sm font-medium">{tool.title}</span>
                  <Badge variant="secondary" className="text-xs">{tool.badge}</Badge>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="certificates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-amber-600" />
                  Certificate Generator
                </CardTitle>
                <CardDescription>
                  Generate professional marriage certificates and officiant credentials with PDF export
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CertificateGenerator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-amber-600" />
                  Official Forms Library
                </CardTitle>
                <CardDescription>
                  Access state-specific marriage license forms and required documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FormsLibrary />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="legal" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Gavel className="h-5 w-5 text-amber-600" />
                    Marriage Laws
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">State-specific marriage requirements and regulations</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Age Requirements:</span>
                      <span className="font-medium">18+ (varies by state)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Waiting Period:</span>
                      <span className="font-medium">0-30 days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>License Validity:</span>
                      <span className="font-medium">30-365 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-amber-600" />
                    Officiant Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Who can legally perform marriages</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Licensed Ministers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Judges & Justices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Notary Public (some states)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span>Online Ordained Ministers</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-amber-600" />
                    State Variations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Important state-specific differences</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">California:</span>
                      <span className="text-gray-600"> No residency requirement</span>
                    </div>
                    <div>
                      <span className="font-medium">Texas:</span>
                      <span className="text-gray-600"> 72-hour waiting period</span>
                    </div>
                    <div>
                      <span className="font-medium">New York:</span>
                      <span className="text-gray-600"> 24-hour waiting period</span>
                    </div>
                    <div>
                      <span className="font-medium">Florida:</span>
                      <span className="text-gray-600"> 3-day waiting period</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-amber-600" />
                  Wedding Ceremony Timeline Planner
                </CardTitle>
                <CardDescription>
                  Plan the perfect ceremony timing and schedule
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Pre-Ceremony (30 minutes)</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-amber-50 rounded">
                        <span>Guest seating begins</span>
                        <span className="text-sm text-gray-600">-30 min</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-amber-50 rounded">
                        <span>Family seating</span>
                        <span className="text-sm text-gray-600">-15 min</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-amber-50 rounded">
                        <span>Processional music begins</span>
                        <span className="text-sm text-gray-600">-5 min</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Ceremony (20-30 minutes)</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                        <span>Processional</span>
                        <span className="text-sm text-gray-600">3-5 min</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                        <span>Opening & vows</span>
                        <span className="text-sm text-gray-600">10-15 min</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                        <span>Ring exchange</span>
                        <span className="text-sm text-gray-600">3-5 min</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                        <span>Pronouncement & kiss</span>
                        <span className="text-sm text-gray-600">2-3 min</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                        <span>Recessional</span>
                        <span className="text-sm text-gray-600">2-3 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ToolsSection;
