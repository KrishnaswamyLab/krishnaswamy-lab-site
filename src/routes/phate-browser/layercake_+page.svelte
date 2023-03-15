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

    import { LayerCake, Svg, WebGL, Html } from 'layercake';

    
  import ScatterWebGL from '$lib/LayerCake/Scatter.webgl.svelte';
  import AxisX from '$lib/LayerCake/AxisX.svelte';
  import AxisY from '$lib/LayerCake/AxisY.svelte';
  import QuadTree from '$lib/LayerCake/QuadTree.html.svelte';

    const xKey = 'x';
    const yKey = 'y';
    const r = 3;
    const padding = 6;
    const points = [
        {x:1, y:1},
        {x:2, y:2},
        {x:3, y:1},
        {x:4, y:4},
    ]


    let pointIds = []
    // let pointXYs = []
    $: pointXYs = pointIds.map((id, i) => {
        return {
            x: data?.points?.P1?.[id],
            y: data?.points?.P2?.[id],
            t: data?.points?.samples?.[id],
        }
    })
    
    let layercake
    onMount(async () => {
        await updateData()
        layercake.resize()
        layercake.render()
    })

    async function updateData() {
        await data.points
        pointIds = Object.keys(data.points.samples)
        // pointXYs = pointIds.map((id, i) => {
        //     return {
        //         x: data?.points?.P1?.[id],
        //         y: data?.points?.P2?.[id],
        //         t: data?.points?.samples?.[id],
        //     }
        // })
    }

</script>

<style>
    .circle {
      position: absolute;
      border-radius: 50%;
      background-color: rgba(171,0, 214);
      transform: translate(-50%, -50%);
      pointer-events: none;
      width: 10px;
      height: 10px;
    }
</style>
  

<TwitterSEO/>
<OpenGraphSEO/>
<Hero></Hero>
{#if browser}
<JellyContainer>
    <div class="h-92">        
        {#await data.points}
            
        {:then results} 
            <LayerCake
                padding={{ top: 20, right: 15, bottom: 20, left: 25 }}
                x={xKey} y={yKey}
                xPadding={[padding, padding]}
                yPadding={[padding, padding]}
                data={pointXYs}
            >
                <Svg>
                    <AxisX/>
                    <AxisY ticks={5} />
                </Svg>
                <WebGL>
                    <ScatterWebGL 
                        r={r}
                        bind:this={layercake}
                    />
                </WebGL>
                <Html>
                    <QuadTree
                        let:x
                        let:y
                        let:visible
                    >
                        <div
                            class="circle"
                            style="
                                top:{y}px; 
                                left:{x}px;
                                display: { visible ? 'block' : 'none' };
                            "
                        >
                        </div>
                    </QuadTree>
                </Html>
            
            </LayerCake>
        {:catch error}
            whoops
        {/await}
        
    </div>
</JellyContainer>
{/if}