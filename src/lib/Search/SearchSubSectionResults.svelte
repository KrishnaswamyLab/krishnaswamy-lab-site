<script lang="ts">
    import FuzzySearch from "$lib/Fuzzy/FuzzySearch.svelte"
    export let record:any
    export let query:any
</script>
<ul class="flex flex-row flex-wrap place-content-start">
{#each  [
    'about', 'genres', 'labels',
    'albums', 'artists', 'producers', 'writers', 'songs',
    'gods'
    ] as key
}
    {@const val = record[key]}
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