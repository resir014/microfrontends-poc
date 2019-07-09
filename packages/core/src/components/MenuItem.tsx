import * as React from 'react';

import navigateTo from '../utils/navigateTo';
import styles from './MenuItem.module.css';

interface MenuItemProps {
  pathname: string;
  link: string;
}

export default function MenuItem({ link, children }: React.PropsWithChildren<MenuItemProps>) {
  const handleClick = (to: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    return navigateTo(to);
  };

  return (
    <li className={styles.root}>
      <a className={styles.link} href={link} onClick={handleClick(link)}>
        {children}
      </a>
    </li>
  );
}
