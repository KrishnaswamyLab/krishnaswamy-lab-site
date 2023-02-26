<script lang="ts">
    import SimpleIcon from '$lib/Icons/SimpleIcon.svelte';
    export let viewBox:string = "0 0 24 24";
    export let color:string = "";    
    let d:string = "M4 6h16M4 12h16M4 18h16"
</script>

<SimpleIcon 
    {viewBox} {d} {color}
    fill="none" class="stroke-current {$$props.class}"
    stroke-width="1.5" stroke="currentColor"
>
    Hamburger
</SimpleIcon>