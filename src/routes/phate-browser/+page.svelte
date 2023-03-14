<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;   
    import Hero from '$lib/Layout/Hero/Hero.svelte';
    
    import JellyContainer from '$lib/Layout/JellyContainer.svelte';
    
    import { onMount } from 'svelte'
    import { goto } from '$app/navigation';


    const backgroundImage="/images/lab_hero.jpg"
    
    import TwitterSEO from '$lib/SEO/Twitter.svelte'
    import OpenGraphSEO from '$lib/SEO/OpenGraph.svelte'
</script>
<TwitterSEO/>
<OpenGraphSEO/>
<Hero></Hero>