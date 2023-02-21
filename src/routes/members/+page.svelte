<script>
    /** @type {import('./$types').PageData} */
    export let data;
	import { goto } from '$app/navigation';
    import MemberInfo from '$lib/MemberInfo.svelte';  

    import JellyContainer from '$lib/Layout/JellyContainer.svelte';
    import TextHero from '$lib/Layout/TextHero.svelte';
    
    $: past = data?.members.filter(({isAlum})=>isAlum)
    $: curr = data?.members.filter(({isAlum})=>!isAlum)

    import Hero from '$lib/Layout/Hero.svelte';
    const useStickyTextHero = false;
    const stickyClasses = 'sticky top-0 bg-base-100 z-[100] pb-8'

</script>
<Hero></Hero>


<JellyContainer>
    <div class="relative">
        <TextHero class="{useStickyTextHero ? stickyClasses : ''}">
            Krishnaswamy Lab Members
        </TextHero>
        <div class="my-4 py-4">
            {#each curr as member, i }
                {#if member?.about}
                    <MemberInfo {member} {useStickyTextHero}/>   
                    {#if i < curr.length -1 }
                        <div class="divider divider-vertical h-8"></div>           
                    {/if}
                {/if}        
            {/each}
        </div>
    </div>
    
    
    <TextHero class="{useStickyTextHero ? stickyClasses : ''}">
        Krishnaswamy Lab Alumni
    </TextHero>
    <div class="my-4 py-4">
        {#each past as member, i}
            <MemberInfo {member} {useStickyTextHero}/>    
            {#if i < past.length -1 }
                <div class="divider divider-vertical h-8"></div>           
            {/if} 
        {/each}
    </div>

    <div class="py-48">

    </div>
    
</JellyContainer>