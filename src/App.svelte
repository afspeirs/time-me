<script>
	import { onMount } from 'svelte';
	import dayjs from 'dayjs';

	let color = '#FEFEFE';
	let date = dayjs();

	// Convert a number in hexadecimal form and we make sure to add two digits
	const toHex = (digit) => (`0${Number(digit).toString(16)}`).slice(-2).toUpperCase();

	const hexTime = () => {
		date = dayjs();
		// console.log(date);

		const seconds = date.format('ss');
		const secondsHex = parseInt((seconds * 255) / 59, 10);
		const minutes = date.format('mm');
		const minutesHex = parseInt((minutes * 255) / 59, 10);
		const hours = date.format('hh');
		const hoursHex = parseInt((hours * 255) / 23, 10);

		return `#${toHex(hoursHex)}${toHex(minutesHex)}${toHex(secondsHex)}`;
	};

	onMount(() => {
		const interval = setInterval(() => {
			color = hexTime();
		}, 1000);
		return () => clearInterval(interval);
	});
</script>

<style>
	.app {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color);
		transition: background-color 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 10%;
	}

	.app span,
	.app time {
		color: var(--color);
		mix-blend-mode: difference;
		font-size: 3em;
	}
</style>

<svelte:head>
	<meta name="theme-color" content={color}>
	<title>{color} | TimeMe</title>
</svelte:head>

<div class="app" style="--color: {color}">
	<span>{color}</span>
	<time datetime={date.format('hh[:]mm[:]ss')}>
		{date.format('hh[:]mm[:]ss')}
	</time>
</div>
