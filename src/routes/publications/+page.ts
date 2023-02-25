/** @type {import('./$types').PageLoad} */
import type {publication, publications} from '$lib/types'

import citations from '$lib/data/citations.json'
import selectedPublications from '$lib/data/selected_publications.json'
import publicationsCategories from '$lib/data/publication_categories.json'
import selectedGraph from '$lib/data/selected_publications_graph.json'

const yearSort = (a:publication, b:publication) => {
    let ay = a?.year as number
    let by = b?.year as number
    return by - ay
}

export function load({ }) {
    return {
        publications: citations.map(e=>e as publication).sort(yearSort),
        selectedPublications: selectedPublications.map(e=>e as publication).sort(yearSort),
        categories: publicationsCategories,
        selectedGraph
    };
  }