import React, { useState } from 'react';
import { ResumeData } from '../types/resume';
import { RotateCcw, Plus, Trash2, Check, User, Code, FolderGit2, Briefcase, Award } from 'lucide-react';
import { initialResumeData } from '../data/resumeData';

interface ResumeEditorProps {
  data: ResumeData;
  onChange: (newData: ResumeData) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeEditor: React.FC<ResumeEditorProps> = ({
  data,
  onChange,
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'contact' | 'skills' | 'projects' | 'experience' | 'certs'>('contact');

  if (!isOpen) return null;

  const handleContactChange = (field: keyof typeof data.contact, value: string) => {
    onChange({
      ...data,
      contact: {
        ...data.contact,
        [field]: value,
      },
    });
  };

  const handleReset = () => {
    if (window.confirm('Reset resume to the refined defaults?')) {
      onChange(initialResumeData);
    }
  };

  return (
    <aside aria-label="Resume Customization Editor" className="no-print fixed inset-y-0 right-0 z-50 w-full sm:w-[460px] bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col animate-slide-left">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/90">
        <div>
          <h2 className="text-sm font-bold text-slate-100">Live Resume Editor</h2>
          <p className="text-xs text-slate-400">Edits update the 1-page preview instantly</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            title="Reset to recommended"
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 text-xs flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
          <button
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded text-xs font-medium"
          >
            Done
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 bg-slate-950/40 text-xs overflow-x-auto">
        <button
          onClick={() => setActiveTab('contact')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 font-medium border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'contact'
              ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>Contact</span>
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 font-medium border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'skills'
              ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Code className="w-3.5 h-3.5" />
          <span>Skills</span>
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 font-medium border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'projects'
              ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Projects</span>
        </button>
        <button
          onClick={() => setActiveTab('experience')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 font-medium border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'experience'
              ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span>Experience</span>
        </button>
        <button
          onClick={() => setActiveTab('certs')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 font-medium border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'certs'
              ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Certs</span>
        </button>
      </div>

      {/* Editor Body */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
        {/* CONTACT & SUMMARY TAB */}
        {activeTab === 'contact' && (
          <div className="space-y-4">
            <div>
              <label className="block text-slate-300 font-medium mb-1">Full Name</label>
              <input
                type="text"
                value={data.contact.name}
                onChange={(e) => handleContactChange('name', e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Professional Title</label>
              <input
                type="text"
                value={data.contact.title}
                onChange={(e) => handleContactChange('title', e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Location</label>
                <input
                  type="text"
                  value={data.contact.location}
                  onChange={(e) => handleContactChange('location', e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-medium mb-1">Phone</label>
                <input
                  type="text"
                  value={data.contact.phone}
                  onChange={(e) => handleContactChange('phone', e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Email</label>
              <input
                type="email"
                value={data.contact.email}
                onChange={(e) => handleContactChange('email', e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">LinkedIn</label>
                <input
                  type="text"
                  value={data.contact.linkedin}
                  onChange={(e) => handleContactChange('linkedin', e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-medium mb-1">GitHub</label>
                <input
                  type="text"
                  value={data.contact.github}
                  onChange={(e) => handleContactChange('github', e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Executive Summary</label>
              <textarea
                rows={4}
                value={data.summary}
                onChange={(e) => onChange({ ...data, summary: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500 leading-relaxed"
              />
              <span className="text-[10px] text-slate-500 block text-right mt-1">
                {data.summary.length} characters (Optimal: 250 - 380 chars)
              </span>
            </div>
          </div>
        )}

        {/* SKILLS TAB */}
        {activeTab === 'skills' && (
          <div className="space-y-4">
            {data.skills.map((category, catIdx) => (
              <div key={catIdx} className="bg-slate-800/60 p-3 rounded-lg border border-slate-700 space-y-2">
                <input
                  type="text"
                  value={category.category}
                  onChange={(e) => {
                    const next = [...data.skills];
                    next[catIdx].category = e.target.value;
                    onChange({ ...data, skills: next });
                  }}
                  className="font-bold text-slate-200 bg-transparent border-b border-slate-600 pb-1 w-full focus:outline-none focus:border-indigo-400"
                />
                <textarea
                  rows={2}
                  value={category.skills.join(', ')}
                  onChange={(e) => {
                    const next = [...data.skills];
                    next[catIdx].skills = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                    onChange({ ...data, skills: next });
                  }}
                  placeholder="Comma separated skills"
                  className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-slate-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
            ))}
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeTab === 'projects' && (
          <div className="space-y-4">
            {data.projects.map((proj, pIdx) => (
              <div key={pIdx} className="bg-slate-800/60 p-3 rounded-lg border border-slate-700 space-y-2">
                <input
                  type="text"
                  value={proj.title}
                  onChange={(e) => {
                    const next = [...data.projects];
                    next[pIdx].title = e.target.value;
                    onChange({ ...data, projects: next });
                  }}
                  className="font-semibold text-slate-200 bg-transparent border-b border-slate-600 pb-0.5 w-full focus:outline-none focus:border-indigo-400"
                />
                <input
                  type="text"
                  value={proj.technologies.join(', ')}
                  onChange={(e) => {
                    const next = [...data.projects];
                    next[pIdx].technologies = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                    onChange({ ...data, projects: next });
                  }}
                  placeholder="Technologies (comma separated)"
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-300 font-mono text-[11px]"
                />
                <div className="space-y-1.5 mt-2">
                  <span className="text-[11px] text-slate-400 font-medium">Achievement Bullets:</span>
                  {proj.highlights.map((h, hIdx) => (
                    <textarea
                      key={hIdx}
                      rows={2}
                      value={h}
                      onChange={(e) => {
                        const next = [...data.projects];
                        next[pIdx].highlights[hIdx] = e.target.value;
                        onChange({ ...data, projects: next });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-300 text-xs focus:outline-none focus:border-indigo-500"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EXPERIENCE TAB */}
        {activeTab === 'experience' && (
          <div className="space-y-4">
            {data.experience.map((exp, eIdx) => (
              <div key={eIdx} className="bg-slate-800/60 p-3 rounded-lg border border-slate-700 space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => {
                      const next = [...data.experience];
                      next[eIdx].company = e.target.value;
                      onChange({ ...data, experience: next });
                    }}
                    className="font-semibold text-slate-200 bg-transparent border-b border-slate-600 pb-0.5 flex-1 focus:outline-none focus:border-indigo-400"
                  />
                  <input
                    type="text"
                    value={exp.period}
                    onChange={(e) => {
                      const next = [...data.experience];
                      next[eIdx].period = e.target.value;
                      onChange({ ...data, experience: next });
                    }}
                    className="text-right text-slate-400 bg-transparent border-b border-slate-600 pb-0.5 w-32 focus:outline-none focus:border-indigo-400"
                  />
                </div>
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) => {
                    const next = [...data.experience];
                    next[eIdx].role = e.target.value;
                    onChange({ ...data, experience: next });
                  }}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-300 italic"
                />
                <div className="space-y-1.5 mt-2">
                  <span className="text-[11px] text-slate-400 font-medium">Impact Bullets:</span>
                  {exp.highlights.map((h, hIdx) => (
                    <textarea
                      key={hIdx}
                      rows={2}
                      value={h}
                      onChange={(e) => {
                        const next = [...data.experience];
                        next[eIdx].highlights[hIdx] = e.target.value;
                        onChange({ ...data, experience: next });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-300 text-xs focus:outline-none focus:border-indigo-500"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CERTIFICATIONS TAB */}
        {activeTab === 'certs' && (
          <div className="space-y-4">
            <div>
              <label className="block text-slate-300 font-medium mb-1">Letter of Recommendation</label>
              <textarea
                rows={3}
                value={data.letterOfRecommendation}
                onChange={(e) => onChange({ ...data, letterOfRecommendation: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500 leading-relaxed"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-medium mb-1">Certifications List</label>
              <div className="space-y-1.5">
                {data.certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="flex gap-2">
                    <input
                      type="text"
                      value={cert}
                      onChange={(e) => {
                        const next = [...data.certifications];
                        next[cIdx] = e.target.value;
                        onChange({ ...data, certifications: next });
                      }}
                      className="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1.5 text-slate-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
