<script>
  export let disabled = false;
</script>

<button
  class="px-2 py-1 text-inverted border-2 rounded-lg border-inverted font-bold select-none hover:bg-inverted hover:text-theme transition-colors disabled:opacity-40"
  on:click
  {disabled}
>
  <slot />
</button>
