<script lang="ts">
	import "../app.css";
	import { MetaMask, SideBar } from "ui/components";
</script>

<svelte:head>
	<title>NFMixes</title>
</svelte:head>

<MetaMask />
<div class="from-deep/20 flex bg-gradient-to-l to-gray-200">
	<SideBar />

	<div class="h-screen w-screen pl-64">
		<slot />
	</div>
</div>
