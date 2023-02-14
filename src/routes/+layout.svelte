<script lang="ts">
	// NOTE: for tailwind
	import '../app.css';
	// NOTE: for fonts
	import '../styles/app.css'

	import Hamburger from '$lib/Icons/Hamburger.svelte';
	const routes = [
		{text: 'projects', href: '/projects'},
		{text: 'workshop', href: '/workshop'},
		{text: 'publications', href: '/publications'},
		{text: 'teaching', href: '/teaching'},
		{text: 'members', href: '/members'},
		{text: 'contact', href: '/contact'},		
	]

	import { goto } from '$app/navigation';
    import Twitter from "$lib/Icons/Twitter.svelte";

	const twitterLink = "https://twitter.com/KrishnaswamyLab"
    const toTwitter = () => {
        goto(twitterLink)
    }
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
		<div class="lg:hidden dropdown dropdown-end">
			<label tabindex="0" for="hamburger" class="btn btn-square btn-ghost">
				<button id="hamburger" class="btn btn-square btn-ghost">
					<Hamburger id="hamburger" class="inline-block w-5 h-5"/>			
				</button>
			</label>	
			<ul tabindex="0" class="
				menu menu-compact dropdown-content 				
				mt-3 p-2 shadow rounded-box
				text-right uppercase text-lg
				bg-primary text-primary-content
			">
				{#each routes as {text, href}, i}
				<li>
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
<!-- <div class="bg-primary h-16"></div> -->

<div class="min-h-screen flex flex-col">
	<slot></slot>
	<div class="flex-1 py-8"></div> 	
	<!-- <footer class="footer items-center p-4 px-8 bg-base-300 text-base-content">
		<div class="flex flex-col place-content-center place-items-center">
			<div class="rounded-full h-16 w-16 ">
				<img src="/favicon.ico" alt="lab-icon"/>
			</div>			
			<p>
				The Krishnaswamy Lab at Yale University.
				<br/>
				51 Prospect Street, AKW 204, New Haven, CT 06511
			</p>
		</div> 
		<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end ">
			<a href="{twitterLink}" class="inline-block">
				<div class="inline-flex gap-2" >
					<Twitter class="h-6 w-6 stroke-sky-400 fill-sky-400"/>
				</div>							
			</a>		
		</div>
	</footer> -->


	<footer class="footer px-10 py-4 bg-base-300 text-base-content ">
		<div class="flex flex-row place-content-evenly place-items-center w-full">
			<div class="flex flex-col place-content-center place-items-center">
				<div class="rounded-full bg-base-300 h-16 w-16 ">
					<img src="/favicon.ico" alt="lab-icon"/>
				</div>
				
				<p>
					The Krishnaswamy Lab at Yale University.
					<br/>
					51 Prospect Street, AKW 204, New Haven, CT 06511
				</p>
			</div> 
			<div class="flex flex-col place-content-center place-items-center">
				<span class="footer-title">Social</span> 
				<div class="grid grid-flow-col gap-4 ">
					<a href="{twitterLink}" class="inline-block">
						<div class="inline-flex gap-2" >
							<Twitter class="h-6 w-6 stroke-sky-400 fill-sky-400"/>
							Follow us on Twitter
						</div>							
					</a>			
				</div>
			</div>
		</div>
		
	</footer>
</div>
