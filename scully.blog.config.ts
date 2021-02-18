import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'blog',
  outDir: './dist/static',
  routes: {
    '/post/:title': {
      type: 'contentFolder',
      title: {
        folder: './blog',
      },
    },
  },
};
