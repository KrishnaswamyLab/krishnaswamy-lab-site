<script lang="ts">
  import {LabTwitterLink} from '$lib/utils'
  import {LabShortDescription} from '$lib/utils'
  export let title:string = 'The Krishnaswamy Lab'
  export let description:string = LabShortDescription
  export let url:string = 'https://www.krishnaswamylab.org'

  export let image:string = '/images/lab_hero.jpg';
  export let imageAlt:string = 'Krishnaswamy Lab hero image';

  export let author:string = 'Smita Krishnaswamy\'s Webmaster'
  export let article:string = '';
  export let minutesToRead:number = 0;
</script>

<svelte:head>
    <meta name="twitter:card" content="/images/lab_hero.jpg" />
    <meta name="twitter:title" content="{title}" />
    <meta name="twitter:description" content="{description}" />
    <meta name="twitter:url" content={url} />

    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={imageAlt} />

    <meta name="twitter:creator" content={`@${LabTwitterLink}`} />
    <meta name="twitter:site" content={`A;@${LabTwitterLink}`} />

   <meta name="twitter:label1" content="Written by" />
   <meta name="twitter:data1" content={author} />

   {#if article && minutesToRead > 0}

     <meta name="twitter:label2" content="Est. reading time" />
     <meta name="twitter:data2" content={minutesToRead !== 1 ? `${minutesToRead} minutes` : '1 minute'} />

   {/if}
</svelte:head>