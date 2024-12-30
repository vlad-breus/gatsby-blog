import './src/styles/global.css';
require("prismjs/themes/prism-coy.css");

export const onRouteUpdate = ({ location }) => {
    if (typeof window !== 'undefined' && window._paq) {
      // Delay tracking to ensure the page title has updated
      setTimeout(() => {
        // Set the current page URL
        window._paq.push(['setCustomUrl', location.pathname]);
  
        // Set the document title as the page title in Matomo
        window._paq.push(['setDocumentTitle', document.title]);
  
        // Log the page view with Matomo
        window._paq.push(['trackPageView']);
      }, 50); // 50ms delay
    }
  };
  