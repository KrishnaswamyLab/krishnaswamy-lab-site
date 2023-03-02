<script lang="ts">
    export let viewBox:string = "0 0 24 24";
    export let color:string = "";    
    export let d:string    
</script>

<svg 
    {viewBox}    
    class={$$props.class}
    aria-hidden="true"
    {...$$props}
>
    <title>
        <slot></slot>
    </title>
    <path {d} {color} >
</svg>