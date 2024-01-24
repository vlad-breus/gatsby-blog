import React from 'react';
import PostCard from './PostCard';
import * as styles from './postgrid.module.css';

const PostGrid = ({ posts }) => {
    return (
      <div className="posts-grid-wrapper">
        <div className={styles.postsGrid}>
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  };  

export default PostGrid;