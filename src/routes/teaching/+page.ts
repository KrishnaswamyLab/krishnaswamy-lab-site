/** @type {import('./$types').PageLoad} */
import courses from '$lib/data/courses.json'
export function load({ }) {
    return {
        courses
    };
  }