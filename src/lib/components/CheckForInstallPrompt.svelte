<script>
  import Button from '$lib/components/Button.svelte';
  import { beforeInstallPrompt } from '$lib/stores/settings';

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
  <Button on:click={handleButtonClick}>Install TimeMe</Button>
{/if}
