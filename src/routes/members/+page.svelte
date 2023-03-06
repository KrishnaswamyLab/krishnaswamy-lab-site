<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import MemberInfo from '$lib/MemberInfo.svelte';  

    import JellyContainer from '$lib/Layout/JellyContainer.svelte';
    import TextHero from '$lib/Layout/Hero/TextHero.svelte';
    
    $: past = data?.members.filter(({isAlum})=>isAlum)
    $: curr = data?.members.filter(({isAlum})=>!isAlum)

    import Hero from '$lib/Layout/Hero/Hero.svelte';
    const useStickyTextHero = false;
    const stickyClasses = 'sticky top-0 bg-base-100 z-[100] pb-8'


import { onMount } from 'svelte'
import { fly, fade } from 'svelte/transition';

let animate = false
onMount(() => {
    animate = true
})
import TwitterSEO from '$lib/SEO/Twitter.svelte'
import OpenGraphSEO from '$lib/SEO/OpenGraph.svelte'
</script>
<TwitterSEO/>
<OpenGraphSEO/>
<Hero></Hero>

{#if animate}
<JellyContainer>
    {#await curr}
        Loading Members...
    {:then members}
        <div in:fly={{y:200, delay: 100, duration: 1500}} >
            <TextHero 
                class="{useStickyTextHero ? stickyClasses : ''}"
            >
                Krishnaswamy Lab Members
            </TextHero>
        </div>
        <div class="my-4 py-4">
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