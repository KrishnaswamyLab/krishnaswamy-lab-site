<script>
    import Twitter from "$lib/Icons/Twitter.svelte";
    import {openUrlInNewTab, LabTwitterLink} from '$lib/utils'    
    const toTwitter = () => openUrlInNewTab(LabTwitterLink)
</script>

<button class="btn gap-2 btn-outline text-accent-content uppercase" on:click={toTwitter}>
    <Twitter class="h-6 w-6  stroke-sky-400 fill-sky-400" />
    Follow us on Twitter
</button>