import * as React from 'react';
import clsx from 'clsx';

import styles from './about.module.css';
import Page from '../components/Page';

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
      <Page>
        <h1>About.</h1>
        <p>
          Finally, an answer to the question &quot;should I use React or Vue?&quot; - why not use
          both at the same time!
        </p>
        <h2>What the heck?</h2>
        <p>
          Okay, serious. This app exists to demonstrate the powers of{' '}
          <a href="https://micro-frontends.org" target="_blank" rel="noopener noreferrer">
            microfrontends
          </a>
          . Microfrontends is a fairly new paradigm of applying the microservices architecture to
          the frontend. It allows for multiple UI modules to be combined to one single cohesive
          experience, allowing for independent development/deployment, and opening the doors for
          technological agnosticism.
        </p>
        <h2>How do I run this.</h2>
        <p>
          Visit the{' '}
          <a
            href="https://github.com/resir014/microfrontends-poc"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repo
          </a>{' '}
          to get the source code and run it locally.
        </p>
      </Page>
    </div>
  );
}

export default AboutPage;
