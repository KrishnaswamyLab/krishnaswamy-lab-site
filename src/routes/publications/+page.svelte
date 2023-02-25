<script lang="ts">
/** @type {import('./$types').PageData} */
export let data;

import type {
    author as authorInterface,
    publication as publicationInterface,
    publications
} from '$lib/types'

import { onMount } from 'svelte';

const makeAuthorString = (authors:authorInterface[]) => {
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

const makeDateString = (pub:publicationInterface) => {
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


const makeVolumeIssueString = (pub:publicationInterface) => {
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

const makePublicationString = (pub:publicationInterface) => {
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

const makeKeywordsString = (pub:publicationInterface) => {
    let kws = pub?.keywords
    if (!kws) return ''
    return (kws as string[]).join(', ') 
}

import Hero from '$lib/Layout/Hero.svelte';
import JellyContainer from '$lib/Layout/JellyContainer.svelte';
import D3Graph from '$lib/D3Graph.svelte';

interface res {
        [key: string]: publications;
    }

$: years = {} as res

$: data?.selectedPublications.forEach((pub:publicationInterface) => {
    let year = String(pub?.year as number)
    
    if (!(year in years)) {
        years[year] = [] as publications;
    }
    
    years[year].push(pub)
            
});



</script>


<Hero backgroundImage="/images/publications_hero.jpeg">
    Research
</Hero>
<JellyContainer>
    <div class="flex flex-col place-items-center gap-8 mt-8">
        <div class="text-2xl font-light">
            You can access the lab's Google Scholar profile by clicking the link below:
        </div>
        <a href="https://scholar.google.com/citations?user=l2Pr9m8AAAAJ&hl=en&oi=ao">
            <img class="h-12" src="/images/journals/google_scholar.jpeg" alt="">
        </a>
        <div class="divider divider-vertical"></div>
        <div class="text-xl font-light">
            Our research at the Krishnaswamy Lab focuses on applying machine learning methods to high-throughput high dimensional biological data. Our research projects aim to study and develop algorithmic approaches to naturally process data, visualize it, understand progressions, find phenotypic diversity, and infer patterns.  Below are our key research areas and priorities, along with some relevant projects:    
        </div>
        <div class="flex flex-col gap-8">
            {#each data?.categories as {category, links}}
            <div class="flex flex-row gap-2">
                <div class="font-bold flex-1 text-xl">
                    {category}
                </div>
                <div class="flex-1">
                    {#each links as {href, text}, i}
                        {#if href !== null}
                        <a {href} class="font-light text-xl link text-blue-500 visited:text-purple-600">
                            {text}
                        </a>
                        {:else}
                        <span class="font-light text-xl">
                            {text}
                        </span>
                        {/if}{i < links.length-1 ? ', ': ''}

                    {/each}
                </div>
            </div>            
            {/each}
        </div>

        <div class="divider divider-vertical"></div>
        
        
        <div class="text-5xl font-light text-center">
            Selected Publications
        </div>

        <div class="w-full">
            <D3Graph graph={data?.selectedGraph}/>    
        </div>
        
        <div class="">            
            {#each Object.entries(years).reverse() as [year, pubs]}
            <div>
                <div class="grid grid-flow-col auto-cols-auto py-4">
                    <div class="text-4xl font-extralight col-auto">
                        <div class="sticky top-0 ">
                            {year}
                        </div>                        
                    </div>
                    <div class="ml-16 col-auto">
                        {#each pubs as pub}
                        <div class="pb-4">
                            <div class="card-title break-word">
                                {#if pub?.urls?.length}
                                <a class="link" href={pub?.urls[0]?.href}>
                                    {pub?.title}
                                </a>   
                                {:else}
                                    {pub?.title}
                                {/if}
                            </div>
                            <span>
                                {@html makeAuthorString(pub?.authors)}                                
                            </span>
                            <span>
                                {@html makePublicationString(pub)}
                            </span>   
                        </div>
                        {/each}
                    </div>  
                </div>
            </div>
            {/each}
        </div>


        <ul class="w-full">
            {#each data?.selectedPublications as pub}
                <li class="">
                    <div class="
                        card card-bordered m-4 bg-base-200
                        hover:shadow-2xl transition-all ease-in-out
                        duration-300 hover:-translate-y-2
                    ">
                        <div class="card-body">
                            <div class="card-title break-word">
                                {#if pub?.urls?.length}
                                <a class="link" href={pub?.urls[0]?.href}>
                                    {pub?.title}
                                </a>   
                                {:else}
                                    {pub?.title}
                                {/if}
                            </div>
                            <span>
                                {@html makeAuthorString(pub?.authors)}                                
                            </span>
                            <span>
                                {@html makePublicationString(pub)}
                            </span>   
                            <!-- <span class="">
                                {#each pub?.keywords as kw}
                                <div class="mr-4 mt-1 p-3 badge badge-secondary badge-outline">
                                    {kw}
                                </div>    
                                {/each}                                
                                {makeKeywordsString(pub)} 
                            </span>                     -->
                        </div>
                    </div>
                </li>
            {/each}

        </ul>
    </div>    
</JellyContainer>