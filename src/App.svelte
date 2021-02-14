<script>
	import {
		color,
		colorInverted,
		date,
		format,
	} from '@stores/color';
	import { twelveHourClock } from '@stores/settings';

	const toggleTwelveHourClockClick = () => {
		$twelveHourClock = !$twelveHourClock;
	};
</script>

<style>
	main {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color);
		transition: background-color 0.2s ease-in;
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
	}

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

	button {
		all: unset;
		padding: 0.25rem 0.5rem;
		color: var(--color-inverted);
		border: 2px solid var(--color-inverted);
		border-radius: 0.6rem;
		transition: all 0.2s ease;
		cursor: pointer;
		font-weight: bold;
	}
	button:hover {
		background-color: var(--color-inverted);
		color: var(--color);
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

	<aside>
		<button on:click={toggleTwelveHourClockClick}>
			{`${$twelveHourClock ? '12' : '24'}h`}
		</button>
	</aside>
</main>
