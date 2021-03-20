<script>
	import Button from '@components/Button.svelte';
	import CheckForInstallPrompt from '@components/CheckForInstallPrompt.svelte';
	import CheckForUpdate from '@components/CheckForUpdate.svelte';
	import { twelveHourClock } from '@stores/settings';

	let hovering;

	function onMouseEnter() {
		hovering = true;
	}

	function onMouseLeave() {
		hovering = false;
	}

	const toggleTwelveHourClockClick = () => {
		$twelveHourClock = !$twelveHourClock;
	};
</script>

<style>
	aside {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 1em;
		display: flex;
		flex-direction: row-reverse;
		gap: 0.5em;
	}

	.hidden {
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.2s ease;
	}
</style>

<svelte:body
	on:mouseenter={onMouseEnter}
	on:mouseleave={onMouseLeave}
/>

<aside class:hidden={!hovering}>
	<Button on:click={toggleTwelveHourClockClick}>
		{`${$twelveHourClock ? '12' : '24'}h`}
	</Button>
	<CheckForUpdate />
	<CheckForInstallPrompt />
</aside>
