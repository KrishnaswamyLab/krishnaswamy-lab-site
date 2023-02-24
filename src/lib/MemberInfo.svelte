<script lang="ts">
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import type {member as memberInterface} from '$lib/types'

    import {openUrlInNewTab, lipsum} from '$lib/utils'
        
    export let member: memberInterface = {
        name: 'Lab Member',
        title: 'PhD',
        image: null,
        website: null,
        cv: null,
        isAlum: false,
        about: lipsum
    }

    $: styleCardSide = member.image ? "lg:card-side" : ""
    $: styleCardWidth = member.image ? "lg:min-w-min lg:w-1/2" : ""

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
</script>

<div class="card {styleCardSide} ease-in-out duration-300 ">
    <!-- hover:shadow-2xl -->

    {#if member?.image}
    
    <figure class="m-8 flex-col bg-base-100 {useStickyImages ? 'sticky' : ''} {stickyClasses}">
        <div class="card-body {styleCardWidth} py-2 lg:hidden">
            <h2 class="card-title sticky">
                {member?.name}{#if member?.title}, {member?.title}{/if}
            </h2>
        </div>        
        <div class="avatar inline-flex place-content-center place-items-start">
            <div class="w-48 mask mask-squircle">
                <!-- min-w-max max-h-max h-48 inline-flex -->
                <img 
                    src={member?.image} 
                    alt="{`${member?.name} profile image`}"
                />
            </div>
        </div>            
    </figure>   
    {/if}         
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
                {#if member?.cv!==null} 
                    <button class="btn btn-secondary btn-outline" on:click={toCv}>C.V.</button>
                {/if}                
            </div>
        {/if}            
    </div>
</div>   