import * as React from 'react';
import clsx from 'clsx';

import styles from './live.module.css';
import Page from '../components/Page';

function LiveDashboardPage() {
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
      <Page>
        <h1>Go live.</h1>
        <p>please imagine this being your livestream dashboard</p>
      </Page>
    </div>
  );
}

export default LiveDashboardPage;
