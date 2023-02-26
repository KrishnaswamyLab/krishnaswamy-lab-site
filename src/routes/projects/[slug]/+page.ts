import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
import type {Project} from '$lib/types'

import projects from '$lib/data/projects.json'
export function load({ params }) {
    const slug = params.slug
    const matches = projects.filter(({projectUrl}) => projectUrl === slug)
    const routes = projects
        .filter(({projectUrl, publicationTitle}) => projectUrl !== null && publicationTitle !== null)
        .map(({projectTitle, projectAbbreviation, projectUrl}) => {
            return {projectTitle, projectAbbreviation, projectUrl}
        })
    if (matches.length !== 1) {
        throw error(404, `Project with slug=${slug} not found`);
    }
    const project = matches[0] as Project    
    return {
        project, routes, slug
    };
  }