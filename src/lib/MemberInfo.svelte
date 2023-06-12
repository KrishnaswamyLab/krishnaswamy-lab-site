<script lang="ts">
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import type {Member as MemberInterface} from '$lib/types'
    import {Member} from '$lib/classes'

    import {openUrlInNewTab, lipsum} from '$lib/utils'
        
    export let member = new Member({
        name: {first:'Lab', last:'Member'},
        title: 'PhD',
        image: '',
        about: lipsum
    } as MemberInterface)

    $: img = true // member.image

    $: styleCardSide = img ? "lg:card-side" : ""
    $: styleCardWidth = img ? "lg:min-w-min lg:w-1/2" : ""

    const toCv = () => {
        let url = String(member?.cv)
        openUrlInNewTab(url)
    }
    const toWebsite = () => {
        let url = String(member?.website)
        openUrlInNewTab(url)
        
    }

    $: about = member?.about 
        ? member?.about.replace('\n', '<br/>')
        : null   

    export let useStickyTextHero = false;
    export let useStickyImages = true;
    const stickyClasses = useStickyTextHero 
        ? 'top-32 sm:top-28 z-50'
        : 'top-0 z-50'

    
    import { onMount } from 'svelte'
    import { fly, fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    export let delay:number = 0 
    export let showDivider:boolean = false
    let animate = false
    onMount(() => {
        animate = true
    })
</script>
{#if animate}
<div in:fly={{y:200, delay: delay, duration: 1500}} >
<div
    
    class="card {styleCardSide} ease-in-out duration-300 "
>
    <!-- hover:shadow-2xl -->

    <!-- {#if member?.image} -->
    
    <figure class="m-8 flex-col bg-base-100 {useStickyImages ? 'sticky' : ''} {stickyClasses}">
        <div class="card-body {styleCardWidth} py-2 lg:hidden">
            <h2 class="card-title sticky">
                {#if typeof member.name === 'object'}
                    {member.name_str}
                {:else}
                    {member?.name}{#if member?.title}, {member?.title}{/if}
                {/if}
            </h2>
        </div>        
        <div class="avatar inline-flex place-content-center place-items-start">
            <div class="
                w-48 mask mask-squircle 
                bg-gradient-to-r from-cyan-500 to-blue-500                
                "
            >
                <!-- {member?.image ? '' : 'animate-pulse'} -->
                <!-- min-w-max max-h-max h-48 inline-flex -->
                {#if member?.image}
                <img 
                    src={member?.image} 
                    alt="{`${member?.name_str} profile image`}"
                />
                {/if}
            </div>
        </div>            
    </figure>   
    <!-- {/if}      -->

    <div class="card-body {styleCardWidth}">
        <h2 class="hidden lg:block card-title sticky">
            {#if typeof member.name === 'object'}
                {member.name_str}
            {:else}
                {member?.name}{#if member?.title}, {member?.title}{/if}
            {/if}
            
        </h2>
        <div class="lg:max-h-48 lg:overflow-y-scroll">
            <!-- max-h-48 overflow-y-scroll -->
            {@html about}
        </div>
        {#if member?.website || member?.cv}
            <div class="card-actions justify-end">
                {#if member?.website!==null}                    
                    <button class="btn btn-primary btn-outline" on:click={toWebsite}>
                        Website
                    </button>
                {/if}
                {#if member?.cv} 
                    <button class="btn btn-secondary btn-outline" on:click={toCv}>C.V.</button>
                {/if}                
            </div>
        {/if}            
    </div>
</div>   
    {#if showDivider}
        <div class="divider divider-vertical h-8"></div>
    {/if}
</div>
{/if}