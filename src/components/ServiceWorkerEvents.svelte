<script>
	import {
		beforeInstallPrompt,
		updateAvailable,
	} from '@stores/settings';

	const swBeforeInstallPrompt = (event) => {
		event.preventDefault();
		beforeInstallPrompt.update(() => event);
	};

	const swNewContentAvailable = () => {
		// console.log('A new version is available');
		updateAvailable.update(() => true);
	};

	const swContentCached = () => {
		// console.log('Caching complete! Now available offline');
	};
</script>

<svelte:window
	on:beforeinstallprompt={swBeforeInstallPrompt}
	on:swNewContentAvailable={swNewContentAvailable}
	on:swContentCached={swContentCached}
/>
