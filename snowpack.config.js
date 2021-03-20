const pkg = require('./package.json');

module.exports = {
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
	},
	plugins: [
		'@snowpack/plugin-svelte',
		'@snowpack/plugin-dotenv',
	],
	env: {
		APP_TITLE: 'TimeMe',
		ENV_MODE: process.env.NODE_ENV,
		PACKAGE_VERSION: pkg.version,
	},
	devOptions: {
		port: 4800,
	},
	alias: {
		'@app': './src',
		'@components': './src/components',
		'@stores': './src/stores',
		'@utils': './src/utils',
	},
};
