/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
	output: 'standalone',
	async rewites () {
		return [
			{
				source: '/',
				destination: '/html/index.html',
			}
		]
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};
