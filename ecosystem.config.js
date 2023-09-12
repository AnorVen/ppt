module.exports = {
	apps: [{
		script: 'npm run start_prod',
	}],

	deploy: {
		production: {
			user: 'root',
			host: '45.90.34.143',
			ref: 'origin/main',
			repo: 'git@github.com:AnorVen/ppt.git',
			path: '/var/www/client',
			'pre-deploy-local': '',
			'post-deploy': 'source ~/.nvm/nvm.sh && npm i --legacy-peer-deps && npm run build && pm2 reload ecosystem.config.js --env production',
			'pre-setup': '',
			'ssh_options': 'ForwardAgent=yes',
		},
	},
};
