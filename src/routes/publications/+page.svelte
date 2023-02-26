<script lang="ts">
/** @type {import('./$types').PageData} */
export let data;

import Hero from '$lib/Layout/Hero.svelte';
import JellyContainer from '$lib/Layout/JellyContainer.svelte';
import PublicationCategories from '$lib/Publications/PublicationCategories.svelte';
import SelectedPublicationsAsCards from '$lib/Publications/SelectedPublicationsAsCards.svelte';
import SelectedPublicationsByYear from '$lib/Publications/SelectedPublicationsByYear.svelte';
// import D3Graph from '$lib/D3Graph.svelte';
</script>


<Hero backgroundImage="/images/publications_hero.jpeg">
    Research
</Hero>
<JellyContainer>
    <div class="flex flex-col place-items-center gap-8 mt-8">

        <div class="text-2xl font-light">
            You can access the lab's Google Scholar profile by clicking the link below:
        </div>
        <a href="https://scholar.google.com/citations?user=l2Pr9m8AAAAJ&hl=en&oi=ao">
            <img class="h-12" src="/images/journals/google_scholar.jpeg" alt="">
        </a>
        <div class="divider divider-vertical"></div>
        
        <!-- <PublicationCategories categories={data?.publicationCategories}/> -->
        <!-- <div class="divider divider-vertical"></div> -->
                        
        <div class="text-5xl font-light text-center">
            Selected Publications
        </div>

        <!-- <div class="w-full"><D3Graph graph={data?.selectedGraph}/></div> -->
        <!-- <SelectedPublicationsByYear publications={data?.selectedPublications} />   -->
        <SelectedPublicationsAsCards publications={data?.selectedPublications} />        
    </div>    
</JellyContainer>