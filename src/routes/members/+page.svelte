<script>
    /** @type {import('./$types').PageData} */
    export let data;
	import { goto } from '$app/navigation';
    import MemberInfo from '$lib/MemberInfo.svelte';    
</script>
<div class="bg-primary h-16"></div>


<div class="flex justify-center">
    
    <div class="max-w-fit w-[68rem]">
        <div class="hero pt-8 text-center">
            <h1 class="text-6xl font-extralight">
                Krishnaswamy Lab Members
            </h1>
        </div>
        {#each data.members.filter(({isAlum})=>!isAlum) as member }
            <MemberInfo {member} />        
        {/each}


        <div class="hero pt-8 text-center">
            <h1 class="text-6xl font-extralight">
                Krishnaswamy Lab Alumni
            </h1>
        </div>
        {#each data.members.filter(({isAlum})=>isAlum) as member}
            <MemberInfo {member} />                
        {/each}
    </div>
</div>