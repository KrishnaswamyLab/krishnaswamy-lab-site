<script>
    import { onMount } from "svelte";
    import { browser } from '$app/environment';
    import { scaleLinear, scaleOrdinal } from "d3-scale";
    import { zoom, zoomIdentity } from "d3-zoom";
    import { schemeCategory10 } from "d3-scale-chromatic";
    import { select, selectAll } from "d3-selection";
    import { drag } from "d3-drag";
    
    import {
      forceSimulation, forceLink,
      forceManyBody, forceCenter,
    } from "d3-force";

    let d3 = {
      zoom,
      zoomIdentity,
      scaleLinear,
      scaleOrdinal,
      schemeCategory10,
      select,
      selectAll,
      drag,
      forceSimulation,
      forceLink,
      forceManyBody,
      forceCenter,
    };

    export let graph;

    let svg, div;
    let width = 0;
    let height = 300;
    const nodeRadius = 5;

    $: links = graph?.links.map((d)=>{
        d.source = d.author_a
        d.target = d.author_b
        return d
    })
    //.map((d) => Object.create(d));
    $: nodes = graph?.nodes

    
    const colourScale = d3.scaleOrdinal(d3.schemeCategory10);

    let transform = d3.zoomIdentity;
    // $: console.log(transform);
    
    let simulation;
    
    onMount(() => {  
        resize()      
        simulation = d3
            .forceSimulation(nodes)
            .force(
            "link",
            d3.forceLink(links).id((d) => d.author_name)
                .distance(150)
            )
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2))
            .on("tick", simulationUpdate);

        d3.select(svg)
            .call(
            d3
                .drag()
                .container(svg)
                .subject(dragsubject)
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
            )
            .call(
            d3
                .zoom()
                .scaleExtent([1/10, 8])
                .on("zoom", zoomed)
            );
        
    });

    function simulationUpdate() {
      simulation.tick();
      nodes = [...nodes];
      links = [...links];
    }

    function zoomed(currentEvent) {
      transform = currentEvent.transform;
      simulationUpdate();
    }

    function dragsubject(currentEvent) {
      const node = simulation.find(
        transform.invertX(currentEvent.x),
        transform.invertY(currentEvent.y),
        nodeRadius
      );
      if (node) {
        node.x = transform.applyX(node.x);
        node.y = transform.applyY(node.y);
      }
      return node;
    }

    function dragstarted(currentEvent) {
      if (!currentEvent.active) simulation.alphaTarget(0.3).restart();
      currentEvent.subject.fx = transform.invertX(currentEvent.subject.x);
      currentEvent.subject.fy = transform.invertY(currentEvent.subject.y);
    }

    function dragged(currentEvent) {
      currentEvent.subject.fx = transform.invertX(currentEvent.x);
      currentEvent.subject.fy = transform.invertY(currentEvent.y);
    }

    function dragended(currentEvent) {
      if (!currentEvent.active) simulation.alphaTarget(0);
      currentEvent.subject.fx = null;
      currentEvent.subject.fy = null;
    }

    function resize() {
      ({ width,  } = div.getBoundingClientRect());
      if (simulation) {
        simulationUpdate();
      }
    }

</script>

<svelte:window on:resize={resize} />

{#if browser}
<div class="relative w-full border-4" bind:this={div} style="height:{height}px">
    <svg bind:this={svg} {width} {height}>
        {#each links as link}
            <line
                stroke="grey" 
                x1={link?.source?.x}
                y1={link?.source?.y}
                x2={link?.target?.x}
                y2={link?.target?.y}
                transform="
                    translate({transform.x} {transform.y}) 
                    scale({transform.k} {transform.k})
                "
            >
                <title>{link?.source ? link?.source?.id : 0}</title>
            </line>
        {/each}
      
        {#each nodes as point}
            <circle
                class="node"
                r="10"
                fill={point.author_name === 'Smita Krishnaswamy' ? colourScale(0) : colourScale(1)}
                cx={point.x}
                cy={point.y}
                transform="
                    translate({transform.x} {transform.y}) 
                    scale({transform.k} {transform.k})
                "
            >
                <title>{point.id}</title>
            </circle>
        {/each}
        {#each nodes as point}
            <text
                class="label  text-xl text-slate-500"                
                
                
                x={point.x}
                y={point.y}
                text-anchor="middle"
                transform="
                    translate({transform.x} {transform.y}) 
                    scale({transform.k} {transform.k})
                "
            >
                {point?.author_name}
            </text>
        {/each}
    </svg>
</div>
{/if}

  
<style>
svg {
    float: left;
}

circle {
    stroke: #fff;
    stroke-width: 1.5;
}
</style>
