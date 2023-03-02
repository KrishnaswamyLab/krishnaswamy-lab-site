<script lang="ts">
import type {Publications as PublicationsInterface} from '$lib/types'
export let publications: PublicationsInterface; 
export let showKeywords: boolean = false;  

import { onMount } from 'svelte'
import { fly, fade } from 'svelte/transition';
import { flip } from 'svelte/animate';

let animate = false
onMount(() => {
    animate = true
})
</script>
{#if animate}
<ul class="w-full">
    {#each publications as pub, i (i)}
        <li class="" 
            in:fly={{y:200, delay: i * 100, duration: 1500}} 
            animate:flip
        >
            <div class="
                card card-bordered m-4 bg-base-200
                hover:shadow-2xl transition-all ease-in-out
                duration-300 hover:-translate-y-2
            ">
                <div class="card-body">
                    <div class="card-title break-word">
                        {#if pub?.href}
                        <a class="link" href={pub?.href}>
                            {pub?.title}
                        </a>   
                        {:else}
                            {pub?.title}
                        {/if}
                    </div>
                    <span>
                        {@html pub.makeAuthorString()}                                
                    </span>
                    <span>
                        {@html pub.makePublicationString()}
                    </span>   
                    {#if showKeywords && !!pub?.keywords}
                    <span class="">
                        {#each pub?.keywords as kw}
                        <div class="mr-4 mt-1 p-3 badge badge-secondary badge-outline">
                            {kw}
                        </div>    
                        {/each}                                
                        {pub.makeKeywordsString()} 
                    </span>                    
                    {/if}
                </div>
            </div>
        </li>
    {/each}

</ul>
{/if}