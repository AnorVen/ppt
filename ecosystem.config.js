module.exports = {
	apps: [{
		script: 'yarn start',
	}],

	deploy: {
		production: {
			user: 'root',
			host: '45.90.34.143',
			ref: 'origin/main',
			repo: 'git@github.com:AnorVen/ppt.git',
			path: '/root/client',
			'pre-deploy-local': '',
			'post-deploy': 'source ~/.nvm/nvm.sh && yarn && yarn build && pm2 reload ecosystem.config.js --env production',
			'pre-setup': '',
			'ssh_options': 'ForwardAgent=yes',
		},
	},
};
