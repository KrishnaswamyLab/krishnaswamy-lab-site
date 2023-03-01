/** @type {import('./$types').PageLoad} */
import {LoadGlobsAllAtOnces} from '$lib/utils'
import type {Course, Courses} from '$lib/types'

// import courses from '$lib/data/courses.json'
const yamls = import.meta.glob('/src/yaml/courses/*.yml', {import: 'default'})

export async function load({ }) {     
  let courses = (await LoadGlobsAllAtOnces(yamls) as Courses)
  let sorted = courses.sort((a: Course, b: Course) => {
    let bool = a.listings.sort()[0] < b.listings.sort()[0]
    return bool ? 0 : 1
  })
  return { courses: sorted };
}