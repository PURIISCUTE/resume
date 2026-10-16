import React from 'react';
import { ResumeTheme, AccentColor, SpacingDensity } from '../types/resume';
import {
  Download,
  Printer,
  Sparkles,
  Sliders,
  FileCheck,
  SplitSquareVertical,
  Edit3,
  CheckCircle2,
  FileText,
  Palette,
} from 'lucide-react';

interface ResumeControlsProps {
  theme: ResumeTheme;
  setTheme: (t: ResumeTheme) => void;
  accentColor: AccentColor;
  setAccentColor: (c: AccentColor) => void;
  density: SpacingDensity;
  setDensity: (d: SpacingDensity) => void;
  onDownloadPdf: () => void;
  onPrint: () => void;
  isDownloading: boolean;
  onOpenBeforeAfter: () => void;
  onToggleEditor: () => void;
  isEditorOpen: boolean;
  atsScore: number;
  wordCount: number;
  fillPercentage: number;
}

export const ResumeControls: React.FC<ResumeControlsProps> = ({
  theme,
  setTheme,
  accentColor,
  setAccentColor,
  density,
  setDensity,
  onDownloadPdf,
  onPrint,
  isDownloading,
  onOpenBeforeAfter,
  onToggleEditor,
  isEditorOpen,
  atsScore,
  wordCount,
  fillPercentage,
}) => {
  return (
    <div className="no-print bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 px-4 py-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Left: Branding & Core Metrics */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-100 text-sm tracking-tight">Pratik Surya</span>
                <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-semibold px-1.5 py-0.5 rounded border border-indigo-500/30">
                  1-Page Refined
                </span>
              </div>
              <p className="text-[11px] text-slate-400">AI & Software Engineering CV</p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-800">
            {/* ATS Score badge */}
            <div className="flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 px-2.5 py-1 rounded-md text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>ATS Score: {atsScore}/100</span>
            </div>

            {/* 1-Page vertical fill badge */}
            <div className="flex items-center gap-1.5 bg-blue-950/60 border border-blue-700/50 text-blue-300 px-2.5 py-1 rounded-md text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>1-Page Fit: {fillPercentage}% (Zero Gap)</span>
            </div>

            {/* Word count */}
            <div className="hidden md:inline-block text-xs text-slate-400">
              <span className="text-slate-200 font-medium">{wordCount}</span> words
            </div>
          </div>
        </div>

        {/* Center / Right: Styling & Spacing Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Theme Selector */}
          <div className="flex items-center bg-slate-800/80 rounded-lg p-0.5 border border-slate-700/60 text-xs">
            <button
              onClick={() => setTheme('executive')}
              className={`px-2.5 py-1 rounded font-medium transition-all ${
                theme === 'executive'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Executive
            </button>
            <button
              onClick={() => setTheme('modern')}
              className={`px-2.5 py-1 rounded font-medium transition-all ${
                theme === 'modern'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Tech Sans
            </button>
            <button
              onClick={() => setTheme('serif')}
              className={`px-2.5 py-1 rounded font-medium transition-all ${
                theme === 'serif'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Classic Serif
            </button>
            <button
              onClick={() => setTheme('minimal')}
              className={`px-2.5 py-1 rounded font-medium transition-all ${
                theme === 'minimal'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Minimal
            </button>
          </div>

          {/* Density Selector */}
          <div className="flex items-center bg-slate-800/80 rounded-lg p-0.5 border border-slate-700/60 text-xs">
            <span className="text-slate-400 px-2 flex items-center gap-1 text-[11px]">
              <Sliders className="w-3 h-3" />
              <span>Density:</span>
            </span>
            <button
              onClick={() => setDensity('compact')}
              className={`px-2 py-1 rounded text-xs transition-all ${
                density === 'compact'
                  ? 'bg-slate-700 text-white font-medium'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Compact
            </button>
            <button
              onClick={() => setDensity('balanced')}
              className={`px-2 py-1 rounded text-xs transition-all ${
                density === 'balanced'
                  ? 'bg-slate-700 text-white font-medium'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Balanced
            </button>
            <button
              onClick={() => setDensity('expanded')}
              className={`px-2 py-1 rounded text-xs transition-all ${
                density === 'expanded'
                  ? 'bg-slate-700 text-white font-medium'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Airy
            </button>
          </div>

          {/* Accent Color picker */}
          <div className="hidden xl:flex items-center gap-1.5 bg-slate-800/80 px-2 py-1 rounded-lg border border-slate-700/60">
            <Palette className="w-3 h-3 text-slate-400 mr-1" />
            <button
              onClick={() => setAccentColor('navy')}
              aria-label="Navy Blue"
              className={`w-3.5 h-3.5 rounded-full bg-blue-900 border ${
                accentColor === 'navy' ? 'ring-2 ring-blue-400 border-white' : 'border-transparent'
              }`}
            />
            <button
              onClick={() => setAccentColor('slate')}
              aria-label="Deep Slate"
              className={`w-3.5 h-3.5 rounded-full bg-slate-800 border ${
                accentColor === 'slate' ? 'ring-2 ring-slate-400 border-white' : 'border-transparent'
              }`}
            />
            <button
              onClick={() => setAccentColor('indigo')}
              aria-label="Indigo"
              className={`w-3.5 h-3.5 rounded-full bg-indigo-900 border ${
                accentColor === 'indigo' ? 'ring-2 ring-indigo-400 border-white' : 'border-transparent'
              }`}
            />
            <button
              onClick={() => setAccentColor('emerald')}
              aria-label="Emerald"
              className={`w-3.5 h-3.5 rounded-full bg-emerald-900 border ${
                accentColor === 'emerald' ? 'ring-2 ring-emerald-400 border-white' : 'border-transparent'
              }`}
            />
            <button
              onClick={() => setAccentColor('monochrome')}
              aria-label="Monochrome"
              className={`w-3.5 h-3.5 rounded-full bg-neutral-900 border ${
                accentColor === 'monochrome' ? 'ring-2 ring-neutral-400 border-white' : 'border-transparent'
              }`}
            />
          </div>

          {/* Before vs After Button */}
          <button
            onClick={onOpenBeforeAfter}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
          >
            <SplitSquareVertical className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Before vs After</span>
            <span className="sm:hidden">Compare</span>
          </button>

          {/* Edit Resume Toggle */}
          <button
            onClick={onToggleEditor}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              isEditorOpen
                ? 'bg-indigo-600/30 text-indigo-300 border-indigo-500/50'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditorOpen ? 'Close Editor' : 'Edit CV'}</span>
          </button>

          {/* Print / Save as PDF */}
          <button
            onClick={onPrint}
            title="Open browser print dialog (set Destination to 'Save as PDF')"
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-slate-300" />
            <span className="hidden sm:inline">Print</span>
          </button>

          {/* High-Res Direct Download Button */}
          <button
            onClick={onDownloadPdf}
            disabled={isDownloading}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-4 py-1.5 rounded-lg text-xs shadow-lg shadow-indigo-600/25 transition-all disabled:opacity-50"
          >
            <Download className={`w-3.5 h-3.5 ${isDownloading ? 'animate-bounce' : ''}`} />
            <span>{isDownloading ? 'Rendering PDF...' : 'Download PDF'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
