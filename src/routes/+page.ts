/** @type {import('./$types').PageLoad} */
import type {
    ResearchCategory as ResearchCategoryInterface,
    affiliation as affiliationInterface
} from '$lib/types'


import categories from '$lib/data/research_categories.json'
import affiliations from '$lib/data/affiliations.json'

export function load({ }) {
    return {
        categories: categories.map(e=>e as ResearchCategoryInterface),
        affiliations: affiliations.map(e=>e as affiliationInterface)
    };
  }