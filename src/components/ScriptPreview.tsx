
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import ScriptExporter from '@/components/ScriptExporter';

interface ScriptPreviewProps {
  script: string;
  coupleNames: { partner1: string; partner2: string };
  ceremonyType: string;
}

const ScriptPreview = ({ script, coupleNames, ceremonyType }: ScriptPreviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Script Preview</CardTitle>
        <CardDescription>
          Your personalized ceremony script will appear here
        </CardDescription>
      </CardHeader>
      <CardContent>
        {script ? (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
                {script}
              </pre>
            </div>
            <ScriptExporter
              script={script}
              coupleNames={coupleNames}
              ceremonyType={ceremonyType}
            />
          </div>
        ) : (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              Fill out the form and click "Generate Custom Script" to see your personalized ceremony script here.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ScriptPreview;
