<script lang="ts">
    import type {Project} from '$lib/types'
    export let project: Project
</script>


<li class="py-2">
    <span>
        {#if project?.publication.title === undefined}
            <span class="font-bold">
                {#if project?.abbreviation !== undefined}
                    {project?.abbreviation} ({project?.title})
                {:else}
                    {project?.title}
                {/if}
            </span>
        {:else}
            <a href="/projects/{project?.href}" class="link font-bold text-blue-600 visited:text-purple-600">
                {#if project?.abbreviation !== undefined}
                    {project?.abbreviation} ({project?.title})
                {:else}
                    {project?.title}
                {/if}
            </a>
        {/if}
    </span>                    
    <span class="text-slate-700">
        {project?.description}
    </span>
</li>    