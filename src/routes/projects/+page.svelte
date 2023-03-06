<script lang="ts">
/** @type {import('./$types').PageData} */
import type {Publications, Projects} from '$lib/types'
interface data {
    projects:Projects    
}

export let data:data;
import { goto } from '$app/navigation';
import {LabGitHubLink, openUrlInNewTab} from '$lib/utils';

import ProjectListItem from '$lib/Projects/ProjectListItem.svelte';
import ProjectInfo from '$lib/Projects/ProjectInfo.svelte';

import GitHub from '$lib/Icons/GitHub.svelte';    
const toGitHub = () => openUrlInNewTab(LabGitHubLink)

import Hero from '$lib/Layout/Hero/Hero.svelte';
import JellyContainer from "$lib/Layout/JellyContainer.svelte";

import TwitterSEO from '$lib/SEO/Twitter.svelte'
import OpenGraphSEO from '$lib/SEO/OpenGraph.svelte'

</script>

<TwitterSEO
    title="Projects of the Krishnaswamy Lab"
    url="https://www.krishnaswamylab.org/projects"
/>
<OpenGraphSEO
    title="Projects of the Krishnaswamy Lab"
    url="https://www.krishnaswamylab.org/projects"
/>

<Hero backgroundImage="/images/projects_hero.jpeg">
    Projects
</Hero>

<JellyContainer class="pt-16">   
    <div class="text-2xl font-light text-center">
        You can access the Lab's Github Repository by clicking the link below
    </div>        
    
    <div class="flex justify-center pt-8">
        <GitHub on:click={toGitHub} class="h-16 w-16 "/>
    </div>
    
    <div class="divider divider-vertical py-8"></div>
    
    <div class="text-center font-bold text-4xl">
        Lab Projects
    </div>
    <ol class="mt-4 list-inside list-decimal text-lg ">
        {#each data.projects as project}
            <ProjectListItem {project} />
        {/each}           
    </ol>
</JellyContainer>

<div class="mt-8 flex flex-col justify-center">
    {#each data.projects as project, i}
        <ProjectInfo {project} contentWidthClasses={"md:w-[36rem] lg:w-[48rem]"}/>    
    {/each}       
</div>