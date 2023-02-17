<script>
    import {LabTwitterLink, LabGitHubLink} from '$lib/utils';

    import GitHub from '$lib/Icons/GitHub.svelte';
    import Twitter from '$lib/Icons/Twitter.svelte';
    import Mail from '$lib/Icons/Mail.svelte';
    import AcademicCap from '$lib/Icons/AcademicCap.svelte';
    import Phone from '$lib/Icons/Phone.svelte';


    const key = 'pk.eyJ1IjoiZHNtNzIiLCJhIjoiY2w5OGxyd3BqMHRmOTQxbXZxdnc5ZDFneiJ9.nSwC10Ves0TE5xZYWUEwww'
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';

    import { Map, Geocoder, Marker, controls } from '@beyonk/svelte-mapbox'
    const { GeolocateControl, NavigationControl } = controls
    let mapComponent
    const lat = 41.303190
    const lng = -72.933910
    $: center = {lat, lng}
    let zoom = 14

    function recentre ({ detail }) {
        center = detail.center
    }
    function drag ({ detail }) {
        marker = detail.center
    }
    
    onMount(async () => {
        if (browser) {
            mapComponent.setCenter([lng,lat], zoom) // zoom is optional
            mapComponent.flyTo({center:[lng,lat]}, zoom)        
        }
    })
    

    const contactInfos = [
        {
            bold: 'Follow us',
            pref: 'on',
            link: LabTwitterLink,
            text: 'Twitter',
        },
        {
            bold: 'Access',
            pref: 'on',
            link: LabGitHubLink,
            text: 'GitHub',
        },
        {
            bold: 'Call us',
            pref: 'at',
            link: 'tel:203.785.7833',
            text: '203.785.7833',
        },
        {
            bold: 'Email',
            pref: 'at',
            link: 'mailto:smita.krishnaswamy@yale.edu',
            text: 'smita.krishnaswamy@yale.edu',
        },
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

    const iconHover = ''//'m-2 transition-all duration-300 ease-in-out hover:w-12 hover:h-12 hover:m-0'
    
</script>
<style>
    /* this one not necessary */
    :global(.mapboxgl-map) {
        height: 24rem; /* 320px tailwindcss h-80 */
    }
    /* this one necessary */
    .map-wrap {        
        height: 24rem; /* tailwindcss h-96 */
    }
    :global(#logo svg) {
        fill: white;
        height: 60px;
    }
    .slogan {
        margin-top: 14px;
    }
    
    .action-buttons {
        display: flex;
        justify-content: space-between;
    }

</style>


<div class="bg-primary h-16"></div>

<div class="hero h-full min-h-screen">
    <div class="hero-content text-center w-full">
        <div class="w-full">
            <h1 class="my-5 text-5xl uppercase break-all">
                The Krishnaswamy Lab
            </h1>        
            <p class="py-8 text-3xl font-extralight">
                Smita Krishnaswamy, Ph.D
            </p>

            <div class="w-72 inline-block place-items-center">
                <div class="divider divider-veritcal"></div>
            </div>

            <p class="py-8 text-3xl font-extralight">
                Get in touch
            </p>

            <div class="py-8 grid grid-cols-2 md:grid-cols-4 justify-evenly  gap-4">
                <div class="card card-bordered border-slate-700 grid-cols-1">
                    <div class="card-body place-items-center">
                        <div class="card-title">
                            <span class="capitalize">
                                Follow us
                            </span>                            
                        </div>
                        <a href="{LabTwitterLink}" class="py-2">
                            <Twitter class="w-8 h-8 fill-sky-400  {iconHover}"/>
                        </a>                        
                        <a href="{LabTwitterLink}" class="link link-hover text-sky-400">
                            @KrishnaswamyLab
                        </a>
                    </div>                    
                </div>
                <div class="card card-bordered border-slate-700 grid-cols-1">
                    <div class="card-body place-items-center">
                        <div class="card-title">
                            <span class="capitalize">
                                Fork us
                            </span>
                        </div>
                        <a href="{LabGitHubLink}" class="py-2">
                            <GitHub class="w-8 h-8 {iconHover}"/>
                        </a>                                                
                        <a href="{LabGitHubLink}" class="link link-hover text-slate-900">
                            @KrishnaswamyLab
                        </a>
                    </div>                    
                </div>
                <div class="card card-bordered border-slate-700 grid-cols-1">
                    <div class="card-body place-items-center">
                        <div class="card-title">
                            <span class="capitalize">
                                Email us
                            </span>
                        </div>
                        <a href="mailto:smita.krishnaswamy@yale.edu" class="py-2">
                            <Mail class="w-8 h-8 fill-slate-400  {iconHover}"/>
                        </a>                        
                        <a 
                            href="mailto:smita.krishnaswamy@yale.edu" 
                            class="link link-hover text-slate-900 break-all "
                        >
                            smita.krishnaswamy@yale.edu
                        </a>
                    </div>                    
                </div>
                <div class="card card-bordered border-slate-700 grid-cols-1">
                    <div class="card-body place-items-center">
                        <div class="card-title">
                            <span class="capitalize">
                                Call us
                            </span>
                        </div>
                        <a href="tel:203.785.7833" class="py-2">
                            <Phone class="w-8 h-8 fill-green-400  {iconHover}" />
                        </a>
                        <a href="tel:203.785.7833" class="link link-hover text-green-500">
                            203.785.7833
                        </a>
                    </div>                    
                </div>              
            </div>

            <!-- <div class="w-72 inline-block place-items-center">
                <div class="divider divider-veritcal"></div>
            </div> -->

            
            

            <p class="py-8 text-3xl font-extralight">
                Meet in person
            </p>

            <div class="p-8 inline-flex place-content-center w-full">
                <div class="grid grid-cols-1 md:grid-cols-2  w-full gap-8">
                    {#each departments as {dept, school, street, room, city, state, zip}}
                        <div class="
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

            <div class="flex place-content-center px-8">
                <div class="w-full h-96">
                    {#if browser}
                    <div id="map" class="">
                        <div class="w-full map-wrap">
                            <Map
                                accessToken="{key}"
                                style='mapbox://styles/mapbox/light-v11'
                                bind:this={mapComponent}
                                on:drag={drag}
                                bind:zoom
                                on:recentre={recentre}
                                options={{ scrollZoom: false }} 
                            >
                                <NavigationControl />
                                <Marker lat={lat} lng={lng} />
                            </Map>
                            
                        </div>
                    </div>            
                    {/if}
                </div>
            </div>         
        </div>
    </div>
</div>