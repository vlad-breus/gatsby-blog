// PostCarousel.js
import React from 'react';
import PostCard from './PostCard';
import * as styles from './postcarousel.module.css';

const PostCarousel = ({ posts }) => {
  return (
    <div className={styles.postCarousel}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostCarousel;