import React from "react";
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';
import PostGrid from '../../components/PostGrid';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <PostGrid posts={data.allMdx.nodes} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          slug
          date(formatString: "MMMM D, YYYY")
          hero_image {
            childImageSharp {
              gatsbyImageData(
                width: 400,
                aspectRatio: 1.5,
                layout: CONSTRAINED,
                transformOptions: { cropFocus: CENTER }
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage