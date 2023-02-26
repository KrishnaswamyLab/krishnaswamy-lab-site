<script lang="ts">
    import Twitter from "$lib/Icons/Twitter.svelte";
    import {toTwitter, LabTwitterLink} from '$lib/utils'    

    let heroClass = "btn gap-2 btn-outline text-accent-content uppercase"
    let altClass = "btn gap-2 bg-transparent btn-link text-black capitalize"
    export let outlined: boolean = true;    
    $: btnClass = outlined 
        ? heroClass
        : altClass

</script>

<a href="{LabTwitterLink}" class="inline-block" target="_blank" rel="noreferrer">
    <button class="
            {btnClass}
            {$$props.class}
        " 
        on:click={toTwitter}
    >
        <Twitter class="h-6 w-6  stroke-sky-400 fill-sky-400" />
        Follow us on Twitter
    </button>
</a>