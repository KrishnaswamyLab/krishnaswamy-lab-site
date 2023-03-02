<script lang="ts">
    export let backgroundImage: string;
    export let subtitle:string;

</script>

<div class="hero h-[40rem] bg-base-200 {$$props.class}" style="background-image: url({backgroundImage});">
  {#if backgroundImage}
        <div class="hero-overlay bg-opacity-60"></div>
  {/if}   
  
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl md:text-7xl font-light capitalize break-all">
          <slot>
          </slot>
      </h1>              
      {#if subtitle}
        <p class="mb-5 text-2xl uppercase font-extralight break-keep">
          {@html subtitle}
        </p>
      {/if}  
      <slot name="tagline"></slot>        
    </div>
  </div>
</div>
