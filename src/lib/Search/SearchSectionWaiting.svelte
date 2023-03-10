<script lang="ts">
    import SpinCircle from "$lib/Icons/SpinCircle.svelte";
    export let useSekeleton:boolean=true
    export let useSpinner:boolean = true
</script>

<div class="w-full mx-auto bg-slate-200 rounded-lg">
    <div class="
        space-x-4 m-4
        text-base text-gray-900 
        place-content-start
        flex w-full 
    ">
        <slot></slot>
    </div>
    <div class="animate-pulse flex space-x-4 m-4">
        <div class="flex-1 space-y-6 py-1 pt-2">
            {#if useSekeleton}            
            <div class="h-2 bg-slate-700 rounded col-span-1">                
            </div>           
            {:else if useSpinner} 
            <div class="mx-auto">
                <SpinCircle class="text-indigo-700 h-5 -ml-1 mr-3 place-content-center place-items-center place-self-center flex w-full"/>
            </div>
            {/if}
        </div>
    </div>
</div>
