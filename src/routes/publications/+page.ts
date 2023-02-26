/** @type {import('./$types').PageLoad} */
import type {Publication as PublicationInterface, Publications} from '$lib/types'
import {SortPublicationsByYear} from '$lib/utils'
import {Publication as PublicationClass} from '$lib/classes'

import citations from '$lib/data/citations.json'
import selectedPublications from '$lib/data/selected_publications.json'
import publicationsCategories from '$lib/data/publication_categories.json'


export function load({ }) {
    return {        
        selectedPublications: selectedPublications
            .map(e => new PublicationClass(e as PublicationInterface))
            .sort(SortPublicationsByYear),

        categories: publicationsCategories,
    };
  }