if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
      const headers = document.querySelectorAll('h2, h3, h4');
  
      headers.forEach((header) => {
        header.style.cursor = 'pointer';
  
        header.addEventListener('click', () => {
          const id = header.id;
          if (id) {
            const url = `${window.location.origin}${window.location.pathname}#${id}`;
            navigator.clipboard.writeText(url).then(() => {
              // Optional: show a toast or animation
              console.log(`Copied anchor link: ${url}`);
            });
          }
        });
      });
    });
  }
  