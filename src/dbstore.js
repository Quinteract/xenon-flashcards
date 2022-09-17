import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// Create note store
if (browser) {
    if (localStorage.getItem('notes') === null) {
        localStorage.setItem('notes', '{}');
    }
    var storednotes = JSON.parse(localStorage.getItem('notes'));
} else {
    var storednotes = {};
}
export const notes = writable(storednotes);
notes.subscribe((value) => {
    if (browser) {
        localStorage.setItem('notes', JSON.stringify(value));
    }
});

// Create card store
if (browser) {
    if (localStorage.getItem('cards') === null) {
        localStorage.setItem('cards', '{}');
    }
    var storedcards = JSON.parse(localStorage.getItem('cards'));
} else {
    var storedcards = {};
}
export const cards = writable(storedcards);
cards.subscribe((value) => {
    if (browser) {
        localStorage.setItem('cards', JSON.stringify(value));
    }
});