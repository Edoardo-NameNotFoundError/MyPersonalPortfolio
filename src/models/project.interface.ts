import { Lang } from "../app/i18n/language.service";

export type LocalizedString = Record<Lang, string>;

export interface Project {
    id: string,
    showInHome: boolean,
    priority: 1 | 2 | 3 | 4 | 5,
    size: 'S' | 'M' | 'L',
    title: LocalizedString | string,
    description: LocalizedString,
    problem: LocalizedString,
    solution: LocalizedString,
    technologies: string[],
    imageUrl?: string,
    githubUrl?: string,
    liveUrl?: string    
}