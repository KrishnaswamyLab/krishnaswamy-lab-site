<script>
/** @type {import('./$types').PageData} */
export let data;    
import Carousel from '$lib/Workshops/Carousel.svelte';

const images = [
    '/images/workshops/workshop_1.jpg',
    '/images/workshops/workshop_2.jpeg',
    '/images/workshops/workshop_3.jpeg',
    '/images/workshops/workshop_4.jpg',
    '/images/workshops/workshop_5.jpg',
    '/images/workshops/workshop_6.jpg',
    '/images/workshops/workshop_7.jpeg',
    '/images/workshops/workshop_8.jpg',
]    

import Hero from '$lib/Layout/Hero/Hero.svelte';
import JellyContainer from "$lib/Layout/JellyContainer.svelte";

import TwitterSEO from '$lib/SEO/Twitter.svelte'
import OpenGraphSEO from '$lib/SEO/OpenGraph.svelte'

</script>


<TwitterSEO
    title="Workshops of the Krishnaswamy Lab"
    url="https://www.krishnaswamylab.org/workshops"
/>
<OpenGraphSEO
    title="Workshops of the Krishnaswamy Lab"
    url="https://www.krishnaswamylab.org/workshops"
/>

<Hero 
    backgroundImage="/images/workshops/workshop_hero.png"
    class="break-keep"
    subtitle="Machine Learning for Single<wbr>-<wbr>Cell Analysis"
>
    Workshop
</Hero>

<JellyContainer>
<div class="flex justify-center">        
    <div class="mt-8 text-left prose">
        <figure class="mt-8">
            <img src="/images/workshops/ML_workshop.png" alt="ML_workshop">
        </figure>   

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
            {#each data?.syllabus as days, i}
                <h3 class="font-bold text-lg">
                    Day {i + 1} - {days?.day}
                </h3>
                <table>
                    <tbody>
                        {#each days?.items as row}
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
            {/each}
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
                <Carousel {images} />
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
                Please contact Eventbrite if you're having further issues asking for the specific information that your business office requires that isn't on the order confirmation. We're sorry about the inconvenience, but the good news is that everyone who's taken the course so far has been able to use this order confirmation for reimbursement!
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

    </div>
</div>    
</JellyContainer>