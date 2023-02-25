<script lang="ts">
import type {affiliation as affiliationInterface} from '$lib/types'
export let affiliation: affiliationInterface;
</script>

<div class="
    card card-bordered bg-base-200 border-base-300
    basis-2/3 md:basis-1/3 lg:basis-1/3 
    xl:basis-2/6 2xl:basis-2/12
    hover:shadow-2xl transition-all ease-in-out
    duration-300 hover:-translate-y-2 prose
    "
>
    <div class="card-body">
        <div class="card-title">
            <a class="link link-hover" href="{affiliation.href}">
                {affiliation.title}
            </a>
        </div>
        <div class="divider divider-vertical py-0 my-0">

        </div>
        <div>
            {#if affiliation?.quote}
            <div class="border-l-4 p-2 border-sky-500 bg-base-100">
                <quote >
                    "{affiliation.quote.text}"
                </quote>
                <span class="block text-right">
                    {affiliation.quote.attributed}
                </span>
            </div>
            <br/>
            {/if}
            {affiliation.about}
        </div>
    </div>
</div>