/** @type {import('./$types').PageLoad} */
import type {project as projectInterface} from '$lib/types'

import projects from '$lib/data/projects.json'
export function load({ }) {
    return {
        projects: projects.map(e=>e as projectInterface)
    };
  }