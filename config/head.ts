import { NuxtOptionsHead } from '@nuxt/types/config/head';

const head: NuxtOptionsHead = {
  title: 'nuxt-mocha-composition-api-unit-tests',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  noscript: [{ innerHTML: 'This application requires JavaScript.' }],
};

export default head;
