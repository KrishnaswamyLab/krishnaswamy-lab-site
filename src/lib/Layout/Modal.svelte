<script lang="ts">
	import { fade, fly } from 'svelte/transition';    
    export let modal:boolean = false

</script>


{#if modal}   
<div class="
    top-0 left-0 right-0
    fixed inset-0 z-[500000]
    w-screen h-screen
    {!modal ? 'hidden' : ''}
    " 
    transition:fade
>
    <div class="
        fixed inset-0 w-screen
        bg-gray-600 bg-opacity-75 transition-opacity
    "></div>
    <div class="        
        flex
        place-content-center 
        w-screen h-screen p-12 
        "
    >       
        <div class="                
            relative rounded-xl
            w-full mx-8 p-4
            flex flex-col bg-white
        ">
            <slot></slot>        
        </div>              
    </div>
</div>
{/if}




