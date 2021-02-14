import { Workbox } from 'workbox-window';

export const register = () => {
	if (import.meta.env.MODE === 'production' && 'serviceWorker' in navigator) {
		const wb = new Workbox('/service-worker.js');

		wb.addEventListener('installed', () => {
			if (navigator.serviceWorker.controller) {
				// New Content Available event
				const event = new Event('swNewContentAvailable');
				console.log('swNewContentAvailable');
				window.dispatchEvent(event);
			} else {
				// Content Cached event
				const event = new Event('swContentCached');
				console.log('swContentCached');
				window.dispatchEvent(event);
			}
		});

		wb.register();
	}
}
