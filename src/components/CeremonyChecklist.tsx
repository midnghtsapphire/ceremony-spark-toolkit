
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle, Clock, Users } from 'lucide-react';

const CeremonyChecklist = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const checklistSections = [
    {
      id: 'preparation',
      title: 'Pre-Ceremony Preparation',
      icon: Calendar,
      color: 'blue',
      items: [
        { id: 'prep-1', text: 'Review ceremony script and practice delivery', timing: '1 week before' },
        { id: 'prep-2', text: 'Confirm ceremony details with couple', timing: '3 days before' },
        { id: 'prep-3', text: 'Prepare marriage license and required documents', timing: '1 day before' },
        { id: 'prep-4', text: 'Plan arrival time and transportation to venue', timing: '1 day before' },
        { id: 'prep-5', text: 'Prepare backup script copies and cue cards', timing: '1 day before' }
      ]
    },
    {
      id: 'arrival',
      title: 'Day of Ceremony - Arrival',
      icon: Clock,
      color: 'green',
      items: [
        { id: 'arr-1', text: 'Arrive 30-45 minutes early', timing: 'Before ceremony' },
        { id: 'arr-2', text: 'Check microphone and sound system', timing: 'Before ceremony' },
        { id: 'arr-3', text: 'Review seating arrangement and processional plan', timing: 'Before ceremony' },
        { id: 'arr-4', text: 'Meet with wedding coordinator or planner', timing: 'Before ceremony' },
        { id: 'arr-5', text: 'Have final check-in with couple', timing: 'Before ceremony' }
      ]
    },
    {
      id: 'ceremony',
      title: 'During the Ceremony',
      icon: Users,
      color: 'purple',
      items: [
        { id: 'cer-1', text: 'Begin with welcome and opening remarks', timing: 'Opening' },
        { id: 'cer-2', text: 'Guide through declaration of intent', timing: 'Mid-ceremony' },
        { id: 'cer-3', text: 'Facilitate ring exchange (if applicable)', timing: 'Mid-ceremony' },
        { id: 'cer-4', text: 'Pronounce couple as married', timing: 'Closing' },
        { id: 'cer-5', text: 'Present the newly married couple', timing: 'Closing' }
      ]
    },
    {
      id: 'completion',
      title: 'Post-Ceremony Tasks',
      icon: CheckCircle,
      color: 'amber',
      items: [
        { id: 'post-1', text: 'Complete and sign marriage certificate', timing: 'Immediately after' },
        { id: 'post-2', text: 'Ensure witness signatures are collected', timing: 'Immediately after' },
        { id: 'post-3', text: 'Take photos with the couple (if requested)', timing: 'After ceremony' },
        { id: 'post-4', text: 'File marriage license with appropriate office', timing: 'Within deadline' },
        { id: 'post-5', text: 'Send congratulations note to couple', timing: 'Within 1 week' }
      ]
    }
  ];

  const getIconColor = (color) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      amber: 'text-amber-600'
    };
    return colors[color] || 'text-gray-600';
  };

  const getBadgeColor = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      purple: 'bg-purple-100 text-purple-800',
      amber: 'bg-amber-100 text-amber-800'
    };
    return colors[color] || 'bg-gray-100 text-gray-800';
  };

  const totalItems = checklistSections.reduce((sum, section) => sum + section.items.length, 0);
  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const completionPercentage = Math.round((completedItems / totalItems) * 100);

  return (
    <section id="checklist" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ceremony Day Checklist</h2>
          <p className="text-lg text-gray-600">Step-by-step guide to ensure everything goes smoothly</p>
          
          <div className="mt-6 bg-gray-50 rounded-lg p-4 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-900">Progress</span>
              <span className="text-sm text-gray-600">{completedItems}/{totalItems} completed</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{completionPercentage}% complete</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {checklistSections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Card key={section.id} className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${section.color}-100`}>
                      <IconComponent className={`h-5 w-5 ${getIconColor(section.color)}`} />
                    </div>
                    {section.title}
                  </CardTitle>
                  <CardDescription>
                    Essential tasks for this phase of the ceremony
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <div key={item.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <Checkbox
                          id={item.id}
                          checked={checkedItems[item.id] || false}
                          onCheckedChange={() => handleCheck(item.id)}
                          className="mt-1"
                        />
                        <div className="flex-1 min-w-0">
                          <label 
                            htmlFor={item.id}
                            className={`text-sm font-medium cursor-pointer block ${
                              checkedItems[item.id] ? 'line-through text-gray-500' : 'text-gray-900'
                            }`}
                          >
                            {item.text}
                          </label>
                          <Badge 
                            variant="outline" 
                            className={`mt-1 text-xs ${getBadgeColor(section.color)}`}
                          >
                            {item.timing}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="mr-4">
            Print Checklist
          </Button>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Save Progress
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CeremonyChecklist;
