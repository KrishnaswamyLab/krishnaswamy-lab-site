<script>
	import { goto } from '$app/navigation';
    import Twitter from "$lib/Icons/Twitter.svelte";

    import {openUrlInNewTab, lipsum, LabTwitterLink} from '$lib/utils'
    
    const toTwitter = () => openUrlInNewTab(LabTwitterLink)

    const categories = [
        {
            title: 'Data Geometry and Topology',
            about: lipsum,
            examples: ['example 1', 'example 2', 'example 3'],
            image: '/images/heroes/bio.png'
        },
        {
            title: 'Learning Embeddings and Representations',
            about: lipsum,
            examples: ['example 1', 'example 2', 'example 3'],
            image: '/images/heroes/geometric_5.png'
        },
        {
            title: 'Dynamics Characterization',
            about: lipsum,
            examples: ['example 1', 'example 2', 'example 3'],
            image: '/images/heroes/geometric_2.png'
        },
        {
            title: 'Learning on Graphs',
            about: lipsum,
            examples: ['example 1', 'example 2', 'example 3'],
            image: '/images/heroes/data.png'
        },
        {
            title: 'Biomedical Systems Applications',
            about: lipsum,
            examples: ['example 1', 'example 2', 'example 3'],
            image: '/images/heroes/karyotype.png'
        },
    ]
</script>
<div class="hero h-[40rem]" style="background-image: url(/images/lab_hero.jpg);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold uppercase">
            The Krishnaswamy Lab at Yale University
        </h1>        
        <button class="btn gap-2 btn-outline text-accent-content uppercase" on:click={toTwitter}>
            <Twitter class="h-6 w-6  stroke-sky-400 fill-sky-400" />
            Follow us on Twitter
        </button>
      </div>
    </div>
</div>

<div class="py-8"></div> 

<div class="hero">
    <div class="flex flex-row flex-wrap justify-evenly gap-4 ">
        {#each categories as {title, about, examples, image}, i}
            <div 
                class="
                    card relative z-10 
                    grid card-compact card-bordered 
                    text-secondary-content 
                    shadow-xl basis-2/3 md:basis-1/3 lg:basis-1/4 
                    xl:basis-1/6 2xl:basis-4/12
                    overflow-y-scroll
                    bg-secondary 
                    
                "
            >
                <div class="
                    relative bg-black flex place-content-center 
                    justify-center row-span-full col-span-full
                    opacity-50
                    "
                >

                </div>
                <div class="                        
                    flex place-content-center justify-center 
                    row-span-full col-span-full
                    object-cover
                    " 
                >
                <figure class=" object-cover aspect-video">
                    <img 
                        class="h-full w-full object-cover"
                        src="{image}" 
                        alt="{`${title.toLowerCase()} image`}" 
                    />
                </figure> 
                </div>
                

                <div class="card-body z-20 relative row-span-full col-span-full">
                    <h2 class="card-title break-words">{title}</h2>
                    <div><p class="line-clamp-5">{about}</p></div>
                </div>                           
            </div>
        {/each}
    </div>
</div>

<div class="divider divider-vertical pt-8"></div> 

<div class="hero">
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-2xl font-light">
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

