export const SECTIONS = ['home', 'skills', 'projetos', 'contato'] as const;
export type SectionId = typeof SECTIONS[number];