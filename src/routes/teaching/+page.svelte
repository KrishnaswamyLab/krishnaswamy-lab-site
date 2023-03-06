<script>
/** @type {import('./$types').PageData} */
export let data;

import JellyContainer from '$lib/Layout/JellyContainer.svelte';
import Hero from '$lib/Layout/Hero/Hero.svelte';

let backgroundImage = "/images/heroes/teaching_hero.jpg"

import TwitterSEO from '$lib/SEO/Twitter.svelte'
import OpenGraphSEO from '$lib/SEO/OpenGraph.svelte'

</script>

<TwitterSEO
    title="Selected teaching of Smita Krishnaswamy"
    url="https://www.krishnaswamylab.org/teaching"
/>
<OpenGraphSEO
    title="Selected teaching of Smita Krishnaswamy"
    url="https://www.krishnaswamylab.org/teaching"
/>

<Hero {backgroundImage}>
    Teaching
</Hero>
<!-- <Hero></Hero> -->

<JellyContainer class="mt-8">
    <Hero class="break-keep">
        Selected Yale<wbr> Uni<wbr>versity Courses
    </Hero>
    <!-- <div class="mt-8 flex flex-col place-content-center place-items-center"> -->
        {#each data?.courses as {title, about, professors, listings}}
        <div class="mt-8">
            <!-- prose -->
            <h2 class="font-light text-2xl md:text-4xl my-2">
                {title}
            </h2>
            <div>
                <h3 class="font-extralight text-xl md:text-2xl my-2">
                    {#each professors as professor, i}
                        {professor}{i < professors.length - 1 ? " & " : ''}
                    {/each}
                </h3>
                <span class="font-semibold text-md md:text-lg my-2">
                    {#each listings as listing, i}
                        {listing}{i < listings.length - 1 ? "/" : ''}
                    {/each}
                </span>
            </div>            
            <p class="my-2">
                {about}
            </p>
        </div>        
        {/each}
    <!-- </div>     -->
    
</JellyContainer>