<script lang="ts">
import type {Publication, Publications, PublicationsGroupedByYear} from '$lib/types'

import {makeAuthorString, makePublicationString} from '$lib/Publications/utils'

export let publications: Publications;

$: years = {} as PublicationsGroupedByYear

$: publications.forEach((pub:Publication) => {
    let year = String(pub?.year as number)
    
    if (!(year in years)) {
        years[year] = [] as Publications;
    }
    
    years[year].push(pub)
            
});
</script>

<div class="">            
    {#each Object.entries(years).reverse() as [year, pubs]}
    <div>
        <div class="grid grid-flow-col auto-cols-auto py-4">
            <div class="text-4xl font-extralight col-auto">
                <div class="sticky top-0 ">
                    {year}
                </div>                        
            </div>
            <div class="ml-16 col-auto">
                {#each pubs as pub}
                <div class="pb-4">
                    <div class="card-title break-word">
                        {#if pub?.urls?.length}
                        <a class="link" href={pub?.urls[0]?.href}>
                            {pub?.title}
                        </a>   
                        {:else}
                            {pub?.title}
                        {/if}
                    </div>
                    <span>
                        {@html makeAuthorString(pub?.authors)}                                
                    </span>
                    <span>
                        {@html makePublicationString(pub)}
                    </span>   
                </div>
                {/each}
            </div>  
        </div>
    </div>
    {/each}
</div>