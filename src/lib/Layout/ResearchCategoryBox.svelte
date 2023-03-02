<script lang="ts">
import { onMount } from 'svelte'
import { fly, fade } from 'svelte/transition';

import type {Links} from '$lib/types'
export let about: string;
export let title: string;
export let image: string;
export let examples: Links = [];
export let showExamples: boolean = false;
export let delay:number = 0

let animate = false
onMount(() => {
    animate = true
})
</script>

{#if animate}
<div 
    in:fly={{y:200, delay: delay, duration: 1500}} 
    class="
        card relative z-10 
        grid card-compact card-bordered 
        text-secondary-content 
        shadow-xl                     
        overflow-y-scroll
        bg-secondary    
        hover:shadow-2xl transition-all ease-in-out
        duration-300 hover:-translate-y-2    
            
        basis-2/3 md:basis-1/3 lg:basis-1/3 
        xl:basis-2/6 2xl:basis-2/12            
    "
    >
    <div class="
        relative bg-black flex place-content-center 
        justify-center row-span-full col-span-full
        opacity-60
        "
    >
    </div>
    <div class="                        
        flex place-content-center justify-center 
        row-span-full col-span-full
        object-cover
        " 
    >
        <figure class=" object-cover aspect-video">
            <img 
                class="h-full w-full object-cover"
                src="{image}" 
                alt="{`${title?.toLowerCase()} image`}" 
            />
        </figure> 
    </div>


    <div class="card-body z-20 relative row-span-full col-span-full">
        <h2 class="card-title break-words text-2xl">{title}</h2>
        <div><p class="text-lg">{about}</p></div>
        
        {#if showExamples && examples}
            <div class="divider divider-vertical py-1 before:bg-white after:bg-white"></div>                     
            <div class="flex flex-row justify-evenly text-secondary-content">
                {#each examples as example}
                <a href="{example.href}">
                    <span class="badge badge-outline text-secondary-content badge-lg p-4">
                        {example.text}
                    </span>
                </a>                            
                {/each}                        
            </div>
        {/if}
    </div>                                
</div>
{/if}
