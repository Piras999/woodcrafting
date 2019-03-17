const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	// entry: {
	// 	home: './src/js/app.js',
	// 	about: './src/js/o_nas.js',
	// 	gallery: './src/js/gallery.js',
	// 	contact: './src/js/contact.js'
	// },
	// output: {
	// 	path: path.resolve(__dirname, 'docs'), //output directory
	// 	filename: '[name].out.js' 
	// },

		entry: {
		  'bundle.js': [
			path.resolve(__dirname, './src/js/app.js'),
			path.resolve(__dirname, './src/js/o_nas.js'),
			path.resolve(__dirname, './src/js/gallery.js'),
			path.resolve(__dirname, './src/js/contact.js')
		  ]
		},
		output: {
		  filename: '[name]',
		  path: path.resolve(__dirname, 'docs'),
		},




	module: {
		rules: [
			//scripts rule (*.js)
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
			},
			//styles rule (*.scss, *.css)
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						} 
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: () => [
								new require('autoprefixer')({
									browsers: [
										'> 1%'
									]
								})
							]
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						} 
					}
				]
			},
			//images rule
			{
				test: /\.(jpg|jpeg|gif|png)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images'
					}
				}
			},
			//fonts rule
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						publicPath: 'fonts',
						outputPath: 'fonts'
					}
				}
			},
			{
				test: /\.html$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]'
					}
				},
				exclude: path.resolve(__dirname, 'index.html')
			}
		]
	},
	plugins: [
		//cleans directory (dest)
		new CleanWebpackPlugin(['dest']),
		
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: "body",
			chunks: ["app"],
			template: 'index.html'
		}),
		
		new MiniCssExtractPlugin({
			filename: 'app.css'
		})
	],
	devServer: {
		filename: './docs/out.js',
	},
	watch: true,
	mode: 'development', //alternative 'production'
	devtool: 'source-map'
}