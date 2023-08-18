/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
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
