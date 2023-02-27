/** @type {import('./$types').PageLoad} */
import type {Member} from '$lib/types'
import members from '$lib/data/members.json'

export function load({ }) {
    return {
        members: members.map(e=>e as Member).sort((a, b)=>{
            let imgA = a?.image ? 1 : 0
            let imgB = b?.image ? 1 : 0
            return imgB - imgA            
        })
    };
  }