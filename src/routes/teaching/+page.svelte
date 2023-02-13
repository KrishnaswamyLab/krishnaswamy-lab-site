<script>

const courses = [
    {
        title: 'Deep Learning: Theory and Applications',
        about: `Deep neural networks have gained immense popularity within the last decade due to their success in many important machine learning tasks such as image recognition, speech recognition, and natural language processing. This course will provide a principled and hands-on approach to deep learning with neural networks. By the end of the course, students will have mastered the principles and practices underlying neural networks including modern methods of deep learning, and will have applied deep learning methods to real-world problems including image recognition, natural language processing, and biomedical applications. The course will be based on homework, a final exam, and a final project (either group or individual, depending on the total number enrolled). The project will include both a written and oral (i.e. presentation) component. Students' grades will be based on their homework scores and the quality of the written and oral component of their projects. The course assumes basic prior knowledge in linear algebra and probability.`,
        professors: ['Smita Krishnaswamy'],
        listings: ['CPSC663', 'AMTH663']
    },
    {
        title: 'Advanced Topics in Machine Learning and Data Mining',
        about: `An overview of advances in the past decade in machine learning and automatic data-mining approaches for dealing with the broad scope of modern data-analysis challenges, including deep learning, kernel methods, dictionary learning, and bag of words/features. This year, the focus is on a broad scope of biomedical data-analysis tasks, such as single-cell RNA sequencing, single-cell signaling and proteomic analysis, health care assessment, and medical diagnosis and treatment recommendations. The seminar is based on student presentations and discussions of recent prominent publications from leading journals and conferences in the field.`,
        professors: ['Smita Krishnaswamy', 'Guy Wolf'],
        listings: ['CPSC745','AMTH745','CB&B745']
    },
    {
        title: 'Unsupervised Learning for Big Data',
        about: `This course focuses on machine-learning methods well-suited to tackling problems associated with analyzing high-dimensional, high-throughput noisy data including: manifold learning, graph signal processing, nonlinear dimensionality reduction, clustering, and information theory. Though the class goes over some biomedical applications, such methods can be applied in any field.`,
        professors: ['Smita Krishnaswamy'],
        listings: ['CPSC553', 'CPSC453', 'GENE555', 'CB&B555']
    },
    {
        title: 'Geometric and Topological Methods in Machine Learning',
        about: `This course provides an introduction to geometric and topological methods in data science. Our starting point is the manifold hypothesis: that high dimensional data live on or near a much lower dimensional smooth manifold. We introduce tools to study the geometric and topological properties of this manifold in order to reveal relevant features and organization of the data. Topics include: metric space structures, curvature, geodesics, diffusion maps, eigenmaps, geometric model spaces, gradient descent, data embeddings and projections, and topological data analysis (TDA) in the form of persistence homology and their associated “barcodes.” We see applications of these methods in a variety of data types.`,
        professors: ['Smita Krishnaswamy', 'Ian Adelstein'],
        listings: ['CPSC644', 'MATH522', 'AMTH322']
    }
]
</script>
<div class="bg-primary h-16"></div>

<div class="mt-8 flex justify-center">
    <div class="max-w-max w-[48rem] mx-8">
        <div class="font-extralight text-7xl text-center mb-8">
            Selected Yale University Courses
        </div>
        {#each courses as {title, about, professors, listings}}
        <div>
            <h2 class="font-light text-4xl my-2">
                {title}
            </h2>
            <div>
                <h3 class="font-extralight text-2xl my-2">
                    {#each professors as professor, i}
                        {professor}{i < professors.length - 1 ? " & " : ''}
                    {/each}
                </h3>
                <span class="font-semibold text-lg my-2">
                    {#each listings as listing, i}
                        {listing}{i < listings.length - 1 ? "/" : ''}
                    {/each}
                </span>
            </div>            
            <p class="my-2">
                {about}
            </p>
        </div>        
        {/each}
    </div>
</div>