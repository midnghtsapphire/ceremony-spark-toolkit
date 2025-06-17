
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Copy, Share2, Sparkles } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface ScriptPreviewProps {
  script: string;
  coupleNames: { partner1: string; partner2: string };
  ceremonyType: string;
  isSubscribed?: boolean;
}

const ScriptPreview = ({ script, coupleNames, ceremonyType, isSubscribed }: ScriptPreviewProps) => {
  const handleCopyScript = () => {
    if (script) {
      navigator.clipboard.writeText(script);
      toast('Script copied to clipboard!');
    }
  };

  const handleDownload = () => {
    if (script) {
      const element = document.createElement('a');
      const file = new Blob([script], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `wedding-script-${coupleNames.partner1}-${coupleNames.partner2}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      toast('Script downloaded successfully!');
    }
  };

  if (!script) {
    return (
      <Card className="h-full" data-script-preview>
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-amber-600" />
          </div>
          <CardTitle className="text-amber-800">Generated Wedding Script Preview</CardTitle>
          <p className="text-gray-600">Your personalized marriage ceremony script for officiants</p>
        </CardHeader>
        <CardContent className="text-center">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full mx-auto mb-4 opacity-60"></div>
            <p className="text-gray-500 mb-4">
              Fill out the form and click "Generate Custom Wedding Script" to see your personalized marriage ceremony script here.
            </p>
            <div className="flex justify-center gap-2 text-2xl">
              <span>🏛️</span>
              <span>💍</span>
              <span>💐</span>
              <span>💕</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full" data-script-preview>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-amber-800">Your Wedding Script</CardTitle>
            <div className="flex gap-2 mt-2">
              <Badge variant="secondary" className="bg-amber-100 text-amber-800">{ceremonyType}</Badge>
              {coupleNames.partner1 && coupleNames.partner2 && (
                <Badge variant="outline" className="border-amber-200 text-amber-700">
                  {coupleNames.partner1} & {coupleNames.partner2}
                </Badge>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCopyScript} className="hover:bg-amber-50 hover:border-amber-200">
              <Copy className="h-4 w-4" />
            </Button>
            {isSubscribed && (
              <>
                <Button variant="outline" size="sm" onClick={handleDownload} className="hover:bg-amber-50 hover:border-amber-200">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-amber-50 hover:border-amber-200">
                  <Share2 className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 max-h-96 overflow-y-auto">
          <pre className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed font-serif">
            {script}
          </pre>
        </div>
        
        {!isSubscribed && (
          <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
            <div className="flex items-center gap-2 text-amber-800 font-medium mb-2">
              <Sparkles className="h-4 w-4" />
              Upgrade for Premium Features
            </div>
            <p className="text-sm text-amber-700">
              Get unlimited scripts, advanced customization, and export options with our premium plans.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ScriptPreview;
