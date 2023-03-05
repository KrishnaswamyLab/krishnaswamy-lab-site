export interface CarousalImage {
    // link to image
    url: string;
    // caption for image
    caption?: string;
    // optional id for the image
    id?: string;    
    // optional name for image
    name?: string;
    // Who took the image
    attribution?: string;
    // Licensing information to use the image
    license?: string;
}
export type CarousalImages = Array<CarousalImage>

export type GlobResults = Record<string, ()=>Promise<unknown>>

export interface Course {
    about: string;
    listings: string[];
    professors: string[];
    title: string;
}
export type Courses = Course[]
    | Array<Course>

export interface Link {
    href: string;
    text: string;
}
export type Links = Link[] 
    | Array<Link> 
    | ArrayLike<Link>

export interface PublicationCategory {
    category: string;
    links: Links;
}
export type PublicationCategories = PublicationCategory[] | 
    Array<PublicationCategory> | 
    ArrayLike<PublicationCategory>


export interface MemberName {
    first: string;
    middle?: string;
    last:string;
    preferred?: string;
}
export type MemberNames = MemberName[] | Array<MemberName> | ArrayLike<MemberName>

export interface Member {
    name: MemberName;
    title?: string;
    
    about?: string;
    image?: string;

    cv?: string;
    website?: string;

    isAlum?: boolean;
    name_str?: string;
    makeNameStr: () => string;
}
export type Members = Member[] 
    | Array<Member> 
    // | ArrayLike<Member>

export interface ImageHero {
    title: string;
    image: string;
    blurb?: string;
}

export interface Publication {
    type: string;
    href: string;    
    year: number;
    title: string;
    authors: string[];    
    abstract: string;        
    // Nature Biotechnology   
    periodical:string;    
    // Nature Publishing Group
    publisher?: string;
    // periodical <-- journal
    periodicalImage?: string;
    
    github?: string;
    poster?: string;   
    slides?: string; 
    youtube?: string;
    keyImage?: string;

    keywords?: string[];
    selected?: boolean;
    month?: number;
    pages?: string;
    issue?: number;
    volume?: number;

    makeAuthorString: () => string;
    makeDateString: () => string;
    makeVolumeIssueString: () => string;
    makePublicationString: () => string;
    makeKeywordsString: () => string;
    hasBothGithubAndJournal: () => boolean;
    hasOneOfGithubOrJournal: () => boolean;
}

export type Publications = Publication[] 
    | Array<Publication> 
    // | ArrayLike<Publication>

export interface PublicationsGroupedByYear {
    [key: string]: Publications;
}
export interface Project {    
    // link to project specific page
    href:string;

    // title of project
    title: string;    
    // abbreviation if a method, e.g. MAGIC
    abbreviation?: string;        
    // description to use in list at top of /projects page
    description?: string;

    hero: ImageHero;
        // title <-- abrev // title
        // blurb
        // image
    
    publication: Publication;
        // title <--- publicationTitle
        // authors <-- authors
        // year <-- publicationYear
        // abstract <-- publicationAbstract
        // periodical <-- journal
        // periodicalImage <-- journalImage
        // href <-- publicationLink
        // github <-- githubLink
        // poster <-- publicationPoster
        // keyImage <-- publicationImage
        // youtube <-- youtube    
    makeTextAboutLinks: () => string;
}

export type Projects = Project[] 
    | Array<Project> 
    // | ArrayLike<Project>

export type ResearchExample = Link

export type ResearchExamples = ResearchExample[] 
    | Array<ResearchExample> 
    | ArrayLike<ResearchExample>

export interface ResearchCategory {
    title: string;
    about: string;
    image: string;
    sort?:number;
    examples?: ResearchExamples;
}

export type ResearchCategories = ResearchCategory[]
    | Array<ResearchCategory>

export interface quote {
    text:string;
    attributed:string;
}

export interface Affiliation {
    title:string;
    href:string;
    about:string;
    quote?:quote;
    sort?:number;
}
export type Affiliations = Affiliation[]
    | Array<Affiliation>


import type {ComponentType, SvelteComponentTyped} from 'svelte'

export interface  ComponentMap {
    [key: string]: ComponentType | SvelteComponentTyped
}

export interface SyllabusDayItem {
    col1?: string | null;
    href: string;
    col2: any | ComponentType | SvelteComponentTyped;
    col3: string;
}
export type SyllabusDayItems = SyllabusDayItem[] 
    | Array<SyllabusDayItem> 
    

export interface SyllabusDay {
    day: string;
    items: SyllabusDayItems
}

export type Syllabus = SyllabusDay[] 
    | Array<SyllabusDay> 
    

export type Syllabi = Syllabus[] 
    | Array<Syllabus> 
    