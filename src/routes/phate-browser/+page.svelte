<script lang="ts">
/** @type {import('./$types').PageData} */
export let data;   

import { onMount } from 'svelte'
import { goto } from '$app/navigation';
import { browser } from '$app/environment';


import TwitterSEO from '$lib/SEO/Twitter.svelte'
import OpenGraphSEO from '$lib/SEO/OpenGraph.svelte'
import Hero from '$lib/Layout/Hero/Hero.svelte';
import JellyContainer from '$lib/Layout/JellyContainer.svelte';

const backgroundImage="/images/lab_hero.jpg"

import Axis from '$lib/Canvas/Axis.svelte';
import Point from '$lib/Canvas/Point.svelte';
import { Canvas } from 'svelte-canvas';
import { extent, map } from 'd3-array';
import { scaleLinear, scaleOrdinal, scaleSequential, scaleBand} from 'd3-scale';
import { Delaunay } from 'd3-delaunay';
import {set} from 'd3-collection'
import {interpolateYlGn, interpolatePiYG, schemeRdBu, interpolateRdBu, schemeAccent} from 'd3-scale-chromatic';
    import { get } from 'svelte/store';
    import { each } from 'svelte/internal';


const margin = { top: 10, right: 10, bottom: 25, left: 25 };

let points = [];
let width, height;
let picked, click = false;


let keyX = 'P1'
let keyY = 'P2'
let keyC = 'Timepoint'
// let keyC = 'samples'

let pointIds = []  
$: points = data.points
$: pointIds = Object.keys(points).sort((a, b)=> getCountsValue(a) - getCountsValue(b))

$: counts = data.counts
$: colorOptions = Object.keys(counts[0]).map(e=>e.trim())



$: scaleX = scaleLinear()
    .domain(extent(points, d => d[keyX]))
    .range([margin.left, width - margin.right])
    .nice();

$: scaleY = scaleLinear()
    .domain(extent(points, d => d[keyY]))
    .range([height - margin.bottom, margin.top])
    .nice();

    $: distinctColors = set(points.map(d=>d[keyC])).values()

$: scaleCat = scaleBand(schemeAccent)
    .domain(distinctColors)
    .range([0, 1])

$: scaleColor = scaleLinear()
    .domain(extent(counts, d => d[keyC]))
    .range([0, 1])
    
$: scaleC = scaleSequential(interpolateRdBu)




$: getCountsValue = (i) => {
    let cur = counts[i]
    let val = cur[keyC] 
    return val
}

$: getColor = (pnt, i) => {    
    let val = getCountsValue(i)
    let clr = scaleC(scaleColor(val))
    return clr
}

$: delaunay = Delaunay.from(points, d => scaleX(d[keyX]), d => scaleY(d[keyY]));

let found
let timer
const debounce = (x, y) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        found = delaunay.find(x - 8, y - 8)
        return found
    }, 10);
}

// This contains the debounced values
let dimensions = { height, width };
let timeoutHandle;
$: {
    clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(() => {
        dimensions = { height, width };
    }, 500);
}


const fetchStub = async (stub) => {
    let response = await fetch(`/data/eb_2018_counts_${stub}.json`)
    let arr = await response.json()    
    arr.forEach(async (e, i) => {
        counts[i] = {...counts[i], ...e}
    })
}

const getStubs = async () => {
    await Promise.all(data.stubs.map(async stub => {   
        console.log(stub)    
        await fetchStub(stub)        
    }))
    return true
}

let waitingStubs;
onMount(async () => {
    // console.log(await data.counts)
    // await data.stubs
    waitingStubs = getStubs().then(() => {
        setTimeout(() => {        
            keyC = 'DPPA4'
        }, 2500);   
    })
    console.log('mount', waitingStubs)
})




import GitHubShield from '$lib/Shields/GitHub.svelte'
</script>

<TwitterSEO
    title="PHATE browser of Embryoid Bodies data by the Krishnaswamy Lab"
    url="https://www.krishnaswamylab.org/phate-browser"
/>
<OpenGraphSEO
    title="PHATE browser of Embryoid Bodies data by the Krishnaswamy Lab"
    url="https://www.krishnaswamylab.org/phate-browser"
/>
<Hero></Hero>
{#if browser}

<Hero>
    Potential of Heat-diffusion for Affinity-based Transition Embedding (PHATE)
</Hero>

<JellyContainer class="pt-16">
    <div>
        
        <div class='flex place-content-center'>

            <div class="prose">

                <div>
                    This 27-day time course of embryoid body (EB) differentiation dataset is publically available as <code>scRNAseq.zip</code> at Mendelay Datasets at 
                    <a 
                        href="https://data.mendeley.com/datasets/v6n743h5ng/" 
                        class="link link-hover link-info"
                    >
                        https://data.mendeley.com/datasets/v6n743h5ng/
                    </a>.
                </div>
        
                <h2>
                    Time course of human embryoid body differentation
                </h2>
                <div>
                    Low passage H1 hESCs were maintained on Matrigel-coated dishes in DMEM/F12-N2B27 media supplemented with FGF2. For EB formation, 
                    cells were treated with Dispase, dissociated into small clumps and plated in non-adherent plates 
                    in media supplemented with 20% FBS, 45 which was prescreened for EB differentiation. 
                    Samples were collected during 3-day intervals during a 27 day-long differentiation 
                    timecourse. An undifferentiated hESC sample was also included (Figure S7D). 
                    Induction of key germ layer markers in these EB cultures was validated by qPCR 
                    (data not shown). For single cell analyses, EB cultures were dissociated, FACS 
                    sorted to remove doublets and dead cells and processed on a 10x genomics instrument 
                    to generate cDNA libraries, which were then sequenced. Small scale sequencing 
                    determined that we have successfully collected data on approximately 31,000 cells 
                    equally distributed throughout the timecourse.
                </div>
        
                <h2>
                    Embedding Data Using PHATE
                </h2>
                <div  class="pb-4">
                    Since we are looking for subtle structure and we expect some of the trajectories to be sparse, we might want 
                    to decrease knn from the default of 5, and reduce t from the automatic value of 21 
                    (printed in the output above). For single-cell RNA-seq you can try knn as low as 3 
                    or 4 if you're looking for subtle structure, or as high as 30 or 40 if you have 
                    hundreds of thousands of cells. We'll also reduce alpha here to 15 to partially 
                    offset the decreased connectivity as a result of decreasing knn.
                </div>
                <div class="mockup-code bg-primary text-primary-content text-xs py-4">
                    <pre><code>phate_operator = phate.PHATE(n_jobs=-2, random_state=42)</code></pre>
                    <pre><code>Y_phate = phate_operator.fit_transform(EBT_counts)</code></pre>
                </div>

                <h2>
                    Exploratory visualization
                </h2>
                <div  class="pb-8">
                    Below you'll find an interactive visualization of the 2D-PHATE embedding. Use the drop down to color each point (cell)
                    by the corresponding gene.
                </div>
            </div>
        </div>
        

    </div>

</JellyContainer>
    <div class="py-16 bg-base-300">
        <div class="
            mx-12 px-12 
            flex place-content-center
        ">
        <div class="w-3/4 max-w-3/4 2xl:w-[72rem]">
        {#await data.points}
            
        {:then results} 
        
        
        {#await waitingStubs}
        <div class="flex flex-1 my-auto place-content-center place-items-center flex-col grow ">
            <div class="bg-base-200 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="flex place-content-center">
                    <div class="prose text-center">
                        <h1 class="font-extralight">
                            Loading data
                        </h1>                        
                    </div>
                </div>
                
                <div class="animate-pulse flex space-x-4">                                
                <div class="flex-1 w-full space-y-6 py-1">                    
                    <div class="flex flex-row space-y-3 gap-4">
                        <div class="h-64 my-4 w-2 bg-slate-700 rounded"></div>                        
                        <div class="h-64  grid grid-cols-3 gap-4 place-items-center place-content-evenly w-full">
                            {#each Array(9) as e, i }
                                <div class="
                                    rounded-full bg-slate-700 h-10 w-10 
                                    hover:shadow-2xl transition-all ease-in-out
                                    duration-300 hover:-translate-y-2
                                ">
                                </div>
                            {/each}
                                                                                                           
                        </div>                                                
                    </div>
                    <div class="h-2 col-span-1 w-full bg-slate-700 rounded"></div>
                </div>
                </div>
            </div>
        </div>
        {:then res} 
        <div class="h-112 " 
            bind:clientWidth={width} 
            bind:clientHeight={height}
        >
        <Canvas
            width={dimensions.width} height={dimensions.height} style="cursor: pointer"
            on:mousemove={({ clientX: x, clientY: y }) => {
            // debounce(x, y)
            if (picked = found)
                points = [...points.filter((_, i) => i !== picked), points[picked]]
            }}
            on:mousedown={() => (click = true)}
            on:mouseup={() => (click = false)}
            on:mouseout={() => (picked = null)}
        >
            <Axis type="x" scale={scaleX} tickNumber={8} {margin} />
            <Axis type="y" scale={scaleY} tickNumber={8} {margin} />

            {#each pointIds as pid, i (i)}
            {@const pnt = points[pid]}
            <Point
                x={scaleX(pnt[keyX])} y={scaleY(pnt[keyY])} 
                fill={getColor(pnt, pid)}
                r={keyC == 'Timepoint' ? 3 : Math.max(2, 2 + scaleColor(getCountsValue(pid)) * 3)}
                stroke={'#000'}                
                strokeWidth={keyC == 'Timepoint' ? 0.1 : Math.max(0.1, 0.1+scaleColor(getCountsValue(pid)) * 0.5)}
            /> 
            {/each}
        </Canvas>
        </div> 



        <div class="form-control w-full max-w-xs pt-8">
            <label class="label">
              <span class="label-text">Color by</span>
              <span class="label-text-alt">{keyC == 'Timepoint' ? 'time' : 'expression'}</span>
            </label>

            <select class="select select-bordered w-full max-w-xs pa-8" bind:value={keyC}>
                <option disabled selected>Color by</option>
                {#each colorOptions.sort((a, b) => {
                    if (b === 'Timepoint') return 10
                    return b<a
                }) as option}
                    <option value={option}>
                        {option}
                    </option>
                {/each}
            </select>
        </div>
        {/await}
       
        {:catch error}
            whoops
        {/await}               
    </div>
</div>
</div>
    <JellyContainer>        
        <div class='flex place-content-center pt-8 w-full'>
                <div class="prose w-full">
                    <h2>
                        Cite us
                    </h2>
                    <div class="pb-4">
                        A complete tutorial notebook can be found on 
                        <a 
                            class="link link-hover link-info"
                            href="https://github.com/KrishnaswamyLab/TrajectoryNet/blob/master/notebooks/EmbryoidBody_TrajectoryInference.ipynb"
                        >
                            GitHub
                        </a>
                    </div>                
                    <div class="flex w-full overflow-x-scroll bg-base-300">
                        <div class="flex flex-col w-full py-4 text-xs overflow-x-scroll ">
                            <div class="px-4 whitespace-nowrap overflow-x-scroll">
                                <p class="m-0">
                                    @inproceedings&lcub;tong2020trajectorynet,
                                </p>
                                <p class="m-0 ml-4">
                                    &nbsp;&nbsp;title = &lcub;TrajectoryNet: A Dynamic Optimal Transport Network for Modeling Cellular Dynamics&rcub;,
                                </p>
                                <p class="m-0 ml-4">
                                    &nbsp;&nbsp;title = &lcub;TrajectoryNet: A Dynamic Optimal Transport Network for Modeling Cellular Dynamics&rcub;,
                                </p>
                                <p class="m-0 ml-4">
                                    &nbsp;&nbsp;shorttitle = &lcub;TrajectoryNet&rcub;,
                                </p>
                                <p class="m-0 ml-4">
                                    &nbsp;&nbsp;booktitle = &lcub;Proceedings of the 37th International Conference on Machine Learning&rcub;,
                                </p>
                                <p class="m-0 ml-4">
                                    &nbsp;&nbsp;author = &lcub;Tong, Alexander and Huang, Jessie and Wolf, Guy and &lcub;van Dijk&rcub;, David and Krishnaswamy, Smita&rcub;,
                                </p>
                                <p class="m-0 ml-4">
                                    &nbsp;&nbsp;year = &lcub;2020&rcub;
                                </p>
                                <p class="m-0">
                                    &rcub; 
                                </p>                    
                            </div>                        
                        </div>
                    </div>
                    
                    <!-- <div class="overflow-x-scroll max-w-full">
                        <div class="w-full overflow-x-scroll flex">
                            <div class="mockup-code bg-primary text-primary-content text-xs py-4">
                                <style>
                                    pre {
                                        margin: 0px !important;
                                        padding: 0px !important;
                                    }
                                </style>
                                <pre><code >@inproceedings&lcub;tong2020trajectorynet,</code></pre>
                                <pre data-prefix="  "  class=""><code>title = &lcub;TrajectoryNet: A Dynamic Optimal Transport Network for Modeling Cellular Dynamics&rcub;,</code></pre>
                                <pre data-prefix="  "><code>shorttitle = &lcub;TrajectoryNet&rcub;,</code></pre>
                                <pre data-prefix="  "><code>booktitle = &lcub;Proceedings of the 37th International Conference on Machine Learning&rcub;,</code></pre>
                                <pre data-prefix="  "><code>author = &lcub;Tong, Alexander and Huang, Jessie and Wolf, Guy and &lcub;van Dijk&rcub;, David and Krishnaswamy, Smita&rcub;,</code></pre>
                                <pre data-prefix="  "><code>year = &lcub;2020&rcub;</code></pre>
                                <pre><code>&rcub;</code></pre> 
                            </div>
                        </div>
                        
                        
                    </div> -->
                </div>
                
            
        </div>    
</JellyContainer>
{/if}