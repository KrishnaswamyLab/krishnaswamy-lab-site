<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import Magnify from "$lib/Icons/Magnify.svelte";
    
    export let query:string='';
	let timer:ReturnType<typeof setTimeout>;

    export let input: HTMLInputElement
    export function focus() {        
		input.focus()        
	}
    export function blur() {
		input.blur();
	}

    const closeModal = () => {
        dispatch('close');
    }
    
	const dispatch = createEventDispatcher();
	const debounce = (value:string) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
            query = value;            
            dispatch('searching', {query});            
		}, 750);
	}
    
</script>
<svelte:options accessors={true}/>

<div class={$$props.class}>
    <div class="flex w-full px-4 place-items-center">
        <label for="search">
            <Magnify class="h-8 w-8 pointer-events-none text-base-content"/>            
        </label>
        <input 
            name="search" placeholder="Search…" 
            class="w-full ml-2 py-4 text-lg 
            !outline-none
            border-transparent focus:border-transparent focus:ring-0            
            "
            on:keyup={({ target: { value } }) => debounce(value)}
            bind:this={input} 
            bind:value={query}
        >
        <button on:click={closeModal}>
            <kbd class="                
                inline-flex place-content-center border-2
                text-lg align-center place-items-center
                px-2 py-1 min-w-min border-slate-900 rounded-lg bg-slate-100 bg-opacity-50
                font-spacemono"
            >esc</kbd> 
        </button>
    </div>
</div>