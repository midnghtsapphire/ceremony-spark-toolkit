
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

interface ScriptExporterProps {
  script: string;
  coupleNames: { partner1: string; partner2: string };
  ceremonyType: string;
}

const ScriptExporter = ({ script, coupleNames, ceremonyType }: ScriptExporterProps) => {
  const generatePDF = () => {
    // In a real implementation, you would use a library like jsPDF
    const element = document.createElement('a');
    const file = new Blob([script], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${coupleNames.partner1}_${coupleNames.partner2}_ceremony_script.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const generateDOCX = () => {
    // In a real implementation, you would use a library like docx
    const element = document.createElement('a');
    const file = new Blob([script], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${coupleNames.partner1}_${coupleNames.partner2}_ceremony_script.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(script);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const printScript = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Wedding Ceremony Script - ${coupleNames.partner1} & ${coupleNames.partner2}</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
              h1 { color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px; }
              pre { white-space: pre-wrap; font-family: Arial, sans-serif; }
            </style>
          </head>
          <body>
            <h1>Wedding Ceremony Script</h1>
            <p><strong>Couple:</strong> ${coupleNames.partner1} & ${coupleNames.partner2}</p>
            <p><strong>Ceremony Type:</strong> ${ceremonyType}</p>
            <pre>${script}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" onClick={generatePDF} className="text-sm">
          <Download className="h-4 w-4 mr-2" />
          Export PDF
        </Button>
        <Button variant="outline" onClick={generateDOCX} className="text-sm">
          <Download className="h-4 w-4 mr-2" />
          Export DOCX
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" onClick={copyToClipboard} className="text-sm">
          <FileText className="h-4 w-4 mr-2" />
          Copy Text
        </Button>
        <Button variant="outline" onClick={printScript} className="text-sm">
          <FileText className="h-4 w-4 mr-2" />
          Print
        </Button>
      </div>
    </div>
  );
};

export default ScriptExporter;
