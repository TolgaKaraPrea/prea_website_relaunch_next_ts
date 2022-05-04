const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-themes',
    'storybook-dark-mode',
    '@storybook/addon-postcss',
    '@storybook/addon-notes/register',
    'storybook-addon-locale/register',
    'storybook-addon-i18n/register',
    '@storybook/addon-storysource',
    '@geometricpanda/storybook-addon-badges'
  ],
  webpackFinal: async config => {
    [].push.apply(config.resolve.plugins, [new TsconfigPathsPlugin({ extensions: config.resolve.extensions })]);

    return config;
  }
};
