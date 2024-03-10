import { writable } from 'svelte/store';

const localStorageSubscribe = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const beforeInstallPrompt = writable(null);
const twelveHourClock = writable(JSON.parse(localStorage.getItem('setting-twelve-hour-clock')) || false);
const updateAvailable = writable(false);

twelveHourClock.subscribe((value) => localStorageSubscribe('setting-twelve-hour-clock', value));

export {
  beforeInstallPrompt,
  twelveHourClock,
  updateAvailable,
};
