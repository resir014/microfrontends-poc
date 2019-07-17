import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './UserCard.module.css';

interface UserCardProps {
  username: string;
  href: string;
  avatar: string;
}

const UserCard: React.FC<UserCardProps> = ({ username, href, avatar }) => {
  return (
    <Link to={href} className={styles.root}>
      <section className={styles.avatarWrapper}>
        <img className={styles.avatar} src={avatar} alt={username} />
      </section>
      <footer className={styles.usernameWrapper}>
        <span className={styles.username}>{username}</span>
      </footer>
    </Link>
  );
};

export default UserCard;
