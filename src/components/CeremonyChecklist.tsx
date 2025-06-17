
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle, Users, Calendar, FileText, Printer, Save } from 'lucide-react';

interface ChecklistItem {
  id: string;
  task: string;
  phase: string;
  category: 'pre-ceremony' | 'ceremony' | 'post-ceremony';
}

const checklistItems: ChecklistItem[] = [
  // Pre-ceremony
  { id: '1', task: 'Meet with couple for ceremony consultation', phase: 'Pre-ceremony', category: 'pre-ceremony' },
  { id: '2', task: 'Review marriage license requirements', phase: 'Pre-ceremony', category: 'pre-ceremony' },
  { id: '3', task: 'Confirm ceremony date, time, and location', phase: 'Pre-ceremony', category: 'pre-ceremony' },
  { id: '4', task: 'Prepare ceremony script and vows', phase: 'Pre-ceremony', category: 'pre-ceremony' },
  { id: '5', task: 'Rehearse ceremony (if scheduled)', phase: 'Pre-ceremony', category: 'pre-ceremony' },
  
  // During ceremony
  { id: '6', task: 'Begin with welcome and opening remarks', phase: 'Opening', category: 'ceremony' },
  { id: '7', task: 'Guide through declaration of intent', phase: 'Mid-ceremony', category: 'ceremony' },
  { id: '8', task: 'Facilitate ring exchange (if applicable)', phase: 'Mid-ceremony', category: 'ceremony' },
  { id: '9', task: 'Pronounce couple as married', phase: 'Closing', category: 'ceremony' },
  { id: '10', task: 'Present the newly married couple', phase: 'Closing', category: 'ceremony' },
  
  // Post-ceremony
  { id: '11', task: 'Ensure witness signatures are collected', phase: 'Immediately after', category: 'post-ceremony' },
  { id: '12', task: 'Take photos with the couple (if requested)', phase: 'After ceremony', category: 'post-ceremony' },
  { id: '13', task: 'File marriage license with appropriate office', phase: 'Within deadline', category: 'post-ceremony' },
  { id: '14', task: 'Send congratulations note to couple', phase: 'Within 1 week', category: 'post-ceremony' }
];

const CeremonyChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [currentCategory, setCurrentCategory] = useState<'pre-ceremony' | 'ceremony' | 'post-ceremony'>('pre-ceremony');

  const handleItemCheck = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'pre-ceremony': return 'Before the Ceremony';
      case 'ceremony': return 'During the Ceremony';
      case 'post-ceremony': return 'After the Ceremony';
      default: return category;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'pre-ceremony': return <Calendar className="h-5 w-5" />;
      case 'ceremony': return <Users className="h-5 w-5" />;
      case 'post-ceremony': return <FileText className="h-5 w-5" />;
      default: return <CheckCircle className="h-5 w-5" />;
    }
  };

  const filteredItems = checklistItems.filter(item => item.category === currentCategory);
  const completedCount = filteredItems.filter(item => checkedItems.has(item.id)).length;
  const totalCount = filteredItems.length;

  return (
    <section id="checklist" className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Wedding Officiant Ceremony Checklist</h2>
          <p className="text-lg text-gray-600">Stay organized with our comprehensive checklist for wedding officiants</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle className="flex items-center gap-2 text-amber-800">
                {getCategoryIcon(currentCategory)}
                {getCategoryTitle(currentCategory)}
              </CardTitle>
              <div className="flex gap-2">
                <Button
                  variant={currentCategory === 'pre-ceremony' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentCategory('pre-ceremony')}
                  className={currentCategory === 'pre-ceremony' ? 'bg-amber-600 hover:bg-amber-700' : 'hover:bg-amber-50'}
                >
                  Pre-ceremony
                </Button>
                <Button
                  variant={currentCategory === 'ceremony' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentCategory('ceremony')}
                  className={currentCategory === 'ceremony' ? 'bg-amber-600 hover:bg-amber-700' : 'hover:bg-amber-50'}
                >
                  Ceremony
                </Button>
                <Button
                  variant={currentCategory === 'post-ceremony' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentCategory('post-ceremony')}
                  className={currentCategory === 'post-ceremony' ? 'bg-amber-600 hover:bg-amber-700' : 'hover:bg-amber-50'}
                >
                  Post-ceremony
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                {completedCount}/{totalCount} completed
              </Badge>
              <div className="flex-1 bg-amber-100 rounded-full h-2">
                <div 
                  className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div key={item.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-amber-50 transition-colors">
                  <Checkbox
                    id={item.id}
                    checked={checkedItems.has(item.id)}
                    onCheckedChange={() => handleItemCheck(item.id)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label
                      htmlFor={item.id}
                      className={`block text-sm font-medium cursor-pointer ${
                        checkedItems.has(item.id) ? 'text-gray-500 line-through' : 'text-gray-900'
                      }`}
                    >
                      {item.task}
                    </label>
                    <Badge variant="outline" className="mt-1 text-xs border-amber-200 text-amber-700">
                      {item.phase}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-amber-200">
              <Button variant="outline" className="flex-1 hover:bg-amber-50">
                <Printer className="h-4 w-4 mr-2" />
                Print Checklist
              </Button>
              <Button className="flex-1 bg-amber-600 hover:bg-amber-700">
                <Save className="h-4 w-4 mr-2" />
                Save Progress
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CeremonyChecklist;
