<script lang="ts">
    // w-[68rem]
    export let width:string = 'w-[48rem]';
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
<div class="flex justify-center">
    <div class="mx-8 w-5/6 xl:w-[72rem]">
        <slot>

        </slot>
    </div>
</div>