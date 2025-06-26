function pluginAutocopyLink() {
  return {
    name: 'autocopy-link',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'style',
            attributes: {
              type: 'text/css',
            },
            innerHTML: `
              .copy-popup {
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background-color: #6a0dad; /* purple */
                color: #fff;
                padding: 12px 20px;
                border-radius: 8px;
                font-size: 15px;
                font-weight: 500;
                z-index: 9999;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                display: flex;
                align-items: center;
                gap: 8px;
              }

              .copy-popup .close-button {
                cursor: pointer;
                font-weight: bold;
                font-size: 18px;
                margin-left: 10px;
                color: #fff;
              }

              .copy-popup .close-button:hover {
                color: #ddd;
              }

              .anchor::after {
                content: '🔗' !important;
              }
            `,
          },
        ],
        postBodyTags: [
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
            },
            innerHTML: `
              const script = document.createElement('script');
              script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.11/clipboard.min.js';
              script.onload = () => {
                function copyHeader() {
                  const headers = document.querySelectorAll('h2.anchor, h3.anchor, h4.anchor');

                  headers.forEach((header) => {
                    header.style.cursor = "pointer";

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

                      const closeButton = document.createElement('span');
                      closeButton.classList.add('close-button');
                      closeButton.innerHTML = '&times;';
                      closeButton.addEventListener('click', () => {
                        if (document.body.contains(popup)) {
                          document.body.removeChild(popup);
                        }
                      });

                      popup.appendChild(closeButton);
                      document.body.appendChild(popup);

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
            `,
          },
        ],
      };
    },
  };
}

module.exports = pluginAutocopyLink;
