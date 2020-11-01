import HtmlWebpackPlugin from 'html-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import {isDevMode, resolvePath} from './common';

export const webpackConfigPlugins = (_, args, packageJson) => {
  const IS_DEV_MODE = isDevMode(args);

  return [
    new HtmlWebpackPlugin({
      title: packageJson.name,
      template: resolvePath('public/index.html'),
      filename: 'index.html',
      chunks: [
        'bundle'
      ]
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: IS_DEV_MODE ? 'server' : 'static',
      analyzerHost: 'localhost',
      analyzerPort: 'auto',
      reportFilename: 'BundleAnalyzerReport.html',
      openAnalyzer: IS_DEV_MODE,
      excludeAssets: ['node_modules'],
      statsOptions: {
        exclude: /node_modules/
      }
    })
  ];
};
