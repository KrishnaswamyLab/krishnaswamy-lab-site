/** @type {import('./$types').PageLoad} */
import type {
    ResearchCategory as ResearchCategoryInterface,
    ResearchCategories,
    Affiliations,
    Affiliation as AffiliationInterface
} from '$lib/types'
import {LoadGlobsAllAtOnces} from '$lib/utils'

// import categories from '$lib/data/research_categories.json'
// import affiliations from '$lib/data/affiliations.json'
const aff_yamls = import.meta.glob('/src/yaml/affiliations/*.yml', {import: 'default'})
const cat_yamls = import.meta.glob('/src/yaml/research_categories/*.yml', {import: 'default'})


export async function load({ }) {
    
    const categories = (await LoadGlobsAllAtOnces(cat_yamls) as ResearchCategories)
    const affiliations = (await LoadGlobsAllAtOnces(aff_yamls) as Affiliations)

    return {
        categories: categories.sort((a,b) => {
            let an = Number(a?.sort) as number
            let bn = Number(b?.sort) as number
            return an - bn
        }),
            //.map(e=>e as ResearchCategoryInterface),
            
        affiliations: affiliations.sort((a,b) => {
            let an = Number(a?.sort) as number
            let bn = Number(b?.sort) as number
            return an - bn
        })
            //.map(e=>e as AffiliationInterface)
    };
  }