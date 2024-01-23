import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PostGrid from '../components/postGrid'; // Make sure to import PostGrid
import Button from '../components/Button';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../components/header.module.css';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {frontmatter: { date: DESC }}, limit: 3) {
        nodes {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            slug
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  // Make sure the data is loaded before trying to access it
  if (!data?.allMdx?.nodes) {
    return <p>Loading...</p>; // or some other loading state
  }

  return (
    <Layout pageTitle="Welcome to My Blog!">
      <Seo title="Home Page" />
      <section>
        <StaticImage
          alt="A friendly welcome image"
          src="../images/welcome.png"
        />
        <h1>Hi, I'm Vlad Breus</h1>
        <p>Welcome to my blog where I share my journey.</p>
      </section>
      <section>
        <h2><u><Link to="/blog">Latest Posts</Link></u></h2>
        <PostGrid posts={data.allMdx.nodes} />
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button to="/blog">View All Posts</Button>
        </div>
      </section>
      {/* Additional sections here */}
    </Layout>
  )
}

export default IndexPage;