/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';

class App extends React.Component {
  public render() {
    return (
      <div className={styles.root}>
        <Header />
        <div id="live-window" />
      </div>
    );
  }
}

export default App;
