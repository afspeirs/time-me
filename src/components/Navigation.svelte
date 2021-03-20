<script>
	import Button from '@components/Button.svelte';
	import CheckForInstallPrompt from '@components/CheckForInstallPrompt.svelte';
	import CheckForUpdate from '@components/CheckForUpdate.svelte';
	import { twelveHourClock } from '@stores/settings';

	export let hovering;
	export let onMouseMove;

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
		user-select: none;
	}

	.hidden {
		pointer-events: none;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.2s ease;
	}
</style>

<aside on:mousemove={onMouseMove}>
	<div class:hidden={!hovering} arai-visible>
		<CheckForInstallPrompt />
		<CheckForUpdate />
		<Button on:click={toggleTwelveHourClockClick}>
			{`${$twelveHourClock ? '12' : '24'}h`}
		</Button>
	</div>
</aside>
