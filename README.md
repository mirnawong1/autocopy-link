# Autocopy link plugin for Docusaurus

Automatically copies the anchor link when users click on a header (`h2`, `h3`, `h4`) in your Docusaurus site.

## Features

- 🔗 **One-click copying** - Click any header to copy its permalink to clipboard
- 🟣 **Visual feedback** - Purple popup notification confirms the copy action
- ⏰ **Auto-dismiss** - Popup disappears after 3 seconds or can be manually closed
- 🔧 **Zero configuration** - Works out of the box with no setup required
- 🎯 **Smart targeting** - Only affects headers with anchor links (h2, h3, h4)
- 🧹 **Clean URLs** - Automatically handles trailing dashes in header IDs

## Installation

```bash
npm install autocopy-link
```

## Usage

Add the plugin to your `docusaurus.config.js`:

```javascript
const config = {
  // ... other configuration
  plugins: [
    'autocopy-link',
    // ... other plugins
  ],
  // ... rest of configuration
};

module.exports = config;
```

and that's it! 🎉 The plugin will automatically:
1. Make all headers with anchor links clickable (cursor changes to pointer)
2. Copy the full URL with anchor when clicked
3. Show a purple "Link copied!" notification (feel free to change the color in the plugin)
4. Handle URL cleanup for better user experience

## How it works

The plugin injects JavaScript that:
- Targets headers with the `.anchor` class (standard Docusaurus headers)
- Uses [clipboard.js](https://clipboardjs.com/) for reliable cross-browser copying
- Creates a styled notification popup on successful copy
- Cleans up header IDs by removing trailing dashes

## Browser support

Works in all modern browsers that support the Clipboard API. Falls back gracefully in older browsers.

## License

MIT

## Contributing

Issues and pull requests are welcome on [GitHub](https://github.com/mirnawong1/autocopy-link).
