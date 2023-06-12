<script lang="ts">
	// NOTE: for tailwind
	import '../app.css';
	// NOTE: for fonts
	import '../styles/app.css'

	import type {Links} from '$lib/types'
	import {LabTwitterLink} from '$lib/utils'
	
	const routes: Links = [
		{text: 'projects', href: '/projects'},
		{text: 'publications', href: '/publications'},
		{text: 'workshop', href: '/workshop'},
		{text: 'teaching', href: '/teaching'},
		{text: 'members', href: '/members'},
		{text: 'join', href: '/join'},
		{text: 'contact', href: '/contact'},		
	]

    
	import Navigation from "$lib/Layout/Navigation.svelte";
	import Footer from "$lib/Layout/Footer.svelte";
	import FollowUsBtn from "$lib/Layout/FollowUsBtn.svelte";
	import TwitterSEO from '$lib/SEO/Twitter.svelte'
	import OpenGraphSEO from '$lib/SEO/OpenGraph.svelte'
	
</script>
<!-- <TwitterSEO/>
<OpenGraphSEO/> -->

<Navigation {routes} />

<div class="min-h-screen flex flex-col">
	<slot></slot>
	<div class="flex-1 py-8"></div>	
	<Footer/>
</div>
