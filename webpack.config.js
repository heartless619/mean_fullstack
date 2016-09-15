/* eslint strict: [0, "global"] */
'use strict';

const webpack = require('webpack');
const path = require('path');
const WebPackAngularTranslate = require('webpack-angular-translate');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const execSync = require('child_process').execSync;

const versionText = 'MEAN_STACK V';
const majorVersion = '0';
const buildNumber = execSync('git rev-list HEAD --count').toString().trim();
const hashNumber = execSync('git rev-parse HEAD').toString().trim();

let branchName;
try {
    branchName = execSync('git symbolic-ref --short HEAD').toString().trim();
} catch (err) {
    console.log('');
    console.log(`NOTE:  The error 'fatal: ref HEAD is not a symbolic ref' above can be safely ignored here.`);
    console.log('       It simply means Git was unable to find out which branch we are on.');
    console.log(`       This usually means we are running under Jenkins where the "develop" branch is assumed.`);
    console.log('');
    branchName = 'develop';
}

console.log(`${versionText}${majorVersion}.${buildNumber} (${branchName})`);
console.log(`Git: ${hashNumber}`);

const config = {
    devtool: 'cheap-source-map',
    context: path.join(__dirname, 'src'),
    output: {
        filename: 'bundle.[hash].js',
        path: path.join(__dirname, 'src')
    },
    entry: './index.js',
    // eslint: {
    //     configFile: '.eslintrc',
    //     formatter: require('eslint-friendly-formatter')
    // },
    plugins: [
        new webpack.DefinePlugin({
            MODE: {
                production: process.env.NODE_ENV === 'production',
                dev: process.env.NODE_ENV === 'development',
                ON_TEST: process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'upload',
                production_mock: process.env.NODE_ENV === 'production-test',
            },
            BUILD: {
                B_MAJOR: JSON.stringify(majorVersion),
                B_NUMBER: JSON.stringify(buildNumber),
                B_BRANCH: JSON.stringify(branchName),
                B_GIT_HASH: JSON.stringify(hashNumber)
            }

        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new WebPackAngularTranslate.Plugin(),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('styles.[hash].css')
    ],

    module: {
        preLoaders: [],
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader') // eslint-disable-line
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },

            {
                test: /\.js$/,
                loader: 'ng-annotate!babel?cacheDirectory',
                exclude: /node_modules|bower_components/
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg|gif|jpe?g|png)(\?]?.*)?$/,
                loader: 'file-loader?name=res/[name].[ext]?[hash]'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /^index\.html$/,
                loader: `file-loader?name=[path][name].[ext]?removeEmptyAttributes=false &collapseWhitespace=false`
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ],
        postLoaders: []
    },
    postcss: () => [autoprefixer]
};

if (process.env.NODE_ENV === 'bs') {
    const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
    config.plugins.push(new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['src'] }
    }));
}

if (process.env.NODE_ENV === 'ws') {
    const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
    config.plugins.push(new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['build'] }
    }));

    config.output = {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    };
}

// Modify the production path to dist folder
if (process.env.NODE_ENV === 'production') {
    config.output.path = path.join(__dirname, 'dist');
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        }
    }));
    var WebpackStrip = require('strip-loader');
    var stripLoader = {
        test: /\.js$/,
        loader: WebpackStrip.loader('console.log'),
        exclude: /node_modules|bower_components/
    };
    config.module.loaders.push(stripLoader);

    config.devtool = undefined;
} else if (process.env.NODE_ENV === 'test') {
    config.module.postLoaders.push({
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'istanbul-instrumenter'
    });
} else if (process.env.NODE_ENV === 'development') {
    // config.module.preLoaders.push({
    //     test: /\.js$/,
    //     loader: 'eslint-loader', exclude: /node_modules/
    // });
}
module.exports = config;
