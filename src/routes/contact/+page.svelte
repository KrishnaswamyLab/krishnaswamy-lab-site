<script>
import {LabTwitterLink, LabGitHubLink} from '$lib/utils';

import GitHub from '$lib/Icons/GitHub.svelte';
import Twitter from '$lib/Icons/Twitter.svelte';
import Mail from '$lib/Icons/Mail.svelte';
import Phone from '$lib/Icons/Phone.svelte';

import JellyContainer from '$lib/Layout/JellyContainer.svelte';
import ContactSquare from '$lib/Layout/ContactSquare.svelte';


const contactSquares = [
    {
        what: 'Follow Us',
        icon: Twitter,
        href: LabTwitterLink,
        fill: 'fill-sky-400',
        text: 'text-sky-400',
        how: '@KrishnaswamyLab'
    },
    {
        what: 'Fork Us',
        icon: GitHub,
        href: LabGitHubLink,
        fill: '',
        text: 'text-slate-900',
        how: '@KrishnaswamyLab'
    },
    {
        what: 'Email Us',
        icon: Mail,
        href: 'mailto:smita.krishnaswamy@yale.edu',
        fill: 'fill-slate-900',
        text: 'text-slate-900',
        how: 'smita<wbr>.<wbr>krish<wbr>naswamy<wbr>@yale<wbr>.edu'
    },
    // {
    //     what: 'Call Us',
    //     icon: Phone,
    //     href: 'tel:203.785.7833',
    //     fill: 'fill-green-400',
    //     text: 'text-green-500',
    //     how: '203.785.7833'
    // }
]

const departments = [
    {
        dept: 'Genetics Department',
        school: 'Yale School of Medicine',
        street: '333 Cedar Street',
        room: 'SHM I-336A',
        city: 'New Haven',
        state: 'CT',
        zip: '06520',
    },
    {
        dept: 'Computer Science Department',
        school: 'Yale School of Applied Science and Engineering',
        street: '10 Hillhouse Avenue',
        room: 'DL 227',
        city: 'New Haven',
        state: 'CT',
        zip: '06511',
    },
]

import Hero from '$lib/Layout/Hero/Hero.svelte';
import MapBox from '$lib/Contact/MapBox.svelte';

import { onMount } from 'svelte'
import { fly, fade } from 'svelte/transition';

let animate = false
onMount(() => {
    animate = true
})

import TwitterSEO from '$lib/SEO/Twitter.svelte'
import OpenGraphSEO from '$lib/SEO/OpenGraph.svelte'

</script>

<TwitterSEO
    title="Contact the Krishnaswamy Lab"
    url="https://www.krishnaswamylab.org/contact"
/>
<OpenGraphSEO
    title="Contact the Krishnaswamy Lab"
    url="https://www.krishnaswamylab.org/contact"
/>

<Hero></Hero>

<JellyContainer>
    <div class="text-center">
        <Hero>
            The Krishna<wbr>swamy Lab
            <div slot="tagline">
                Smita Krishnaswamy, Ph.D
            </div>
        </Hero>            
        
        <div class="divider divider-vertical"></div>
    
        {#if animate} 
        <p 
            in:fly={{y:200, delay: 100, duration: 1500}} 
            class="py-8 text-2xl md:text-3xl font-extralight">
            Get in touch
        </p>        
        <div class="py-8 flex flex-row place-content-between gap-4 flex-wrap">
            {#each contactSquares as square, i (i)}
                <ContactSquare          
                    class="basis-full md:flex-1"       
                    href="{square.href}" 
                    howClass="{square.text}"
                    delay={i*100+100}
                    {animate}
                >
                    <span slot="what">
                        {square.what}
                    </span>
                    <span slot="icon">
                        <svelte:component 
                            this={square.icon}
                            class="w-8 h-8 {square.fill}"
                        />                            
                    </span>
                    <span slot="how">
                        {@html square.how}
                    </span>
                </ContactSquare>
            {/each}                        
        </div>
        
        <p 
            in:fly={{y:200, delay: 100, duration: 1500}} 

            class="py-8 text-2xl md:text-3xl font-extralight">
            Meet in person
        </p>

        <div class="py-8 inline-flex place-content-center w-full">
            <div class="grid grid-cols-1 md:grid-cols-2  w-full gap-8">
                {#each departments as {dept, school, street, room, city, state, zip}, i (i)}
                    <div
                        in:fly={{y:200, delay: i*100 + 100, duration: 1500}} 
                        class="
                        card card-compact card-bordered border-base-300
                        bg-base-200                            
                        hover:shadow-2xl transition-all ease-in-out
                        duration-300 hover:-translate-y-2
                    ">
                        <div class="card-body">
                            <div class="card-title text-center inline-block">
                                {dept} <br/> 
                                <span class="font-light">
                                    {school}
                                </span>
                            </div>

                            <div class="text-md">
                                <span>{street}</span>
                                <br/>
                                <span>{room}</span>
                                <br/>
                                <span>{city}, {state} {zip}</span>
                            </div>
                        </div>
                    </div>
                {/each}   
            </div>                        
        </div> 
        {/if}                
        <MapBox/>
    </div>
</JellyContainer>
