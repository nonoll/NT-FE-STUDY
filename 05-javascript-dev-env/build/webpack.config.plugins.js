import HtmlWebpackPlugin from 'html-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import {resolvePath, useOnlyDevMode} from './common';

export const webpackConfigPlugins = (_, args, packageJson) => [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: packageJson.name,
    template: resolvePath('public/index.html'),
    filename: 'index.html',
    chunks: [
      'bundle'
    ]
  }),
  useOnlyDevMode(new BundleAnalyzerPlugin({
    analyzerMode: 'server',
    analyzerHost: 'localhost',
    analyzerPort: 'auto',
    reportFilename: 'BundleAnalyzerReport.html',
    openAnalyzer: true,
    excludeAssets: ['node_modules'],
    statsOptions: {
      exclude: /node_modules/
    }
  }), args)
].filter(plugin => plugin);
