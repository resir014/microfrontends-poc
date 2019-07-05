/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';

class App extends React.Component {
  public render() {
    return (
      <div className={styles.root}>
        <Header />
        <main className={styles.main}>
          <div id="live-window" />
          <div id="chat-widget" />
        </main>
      </div>
    );
  }
}

export default App;
