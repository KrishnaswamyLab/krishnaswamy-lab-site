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
            Postdoctoral Positions in Machine Learning for Biomedical Data at Yale
        </p>

        <div class="flex place-content-center pt-8 text-left">
            <div class="text-slate-700 leading-relaxed ">
                <p class="my-4">
                    The Krishnaswamy Laboratory at Yale University is recruiting senior scientist / postdoctoral researchers with a background in machine learning, deep learning, applied math or signal processing.  Our group is jointly affiliated with the Department of Genetics in the Yale School of Medicine and the Department of Computer Science in School of Engineering and Applied Sciences. Our group is also affiliated with the the Program in Applied Math, the Yale Institute for Network Science, Yale Cancer Center, and the Yale Center for Biomedical Data Science.
                </p>
                <p class="my-4">
                    The focus of our group is developing machine learning and applied mathematical techniques for extracting structure and patterns in high-dimensional and high-throughput biomedical data. Our recent projects include algorithms for: data denoising (Cell 2018), data generation (NeurIPS 2018), deep learning-based manifold alignment (ICML 2018), data visualization, and developing software for single cell analysis. The projects in the lab tend to be flexible, seeking computationally novel solutions to new problems that are motivated by the explosion of new biomedical measurement technologies and collected patient data. As such we work with data from many disciplines, including genomics, electronic health records, and neuro-imaging.
                </p>
                <p class="my-4">
                    The lab maintains active collaborations with research groups in the Departments of Immunology, Neuroscience, Genetics, Neurology, Radiation Oncology, and Endocrinology as well as outside institutions like Weill Cornell and the Salk Institute. Our group publishes in top-tier computational venues (such as NeurIPS and ICML) and biomedical journals (such as Cell and Nature family journals).
                </p>
                <p class="my-4">
                    Candidates who apply should have a Ph.D. in Computer Science, Electrical Engineering, Applied Mathematics or related field. Prior experience in biological research is not required, but interest in collaborating with biologists and physicians is essential.
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
