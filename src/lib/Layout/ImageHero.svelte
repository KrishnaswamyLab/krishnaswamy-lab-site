<script lang="ts">
    export let backgroundImage: string;
</script>

<div class="hero h-[40rem] bg-base-200" style="background-image: url({backgroundImage});">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-2xl sm:text-4xl md:text-6xl font-bold uppercase break-all">
            <slot>
            </slot>
        </h1>        
        <p class="mb-5 text-2xl uppercase font-extralight break-all">
            <slot name="subtitle">
            </slot>
        </p>
      </div>
    </div>
</div>