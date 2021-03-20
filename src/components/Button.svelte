<script>
	export let disabled = false;
</script>

<style>
	button {
		all: unset;
		padding: 0.25rem 0.5rem;
		color: var(--color-inverted);
		border: 2px solid var(--color-inverted);
		border-radius: 0.6rem;
		font-weight: bold;
		cursor: pointer;
		user-select: none;
		transition: all 0.2s ease;
	}
	button:hover,
	button:focus-visible {
		background-color: var(--color-inverted);
		color: var(--color);
	}
	button:disabled {
		opacity: 0.4;
		pointer-events: none;
	}
</style>

<button on:click {disabled}>
	<slot />
</button>
