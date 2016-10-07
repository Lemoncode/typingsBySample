var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var basePath = __dirname;

module.exports = {
	resolve: {
	      extensions: ['', '.js', '.ts']
	},
	entry: ["./main.ts"],
	output: {
		path: path.join(basePath, "dist"),
		filename: "bundle.js"
	},

	//https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli
  devServer: {
    contentBase: './dist', //Content base
    inline: true, //Enable watch and live reload
    host: 'localhost',
    noInfo: true,
    port: 8080
  },

	devtool: 'source-map',

	module: {
		loaders: [
			{
	      test: /\.(ts)$/,
	      exclude: /node_modules/,
	      loader: 'ts-loader'
      },
			{
				test: /\.js$/,
        loader: "babel-loader",
				exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
			}
		]
	},
	plugins:[
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
			hash: true
    }),
  ]
}
