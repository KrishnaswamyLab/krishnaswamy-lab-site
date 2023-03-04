<script lang="ts">
    import { fade, blur, fly, slide } from 'svelte/transition';
    type TransitionTypes = 'fade' | 'fly' | 'slide' | 'blur' | 'in:fly' | 'out:fly' | 'in:slide' | 'out:slide' | 'in:fade' | 'out:fade' | 'in:blur' | 'out:blur';
    interface TransitionParamTypes {
      delay?: number;
      duration?: number;
      easing?: (t: number) => number;
      css?: (t: number, u: number) => string;
      tick?: (t: number, u: number) => void;
    }

    import Slide from '$lib/Flowbite/Slide.svelte';
    import Thumbnail from '$lib/Flowbite/Thumbnail.svelte';
    import Caption from '$lib/Flowbite/Caption.svelte';
    import Indicator from '$lib/Flowbite/Indicator.svelte';
    export let showIndicators: boolean = true;
    export let showCaptions: boolean = true;
    export let showThumbs: boolean = true;
    export let images: any[];
    export let slideControls: boolean = true;
    export let transitionType: TransitionTypes = 'slide';
    export let transitionParams: TransitionParamTypes = {};
    export let loop: boolean = false;
    export let duration: number = 2000;
   // have a custom transition function that returns the desired transition
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
    // Slide
    // export let slideClass: string = 'hidden';
    let imageShowingIndex: number = 0;
    // $: image = images[imageShowingIndex];
    const nextSlide = () => {
      if (imageShowingIndex === images.length - 1) {
        imageShowingIndex = 0;
      } else {
        imageShowingIndex += 1;
      }
    };
    const prevSlide = () => {
      if (imageShowingIndex === 0) {
        imageShowingIndex = images.length - 1;
      } else {
        imageShowingIndex -= 1;
      }
    };
    const goToSlide = (number: number) => (imageShowingIndex = number);
    let thumbWidth = 100 / images.length;
    if (loop) {
      setInterval(() => {
        nextSlide();
      }, duration);
    }

     // Carousel
    export let divClass: string = '';
    export let indicatorDivClass: string = 'flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2';
    // Caption
    export let captionClass: string = 'h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-0 text-center';
    // Indicator
    export let indicatorClass: string = 'w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60';
  
</script>
<div class="w-full h-full relative flex flex-col place-content-between">
  
  

  <div class="relative max-h-min w-full">
    <div class="h-[28rem] max-h-[36rem]">
      {#each images as { id, imgurl, name, attribution }}
        {#if imageShowingIndex === id}
          <img transition:multiple={transitionParams}  
            src={imgurl} alt={name} title={attribution} 
            class=" object-cover w-full h-full"
          >
        {/if}
      {/each}
    </div>
    

    <div class="flex">
      {#if slideControls}
        <!-- Slider controls -->
        <button
          on:click={prevSlide}
          type="button"
          class="absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev>
          <span
            class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            {#if $$slots.previous}
              <slot name="previous" />
            {:else}
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7" /></svg>
            {/if}
            <span class="hidden">Previous</span>
          </span>
        </button>
        <button
          on:click={nextSlide}
          type="button"
          class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next>
          <span
            class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            {#if $$slots.next}
              <slot name="next" />
            {:else}
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
            {/if}
            <span class="hidden">Next</span>
          </span>
        </button>
      {/if}
    </div>

    {#if showCaptions}
      <Caption caption={images[imageShowingIndex].name} {captionClass} />
    {/if}
  </div>  
  <div class="relative flex flex-grow max-h-36 h-full">
    {#if showThumbs}
      <div class="flex flex-row justify-center bg-gray-100 max-h-4">
        {#each images as { id, imgurl, name, attribution }}
          <Thumbnail
            {thumbWidth}
            thumbImg={imgurl}
            altTag={name}
            titleLink={attribution}
            {id}
            selected={imageShowingIndex === id}
            on:click={() => goToSlide(id)} />
        {/each}
      </div>
    {/if}
  </div>
</div>
