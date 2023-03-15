/** @type {import('./$types').PageLoad} */

const POINTS_JSON = 'data/eb_2018_phate.json'
const COUNTS_JSON = 'data/eb_2018_counts.json'

export async function load({  fetch }) {
    const points =  fetch(`/${POINTS_JSON}`)
        .then((e)=>{
            return e.json()
        })
    const counts =  fetch(`/${COUNTS_JSON}`)
        .then((e)=>{
            return e.json()
        }) 
    return {points, counts};
}