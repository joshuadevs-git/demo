import type { SectionEntry } from './types';

const icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>';

export const trainingCareerSections: Record<string, SectionEntry> = {
  careerOpportunities: {
    id: 'careerOpportunities',
    label: 'Career Opportunities & Support',
    groupId: 'content',
    hint: 'Career opportunities, sponsorships, and graduate support',
    icon,
    defaultVariant: 'default',
    variants: {
      default: {
        component: 'CareerOpportunitiesBlock',
      },
    },
  },
};