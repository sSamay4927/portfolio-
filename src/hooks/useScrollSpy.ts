import { useEffect } from 'react';

export function useScrollSpy(
  sectionIds: string[],
  onSectionChange: (sectionId: string) => void
) {
  useEffect(() => {
    const handleScroll = () => {
      // Trigger section change when it reaches 1/3rd of the way down the screen
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = sectionIds[0];
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = id;
          }
        }
      }
      
      onSectionChange(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, onSectionChange]);
}
