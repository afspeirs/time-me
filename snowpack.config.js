const { generateSW } = require('rollup-plugin-workbox');

module.exports = {
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
	},
	plugins: [
		'@snowpack/plugin-svelte',
		'@snowpack/plugin-dotenv',
	],
	alias: {
		'@app': './src',
		'@components': './src/components',
		'@stores': './src/stores',
		'@utils': './src/utils',
	},
	routes: [
		/* Example: Enable an SPA Fallback in development: */
		// { match: 'routes', src: '.*', dest: '/index.html' },
	],
	optimize: {
		/* Example: Bundle your final build: */
		// bundle: true,
	},
	packageOptions: {
		rollup: {
			plugins: [
				generateSW({
					swDest: 'build/service-worker.js',
					globDirectory: 'build/',
					globPatterns: [
						'**/*.{html,js,css}',
					],
					mode: 'production',
					skipWaiting: true,
					clientsClaim: true,
				}),
			],
		},
	},
	devOptions: {
		port: 4800,
	},
	buildOptions: {
		/* ... */
	},
};
