module.exports = {
	apps: [{
		script: 'npm start',
	}],

	deploy: {
		production: {
			user: 'root',
			key: 'key.pem',
			host: '45.90.34.143',
			ref: 'origin/main',
			repo: 'git@github.com:AnorVen/ppt.git',
			path: '/root/client',
			'pre-deploy-local': '',
			'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
			'pre-setup': '',
			'ssh_options': 'ForwardAgent=yes',
		},
	},
};
