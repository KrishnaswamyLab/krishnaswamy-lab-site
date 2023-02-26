import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
import type {Project as ProjectInterface} from '$lib/types'
import {Project as ProjectClass} from '$lib/classes'

import projects from '$lib/data/projects.json'

interface data {
    project: ProjectInterface;
    routes: {
        projectTitle: string;
        projectAbbreviation: string | null;
        projectUrl: string | null;
    }[];
    slug: string;
}

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
    const project = new ProjectClass(matches[0] as ProjectInterface)  
    const data = {project, routes, slug} as data  
    return data;
  }