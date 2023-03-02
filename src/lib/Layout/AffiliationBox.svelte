<script lang="ts">
import type {Affiliation} from '$lib/types'
export let affiliation: Affiliation;

import { onMount } from 'svelte'
import { fly, fade } from 'svelte/transition';
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
    card card-bordered bg-base-200 border-base-300
    basis-2/3 md:basis-1/3 lg:basis-2/6 
    xl:basis-1/3 2xl:basis-4/12 3xl:basis-3/12
    hover:shadow-2xl transition-all ease-in-out
    duration-300 hover:-translate-y-2 prose
    "
>
    <div class="card-body">
        <div class="card-title">
            <a class="link link-hover" href="{affiliation.href}">
                {affiliation.title}
            </a>
        </div>
        <div class="divider divider-vertical py-0 my-0">

        </div>
        <div>
            {#if affiliation?.quote}
            <div class="border-l-4 p-2 border-sky-500 bg-base-100">
                <quote >
                    "{affiliation.quote.text}"
                </quote>
                <span class="block text-right">
                    {affiliation.quote.attributed}
                </span>
            </div>
            <br/>
            {/if}
            {affiliation.about}
        </div>
    </div>
</div>
{/if}