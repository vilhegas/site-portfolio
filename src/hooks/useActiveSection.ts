'use client';

import { useEffect } from 'react';

type UseActiveSectionParams = {
  sectionIds: string[];
  setActiveSection: (id: string) => void;
  /**
   * Ajuste para header fixo.
   * Ex.: header com ~96px => offsetPx = 96
   */
  offsetPx?: number;
};

export function useActiveSection({
  sectionIds,
  setActiveSection,
  offsetPx = 96,
}: UseActiveSectionParams) {
  useEffect(() => {
    if (!sectionIds?.length) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    // rootMargin negativo "empurra" a área de detecção para baixo,
    // compensando o header fixo.
    const observer = new IntersectionObserver(
      (entries) => {
        // Pega somente as que estão visíveis
        const visible = entries.filter((e) => e.isIntersecting);

        if (!visible.length) return;

        // Escolhe a seção mais "dominante" na viewport
        // (maior intersectionRatio)
        const mostVisible = visible.sort(
          (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
        )[0];

        const id = (mostVisible.target as HTMLElement).id;
        if (id) setActiveSection(id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: `-${offsetPx}px 0px -60% 0px`,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, setActiveSection, offsetPx]);
}