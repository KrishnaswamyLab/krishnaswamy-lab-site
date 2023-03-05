import type {
    Member as MemberInterface,
    Publication as PublicationInterface,
    Project as ProjectInterface,
    CarousalImage as CarousalImageInterface
} from '$lib/types'

export class CarousalImage implements CarousalImageInterface {
    url
    caption?;
    id?;
    name?;
    attribution?;
    license?;
    constructor(image: CarousalImageInterface) {
        this.url = image.url
        this.caption = image?.caption
        this.id = image?.id
        this.name = image?.name
        this.attribution = image?.attribution
        this.license = image?.license
    }
}


export class Member implements MemberInterface {
    name;
    title?;

    about?;
    image?;
    
    cv?;    
    website?;

    isAlum?;
    name_str?;

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
    type;
    href;
    year;
    title;    
    authors;
    abstract;
    periodical;
    publisher;
    periodicalImage;
    github;
    poster;
    slides;
    youtube;
    keyImage;
    keywords;
    selected;
    month;
    pages;
    issue;
    volume;
    
    constructor(publication:PublicationInterface) {        
        this.type = publication.type
        this.href = publication.href
        this.year = publication.year
        this.title = publication.title
        this.authors = publication.authors
        this.abstract = publication.abstract
        this.periodical = publication.periodical
        this.publisher = publication.publisher

        this.periodicalImage = publication.periodicalImage
        
        this.github = publication.github
        this.poster = publication.poster
        this.slides = publication.slides
        this.youtube = publication.youtube
        this.keyImage = publication.keyImage

        this.keywords = publication.keywords
        this.selected = publication.selected
        this.month = publication.month
        this.pages = publication.pages
        this.issue = publication.issue
        this.volume = publication.volume
    }

    makeAuthorString() {        
        let a = this.authors
        if (a.length > 10) {
            a = [...a.slice(0, 7), '...',...a.slice(-3)]
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
            if (this?.pages.indexOf((String(this?.volume))) >= 0) {
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

        let p = this.periodical

        p = p.replace(':', '')
        p = p.replace(String(this?.volume), '')
        p = p.replace(String(this?.issue), '')
        p = p.replace(String(this.month), '')
        p = p.replace(String(this.year), '')
        p = p.replace('|', '')
        s += ` ${p}`
        return s
    }

    makeKeywordsString() {        
        if (!this.keywords) return ''
        return this.keywords.join(', ') 
    }

    hasBothGithubAndJournal() {
        return this?.github !== undefined && this?.href !== undefined
    }

    hasOneOfGithubOrJournal() {
        return this?.github !== undefined || this?.href !== undefined
    }
}


export class Project implements ProjectInterface {
    href;
    title;
    abbreviation;
    description;
    hero;
    publication;

    constructor(project:ProjectInterface) {
        this.href = project.href
        this.title = project.title
        this.abbreviation = project.abbreviation
        this.description = project.description
        this.hero = project.hero
        this.publication = new Publication(project.publication)
    }

    makeTextAboutLinks() {        
        return `
        You can access 
        ${this.hero.title}'s
        ${this?.publication?.github ? 'Github repository' : ''}
        ${this.publication.hasBothGithubAndJournal() ? 'and' : ''}
        ${this?.publication?.href  ? 'article page' : ''}
        by clicking the link${this.publication.hasBothGithubAndJournal() ? 's' : ''}
        below
        `
    }
}
