var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: [ 'mocha'],
    files: [
      // Reference: https://www.npmjs.com/package/phantomjs-polyfill
      // Needed because React.js requires bind and phantomjs does not support it
      // 'node_modules/phantomjs-polyfill/bind-polyfill.js',
      // 'node_modules/whatwg-fetch/fetch.js',
      // 'node_modules/babel-polyfill/dist/polyfill.js',
      'src/**/*.spec.*'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha',
      'karma-spec-reporter'
    ],
    preprocessors: {
      'src/**/*.spec.*': [ 'webpack', 'sourcemap' ]
    },
    reporters: ['spec'],
    webpack: require('./webpack.testConfig'),
    webpackServer: {
      noInfo: true
    }
  });
};
