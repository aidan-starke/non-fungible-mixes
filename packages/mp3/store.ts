import { writable } from "svelte/store";

export const trackIndex = writable<number>(0);

export const isPlaying = writable<boolean>(false);

export const state =
	writable<"no-repeat" | "repeat" | "repeat-all">("no-repeat");
