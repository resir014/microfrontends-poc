import * as React from 'react';
import clsx from 'clsx';

import styles from './about.module.css';

function AboutPage() {
  const [hasBorder, setHasBorder] = React.useState(false);

  const handleSetBorder = (e: any) => {
    setHasBorder(e.detail);
  };

  React.useEffect(() => {
    window.addEventListener('core:setBorder', handleSetBorder);

    return () => {
      window.removeEventListener('core:setBorder', handleSetBorder);
    };
  }, []);

  return (
    <div className={clsx(styles.root, hasBorder && styles.hasBorder)}>
      <header className={styles.header}>
        <p>This is the about page.</p>
      </header>
    </div>
  );
}

export default AboutPage;
