
<script lang="ts">
    
    import FuzzySearch from "$lib/Fuzzy/FuzzySearch.svelte"
    import Label from "$lib/Icons/Label.svelte"
    import UserCircle from "$lib/Icons/UserCircle.svelte"
    import Link from "$lib/Icons/Link.svelte"
	import { goto } from "$app/navigation";
	import { modal } from "$lib/Stores/search";

   

    const sectionIconMap = {
        'songs': MusicNote,
        'albums': PlayCircle,
        'labels': Label,
        'persons': UserCircle,
        'links': Link
    }


    const searchSectionClasses = `    
    self-start 
    py-4 p-4 border-2 rounded-xl
    focus:outline-none focus:ring 
    hover:bg-slate-100 shadow-none hover:shadow-lg 
    transition ease-in-out delay-350
    hover:-translate-y-1 hover:scale-100
    `
    //mx-4  my-4 


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
    export let query:string
    export let results:any
    export let section:any

    let searchButton = true
  
    function redirect(record) {
        if (record?.slug?.full) {
            goto(record?.slug?.full)
            modal.update(e=>false)
        }
    }

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
        <!-- max-h-96 -->
            {#each results as result, i}     
            {@const expanded = expandPocketBase(result)}   

            <li class={searchSectionClasses} on:click={redirect(expanded)}>
                {#each  ['title', 'name', 'original'] as key}
                {@const val = expanded[key]}
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
                            <a href="{result.full}">
                                <FuzzySearch {query}>{val}</FuzzySearch>
                            </a>
                            {:else}
                                <FuzzySearch {query}>{val}</FuzzySearch>                
                            {/if}
                        </span>   
                    </div>
                    {/if}
                {/each}


                <ul class="flex flex-row flex-wrap place-content-start">
                    {#each  [
                        'about', 'genres', 'labels',
                        'albums', 'artists', 'producers', 'writers', 'songs',
                        'gods'
                        ] as key
                    }
                    {@const val = expanded[key]}
                        {#if [
                            'about', 'genres', 'labels',
                            'albums', 'artists', 'producers', 'writers', 'songs',
                            'gods'
                            ].includes(key) && !!val && val?.length
                        }
                        <!-- Search section sub results -->
                        <li class="flex  flex-wrap p-1 self-start ">                            
                            {#if key === 'about' && !!val}
                            <div class="block">
                                <span class="text-xs gap-2 font-bold capitalize">{key}:</span>
                                <p class="text-gray-500">
                                    <FuzzySearch {query} class="text-xs line-clamp-2   ">
                                        {val}
                                    </FuzzySearch>
                                </p>
                            </div>
                                

                            {:else if ([
                                'genres', 'gods'
                                ].includes(key)) && !!val && val?.length
                            }
                                <div>
                                    <span class="text-xs gap-2 font-bold capitalize">{key}:</span>
                                    <ul class="text-xs gap-1 flex flex-wrap">    
                                        {#each val as sub, i}   
                                            <FuzzySearch {query} class="inline-flex text-xs">
                                                {sub}
                                            </FuzzySearch>
                                        {/each}
                                    </ul>
                                </div>
                                

                            {:else if ([
                                'albums', 'artists', 'producers', 'writers' , 'labels'
                                ].includes(key)) && !!val  && val?.length
                            }
                                <div>
                                    <span class="text-xs gap-2 font-bold capitalize">{key}:</span>
                                    <ul class="text-xs gap-1 flex flex-wrap">                        
                                        {#each val as sub, i}                           
                                            <FuzzySearch {query} class="inline-flex text-xs">
                                                {sub?.name}
                                            </FuzzySearch>
                                            <!-- {@html i < val?.length - 1 ? '<span class="font-bold">,</span>' : ''} -->
                                        {/each}
                                    </ul>
                                </div>
                                

                            {:else if (['songs'].includes(key)) && !!val && val?.length}
                            <div>
                                <span class="gap-2 text-xs font-bold capitalize">{key}:</span>
                                <ul class="flex gap-1 flex-wrap">
                                    {#each val as sub, i}   
                                        <FuzzySearch {query} class="inline-flex text-xs">
                                            {sub?.title}
                                        </FuzzySearch>
                                        <!-- {@html i < val?.length ? ',' : ''} -->
                                    {/each}
                                </ul>
                            </div>
                            {:else}
                            <!-- Not relevant -->

                            {/if}
                        </li>
                        {/if}
                    {/each}            
                </ul>
                
            </li>
                    
            {/each}                    
        </ul>
    </dd>    
</div>                
{/if}
