<script lang="ts">
    export let backgroundImage: string = '';
    export let subtitle:string = '';
    import TextHero from "$lib/Layout/TextHero.svelte";
    import ImageHero from "$lib/Layout/ImageHero.svelte";
</script>

{#if backgroundImage}
    <ImageHero {backgroundImage} {subtitle}>
        <slot>

        </slot>
        <svelte:fragment slot="tagline">
            <slot name="tagline">

            </slot>
        </svelte:fragment> 
    </ImageHero>  
{:else if $$slots.default}
    <TextHero>
        <slot>

        </slot>
    </TextHero>
{:else}
  <div class="bg-primary h-16"></div>
{/if}
