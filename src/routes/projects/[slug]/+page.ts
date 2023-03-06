/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import type {Publications, Projects, Project as ProjectInterface} from '$lib/types'
import {Publication, Project} from '$lib/classes'
import {SortProjectByYear, LoadGlobsAllAtOnces} from '$lib/utils'

export interface ProjectData {
    project: ProjectInterface;
    routes: {
        title: string;
        abbreviation?: string;
        href?: string;
    }[];
    slug: string;
}

// import projects from '$lib/data/projects.json'
const yamls = import.meta.glob('/src/yaml/projects/*.yml', {import: 'default'})

export async function load({ params }) {     
  let projects = (await LoadGlobsAllAtOnces(yamls) as Projects)
  let sorted = projects.map(e => new Project(e)).sort(SortProjectByYear)
  
  const slug = params.slug
  
  const matches = projects.filter(({href}) => href === slug)
  if (matches.length !== 1) {
    throw error(404, `Project with slug=${slug} not found`);
  }
  const project = new Project(matches[0] as ProjectInterface)  

  const pubTitle = project?.publication?.title
  if (pubTitle === undefined || pubTitle === null) {
    throw error(404, `Project with slug=${slug} not found`);
  }
  
  const routes = sorted
    .filter(({href, publication:{title}}) => !!href && !!title)
    .map(({title, abbreviation, href}) => {        
        return {title, abbreviation, href}
    })
    
  const data = {project, routes, slug} as ProjectData  
  return data;
}