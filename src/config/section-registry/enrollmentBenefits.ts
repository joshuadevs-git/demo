
import type { SectionEntry } from './types';

const icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>';

export const enrollmentBenefitsSections: Record<string, SectionEntry> = {
  enrollmentBenefits: {
    id: 'enrollmentBenefits',
    label: 'Enrollment Benefits',
    groupId: 'content',
    hint: 'Enrollment benefits and agency partnership information',
    icon,
    defaultVariant: 'default',
    variants: {
      default: {
        component: 'EnrollmentBenefitsBlock',
        dataKey: 'enrollment-benefits',
      },
    },
  },
};
