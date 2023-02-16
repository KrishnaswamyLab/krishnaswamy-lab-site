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
            examples: [
                {
                    text: 'MAGIC',
                    href: '/projects/magic'
                },     
                {
                    text: 'MAGAN',
                    href: '/projects/magan'
                },                 
            ],
            image: '/images/heroes/bio.png',
        },
        {
            title: 'Learning Embeddings and Representations',
            about: `Sculpting the coarse readout of experimentation towards a useful embedding preserving the data's characteristics is a fundamental problem we undertake. Our methods provide the foundations of analyzing molecules for drug discovery, images for dynamic characterization, and networks for gaining insight from knowledge graphs. 
            `,
            examples: [
                {
                    text: 'PHATE',
                    href: '/projects/phate'
                }, 
                {
                    text:'MSPHATE', 
                    href:'/projects/multiscale_phate'
                },
                {
                    text: 'SAUCIE',
                    href: '/projects/saucie'
                },   
            ],
            image: '/images/heroes/geometric_5.png'
        },
        {
            title: 'Dynamics Characterisation',
            about: `How data is acquist often limits insights which can be gleaned. For example the
static snapshots of data for an otherwise continuous process. We specialize in 
characterizing data representations to provide more holistic analyses e.g. constructing a singular representation of these static snapshots that temporally respects the entire process.
            `,
            examples: [
                {
                    text: 'MIOFlow',
                    href: '/projects/mioflow'
                }, 
                {
                    text:'TrajectoryNet', 
                    href:'/projects/trajectory_net'
                },
                {
                    text:'DyMoN', 
                    href:'/projects/dymon'
                },
            ],
            image: '/images/heroes/geometric_2.png'
        },
        {
            title: 'Learning on Graphs',
            about: `Construction of and learning from data graphs are core component of truly understanding "Big Data". We leverage a swath of techniques from signal processing to optimal transport to know how our data thoroughly inside and out so that we can denoise, impute, and study our data.`,
            examples: [
                {
                    text: 'MAGIC',
                    href: '/projects/magic'
                },                 
            ],
            image: '/images/heroes/data.png'
        },
        {
            title: 'Biomedical Systems Applications',
            about: `Combining all our prior efforts - understanding data topology, producing useful data embeddings, characterizing data dynamics - we produce state-of-the-art pipelines for biological insight. Whether it's cancers, immunology, or developmental biology we continue to unravel mysteries of biological systems.`,
            examples: [
                {
                    text: 'PhEMD',
                    href: '/projects/phemd'
                },  
                {
                    text: 'MELD',
                    href: '/projects/meld'
                },                        
            ],
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

<!-- <div class="py-8"></div>  -->
<div class="divider divider-vertical py-8"></div> 


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
                    hover:shadow-2xl transition-all ease-in-out
                            duration-300 hover:-translate-y-2                 
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
                    <div class="divider divider-vertical py-1 before:bg-white after:bg-white"></div> 
                    <div class="flex flex-row justify-evenly text-secondary-content">
                        {#each examples as example}
                        <a href="{example.href}">
                            <span class="badge badge-outline text-secondary-content badge-lg p-4">
                                {example.text}
                            </span>
                        </a>
                            
                        {/each}
                        
                    </div>
                </div>                           
            </div>
        {/each}
    </div>


<div class="divider divider-vertical py-8"></div> 

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

<div class="divider divider-vertical pt-8"></div> 


<div class="flex flex-col">
    
    <h1 class="mb-5 text-6xl text-black text-center font-light">
        Affiliations
    </h1>   
    <div class="flex flex-row flex-wrap justify-evenly gap-4">
        
        <div class="
            card card-bordered bg-base-200
            basis-2/3 md:basis-1/3 lg:basis-1/3 
            xl:basis-2/6 2xl:basis-2/12
            duration-300 hover:-translate-y-2
            "
        >
            <div class="card-body">
                <div class="card-title">
                    <a class="link link-hover" href="https://medicine.yale.edu/genetics/diversity/committee-roster/">
                        Diversity and Equity Inclusion (DEI) Group
                    </a>
                </div>
                <div>
                    The appointment of the VC, Diversity and advisory committee members permit a framework to scrutinize current practices and truly commit to change that enhances diversity. We are eager to promote diversity, equity, and inclusion including for URMs as well as intersectionality across all groups.
                </div>
            </div>
        </div>
        <div class="
            card card-bordered bg-base-200
            basis-2/3 md:basis-1/3 lg:basis-1/3 
            xl:basis-2/6 2xl:basis-2/12
            duration-300 hover:-translate-y-2
            "
        >
            <div class="card-body">
                <div class="card-title">
                    <a class="link link-hover" href="https://cbb.yale.edu/people/faculty-labs">
                        Yale Computational Biology and Bioinformatics (CBB)
                    </a>
                </div>
                <div>
                    Computational Biology and Biomedical informatics (CBB) is a rapidly developing interdisciplinary field.
                    Our program has research foci at the interface of informatics and biomedicine, genomics, and computational modeling of biological systems.
                </div>
            </div>
        </div>


        <div class="
            card card-bordered bg-base-200
            basis-2/3 md:basis-1/3 lg:basis-1/3 
            xl:basis-2/6 2xl:basis-2/12
            duration-300 hover:-translate-y-2
            "
        >
            <div class="card-body">
                <div class="card-title">
                    <a class="link link-hover" href="https://wti.yale.edu/profile/smita-krishnaswamy">
                        Wu Tsai Institute, Yale
                    </a>
                </div>
                <div>
                    The Wu Tsai Institute is an interdisciplinary research endeavor at Yale University connecting neuroscience and data science to accelerate breakthroughs in understanding cognition.
                </div>
            </div>
        </div>


        <div class="
            card card-bordered bg-base-200
            basis-2/3 md:basis-1/3 lg:basis-1/3 
            xl:basis-2/6 2xl:basis-2/12
            duration-300 hover:-translate-y-2
            "
        >
            <div class="card-body">
                <div class="card-title">
                    <a class="link link-hover" href="https://fds.yale.edu/smita-krishnaswamy/">
                        Institute for Foundations of Data Science
                    </a>
                </div>
                <div>
                    <div class="border-l-4 p-2 border-sky-500 bg-base-100">
                        <quote >
                            "Let the dataset change your mindset"
                        </quote>
                        <span class="block text-right">
                            Hans Rosling
                        </span>
                    </div>
                    

                    
                    <br/>
                
                    Yale's new Institute for Foundations of Data Science will help faculty across dozens of disciplines infuse their research with next-generation insights.

                </div>
            </div>
        </div>


        <div class="
            card card-bordered bg-base-200
            basis-2/3 md:basis-1/3 lg:basis-1/3 
            xl:basis-2/6 2xl:basis-2/12
            hover:shadow-2xl transition-all ease-in-out
            duration-300 hover:-translate-y-2
            "
        >
            <div class="card-body">
                <div class="card-title">
                    <a class="link link-hover" href="https://applied.math.yale.edu/people/smita-krishnaswamy">
                        Applied Mathematics
                    </a>
                </div>
                <div>
                    The Applied Math Program is designed in the interdisciplinary setting that provides an environment with activities occurring both within and at the boundaries of many different fields, using a variety of mathematical and computational tools.

                </div>
            </div>
        </div>
    
    </div>
</div>


<!-- <div class="divider divider-vertical pt-8"></div>  -->


