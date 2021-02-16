<script>
	import { updateAvailable } from '@stores/settings';

	const swNewContentAvailable = () => {
		console.log('A new version is available');
		updateAvailable.update(() => true);
	};

	const swContentCached = () => {
		console.log('Caching complete! Now available offline');
	};
</script>

<svelte:window
	on:swNewContentAvailable={swNewContentAvailable}
	on:swContentCached={swContentCached}
/>
