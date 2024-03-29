import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from './postcard.module.css';

const PostCard = ({ post }) => {
  const image = getImage(post.frontmatter.hero_image);

  return (
    <Link to={`/blog/${post.frontmatter.slug}`} className={styles.postCardLink}>
      <article className={styles.postCard}>
        <div className={styles.postCardImage}>
          {image && <GatsbyImage image={image} alt={post.frontmatter.title} />}
        </div>
        <div className={styles.postCardDetails}>
          <h2>{post.frontmatter.title}</h2>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <p className={styles.postDate}>Posted: {post.frontmatter.date}</p>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;