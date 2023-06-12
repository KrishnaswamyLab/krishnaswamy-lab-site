<script>
/** @type {import('./$types').PageData} */
export let data;
import MemberInfo from '$lib/MemberInfo.svelte';  

import JellyContainer from '$lib/Layout/JellyContainer.svelte';
import TextHero from '$lib/Layout/Hero/TextHero.svelte';

import _ from 'lodash'
// console.log('members', _.groupBy(sorted, 'status')) 

$: past = data?.members.filter(({isAlum})=>isAlum)
$: curr = data?.members.filter(({isAlum})=>!isAlum)
$: groups = _.groupBy(curr, 'status')

import Hero from '$lib/Layout/Hero/Hero.svelte';
const useStickyTextHero = false;
const stickyClasses = 'sticky top-0 bg-base-100 z-[100] pb-8'


import { onMount } from 'svelte'
import { fly, fade } from 'svelte/transition';

let animate = false
onMount(() => {
    animate = true
})

const adjustGroup = (group) => {
    switch (group) {
        case 'PI':
            return 'Principal Investigator'
            break;
        case 'postdoc':
            return 'Postdoctoral Fellows'
            break;
        case 'PhD Student':
            return 'PhD Students'
            break;
        case 'undergraduate':
            return 'Undergraduate Students'
            break;
        case 'Masters Student':
            return 'Masters Students'
            break;
        case 'Undergraduate Student':
            return 'Undergraduate Students'
            break;
        case 'Research Assistant':
            return 'Research Assistants'
            break;
        case 'Research Associate':
            return 'Research Associates'
            break;
        default:
            'Members'
            break
    }
}

const groupOrder = [
    'PI', 
    'postdoc', 
    'PhD Student', 
    'undergraduate',
]

import TwitterSEO from '$lib/SEO/Twitter.svelte'
import OpenGraphSEO from '$lib/SEO/OpenGraph.svelte'

</script>

<TwitterSEO
    title="Members of the Krishnaswamy Lab"
    url="https://www.krishnaswamylab.org/members"
/>
<OpenGraphSEO
    title="Members of the Krishnaswamy Lab"
    url="https://www.krishnaswamylab.org/members"
/>

<Hero></Hero>

{#if animate}
<JellyContainer>
    {#await groups}
        Loading Members...
    {:then results}
        <div in:fly={{y:200, delay: 100, duration: 1500}} >
            <TextHero 
                class="{useStickyTextHero ? stickyClasses : ''}"
            >
                Krishnaswamy Lab Members
            </TextHero>
        </div>
        <div class="my-4 py-4">
        {#each groupOrder as group, g}
        {@const members = results[group]}
            <div class="my-4 py-4">         
                <div in:fly={{y:200, delay: 0, duration: 1500}} >
                    <TextHero class="py-0 pt-0">
                        <div slot="tagline" class="py-0 pt-0">
                        {adjustGroup(group)}
                        </div>
                    </TextHero>

                    {#each members as member, i }
                        {#if member?.about}
                            <MemberInfo 
                                {member} {useStickyTextHero}
                                delay={i * 100}
                                showDivider={i < curr.length - 1}
                            />   
                        {/if}             
                    {/each}
                </div>
            </div>
        {/each}
        </div>
    {:catch error}
        {error.message}
    {/await}       
    
    
    {#await past}
        Loading Members...
    {:then members}
    
        <div in:fly={{y:200, delay: 100, duration: 1500}} >
            <TextHero 
                class="{useStickyTextHero ? stickyClasses : ''}"
            >
                Krishnaswamy Lab Alumni
            </TextHero>
        </div>
        <div class="my-4 py-4">
        {#each members as member, i }
            {#if member?.about}
                <MemberInfo 
                    {member} {useStickyTextHero}
                    delay={i * 100}
                    showDivider={i < past.length - 1}
                />   
            {/if}             
        {/each}
        </div>
    {:catch error}
        {error.message}
    {/await} 
</JellyContainer>
{/if}