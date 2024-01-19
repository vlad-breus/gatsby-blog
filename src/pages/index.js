import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
        alt="Doge"
        src="../images/doge.webp"
      />
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage