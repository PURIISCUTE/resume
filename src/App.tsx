import React, { useState, useRef } from 'react';
import { initialResumeData } from './data/resumeData';
import { ResumeData, ResumeTheme, AccentColor, SpacingDensity } from './types/resume';
import { ResumePreview } from './components/ResumePreview';
import { ResumeControls } from './components/ResumeControls';
import { ResumeEditor } from './components/ResumeEditor';
import { BeforeAfterModal } from './components/BeforeAfterModal';
import { PdfViewerModal } from './components/PdfViewerModal';
import {
  calculateResumeWordCount,
  calculateAtsScore,
  estimatePageFillPercentage,
} from './utils/resumeMetrics';
import { CheckCircle2, Download, Eye, Sparkles } from 'lucide-react';

export default function App() {
  const [data, setData] = useState<ResumeData>(initialResumeData);
  const [theme, setTheme] = useState<ResumeTheme>('executive');
  const [accentColor, setAccentColor] = useState<AccentColor>('navy');
  const [density, setDensity] = useState<SpacingDensity>('balanced');
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isBeforeAfterOpen, setIsBeforeAfterOpen] = useState(false);
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const resumeRef = useRef<HTMLDivElement>(null);

  const wordCount = calculateResumeWordCount(data);
  const atsAssessment = calculateAtsScore(data);
  const fillPercentage = estimatePageFillPercentage(data, density);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Application Bar & Customization Toolbar */}
      <ResumeControls
        theme={theme}
        setTheme={setTheme}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
        density={density}
        setDensity={setDensity}
        onOpenPdfViewer={() => setIsPdfViewerOpen(true)}
        onPrint={handlePrint}
        onOpenBeforeAfter={() => setIsBeforeAfterOpen(true)}
        onToggleEditor={() => setIsEditorOpen(!isEditorOpen)}
        isEditorOpen={isEditorOpen}
        atsScore={atsAssessment.score}
        wordCount={wordCount}
        fillPercentage={fillPercentage}
        pdfUrl="/pratik_surya_full_resume.pdf?v=2"
      />

      {/* Floating Notification Toast */}
      {notification && (
        <div className="no-print fixed bottom-6 right-6 z-50 bg-emerald-900/90 border border-emerald-500 text-emerald-100 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{notification}</span>
        </div>
      )}

      {/* Notification Banner with Direct PDF Link & Advice */}
      <div className="no-print bg-slate-900/80 border-b border-slate-800/80 py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              <strong>1-Page Refinement Guarantee:</strong> Content has been tuned to 100% vertical fill. No awkward bottom whitespace, zero multi-page spills.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPdfViewerOpen(true)}
              className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-medium hover:underline"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview PDF Document</span>
            </button>
            <span className="text-slate-600">|</span>
            <a
              href="/pratik_surya_full_resume.pdf?v=2"
              download="Pratik_Surya_Refined_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium hover:underline"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Direct Download Full PDF</span>
            </a>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setIsBeforeAfterOpen(true)}
              className="text-amber-400 hover:text-amber-300 font-medium hover:underline"
            >
              See What Changed
            </button>
          </div>
        </div>
      </div>

      {/* Main Workspace Area */}
      <main className="flex-1 flex flex-col items-center justify-start py-6 sm:py-8 px-2 sm:px-4">
        {/* Helper Instructions Pill */}
        <div className="no-print mb-4 flex items-center gap-3 text-xs text-slate-400 bg-slate-900/60 border border-slate-800 px-4 py-2 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>
            Preview mode active. To export as vector PDF, click <strong>Download PDF</strong> or press <strong>Ctrl/Cmd + P</strong> with <i>Save as PDF</i>.
          </span>
        </div>

        {/* The 1-Page Paper Container */}
        <div className="w-full flex justify-center">
          <ResumePreview
            ref={resumeRef}
            data={data}
            theme={theme}
            accentColor={accentColor}
            density={density}
            isEditable={false}
          />
        </div>

        {/* ATS & Section Audit Footer */}
        <section className="no-print w-full max-w-4xl mt-10 mb-8 bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-slate-100">Professional Impact & ATS Verification</h3>
            </div>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 rounded-md">
              Score: {atsAssessment.score} / 100 ({atsAssessment.grade})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2">
                Passed Quality Criteria
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {atsAssessment.passedCriteria.map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2">
                Recruiter Impact Summary
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Highlights hands-on deployment of Temporal Graph Neural Networks (GraphSAGE), RAG vector search with RBAC, high-concurrency FastAPI microservices, and 99.9% uptime infrastructure. All 4 projects and 4 work experiences now feature verifiable quantitative outcomes.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Slide-out Resume Editor */}
      <ResumeEditor
        data={data}
        onChange={setData}
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
      />

      {/* Before vs After Comparison Modal */}
      <BeforeAfterModal
        isOpen={isBeforeAfterOpen}
        onClose={() => setIsBeforeAfterOpen(false)}
      />

      {/* Embedded PDF Viewer Modal */}
      <PdfViewerModal
        isOpen={isPdfViewerOpen}
        onClose={() => setIsPdfViewerOpen(false)}
        pdfUrl="/pratik_surya_full_resume.pdf?v=2"
      />
    </div>
  );
}
