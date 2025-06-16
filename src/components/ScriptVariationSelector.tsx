
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shuffle, Sparkles } from 'lucide-react';
import { getVariationsByType } from '@/utils/scriptVariations';

interface ScriptVariationSelectorProps {
  ceremonyType: string;
  selectedVariation?: string;
  onVariationSelect: (variationId: string) => void;
  onGenerateAnother: () => void;
}

const ScriptVariationSelector = ({ 
  ceremonyType, 
  selectedVariation, 
  onVariationSelect, 
  onGenerateAnother 
}: ScriptVariationSelectorProps) => {
  const variations = getVariationsByType(ceremonyType);

  if (!ceremonyType || variations.length === 0) {
    return null;
  }

  return (
    <Card className="border-blue-200 bg-blue-50/30">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-lg">Choose Your Script Style</CardTitle>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onGenerateAnother}
            className="gap-2"
          >
            <Shuffle className="h-4 w-4" />
            Generate Another
          </Button>
        </div>
        <CardDescription>
          Select a ceremony style that matches your couple's personality and wedding vision
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {variations.map((variation) => (
            <div
              key={variation.id}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                selectedVariation === variation.id
                  ? 'border-blue-500 bg-blue-100/50 shadow-sm'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/30'
              }`}
              onClick={() => onVariationSelect(variation.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{variation.name}</h4>
                <Badge variant={selectedVariation === variation.id ? "default" : "secondary"}>
                  {variation.tone}
                </Badge>
              </div>
              <p className="text-sm text-gray-600">{variation.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScriptVariationSelector;
