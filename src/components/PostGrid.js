import React from "react";
import PostCard from "./postcard";
import * as styles from './postgrid.module.css'; // Assuming CSS Module

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