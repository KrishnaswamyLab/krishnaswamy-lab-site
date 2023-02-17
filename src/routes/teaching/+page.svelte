<script>
/** @type {import('./$types').PageData} */
export let data;

import JellyContainer from '$lib/Layout/JellyContainer.svelte';
import TextHero from '$lib/Layout/TextHero.svelte';
</script>
<div class="bg-primary h-16"></div>

<div class="mt-8 flex justify-center">
    <div class="mx-8 w-5/6 md:w-[48rem]">
        <div class="font-extralight text-7xl text-center mb-8">
            Selected Yale University Courses
        </div>
        {#each data?.courses as {title, about, professors, listings}}
        <div class="mt-8">
            <h2 class="font-light text-4xl my-2">
                {title}
            </h2>
            <div>
                <h3 class="font-extralight text-2xl my-2">
                    {#each professors as professor, i}
                        {professor}{i < professors.length - 1 ? " & " : ''}
                    {/each}
                </h3>
                <span class="font-semibold text-lg my-2">
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
    </div>
</div>