<script>
	import Navigation from '@components/Navigation.svelte';
	import ServiceWorkerEvents from '@components/ServiceWorkerEvents.svelte';
	import {
		color,
		colorInverted,
		date,
		format,
	} from '@stores/color';
</script>

<style>
	main {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color);
		/* transition: background-color 0.2s ease-in; */
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 10%;
	}

	main span,
	main time {
		color: var(--color-inverted);
		font-size: 3em;
		user-select: none;
	}
</style>

<svelte:head>
	<meta name="theme-color" content={$color}>
	<title>{$color} | TimeMe</title>
</svelte:head>

<main style="--color: {$color}; --color-inverted: {$colorInverted};">
	<span>{$color}</span>
	<time datetime={$date.format($format)}>
		{$date.format($format)}
	</time>

	<Navigation />
</main>

<ServiceWorkerEvents />
