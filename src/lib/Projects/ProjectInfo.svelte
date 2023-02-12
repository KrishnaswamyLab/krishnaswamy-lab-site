<script lang="ts">
    import type {
        project as projectInterface
    } from '$lib/types'
    export let project: projectInterface
    export let useProjectHero = true
    export let contentWidthClasses = ''
    
    import { goto } from '$app/navigation';
    import GitHub from '$lib/Icons/GitHub.svelte';
    import Youtube from "svelte-youtube-embed";
    import ProjectHero from '$lib/Projects/ProjectHero.svelte';
    $: heroTitle = project?.projectAbbreviation 
                            ? project?.projectAbbreviation 
                            : project.projectTitle
    $: heroStyle = project?.heroImage 
                            ? `background-image: url(${project?.heroImage}); ` 
                            : ""
    $: heroTextStyle = project?.heroImage 
                            ? `text-neutral-content` 
                            : "text-primary"


    $: hasBothGithubAndJournal = project?.githubLink && project?.publicationLink 
    $: hasOneOfGithubOrJournal = project?.githubLink || project?.publicationLink

    const makeTextAboutLinks = (project:projectInterface) => {
        return `
        You can access 
        ${heroTitle}'s
        ${project?.githubLink ? 'Github repository' : ''}
        ${hasBothGithubAndJournal ? 'and' : ''}
        ${project?.publicationLink  ? 'article page' : ''}
        by clicking the link${hasBothGithubAndJournal ? 's' : ''}
        below
        `
    }

    // publicationPoster?: string | null,        
    // youtube?: string | null,
    const youtubeId = project?.youtube

    import { browser } from '$app/environment';

</script>

{#if project?.publicationTitle === null}
    <!--  -->
{:else}
<div class="inline-block">
    {#if useProjectHero}
        <ProjectHero {project} />    
    {/if}

    <div class="flex justify-center">
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

            {#if hasOneOfGithubOrJournal}
                <div class="text-center my-4">
                    {makeTextAboutLinks(project)}
                </div> 
                
                <div class="flex place-content-evenly place-items-center my-4">
                    {#if project?.githubLink}
                        <GitHub 
                            on:click={()=>goto(String(project?.githubLink))} 
                            class="h-12 w-12"
                        />
                    {/if}

                    {#if project?.publicationLink}
                        {#if project?.journalImage}
                            <figure>
                                <img 
                                    class="h-12 max-h-min" 
                                    src={project?.journalImage} 
                                    alt="{project?.journal} image"
                                >
                            </figure>
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
    