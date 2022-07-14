<script lang="ts">
	import { fade } from "svelte/transition";
	import { AudioPlayer } from "mp3";
</script>

<div class="grid h-screen items-center" in:fade>
	<div class="card m-auto block h-[20rem] w-5/6 space-y-8" />
	<div class="card m-auto block w-2/3 items-center justify-center p-4">
		<AudioPlayer
			urls={[
				"https://gateway.pinata.cloud/ipfs/bafybeihxbnel3yoyv2hionyjg2ey7etptwxffctymixcvl5zxlvtehjl2u?stream=true",
			]}
		/>
	</div>
</div>
