<script lang="ts">
    import type {project as projectInterface} from '$lib/types'
    export let project: projectInterface
</script>

<li class="py-2">
    <span>
        <a href="/projects/{project?.projectUrl}" class="link font-bold text-blue-600 visited:text-purple-600">
            {#if project?.projectAbbreviation !== null}
                {project?.projectAbbreviation} ({project?.projectTitle})
            {:else}
                {project?.projectTitle}
            {/if}
        </a>
    </span>                    
    <span class="text-slate-700">
        {project?.projectListDescription}
    </span>
</li>    