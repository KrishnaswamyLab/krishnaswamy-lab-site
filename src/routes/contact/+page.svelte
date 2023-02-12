<script>

    const contactInfos = [
        {
            bold: 'Follow us',
            pref: 'on',
            link: 'https://twitter.com/KrishnaswamyLab',
            text: 'Twitter',
        },
        {
            bold: 'Access',
            pref: 'on',
            link: 'https://github.com/KrishnaswamyLab',
            text: 'GitHub',
        },
        {
            bold: 'Call us',
            pref: 'at',
            link: 'tel:203.785.7833',
            text: '203.785.7833',
        },
        {
            bold: 'Email',
            pref: 'at',
            link: 'mailto:smita.krishnaswamy@yale.edu',
            text: 'smita.krishnaswamy@yale.edu',
        },
    ]

    const departments = [
        {
            dept: 'Genetics Department',
            school: 'Yale School of Medicine',
            street: '333 Cedar Street',
            room: 'SHM I-336A',
            city: 'New Haven',
            state: 'CT',
            zip: '06520',
        },
        {
            dept: 'Computer Science Department',
            school: 'Yale School of Applied Science and Engineering',
            street: '51 Prospect Street',
            room: 'AKW 204',
            city: 'New Haven',
            state: 'CT',
            zip: '06511',
        },
    ]
</script>
<div class="bg-primary h-16"></div>

<div class="hero h-full min-h-screen">
    <div class="hero-content text-center w-full">
        <div class="w-full">
            <h1 class="my-5 text-5xl uppercase">
                The Krishnaswamy Lab at Yale University
            </h1>        
            <p class="py-8">
                Smita Krishnaswamy, Ph.D
            </p>

            <div class="py-8 inline-flex place-content-center w-full md:w-1/2 xl:w-full">
                <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 place-items-center break-words">
                    {#each contactInfos as {bold, pref, link, text} }
                        <div>
                            <span class="capitalize font-bold">
                                {bold}
                            </span>
                            <span class="">
                                {pref}                 
                                <a class="link" href="{link}">
                                    {text}
                                </a> 
                            </span>
                        </div>
                    {/each}                
                </div>            
            </div>


            <div class="p-8 inline-flex place-content-center w-full">
                <div class="grid grid-cols-1 md:grid-cols-2  w-full gap-8">
                    {#each departments as {dept, school, street, room, city, state, zip}}
                        <div class="card card-compact bg-base-100 shadow-xl">
                            <div class="card-body">
                                <div class="card-title text-center inline-block">
                                    {dept} | {school}
                                </div>
                                <div>
                                    <span>{street}</span>
                                    <br/>
                                    <span>{room}</span>
                                    <br/>
                                    <span>{city}, {state} {zip}</span>
                                </div>
                            </div>
                        </div>
                    {/each}                   
                </div>                        
            </div>          
        </div>
    </div>
</div>