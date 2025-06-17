
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, Printer } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { toast } from '@/components/ui/sonner';

interface ScriptExporterProps {
  script: string;
  coupleNames: { partner1: string; partner2: string };
  ceremonyType: string;
}

const ScriptExporter = ({ script, coupleNames, ceremonyType }: ScriptExporterProps) => {
  const generatePDF = async () => {
    try {
      const pdf = new jsPDF();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 20;
      const lineHeight = 10;
      let yPosition = 30;

      // Title
      pdf.setFontSize(18);
      pdf.setFont(undefined, 'bold');
      pdf.text('Wedding Ceremony Script', margin, yPosition);
      yPosition += 15;

      // Couple info
      pdf.setFontSize(12);
      pdf.setFont(undefined, 'normal');
      pdf.text(`Couple: ${coupleNames.partner1} & ${coupleNames.partner2}`, margin, yPosition);
      yPosition += 10;
      pdf.text(`Ceremony Type: ${ceremonyType}`, margin, yPosition);
      yPosition += 15;

      // Script content
      pdf.setFontSize(10);
      const lines = pdf.splitTextToSize(script, pageWidth - 2 * margin);
      
      for (let i = 0; i < lines.length; i++) {
        if (yPosition > pdf.internal.pageSize.getHeight() - 20) {
          pdf.addPage();
          yPosition = 20;
        }
        pdf.text(lines[i], margin, yPosition);
        yPosition += lineHeight;
      }

      pdf.save(`${coupleNames.partner1}_${coupleNames.partner2}_ceremony_script.pdf`);
      toast('PDF generated successfully!');
    } catch (error) {
      console.error('PDF generation error:', error);
      toast('Error generating PDF. Please try again.');
    }
  };

  const generateDOCX = () => {
    try {
      const content = `Wedding Ceremony Script\n\nCouple: ${coupleNames.partner1} & ${coupleNames.partner2}\nCeremony Type: ${ceremonyType}\n\n${script}`;
      const blob = new Blob([content], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      const url = URL.createObjectURL(blob);
      const element = document.createElement('a');
      element.href = url;
      element.download = `${coupleNames.partner1}_${coupleNames.partner2}_ceremony_script.docx`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      URL.revokeObjectURL(url);
      toast('DOCX file downloaded successfully!');
    } catch (error) {
      console.error('DOCX generation error:', error);
      toast('Error generating DOCX. Please try again.');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(script);
      toast('Script copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast('Failed to copy to clipboard.');
    }
  };

  const printScript = () => {
    try {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Wedding Ceremony Script - ${coupleNames.partner1} & ${coupleNames.partner2}</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
                h1 { color: #333; border-bottom: 2px solid #d97706; padding-bottom: 10px; }
                .meta { margin-bottom: 20px; font-weight: bold; }
                pre { white-space: pre-wrap; font-family: Arial, sans-serif; }
                @media print {
                  body { margin: 0; }
                  h1 { page-break-after: avoid; }
                }
              </style>
            </head>
            <body>
              <h1>Wedding Ceremony Script</h1>
              <div class="meta">
                <p><strong>Couple:</strong> ${coupleNames.partner1} & ${coupleNames.partner2}</p>
                <p><strong>Ceremony Type:</strong> ${ceremonyType}</p>
                <p><strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
              </div>
              <pre>${script}</pre>
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
        toast('Print dialog opened!');
      }
    } catch (error) {
      console.error('Print error:', error);
      toast('Error opening print dialog.');
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
          <Printer className="h-4 w-4 mr-2" />
          Print
        </Button>
      </div>
    </div>
  );
};

export default ScriptExporter;
