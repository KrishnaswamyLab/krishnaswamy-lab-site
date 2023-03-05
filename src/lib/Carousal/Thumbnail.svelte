<script lang="ts">
    export let useBackgroundUrl: boolean = false;
    export let selected: boolean = false;
    export let widthPercent: number;
    export let url: string;

</script>
{#if useBackgroundUrl}
    <div 
        class="
        bg-center
        bg-auto
        bg-no-repeat
        " 
        class:active={selected}
        style="
        width:{widthPercent}%;
        background-image: url('https://picsum.photos/seed/picsum/200/300');
        "
    >
    </div>        
{:else}
    <img
        class="
            object-center object-cover
            {selected ? 'opacity-100' : 'opacity-40'}
            h-full            
        "
        class:active={selected}
        width="{widthPercent}%" 
        alt="placehold"
        src="{url}"
        on:click
        on:keydown        
    />
{/if}    