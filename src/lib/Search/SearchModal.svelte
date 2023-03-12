<!-- https://github.com/Sarodus/svelte-quicksearch-bar/blob/master/src/QuickSearchBar.svelte -->
<script lang="ts">
    import { setContext, getContext, onDestroy } from 'svelte';
    import { modal } from '$lib/Stores/search';
    
    import SearchInput from '$lib/Search/SearchInput.svelte';
    import SearchSkeleton from '$lib/Search/SearchSkeleton.svelte';
    import SearchSectionWaiting from '$lib/Search/SearchSectionWaiting.svelte';
    import SearchSection from '$lib/Search/SearchSection.svelte';
    import FuzzySearch from '$lib/Fuzzy/FuzzySearch.svelte';
    import Modal from '$lib/Layout/Modal.svelte'

    
    const queryMap = {
        affiliations: {
            collection: 'affiliations',
            filter: (s:string) => `slug~"${s}" || original~"${s}"`,            
        },
        courses: {
            collection: 'courses',
            filter: (s:string) => `title~"${s}" || about~"${s}" || genres?~"${s}"`,
            expand: `albums, artists, writers, producers, lyrics, labels, slug`
        },
        members: {
            collection: 'members',
            filter: (s:string) => `name~"${s}" || genres?~"${s}"`,
            expand: `songs, slug`
        },
        projects: {
            collection: 'projects',
            filter: (s:string) => `name~"${s}"`,
            expand: `slug`
        },
        publications: {
            collection: 'selected_publications',
            filter: (s:string) => `name~"${s}" || roles?~"${s}"`,
            expand: `slug`  
        },    
    }

    // NOTE: for search
    let query: string = ''    
	let input: HTMLInputElement
    let isSearching = false;

    // NOTE: for modal
    // let modal = false
    let cmd:boolean, k:boolean, slash:boolean
    $: hotKeyActive = (cmd && k) || slash

    
    // NOTE: for results
    let foundAffiliation, foundCourses, foundMembers, foundProjects, foundPublications
    let totalResults = 0

    const searchSectionsNames = 'affiliations courses members projects publications'.split(' ')
    $: searchSectionsPromises = [
        foundAffiliation, foundCourses, foundMembers, foundProjects, foundPublications
    ]
    
    function clearSearch() {
        query = ''
        foundAffiliation = undefined 
        foundCourses = undefined 
        foundMembers = undefined  
        foundProjects = undefined 
        foundPublications = undefined 
        totalResults = 0
        isSearching = false

    }

    function search(event) {
        isSearching = true
        totalResults = 0;

        foundAffiliation = generateSearch(queryMap.affiliations)().then(r=>{totalResults += r.length; return r})
        foundCourses = generateSearch(queryMap.courses)().then(r=>{totalResults += r.length; return r})
        foundMembers = generateSearch(queryMap.members)().then(r=>{totalResults += r.length; return r})
        foundProjects = generateSearch(queryMap.projects)().then(r=>{totalResults += r.length; return r})
        foundPublications = generateSearch(queryMap.publications)().then(r=>{totalResults += r.length; return r})        
        
        Promise
            .allSettled([foundAffiliation, foundCourses, foundMembers, foundProjects, foundPublications])
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

    function updateStoreModal(bool:boolean) {
        if (bool) {
            modal.update(v=>bool)
            setTimeout(()=>{
                input?.focus()
            }, 5)
        } else {
            modal.update(v=>bool)
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