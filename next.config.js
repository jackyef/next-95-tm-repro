const flowRight = require('lodash/flowright');

const withPrefresh = require('@prefresh/next');
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
// pass the modules you would like to see transpiled
// Any value here will cause `CSS Modules cannot be imported from within node_modules` error
const withTM = require('next-transpile-modules')(['something']);
const isProd = process.env.NODE_ENV === 'production';

const configFile = {
  webpack(config, { dev, isServer }) {
    // Move Preact into the framework chunk instead of duplicating in routes:
    const splitChunks = config.optimization && config.optimization.splitChunks;
    if (splitChunks) {
      const cacheGroups = splitChunks.cacheGroups;
      const test = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
      if (cacheGroups.framework) {
        cacheGroups.preact = Object.assign({}, cacheGroups.framework, { test });
        // if you want to merge the 2 small commons+framework chunks:
        // cacheGroups.commons.name = 'framework';
      }
    }

    if (isServer) {
      // mark `preact` stuffs as external for server bundle to prevent duplicate copies of preact
      // reference: https://github.com/vercel/next.js/pull/15110
      config.externals.push(/^(preact|preact-render-to-string|preact-context-provider)([\\/]|$)/);
    }

    // Install webpack aliases:
    // eslint-disable-next-line
    let aliases = config.resolve.alias || (config.resolve.alias = {});

    aliases.react = require.resolve('preact/compat');
    aliases['react-dom'] = require.resolve('preact/compat');

    // Automatically inject Preact DevTools:
    if (dev && !isServer) {
      const entry = config.entry;
      // eslint-disable-next-line
      config.entry = () =>
        entry().then(entries => {
          // eslint-disable-next-line
          entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || []);

          return entries;
        });
    }

    return config;
  },
};

module.exports = flowRight([withImages, withBundleAnalyzer, withPrefresh, withTM])(configFile);
