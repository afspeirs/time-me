<script>
	import Button from '@components/Button.svelte';
	import { beforeInstallPrompt } from '@stores/settings';

	// const handleDismissClick = () => beforeInstallPrompt.update(() => false);

	const handleButtonClick = async () => {
		$beforeInstallPrompt.prompt();

		const outcome = await $beforeInstallPrompt.userChoice;
		if (outcome.outcome === 'accepted') {
			beforeInstallPrompt.update(() => false);
		}
	};
</script>

{#if $beforeInstallPrompt}
	<Button on:click={handleButtonClick}>
		Install {import.meta.env.APP_TITLE}
	</Button>
{/if}
