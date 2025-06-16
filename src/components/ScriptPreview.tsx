
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Sparkles, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScriptExporter from '@/components/ScriptExporter';

interface ScriptPreviewProps {
  script: string;
  coupleNames: { partner1: string; partner2: string };
  ceremonyType: string;
  isSubscribed: boolean;
}

const ScriptPreview = ({ script, coupleNames, ceremonyType, isSubscribed }: ScriptPreviewProps) => {
  return (
    <Card className="border-2 border-gradient-to-r from-pink-200 to-purple-200 shadow-lg" data-script-preview>
      <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Generated Wedding Script Preview
            </CardTitle>
            <CardDescription>
              Your personalized marriage ceremony script for officiants
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {script ? (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-lg max-h-96 overflow-y-auto border border-pink-200">
              <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
                {script}
              </pre>
            </div>
            {isSubscribed ? (
              <ScriptExporter
                script={script}
                coupleNames={coupleNames}
                ceremonyType={ceremonyType}
              />
            ) : (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200 text-center">
                <Lock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-3">Upgrade to download and export your wedding ceremony scripts</p>
                <Button 
                  size="sm"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  Upgrade to Premium
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                <FileText className="h-12 w-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">✨</span>
              </div>
            </div>
            <p className="text-gray-500 mb-4">
              Fill out the form and click "Generate Custom Wedding Script" to see your personalized marriage ceremony script here.
            </p>
            <div className="flex justify-center space-x-4 text-2xl opacity-50">
              <span>💒</span>
              <span>💍</span>
              <span>💐</span>
              <span>💕</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ScriptPreview;
