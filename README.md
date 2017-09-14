# webpack-plugin-hash

A Webpack plugin helps you get the build hash(not a specific file content hash) more easily.

## Installation

```sh
npm install --save-dev webpack-plugin-hash
```

## Why

When using Webpack, one thing you may notice is that there's a specific Hash key for each build,
and unlike the file hash or chunk hash it changes everytime when you build.

This simple plugin helps you quickly get the build hash with the following code:

```js
// webpack.config.js
const WebpackPluginHash = require('webpack-plugin-hash');

module.exports = {
  ...
  plugins: [
    new WebpackPluginHash({
      callback: (error, hash) => {
        console.log(`Build hash: ${hash}`);
      }
    })
  ]
};
```

