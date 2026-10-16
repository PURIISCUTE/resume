export interface ContactInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  coursework: string[];
  honors?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  technologies: string[];
  period?: string;
  highlights: string[];
  link?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  department?: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
}

export interface ResumeData {
  contact: ContactInfo;
  summary: string;
  education: EducationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  certifications: string[];
  letterOfRecommendation: string;
}

export type ResumeTheme = 'executive' | 'modern' | 'minimal' | 'serif';
export type AccentColor = 'navy' | 'slate' | 'indigo' | 'emerald' | 'monochrome';
export type SpacingDensity = 'compact' | 'balanced' | 'expanded';
