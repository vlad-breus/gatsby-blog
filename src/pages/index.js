// index.js
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Button from '../components/button';
import PostCarousel from '../components/PostCarousel';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {frontmatter: {date: DESC}}) {
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
                  width: 300
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
      allContentfulBlogPost(sort: {date: DESC}) {
        nodes {
          id
          title
          slug
          date(formatString: "MMMM D, YYYY")
          hero_image {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: CONSTRAINED
            )
          }
          post_text {
            raw
          }
        }
      }
    }
  `);

  // Helper function to create excerpt from Contentful Rich Text
  const createExcerpt = (post_text, length = 200) => {
    if (!post_text?.raw) return '';
    const rawContent = JSON.parse(post_text.raw);
    const textContent = rawContent.content
      .filter(item => item.nodeType === 'paragraph')
      .map(item => 
        item.content
          .filter(content => content.nodeType === 'text')
          .map(text => text.value)
          .join('')
      )
      .join(' ');
    return textContent.length > length 
      ? `${textContent.substring(0, length)}...`
      : textContent;
  };

  // Normalize and combine all posts first
  const allPosts = [
    ...data.allMdx.nodes.map(node => ({
      id: node.id,
      title: node.frontmatter.title,
      slug: node.frontmatter.slug,
      date: node.frontmatter.date,
      rawDate: node.frontmatter.date, // Keep original date for sorting
      hero_image: node.frontmatter.hero_image,
      excerpt: node.excerpt
    })),
    ...data.allContentfulBlogPost.nodes.map(node => ({
      id: node.id,
      title: node.title,
      slug: node.slug,
      date: node.date,
      rawDate: node.date, // Keep original date for sorting
      hero_image: node.hero_image,
      excerpt: createExcerpt(node.post_text)
    }))
  ]
    .sort((a, b) => new Date(b.rawDate) - new Date(a.rawDate)) // Sort by date
    .slice(0, 4); // Take only the 4 most recent posts

  return (
    <Layout pageTitle="Welcome to My Blog!">
      <Seo title="Home Page" />
      <section>
        <StaticImage
          alt="A friendly welcome image"
          src="../images/welcome.png"
          className="hero-image"
        />
        <h1>Hi, I'm Vlad Breus</h1>
        <p>Welcome to my blog where I share my journey.</p>
      </section>
      <section>
        <h2><u>Latest Posts</u></h2>
        <PostCarousel posts={allPosts} />
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button to="/blog">View All Posts</Button>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
