<script lang="ts">
    export let href: string;
    export let howClass:string = '';

    
import { onMount } from 'svelte'
import { fly, fade } from 'svelte/transition';
export let delay:number = 0

export let animate = false
onMount(() => {
    animate = true
})
</script>

{#if animate}
<div
    in:fly={{y:200, delay: delay, duration: 1500}}  
    class="
    card card-bordered border-slate-700 grid-cols-1
    hover:shadow-2xl transition-all ease-in-out
    duration-300 hover:-translate-y-2
    {$$props.class}
    "
>
    <div class="card-body place-items-center px-0">
        <div class="card-title">
            <span class="capitalize">
                <slot name="what">

                </slot>
            </span>
        </div>
        <a {href} class="py-2">
            <slot name="icon">

            </slot>
        </a>                        
        <a 
            {href}
            class="link link-hover break-all {howClass}"
        >
            <slot name="how">
                smita.krishnaswamy@yale.edu
            </slot>
        </a>
    </div>                    
</div>
{/if}