import {isDevMode} from './common';

export const webpackConfigOptimization = (_, args) => {
  const IS_DEV_MODE = isDevMode(args);

  return {
    minimize: !IS_DEV_MODE
  };
};
