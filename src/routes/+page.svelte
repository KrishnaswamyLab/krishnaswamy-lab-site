<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { fly, fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import Hero from '$lib/Layout/Hero/Hero.svelte';
    import FollowUsBtn from '$lib/Layout/FollowUsBtn.svelte';
    import JellyContainer from '$lib/Layout/JellyContainer.svelte';
    import ResearchCategoryBox from '$lib/Layout/ResearchCategoryBox.svelte';
    import AffiliationBox from '$lib/Layout/AffiliationBox.svelte';
</script>

<Hero backgroundImage="/images/lab_hero.jpg" class=''>
    <span class="uppercase break-keep text-5xl md:text-7xl">
        The<wbr> Krishna<wbr>swamy Lab
    </span>
    <svelte:fragment slot="tagline">
        <FollowUsBtn />
    </svelte:fragment>
</Hero>

<div class="py-0"></div> 

<JellyContainer>
    <Hero>What we work on</Hero>
    <div class="flex place-content-center pt-8">
        <div class="text-slate-700 leading-relaxed">
            We work at the intersection of computer science, applied math, computational biology, and signal processing to develop representation-learning and deep learning methods that enable exploratory analysis, scientific inference and prediction from big biomedical datasets. 
        </div>
    </div>
</JellyContainer>


{#await data?.categories}

{:then categories } 
<div class="divider divider-vertical py-8"></div> 

<div class="flex flex-row flex-wrap justify-evenly gap-4 ">
    {#each categories as {title, about, examples, image}, i (i)}
        <ResearchCategoryBox                 
            {title} {about} {image}
            delay={i * 100}
        />        
    {/each}
</div>
{/await}



<div class="divider divider-vertical py-8"></div> 


<div class="flex flex-col">    
    <Hero>Affiliations</Hero>    
    <div class="mt-8 flex flex-row flex-wrap justify-evenly gap-4">
        {#each data?.affiliations as affiliation }
            <AffiliationBox {affiliation}/>        
        {/each}            
    </div>
</div>

<div class="divider divider-vertical pt-8"></div> 

<div class="hero">
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-2xl text-black font-light">
                Click below to access the latest Krishnaswamy Lab Projects & Software
            </h1>        
            <a href="/projects">
                <button class="btn gap-2 btn-outline uppercase">
                        Explore Lab Projects
                </button>
            </a>
        </div>
    </div>
</div>
