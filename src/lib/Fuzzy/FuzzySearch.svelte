<script lange="ts">
    import {fuzzyString} from '$lib/Fuzzy/FuzzyFunctions'
    
    let data;
    
    $: haystack = data?.innerText ? data?.innerText : '' 
    export let query;
    
    $: fuzzy = fuzzyString(query, haystack)?.parts

    // $: console.log(haystack, query, fuzzy)
    export const defaultClasses = 'font-normal text-base'
    // NOTE: text that is not apart of input
    export const fuzzyClasses = ''
    // NOTE: text that is apart of input
    export const inputClasses = 'font-bold text-slate-900 underline decoration-2 decoration-slate-900 hover:text-indigo-500 hover:decoration-indigo-500'
    // NOTE: text that maybe is a part of the input
    //underline decoration-2 decoration-slate-600
    //italic text-slate-600 hover:text-indigo-500 hover:decoration-indigo-500
    export const suggestionClasses = 'text-slate-600'
</script>


<div class="inline-flex flex-wrap">
    <div class="hidden" bind:this={data}>
        <slot></slot>
    </div>
    {#if !!fuzzy && Array.isArray(fuzzy) && fuzzy?.length}
    <div class="inline-block {defaultClasses} {$$props.class}">
        {#each fuzzy as {content, type}, i}
        {#if type === 'input'}
        <strong class={inputClasses}>{content}</strong>
        {:else if type === 'fuzzy'}
        <span class={fuzzyClasses}>{content}</span>
        {:else if type === 'suggestion'}
        <span class={suggestionClasses}>{content}</span>
        {:else}
        <span>???</span>
        {/if}
        {/each}
    </div>      
    {:else} 
    <div class="inline-flex {defaultClasses} {$$props.class}">
        <span class={fuzzyClasses}>{haystack}</span>
    </div>
    {/if}        
</div>