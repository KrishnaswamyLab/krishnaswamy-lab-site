<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import FollowUsBtn from '$lib/Layout/FollowUsBtn.svelte';
    import Hero from '$lib/Layout/Hero.svelte';
</script>

<Hero backgroundImage="/images/lab_hero.jpg">
    <span class="uppercase">The Krishnaswamy Lab</span>
    <svelte:fragment slot="tagline">
        <FollowUsBtn />
    </svelte:fragment>
</Hero>


<div class="py-8"></div> 
<!-- <div class="divider divider-vertical py-8"></div>  -->


    <div class="flex flex-row flex-wrap justify-evenly gap-4 ">
        {#each data?.categories as {title, about, examples, image}, i}
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
                    
                    <!-- 
                    <div class="divider divider-vertical py-1 before:bg-white after:bg-white"></div>                     
                    <div class="flex flex-row justify-evenly text-secondary-content">
                        {#each examples as example}
                        <a href="{example.href}">
                            <span class="badge badge-outline text-secondary-content badge-lg p-4">
                                {example.text}
                            </span>
                        </a>                            
                        {/each}                        
                    </div> -->

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
    
    <h1 class="mb-8 text-6xl text-black text-center font-light">
        Affiliations
    </h1>   
    <div class="flex flex-row flex-wrap justify-evenly gap-4">
        {#each data?.affiliations as affiliation }
        <div class="
            card card-bordered bg-base-200 border-base-300
            basis-2/3 md:basis-1/3 lg:basis-1/3 
            xl:basis-2/6 2xl:basis-2/12
            hover:shadow-2xl transition-all ease-in-out
            duration-300 hover:-translate-y-2 prose
            "
        >
            <div class="card-body">
                <div class="card-title">
                    <a class="link link-hover" href="{affiliation.href}">
                        {affiliation.title}
                    </a>
                </div>
                <div class="divider divider-vertical py-0 my-0">

                </div>
                <div>
                    {#if affiliation?.quote}
                    <div class="border-l-4 p-2 border-sky-500 bg-base-100">
                        <quote >
                            "{affiliation.quote.text}"
                        </quote>
                        <span class="block text-right">
                            {affiliation.quote.attributed}
                        </span>
                    </div>
                    <br/>
                    {/if}
                    {affiliation.about}
                </div>
            </div>
        </div>
        {/each}
            
    </div>
</div>


<!-- <div class="divider divider-vertical pt-8"></div>  -->


