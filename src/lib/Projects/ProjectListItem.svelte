<script lang="ts">
    import type {Project} from '$lib/types'
    export let project: Project
</script>


<li class="py-2">
    <span>
        {#if project?.publicationTitle === null}
            <span class="font-bold">
                {#if project?.projectAbbreviation !== null}
                    {project?.projectAbbreviation} ({project?.projectTitle})
                {:else}
                    {project?.projectTitle}
                {/if}
            </span>
        {:else}
            <a href="/projects/{project?.projectUrl}" class="link font-bold text-blue-600 visited:text-purple-600">
                {#if project?.projectAbbreviation !== null}
                    {project?.projectAbbreviation} ({project?.projectTitle})
                {:else}
                    {project?.projectTitle}
                {/if}
            </a>
        {/if}
    </span>                    
    <span class="text-slate-700">
        {project?.projectListDescription}
    </span>
</li>    