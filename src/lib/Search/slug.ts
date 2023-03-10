import {redirect, error} from '@sveltejs/kit'
import { currentUser, pb } from '$lib/Utils/pocketbase';
import { ClientResponseError } from "pocketbase";

/** @type {import('./$types').PageLoad} */
export async function handleSlug({ fetch, params, route, locals }) {

    const path = route.id
    const name = params.name

    let collection;
    switch (path) {
        case '/songs/[name]':
            collection = 'songs'
            break;
        case '/albums/[name]':
            collection = 'albums'
            break;
        case '/persons/[name]':
            collection = 'persons'
            break;
        case '/labels/[name]':
            collection = 'labels'
            break;
        default:
            break;
    }


    console.log(name, path, collection)

    let expansion;
    switch (collection) {
        case 'songs':
            expansion = `albums, albums.songs, albums.slug, artists, 
            artists.slug, producers, producers.slug, writers, writers.slug, 
            labels, labels.slug, lyrics, releases, slug
            `
            break;
        case 'albums':
            expansion = `artists, artists.slug, producers, producers.slug, labels, labels.slug, songs, slug`
            break;
        case 'persons':
            expansion = `slug`
            break;
        case 'labels':
            expansion = `slug`
            break;
        default:
            break;
    }

    
    try {        
        const exactMatchFilter = `(slug = "${name}" && collection = "${collection}")`
        const closeMatchFilter = `(slug ~  "${name}" || original ~ "${name}")`
        const slugRecord = await pb
            .collection('slugs')
            .getFirstListItem(
                `${exactMatchFilter} || ${closeMatchFilter}`
            )

        const isExactMatch = (slugRecord?.slug === name && slugRecord?.full === path.replace(`[name]`, name))        
        if (slugRecord && isExactMatch) { 
            // found exact match get data
            console.log(`Exact match for slug=${name}`, slugRecord)
            const dataRecord = await pb.collection(slugRecord.collection).getOne(slugRecord.record, {expand:expansion})
            console.log(dataRecord)
            return {...dataRecord}

        } else if (slugRecord) {
            // found close enough match, so redirct
            console.log(`Close match for slug=${name}`, slugRecord, 'redirecting to', slugRecord.full)
            throw redirect(307, slugRecord.full)

        } else {
            // found nothing (i.e. client response error)
        }

    } catch (exception) {        
        if (exception instanceof ClientResponseError) {
            // ClientResponseError is when PocketBase does not find any record at all
            console.error('Error when trying to find an exact match (i.e. no exact match)')
        } else if (exception.status === 307 && !!exception.location) {
            console.log('Caught our redirect')
            throw exception
        }
        // Not found
        throw error(404, `Not found`) 
    } 
}