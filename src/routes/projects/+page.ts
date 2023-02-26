/** @type {import('./$types').PageLoad} */
import type {Project} from '$lib/types'
import projects from '$lib/data/projects.json'

const yearSort = (a:Project, b:Project) => {
    let ay = a?.publicationYear as number
    let by = b?.publicationYear as number
    return by - ay
}

projects.sort(yearSort)
export function load({ }) {
    return {
        projects: projects.map(e=>e as Project)
    };
  }