import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const storednotes = browser ? localStorage.getItem('notes') : null;
const storedcards = browser ? localStorage.getItem('cards') : null;

export const notes = writable(storednotes || {});
export const cards = writable(storedcards || {});

notes.subscribe((value) => {if (browser) {localStorage.setItem('notes', value)}});
cards.subscribe((value) => {if (browser) {localStorage.setItem('cards', value)}});