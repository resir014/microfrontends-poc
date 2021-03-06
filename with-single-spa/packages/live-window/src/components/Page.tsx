import * as React from 'react';

import styles from './Page.module.css';

const Page: React.FC = ({ children }) => {
  return <section className={styles.root}>{children}</section>;
};

export default Page;
