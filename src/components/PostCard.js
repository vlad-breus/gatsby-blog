import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from './PostCard.module.css'; // Assuming CSS Module

const PostCard = ({ post }) => {
  const image = getImage(post.frontmatter.hero_image);

  return (
    <Link to={`/blog/${post.frontmatter.slug}`} className={styles.postCardLink}>
      <article className={styles.postCard}>
        {image && <GatsbyImage image={image} alt={post.frontmatter.title} />}
        <div className={styles.postCardContent}>
          <h2>{post.frontmatter.title}</h2>
          <p className={styles.postDate}>Posted: {post.frontmatter.date}</p>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;