const path = require('path');

function pluginAutoHeaderLinkCopy() {
  return {
    name: 'autocopy-link',

    getClientModules() {
      return [path.resolve(__dirname, './headerLinkCopy.js')];
    },
  };
}

module.exports = pluginAutoHeaderLinkCopy;
