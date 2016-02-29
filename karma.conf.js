'use strict';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'mocha', 'sinon-chai'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'src/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: ['babelify']
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
