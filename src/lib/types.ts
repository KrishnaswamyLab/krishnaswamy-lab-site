export type GlobResults = Record<string, ()=>Promise<unknown>>
export interface Link {
    href: string;
    text: string;
}
export type Links = Link[] | Array<Link> | ArrayLike<Link>
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

export interface Href {
    href: string
}
export type Hrefs = Href[] | Array<Href> | ArrayLike<Href>

export interface Author {
    name: string[] | Array<string>
}

export type Authors = Author[] | Array<Author> 

export interface Publication {
    title: string;
    type: string;
    authors: Authors;
    year: number;

    abstract: string;       
    periodical:string;    
    keywords: string[];
    selected?: boolean;
    href: string;

    month?: number;
    publisher?: string;
    pages?: string;
    issue?: number;
    volume?: number;
    
    makeAuthorString: () => string;
    makeDateString: () => string;
    makeVolumeIssueString: () => string;
    makePublicationString: () => string;
    makeKeywordsString: () => string;

}

export type Publications = Publication[] 
    | Array<Publication> 
    // | ArrayLike<Publication>
export interface PublicationsGroupedByYear {
    [key: string]: Publications;
}

export interface Project {
    // link to project specific page on website
    projectUrl?: string | null,
    // title to use in the list at top of /projects page
    projectTitle?: string | null,
    // abbreviation if a method, e.g. MAGIC
    projectAbbreviation?: string | null,
    // description to use in list at top of /projects page
    projectListDescription?: string | null,
    // short blurb to use inside hero section on /projects page
    heroBlurb?: string | null,
    // hero image
    heroImage?: string | null,
    // list of authors / lab members
    authors: Members | string[];
    // name of journal
    journal?: string | null,
    // image of the journal to use in a link
    journalImage?: string | null,
    // link to github repo
    githubLink?: string | null,
    // link to paper
    publicationLink?: string | null,
    // link to a single image (under /static) to show at bottom of project section    
    publicationImage?: string | null,
    // FULL title of the publication
    publicationTitle?: string | null,
    // publication abstract
    publicationAbstract?: string | null,
    // poster if availble
    publicationPoster?: string | null,
    // when it was publish
    publicationYear?: number | null;
    // link to youtube
    youtube?: string | null,

    heroTitle: () => string | null | undefined;
    hasBothGithubAndJournal: () => string | null | undefined;
    hasOneOfGithubOrJournal: () => string | null | undefined;
    makeTextAboutLinks: () => string;

}
export type Projects = Project[] 
    | Array<Project> 
    // | ArrayLike<Project>


export interface ResearchExample {
    text: string;
    href: string;
}
export type ResearchExamples = ResearchExample[] 
    | Array<ResearchExample> 
    | ArrayLike<ResearchExample>

export interface ResearchCategory {
    title: string;
    about: string;
    image: string;
    examples?: ResearchExamples;
}

export interface quote {
    text:string;
    attributed:string;
}

export interface Affiliation {
    title:string;
    href:string;
    about:string;
    quote?:quote;
}


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
    | ArrayLike<SyllabusDayItem>

export interface SyllabusDay {
    day: string;
    items: SyllabusDayItems
}

export type Syllabus = SyllabusDay[] | Array<SyllabusDay> | ArrayLike<SyllabusDay>