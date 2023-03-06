<script lang="ts">
    import type {
        Project as ProjectInterface
    } from '$lib/types'
    
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';

    import Hero from '$lib/Layout/Hero/Hero.svelte'

    import GitHub from '$lib/Icons/GitHub.svelte';
    import Youtube from "svelte-youtube-embed";    
    
    export let project: ProjectInterface
    export let useProjectHero = true
    export let contentWidthClasses = ''
    
    const youtubeId = project?.publication?.youtube
</script>

{#if project?.publication.title === undefined}
    <!--  -->
{:else}

<div class="">
    {#if useProjectHero}
        <Hero 
            backgroundImage={project.hero?.image ? project.hero.image : ''}
            subtitle={String(project?.hero?.blurb)}
        >
            {project.hero.title}
        </Hero>
    {/if}

    <div class="flex justify-center  mx-4">
        <div class="max-w-full my-4 {contentWidthClasses}">
            <!-- md:w-[36rem] lg:w-[48rem]  -->
            <div class="text-4xl font-light text-center">
                {project?.title}
                {#if project?.publication.year}
                    {project?.publication.year}
                {/if}
            </div>  
                  
            {#if project?.publication?.authors}
            <div class="text-center my-4">
                {#each project?.publication?.authors as author, i}
                    <span>
                        {author}{i < project?.publication?.authors?.length - 1 ? ',' : ''}
                    </span>                            
                {/each}                        
            </div>  
            {/if}

            {#if project.publication.hasOneOfGithubOrJournal()}
                <div class="text-center my-4">
                    {project.makeTextAboutLinks()}
                </div> 
                
                <div class="flex place-content-evenly place-items-center my-4">
                    {#if project?.publication.github}
                        <a 
                            href="{project?.publication.github}" 
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHub 
                                on:click={()=>goto(String(project?.publication.github))} 
                                class="h-12 w-12"
                            />
                        </a>
                    {/if}

                    {#if project?.publication.href}
                        {#if project?.publication?.periodicalImage}
                            <a 
                                href="{project?.publication.href}" 
                                target="_blank"
                                rel="noreferrer"
                            >
                                <figure>
                                    <img 
                                        class="h-12 max-h-min" 
                                        src={project?.publication?.periodicalImage} 
                                        alt="{project?.publication.periodical} image"
                                    >
                                </figure>
                            </a>
                        {:else}
                            <button class="btn btn-link btn-primary btn-outline btn-ghost">
                                <a href="{project?.publication.href}">
                                    {project?.publication.periodical}
                                </a>
                            </button>                                    
                        {/if}
                    {/if}
                </div>
            {/if}

            {#if project?.publication.abstract}
                <div class="inline-block text-slate-700 text-xl">
                    {#each project?.publication.abstract.split("\n") as paragraph}
                        <p class="first:pt-0 pt-4">
                            {paragraph}
                        </p>    
                    {/each}
                </div>
            {/if}
        </div>        
    </div>    

    <div class="flex justify-center">
        {#if project?.publication?.keyImage}
            <figure class="p-16">
                <img                             
                    src={project?.publication?.keyImage} 
                    alt="{project?.publication.title} image"
                >
            </figure>
        {/if} 
    </div>

    {#if youtubeId !== null && youtubeId !== undefined && browser}
        <div class="flex justify-center">
            <div class="w-[48rem] my-4">                
                <Youtube id={youtubeId}/>
            </div>            
        </div>
    {/if}
</div>   
{/if}
    