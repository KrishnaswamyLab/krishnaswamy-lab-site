<script lang="ts">
  import {LabShortDescription} from '$lib/utils'
  type OGType = 'website' | 'article'

  export let url: string = 'https://www.KrishnaswamyLab.org'
  export let ogType: OGType = 'website'
  export let title: string = 'Krishnaswamy Lab'
  export let localLanguage: string = 'en'
  export let siteName: string = 'Krishnaswamy Lab'
  export let description: string = LabShortDescription
  
  export let image: string = '/images/lab_hero.jpg';
  export let imageAlt: string = 'Krishnaswamy Lab hero image';

  export let squareImage: string = '/images/lab_hero.jpg';
  export let squareImageAlt: string = 'Krishnaswamy Lab hero image';

  export let articlePublisher: string = 'Smita Krishnaswamy'
  export let articleAuthor: string = 'Smita Krishnaswamy\'s Webmaster'

  export let article: boolean = false;
  export let datePublished: Date | string | number = '2023/02/26'
  export let lastUpdated: Date | string | number = '2023/02/26'

  $: utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
</script>
  
  <svelte:head>
    <meta property="og:url" content={url} />
    <meta property="og:type" content={ogType} />
    <meta property="og:title" content={title} />
    <meta property="og:locale" content={localLanguage} />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:description" content={description} />

    {#if image}
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:alt" content={imageAlt} />
    {/if}

    {#if squareImage}
      <meta property="og:image" content={squareImage} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />
      <meta property="og:image:alt" content={squareImageAlt} />
    {/if}

    {#if article}
        <meta property="article:author" content={articleAuthor} />  
        <meta property="article:publisher" content={articlePublisher} />
      <meta property="article:published_time" content={String(datePublished)} />
      <meta property="article:modified_time" content={String(lastUpdated)} />
    {/if}
  </svelte:head>