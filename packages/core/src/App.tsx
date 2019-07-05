/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import styles from './App.module.css';

class App extends React.Component {
  public render() {
    return (
      <div className={styles.root}>
        <div>this is the application frame</div>
        <div id="live-window" />
      </div>
    );
  }
}

export default App;
