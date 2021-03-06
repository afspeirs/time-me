import App from './App.svelte';
import * as registerServiceWorker from './registerServiceWorker';

const app = new App({
	target: document.body,
});

registerServiceWorker.register();

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
	import.meta.hot.dispose(() => app.$destroy());
}
