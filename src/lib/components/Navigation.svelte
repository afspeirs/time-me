<script>
  import Button from '$lib/components/Button.svelte';
  import CheckForInstallPrompt from '$lib/components/CheckForInstallPrompt.svelte';
  import CheckForUpdate from '$lib/components/CheckForUpdate.svelte';
  import { twelveHourClock } from '$lib/stores/settings';

  export let hovering;
  export let onMouseMove;

  const toggleTwelveHourClockClick = () => {
    $twelveHourClock = !$twelveHourClock;
  };
</script>

<aside
  class="fixed flex justify-end top-0 left-0 w-full p-4 gap-2 select-none"
  on:mousemove={onMouseMove}
  class:hidden={!hovering}
>
  <CheckForInstallPrompt />
  <CheckForUpdate />
  <Button on:click={toggleTwelveHourClockClick}>
    {`${$twelveHourClock ? '12' : '24'}h`}
  </Button>
</aside>
