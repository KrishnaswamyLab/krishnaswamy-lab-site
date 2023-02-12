export interface member {
    name: string;
    title?: string;
    about?: string;
    cv?: string|null;
    image?: string|null;
    website?: string|null;
    isAlum?: boolean;
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