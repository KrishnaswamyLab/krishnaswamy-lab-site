import { goto } from '$app/navigation';
import { browser } from '$app/environment';

export const openUrlInNewTab = (url:string) => {
    if (
        browser &&
        (window !== null) && 
        (typeof window !== "undefined")
    ) {                                        
        const res = window.open(url, '_blank')
        res?.focus()            
    } else {
        goto(url)
    }
}

export const LabTwitterLink = 'https://twitter.com/KrishnaswamyLab'
export const LabGitHubLink = 'https://github.com/KrishnaswamyLab'

export const toTwitter = () => openUrlInNewTab(LabTwitterLink)
export const toGitHub = () => openUrlInNewTab(LabGitHubLink)

let labshortdescription = `We work on developing foundational mathematical <span class="font-bold text-sky-400">machine learning</span> and`
labshortdescription += ` <span class="font-bold text-sky-400">deep learning</span> methods that incorporate signal processing, <span class="font-bold text-sky-400">data geometry and topology</span> to enable exploratory analysis,`
labshortdescription += ` scientific inference and prediction from <span class="font-bold text-sky-400">big biomedical datasets</span>.`
export const LabShortDescription = labshortdescription

export const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere 
    lectus libero, non feugiat odio finibus sed. Lorem ipsum dolor sit amet, consectetur adipiscing 
    elit. Ut sollicitudin interdum metus sit amet pretium. In hac habitasse platea dictumst. Fusce 
    auctor nibh ante, porttitor commodo felis faucibus eget. Donec purus nunc, sollicitudin sed pharetra 
    quis, posuere a leo. Integer pellentesque lorem eget lobortis auctor. Nullam in tellus ac risus 
    luctus pharetra. Nunc et scelerisque erat, at sodales mauris. `



import type {ComponentMap as ComponentMapInterface} from '$lib/types'

import ShieldColab from "$lib/Shields/Colab.svelte";
import ShieldForms from "$lib/Shields/Forms.svelte";
import ShieldGitHub from "$lib/Shields/GitHub.svelte";

export const ShieldComponentMap: ComponentMapInterface = {    
    'Colab': ShieldColab,
    'Forms': ShieldForms,
    'GitHub': ShieldGitHub,
}

import type {
    Publication as PublicationInterface,
} from '$lib/types'

export const SortPublicationsByYear = (
    pubA: PublicationInterface, pubB: PublicationInterface
) => {
    let yearA = pubA?.year as number
    let yearB = pubB?.year as number
    return yearB - yearA
}

import type {
    Project as ProjectInterface,
} from '$lib/types'

export const SortProjectByYear = (a:ProjectInterface, b:ProjectInterface) => {
    let ay = Number(a?.publication?.year)
    let by = Number(b?.publication?.year)
    ay = ay ? ay : 0
    by = by ? by : 0 
    return by - ay
}




import type {GlobResults} from '$lib/types'

export const LoadGlobsOneByOne = async (globs: GlobResults) => {
    let results = []
    for (const path in globs) {
        let data = await globs[path]()
        results.push(data)
    }
    return results
}

export const LoadGlobsAllAtOnces = async (globs: GlobResults) => {
    let results = await Promise.all(Object.values(globs).map(fn=>fn()))
    return results
}



import type {Member as MemberInterface} from '$lib/types'
import {Member} from '$lib/classes'

export const SortMemberByPI = (a:MemberInterface, b:MemberInterface) => {   
    if (b.name.first === 'Smita') return 5
    return -1
}
export const SortMemberByName = (a:MemberInterface, b:MemberInterface) => {   
    let v = SortMemberByPI(a, b)  
    a = new Member(a)
    b = new Member(b)
    return v + (a.makeNameStr() < b.makeNameStr() ? -1 : 0)
}
export const SortMemberByImage = (a:MemberInterface, b:MemberInterface) => {
    let doesAHaveImage = a?.image ? 1 : -1
    let doesBHaveImage = b?.image ? 1 : 0
    let imageFirst = doesBHaveImage - doesAHaveImage      
    return imageFirst
}