<!-- https://github.com/Sarodus/svelte-quicksearch-bar/blob/master/src/QuickSearchBar.svelte -->
<script lang="ts">
    import { setContext, getContext, onDestroy } from 'svelte';
    import { modal } from '$lib/Stores/search.js';
	import { fade, fly } from 'svelte/transition';    

    import {pb} from '$lib/Utils/pocketbase'
    import { ClientResponseError } from "pocketbase";
    import SearchInput from '$lib/Search/SearchInput.svelte';
    import SearchButton from '$lib/Search/SearchButton.svelte';
    import SearchSkeleton from '$lib/Search/SearchSkeleton.svelte';
    import SearchSectionWaiting from '$lib/Search/SearchSectionWaiting.svelte';
    import SearchSection from '$lib/Search/SearchSection.svelte';
    import FuzzySearch from '$lib/Fuzzy/FuzzySearch.svelte';
    import Modal from '$lib/Utils/Modal.svelte'

    const queryMap = {
        slugs: {
            collection: 'slugs',
            filter: (s) => `slug~"${s}" || original~"${s}"`,            
        },
        songs: {
            collection: 'songs',
            filter: (s) => `title~"${s}" || about~"${s}" || genres?~"${s}"`,
            expand: `albums, artists, writers, producers, lyrics, labels, slug`
        },
        albums: {
            collection: 'albums',
            filter: (s) => `name~"${s}" || genres?~"${s}"`,
            expand: `songs, slug`
        },
        labels: {
            collection: 'labels',
            filter: (s) => `name~"${s}"`,
            expand: `slug`
        },
        persons: {
            collection: 'persons',
            filter: (s) => `name~"${s}" || roles?~"${s}"`,
            expand: `slug`  
        },    
    }

    // NOTE: for search
    let query: string = ''    
	let input
    let isSearching = false;

    // NOTE: for modal
    // let modal = false
    let cmd, k, slash
    $: hotKeyActive = (cmd && k) || slash

    
    // NOTE: for results
    let foundSlugs, foundSongs, foundAlbums, foundLabels, foundPersons
    let totalResults = 0

    const searchSectionsNames = 'songs albums labels persons links'.split(' ')
    $: searchSectionsPromises = [foundSongs, foundAlbums, foundLabels, foundPersons, foundSlugs]
    
    function clearSearch() {
        query = ''
        foundSlugs = undefined 
        foundSongs = undefined 
        foundAlbums = undefined  
        foundLabels = undefined 
        foundPersons = undefined 
        totalResults = 0
        isSearching = false

    }

    function search(event) {
        isSearching = true
        totalResults = 0;

        foundSlugs = generateSearch(queryMap.slugs)().then(r=>{totalResults += r.length; return r})
        foundSongs = generateSearch(queryMap.songs)().then(r=>{totalResults += r.length; return r})
        foundAlbums = generateSearch(queryMap.albums)().then(r=>{totalResults += r.length; return r})
        foundLabels = generateSearch(queryMap.labels)().then(r=>{totalResults += r.length; return r})
        foundPersons = generateSearch(queryMap.persons)().then(r=>{totalResults += r.length; return r})        
        Promise
            .allSettled([foundSlugs, foundSongs, foundAlbums, foundLabels, foundPersons])
            .then(()=>{
                isSearching=false                
            })
    }
    
    function generateSearch({
        collection, filter=null, expand=null,
        start=1, end=6
    }) {
        let queryParams = {}
        if (filter !== null) queryParams.filter = filter(query)
        if (expand !== null) queryParams.expand = expand
        
        const searchFunction = async () => {
            
            if (query === '') return []
            try {
                const results = await pb
                    .collection(collection)
                    .getList(start, end, queryParams)                            
                return results?.items
            } catch (ClientResponseError) {
                return []
            }
        }
        return searchFunction
    }

    function updateStoreModal(b) {
        if (b) {
            modal.update(v=>b)
            setTimeout(()=>{
                input?.focus()
            }, 5)
        } else {
            modal.update(v=>b)
            setTimeout(()=>{
                input?.blur()
            }, 5)
            
        }
    }


    function closeModal(event) {
        updateStoreModal(false)
    }
    function onModal(event) {
        updateStoreModal(true)
    }
    function escapeModal(event) {        
        if (!$modal) return 
        if (event.key === 'Escape' || event.keyCode === 27) {
            updateStoreModal(false)
            clearSearch()
        }
    }
    function triggerModal(event, keyDirection = 'down') {        
        let which = keyDirection === 'down' ? true : false
        if ($modal) escapeModal(event)
        else {
            if (event.key) cmd = which            
            switch (event.key) {
                case '⌘':
                    cmd = which
                    event.preventDefault();
                    break;
                case 'Control':
                    cmd = which
                    event.preventDefault();
                    break;
                case 'Meta':
                    cmd = which
                    event.preventDefault();
                    break;
                case 'k':
                    k = which
                    event.preventDefault();
                    break;
                case '/':
                    slash = which
                    event.preventDefault();
                    break;            
                default:
                    cmd = false 
                    k = false
                    slash = false
                    event.preventDefault();                    
                    break;
            }
        }        
        if (hotKeyActive && !$modal) {  
            updateStoreModal(true)
            event.preventDefault();
        }
    }
    function onKeyDown(event) {
        triggerModal(event, 'down')        
	}

    function onKeyUp(event) {
        triggerModal(event, 'up') 
	}
</script>

<svelte:window on:keydown={onKeyDown} on:keyup={onKeyUp}/>


<Modal modal={$modal}>
    <SearchInput  
        class="sticky top-0 bg-white"
        bind:this={input}       
        bind:query={query}
        on:close={closeModal}
        on:searching={search}            
    />

    {#if (isSearching && totalResults === 0)}
    <SearchSkeleton />
    {:else if totalResults !== 0}
    <div class="mx-auto px-4 w-full inline-block bg-white">
        <h2 class="text-xl font-bold tracking-tight text-gray-900">Search Results</h2>
        <p class="mt-4 text-gray-500">
            We checked our records for content related to 
            "<span class="font-quicksand font-medium font-italic text-slate-700"><FuzzySearch {query}>{query}</FuzzySearch></span>". 
            Here are the top
            {totalResults}.
        </p>
    </div>
    {/if}  
        
    <dl class="bg-white px-4 mt-2 mx-auto grid grid-cols-1 gap-4 h-screen overflow-y-scroll">
        {#each searchSectionsPromises as promise, i}
            {#await promise}
            <SearchSectionWaiting useSekeleton={true}>
                <span class="capitalize">{searchSectionsNames[i]}</span>
            </SearchSectionWaiting>                
            {:then results}
                <SearchSection {query} {results} section={searchSectionsNames[i]}>
                </SearchSection>
            {:catch error}
                <p style="color: red">{error.message}</p>
            {/await}
        {/each}            
    </dl>   
</Modal>