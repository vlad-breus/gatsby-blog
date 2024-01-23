import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import * as styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
        <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FontAwesomeIcon icon={faTelegram} className={styles.icon} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Vlad Breus Blog. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
