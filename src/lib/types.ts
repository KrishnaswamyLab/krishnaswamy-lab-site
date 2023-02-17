export interface member {
    name: string;
    title?: string;
    about?: string;
    cv?: string|null;
    image?: string|null;
    website?: string|null;
    isAlum?: boolean;
}

export interface href {
    href: string
}

export interface author {
    name: string[]
}

export interface publication {
    title?: string;
    type?: string;
    authors?: author[] | Array<author | author[]> | ArrayLike<author | author[]>,
    year?: string|number|null;
    month?:string|number|null;
    pages?:string;
    abstract?:string;
    volume?:string|number;
    issue?:string|number;
    publisher:string;
    periodical:string|null;
    keywords: string[] | Array<string | string[]> | ArrayLike<string | string[]>,
    urls: href[] | Array<href | href[]> | ArrayLike<href | href[]>,
    google_scholar_url:string;
    journal_source:string;
    cites:string|number|null;
}

export interface project {
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
    authors?: member[] | Array<member | member[]> | ArrayLike<member | member[]>,
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

export interface projectExample {
    text: string;
    href: string;
}

export interface projectCategory {
    title?: string;
    about?: string;
    image?: string;
    examples?: projectExample[] | Array<member | member[]> | ArrayLike<member | member[]>;
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