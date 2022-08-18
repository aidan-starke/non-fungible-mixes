<script>
	import { NFMIcon } from "ui/icons";
	import { metaMaskAccount } from "stores";
	import { MetaMaskLinkButton } from "ui/components";
</script>

<div class="grid h-screen items-center">
	<div class="block justify-center space-y-16">
		<div
			class="card prose font-fira m-auto w-full items-center justify-center space-y-6 px-4 py-6 sm:w-2/3"
		>
			<NFMIcon iconClass="h-36 py-6 -mt-12 -mb-16 m-auto w-full sm:w-2/3" />

			<p class="text-sand/80 text-center text-lg">non-fungible mixes</p>

			{#if !$metaMaskAccount}
				<MetaMaskLinkButton />
			{/if}
		</div>
	</div>
</div>
