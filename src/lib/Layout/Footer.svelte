<script lang="ts">
	import FollowUsBtn from "$lib/Layout/FollowUsBtn.svelte";		
</script>

<footer class="footer px-10 py-4 bg-base-300 text-base-content ">
	<div class="flex flex-row place-content-evenly place-items-center w-full">
		<div class="flex flex-col place-content-center place-items-center">
			<div class="rounded-full bg-base-300 h-16 w-16 ">
				<img src="/favicon.ico" alt="lab-icon"/>
			</div>			
			<p>
				The Krishnaswamy Lab at Yale University.
				<br/>
				100 College Street, New Haven, CT 06510
			</p>
		</div> 
		<div class="flex flex-col place-content-center place-items-center">
			<span class="footer-title">Social</span> 
			<div class="grid grid-flow-col gap-4 ">
				<FollowUsBtn outlined={false}/>		
			</div>
		</div>
	</div>		
</footer>
