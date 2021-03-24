import { NuxtOptionsBuild } from '@nuxt/types/config/build';
import { NuxtRuntimeConfig } from '@nuxt/types/config/runtime';

// Build Configuration (https://go.nuxtjs.dev/config-build)
const build: NuxtOptionsBuild = {
  corejs: 3,
  terser: {
    cache: true,
    parallel: true,
    sourceMap: true,
    terserOptions: {
      ecma: 2020,
      mangle: true,
      module: true,
      sourceMap: true,
    },
  },
  babel: {
    presets() {
      return [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@nuxt/babel-preset-app', { corejs: { version: 3 } }],
      ];
    },
  },
  extend(config: NuxtRuntimeConfig) {
    config.node = {
      fs: 'empty',
    };
  },
};

export default build;
