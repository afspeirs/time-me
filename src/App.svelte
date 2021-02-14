<script>
	import { color, date, format } from '@stores/color';
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
		color: var(--color);
		mix-blend-mode: difference;
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
		--background-color: #fff;

		all: unset;
		background-color: transparent;
		color: var(--background-color);
		padding: 0.25rem 0.5rem;
		border: 2px solid var(--background-color);
		border-radius: 0.6rem;
		transition: all 0.2s ease;
		cursor: pointer;
	}
	button:hover {
		background-color: var(--background-color);
		color: var(--color);
	}
</style>

<svelte:head>
	<meta name="theme-color" content={$color}>
	<title>{$color} | TimeMe</title>
</svelte:head>

<main style="--color: {$color}">
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
