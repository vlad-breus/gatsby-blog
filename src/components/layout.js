import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header';
import Footer from './footer';
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