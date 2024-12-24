<script>
import Hero from '$lib/Layout/Hero/Hero.svelte';
import JellyContainer from '$lib/Layout/JellyContainer.svelte';    

let backgroundImage = '/images/heroes/join_hero.jpg'

import TwitterSEO from '$lib/SEO/Twitter.svelte'
import OpenGraphSEO from '$lib/SEO/OpenGraph.svelte'

</script>

<TwitterSEO
    title="Join the Krishnaswamy Lab"
    url="https://www.krishnaswamylab.org/join"
/>
<OpenGraphSEO
    title="Join the Krishnaswamy Lab"
    url="https://www.krishnaswamylab.org/join"
/>

<Hero></Hero>

<JellyContainer>
    <div>
        <Hero>
            Interested in Joining?
        </Hero>            
        
        <div class="flex place-content-center pt-8 text-left">
            <div class="text-slate-700 leading-relaxed ">
                <p class="my-4">
                    The Krishnaswamy Lab is always on the look out for talented undergraduate, graduate students, and post-doctoral candidates who possess outstanding computational skills or have a strong interest in developing such skills. If this describes you, please contact 
                    <a class="link link-hover" href="mailto:smita.krishnaswamy@yale.edu">
                        smita.krishnaswamy@yale.edu
                    </a> with your CV attached.
                </p>
            </div>
        </div>
        <div class="divider divider-vertical"></div>
        <p class="py-8 text-2xl md:text-3xl font-extralight text-center">
            Postdoctoral Position in Brain Dynamics and Decoding
        </p>
        <div class="flex place-content-center pt-8 text-left">
            <div class="text-slate-700 leading-relaxed ">
                <p class="my-4">
                    The Krishnaswamy and Murat Gunel labs are jointly looking for talented postdocs who are interested in the intersection of deep learning, neuroscience, psychology and neuromodulation. Our projects involve 1) creating foundation models for decoding brain signals (from EEG, MEG, fMRI and intracranial recordings) into speech, text, and images, as well as 2) creating dynamic models of brain activity during various tasks in both neurotypical and atypical individuals. We envision these projects to have joint impact in AI, neuroscience, and clinical treatment of individuals with conditions such as autism, Angelman syndrome and epilepsy. 
                </p>
                <p class="my-4">
                    Candidates should hold a Ph.D. in computer science, applied math, computational neuroscience or related field. Extensive experience building deep neural network models is essential. Familiarity with large language models and/or dynamics modeling is desired. Experience with neuroscientific data is a bonus. Postdocs will work as part of an interdisciplinary team of researchers consisting of computer scientists, neurosurgeons, psychologists, and biomedical engineers on applications that will lead to novel non-invasive BCI and other treatments for patients in the conditions mentioned above.  
                </p>
                <p class="my-4">
                    To apply, please contact 
                    <a class="link link-hover" href="mailto:smita.krishnaswamy@yale.edu">
                        smita.krishnaswamy@yale.edu
                    </a> with your CV attached. 
                </p>                
            </div>
        </div> 

        <div class="divider divider-vertical"></div>
    
        <p class="py-8 text-2xl md:text-3xl font-extralight text-center">
            Postdoctoral Position in ML and Neuroscience
        </p>

        <div class="flex place-content-center pt-8 text-left">
            <div class="text-slate-700 leading-relaxed ">
                <p class="my-4">
                    The Colon-Ramos and Krishnaswamy Labs are searching for a joint postdoctoral fellow or research associate to develop novel mathematical and computational methods to problems in connectomic discovery and understanding in neuroscience. Connectomic datasets, describing the connectivity and network structure of neurons have expanded tremendously over the past years and hold the promise of providing detailed maps of brain wiring and rewiring during learning, memory formation or disease. Connectomics datasets are multidimensional and complex and require new methods for understanding the topology, geometry, dynamics and generative principles of their organization.
                </p>
                <p class="my-4">
                    The postdoctoral fellow should have expertise in machine learning method development, with preference for those with interests in utilizing fundamentals from network science, graph signal processing, and geometric deep learning to these problems. The postdoc will be embedded in the Colón-Ramos laboratory, who are experts in the architecture of neurons and the nervous system. This will expose the postdoc to biological datasets that would benefit from implementation of machine learning approaches. The postdoc will be co-mentored by Smita Krishnaswamy, an expert Machine Learning for scientific discovery. These labs are collaborating in the use the C. elegans connectome to develop and apply new machine learning approaches in the examination of neuronal relationships in connectomes. Applying these approaches to the relatively small nervous system of the nematode C. elegans enables establishment of verifiable ground truths to the methodologies, while elucidating principles of connectivity that are relevant for other nervous systems.
                <p class="my-4"> 
                    The postdoc will also be part of the stimulating environment of the new Wu Tsai Institute, which fosters collaborations between data scientists and biologists towards generating fundamental understanding that explains human cognition.
                </p>
                <p class="my-4">
                    To apply, please contact 
                    <a class="link link-hover" href="mailto:smita.krishnaswamy@yale.edu">
                        smita.krishnaswamy@yale.edu
                    </a> with your CV attached. 
                </p>                
            </div>
        </div>    
    </div>
</JellyContainer>
