var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: [ 'mocha'],
    files: [
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
