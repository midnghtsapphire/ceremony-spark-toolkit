
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mic, Heart, MessageSquare, FileText, Calendar, Download } from 'lucide-react';

const ToolsSection = () => {
  const tools = [
    {
      id: 'speech-tips',
      title: 'Public Speaking Guide',
      description: 'Tips for confident delivery, voice projection, and handling nerves',
      icon: Mic,
      color: 'amber',
      features: ['Voice exercises', 'Pacing techniques', 'Microphone usage', 'Crowd engagement'],
      available: true
    },
    {
      id: 'emergency-prompts',
      title: 'Emergency Script Prompts',
      description: 'Quick phrases for when you blank out or need to improvise',
      icon: MessageSquare,
      color: 'orange',
      features: ['Transitional phrases', 'Filler content', 'Recovery techniques', 'Backup vows'],
      available: true
    },
    {
      id: 'personalization',
      title: 'AI Personalization Assistant',
      description: 'Enhance your scripts with AI suggestions for tone and style',
      icon: Heart,
      color: 'amber',
      features: ['Emotional tone', 'Humor injection', 'Length adjustment', 'Cultural adaptation'],
      available: false
    },
    {
      id: 'mobile-view',
      title: 'Mobile Ceremony Flow',
      description: 'Phone-friendly ceremony guide for easy altar reference',
      icon: Calendar,
      color: 'orange',
      features: ['Large text', 'Swipe navigation', 'Bookmark sections', 'Offline access'],
      available: true
    },
    {
      id: 'templates',
      title: 'Viral Toast Templates',
      description: 'Popular and trending ceremony elements and social media content',
      icon: FileText,
      color: 'amber',
      features: ['TikTok trends', 'Instagram captions', 'Memorable moments', 'Photo prompts'],
      available: false
    },
    {
      id: 'certificates',
      title: 'Certificate Generator',
      description: 'Create beautiful marriage certificates and keepsake documents',
      icon: Download,
      color: 'orange',
      features: ['Custom designs', 'Digital signatures', 'Print-ready PDF', 'Couple branding'],
      available: true
    }
  ];

  const getIconColor = (color) => {
    const colors = {
      amber: 'text-amber-600',
      orange: 'text-orange-600'
    };
    return colors[color] || 'text-gray-600';
  };

  const getBgColor = (color) => {
    const colors = {
      amber: 'bg-amber-100',
      orange: 'bg-orange-100'
    };
    return colors[color] || 'bg-gray-100';
  };

  return (
    <section id="tools" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Tools & Resources</h2>
          <p className="text-lg text-gray-600">Everything you need to officiate with confidence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Card key={tool.id} className={`relative ${!tool.available ? 'opacity-75' : ''}`}>
                {!tool.available && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      Coming Soon
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className={`w-12 h-12 ${getBgColor(tool.color)} rounded-lg flex items-center justify-center mb-3`}>
                    <IconComponent className={`h-6 w-6 ${getIconColor(tool.color)}`} />
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-2 h-2 ${getBgColor(tool.color)} rounded-full`}></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    variant={tool.available ? "default" : "outline"}
                    disabled={!tool.available}
                  >
                    {tool.available ? 'Access Tool' : 'Notify When Ready'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Officiate Your First Wedding?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of officiants who trust our toolkit for their most important ceremonies. 
            Start creating memorable moments today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8 hover:bg-amber-50 hover:border-amber-200">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
