<script lang="ts">    
    import { createEventDispatcher } from 'svelte';
    import type {ComponentType, SvelteComponentTyped} from 'svelte'

    import Magnify from "$lib/Icons/Magnify.svelte";
    import { modal } from '$lib/Stores/search';
    
    let input: HTMLInputElement 
    export function focus() {        
		input.focus()        
	}
    export function blur() {
		input.blur();
	}
    const openModal = () => {
        dispatch('open');
        modal.update(v=>true)
    }
	const dispatch = createEventDispatcher();


    export let large = false
    const kbd = `
    inline-flex place-content-center 
    border-slate-900 rounded-lg
    bg-slate-100
    
    group-hover:text-slate-200
    group-hover:border-slate-200
    group-hover:bg-slate-600
    
    font-spacemono    
    ` + (large 
        ? 'px-2 py-1 text-sm border-2' 
        : 'px-2 py-1 text-sm bg-slate-300 border'
    )

</script>

{#if large}
<button 
    class="{$$props.class}    
    text-slate-600
    hover:bg-slate-400
    group hover:text-white
    text-sm  
    rounded-lg px-4
    " 
    on:click={openModal}
>
    <div class="flex flex-row w-full place-items-center pointer-events-none">
        <label for="search">
            <Magnify class="h-6 w-6 "/>            
        </label>

        <input 
            name="search" placeholder="Search…" 
            disabled
            class="   
            bg-transparent
            placeholder-current
            w-full ml-2 py-4 text-sm
            !outline-none
            border-transparent focus:border-transparent focus:ring-0          
            "
        >
        <kbd class="{kbd}"
        >⌘</kbd> 
        <kbd class="{kbd}"
        >k</kbd>
    </div>
</button>
{:else}
<button 
    class="{$$props.class}    
    border-2 border-slate-600 mx-2
    text-slate-600
    hover:bg-slate-400
    group hover:text-white
    rounded-lg
    
    " 
    on:click={openModal}
>
    <div class="flex flex-row w-full place-items-center pointer-events-none px-1">
        <label for="search">
            <Magnify class="h-6 w-6 lg:h-4 lg:w-4"/>            
        </label>

        <input 
            name="search" placeholder="Search…" 
            disabled
            class="   
            bg-transparent
            placeholder-current
            w-full py-2
            !outline-none
            border-transparent focus:border-transparent focus:ring-0        
            ml-1 text-xs
            "
        >
        <div class="inline-flex lg:hidden">
            <kbd class="{kbd}"
            >⌘</kbd> 
            <kbd class="{kbd} ml-0.5"
            >k</kbd>
        </div>
        
        
    </div>
</button>
{/if}