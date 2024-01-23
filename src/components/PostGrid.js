import React from 'react';
import PostCard from './PostCard';
import * as styles from './PostGrid.module.css';

const PostGrid = ({ posts }) => {
  return (
    <div className={styles.postsGrid}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;