<script lang="ts">
    // Currently: w-[48rem]
    // Maybe consider: w-[68rem]
    // For larger screens: xl:w-[72rem]
    // NOTE: xl:w-[72rem] makes reading content hard given how wide it is
</script>
<style>
.jelly {
    max-width: 65ch;
}
.max-w-sm {
    max-width: 24rem;;
}
.max-w-md {
    max-width: 28rem;
}
.max-w-lg {
    max-width: 32rem;
}
.max-w-xl {
    max-width: 36rem;
}
.max-w-jelly {
    max-width: 68rem;
}
</style>
<div class="flex justify-center {$$props.class}">
    <div class="mx-8 w-5/6 md:w-[48rem]">
        <slot>

        </slot>
    </div>
</div>