module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{css,js,png,html,webmanifest}',
	],
	swDest: 'build/service-worker.js',
	skipWaiting: true,
	clientsClaim: true,
};
