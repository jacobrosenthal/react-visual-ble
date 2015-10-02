var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/index.js' // Your appʼs entry point
  ],
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel'],
            },
            {   test: /\.json$/,
                loaders: ['react-hot', 'json-loader']
            }]
    },
    devServer: {
        contentBase: "./public",
        noInfo: true, //  --no-info option
        hot: true,
        inline: true
    },
    resolve: {
      extensions: [ '', '.js', '.json' ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NOBLE_WEBSOCKET: true
        }
      }),
      new webpack.NoErrorsPlugin()
    ]
};
