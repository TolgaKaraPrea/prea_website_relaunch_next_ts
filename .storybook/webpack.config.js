const path = require('path');

module.exports = ({ config }) => {
  // a bunch of other rules here

  config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules'];

  // Alternately, for an alias:
  config.resolve.alias = {
    atoms: path.resolve(__dirname, '../src/components/atoms/'),
    components: path.resolve(__dirname, '../src/components/'),
    modules: path.resolve(__dirname, '../src/components/modules/'),
    helpers: path.resolve(__dirname, '../src/helpers/'),
    layout: path.resolve(__dirname, '../src/components/layout')
  };

  return config;
};
