export interface link {
    href: string;
    text: string;
}
export type links = link[] | Array<link> | ArrayLike<link>
export interface PublicationCategory {
    category: string;
    links: links;
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
    name: string | MemberName;
    title?: string;
    about?: string;
    cv?: string|null;
    image?: string|null;
    website?: string|null;
    isAlum?: boolean;
    name_str?: string;
}
export type Members = Member[] | Array<Member> | ArrayLike<Member>

export interface href {
    href: string
}
export type hrefs = href[] | Array<href> | ArrayLike<href>

export interface Author {
    name: string[] | Array<string>
}
export type Authors = Author[] | Array<Author> | ArrayLike<Author>

export interface Publication {
    title?: string;
    type?: string;
    authors: Authors;
    year?: string|number|null;
    month?: string|number|null;
    pages?: string;
    abstract?: string;
    volume?: string|number;
    issue?: string|number;
    publisher:string;
    periodical:string|null;
    keywords: string[] | Array<string>;
    urls: hrefs;
    
    google_scholar_url?: string;
    journal_source: string;
    // Number of citations (if using Publish or Perish's Google Scholar results)
    cites?: string|number;

    // Whether or not a selected publication
    selected?: boolean;
}

export type Publications = Publication[] | Array<Publication> | ArrayLike<Publication>
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
    authors: Members;
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
}
export type Projects = Project[] | Array<Project> | ArrayLike<Project>


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

export interface affiliation {
    title:string;
    href:string;
    about:string;
    quote?:quote;
}

export interface  ComponentMap {
    [key: string]: any
}

export interface SyllabusDayItem {
    col1: string;
    href: string;
    col2: any;
    col3: string;
}
export type SyllabusDayItems = SyllabusDayItem[] | Array<SyllabusDayItem> | ArrayLike<SyllabusDayItem>

export interface SyllabusDay {
    day: string;
    items: SyllabusDayItems
}

export type Syllabus = SyllabusDay[] | Array<SyllabusDay> | ArrayLike<SyllabusDay>