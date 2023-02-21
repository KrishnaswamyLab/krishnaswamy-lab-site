/** @type {import('./$types').PageLoad} */

import type {
    SyllabusDayItems, Syllabus
} from '$lib/types'

import syllabus from '$lib/data/workshop_syllabus_2021.json'
import {COMPONENT_SHIELD_MAP} from '$lib/utils'


syllabus.forEach((el) => {
    el.items =  el.items.map(
        e => {
            e.col2 = COMPONENT_SHIELD_MAP[e.col2]
            return e
    }) as SyllabusDayItems
})

export function load({ }) {
    return {
        syllabus: syllabus as Syllabus
    };
  }