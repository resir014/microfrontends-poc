/* eslint-disable react/prefer-stateless-function */
import './App.css';

import React from 'react';
import clsx from 'clsx';

import Header from './components/Header';

interface AppState {
  isMFBorderVisible: boolean;
}

class App extends React.Component<{}, AppState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      isMFBorderVisible: false,
    };
  }

  public setVisibleBorder = (value?: boolean) => {
    if (value) {
      this.setState({ isMFBorderVisible: value });
    } else {
      this.setState(prevState => ({ isMFBorderVisible: !prevState.isMFBorderVisible }));
    }
  };

  public render() {
    const { isMFBorderVisible } = this.state;

    return (
      <div className={clsx('Root', isMFBorderVisible && 'Root--withBorder')}>
        <Header handleShowBorder={this.setVisibleBorder} />
        <main className="Root__main">
          <div id="live-window" />
          <div id="chat-widget" />
        </main>
      </div>
    );
  }
}

export default App;
