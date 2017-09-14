// Written in ES5
'use strict';

function HashWebpackPlugin() {

};

HashWebpackPlugin.prototype.apply = function (compiler) {
  // See https://webpack.js.org/api/plugins/compiler/#event-hooks
  compiler.plugin('after-emit', function(compilation, callback) {
    var hash = compilation.hash;
    if (typeof(this.options.callback) === 'function') {
      this.options.callback(null, hash);
    }
    callback(null);
  });
};

module.exports = HashWebpackPlugin;
