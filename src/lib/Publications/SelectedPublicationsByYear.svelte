<script lang="ts">
import type {
    Publication as PublicationInterface, 
    Publications as PublicationsInterface, 
    PublicationsGroupedByYear
} from '$lib/types'
export let publications: PublicationsInterface;

$: years = {} as PublicationsGroupedByYear

$: publications.forEach((pub:PublicationInterface) => {
    let year = String(pub?.year as number)
    
    if (!(year in years)) {
        years[year] = [] as PublicationsInterface;
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
                </div>
                {/each}
            </div>  
        </div>
    </div>
    {/each}
</div>