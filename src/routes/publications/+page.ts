/** @type {import('./$types').PageLoad} */
import type {Publications} from '$lib/types'
import {Publication} from '$lib/classes'
import {SortPublicationsByYear, LoadGlobsAllAtOnces} from '$lib/utils'

// import selectedPublications from '$lib/data/selected_publications.json'
const yamls = import.meta.glob('/src/yaml/selected_publications/*.yml', {import: 'default'})

export async function load({ }) {     
  let publications = (await LoadGlobsAllAtOnces(yamls) as Publications)
  let sorted = publications.map(e=>new Publication(e)).sort(SortPublicationsByYear)
  return { selectedPublications: sorted };
}