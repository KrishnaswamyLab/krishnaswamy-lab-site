/** @type {import('./$types').PageLoad} */

import type {
    SyllabusDayItem, SyllabusDayItems, Syllabus
} from '$lib/types'

import syllabus from '$lib/data/workshop_syllabus_2021.json'
import {ShieldComponentMap} from '$lib/utils'
import {LoadGlobsAllAtOnces} from '$lib/utils'
const yamls = import.meta.glob(
    '/src/yaml/workshops/2021/syllabus.yml', 
    {import: 'default'}
)



syllabus.forEach((el) => {    
    el.items =  el.items.map(
        e => {            
            e.col2 = ShieldComponentMap[e.col2]
            return e
    }) as SyllabusDayItems
})

export function load({ }) {
    return {
        syllabus: syllabus as Syllabus
    };
  }