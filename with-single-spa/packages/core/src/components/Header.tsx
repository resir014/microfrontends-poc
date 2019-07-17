import * as React from 'react';

import styles from './Header.module.css';
import Menu from './Menu';
import MenuItem from './MenuItem';

interface HeaderProps {
  handleShowBorder?: (hasBorder?: boolean) => void;
}

export default function Header({ handleShowBorder }: HeaderProps) {
  const [hasBorder, setHasBorder] = React.useState(false);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const value = target.checked;
    // Create custom event with detail
    const event = new CustomEvent('core:setBorder', { detail: !hasBorder });

    // Set border and run any external change handlers
    setHasBorder(value);
    if (handleShowBorder) {
      handleShowBorder(value);
    }

    // Dispatch our event!
    window.dispatchEvent(event);
  };

  return (
    <header className={styles.root}>
      <div className={styles.title}>
        <h1 className={styles.brand}>
          <span>beego</span>live
        </h1>
      </div>
      <nav className={styles.navigation}>
        <Menu>
          {pathname => (
            <>
              <MenuItem pathname={pathname} link="/">
                dashboard
              </MenuItem>
              <MenuItem pathname={pathname} link="/live">
                go live
              </MenuItem>
              <MenuItem pathname={pathname} link="/about">
                about
              </MenuItem>
            </>
          )}
        </Menu>
        <label className={styles.changeButton} htmlFor="show-border">
          <input
            type="checkbox"
            id="show-border"
            name="show-border"
            checked={hasBorder}
            onChange={handleCheckbox}
          />
          <span>Show microfrontend boundaries</span>
        </label>
      </nav>
    </header>
  );
}
