import type { SectionEntry } from './types';

const icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>';

export const agencyPartnerProcessSections: Record<string, SectionEntry> = {
  agencyPartnerProcess: {
    id: 'agencyPartnerProcess',
    label: 'Agency Partner Process',
    groupId: 'process',
    hint: 'Agency recruitment process and partner booking calls',
    icon,
    defaultVariant: 'default',
    variants: {
      default: {
        component: 'AgencyPartnerProcessBlock',
        dataKey: 'agency-partner-process',
      },
    },
  },
};
