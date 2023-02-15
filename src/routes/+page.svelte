<script>
	import { goto } from '$app/navigation';
    import Twitter from "$lib/Icons/Twitter.svelte";

    import {openUrlInNewTab, lipsum, LabTwitterLink} from '$lib/utils'
    
    const toTwitter = () => openUrlInNewTab(LabTwitterLink)

    const categories = [
        {
            title: 'Data Geometry and Topology',
            about: `Following the manifold hypothesis we develop and employ methodologies 
for understanding the topology of high dimensional data in it's native space. Our techniques span from the application of the diffusion operator to neural manifold learning`,
            examples: ['example 1', 'example 2', 'example 3'],
            image: '/images/heroes/bio.png',
        },
        {
            title: 'Learning Embeddings and Representations',
            about: `Sculpting the coarse readout of experimentation towards a useful embedding preserving the data's characteristics is a fundamental problem we undertake. Our methods provide the foundations of analyzing molecules for drug discovery, images for dynamic characterization, and networks for gaining insight from knowledge graphs. 
            `,
            examples: ['example 1', 'example 2', 'example 3'],
            image: '/images/heroes/geometric_5.png'
        },
        {
            title: 'Dynamics Characterisation',
            about: `How data is acquist often limits insights which can be gleaned. For example the
static snapshots of data for an otherwise continuous process. We specialize in 
characterizing data representations to provide more holistic analyses e.g. constructing a singular representation of these static snapshots that temporally respects the entire process.
            `,
            examples: ['example 1', 'example 2', 'example 3'],
            image: '/images/heroes/geometric_2.png'
        },
        {
            title: 'Learning on Graphs',
            about: `Construction of and learning from data graphs are core component of truly understanding "Big Data". We leverage a swath of techniques from signal processing to optimal transport to know how our data thoroughly inside and out so that we can denoise, impute, and study our data.`,
            examples: ['MAGIC', 'example 2', 'example 3'],
            image: '/images/heroes/data.png'
        },
        {
            title: 'Biomedical Systems Applications',
            about: `Combining all our prior efforts - understanding data topology, producing useful data embeddings, characterizing data dynamics - we produce state-of-the-art pipelines for biological insight. Whether it's cancers, immunology, or developmental biology we continue to unravel mysteries of biological systems.`,
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


    <div class="flex flex-row flex-wrap justify-evenly gap-4 ">
        {#each categories as {title, about, examples, image}, i}
            <div 
                class="
                    card relative z-10 
                    grid card-compact card-bordered 
                    text-secondary-content 
                    shadow-xl basis-2/3 md:basis-1/3 lg:basis-1/3 
                    xl:basis-2/6 2xl:basis-2/12
                    overflow-y-scroll
                    bg-secondary                     
                "
            >
                <div class="
                    relative bg-black flex place-content-center 
                    justify-center row-span-full col-span-full
                    opacity-60
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
                    <h2 class="card-title break-words text-2xl">{title}</h2>
                    <div><p class="text-lg">{about}</p></div>
                </div>                           
            </div>
        {/each}
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

