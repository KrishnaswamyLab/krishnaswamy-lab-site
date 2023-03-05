<script lang="ts">

import LeftArrow from '$lib/Icons/LeftArrow.svelte';
import RightArrow from '$lib/Icons/RightArrow.svelte';

import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

function prev() {
    dispatch('prev')
}
function next() {
    dispatch('next')
}
</script>

<style>
/* span, svg, button {
    -webkit-appearance: none
}     */
</style>
<div class="
        relative
        inset-y-1/2
        z-30
        
    "
>
    <div class="
            absolute
            inline-block inset-x-0 top-1/2
            place-content-between
            z-30             
        "
    >
        <button
            on:click={prev}
            type="button"
            class="         
                absolute left-0
                z-30 px-4  flex        
                cursor-pointer group focus:outline-none
                h-full
            "
            
        >
            <span
                class="                    
                    z-30 inline-flex justify-center items-center w-8 h-8 rounded-full
                    sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 
                    dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white 
                    dark:group-focus:ring-gray-800/70 group-focus:outline-none
                "
            >
                <LeftArrow/>
            </span>
        </button>
        
        <button
            on:click={next}
            type="button"
            class="
                absolute
                right-0
                z-30 px-4 h-full flex
                cursor-pointer group focus:outline-none
                
            "
            
        >
            <span
                class="
                    z-30 inline-flex justify-center items-center w-8 h-8 rounded-full 
                    sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 
                    dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white 
                    dark:group-focus:ring-gray-800/70 group-focus:outline-none
                "
            >
                <RightArrow/>
            </span>
        </button>
    </div>
</div>