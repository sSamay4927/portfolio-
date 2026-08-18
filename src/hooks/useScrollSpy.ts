import { useEffect, useRef } from 'react';

/**
 * IntersectionObserver-based scroll spy that detects which section
 * is currently in the viewport and calls onSectionChange.
 * Uses a threshold of 0.3 to trigger when 30% of a section is visible.
 */
export function useScrollSpy(
  sectionIds: string[],
  onSectionChange: (sectionId: string) => void
) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Track visibility ratios for each section
    const visibilityMap = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        // Find the section with the highest visibility ratio
        let maxRatio = 0;
        let mostVisibleId = sectionIds[0];

        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleId = id;
          }
        });

        if (maxRatio > 0) {
          onSectionChange(mostVisibleId);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '0px',
      }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observerRef.current?.observe(el);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionIds, onSectionChange]);
}
