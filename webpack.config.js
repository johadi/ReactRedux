const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
//const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'client/src'),
    build: path.join(__dirname, 'client/build'),
    css: path.join(__dirname, 'client/build/css')
};
process.env.BABEL_ENV = TARGET;// for hot loading set up
const common = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
                include: PATHS.css
            },
            // Set up jsx. This accepts js too thanks to RegExp
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015', 'survivejs-kanban']
                },
                include: PATHS.app
            }
        ]
    },
    // Add resolve.extensions.
    // '*' is needed to allow imports without an extension.
    // Note the .'s before extensions as it will fail to match without!!!
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};

if(TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
            contentBase: PATHS.build,
// Enable history API fallback so HTML5 History API based
// routing works. This is a good default that will come
// in handy in more complicated setups.
            historyApiFallback: true,
            hot: true,
            inline: true,
            //progress: true,
// Display only errors to reduce the amount of output.
            stats: 'errors-only',
// Parse host and port from env so this is easy to customize.
//
// If you use Vagrant or Cloud9, set
// host: process.env.HOST || '0.0.0.0';
//
// 0.0.0.0 is available to all network devices unlike default
// localhost
//             host: process.env.HOST,
//             port: process.env.PORT,
//             proxy: {
//                 "/api": {
//                     target: "http://localhost:4000",
//                     pathRewrite: {"^/api" : ""}
//                 }
//             }
//             proxy: {
//                 '/api/**': {
//                     target: 'http://localhost:4000/api/',
//                     secure: false,
//                     changeOrigin: true
//                 }
//             }
            proxy: {
                '/api/**': {
                    target: 'http://localhost:4000',
                    secure: false
                }
            }
            // proxy: {'/api/**': 'http://localhost:4000'}
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
            // new NpmInstallPlugin({
            //     save: true // --save
            // })
        ]
    });
}

if(TARGET === 'build') {
    module.exports = merge(common, {});
}