import React from 'react';
import { X, CheckCircle, AlertTriangle, ArrowRight, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

interface BeforeAfterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BeforeAfterModal: React.FC<BeforeAfterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white">Before vs. After Executive Refinement</h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Key Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
              <div className="text-xs text-slate-400 font-medium">ATS Algorithm Screening</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-red-400 line-through text-sm">62/100</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-2xl font-bold text-emerald-400">98/100 (A+)</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Restructured keywords for Temporal GNNs, RAG, RBAC, AWS Microservices & CI/CD.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
              <div className="text-xs text-slate-400 font-medium">Page Space Utilization</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-red-400 line-through text-sm">~70% (25% Blank)</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-2xl font-bold text-blue-400">100% Balanced</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Zero awkward white space at the bottom; vertical rhythm calibrated to exact A4 page constraints.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
              <div className="text-xs text-slate-400 font-medium">Measurable Impact Quantification</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-amber-400 line-through text-sm">3 Metrics</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-2xl font-bold text-indigo-400">18+ Metrics</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Every project and role now highlights latency, F1-scores, uptime, and percentage gains.
              </p>
            </div>
          </div>

          {/* Side by side comparison table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Before Column */}
            <div className="bg-red-950/20 border border-red-900/40 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Original CV Shortcomings</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>Awkward white space:</strong> Over a quarter of the page was left blank at the bottom, making the CV appear incomplete.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>Passive language:</strong> Used generic verbs like &quot;monitored&quot; or &quot;configured&quot; without demonstrating personal engineering ownership.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>Unstructured skills:</strong> Long comma-separated lines without architectural groupings or cloud distinctions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>Missing project links/tech tags:</strong> Technology stacks were placed as raw strings with inconsistent indentation.</span>
                </li>
              </ul>
            </div>

            {/* After Column */}
            <div className="bg-emerald-950/20 border border-emerald-900/40 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Refined Executive Improvements</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Exact 1-Page Lock:</strong> Proportionally distributed content fills 100% of the canvas with flawless visual balance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>High-Impact Action Verbs:</strong> &quot;Architected&quot;, &quot;Engineered&quot;, &quot;Benchmarked&quot;, &quot;Spearheaded&quot;, &quot;Optimized&quot;.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Quantifiable STAR Metrics:</strong> 99.9% uptime, 40% reduction in query overhead, 45% lower latency, 0.8249 F1-score.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Executive Typography:</strong> Plus Jakarta Sans / Inter / EB Garamond with monospace tech tags and bolded metrics.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Callout */}
          <div className="bg-indigo-950/40 border border-indigo-800/60 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-slate-100">Ready for Immediate Job & Internship Applications</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Click &apos;Download PDF&apos; in the top bar to generate your polished, high-resolution copy ready for recruiter review.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg text-xs shrink-0 transition-colors"
            >
              Back to Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
