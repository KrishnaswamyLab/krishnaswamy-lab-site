<script lang="ts">
	import { goto } from '$app/navigation';
    import Twitter from "$lib/Icons/Twitter.svelte";
    import GitHub from '$lib/Icons/GitHub.svelte';
	const twitterLink = "https://twitter.com/KrishnaswamyLab"
    const toTwitter = () => {
        goto(twitterLink)
    }
    const githubLink = "https://github.com/KrishnaswamyLab"
    const toGitHub = () => {
        goto(githubLink)
    }

    const projects = [
        {
            href: '',
            title: 'Markov Affinity-based Graph Imputation of Cells',
            abrev: 'MAGIC',
            about: `an algorithm that uses graph signal processing for denoising and missing transcript recovery in single cell RNA sequencing. MAGIC successfully recovers gene-gene relationships from data and allows for the prediction of transcription targets.`,
            short: `RECOVERING GENE INTERACTIONS FROM SINGLE-CELL DATA USING DATA DIFFUSION`
        },
        {
            href: '',
            title: 'Potential of Heat-diffusion Affinity-based Transition Embedding',
            abrev: 'PHATE',
            about: `a visualization and dimensionality reduction technique that is sensitive to local and global relationships and successfully preserves structures of interest in biological data including cluster structure and branching trajectory structure.`,
        },
        {
            href: '',
            title: 'Sparse AutoEncoders for Clustering Imputation and Embedding',
            abrev: 'SAUCIE',
            about: `a deep autoencoder architecture that allows for unsupervised exploration of data, and has novel regularizations that allow for data denoising, batch normalization, clustering and visualization simultaneously  in various layers of the network.`,
        },
        {
            href: '',
            title: 'Manifold Enhancement of Latent Dimensions',
            abrev: 'MELD',
            about: `a graph signal processing tool to analyze multiple scRNA-seq samples from two or more conditions.`,
        },
        {
            href: '',
            title: 'Phenotypic Earth Mover\'s Distance',
            abrev: 'PhEMD',
            about: `a computational method to quantify relationships between drug perturbations on dozens to hundreds of single cell samples.`,
        },
        {
            href: '',
            title: 'conditional Density-based Resampled Estimate of Mutual Information',
            abrev: 'DEMI',
            about: `a computational method based on established statistical concepts, to characterize signaling network relationships by quantifying the strengths of network edges and deriving signaling response functions.`,
        },
        {
            href: '',
            title: 'Dynamics Modeling Networks',
            abrev: 'DyMoN',
            about: `A neural network framework for learning stochastic dynamics for generative and embedding purposes. DyMoN serves as a deep model that itself embodies a dynamic system such that the gene logic and features driving the system can be studied.  `,
        },
        {
            href: '',
            title: 'Synthesis Using Geometrically Aligned Random-walks',
            abrev: 'SUGAR',
            about: `A new kind of data generation algorithm that generates of data geometry rather than density and is able to generate data in sparse regions and predicts hypothetical data points.`,
        },
        {
            href: '',
            title: 'Manifold Alignment Generative Adversarial Network',
            abrev: 'MAGAN',
            about: `a dual GAN (generative adversarial network) framework that can find correspondences between two data modalities measuring the same system to create an integrated dataset`,
        },
        {
            href: '',
            title: 'Neuron Editing',
            abrev: null,
            about: `a neural network inference method which maps between datasets with the signal learned on a subset of the data, for example when a drug perturbation is applied to one cell type neuron editing can be used to apply it in silico to another cell type.`,
        },
        {
            href: '',
            title: 'TrajectoryNet',
            abrev: null,
            about: `Relates continuous normalizing flows with the Breiner formulation of dynamic optimal transport to perform continuous optimal transport in high dimensions in the neural network framework. Uses dynamic optimal transport to infer continuous cell trajectories over time.`,
        },
        {
            href: '',
            title: 'Topological fMRI Analysis',
            abrev: null,
            about: `A novel fMRI analysis method based on the concepts of cubical persistent homology, which analyzes functions on structured data sets at different scales.`,
        },
        {
            href: '',
            title: 'Geometric Scattering Autoencoder',
            abrev: 'GSAE',
            about: `Here we combine the flexibility of deep learning with the representational power of graph scattering transforms to study thermodynamic landscapes within RNA folding.`,
        },
        {
            href: '',
            title: 'Multiscale PHATE',
            abrev: null,
            about: `Capturing meaningful biological signals in high-dimensional data using a continuous coarse-graining process which can be used to produce both a high-level summarization and more detailed representations of the data.`,
        },
        {
            href: '',
            title: 'Integrated Diffusion',
            abrev: null,
            about: `Combining multi-modal datasets by learning an integrated diffusion operator to effectively visualize the relationships between them.`,
        },
        {
            href: '',
            title: '[Unbalanced] Diffusion Earth Mover\'s Distance',
            abrev: '[U]DEMD',
            about: `a fast multi-scale approximation of the Earth Mover’s Distance with manifold geodesics as a ground distance between distributions on a manifold.`,
        },
    ]
</script>

<!-- <div class="bg-primary h-16"></div> -->
<div class="hero h-[40rem]" style="background-image: url(/images/projects_hero.jpeg);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-8xl font-light capitalize">
            Projects
        </h1>
      </div>
    </div>
</div>


<div class="py-8"></div> 

<div class="flex">
    <div class="w-full text-center">
        <div class="text-2xl font-light">
            You can access the Lab's Github Repository by clicking the link below
        </div>        
        <div class="inline-flex justify-center pt-8">
            <GitHub on:click={toGitHub} class="h-16 w-16 "/>
        </div>
    </div>
</div>

<div class="py-8"></div> 


<div class="px-8 flex justify-center">
    <div class="max-w-fit w-[42rem]">
        <div class="text-center font-bold text-4xl">
            Lab Projects
        </div>
        <ol class="mt-4 list-inside list-decimal text-lg ">
            {#each projects as {href, title, abrev, about}}
                <li class="py-2">
                    <span>
                        <a {href} class="link font-bold text-blue-600 visited:text-purple-600">
                            {#if abrev !== null}
                                {abrev} ({title})
                            {:else}
                                {title}
                            {/if}
                        </a>
                    </span>                    
                    <span class="text-slate-700">
                        {about}
                    </span>
                </li>    
            {/each}
        </ol>        
    </div>
</div>

