<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import ServiceWorkerEvents from '$lib/components/ServiceWorkerEvents.svelte';
  import {
    color,
    colorInverted,
    date,
    format,
  } from '$lib/stores/color';

  let hovering = false;

  const onBodyMouseEnter = () => {
    hovering = true;
  };

  const onBodyMouseLeave = () => {
    hovering = false;
  };

  const onMainPointerDown = () => {
    hovering = !hovering;
  };
</script>

<svelte:head>
  <meta name="theme-color" content={$color}>
  <title>{$color} | TimeMe</title>
</svelte:head>

<svelte:body
  on:mouseenter={onBodyMouseEnter}
  on:mouseleave={onBodyMouseLeave}
/>

<div style="--color: {$color}; --color-inverted: {$colorInverted};">
  <main
    class="absolute inset-0 flex flex-col justify-center items-center gap-[10%] bg-theme"
    on:pointerdown={onMainPointerDown}
  >
    <span class="text-inverted text-5xl select-none">{$color}</span>
    <time class="text-inverted text-5xl select-none" datetime={$date.format($format)}>
      {$date.format($format)}
    </time>
  </main>

  <Navigation
    {hovering}
    onMouseMove={onBodyMouseEnter}
  />
</div>

<ServiceWorkerEvents />
