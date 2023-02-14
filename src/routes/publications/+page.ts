/** @type {import('./$types').PageLoad} */
import type {publication as publicationInterface} from '$lib/types'

import publications from '$lib/data/citations.json'
import publicationsCategories from '$lib/data/publication_categories.json'

const yearSort = (a:publicationInterface, b:publicationInterface) => a?.year < b?.year
publications.sort(yearSort)
export function load({ }) {
    return {
        publications: publications.map(e=>e as publicationInterface),
        categories: publicationsCategories
    };
  }