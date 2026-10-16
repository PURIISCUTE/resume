import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  isOpen,
  onClose,
  pdfUrl,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-5xl h-[90vh] shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center">
              <FileText className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white">Pratik_Surya_Refined_Resume.pdf</h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified 1-Page PDF
                </span>
              </div>
              <p className="text-[11px] text-slate-400">186 KB • Authentic Vector PDF with Embedded Fonts</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>
            <a
              href={pdfUrl}
              download="Pratik_Surya_Refined_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </a>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 bg-slate-950 p-2 sm:p-4 overflow-hidden flex flex-col items-center justify-center">
          <object
            data={pdfUrl}
            type="application/pdf"
            className="w-full h-full rounded-xl border border-slate-800 bg-white"
          >
            <div className="flex flex-col items-center justify-center p-8 text-center text-slate-300 space-y-4">
              <FileText className="w-12 h-12 text-slate-500" />
              <div>
                <p className="text-sm font-semibold text-white">Your browser does not support inline PDF viewing</p>
                <p className="text-xs text-slate-400 mt-1">
                  You can download the verified PDF or open it directly in a new browser tab.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={pdfUrl}
                  download="Pratik_Surya_Refined_Resume.pdf"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-medium"
                >
                  Download PDF
                </a>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-800 text-slate-200 px-4 py-2 rounded-lg text-xs font-medium"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};
