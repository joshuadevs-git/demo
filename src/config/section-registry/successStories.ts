import type { SectionEntry } from './types';

export const successStoriesSections: Record<string, SectionEntry> = {
  successStories: {
    id: "successStories",
    label: "Success Stories",
    groupId: "content",
    icon: "trophy",
    defaultVariant: "default",
    variants: {
      default: {
        component: "SuccessStoriesCarousel",
      },
    },
  },
};