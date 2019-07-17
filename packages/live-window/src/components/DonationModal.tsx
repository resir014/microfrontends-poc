import * as React from 'react';
import { useDialogState, Dialog, DialogDisclosure, DialogBackdrop } from 'reakit/Dialog';

import styles from './DonationModal.module.css';

interface DonationModalProps {
  username: string;
}

function DonationModal({ username }: DonationModalProps) {
  const [amount, setAmount] = React.useState('');
  const [message, setMessage] = React.useState('');
  const dialog = useDialogState();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('submit', amount, message);
    const event = new CustomEvent('chat:message', {
      detail: {
        timestamp: new Date().toISOString(),
        type: 'donation',
        data: {
          from: 'resir014',
          amount,
          message,
        },
      },
    });

    window.dispatchEvent(event);
    dialog.hide();
  };

  return (
    <>
      <DialogDisclosure className={styles.disclosureButton} {...dialog}>
        Donate
      </DialogDisclosure>
      <DialogBackdrop className={styles.overlay} {...dialog} />
      <Dialog
        as="form"
        className={styles.dialog}
        {...dialog}
        aria-label={`Donate to ${username}`}
        onSubmit={handleSubmit}
      >
        <header className={styles.modalHeader}>
          <h3>Donate to {username}</h3>
        </header>
        <section className={styles.modalContent}>
          <p>
            You can donate and support {username} by entering any amount you prefer and clicking on
            the Donate button below.
          </p>
          <p>Your donation is very much appreciated!</p>
          <div>
            <label htmlFor="amount" className={styles.formControl}>
              <span className={styles.label}>Amount</span>
              <input
                className={styles.numeric}
                id="amount"
                name="amount"
                type="numeric"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="message" className={styles.formControl}>
              <span className={styles.label}>Message</span>
              <textarea
                className={styles.input}
                rows={5}
                id="message"
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </label>
          </div>
        </section>
        <footer className={styles.modalFooter}>
          <button type="button" className={styles.cancelButton} onClick={dialog.hide}>
            Cancel
          </button>
          <button type="submit" className={styles.donateButton}>
            Donate
          </button>
        </footer>
      </Dialog>
    </>
  );
}

export default DonationModal;
