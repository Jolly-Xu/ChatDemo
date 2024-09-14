const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
	assetsDir: 'static',

	devServer: {
		// host: process.env.VUE_APP_HOST,
		// port: process.env.VUE_APP_PORT, //端口
		// https: false, //false关闭https，true为开启
		// open: true, //自动打开浏览器
		proxy: {
			'/api': {
				target: "http://127.0.0.1:8081",
				changeOrigin: true,
				pathRewrite: {
					'/api': ''
				}
			}
		}
	}
})
