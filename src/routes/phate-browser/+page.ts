/** @type {import('./$types').PageLoad} */

const POINTS_JSON = 'data/eb_2018_phate.json'
const COUNTS_JSON = 'data/eb_2018_counts.json'

// const countFiles = import.meta.glob(
//     '../../../static/data/eb_2018_counts_*.json', 
// );
const stubs = [
    'CD34', 'CD69', 'CDH1', 'CDH5', 'CER1', 'CXCR4', 'DPPA4', 'EDNRB',
    'EN2', 'EOMES', 'FOXA2', 'FOXD3', 'GATA3', 'GATA4', 'GATA6', 'GBX2',
    'HHEX', 'ISL1', 'ITGA4', 'ITGA6', 'KDR', 'LMO2', 'MAP2', 'MIXL1',
    'MYBPC2', 'MYH6', 'NANOG', 'NES', 'NEUROD1', 'NKX2-5', 'NPAS1', 'NR2F1',
    'NR2F6', 'NR6A1', 'ONECUT1', 'ONECUT2', 'OTX2', 'PAX3', 'PAX6',
    'PDGFRA', 'PECAM1', 'POU5F1', 'PRDM14', 'SIX2', 'SOX1', 'SOX10',
    'SOX17', 'SOX2', 'SOX9', 'TAL1', 'TBX15', 'TBX18', 'TBX5', 'TNNT2',
    'TP53', 'TP63', 'TTN', 'WT1', 'ZBTB16', 'ZIC2', 'ZIC5', 'Timepoint'
]

export async function load({  fetch }) {
    const points =  fetch(`/${POINTS_JSON}`)
        .then((e)=>{
            return e.json()
        })

    
    const counts = []
    stubs.forEach(stub => {
        fetch(`/data/eb_2018_counts_${stub}.json`)
            .then((response) => {
                return response.json()
            })
            .then((arr) => {
                arr.map((e, i) => {
                    counts[i] = {...counts[i], ...e}
                })
            })
    })
    return {points, counts};
}