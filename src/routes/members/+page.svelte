<script>
    /** @type {import('./$types').PageData} */
    export let data;
	import { goto } from '$app/navigation';
    import MemberInfo from '$lib/MemberInfo.svelte';  
    
    $: past = data?.members.filter(({isAlum})=>isAlum)
    $: curr = data?.members.filter(({isAlum})=>!isAlum)
</script>
<div class="bg-primary h-16"></div>


<div class="flex justify-center">
    
    <div class="max-w-min w-[68rem]">
        <div class="hero pt-8 text-center">
            <h1 class="text-6xl font-extralight">
                Krishnaswamy Lab Members
            </h1>
        </div>
        {#each curr as member, i }
            <MemberInfo {member} />   
            {#if i < curr.length -1 }
                <div class="divider divider-vertical h-8"></div>           
            {/if}
        {/each}


        <div class="hero pt-8 text-center">
            <h1 class="text-6xl font-extralight">
                Krishnaswamy Lab Alumni
            </h1>
        </div>
        {#each past as member, i}
            <MemberInfo {member} />    
            {#if i < past.length -1 }
                <div class="divider divider-vertical h-8"></div>           
            {/if} 
        {/each}
    </div>
</div>