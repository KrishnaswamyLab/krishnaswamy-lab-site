/** @type {import('./$types').PageLoad} */
import type {Publication, Publications} from '$lib/types'
import {SortPublicationsByYear} from '$lib/utils'

import citations from '$lib/data/citations.json'
import selectedPublications from '$lib/data/selected_publications.json'
import publicationsCategories from '$lib/data/publication_categories.json'


export function load({ }) {
    return {
        publications: citations.map(e=>e as Publication).sort(SortPublicationsByYear),
        selectedPublications: selectedPublications.map(e=>e as Publication).sort(SortPublicationsByYear),
        categories: publicationsCategories,
        // selectedGraph
    };
  }