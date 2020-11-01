import {joinPath} from './common';

export const webpackConfigDevServer = () => ({
  contentBase: [
    joinPath('public')
  ],
  quiet: true,
  clientLogLevel: 'silent',
  host: 'localhost',
  overlay: true,
  compress: true,
  watchContentBase: true,
  https: false,
  port: 8080
});
