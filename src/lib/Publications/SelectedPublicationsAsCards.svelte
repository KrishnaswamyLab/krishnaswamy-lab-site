<script lang="ts">
import type {Publications as PublicationsInterface} from '$lib/types'
export let publications: PublicationsInterface; 
export let showKeywords: boolean = false;   
</script>

<ul class="w-full">
    {#each publications as pub}
        <li class="">
            <div class="
                card card-bordered m-4 bg-base-200
                hover:shadow-2xl transition-all ease-in-out
                duration-300 hover:-translate-y-2
            ">
                <div class="card-body">
                    <div class="card-title break-word">
                        {#if pub?.urls?.length}
                        <a class="link" href={pub?.urls[0]?.href}>
                            {pub?.title}
                        </a>   
                        {:else}
                            {pub?.title}
                        {/if}
                    </div>
                    <span>
                        {@html pub.makeAuthorString()}                                
                    </span>
                    <span>
                        {@html pub.makePublicationString()}
                    </span>   
                    {#if showKeywords}
                    <span class="">
                        {#each pub?.keywords as kw}
                        <div class="mr-4 mt-1 p-3 badge badge-secondary badge-outline">
                            {kw}
                        </div>    
                        {/each}                                
                        {pub.makeKeywordsString()} 
                    </span>                    
                    {/if}
                </div>
            </div>
        </li>
    {/each}

</ul>