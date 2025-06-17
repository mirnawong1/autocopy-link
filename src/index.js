import './custom.css';

function pluginAutocopyLink() {
  return {
    name: 'autocopy-link',
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
            },
            innerHTML: `
              // Load ClipboardJS from CDN
              const script = document.createElement('script');
              script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.11/clipboard.min.js';
              script.onload = () => {
                function copyHeader() {
                  const headers = document.querySelectorAll('h2.anchor, h3.anchor, h4.anchor');

                  headers.forEach((header) => {
                    header.style.cursor = "pointer";

                    // Remove trailing dashes
                    header = (function removeTrailingDashes(h) {
                      const id = h?.getAttribute("id");
                      if (id?.endsWith("-")) {
                        h.id = id.substring(0, id.length - 1);
                        return removeTrailingDashes(h);
                      }
                      return h;
                    })(header);

                    const clipboard = new ClipboardJS(header, {
                      text: function(trigger) {
                        const id = trigger.getAttribute("id");
                        return window.location.href.split('#')[0] + '#' + id;
                      }
                    });

                    clipboard.on('success', function(e) {
                      const popup = document.createElement('div');
                      popup.classList.add('copy-popup');
                      popup.innerText = 'Link copied!';
                      document.body.appendChild(popup);

                      const closeButton = document.createElement('span');
                      closeButton.classList.add('close-button');
                      closeButton.innerHTML = ' &times;';
                      closeButton.addEventListener('click', () => {
                        if (document.body.contains(popup)) {
                          document.body.removeChild(popup);
                        }
                      });
                      popup.appendChild(closeButton);

                      setTimeout(() => {
                        if (document.body.contains(popup)) {
                          document.body.removeChild(popup);
                        }
                      }, 3000);

                      e.trigger.classList.add("clicked");
                      setTimeout(() => {
                        e.trigger.classList.remove("clicked");
                      }, 1500);
                    });

                    clipboard.on('error', function(e) {
                      console.error("Clipboard error: ", e);
                    });
                  });
                }

                window.addEventListener("click", copyHeader);
                window.addEventListener("load", copyHeader);
              };
              document.head.appendChild(script);
            `, // <-- Close the template literal here
          },
        ],
      };
    },
  };
}

module.exports = pluginAutocopyLink;
