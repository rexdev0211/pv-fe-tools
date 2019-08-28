'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});



// ====================================================

const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackMerge = require('webpack-merge');
const clearConsole = require('react-dev-utils/clearConsole');

const { getConfig, getCustomWebpackConfig } = require('@pro-vision/webpack-config');

const { getCompiler } = require('../helpers/devServerHelpers');
const isInteractive = process.stdout.isTTY;

prepareWebpackConfig()
  .then(webpackConfig => {    
    // Create a webpack compiler that is configured with custom messages.
    const compiler = getCompiler({
      webpackConfig,
      webpack,
    });
    

    const devServerConfig = webpackConfig[0].devServer;

    const devServer = new WebpackDevServer(compiler, devServerConfig);

    // Launch WebpackDevServer.
    devServer.listen(devServerConfig.port, '0.0.0.0', err => {
      if (err) {
        return console.log(err);
      }
      if (isInteractive) {
        clearConsole();
      }

      console.log(chalk.cyan('Starting the development server...\n'));
    });

    ['SIGINT', 'SIGTERM'].forEach(function(sig) {
      process.on(sig, function() {
        devServer.close();
        process.exit();
      });
    });
  });


async function prepareWebpackConfig() {
  const customWebpackConfig = await getCustomWebpackConfig('webpack.config.js');  
  const customWebpackDevConfig = await getCustomWebpackConfig('webpack.config.dev.js');

  return getConfig('development').map(defaultConfig => webpackMerge(defaultConfig, customWebpackConfig, customWebpackDevConfig));
}
