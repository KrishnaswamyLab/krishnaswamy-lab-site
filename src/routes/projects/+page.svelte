<script lang="ts">
	/** @type {import('./$types').PageData} */
    export let data;
    import { goto } from '$app/navigation';

    import ProjectListItem from '$lib/Projects/ProjectListItem.svelte';
    import ProjectInfo from '$lib/Projects/ProjectInfo.svelte';
    import Twitter from "$lib/Icons/Twitter.svelte";
    import GitHub from '$lib/Icons/GitHub.svelte';
	const twitterLink = "https://twitter.com/KrishnaswamyLab"
    const toTwitter = () => {
        goto(twitterLink)
    }
    const githubLink = "https://github.com/KrishnaswamyLab"
    const toGitHub = () => {
        goto(githubLink)
    }
</script>

<!-- <div class="bg-primary h-16"></div> -->
<div class="hero h-[40rem]" style="background-image: url(/images/projects_hero.jpeg);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-8xl font-light capitalize">
            Projects
        </h1>
      </div>
    </div>
</div>


<div class="py-8"></div> 

<div class="flex">
    <div class="w-full text-center">
        <div class="text-2xl font-light">
            You can access the Lab's Github Repository by clicking the link below
        </div>        
        <div class="inline-flex justify-center pt-8">
            <GitHub on:click={toGitHub} class="h-16 w-16 "/>
        </div>
    </div>
</div>

<div class="flex justify-center py-8">
    <div class="max-w-fit w-[42rem] ">
        <div class="divider divider-vertical"></div>
    </div>
</div>



<div class="px-8 flex justify-center">
    <div class="max-w-fit w-[42rem]">
        <div class="text-center font-bold text-4xl">
            Lab Projects
        </div>
        <ol class="mt-4 list-inside list-decimal text-lg ">
            {#each data.projects as project}
                <ProjectListItem {project} />
            {/each}           
        </ol>        
    </div>
</div>

<div class="flex flex-col justify-center">
    {#each data.projects as project, i}
            <ProjectInfo {project} class="mt-8" contentWidthClasses={"md:w-[36rem] lg:w-[48rem]"}/>    
    {/each}   
    
</div>

