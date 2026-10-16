import React from 'react';
import { ResumeData, ResumeTheme, AccentColor, SpacingDensity } from '../types/resume';
import { MapPin, Phone, Mail, Linkedin, Github, Award, Briefcase, GraduationCap, Code2, FolderGit2 } from 'lucide-react';
import { cleanDisplayUrl } from '../utils/resumeMetrics';

interface ResumePreviewProps {
  data: ResumeData;
  theme: ResumeTheme;
  accentColor: AccentColor;
  density: SpacingDensity;
  isEditable?: boolean;
  onUpdateData?: (newData: ResumeData) => void;
  scale?: number;
}

export const ResumePreview = React.forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data, theme, accentColor, density, isEditable = false }, ref) => {
    // Theme font selection
    const getFontFamily = () => {
      switch (theme) {
        case 'serif':
          return 'font-serif';
        case 'modern':
          return 'font-sans';
        case 'minimal':
          return 'font-sans tracking-tight';
        case 'executive':
        default:
          return 'font-sans';
      }
    };

    // Accent color palettes
    const getAccentStyles = () => {
      switch (accentColor) {
        case 'navy':
          return {
            primary: 'text-blue-900',
            border: 'border-blue-900',
            bgSubtle: 'bg-blue-50/70',
            badgeBorder: 'border-blue-200',
            bullet: 'bg-blue-900',
            headingRule: 'border-blue-900',
          };
        case 'indigo':
          return {
            primary: 'text-indigo-900',
            border: 'border-indigo-900',
            bgSubtle: 'bg-indigo-50/70',
            badgeBorder: 'border-indigo-200',
            bullet: 'bg-indigo-900',
            headingRule: 'border-indigo-900',
          };
        case 'emerald':
          return {
            primary: 'text-emerald-900',
            border: 'border-emerald-900',
            bgSubtle: 'bg-emerald-50/70',
            badgeBorder: 'border-emerald-200',
            bullet: 'bg-emerald-900',
            headingRule: 'border-emerald-900',
          };
        case 'monochrome':
          return {
            primary: 'text-neutral-900',
            border: 'border-neutral-900',
            bgSubtle: 'bg-neutral-100',
            badgeBorder: 'border-neutral-300',
            bullet: 'bg-neutral-800',
            headingRule: 'border-neutral-800',
          };
        case 'slate':
        default:
          return {
            primary: 'text-slate-900',
            border: 'border-slate-800',
            bgSubtle: 'bg-slate-100/80',
            badgeBorder: 'border-slate-300',
            bullet: 'bg-slate-800',
            headingRule: 'border-slate-800',
          };
      }
    };

    // Spacing density configurations to guarantee a 1-page fit with ZERO bottom blank space
    const getSpacingStyles = () => {
      switch (density) {
        case 'compact':
          return {
            pagePadding: 'px-7 py-4',
            sectionMargin: 'mb-1',
            itemMargin: 'mb-1',
            bulletMargin: 'mb-0',
            lineHeight: 'leading-[1.25]',
            textSize: 'text-[8.25pt]',
            headingSize: 'text-[9pt]',
            nameSize: 'text-[17pt]',
          };
        case 'expanded':
          return {
            pagePadding: 'px-8 py-6',
            sectionMargin: 'mb-2',
            itemMargin: 'mb-1.5',
            bulletMargin: 'mb-0.5',
            lineHeight: 'leading-[1.35]',
            textSize: 'text-[8.75pt]',
            headingSize: 'text-[10pt]',
            nameSize: 'text-[20pt]',
          };
        case 'balanced':
        default:
          return {
            pagePadding: 'px-8 py-5',
            sectionMargin: 'mb-1.5',
            itemMargin: 'mb-1.5',
            bulletMargin: 'mb-0.5',
            lineHeight: 'leading-[1.30]',
            textSize: 'text-[8.5pt]',
            headingSize: 'text-[9.5pt]',
            nameSize: 'text-[18pt]',
          };
      }
    };

    const accents = getAccentStyles();
    const spacing = getSpacingStyles();
    const fontFamily = getFontFamily();

    return (
      <div className="flex justify-center w-full overflow-x-auto p-4 sm:p-6 lg:p-8">
        {/* A4 Paper Container: 210mm x 297mm */}
        <div
          ref={ref}
          id="resume-printable-page"
          className={`print-page relative w-[210mm] min-h-[297mm] max-h-[297mm] h-[297mm] bg-white text-neutral-900 shadow-2xl rounded-sm box-border flex flex-col justify-between overflow-hidden ${fontFamily} ${spacing.pagePadding} ${spacing.textSize} ${spacing.lineHeight}`}
          style={{
            pageBreakAfter: 'avoid',
            pageBreakInside: 'avoid',
          }}
        >
          {/* Main Content wrapper */}
          <div className="flex-1 flex flex-col justify-between">
            {/* 1. HEADER SECTION */}
            <header className="border-b pb-1.5 mb-1.5 border-neutral-300">
              <div className="flex flex-col items-center text-center">
                <h1 className={`font-bold tracking-tight text-neutral-950 uppercase ${spacing.nameSize}`}>
                  {data.contact.name}
                </h1>
                
                {data.contact.title && (
                  <p className={`font-semibold tracking-wide mt-0.5 text-[8.75pt] text-neutral-700 uppercase ${theme === 'serif' ? 'italic' : ''}`}>
                    {data.contact.title}
                  </p>
                )}

                {/* Contact information inline row */}
                <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-0.5 mt-1 text-[8.25pt] text-neutral-600 font-medium">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-neutral-500 inline" />
                    {data.contact.location}
                  </span>
                  <span className="text-neutral-300">•</span>
                  <span className="inline-flex items-center gap-1">
                    <Phone className="w-2.5 h-2.5 text-neutral-500 inline" />
                    <a href={`tel:${data.contact.phone.replace(/\s+/g, '')}`} className="hover:underline text-neutral-800">
                      {data.contact.phone}
                    </a>
                  </span>
                  <span className="text-neutral-300">•</span>
                  <span className="inline-flex items-center gap-1">
                    <Mail className="w-2.5 h-2.5 text-neutral-500 inline" />
                    <a href={`mailto:${data.contact.email}`} className="hover:underline text-neutral-800">
                      {data.contact.email}
                    </a>
                  </span>
                  <span className="text-neutral-300">•</span>
                  <span className="inline-flex items-center gap-1">
                    <Linkedin className="w-2.5 h-2.5 text-neutral-500 inline" />
                    <a
                      href={`https://${cleanDisplayUrl(data.contact.linkedin)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline text-neutral-800"
                    >
                      {cleanDisplayUrl(data.contact.linkedin)}
                    </a>
                  </span>
                  {data.contact.github && (
                    <>
                      <span className="text-neutral-300">•</span>
                      <span className="inline-flex items-center gap-1">
                        <Github className="w-2.5 h-2.5 text-neutral-500 inline" />
                        <a
                          href={`https://${cleanDisplayUrl(data.contact.github)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline text-neutral-800"
                        >
                          {cleanDisplayUrl(data.contact.github)}
                        </a>
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Refined Executive Summary */}
              {data.summary && (
                <div className="mt-1 text-justify text-neutral-700 text-[8.25pt] leading-[1.28]">
                  <p>{data.summary}</p>
                </div>
              )}
            </header>

            {/* 2. EDUCATION & TECHNICAL EXPERTISE */}
            <section className={spacing.sectionMargin}>
              <div className={`flex items-center gap-1.5 pb-0.5 mb-1 border-b ${accents.headingRule}`}>
                <GraduationCap className="w-3 h-3 text-neutral-700" />
                <h2 className={`font-bold tracking-wider uppercase text-neutral-900 ${spacing.headingSize}`}>
                  Education & Technical Expertise
                </h2>
              </div>

              {/* Education entry */}
              {data.education.map((edu, idx) => (
                <div key={idx} className="mb-1">
                  <div className="flex justify-between items-baseline">
                    <div className="font-bold text-neutral-900 text-[8.5pt]">
                      {edu.institution} <span className="font-normal text-neutral-600">|</span> {edu.degree}
                    </div>
                    <div className="text-[8pt] font-semibold text-neutral-600 tabular-nums">
                      {edu.period}
                    </div>
                  </div>
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="text-[8pt] text-neutral-700 mt-0.5">
                      <span className="font-semibold text-neutral-900">Relevant Coursework: </span>
                      {edu.coursework.join(', ')}
                    </div>
                  )}
                </div>
              ))}

              {/* Technical Skills Matrix */}
              <div className="space-y-0.5 text-[8pt]">
                {data.skills.map((category, idx) => (
                  <div key={idx} className="flex items-baseline">
                    <span className="font-semibold text-neutral-900 w-[138px] shrink-0">
                      {category.category}:
                    </span>
                    <span className="text-neutral-700 flex-1">
                      {category.skills.join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. FEATURED AI & SOFTWARE ENGINEERING PROJECTS */}
            <section className={spacing.sectionMargin}>
              <div className={`flex items-center gap-1.5 pb-0.5 mb-1 border-b ${accents.headingRule}`}>
                <FolderGit2 className="w-3 h-3 text-neutral-700" />
                <h2 className={`font-bold tracking-wider uppercase text-neutral-900 ${spacing.headingSize}`}>
                  Featured AI & Software Engineering Projects
                </h2>
              </div>

              <div className="space-y-1">
                {data.projects.map((proj, idx) => (
                  <div key={idx} className={spacing.itemMargin}>
                    <div className="flex justify-between items-baseline mb-0.5">
                      <div className="font-bold text-neutral-900 text-[8.5pt]">
                        {proj.title}
                      </div>
                      <div className="text-[7.5pt] font-mono text-neutral-600 text-right shrink-0 ml-2 font-medium">
                        {proj.technologies.join(', ')}
                      </div>
                    </div>
                    <ul className="list-outside ml-3 space-y-0.5 text-[8pt] text-neutral-700">
                      {proj.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="list-disc pl-0.5 leading-[1.26]">
                          <span dangerouslySetInnerHTML={{ __html: highlightKeyMetrics(bullet) }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. PROFESSIONAL EXPERIENCE */}
            <section className={spacing.sectionMargin}>
              <div className={`flex items-center gap-1.5 pb-0.5 mb-1 border-b ${accents.headingRule}`}>
                <Briefcase className="w-3 h-3 text-neutral-700" />
                <h2 className={`font-bold tracking-wider uppercase text-neutral-900 ${spacing.headingSize}`}>
                  Professional Experience
                </h2>
              </div>

              <div className="space-y-1.5">
                {data.experience.map((exp, idx) => (
                  <div key={idx} className={spacing.itemMargin}>
                    <div className="flex justify-between items-baseline mb-0.5">
                      <div className="text-neutral-900 text-[8.75pt]">
                        <span className="font-bold">{exp.company}</span>
                        <span className="text-neutral-500 mx-1">—</span>
                        <span className="italic font-medium text-neutral-800">{exp.role}</span>
                      </div>
                      <div className="text-[8pt] font-semibold text-neutral-600 tabular-nums">
                        {exp.period}
                      </div>
                    </div>
                    <ul className="list-outside ml-3 space-y-0.5 text-[8pt] text-neutral-700">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="list-disc pl-0.5 leading-[1.26]">
                          <span dangerouslySetInnerHTML={{ __html: highlightKeyMetrics(bullet) }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. CERTIFICATIONS & RECOGNITION */}
            <section className="mb-0">
              <div className={`flex items-center gap-1.5 pb-0.5 mb-1 border-b ${accents.headingRule}`}>
                <Award className="w-3 h-3 text-neutral-700" />
                <h2 className={`font-bold tracking-wider uppercase text-neutral-900 ${spacing.headingSize}`}>
                  Certifications & Recognition
                </h2>
              </div>

              <div className="space-y-0.5 text-[8pt] text-neutral-700">
                {data.letterOfRecommendation && (
                  <div className="flex items-start">
                    <span className="font-bold text-neutral-900 mr-1.5 shrink-0">• Corizo Letter of Recommendation:</span>
                    <span>{data.letterOfRecommendation}</span>
                  </div>
                )}
                {data.certifications && data.certifications.length > 0 && (
                  <div className="flex items-start">
                    <span className="font-bold text-neutral-900 mr-1.5 shrink-0">• Certifications:</span>
                    <span>{data.certifications.join('; ')}.</span>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
);

ResumePreview.displayName = 'ResumePreview';

/**
 * Highlights metrics (e.g., 40%, 99.9%, 0.8249 F1-Score) and key architectural concepts
 * for rapid 6-second recruiter scannability
 */
function highlightKeyMetrics(text: string): string {
  // Regex matches percentages, numbers with +, F1-Scores, latency ms, key architectural keywords
  const regex = /(\b\d+(\.\d+)?%\b|\b\d+\+\b|\b99\.9%\b|\b0\.\d{4}\s+(F1-Score|Precision)\b|\bsub-100ms\b|\b\d+x\b|\b\d+\s+(weeks|teams|functional PoCs|transactions|server nodes)\b|\bTemporal Graph Neural Network \(TGNN\)\b|\bRAG vector retrieval\b|\bFastAPI microservices\b|\bDocker\b|\bRole-Based Access Control \(RBAC\)\b|\bRBAC\b|\bSMOTE\b|\bbidirectional LSTM\b|\bconcept drift detection\b)/gi;
  
  return text.replace(regex, '<strong class="font-semibold text-neutral-950">$1</strong>');
}
