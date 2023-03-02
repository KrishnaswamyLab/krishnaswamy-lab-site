/** @type {import('./$types').PageLoad} */
import type {
    SyllabusDayItems, Syllabus, Syllabi
} from '$lib/types'
import {ShieldComponentMap, LoadGlobsAllAtOnces} from '$lib/utils'

// import syllabus from '$lib/data/workshop_syllabus_2021.json'
const yamls = import.meta.glob(
    '/src/yaml/workshops/2021/syllabus.yml', 
    {import: 'default'}
)

export async function load({ }) {
    let res = await LoadGlobsAllAtOnces(yamls) as Syllabi 
    let syllabus = res[0]// as Syllabus
    
    syllabus.forEach((el) => {    
        el.items =  el.items.map(
            e => {            
                e.col2 = ShieldComponentMap[e.col2]
                return e
        })
    })

    return {
        syllabus: syllabus as Syllabus
    };
  }