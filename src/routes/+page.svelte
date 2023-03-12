<script>
/** @type {import('./$types').PageData} */
export let data;
import { fly, fade } from 'svelte/transition';
import Hero from '$lib/Layout/Hero/Hero.svelte';
import FollowUsBtn from '$lib/Layout/FollowUsBtn.svelte';
import JellyContainer from '$lib/Layout/JellyContainer.svelte';
import ResearchCategoryBox from '$lib/Layout/ResearchCategoryBox.svelte';
import AffiliationBox from '$lib/Layout/AffiliationBox.svelte';
import Carousel from '$lib/Carousal/Carousal.svelte'

import { onMount } from 'svelte'
import { goto } from '$app/navigation';

let animate = false
onMount(() => {
    animate = true
})

const backgroundImage="/images/lab_hero.jpg"

import TwitterSEO from '$lib/SEO/Twitter.svelte'
import OpenGraphSEO from '$lib/SEO/OpenGraph.svelte'
import {LabShortDescription, LabCarousalImages} from '$lib/utils'
const subtitle = ''//"on AI for Science"
</script>

<TwitterSEO/>
<OpenGraphSEO/>

<Hero {backgroundImage} class="md:hidden" {subtitle}>
    <svelte:fragment slot="tagline">
        <FollowUsBtn />  
    </svelte:fragment>
</Hero>

<Hero class="hidden md:block"></Hero>
<div class="hidden md:flex flex-row ">    
    <Hero {backgroundImage} class="hero w-1/2 h-[36rem] max-h-[36rem] bg-base-200"
        {subtitle}
    >
        <span class="uppercase break-keep text-5xl md:text-7xl">
            The<wbr> Krishna<wbr>swamy Lab
        </span>
        <svelte:fragment slot="tagline">
            <FollowUsBtn />  
        </svelte:fragment>
    </Hero>    

    <div class="w-1/2 h-[36rem]">
        <Carousel            
            images={LabCarousalImages}
            showCaptions={false}             
        />
    </div>
</div>


{#if animate}
<div class="block md:hidden">
    <JellyContainer class="">
        <Hero>Where we work</Hero>
        <div class="flex place-content-center py-8">
            <div class="text-slate-700 leading-relaxed">
                We work across the beautiful Yale campus in New Haven, Connecticut.                       
            </div>
        </div>
        <div class="h-[36rem]">
            <Carousel                
                images={LabCarousalImages}
                showCaptions={false} 
            />
        </div>        
        <!-- <BackgroundCarousel {images}/> -->
        <div class="flex place-content-center py-8">
            <div class="text-slate-700 leading-relaxed">
                Images above courtesy of Yale University, taken by Michael Marsland and 
                <a href="https://www.instagram.com/jflemingphoto/">James Fleming Photography</a>.           
            </div>
        </div>
    </JellyContainer>
    <div class="divider divider-vertical py-8"></div> 

</div>

{/if}

{#if animate}
<JellyContainer>
    <div class="flex place-content-center md:pt-8">
        <div class="
            text-slate-700 leading-relaxed
            text-xl md:text-2xl font-extralight 
            break-keep md:break-normal
        ">
            {@html LabShortDescription}
        </div>
    </div>
</JellyContainer>
{/if}

{#await data?.categories}

{:then categories } 
<div class="divider divider-vertical py-8"></div> 

<div class="flex flex-row flex-wrap justify-evenly gap-4">
    {#each categories as {title, about, examples, image}, i (i)}
        <ResearchCategoryBox                 
            {title} {about} {image}
            delay={i * 100}
        />        
    {/each}
</div>
{/await}


{#if animate}
<div
    in:fly={{y:200, delay: 100, duration: 1500}} 
    class="divider divider-vertical pt-8">
</div> 

<div 
    in:fly={{y:200, delay: 100, duration: 1500}} 
    class="flex flex-col"
>    
    <Hero>Affiliations</Hero>    
    <div class="mt-8 flex flex-row flex-wrap justify-evenly gap-4">
        {#each data?.affiliations as affiliation, i (i) }
            <AffiliationBox {affiliation} delay={i * 100}/>        
        {/each}            
    </div>
</div>

<div
    in:fly={{y:200, delay: 200, duration: 1500}} 
    class="divider divider-vertical py-8">
</div> 

<div class="hero" in:fly={{y:200, delay: 200, duration: 1500}} >
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-2xl text-black font-light">
                Click below to access the latest Krishnaswamy Lab Projects & Software
            </h1>                    
            <button class="btn gap-2 btn-outline uppercase" on:click={()=>goto('/projects')}>
                <a href="/projects" on:click={()=>goto('/projects')}>    
                    Explore Lab Projects
                </a>
            </button>
        </div>
    </div>
</div>

{/if}
