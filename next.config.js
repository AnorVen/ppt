/** @type {import('next').NextConfig} */
const path = require('path');

defaultConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: false,
	openAnalyzer: false,
})

module.exports = (phase, defaultConfig) => {
	return withBundleAnalyzer(defaultConfig)
}