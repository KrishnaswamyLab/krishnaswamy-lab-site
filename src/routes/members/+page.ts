/** @type {import('./$types').PageLoad} */
import type {member as memberInterface} from '$lib/types'
import members from '$lib/data/members.json'

export function load({ }) {
    return {
        members: members.map(e=>e as memberInterface)
    };
  }