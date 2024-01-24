import React from 'react';
import { Link } from 'gatsby';
import * as styles from './button.module.css';

const Button = ({ children, to, ...otherProps }) => {
    return (
      <Link to={to} className={styles.button} activeClassName={styles.active} {...otherProps}>
        {children}
      </Link>
    );
  };
  
  export default Button;  