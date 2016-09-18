var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: {
        'main': './app/main'
    },
    output: {
        path: path.resolve(__dirname, './server/simple/build'),
        publicPath: '/build/',
        filename: 'bundle.[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.css', '.less', '.json'],
        alias: {
            //'react-bootstrap': 'react-bootstrap/dist/react-bootstrap.min.js',
            'react-router': 'react-router/umd/ReactRouter.min.js'
        }
    },
    externals: {
        // 申明为外部依赖并指定别名
       /* "react": "React",
        "react-dom": "ReactDOM"*/
    },
    module: {
        // avoid webpack trying to shim process
        noParse: /es6-promise\.js$/,
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                },
                include: __dirname
            },
            {test: /\.json$/, loader: "json"},
            {test: /\.less$/, loader: ExtractTextPlugin.extract("style", "css!less")},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css")},
            {test: /\.(png|jpg|jpeg|gif)$/, loader: "url-loader"},
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?-[a-z0-9=&.]+)?$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('simple'),
                BROWSER: JSON.stringify(true)
            }
        }),
        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            moment:'moment',
            //Immutable:'Immutable'
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
