import React from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../components/button';

const Header = ({ siteTitle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <StaticImage
            alt="Logo"
            src="../images/icon.png"
          />
          <span className={styles.title}>{siteTitle}</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Button to="/">Home</Button>
        <Button to="/about">About</Button>
        <Button to="/blog">Blog</Button>
      </nav>
    </header>
  );
};

export default Header;