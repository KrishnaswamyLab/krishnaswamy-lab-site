<script>
    import GitHub from "$lib/Workshops/GitHub.svelte";
    import Colab from "$lib/Workshops/Colab.svelte";
    import Forms from "$lib/Workshops/Forms.svelte";

    const day1 = [
        {
            col1: "Lecture", 
            href: "https://raw.githubusercontent.com/KrishnaswamyLab/SingleCellWorkshop/master/lectures/2021/Day1.Preprocessing_and_Intro/Day1.Preprocessing_and_IntroData.2021.pdf",
            col2: GitHub,
            col3: "Introduction to scRNA-seq and Preprocessing"
        },
        {
            col1: "Exercise", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Introduction_to_Manifold_Learning/notebooks/01_Learning_graphs.ipynb",
            col2: Colab,
            col3: "1.0. Learning Graphs from Data"
        },
        {
            col1: null, 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Introduction_to_Manifold_Learning/notebooks/01_Answers_Learning_graphs.ipynb",
            col2: Colab,
            col3: "1.0. Learning Graphs from Data (Answer Key)"
        },
        {
            col1: null, 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Preprocessing/notebooks/00_Loading_and_preprocessing_scRNAseq_data.ipynb",
            col2: Colab,
            col3: "1.1. Preprocessing Embryoid Body Data (Beginner)"
        },
        {
            col1: null, 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Preprocessing/notebooks/00_Advanced_Loading_and_preprocessing_scRNAseq_data.ipynb",
            col2: Colab,
            col3: "1.1. Preprocessing Embryoid Body Data (Advanced)"
        },
        {
            col1: null, 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Preprocessing/notebooks/00_Answers_Loading_and_preprocessing_scRNAseq_data.ipynb",
            col2: Colab,
            col3: "1.1. Preprocessing Embryoid Body Data (Answer Key)"
        },
        {
            col1: null, 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Preprocessing/notebooks/01_Loading_and_preprocessing_your_own_data.ipynb",
            col2: Colab,
            col3: "1.2. Loading and pre-processing your own data (optional)"
        },
        {
            col1: null, 
            href: "https://forms.gle/yhs1ySK1E6fgJFXD8",
            col2: Forms,
            col3: "Day 1 Survey"
        },
    ]
    const day2 = [
        {
            col1: "Lecture", 
            href: "https://raw.githubusercontent.com/KrishnaswamyLab/SingleCellWorkshop/master/lectures/2021/Day2.Visualization_and_Manifold_Learning/Day2.Visualization_and_Manifold_Learning.pdf",
            col2: GitHub,
            col3: "Manifold Learning and Dimensionality Reduction"
        },
        {
            col1: "Exercise", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Introduction_to_Manifold_Learning/notebooks/00_Plotting_UCI_wine.ipynb",
            col2: Colab,
            col3: "2.0. Plotting UCI Wine Data"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Introduction_to_Manifold_Learning/notebooks/00_Answers_Plotting_UCI_wine.ipynb",
            col2: Colab,
            col3: "2.0. Plotting UCI Wine Data (Answer Key)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Dimensionality_Reduction/00_Creating_metafeatures.ipynb",
            col2: Colab,
            col3: "2.1. Visualizing UCI Wine Data"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Dimensionality_Reduction/00_Answers_Creating_metafeatures.ipynb",
            col2: Colab,
            col3: "2.1. Visualizing UCI Wine Data (Answer Key)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Dimensionality_Reduction/01_Principal_components_analysis.ipynb",
            col2: Colab,
            col3: "2.2. PCA on Retinal Bipolar Data"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Dimensionality_Reduction/01_Answers_Principal_components_analysis.ipynb",
            col2: Colab,
            col3: "2.2. PCA on Retinal Bipolar Data (Answer Key)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Dimensionality_Reduction/02_Nonlinear_dimensionality_reduction.ipynb",
            col2: Colab,
            col3: "2.3. Visualizing Retinal Bipolar Data"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Dimensionality_Reduction/02_Answers_Nonlinear_dimensionality_reduction.ipynb",
            col2: Colab,
            col3: "2.3. Visualizing Retinal Bipolar Data (Answer Key)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Dimensionality_Reduction/03_Advanced_Dimensionality_reduction_EB_data.ipynb",
            col2: Colab,
            col3: "2.4. Visualizing Embryoid Body Data (Advanced)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Dimensionality_Reduction/03_Answers_Dimensionality_reduction_EB_data.ipynb",
            col2: Colab,
            col3: "2.4. Visualizing Embryoid Body Data (Answer Key)"
        },
    ]
    const day3 = [
        {
            col1: "Lecture", 
            href: "https://raw.githubusercontent.com/KrishnaswamyLab/SingleCellWorkshop/master/lectures/2021/Day3.Denoising_batch_correction/Day3.Denoising_batch_correction.MELD.pdf",
            col2: GitHub,
            col3: "Data Denoising and Differential Abundance"
        },
        {
            col1: "Exercise", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Clustering/notebooks/01_Clustering_Embryoid_Body_Data.ipynb",
            col2: Colab,
            col3: "3.1 Clustering & Denoising Embryoid Body Data (Beginner)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Clustering/notebooks/01_Advanced_Clustering_Embryoid_Body_Data.ipynb",
            col2: Colab,
            col3: "3.1 Clustering & Denoising Embryoid Body Data (Advanced)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Clustering/notebooks/01_Answers_Clustering_Embryoid_Body_Data.ipynb",
            col2: Colab,
            col3: "3.1 Clustering & Denoising Embryoid Body Data (Answer Key)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/BatchCorrection/00_Batch_Correction_and_Gene_Visualization.ipynb",
            col2: Colab,
            col3: "3.2 Batch correction in PBMCs"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/BatchCorrection/00_Answers_Batch_Correction_and_Gene_Visualization.ipynb",
            col2: Colab,
            col3: "3.2 Batch correction in PBMCs (Answer Key)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/DifferentialAbundance/Wagner2018_Chordin_Cas9_Mutagenesis.ipynb",
            col2: Colab,
            col3: "3.3 Perturbation analysis with MELD"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/DifferentialAbundance/Answers_Wagner2018_Chordin_Cas9_Mutagenesis.ipynb",
            col2: Colab,
            col3: "3.3 Perturbation analysis with MELD (Answer Key)"
        },
    ]
    const day4 = [
        {
            col1: "Lecture", 
            href: "https://github.com/KrishnaswamyLab/SingleCellWorkshop/blob/master/lectures/2021/Day4/Day4.Clustering_Trajectory_GeneGene.pdf?raw=true",
            col2: GitHub,
            col3: "Clustering, Trajectory Inference, and Gene-Gene Relationships"
        },
        {
            col1: "Exercise", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Clustering/notebooks/00_Clustering_toy_data.ipynb",
            col2: Colab,
            col3: "4.0 Clustering Toy Data (Beginner)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Clustering/notebooks/00_Advanced_Clustering_toy_data.ipynb",
            col2: Colab,
            col3: "4.0 Clustering Toy Data (Advanced)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Clustering/notebooks/00_Answers_Clustering_toy_data.ipynb",
            col2: Colab,
            col3: "4.0 Clustering Toy Data (Answer Key)"
        },
        {
            col1: "", 
            href: "",
            col2: Colab,
            col3: "4.1 Computing Diffusion Pseudotime"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/TrajectoryInference/notebooks/00_Pseudotime_from_scratch.ipynb",
            col2: Colab,
            col3: "4.1 Computing Diffusion Pseudotime (Advanced)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/TrajectoryInference/notebooks/00_Answers_Pseudotime_from_scratch.ipynb",
            col2: Colab,
            col3: "4.1 Computing Diffusion Pseudotime (Answer Key)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/TrajectoryInference/notebooks/01_Treutlein_fibroblast_data.ipynb",
            col2: Colab,
            col3: "4.2 Trajectory Inference in Fibroblast Data"
        },
        {
            col1: "", 
            href: "",
            col2: Colab,
            col3: "4.2 Trajectory Inference in Fibroblast Data (Advanced)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/TrajectoryInference/notebooks/01_Advanced_Treutlein_fibroblast_data.ipynb",
            col2: Colab,
            col3: "4.2 Trajectory Inference in Fibroblast Data (Answer Key)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/GeneRelationships/notebooks/00_Gene_Relationships_in_Treutlein_data.ipynb",
            col2: Colab,
            col3: "4.3 Identifying gene trends in Fibroblast Data"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/GeneRelationships/notebooks/00_Answers_Gene_Relationships_in_Treutlein_data.ipynb",
            col2: Colab,
            col3: "4.3 Identifying gene trends in Fibroblast Data (Answer Key)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/GeneRelationships/notebooks/01_Gene_Relationships_in_EMT_data.ipynb",
            col2: Colab,
            col3: "4.4 Gene regulatory inference during EMT"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/GeneRelationships/notebooks/01_Answers_Gene_Relationships_in_EMT_data.ipynb",
            col2: Colab,
            col3: "4.4 Gene regulatory inference during EMT (Answer Key)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/TrajectoryInference/notebooks/02_Embryoid_body_trajectory_inference.ipynb",
            col2: Colab,
            col3: "4.5 Identifying Trajectories in Embryoid Bodies (Advanced, optional)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/TrajectoryInference/notebooks/03_RNA_velocity.ipynb",
            col2: Colab,
            col3: "4.6 Calculating RNA velocity in Embryoid Bodies (Advanced, optional)"
        },
    ]
    const day5 = [
        {
            col1: "Lecture", 
            href: "https://github.com/KrishnaswamyLab/SingleCellWorkshop/blob/master/lectures/2021/Day5.IntroToNeuralNetworks/Day5.IntroDeepLearning2021.pdf?raw=true",
            col2: GitHub,
            col3: "Introduction to Neural Nets & Deep Learning"
        },
        {
            col1: "Exercise", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Deep_Learning/notebooks/00_Cell_type_classification_with_neural_networks.ipynb",
            col2: Colab,
            col3: "5.0 Classifying cell types with neural networks"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Deep_Learning/notebooks/00_Advanced_Cell_type_classification_with_neural_networks.ipynb",
            col2: Colab,
            col3: "5.0 Classifying cell types with neural networks (Advanced)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Deep_Learning/notebooks/00_Answers_Cell_type_classification_with_neural_networks.ipynb",
            col2: Colab,
            col3: "5.0 Classifying cell types with neural networks (Answer key)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Deep_Learning/notebooks/01_Exploratory_data_analysis_with_autoencoder_networks.ipynb",
            col2: Colab,
            col3: "5.1 Exploratory data analysis with autoencoders"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Deep_Learning/notebooks/01_Answers_Exploratory_data_analysis_with_autoencoder_networks.ipynb",
            col2: Colab,
            col3: "5.1 Exploratory data analysis with autoencoders (Answer Key)"
        },
    ]
    const day6 = [
        {
            col1: "Lecture", 
            href: "https://github.com/KrishnaswamyLab/SingleCellWorkshop/blob/master/lectures/2021/Day6.DeepLearningApplications/Day6.DeepLearningApplications.pdf?raw=true",
            col2: GitHub,
            col3: "Neural Networks for Single-Cell Analysis"
        },
        {
            col1: "Exercise", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Deep_Learning/notebooks/02_Exploratory_analysis_of_single_cell_data_with_SAUCIE.ipynb",
            col2: Colab,
            col3: "6.0 Exploratory analysis of single-cell data with SAUCIE"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Deep_Learning/notebooks/02_Answers_Exploratory_analysis_of_single_cell_data_with_SAUCIE.ipynb",
            col2: Colab,
            col3: "6.0 Exploratory analysis of single-cell data with SAUCIE (Answers)"
        },
        {
            col1: "", 
            href: "https://colab.research.google.com/github/KrishnaswamyLab/SingleCellWorkshop/blob/master/exercises/Deep_Learning/notebooks/03_Batch_correction_with_MAGAN.ipynb",
            col2: Colab,
            col3: "6.1 Batch correction with MAGAN (Draft, optional)"
        },
        {
            col1: "Survey", 
            href: "https://bit.ly/YaleML_Jan2021",
            col2: Forms,
            col3: "End of Course Survey"
        },
    ]
</script>
<div class="hero h-[40rem] bg-base-200" style="background-image: url(/images/workshops/workshop_hero.png)">       
    <div class="hero-overlay bg-opacity-60"></div>
    
    <div class="text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-8xl font-extralight capitalize break-all">
                Workshop
            </h1>
            <p class="mb-5 text-2xl uppercase font-extralight break-all">
                Machine Learnign for Single-Cell Analysis
            </p>
        </div>
    </div>
</div>

<div class="flex mt-8 justify-center">
    <figure class="max-w-max w-1/2">
        <img src="/images/workshops/ML_workshop.png" alt="ML_workshop">
    </figure>    
</div>

<div class="flex mt-8 justify-center">
    <div class="text-left max-w-max w-1/2 prose">
        <div>
            <h2 class="font-bold text-xl">
                Registration
            </h2>
            <p>
                Be the first to hear about our next workshop by joining our info list! 
                To sign up, 
                <a href="https://forms.gle/i5MTM8XwP8u816ar6">
                    click here
                </a>.
            </p>
        </div>

        <div>
            <h2 class="font-bold text-xl">
                Lecture Recordings
            </h2>
            <p>
                Recorded lectures from our January 2021 workshop are currently available for free on the <a href="https://www.youtube.com/playlist?list=PLW5ccXvlqgHjcCWuxMxdp6rtVs8fop8tM">
                    Krishnaswamy Lab YouTube Channel
                </a>. We hope these videos make the content in this workshop more accessible for everyone!
                
            </p>
        </div>

        <div>
            <h2 class="font-bold text-xl">
                About the Course
            </h2>
            <p>
                The purpose of this workshop is to tear back the complexity behind single cell analysis. Participants will learn <b>practical skills for analyzing single cell datasets</b> and develop a conceptual understanding of the <b>machine learning foundations</b> behind each method. Participants will also receive an introduction to emerging trends in single cell analysis such as deep learning.
            </p>
            <p>
                Each day, attendees will hear lectures from instructors with experience developing and applying single cell methods followed by intensive hands-on lab sessions with a 10:1 student:instructor ratio. In these lab sessions, participants will work in teams to analyze real-world single cell datasets. The workshop will include a <b>bring-your-own-data</b> sessions where students will have the opportunity to bring in their own experimental datasets (or use one we provide) and collaborate with students and instructors on their projects.
            </p>
            <p>
                By the end of the course, students will:
            </p>
            <ol>
                <li>
                    Understand the common workflow of a single cell experiment
                </li>
                <li>
                    Be able to apply common machine learning methods for analysis of single cell data
                </li>
                <li>
                    Grasp the impact of method choice and parameter selection on analysis
                </li>
                <li>
                    Build a foundation for exploring the single cell literature
                </li>
            </ol>
            <h2 class="font-bold text-lg">
                Course format
            </h2>
            <p>
                The January 2021 workshop will be taught entirely online using Zoom and Slack.
            </p>
            <p>
                We will start each day with a lecture and regroup that brings everyone together. We will then break out into groups with two tracks (more on that later). In groups you will work on applying machine learning methods to analyze real-world single cell data. To make sure groups don’t get stuck, we will leverage Slack and Zoom Office Hours staffed by experienced TAs.                 
            </p>
            <p>
                The course will take place over two weeks. 
            </p>
            <p>                                
                The course schedule will be:
                <br/>Week 1 - Jan 18 (M), 19 (Tu), 20 (W)
                <br/>Week 2 - Jan 25 (M), 26 (Tu), 27 (W)                            
            </p>
            <p>
                Each day will be broken up as follows:
                <br/>12:00pm - 1:30pm -- Regroup and Daily Lecture
                <br/>1:30pm - 3:00pm -- Afternoon Lab / office hours
                <br/>3:30pm - 5:00pm -- Evening Lab / office hours
            </p>
        </div>


        <div>
            <h2 class="font-bold text-xl">
                Workshop Syllabus
            </h2>
            <h3 class="font-bold text-lg">
                Day 1 – Monday, January 18
            </h3>
            <table>
                <tbody>
                    {#each day1 as row}
                    <tr>
                        <td>{!!row.col1 ? row.col1 : ''}</td>
                        <td>
                            <svelte:component this={row.col2} href={row.href}/> 
                        </td>
                        <td>{row.col3}</td>
                    </tr>
                        
                    {/each}                            
                </tbody>
            </table>
            <h3 class="font-bold text-lg">
                Day 2 – Tuesday, January 19
            </h3>
            <table>
                <tbody>
                    {#each day2 as row}
                    <tr>
                        <td>{!!row.col1 ? row.col1 : ''}</td>
                        <td>
                            <svelte:component this={row.col2} href={row.href}/> 
                        </td>
                        <td>{row.col3}</td>
                    </tr>
                        
                    {/each}                            
                </tbody>
            </table>
            <h3 class="font-bold text-lg">
                Day 3 – Wednesday, January 20
            </h3>
            <table>
                <tbody>
                    {#each day3 as row}
                    <tr>
                        <td>{!!row.col1 ? row.col1 : ''}</td>
                        <td>
                            <svelte:component this={row.col2} href={row.href}/> 
                        </td>
                        <td>{row.col3}</td>
                    </tr>
                        
                    {/each}                            
                </tbody>
            </table>
            <h3 class="font-bold text-lg">
                Day 4 – Monday, January 25
            </h3>
            <table>
                <tbody>
                    {#each day4 as row}
                    <tr>
                        <td>{!!row.col1 ? row.col1 : ''}</td>
                        <td>
                            <svelte:component this={row.col2} href={row.href}/> 
                        </td>
                        <td>{row.col3}</td>
                    </tr>
                        
                    {/each}                            
                </tbody>
            </table>
            <h3 class="font-bold text-lg">
                Day 5 – Tuesday, January 26
            </h3>
            <table>
                <tbody>
                    {#each day5 as row}
                    <tr>
                        <td>{!!row.col1 ? row.col1 : ''}</td>
                        <td>
                            <svelte:component this={row.col2} href={row.href}/> 
                        </td>
                        <td>{row.col3}</td>
                    </tr>
                        
                    {/each}                            
                </tbody>
            </table>
            <h3 class="font-bold text-lg">
                Day 6 – Wednesday, January 27
            </h3>
            <table>
                <tbody>
                    {#each day6 as row}
                    <tr>
                        <td>{!!row.col1 ? row.col1 : ''}</td>
                        <td>
                            <svelte:component this={row.col2} href={row.href}/> 
                        </td>
                        <td>{row.col3}</td>
                    </tr>
                        
                    {/each}                            
                </tbody>
            </table>
        </div>

               
        <div>
            <h2 class="font-bold text-xl">
                Course Designers
            </h2>
            <p>
                Daniel B. Burkhardt (
                    <a class="link text-blue-500" href="https://twitter.com/DBBurkhardt">@DBBurkhardt</a>
                ), 
                Scott Gigante (
                    <a class="link text-blue-500" href="https://twitter.com/scottgigante">@scottgigante</a>
                ), 
                Matthew Amodio, 
                Smita Krishnaswamy (
                    <a class="link text-blue-500" href="https://twitter.com/KrishnaswamyLab">@KrishnaswamyLab</a>
                )
            </p>
        </div>

        <div>
            <h2 class="font-bold text-xl">
                Images
            </h2>            
            <div class="flex flex-row justify-center">                
                <div class="">
                    <div class="carousel carousel-end w-full rounded-box place-items-center">                    
                        <div class="carousel-item w-full" id="workshop_image_1">
                            <img src="/images/workshops/workshop_1.jpg" alt="workshop 1" />
                        </div> 
                        <div class="carousel-item w-full" id="workshop_image_2">
                            <img src="/images/workshops/workshop_2.jpeg" alt="workshop 2" />
                        </div> 
                        <div class="carousel-item w-full" id="workshop_image_3">
                            <img src="/images/workshops/workshop_3.jpeg" alt="workshop 3" />
                        </div> 
                        <div class="carousel-item w-full" id="workshop_image_4">
                            <img src="/images/workshops/workshop_4.jpg" alt="workshop 4" />
                        </div> 
                        <div class="carousel-item w-full" id="workshop_image_5">
                            <img src="/images/workshops/workshop_5.jpg" alt="workshop 5" />
                        </div> 
                        <div class="carousel-item w-full" id="workshop_image_6">
                            <img src="/images/workshops/workshop_6.jpg" alt="workshop 6" />
                        </div> 
                        <div class="carousel-item w-full" id="workshop_image_7">
                            <img src="/images/workshops/workshop_7.jpeg" alt="workshop 7" />
                        </div> 
                        <div class="carousel-item w-full" id="workshop_image_8">
                            <img src="/images/workshops/workshop_8.jpg" alt="workshop 8" />
                        </div>                                                
                    </div>
                    <div class="flex justify-center w-full py-2 gap-2 relative bottom-0">
                        <a href="#workshop_image_1" class="btn btn-xs">1</a> 
                        <a href="#workshop_image_2" class="btn btn-xs">2</a> 
                        <a href="#workshop_image_3" class="btn btn-xs">3</a> 
                        <a href="#workshop_image_4" class="btn btn-xs">4</a>
                        <a href="#workshop_image_5" class="btn btn-xs">5</a>
                        <a href="#workshop_image_6" class="btn btn-xs">6</a>
                        <a href="#workshop_image_7" class="btn btn-xs">7</a>
                        <a href="#workshop_image_8" class="btn btn-xs">8</a>
                    </div>
                </div>
                
            </div>
            
        </div>

        <div>
            <h2 class="font-bold text-xl">
                Support
            </h2>
            <p>
                If you have any issues with course materials or need assistance during the course, please visit our Help Slack at <a href="https://krishnaswamylab.org/get-help/">https://krishnaswamylab.org/get-help/</a>.
            </p>  
            <p>
                Photo credit: <a href="https://www.instagram.com/jflemingphoto/">James Fleming Photography</a>
            </p>          
        </div>

        <div>
            <h2 class="font-bold text-xl">
                Receipts
            </h2>
            <p>
                We understand most people expect to be reimbursed for this workshop and require a receipt. <b>The order confirmation you received after you purchased your ticket is your receipt</b> (look for "Order Notification for Machine Learning for Single Cell Analysis"). This email has your contact information, the event information, the last four digits of your credit card, an order number, and the charge amount.
            </p>
            <p>
                Unfortunately, several attendees over the past few years have had issues with reimbursement using Eventbrite. As workshop organizers, we are required by Yale to use Eventbrite, and because Eventbrite handles the credit card processing, we cannot issue a separate receipt. 
            </p>
            <p>
                Please contact Eventbrite if you’re having further issues asking for the specific information that your business office requires that isn’t on the order confirmation. We’re sorry about the inconvenience, but the good news is that everyone who's taken the course so far has been able to use this order confirmation for reimbursement!
            </p>
            
        </div>


        <div>
            <h2 class="font-bold text-xl">
                Recording Consent
            </h2>
            <p class="font-italic">
                <span class="font-bold">IMPORTANT NOTICE: </span>
                This workshop will use a Zoom service that includes a feature that allows audio, video, and any documents and other materials exchanged or viewed during the session to be recorded. We will use this feature during the lectures. By joining this workshop, you automatically consent to such recordings. If you do not consent to the recording, discuss your concerns with the workshop organizers prior to the start of the recording or do not join the session. Please note that any such recordings may be distributed online.
            </p>
        </div>
        <!-- <div>
            <h2 class="font-bold text-xl">
                Previous workshops
            </h2>
            <p class="font-italic">
                To view the schedule and course materials from previous workshops, <a href="https://www.krishnaswamylab.org/workshop/previous-workshops">click here</a>.
            </p>
        </div> -->
    </div>
</div>