import * as React from 'react';
import { useDialogState, Dialog, DialogDisclosure, DialogBackdrop } from 'reakit/Dialog';

import styles from './DonationModal.module.css';

interface DonationModalProps {
  username: string;
}

function DonationModal({ username }: DonationModalProps) {
  const dialog = useDialogState();
  return (
    <>
      <DialogDisclosure {...dialog}>Open dialog</DialogDisclosure>
      <DialogBackdrop className={styles.overlay} {...dialog} />
      <Dialog className={styles.dialog} {...dialog} aria-label={`Donate to ${username}`}>
        <header className={styles.modalHeader}>
          <h3>Donate to {username}</h3>
        </header>
        <section className={styles.modalContent}>
          <p>
            You can donate and support {username} by entering any amount you prefer and clicking on
            the Donate button below.
          </p>
          <p>Your donation is very much appreciated!</p>
        </section>
        <footer className={styles.modalFooter}>
          <button type="button">Donate</button>
        </footer>
      </Dialog>
    </>
  );
}

export default DonationModal;
