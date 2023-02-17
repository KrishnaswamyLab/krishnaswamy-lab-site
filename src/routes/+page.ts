/** @type {import('./$types').PageLoad} */
import type {
    projectCategory as projectCategoryInterface,
    affiliation as affiliationInterface
} from '$lib/types'


import categories from '$lib/data/project_categories.json'
import affiliations from '$lib/data/affiliations.json'

export function load({ }) {
    return {
        categories: categories.map(e=>e as projectCategoryInterface),
        affiliations: affiliations.map(e=>e as affiliationInterface)
    };
  }