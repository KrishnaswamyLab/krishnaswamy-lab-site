<script lang="ts">    
    import type {PublicationCategories} from '$lib/types'
    export let categories: PublicationCategories;
</script>

<div class="text-xl font-light">
    Our research at the Krishnaswamy Lab focuses on applying machine learning methods to high-throughput high dimensional biological data. Our research projects aim to study and develop algorithmic approaches to naturally process data, visualize it, understand progressions, find phenotypic diversity, and infer patterns.  Below are our key research areas and priorities, along with some relevant projects:    
</div>
<div class="flex flex-col gap-8">
    {#each categories as {category, links}}
    <div class="flex flex-row gap-2">
        <div class="font-bold flex-1 text-xl">
            {category}
        </div>
        <div class="flex-1">
            {#each links as {href, text}, i}
                {#if href !== null}
                <a {href} class="font-light text-xl link text-blue-500 visited:text-purple-600">
                    {text}
                </a>
                {:else}
                <span class="font-light text-xl">
                    {text}
                </span>
                {/if}{i < links.length-1 ? ', ': ''}

            {/each}
        </div>
    </div>            
    {/each}
</div>