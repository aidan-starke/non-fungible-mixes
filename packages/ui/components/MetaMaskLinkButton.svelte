<script lang="ts">
	import { fade } from "svelte/transition";
	import { connectWallet, extension } from "stores";
</script>

<p
	class="m-auto flex w-1/2 cursor-pointer items-center justify-center p-2 text-center"
	on:click={() => connectWallet($extension)}
	transition:fade
>
	<span class="fade-link">connect</span>
</p>
