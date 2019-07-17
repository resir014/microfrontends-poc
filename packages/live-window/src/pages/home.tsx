import * as React from 'react';
import clsx from 'clsx';

import styles from './home.module.css';
import Page from '../components/Page';
import UserCard from '../components/UserCard';
import UserCardGrid from '../components/UserCardGrid';

import jimmer from '../assets/jimmer.jpg';
import m101 from '../assets/m101.jpg';
import lgr from '../assets/lgr.jpg';
import tomscott from '../assets/tomscott.png';

function HomePage() {
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
        <h2>Live right now</h2>
        <UserCardGrid>
          <UserCard
            href="/user/JimmyBroadbent"
            username="JimmyBroadbent"
            avatar={`http://localhost:3001${jimmer}`}
          />
        </UserCardGrid>

        <h2>Users you follow</h2>
        <UserCardGrid>
          <UserCard
            href="/user/JimmyBroadbent"
            username="Motorsport101"
            avatar={`http://localhost:3001${m101}`}
          />
          <UserCard
            href="/user/JimmyBroadbent"
            username="LetsGoRacing"
            avatar={`http://localhost:3001${lgr}`}
          />
          <UserCard
            href="/user/JimmyBroadbent"
            username="tomscott"
            avatar={`http://localhost:3001${tomscott}`}
          />
        </UserCardGrid>
      </Page>
    </div>
  );
}

export default HomePage;
