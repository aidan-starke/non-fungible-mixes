<script lang="ts">
	import { fade } from "svelte/transition";
</script>

<div class="grid h-screen items-center" in:fade>
	<div class="card m-auto block h-[20rem] w-5/6 space-y-8" />
	<div class="card m-auto block w-4/5 items-center justify-center p-4" />
</div>
