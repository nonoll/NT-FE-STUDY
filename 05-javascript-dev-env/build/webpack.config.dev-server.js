import {isDevMode, joinPath} from './common';

export const webpackConfigDevServer = (_, args) => {
  const IS_DEV_MODE = isDevMode(args);

  return {
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
    port: 8080,
    open: IS_DEV_MODE,
    hot: IS_DEV_MODE
  };
};
