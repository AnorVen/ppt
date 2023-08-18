/** @type {import('next').NextConfig} */
const path = require('path');

defaultConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:5000/api/:path*',
			},
			{
				source: '/:path*',
				destination: 'http://localhost:3000/:path*',
			},
		]
	},
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: true,
	openAnalyzer: true,
})

module.exports = (phase, defaultConfig) => {
	return withBundleAnalyzer(defaultConfig)
}