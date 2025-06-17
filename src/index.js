function autocopyLinkPlugin() {
    return {
      name: 'autocopy-link',
  
      injectHtmlTags() {
        return {
          headTags: [
            {
              tagName: 'script',
              attributes: {
                src: '/autocopy.js', // or inline if you're bundling
                defer: true,
              },
            },
          ],
        };
      },
  
      // Optional: if you're shipping static assets like a JS file
      getClientModules() {
        return [require.resolve('./headerLinkCopy.js')];
      },
    };
  }
  
  module.exports = autocopyLinkPlugin;
  