import { Lang } from "../app/i18n/language.service";

export type LocalizedString = Record<Lang, string>;

export interface Project {
    id: string,
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