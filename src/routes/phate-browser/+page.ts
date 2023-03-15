/** @type {import('./$types').PageLoad} */

import {LoadGlobsAllAtOnces} from '$lib/utils'

// import points from '$lib/data/eb_2018_phate.json'
// import counts from '$lib/data/eb_2018_counts.json'

const points_json = import.meta.glob('$lib/data/eb_2018_phate.json', {import: 'default'})
const counts_json = import.meta.glob('$lib/data/eb_2018_counts.json', {import: 'default'})

export async function load({ }) {

    // const points = (await LoadGlobsAllAtOnces(points_json))[0]
    // console.log(points_json[0])
    const points =  Object.values(points_json)[0]()
    const counts =  Object.values(counts_json)[0]()
    // const counts = (await LoadGlobsAllAtOnces(counts_json))[0]
    // const counts = []
    return {points, counts};
}