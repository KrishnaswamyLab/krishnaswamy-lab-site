<script lang="ts">
    import type {Links} from '$lib/types'
	import Hamburger from '$lib/Icons/Hamburger.svelte';
    import { goto } from '$app/navigation';
	export let routes: Links = [
		{text: 'projects', href: '/projects'},
		{text: 'workshop', href: '/workshop'},
		{text: 'publications', href: '/publications'},
		{text: 'teaching', href: '/teaching'},
		{text: 'members', href: '/members'},
		{text: 'join', href: '/join'},
		{text: 'contact', href: '/contact'},		
	]
</script>


<div class="navbar inset-x-0 top-0 absolute text-secondary-content">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-2xl font-bold" href="/">
			Krishnaswamy Lab
		</a>
	</div>

	<div class="navbar-end">
		<div class="hidden lg:block">
			<ul class="menu menu-horizontal px-1">
				{#each routes as {text, href}, i}
				<li>
					<a href={href} class="uppercase {text == 'contact' ? 'btn btn-outline' : ''}">
						{text}
					</a>
				</li>
				{/each}
			</ul>
		</div>
		<div class="lg:hidden dropdown dropdown-end z-[100]">
			<label tabindex="-1" for="hamburger" class="btn btn-square btn-ghost">
				<button id="hamburger" class="btn btn-square btn-ghost">
					<Hamburger id="hamburger" class="inline-block w-5 h-5"/>			
				</button>
			</label>	
			<ul tabindex="-1" class="
				menu menu-compact dropdown-content 				
				mt-3 p-2 shadow rounded-box
				text-right uppercase text-lg
				bg-primary text-primary-content
			">
				{#each routes as {text, href}, i}
				<li on:click={()=>goto(href)} on:keydown={()=>goto(href)}>
					<a href={href} class="inline-block btn-link text-right">
						{text}
					</a>
				</li>
				{#if i < routes.length-1}
					<div class="divider py-0 my-0"></div>					
				{/if}
				{/each}
			</ul>		
		</div>
	</div>	
</div>