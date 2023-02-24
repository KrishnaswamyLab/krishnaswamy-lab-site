<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    import type { project as projectInterface } from '$lib/types';
    import { goto } from '$app/navigation';
    import ProjectInfo from '$lib/Projects/ProjectInfo.svelte';
    // import ProjectHero from '$lib/Projects/ProjectHero.svelte';
    import Hero from '$lib/Layout/Hero.svelte'
    const handleProjectTitle = (project: projectInterface) => {
        const heroTitle = project?.projectAbbreviation 
                            ? project?.projectAbbreviation 
                            : project.projectTitle
        return heroTitle
    }

    const routeTitle = (project: projectInterface) => {
        return handleProjectTitle(project)
    }

    $: heroTitle = handleProjectTitle(data?.project)
    $: backgroundImage = String(data?.project.heroImage)
    $: subtitle = String(data?.project?.heroBlurb)
</script>
<Hero {backgroundImage} {subtitle}>
    {heroTitle}
</Hero>

<div class="flex flex-col md:flex-row justify-center mt-8 mx-16">
    <div class="md:w-[72rem] block">   
        <div class="inline-flex flex-col md:flex-row ">
            <div class="max-w-min md:w-[16rem]  mt-4 ">  
                <div class="hidden md:block sticky top-0 ">
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
                                    href="/projects/{route?.projectUrl}" 
                                    on:click={()=>goto(`/projects/${route?.projectUrl}`)} 
                                    class="
                                    hover:text-slate-900
                                    visited:hover:text-purple-800
                                    {
                                        route?.projectUrl === data?.slug 
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
            
            <div class="md:ml-16 w-full">
                <ProjectInfo  
                    useProjectHero="{false}" 
                    project={data?.project} 
                    
                />
            </div>
        </div>            
    </div>
</div>

