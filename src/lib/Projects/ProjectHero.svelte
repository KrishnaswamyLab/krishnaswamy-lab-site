<script lang="ts">
    import type {
        project as projectInterface
    } from '$lib/types'
    export let project: projectInterface
    
    $: heroTitle = project?.projectAbbreviation 
                            ? project?.projectAbbreviation 
                            : project.projectTitle
    $: heroStyle = project?.heroImage 
                            ? `background-image: url(${project?.heroImage}); ` 
                            : ""
    $: heroTextStyle = project?.heroImage 
                            ? `text-neutral-content` 
                            : "text-primary"       
</script>

<div class="hero h-[40rem] bg-base-200 {$$props.class}" style="{heroStyle}">   
    {#if project?.heroImage}
        <div class="hero-overlay bg-opacity-60"></div>
    {/if}        
    <div class="text-center {heroTextStyle}">
        <div class="max-w-md">
            <h1 class="mb-5 text-8xl font-extralight capitalize break-all">
                {heroTitle}
            </h1>
            <p class="mb-5 text-2xl uppercase font-extralight break-all">
                {project?.heroBlurb}
            </p>
        </div>
    </div>
</div>