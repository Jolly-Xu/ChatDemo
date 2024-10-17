const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: "static",
  // 如果打包结果，希望以File协议（双击打开），需要加如下的配置：
  publicPath: "", // 这个值 写成 空字符串，或者 './' 都可以

  // 下面的配置，作用是取消生成 xxx.map 文件
  productionSourceMap: false,

  devServer: {
  	// host: process.env.VUE_APP_HOST,
  	// port: process.env.VUE_APP_PORT, //端口
  	// https: false, //false关闭https，true为开启
  	// open: true, //自动打开浏览器
  	proxy: {
  		'/api': {
  			target: "http://10.32.0.230:8000",
  			changeOrigin: true,
  			pathRewrite: {
  				'/api': ''
  			}
  		}
  	}
  }
});
