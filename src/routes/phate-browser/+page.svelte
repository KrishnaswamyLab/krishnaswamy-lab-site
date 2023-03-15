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





</script>

<TwitterSEO/>
<OpenGraphSEO/>
<Hero></Hero>
{#if browser}
<JellyContainer>
    <div class="pt-16">
                
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
        <div class="h-112" 
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
        <div class="form-control w-full max-w-xs">
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
</JellyContainer>
{/if}