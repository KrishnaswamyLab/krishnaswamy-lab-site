<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { fly, fade } from 'svelte/transition';
    import Hero from '$lib/Layout/Hero/Hero.svelte';
    import FollowUsBtn from '$lib/Layout/FollowUsBtn.svelte';
    import JellyContainer from '$lib/Layout/JellyContainer.svelte';
    import ResearchCategoryBox from '$lib/Layout/ResearchCategoryBox.svelte';
    import AffiliationBox from '$lib/Layout/AffiliationBox.svelte';

    import BackgroundCarousel from '$lib/Layout/BackgroundCarousel.svelte';
    import BackgroundCarouselNoBtns from '$lib/Layout/BackgroundCarouselNoBtns.svelte';
    import FlowbiteCarousal from '$lib/Flowbite/FlowbiteCarousal.svelte';
    import { Carousel , CarouselTransition } from 'flowbite-svelte'
    const images = [
        '/images/yale/2015_04_21_15_53_1_Michael_Marsland.jpg',
        '/images/yale/2005_09_30_13-33-58_School_of_Medicine_Michael_Marsland.jpg',
        '/images/yale/lab_members_2019.jpeg',
        '/images/yale/2012_10_16_16-55-33_DSC_0714a_Michael_Marsland.jpg',
        '/images/yale/cold_spring_harbor_teaching_crew.png',
        '/images/yale/lab_hackathon.png',
        '/images/yale/yale_innovation_summit.png',
        '/images/yale/lab_meeting.png'
    ]
    const flowbiteImages = images.map((url, id) => ({
        id, imgurl:url, name:'hi'
    }))


import { onMount } from 'svelte'

let animate = false
onMount(() => {
    animate = true
})

const backgroundImage="/images/lab_hero.jpg"
</script>
<Hero {backgroundImage} class="md:hidden">
    <svelte:fragment slot="tagline">
        <FollowUsBtn />  
    </svelte:fragment>
</Hero>
<Hero class="hidden md:block"></Hero>

<div class="hidden md:flex flex-row ">    
    <div class="hero w-1/2 h-[36rem] bg-base-200 {$$props.class}" style="background-image: url({backgroundImage});">
        {#if backgroundImage}
              <div class="hero-overlay bg-opacity-60"></div>
        {/if}   
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl md:text-7xl font-light capitalize break-all">
                <span class="uppercase break-keep text-5xl md:text-7xl">
                    The<wbr> Krishna<wbr>swamy Lab
                </span>
            </h1>              
            <FollowUsBtn />     
          </div>
        </div>
    </div>
    <div class="w-1/2 h-[36rem]">
        <FlowbiteCarousal
            showIndicators={false}
            images={flowbiteImages}
            showCaptions={false} 
            showThumbs={true}
        />
    </div>

</div>



<div class="py-0"></div> 
{#if animate}
<div class="block md:hidden">
    <JellyContainer class="">
        <Hero>Where we work</Hero>
        <div class="flex place-content-center py-8">
            <div class="text-slate-700 leading-relaxed">
                We work across the beautiful Yale campus in New Haven, Connecticut.                       
            </div>
        </div>
        <BackgroundCarousel {images}/>
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
<!-- <div class="block md:hidden divider divider-vertical py-8"></div>  -->

<JellyContainer>

    <Hero>What we work on</Hero>
    <div class="flex place-content-center pt-8">
        <div class="text-slate-700 leading-relaxed">
            We work on developing foundational mathematical machine learning and deep learning methods that incorporate signal processing, data geometry and topology to enable exploratory analysis, scientific inference and prediction from big biomedical datasets.
        </div>
    </div>
</JellyContainer>
{/if}

{#await data?.categories}

{:then categories } 
<div class="divider divider-vertical py-16"></div> 

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
            <a href="/projects">
                <button class="btn gap-2 btn-outline uppercase">
                        Explore Lab Projects
                </button>
            </a>
        </div>
    </div>
</div>
{/if}
