'use client';

type ScrollOptions = {
  setActiveSection: (section: string) => void;
  setIsMenuOpen?: (value: boolean) => void;
  headerOffset?: number;
};

export function useScrollToSection({
  setActiveSection,
  setIsMenuOpen,
  headerOffset = 96
}: ScrollOptions) {

  const scrollToSection = (id: string) => {

    if (setIsMenuOpen) {
      setIsMenuOpen(false);
    }

    requestAnimationFrame(() => {

      const element = document.getElementById(id);
      if (!element) return;

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveSection(id);

    });

  };

  return { scrollToSection };
}