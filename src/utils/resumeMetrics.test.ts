import test from 'node:test';
import assert from 'node:assert/strict';
import { initialResumeData } from '../data/resumeData.ts';
import {
  calculateResumeWordCount,
  calculateBulletCount,
  calculateAtsScore,
  estimatePageFillPercentage,
  cleanDisplayUrl,
} from './resumeMetrics.ts';

test('calculateResumeWordCount calculates accurate word count for initial resume', () => {
  const count = calculateResumeWordCount(initialResumeData);
  assert.ok(count > 400, `Expected word count > 400, got ${count}`);
  assert.ok(count < 700, `Expected word count < 700 for a 1-page resume, got ${count}`);
});

test('calculateBulletCount accurately counts total project and experience highlights', () => {
  const bullets = calculateBulletCount(initialResumeData);
  assert.equal(bullets, 20);
});

test('calculateAtsScore awards high grade for refined quantitative resume', () => {
  const ats = calculateAtsScore(initialResumeData);
  assert.ok(ats.score >= 90, `Expected ATS score >= 90, got ${ats.score}`);
  assert.equal(ats.grade, 'A+');
  assert.ok(ats.passedCriteria.length >= 4);
});

test('estimatePageFillPercentage returns optimal coverage', () => {
  const fillBalanced = estimatePageFillPercentage(initialResumeData, 'balanced');
  assert.ok(fillBalanced >= 85 && fillBalanced <= 100, `Fill was ${fillBalanced}%`);
});

test('cleanDisplayUrl strips protocols and trailing slashes', () => {
  assert.equal(cleanDisplayUrl('https://linkedin.com/in/pratik-surya02/'), 'linkedin.com/in/pratik-surya02');
  assert.equal(cleanDisplayUrl('http://github.com/pratik-surya02'), 'github.com/pratik-surya02');
});
