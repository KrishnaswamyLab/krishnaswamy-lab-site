<script lang="ts">
    import FuzzySearch from "$lib/Fuzzy/FuzzySearch.svelte"
    // export let key:any;
    export let record:any;
    export let section:any;
    export let sectionIconMap:any;
    export let query:any;
    export let result:any;
</script>

{#each  ['title', 'name', 'original'] as key}
{@const val = record[key]}
    {#if ['title', 'name', 'original'].includes(key) && !!val}
    <div class="inline-flex">
        {#if section in sectionIconMap}
        <div class="flex h-5 items-center">
            <svelte:component
                this={sectionIconMap[section]}
                class="inline-flex h-6 text-indigo-600"
            />                
        </div>  
        {/if}                                      
        <span class="flex text-base text-gray-500">
            {#if section === 'links'}
            <a href="{result?.full}">
                <FuzzySearch {query}>{val}</FuzzySearch>
            </a>
            {:else}
                <FuzzySearch {query}>{val}</FuzzySearch>                
            {/if}
        </span>   
    </div>
    {/if}
{/each}
    
   