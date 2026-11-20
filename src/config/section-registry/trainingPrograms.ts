import type { SectionEntry } from './types';

const icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>';

export const trainingProgramsSections: Record<string, SectionEntry> = {
  trainingPrograms: {
    id: 'trainingPrograms',
    label: 'Training Programs',
    groupId: 'content',
    hint: 'Legal VA training programs and career paths',
    icon,
    defaultVariant: 'default',
    variants: {
      default: {
        component: 'TrainingProgramsBlock',
      },
    },
  },
};