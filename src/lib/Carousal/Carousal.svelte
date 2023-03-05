<script lang="ts">
import type {
    CarousalImage as CarousalImageInterface,
    CarousalImages
} from '$lib/types'
import type {CarousalImage } from '$lib/classes'

type CarousalImages = Array<CarousalImage>


import { fade, blur, fly, slide } from 'svelte/transition';
export let images: CarousalImages;
export let loop: boolean = true;
export let duration: number = 3000;

let currentImageIndex: number = 0;
const isLastImage = () => {
    if (currentImageIndex === images.length - 1) {
        return true
    } return false
}
const isFirstImage = () => {
    if (currentImageIndex === 0) {
        return true
    } return false
}
const toNextImage = () => {
    if (isLastImage()) {
        currentImageIndex = 0
    } else {
        currentImageIndex += 1
    }    
}
const toPrevImage = () => {
    if (isFirstImage()) {
        currentImageIndex = images.length - 1
    } else {
        currentImageIndex -= 1
    }    
}
const toGivenImage = (index:number) => {
    currentImageIndex = index
}

if (loop) {
    setInterval(()=>{
        toNextImage()
    }, duration)
}

let thumbnailWidth = 100 / images.length;
let useBackgroundUrl = false
export let showThumbnails: boolean = true;
export let showCaptions: boolean = true;


import PrevNextBtns from '$lib/Carousal/PrevNextBtns.svelte';
import Thumbnail from '$lib/Carousal/Thumbnail.svelte';

export let transitionType:string = 'slide';
const multiple = (node: HTMLElement, params: any) => {
      switch (transitionType) {
        case 'slide':
          return slide(node, params);
        case 'blur':
          return blur(node, params);
        case 'fly':
          return fly(node, params);
        default:
          return fade(node, params);
      }
    };

    import LeftArrow from '$lib/Icons/LeftArrow.svelte';
import RightArrow from '$lib/Icons/RightArrow.svelte';

</script>

<div class="bg-base-100 h-full w-full flex flex-col">    
    <div class="relative max-h-min w-full">
        <PrevNextBtns
            on:prev={toPrevImage}
            on:next={toNextImage}
        ></PrevNextBtns>
        

        <div class="h-[28rem] max-h-[36rem]">
        {#each images as { id, url, name, attribution }, i}
            {#if currentImageIndex === i}
                <img transition:multiple={{}}  
                    src={url} alt={name} title={attribution} 
                    class=" object-cover w-full h-full"
                >
            {/if}
        {/each}
        </div>        
    </div>

    {#if showThumbnails}
        <div class="
            bg-base-200         
            inline-flex 
            place-content-evenly
            overflow-x-scroll 
            overflow-y-hidden 
            object-cover object-center      
            h-40 max-h-40
            
        ">
            {#each images as {url}, i}
                <Thumbnail 
                    {useBackgroundUrl}
                    selected={currentImageIndex === i}
                    widthPercent={thumbnailWidth}
                    {url}
                    on:click={() => toGivenImage(i)}
                    on:keydown={() => toGivenImage(i)} 
                />                   
            {/each}        
        </div>
    {/if}
    
    {#if showCaptions}
        <div class="hidden bg-base-100 text-center">
            Some images provided by Yale University
        </div>
        <div class="bg-slate-300 text-center py-2">
            {@html images[currentImageIndex]?.caption}
        </div>
    {/if}

</div>