import * as React from 'react';

import styles from './UserCardGrid.module.css';

const UserCardGrid: React.FC = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default UserCardGrid;
