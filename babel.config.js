module.exports = {
  env: {
    test: {
      presets: [
        '@babel/preset-typescript',
        '@babel/preset-env',
        ['@nuxt/babel-preset-app', { corejs: { version: 3 } }],
      ],
      plugins: [
        [
          'module-resolver',
          {
            root: ['.'],
            alias: {
              '@': '.',
              '~': '.',
            },
          },
        ],
      ],
    },
  },
};
