import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const ContentfulBlogPost = ({ data }) => {
  const image = getImage(data.contentfulBlogPost.hero_image)

  return (
    <Layout pageTitle={data.contentfulBlogPost.title}>
      <p>Posted: {data.contentfulBlogPost.date}</p>
      {image && (
        <GatsbyImage
          image={image}
          alt={data.contentfulBlogPost.title}
        />
      )}
      <div>
        {data.contentfulBlogPost.post_text && 
          renderRichText(data.contentfulBlogPost.post_text)}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    contentfulBlogPost(id: {eq: $id}) {
      title
      date(formatString: "MMMM DD, YYYY")
      hero_image {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      post_text {
        raw
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.contentfulBlogPost.title} />

export default ContentfulBlogPost 