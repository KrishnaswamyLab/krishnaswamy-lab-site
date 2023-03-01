import type {
    Member as MemberInterface,
    Publication as PublicationInterface,
    Project as ProjectInterface
} from '$lib/types'

export class Member implements MemberInterface {
    name;
    title;
    about;
    cv;
    image;
    website;
    isAlum;
    name_str;

    constructor(member:MemberInterface) {
        this.name = member.name
        this.title = member.title
        this.about = member.about
        this.cv = member.cv
        this.image = member.image
        this.website = member.website
        this.isAlum = member.isAlum        
        if (member?.name_str) {
            this.name_str = this.makeNameStr()
        } else {
            this.name_str = member.name_str
        }
    }

    makeNameStr() {        
        let first = this.name?.preferred ? this.name.preferred : this.name.first
        let nameStr = first
        if (this.name?.middle) {
            nameStr += ` ${this.name.middle} `
        }
        nameStr += ` ${this.name.last}`
        return nameStr
    };
}

export class Publication implements PublicationInterface {
    title;
    type;
    authors;
    year;
    month;
    pages;
    abstract;
    volume;
    issue;
    publisher;
    periodical;
    keywords;
    urls;
    google_scholar_url;
    journal_source;
    cites;
    selected;

    constructor(publication:PublicationInterface) {
        this.title = publication.title
        this.type = publication.type
        this.authors = publication.authors
        this.year = publication.year
        this.month = publication.month
        this.pages = publication.pages
        this.abstract = publication.abstract
        this.volume = publication.volume
        this.issue = publication.issue
        this.publisher = publication.publisher
        this.periodical = publication.periodical
        this.keywords = publication.keywords
        this.urls = publication.urls
        this.google_scholar_url = publication.google_scholar_url
        this.journal_source = publication.journal_source
        this.cites = publication.cites
        this.selected = publication.selected
    }

    
    makeAuthorString() {
        let a = this.authors.map(({name}) => name.join(" "))
        if (a.length > 10) {
            a = [...a.slice(0, 7), '...',...a.slice(-3, -1)]
        }
        let s = ''
        for (let index = 0; index < a.length; index++) {
            const name = a[index];
            if (name === 'Smita Krishnaswamy') {
                s += `<span class="font-bold">${name}</span>`
            } else {
                s += name
            }
            if (index < a.length - 2) {
                s += ', '
            } else if (index < a.length - 1) {
                s += ' &amp; '
            }
        }
        return s
    }

    makeDateString() {
        if (this?.year === null) return ''
        let s
        if (this?.month && this?.year) {
            s = `(${this?.month}, ${this?.year})`
        } else if (this?.year) {
            s = `(${this?.year})`
        } else {
            return ''
        }
        return s
    }
    
    makeVolumeIssueString() {
        if (this?.volume === null) return ''
        let s = ''
        if (this?.issue && this?.volume) {
            s = `${this?.issue}:<span class="font-bold">${this?.volume}</span>.`
        } else if (this?.volume) {
            s = `<span class="font-bold">${this?.volume}</span>.`
        } else {
            return ''
        }
        if (this?.pages) {
            if (this?.pages.indexOf((this?.volume as string)) >= 0) {
                return s
            } else {
                s += ` ${this?.pages}`
            }
        }
        return s
    }

    makePublicationString() {
        let s = ``
        s += `${this.makeDateString()}`
        s += ` ${this.makeVolumeIssueString()}`

        let p = this?.periodical 
            ? this?.periodical 
            : ''

        p = p.replace(':', '')
        p = p.replace(this?.volume as string, '')
        p = p.replace(this?.issue as string, '')
        p = p.replace(this?.month as string, '')
        p = p.replace(this?.year as string, '')
        p = p.replace('|', '')
        s += ` ${p}`
        return s
    }

    makeKeywordsString() {
        let kws = this?.keywords
        if (!kws) return ''
        return (kws as string[]).join(', ') 
    }
}


export class Project implements ProjectInterface {
    projectUrl
    projectTitle
    projectAbbreviation
    projectListDescription
    heroBlurb
    heroImage
    authors
    journal
    journalImage
    githubLink
    publicationLink
    publicationImage
    publicationTitle
    publicationAbstract
    publicationPoster
    publicationYear
    youtube

    constructor(project:ProjectInterface) {
        this.projectUrl = project.projectUrl
        this.projectTitle = project.projectTitle
        this.projectAbbreviation = project.projectAbbreviation
        this.projectListDescription = project.projectListDescription
        this.heroBlurb = project.heroBlurb
        this.heroImage = project.heroImage
        this.authors = project.authors
        this.journal = project.journal
        this.journalImage = project.journalImage
        this.githubLink = project.githubLink
        this.publicationLink = project.publicationLink
        this.publicationImage = project.publicationImage
        this.publicationTitle = project.publicationTitle
        this.publicationAbstract = project.publicationAbstract
        this.publicationPoster = project.publicationPoster
        this.publicationYear = project.publicationYear
        this.youtube = project.youtube
    }

    heroTitle() {
        return this?.projectAbbreviation 
            ? this?.projectAbbreviation 
            : this.projectTitle
    } 

    hasBothGithubAndJournal() {
        return this?.githubLink && this?.publicationLink 
    }

    hasOneOfGithubOrJournal() {
        return this?.githubLink || this?.publicationLink
    }

    makeTextAboutLinks() {
        return `
        You can access 
        ${this.heroTitle()}'s
        ${this?.githubLink ? 'Github repository' : ''}
        ${this.hasBothGithubAndJournal() ? 'and' : ''}
        ${this?.publicationLink  ? 'article page' : ''}
        by clicking the link${this.hasBothGithubAndJournal() ? 's' : ''}
        below
        `
    }
}
