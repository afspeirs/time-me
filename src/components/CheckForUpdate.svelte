<script>
	import { onDestroy } from 'svelte';

	import Button from '@components/Button.svelte';
	import { updateAvailable } from '@stores/settings';

	let loading = false;
	let timer;

	const updateServiceWorker = () => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.ready.then((registration) => registration.update());
		} else {
			setTimeout(() => window.location.reload(window.location.href), 1500);
		}
	};

	const handleButtonClick = () => {
		if ($updateAvailable) {
			window.location.reload();
		} else if (!loading) {
			loading = true;
			updateServiceWorker();
			timer = setTimeout(() => { loading = false; }, 2000);
		}
	};

	onDestroy(() => clearTimeout(timer));
</script>

<Button on:click={handleButtonClick} disabled={!$updateAvailable}>
	{#if $updateAvailable}
		Update
	{:else}
		{#if loading}
			Loading
		{:else}
			v{import.meta.env.PACKAGE_VERSION}
		{/if}
	{/if}
</Button>
