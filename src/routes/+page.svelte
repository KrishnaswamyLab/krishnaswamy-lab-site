<script>
	import { goto } from '$app/navigation';
    import Twitter from "$lib/Icons/Twitter.svelte";

    const twitterLink = "https://twitter.com/KrishnaswamyLab"
    const toTwitter = () => {
        goto(twitterLink)
    }
    const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere 
            lectus libero, non feugiat odio finibus sed. Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Ut sollicitudin interdum metus sit amet pretium. In hac habitasse platea dictumst. Fusce 
            auctor nibh ante, porttitor commodo felis faucibus eget. Donec purus nunc, sollicitudin sed pharetra 
            quis, posuere a leo. Integer pellentesque lorem eget lobortis auctor. Nullam in tellus ac risus 
            luctus pharetra. Nunc et scelerisque erat, at sodales mauris. `
    const categories = [
        {
            title: 'Data Geometry and Topology',
            about: lipsum,
            examples: ['example 1', 'example 2', 'example 3'],
            image: '/images/lab_hero.jpg'
        },
        {
            title: 'Learning Embeddings and Representations',
            about: lipsum,
            examples: ['example 1', 'example 2', 'example 3'],
            image: '/images/lab_hero.jpg'
        },
        {
            title: 'Dynamics Characterization',
            about: lipsum,
            examples: ['example 1', 'example 2', 'example 3'],
            image: '/images/lab_hero.jpg'
        },
        {
            title: 'Learning on Graphs',
            about: lipsum,
            examples: ['example 1', 'example 2', 'example 3'],
            image: '/images/lab_hero.jpg'
        },
        {
            title: 'Biomedical Systems Applications',
            about: lipsum,
            examples: ['example 1', 'example 2', 'example 3'],
            image: '/images/lab_hero.jpg'
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
            <div class="card card-compact card-bordered bg-secondary text-secondary-content shadow-xl basis-1/4 overflow-y-scroll">
                <div class="card-body ">
                    <h2 class="card-title">{title}</h2>
                    <div><p class="line-clamp-5">{about}</p></div>
                </div>
                <figure class="">
                    <img src="{image}" alt="{`${title.toLowerCase()} image`}" />
                </figure>            
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
          <button class="btn gap-2 btn-outline uppercase">
              <a href="/projects">
                Explore Lab Projects
              </a>
          </button>
        </div>
      </div>
</div>

