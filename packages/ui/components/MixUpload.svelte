<script lang="ts">
	import { UploadIcon } from "../icons";
	import { fade } from "svelte/transition";
	import { ipfsHash, busy, mix, uploadError } from "stores";
	import { Circle2 as Spinner } from "svelte-loading-spinners";

	let files: FileList;

	$: {
		if (files) mix.set(files[0]);
	}
</script>

<div class="flex w-full items-center justify-center">
	<label
		for="mix"
		class="form-border flex h-64 w-full cursor-pointer flex-col items-center justify-center bg-gray-50 hover:bg-gray-100"
	>
		<div class="flex flex-col items-center justify-center pt-5 pb-6">
			{#if $busy}
				<span class="mb-3 items-center justify-center" in:fade>
					<Spinner
						unit="em"
						size="2.5"
						colorInner="#2a9d8f"
						colorOuter="#e76f51"
						colorCenter="#e9c46a"
					/></span
				>
			{:else if $ipfsHash}
				<a
					href={"https://gateway.pinata.cloud/ipfs/".concat($ipfsHash)}
					rel="noreferrer"
					target="_blank"
					class="fade-link prose mb-3">View on IPFS</a
				>
			{:else if $uploadError}
				<p class="prose mb-3 font-mono lowercase">{$uploadError}</p>
			{:else}
				<UploadIcon iconClass="mb-3 w-10 h-10 text-gray-400" />
			{/if}

			{#if $mix}
				<div class="prose m-auto text-center font-mono" transition:fade>
					{$mix.name}
				</div>
			{:else}
				<p class="mb-2 text-sm text-gray-500">
					<span class="font-semibold">click to upload</span> / drag and drop
				</p>
				<p class="text-xs text-gray-500">MP3, OGG, or WAV (MAX 25GB)</p>
			{/if}
		</div>

		<input
			required
			id="mix"
			bind:files
			type="file"
			class="hidden"
			accept="audio/*"
			disabled={!!$ipfsHash}
		/>
	</label>
</div>
