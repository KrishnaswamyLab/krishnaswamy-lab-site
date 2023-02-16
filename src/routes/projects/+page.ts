/** @type {import('./$types').PageLoad} */
import type {project as projectInterface} from '$lib/types'


import projects from '$lib/data/projects.json'
const yearSort = (a:projectInterface, b:projectInterface) => a?.publicationYear < b?.publicationYear
projects.sort(yearSort)


export function load({ }) {
    return {
        projects: projects.map(e=>e as projectInterface)
    };
  }