<script lang="ts">
    export let backgroundImage: string = '';
    export let subtitle:string = '';
    import TextHero from "$lib/Layout/Hero/TextHero.svelte";
    import ImageHero from "$lib/Layout/Hero/ImageHero.svelte";
</script>

{#if backgroundImage}

    <ImageHero {backgroundImage} {subtitle} class={$$props.class}>
        <slot>

        </slot>
        <svelte:fragment slot="tagline">
            <slot name="tagline">

            </slot>
        </svelte:fragment> 
    </ImageHero>  

{:else if $$slots.default}

    {#if $$slots.tagline}
        <TextHero class={$$props.class}>
            <slot>

            </slot>        
            <svelte:fragment slot="tagline">
                <slot name="tagline">

                </slot>
            </svelte:fragment> 
        </TextHero>
    {:else}
        <TextHero class={$$props.class}>
            <slot>

            </slot>        
        </TextHero>
    {/if}
    
{:else}

  <div class="bg-primary h-16 {$$props.class}"></div>

{/if}
