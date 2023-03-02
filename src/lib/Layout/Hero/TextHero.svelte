<script lang="ts">
</script>

<div class="pt-8 text-center {$$props.class}">
    <h1 class="text-4xl md:text-6xl font-extralight break-keep md:break-normal">
        <slot>
        </slot>        
    </h1>

    {#if $$slots.tagline}
        <p class="py-8 text-2xl md:text-3xl font-extralight break-all">
            <slot name="tagline">

            </slot> 
        </p>
    {/if}
</div>