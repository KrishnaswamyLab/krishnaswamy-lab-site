<script>

    const categories = [
        {
            category: 'Unsupervised Deep Learning',
            links: [
                {
                    href:"/projects/saucie",
                    text: 'SAUCIE'
                },
                {
                    href:"/projects/dymon",
                    text: 'DyMoN'
                }
            ]
        },
        {
            category: 'Manifold Learning and Data Geometry',
            links: [
                {
                    href:"/projects/magic",
                    text: 'MAGIC'
                },
                {
                    href:"/projects/phate",
                    text: 'PHATE'
                },
                {
                    href:"/projects/saucie",
                    text: 'SAUCIE'
                },
                {
                    href:"/projects/sugar",
                    text: 'SUGAR'
                },
            ]
        },
        {
            category: 'Graph Signal Processing and Filtering',
            links: [
                {
                    href: null,
                    text: 'Diffusion Maps'
                },
                {
                    href:"/projects/magic",
                    text: 'MAGIC'
                },
                {
                    href:"/projects/phate",
                    text: 'PHATE'
                },
            ]
        },
        {
            category: 'Information Theory and Gene Logic',
            links: [
                {
                    href:"/projects/dremi",
                    text: 'DREMI'
                },
                {
                    href:"/projects/magic",
                    text: 'MAGIC'
                }
            ]
        },        
        {
            category: 'Single-Cell, High-Throughput, and High-Dimensional Data',
            links: [
                {
                    href: null,
                    text: 'Single-cell RNA sequencing (e.g. 10x genomics)'
                },
                {
                    href: null,
                    text: 'CyTOF'
                }
            ]
        },
        {
            category: 'Biological Systems',
            links: [
                {
                    href: null,
                    text: 'Developmental (Embryoid Bodies, Brain organoids, Mouse Brain, Hematopoiesis)'
                },
                {
                    href: null,
                    text: 'Immunology (Dengue, Zika, HIV, Cancer Immunotherapy, Lupus, Type 1 Diabetes)'
                },
                {
                    href: null,
                    text: 'Cancer (EMT, Immunotherapy)'
                }
            ]
        },
    ]
</script>

<div class="hero h-[40rem]" style="background-image: url(/images/publications_hero.jpeg);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold uppercase">
            Research
        </h1>        
      </div>
    </div>
</div>

<div class="flex flex-col  place-items-center gap-8 mt-8">
    <div class="max-w-max w-[48rem] mx-8 flex flex-col gap-8 place-items-center">

        <div class="text-2xl font-light">
            You can access the lab's Google Scholar profile by clicking the link below:
        </div>

        <a href="https://scholar.google.com/citations?user=l2Pr9m8AAAAJ&hl=en&oi=ao">
            <img class="h-12" src="/images/journals/google_scholar.jpg" alt="">
        </a>

        <div class="divider divider-vertical"></div>
        
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

        <div class="divider divider-vertical"></div>


        <div class="text-5xl font-light">
            Selected Publications
        </div>


    </div>
</div>