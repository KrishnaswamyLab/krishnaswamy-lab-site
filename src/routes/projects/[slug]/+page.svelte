<script lang="ts">
    /** @type {import('./$types').PageData} */
    import type {ProjectData} from './+page'
    export let data: ProjectData;
    import { goto } from '$app/navigation';

    import type { Project } from '$lib/types';
    import { Project as ProjectClass } from '$lib/classes';
    import ProjectInfo from '$lib/Projects/ProjectInfo.svelte';    
    import Hero from '$lib/Layout/Hero/Hero.svelte'
    const handleProjectTitle = (project: Project) => {
        const heroTitle = project.hero.title
        return heroTitle
    }

    interface Route {
        title:string;
        href?:string;
        abbreviation?:string;
    }
    const routeTitle = (project: Route) => {
        return project.abbreviation ? project.abbreviation : project.title
    }

    $: heroTitle = handleProjectTitle(data?.project)
    $: backgroundImage = String(data?.project.hero.image)
    $: subtitle = String(data?.project?.hero.blurb)

    import TwitterSEO from '$lib/SEO/Twitter.svelte'
	import OpenGraphSEO from '$lib/SEO/OpenGraph.svelte'
</script>

<TwitterSEO
    url="https://www.KrishnaswamyLab.org/projects/{data?.slug}"
    title="Kirshnaswamy Lab: {heroTitle}"
    description="{heroTitle}: {subtitle}. {data?.project?.publication?.abstract?.slice(0,300)}..."
    image="{data?.project?.hero?.image}"
    author={data?.project?.publication?.authors.join(', ')}
/>
<OpenGraphSEO
    url="https://www.KrishnaswamyLab.org/projects/{data?.slug}"
    title="Kirshnaswamy Lab: {heroTitle}"
    description="{heroTitle}: {subtitle}. {data?.project?.publication?.abstract?.slice(0,300)}..."
    image="{data?.project?.hero?.image}"
    articleAuthor={data?.project?.publication?.authors.join(', ')}
/>



<Hero {backgroundImage} {subtitle}>
    {heroTitle}
</Hero>

<div class="flex flex-col md:flex-row justify-center mt-8 mx-16">
    <div class="max-w-min lg:w-[16rem] mt-4">  
        <div class="hidden lg:block sticky top-0 ">
            <span class="font-extralight text-slate-700 text-4xl">
                <a href="/projects">
                    Projects
                </a>
            </span>  
            <div class="overflow-y-scroll  h-screen">
                <ul class="mt-4 menu bg-base-100 text-content-base text-left  ">
                    {#each data?.routes as route}
                    <li class="link font-thin">
                        <a 
                            href="/projects/{route?.href}" 
                            on:click={()=>goto(`/projects/${route?.href}`)} 
                            class="
                            hover:text-slate-900
                            visited:hover:text-purple-800
                            {
                                route?.href === data?.slug 
                                    ? "text-slate-800 visited:text-purple-700" 
                                    : "text-slate-400 visited:text-purple-400"
                            }
                            "
                            
                        >
                            {routeTitle(route)}
                        </a>
                    </li>    
                    {/each}                                        
                </ul>    
            </div>
            
        </div>                              
    </div> 

    <div class="lg:ml-16">  
        <ProjectInfo  
            useProjectHero="{false}" 
            project={data?.project}                     
        />
    </div>
</div>

