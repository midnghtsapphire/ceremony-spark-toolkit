
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shuffle, Sparkles } from 'lucide-react';
import { getScriptVariations } from '@/utils/scriptVariations';

interface ScriptVariationSelectorProps {
  ceremonyType: string;
  selectedVariation: string;
  onVariationSelect: (variationId: string) => void;
  onGenerateAnother: () => void;
}

const ScriptVariationSelector = ({ 
  ceremonyType, 
  selectedVariation, 
  onVariationSelect, 
  onGenerateAnother 
}: ScriptVariationSelectorProps) => {
  const variations = getScriptVariations(ceremonyType);

  if (!variations || variations.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-amber-800">
          <Sparkles className="h-5 w-5" />
          Script Variations
        </CardTitle>
        <p className="text-sm text-gray-600">
          Choose a style variation for your ceremony script
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          {variations.map((variation) => (
            <Button
              key={variation.id}
              variant={selectedVariation === variation.id ? "default" : "outline"}
              className={`justify-start h-auto p-3 ${
                selectedVariation === variation.id 
                  ? "bg-amber-600 hover:bg-amber-700 text-white" 
                  : "hover:bg-amber-50 hover:border-amber-200"
              }`}
              onClick={() => onVariationSelect(variation.id)}
            >
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{variation.name}</span>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      selectedVariation === variation.id 
                        ? "bg-amber-500 text-white" 
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {variation.tone}
                  </Badge>
                </div>
                <p className={`text-sm ${
                  selectedVariation === variation.id ? "text-amber-100" : "text-gray-600"
                }`}>
                  {variation.description}
                </p>
              </div>
            </Button>
          ))}
        </div>
        
        <Button 
          onClick={onGenerateAnother} 
          variant="outline" 
          className="w-full hover:bg-amber-50 hover:border-amber-200"
        >
          <Shuffle className="h-4 w-4 mr-2" />
          Generate Another Variation
        </Button>
      </CardContent>
    </Card>
  );
};

export default ScriptVariationSelector;
