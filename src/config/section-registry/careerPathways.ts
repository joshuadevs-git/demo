import type { SectionEntry } from './types';

export const careerPathwaysSections: Record<string, SectionEntry> = {
  careerPathways: {
    variants: {
      default: {
        component: "CareerPathways", // This must match the key in COMPONENT_MAP exactly!
      },
    },
  },
};