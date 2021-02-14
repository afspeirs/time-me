<script>
	import { onDestroy } from 'svelte';
	import { updateAvailable } from '@stores/settings';

	const swNewContentAvailable = () => {
		console.log('A new version is available');
		updateAvailable.update(() => true);
	};

	const swContentCached = () => {
		console.log('Caching complete! Now available offline');
	};

	window.addEventListener('swNewContentAvailable', swNewContentAvailable);
	window.addEventListener('swContentCached', swContentCached);

	onDestroy(() => {
		window.removeEventListener('swNewContentAvailable', swNewContentAvailable);
		window.removeEventListener('swContentCached', swContentCached);
	});
</script>
