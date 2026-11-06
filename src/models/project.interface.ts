import { Lang } from "../app/i18n/language.service";

export type LocalizedString = Record<Lang, string>;

export interface Project {
  id: string;
  showInHome: boolean;
  priority: number;
  size: 'S' | 'M' | 'L' | 'XL' | 'ALL';
  technologies: string[];
  
  // URL e media (opzionali o stringhe vuote)
  inPageDemo: boolean;
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  
  // Testi fissi (usati per le card nella Home o nelle grid)
  title: LocalizedString;
  abstract: LocalizedString;

  // Campo universale generato dal Markdown
  bodyHtml: LocalizedString; 
}