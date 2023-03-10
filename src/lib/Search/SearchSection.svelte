
<script lang="ts">
    import { goto } from "$app/navigation";
    import { modal } from "$lib/Stores/search";

    // Icons
    import Link from "$lib/Icons/Link.svelte"
    import Label from "$lib/Icons/Label.svelte"
    import UserCircle from "$lib/Icons/UserCircle.svelte"
    import AcademicCap from "$lib/Icons/AcademicCap.svelte"
    
    import FuzzySearch from "$lib/Fuzzy/FuzzySearch.svelte"
	
	
    // Props
    export let query:string
    export let results:any
    export let section:any

    const sectionIconMap = {
        'affiliations': Label,
        'courses': AcademicCap,
        'members': UserCircle,
        'projects': AcademicCap,
        'publications': Link
    }


    const searchSectionClasses = `    
    self-start 
    py-4 p-4 border-2 rounded-xl
    focus:outline-none focus:ring 
    hover:bg-slate-100 shadow-none hover:shadow-lg 
    transition ease-in-out delay-350
    hover:-translate-y-1 hover:scale-100
    `
    
    

    

    
const searchSubOrder = `
title name original about 
albums artists producers writers 
labels genres songs gods
`.split(' ')

const expandPocketBase = obj => {
    let expanded = Object.fromEntries([   
        ...Object
            .entries(obj)
            .filter(([key, val]) => 
                key !== 'expand' && searchSubOrder.includes(key)
            ), 
        ...Object
            .entries(obj?.expand)
    ])           
    return expanded
}

const expandPocketBaseEntries = obj => {
    let expanded = expandPocketBase(obj)
    // Object.entries(expandPocketBase(result))
    return searchSubOrder.map(k=>[k, expanded[k]])
}

function redirect(record) {
    if (record?.slug?.full) {
        goto(record?.slug?.full)
        modal.update(e=>false)
    }
}

    
  
import SearchSubSectionHeader from "$lib/Search/SearchSubSectionHeader.svelte"
import SearchSubSectionResults from "$lib/Search/SearchSubSectionResults.svelte"
</script>

{#if Array.isArray(results) && results.length}  
<div class="w-full border-t border-gray-200 flex">

    <dt class="
        h-12 capitalize text-lg sticky top-0 
        w-1/12
        break-word text-left 
        "
    >
        {section}
    </dt> 
    <dd class="w-11/12 mx-8  py-2">
        <ul class="                
            text-sm text-gray-500  
            grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3
            3xl:grid-cols-4 gap-4 flex-wrap
            px-8 pt-4   overflow-y-auto snap-y snap-start 
            "        
        >     
            {#each results as result, i}     
            {@const expanded = expandPocketBase(result)}  
            <li 
                class={searchSectionClasses} 
                on:click={()=>redirect(expanded)}
                on:keydown={()=>redirect(expanded)}
            >
                <SearchSubSectionHeader
                    record={expanded}
                    {section}
                    {sectionIconMap}
                    {query}
                    {result}
                />
                <SearchSubSectionResults
                    record={expanded}
                    {query}
                />
            </li>
            {/each}                    
        </ul>        
    </dd>    
</div>                
{/if}
