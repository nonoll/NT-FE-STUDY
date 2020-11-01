import * as path from 'path';

export const PROJECT_PATH = path.dirname('../');

export const resolvePath = relPath => path.resolve(PROJECT_PATH, relPath);
export const relativePath = relPath => path.relative(PROJECT_PATH, relPath);
export const joinPath = relPath => path.join(PROJECT_PATH, relPath);

export const isDevMode = args => args.mode === 'development';
export const nameByENV = (IS_DEV_MODE, ext = '.[ext]') => IS_DEV_MODE ? `[name]${ext}` : `[name].[hash]${ext}`;
