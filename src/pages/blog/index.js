import React from "react";
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';
import PostGrid from '../../components/PostGrid';

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        id
        excerpt(pruneLength: 200)
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
    allContentfulBlogPost(sort: { date: DESC }) {
      nodes {
        id
        title
        slug
        date(formatString: "MMMM D, YYYY")
        post_text {
          raw
        }
        hero_image {
          gatsbyImageData(
            width: 400,
            aspectRatio: 1.5,
            layout: CONSTRAINED,
            placeholder: BLURRED,
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`

const BlogPage = ({ data }) => {
  // Helper function to create excerpt from Contentful Rich Text
  const createExcerpt = (post_text, length = 200) => {
    if (!post_text?.raw) return '';
    
    // Parse the raw content
    const rawContent = JSON.parse(post_text.raw);
    
    // Extract text from content
    const textContent = rawContent.content
      .filter(item => item.nodeType === 'paragraph')
      .map(item => 
        item.content
          .filter(content => content.nodeType === 'text')
          .map(text => text.value)
          .join('')
      )
      .join(' ');

    // Truncate to desired length
    return textContent.length > length 
      ? `${textContent.substring(0, length)}...`
      : textContent;
  };

  // Normalize the post structure from both sources
  const mdxPosts = data.allMdx.nodes.map(node => ({
    id: node.id,
    title: node.frontmatter.title,
    slug: node.frontmatter.slug,
    date: node.frontmatter.date,
    hero_image: node.frontmatter.hero_image,
    excerpt: node.excerpt
  }));

  const contentfulPosts = data.allContentfulBlogPost.nodes.map(node => ({
    id: node.id,
    title: node.title,
    slug: node.slug,
    date: node.date,
    hero_image: node.hero_image,
    excerpt: createExcerpt(node.post_text)
  }));

  // Combine and sort all posts
  const allPosts = [...mdxPosts, ...contentfulPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Layout pageTitle="My Blog Posts">
      <PostGrid posts={allPosts} />
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage