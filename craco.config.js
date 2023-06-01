const path = require('path');
module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://192.168.121.66:8090',
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
};
