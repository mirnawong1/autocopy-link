/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Example Site',
    url: 'http://localhost',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
  
    presets: [
      [
        'classic',
        {
          docs: {
            path: 'docs',      // <-- this must point to your docs folder
            routeBasePath: 'docs',
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl: undefined,
          },
          blog: false,
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
  
    plugins: [require.resolve('../src/index.js')],

  };
  
  module.exports = config;
  
  