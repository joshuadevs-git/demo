import type { SectionEntry } from './section-registry/types';
import { shellSections } from './section-registry/shell';
import { heroSections } from './section-registry/hero';
import { aboutSections } from './section-registry/about';
import { servicesSections } from './section-registry/services';
import { portfolioSections } from './section-registry/portfolio';
import { processSections } from './section-registry/process';
import { agencyPartnerProcessSections } from './section-registry/agencyPartnerProcess';
import { socialSections } from './section-registry/social';
import { faqSections } from './section-registry/faq';
import { contactSections } from './section-registry/contact';
import { ctaSections } from './section-registry/cta';
import { contentSections } from './section-registry/content';
import { careerPathwaysSections } from './section-registry/careerPathways';
import { trainingCareerSections } from './section-registry/trainingCareer';
import { enrollmentBenefitsSections } from './section-registry/enrollmentBenefits';
import { trainingProgramsSections } from './section-registry/trainingPrograms';

// 👇 ADD THIS IMPORT LINE
import { successStoriesSections } from './section-registry/successStories';

export { SECTION_GROUPS } from './section-registry/types';
export type { SectionEntry, SectionGroup, VariantEntry } from './section-registry/types';

export const SECTION_REGISTRY: Record<string, SectionEntry> = {
  ...shellSections,
  ...heroSections,
  ...aboutSections,
  ...servicesSections,
  ...portfolioSections,
  ...processSections,
  ...agencyPartnerProcessSections,
  ...trainingProgramsSections,
  ...trainingCareerSections,
  ...enrollmentBenefitsSections,
  ...socialSections,
  ...faqSections,
  ...contactSections,
  ...ctaSections,
  ...contentSections,
  ...careerPathwaysSections,
  ...successStoriesSections,
};
