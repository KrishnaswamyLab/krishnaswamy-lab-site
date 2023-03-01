// (projects as ProjectsInterface).sort(SortProjectByYear)
// projects.map(e=> new Project(e as ProjectInterface))

/** @type {import('./$types').PageLoad} */
import type {Publications, Projects} from '$lib/types'
import {Publication, Project} from '$lib/classes'
import {SortProjectByYear, LoadGlobsAllAtOnces} from '$lib/utils'

// import projects from '$lib/data/projects.json'
const yamls = import.meta.glob('/src/yaml/projects/*.yml', {import: 'default'})

export async function load({ }) {     
  let projects = (await LoadGlobsAllAtOnces(yamls) as Projects)
  let sorted = projects.map(e => new Project(e)).sort(SortProjectByYear)
  return { projects: sorted };
}