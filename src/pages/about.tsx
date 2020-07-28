import * as React from 'react';
import Link from 'next/link';
import logo from '../assets/logo.png';

import styles from '../styles/default.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p className={styles.pre}>
          Edit <code>pages/about.tsx</code> and save to reload.
        </p>
        <Link href="/">
          <a className={styles.white}>Home page</a>
        </Link>
      </header>
    </div>
  );
};

export default About;
