<script lang="ts">
	import { fade } from "svelte/transition";
	import { pinMixToIPFS } from "utils";
	import { MetaMaskLinkButton, MixUpload } from "ui/components";
	import { metaMaskAccount, mix, busy, ipfsHash, uploadError } from "stores";

	let title: string;

	const onFormSubmit = async () => {
		try {
			if (!title || !$mix) return;
			busy.set(true);

			const response = await pinMixToIPFS(title, $mix, $metaMaskAccount);

			if (!response.ok) throw { message: (await response.json()).error };

			ipfsHash.set((await response.json()).IpfsHash);
			busy.set(false);
		} catch (error: any) {
			uploadError.set(error.message?.reason ?? error.message?.details);
			busy.set(false);
		}
	};
</script>

<div class="grid h-screen items-center" in:fade>
	<form class="space-y-12">
		<fieldset class="card m-auto block w-2/3 space-y-8">
			<h1 class="prose m-auto text-center font-mono text-2xl tracking-wider">
				<span class="border-wood rounded border-b-2 pb-1">mint a mix</span>
			</h1>

			<div>
				<label class="prose font-mono" for="title">title</label>
				<input
					required
					id="title"
					type="text"
					bind:value={title}
					class="form-border fade focus:border-leaf w-full bg-transparent px-4 py-2 shadow focus:border-2 focus:outline-none focus:ring-0"
				/>
			</div>

			{#if $metaMaskAccount}
				<MixUpload />
			{:else}
				<MetaMaskLinkButton />
			{/if}
		</fieldset>

		{#if $metaMaskAccount}
			<button
				type="button"
				transition:fade
				on:click={onFormSubmit}
				class="card fade prose shadow-soft shadow-deep/30 hover:border-deep m-auto flex w-80 justify-center bg-white py-2 font-mono hover:scale-[1.1]"
			>
				submit
			</button>
		{/if}
	</form>
</div>
