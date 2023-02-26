<script lang="ts">
    import SimpleIcon from '$lib/Icons/SimpleIcon.svelte';
    export let viewBox:string = "0 0 24 24";
    export let color:string = "";    
    let d:string = "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
</script>

<SimpleIcon 
    {viewBox} {d} {color} class={$$props.class}
    fill="none"
    stroke-width="1.5" stroke="currentColor" 
    stroke-linecap="round" stroke-linejoin="round"
>
    Link
</SimpleIcon>
