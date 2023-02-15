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

    $: styleCardSide = member.image ? "md:card-side" : ""
    $: styleCardWidth = member.image ? "md:min-w-min md:w-1/2" : ""

    const toCv = () => {
        let url = String(member?.cv)
        openUrlInNewTab(url)
    }
    const toWebsite = () => {
        let url = String(member?.website)
        openUrlInNewTab(url)
        
    }
</script>

<div class="p-4 m-4 card {styleCardSide} ease-in-out duration-300 ">
    <!-- hover:shadow-2xl -->
    {#if member?.image}
    <figure class="m-8">
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
        <h2 class="card-title sticky">
            {member?.name}{#if member?.title}, {member?.title}{/if}
        </h2>
        <div class="
        ">
            <!-- max-h-48 overflow-y-scroll -->
            {member?.about}
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