import type { ResumeData } from '../types/resume.ts';

/**
 * Counts total words across all resume fields
 */
export function calculateResumeWordCount(data: ResumeData): number {
  let text = `${data.contact.name} ${data.contact.title} ${data.contact.location} ${data.summary} `;

  data.education.forEach((edu) => {
    text += `${edu.institution} ${edu.degree} ${edu.location} ${edu.coursework.join(' ')} `;
  });

  data.skills.forEach((cat) => {
    text += `${cat.category} ${cat.skills.join(' ')} `;
  });

  data.projects.forEach((proj) => {
    text += `${proj.title} ${proj.subtitle} ${proj.technologies.join(' ')} ${proj.highlights.join(' ')} `;
  });

  data.experience.forEach((exp) => {
    text += `${exp.company} ${exp.role} ${exp.location} ${exp.highlights.join(' ')} `;
  });

  text += `${data.letterOfRecommendation} ${data.certifications.join(' ')}`;

  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

/**
 * Counts total achievement bullet points
 */
export function calculateBulletCount(data: ResumeData): number {
  let count = 0;
  data.projects.forEach((p) => {
    count += p.highlights.length;
  });
  data.experience.forEach((e) => {
    count += e.highlights.length;
  });
  return count;
}

export interface AtsAssessment {
  score: number;
  grade: string;
  passedCriteria: string[];
  recommendations: string[];
}

/**
 * Computes ATS score based on technical keyword density, metrics/quantification,
 * structural section completeness, and concise bullet constraints.
 */
export function calculateAtsScore(data: ResumeData): AtsAssessment {
  const passedCriteria: string[] = [];
  const recommendations: string[] = [];
  let score = 0;

  // 1. Contact completeness (Max 15 pts)
  if (data.contact.name && data.contact.email && data.contact.phone && data.contact.location) {
    score += 15;
    passedCriteria.push('Complete Contact Information & Professional Links');
  } else {
    recommendations.push('Ensure complete contact details (email, phone, location)');
  }

  // 2. Summary with technical focus (Max 15 pts)
  if (data.summary && data.summary.length >= 80 && data.summary.length <= 400) {
    score += 15;
    passedCriteria.push('Targeted Technical Executive Summary');
  } else if (!data.summary) {
    recommendations.push('Add an executive technical summary');
  } else {
    score += 10;
  }

  // 3. Technical Skills Categorization (Max 20 pts)
  if (data.skills && data.skills.length >= 3) {
    const totalSkills = data.skills.reduce((acc, cat) => acc + cat.skills.length, 0);
    if (totalSkills >= 15) {
      score += 20;
      passedCriteria.push(`Categorized Technical Skill Matrix (${totalSkills} verified technologies)`);
    } else {
      score += 12;
      recommendations.push('Expand core technologies and frameworks');
    }
  } else {
    recommendations.push('Structure skills into at least 3 distinct domains');
  }

  // 4. Quantifiable Metrics & Action Verbs (Max 25 pts)
  const allBullets = [
    ...data.projects.flatMap((p) => p.highlights),
    ...data.experience.flatMap((e) => e.highlights),
  ];
  
  const metricRegex = /(\d+(\.\d+)?%|\d+(\.\d+)?x|\$\d+|\d+\+|\b\d+\b)/;
  const metricCount = allBullets.filter((b) => metricRegex.test(b)).length;
  const ratio = allBullets.length > 0 ? metricCount / allBullets.length : 0;

  if (ratio >= 0.6) {
    score += 25;
    passedCriteria.push(`High Metric Quantification (${Math.round(ratio * 100)}% of bullets contain measurable impact)`);
  } else if (ratio >= 0.4) {
    score += 18;
    passedCriteria.push(`Good Metric Quantification (${Math.round(ratio * 100)}% with metrics)`);
  } else {
    score += 10;
    recommendations.push('Add more quantifiable results (%, numbers, latency gains) to bullets');
  }

  // 5. Structure & Layout 1-Page Fitness (Max 25 pts)
  const wordCount = calculateResumeWordCount(data);
  // Ideal 1-page word count is 450 - 680 words
  if (wordCount >= 420 && wordCount <= 680) {
    score += 25;
    passedCriteria.push(`Optimal 1-Page Length (${wordCount} words fits without overflow or awkward gaps)`);
  } else if (wordCount > 680) {
    score += 15;
    recommendations.push(`Word count is slightly high (${wordCount} words); consider trimming to avoid multi-page spill`);
  } else {
    score += 15;
    recommendations.push(`Word count is low (${wordCount} words); elaborate on project architectures`);
  }

  let grade = 'A+';
  if (score < 80) grade = 'B';
  if (score < 70) grade = 'C';
  if (score >= 90) grade = 'A+';
  else if (score >= 80) grade = 'A';

  return {
    score,
    grade,
    passedCriteria,
    recommendations,
  };
}

/**
 * Estimates percentage of standard A4/US-letter page filled based on word count and density
 */
export function estimatePageFillPercentage(
  data: ResumeData,
  density: 'compact' | 'balanced' | 'expanded'
): number {
  const words = calculateResumeWordCount(data);
  const bullets = calculateBulletCount(data);
  
  // Base line units calculation
  const densityMultiplier = density === 'compact' ? 0.92 : density === 'balanced' ? 1.0 : 1.08;
  const approximateLines = (words / 11) + (bullets * 0.8) + 24; // headings, gaps, margin units
  
  // A standard A4 1-page budget is roughly 65-70 equivalent lines
  const fill = Math.min(100, Math.round((approximateLines / 68) * 100 * densityMultiplier));
  return fill;
}

/**
 * Sanitizes URLs for display
 */
export function cleanDisplayUrl(url: string): string {
  return url.replace(/^https?:\/\//i, '').replace(/\/$/, '');
}
