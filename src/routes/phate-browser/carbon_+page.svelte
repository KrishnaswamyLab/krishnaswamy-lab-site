<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;   
    
    import Hero from '$lib/Layout/Hero/Hero.svelte';    
    import JellyContainer from '$lib/Layout/JellyContainer.svelte';
    
    import { onMount } from 'svelte'
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';

    const backgroundImage="/images/lab_hero.jpg"

    import TwitterSEO from '$lib/SEO/Twitter.svelte'
    import OpenGraphSEO from '$lib/SEO/OpenGraph.svelte'

    let pointIds = []
    $: pointXYs = pointIds.map((id, i) => {
        return {
            x: data?.points?.P1?.[id],
            y: data?.points?.P2?.[id],
            t: data?.points?.samples?.[id],
            group: data?.points?.samples?.[id],
        }
    })

    async function updateData() {
        pointIds = Object.keys(data.points.samples)
    }

    onMount(async () => {
        await updateData()
    })

    import { ScatterChart,  } from "@carbon/charts-svelte";

	import "@carbon/styles/css/styles.css";
	import "@carbon/charts/styles.css";
</script>

  

<TwitterSEO/>
<OpenGraphSEO/>
<Hero></Hero>

{#if browser}
<JellyContainer>
    <div class="h-92">        
        {#await data.points}
            <ScatterChart
                    data={[]}
                    options={{
                    "title": "Scatter (skeleton)",
                    "axes": {
                        "bottom": {
                            "title": "PHATE 1",
                            "scaleType": "linear",
                            "mapsTo": "x"
                        },
                        "left": {
                            "title": "PHATE 2",
                            "scaleType": "linear",
                            "mapsTo": "y"
                        }
                    },
                    "data": {
                        "loading": true
                    },
                    "height": "400px"
                }}
            />
        {:then results}
            <ScatterChart
                data={pointXYs}
                options={
                    {
                        axes: {
                            bottom:{
                                "mapsTo": "x", 
                                "title": "PHATE 1"
                            },
                            left:{
                                "mapsTo":"y", 
                                "title": "PHATE 2"
                            },                        
                        },
                        height: "400px"
                    }
                }
            />
            
        {:catch error}
            whoops
        {/await}
        
    </div>
</JellyContainer>
{/if}