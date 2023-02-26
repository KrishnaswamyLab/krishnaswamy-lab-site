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
    let ay = a?.publicationYear as number
    let by = b?.publicationYear as number
    return by - ay
}