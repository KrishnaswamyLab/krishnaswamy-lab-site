/** @type {import('./$types').PageLoad} */
import type {
    Project as ProjectInterface,
    Projects as ProjectsInterface
} from '$lib/types'
import {Project as ProjectClass} from '$lib/classes'
import {SortProjectByYear} from '$lib/utils'

import projects from '$lib/data/projects.json'

(projects as ProjectsInterface).sort(SortProjectByYear)
export function load({ }) {
    return {
        projects: projects.map(e=> new ProjectClass(e as ProjectInterface))
    };
  }