<script>
    // import {MAPBOX_API_KEY} from '$env/static/private'
    const key = 'pk.eyJ1IjoiZHNtNzIiLCJhIjoiY2w5OGxyd3BqMHRmOTQxbXZxdnc5ZDFneiJ9.nSwC10Ves0TE5xZYWUEwww'

    import { browser } from '$app/environment';
    import { onMount } from 'svelte';

    import { Map, Geocoder, Marker, controls } from '@beyonk/svelte-mapbox'
    const { GeolocateControl, NavigationControl } = controls
    
    let mapComponent
    
    let zoom = 14
    
    const lat = 41.303190
    const lng = -72.933910
    
    $: center = {lat, lng}
    
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

<div class="flex place-content-center {$$props.class}">
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

