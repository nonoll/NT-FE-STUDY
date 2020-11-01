import * as path from 'path';
import {
  webpackConfigModules,
  webpackConfigDevServer,
  webpackConfigPlugins,
  webpackConfigOptimization
} from './build';

const PACKAGE_JSON = require('./package.json');

const config = (_, args) => {
  const {mode} = args;
  const IS_DEV_MODE = mode === 'development';

  return {
    mode,
    entry: {
      bundle: './src/index.js'
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    output: {
      filename: IS_DEV_MODE ? 'js/[name].js' : 'js/[name].[hash].js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: webpackConfigDevServer(_, args),
    devtool: !IS_DEV_MODE ? 'source-map' : '',
    module: webpackConfigModules(_, args),
    plugins: webpackConfigPlugins(_, args, PACKAGE_JSON),
    optimization: webpackConfigOptimization(_, args)
  };
};

export default config;
