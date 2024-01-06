import React from 'react';
import styles from './navlink.module.css';

const NavLink = ({ label, path }: { label: string; path?: string }) => {
  return (
    <a href={path} className={styles.link}>
      {label}
      <span className={styles.progress} />
    </a>
  );
};

export default NavLink;
