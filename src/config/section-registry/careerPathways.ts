import type { SectionEntry } from './types';

export const careerPathwaysSections: Record<string, SectionEntry> = {
  careerPathways: {
    id: "careerPathways",
    label: "Career Pathways",
    groupId: "content",
    icon: "briefcase",
    defaultVariant: "default",
    variants: {
      default: {
        component: "CareerPathways",
      },
    },
  },
};