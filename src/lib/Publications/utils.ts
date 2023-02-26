import type {
    Author as authorInterface,
    Publication as publicationInterface,    
} from '$lib/types'

export const makeAuthorString = (authors:authorInterface[]) => {
    let a = authors.map(({name}) => name.join(" "))
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

export const makeDateString = (pub:publicationInterface) => {
    if (pub?.year === null) return ''
    let s
    if (pub?.month && pub?.year) {
        s = `(${pub?.month}, ${pub?.year})`
    } else if (pub?.year) {
        s = `(${pub?.year})`
    } else {
        return ''
    }
    return s
}


export const makeVolumeIssueString = (pub:publicationInterface) => {
    if (pub?.volume === null) return ''
    let s = ''
    if (pub?.issue && pub?.volume) {
        s = `${pub?.issue}:<span class="font-bold">${pub?.volume}</span>.`
    } else if (pub?.volume) {
        s = `<span class="font-bold">${pub?.volume}</span>.`
    } else {
        return ''
    }
    if (pub?.pages) {
        if (pub?.pages.indexOf((pub?.volume as string)) >= 0) {
            return s
        } else {
            s += ` ${pub?.pages}`
        }

    }
    return s
}

export const makePublicationString = (pub:publicationInterface) => {
    let s = ``
    s += `${makeDateString(pub)}`
    s += ` ${makeVolumeIssueString(pub)}`

    let p = pub?.periodical ? pub?.periodical : ''
    p = p.replace(':', '')
    p = p.replace(pub?.volume as string, '')
    p = p.replace(pub?.issue as string, '')
    p = p.replace(pub?.month as string, '')
    p = p.replace(pub?.year as string, '')
    p = p.replace('|', '')
    s += ` ${p}`
    return s
}

export const makeKeywordsString = (pub:publicationInterface) => {
    let kws = pub?.keywords
    if (!kws) return ''
    return (kws as string[]).join(', ') 
}