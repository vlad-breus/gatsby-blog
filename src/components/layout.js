import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header';
import Footer from './footer';
import { Helmet } from 'react-helmet';
import { 
    container,
    heading,
 } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  return (
      <div className={container}>
      <Helmet>
        <script>
          {`
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://analytics.vbr.eus/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </script>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
      <Footer />
      </div>
  )
}
  
export default Layout