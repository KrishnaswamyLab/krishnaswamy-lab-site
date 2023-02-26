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
    
    const youtubeId = project?.youtube
</script>

{#if project?.publicationTitle === null}
    <!--  -->
{:else}
<div class="inline-block">
    {#if useProjectHero}
        <Hero 
            backgroundImage={project.heroImage ? project.heroImage : ''}
            subtitle={String(project?.heroBlurb)}
        >
            {project.heroTitle()}
        </Hero>
    {/if}

    <div class="flex justify-center  mx-4">
        <div class="max-w-full my-4 {contentWidthClasses}">
            <!-- md:w-[36rem] lg:w-[48rem]  -->
            <div class="text-4xl font-light text-center">
                {project?.publicationTitle}
                {#if project?.publicationYear}
                    {project?.publicationYear}
                {/if}
            </div>        

            <div class="text-center my-4">
                {#each project?.authors as author, i}
                    <span>
                        {author?.name}{i<project?.authors.length-1 ? ',' : ''}
                    </span>                            
                {/each}                        
            </div>  

            {#if project.hasOneOfGithubOrJournal()}
                <div class="text-center my-4">
                    {project.makeTextAboutLinks()}
                </div> 
                
                <div class="flex place-content-evenly place-items-center my-4">
                    {#if project?.githubLink}
                        <a 
                            href="{project?.githubLink}" 
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHub 
                                on:click={()=>goto(String(project?.githubLink))} 
                                class="h-12 w-12"
                            />
                        </a>
                    {/if}

                    {#if project?.publicationLink}
                        {#if project?.journalImage}
                            <a 
                                href="{project?.publicationLink}" 
                                target="_blank"
                                rel="noreferrer"
                            >
                                <figure>
                                    <img 
                                        class="h-12 max-h-min" 
                                        src={project?.journalImage} 
                                        alt="{project?.journal} image"
                                    >
                                </figure>
                            </a>
                        {:else}
                            <button class="btn btn-link btn-primary btn-outline btn-ghost">
                                <a href="{project?.publicationLink}">
                                    {project?.journal}
                                </a>
                            </button>                                    
                        {/if}
                    {/if}
                </div>
            {/if}

            {#if project?.publicationAbstract}
                <div class="inline-block text-slate-700 text-xl">
                    {#each project?.publicationAbstract.split("\n") as paragraph}
                        <p class="first:pt-0 pt-4">
                            {paragraph}
                        </p>    
                    {/each}
                </div>
            {/if}
        </div>        
    </div>    

    <div class="flex justify-center">
        {#if project?.publicationImage}
            <figure class="p-16">
                <img                             
                    src={project?.publicationImage} 
                    alt="{project?.publicationTitle} image"
                >
            </figure>
        {/if} 
    </div>

    {#if youtubeId !== null && browser}
        <div class="flex justify-center">
            <div class="w-[48rem] my-4">                
                <Youtube id={youtubeId}/>
            </div>            
        </div>
    {/if}
</div>   
{/if}
    