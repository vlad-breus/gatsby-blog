import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from './postcard.module.css';

const PostCard = ({ post }) => {
  const image = getImage(post.hero_image);

  return (
    <Link to={`/blog/${post.slug}`} className={styles.postCardLink}>
      <article className={styles.postCard}>
        {image && <GatsbyImage image={image} alt={post.title} />}
        <div className={styles.postCardContent}>
          <h2>{post.title}</h2>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <p className={styles.postDate}>Posted: {post.date}</p>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;