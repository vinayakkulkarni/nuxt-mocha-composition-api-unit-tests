import { NuxtConfig } from '@nuxt/types';
import { pwa, axios } from './config/modules';
import { tailwindcss } from './config/buildModules';
import { build, head } from './config';

const config: NuxtConfig = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    ['@nuxtjs/tailwindcss', tailwindcss],
    // https://composition-api.nuxtjs.org/getting-started/setup
    '@nuxtjs/composition-api',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    ['@nuxtjs/axios', axios],
    // https://go.nuxtjs.dev/pwa
    ['@nuxtjs/pwa', pwa],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build,
};

export default config;
