<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    import type { project as projectInterface } from '$lib/types';
    import { goto } from '$app/navigation';
    import ProjectInfo from '$lib/Projects/ProjectInfo.svelte';
    import ProjectHero from '$lib/Projects/ProjectHero.svelte';

    const routeTitle = (project: projectInterface) => {
        const heroTitle = project?.projectAbbreviation 
                            ? project?.projectAbbreviation 
                            : project.projectTitle
        return heroTitle
    }
</script>

<ProjectHero project={data?.project} />

<div class="flex flex-col md:flex-row justify-center">
    <div class="md:w-[72rem] block">   
        <div class="inline-flex flex-col md:flex-row ">
            <div class="w-[28rem]">  
                <div class="hidden md:block sticky top-0">
                    <span class="font-extralight text-slate-700 text-4xl">
                        Projects
                    </span>  
                    <ul class="mt-4 menu bg-base-100 text-base-content text-left">
                        {#each data?.routes as route}
                        <li class="link font-thin">
                            <a 
                                href="/projects/{route?.projectUrl}" 
                                on:click={()=>goto(`/projects/${route?.projectUrl}`)} 
                                class="
                                hover:text-slate-700
                                hover:visited:text-purple-600
                                {
                                    route?.projectUrl === data?.slug 
                                        ? "text-slate-700 visited:text-purple-600" 
                                        : "text-slate-300 visited:text-purple-300"
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
            
            <div>
                <ProjectInfo  useProjectHero="{false}" project={data?.project} />
            </div>
        </div>            
    </div>
</div>

