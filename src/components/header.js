import React from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.css';
import { StaticImage } from 'gatsby-plugin-image';

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
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link to="/" className={styles.navLinkText} activeClassName={styles.activeNavLink}>Home</Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/about" className={styles.navLinkText} activeClassName={styles.activeNavLink}>About</Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/blog" className={styles.navLinkText} activeClassName={styles.activeNavLink}>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;