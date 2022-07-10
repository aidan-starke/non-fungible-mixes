import { writable } from "svelte/store";

export const mix = writable<File>();

export const busy = writable<boolean>();

export const uploadError = writable<string>();

export const ipfsHash = writable<string>();
