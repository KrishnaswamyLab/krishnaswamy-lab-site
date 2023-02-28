/** @type {import('./$types').PageLoad} */
import type {Members} from '$lib/types'
import {LoadGlobsAllAtOnces, SortMemberByImage} from '$lib/utils'

import members from '$lib/data/members.json'
// const yamls = import.meta.glob(
//     '/src/yaml/members/*.yml', 
//     {import: 'default'}
// )

export async function load({ }) {   
    // let members = (await LoadGlobsAllAtOnces(yamls) as Members)
    //     .sort(SortMemberByImage)

    let sorted = (members as Members).sort(SortMemberByImage)
        
    return { members: sorted };
  }