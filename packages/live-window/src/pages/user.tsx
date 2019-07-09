import * as React from 'react';
import clsx from 'clsx';
import { RouteComponentProps } from 'react-router';

import styles from './user.module.css';
import DonationModal from '../components/DonationModal';

interface RouteParams {
  username: string;
}

function UserPage({ match }: RouteComponentProps<RouteParams>) {
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
      <header className={styles.embedWrapper}>
        <div className={styles.inner}>
          <div className={styles.videoWrapper}>
            <iframe
              title="YTEmbed"
              width={560}
              height={315}
              src="https://www.youtube-nocookie.com/embed/4AVTlM-yiIM?start=613"
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </header>
      <section className={styles.section}>
        <div className={styles.streamMeta}>
          <h3>iRacing - 24 Hours Of Le Mans | Part 1</h3>
          <span>{match.params.username}</span> &middot; 3,424 watching &middot;{' '}
          <DonationModal username={match.params.username} />
        </div>
      </section>
    </div>
  );
}

export default UserPage;
