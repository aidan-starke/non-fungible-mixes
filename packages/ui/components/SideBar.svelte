<script lang="ts">
	import { fade } from "svelte/transition";
	import { metaMaskAccount, connectWallet, extension } from "stores";
	import { BrowseIcon, PlaylistIcon, UserIcon, UploadIcon } from "../icons";
</script>

<aside class="font-fira fixed sm:w-48 md:w-56 lg:w-64" aria-label="SideBar">
	<div
		class="fade border-deep/50 h-screen overflow-y-auto border-r-4 py-2 px-3"
	>
		<a class="prose cursor-pointer" href="/">
			<h1
				class="fade border-sunset hover:border-sand my-4 rounded-lg border-b-2 pb-2 text-center lowercase tracking-wide text-gray-500 hover:border-b-4 hover:text-gray-700 sm:text-sm md:text-base lg:text-lg"
			>
				Non-Fungible Mixes
			</h1>
		</a>

		<ul class="mt-12 w-full space-y-6">
			<li>
				<div class="sidebar-button group">
					<UserIcon iconClass="sidebar-icon group-hover:text-sunset" />
					{#if $metaMaskAccount}
						<span class="ml-3 tracking-wider"
							>{$metaMaskAccount
								.slice(0, 6)
								.concat("...")
								.concat($metaMaskAccount.slice(-4))}</span
						>
					{:else}
						<div class="ml-3" on:click={() => connectWallet($extension)}>
							Connect Wallet
						</div>
					{/if}
				</div>
			</li>

			<li>
				<div class="sidebar-button group">
					<BrowseIcon iconClass="sidebar-icon group-hover:text-sunset" /><span
						class="ml-3">Browse</span
					>
				</div>
			</li>

			<div class="border-deep/50 m-auto w-full border-b-2 py-1" />
			{#if $metaMaskAccount}
				<li transition:fade>
					<a class="sidebar-button group" href="/playlist">
						<PlaylistIcon
							iconClass="sidebar-icon group-hover:text-sunset"
						/><span class="ml-3">Playlist</span>
					</a>
				</li>

				<li transition:fade>
					<a class="sidebar-button group" href="/mint"
						><UploadIcon
							iconClass="sidebar-icon group-hover:text-sunset"
						/><span class="ml-3">mint</span></a
					>
				</li>
			{/if}
		</ul>
	</div>
</aside>
