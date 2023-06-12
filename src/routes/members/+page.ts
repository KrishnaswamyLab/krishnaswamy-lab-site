/** @type {import('./$types').PageLoad} */
import type {Members} from '$lib/types'
import {
  LoadGlobsAllAtOnces, 
  SortMemberByImage, SortMemberByName,
  SortMemberByPI
} from '$lib/utils'

// import members from '$lib/data/members.json'
const yamls = import.meta.glob('/src/yaml/members/*.yml', {import: 'default'})

export async function load({ }) {   
  // let sorted = (members as Members).sort(SortMemberByImage)  
  let members = (await LoadGlobsAllAtOnces(yamls) as Members)
  let sorted = members    
    .sort(SortMemberByPI)
    .sort(SortMemberByName)
    .sort(SortMemberByImage)

  
    
    
  return { members: sorted };
}