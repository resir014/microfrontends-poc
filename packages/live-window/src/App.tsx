import * as React from 'react';
import clsx from 'clsx';
import { BrowserRouter, Route } from 'react-router-dom';

import styles from './App.module.css';

import HomePage from './pages/home';
import AboutPage from './pages/about';
import UserPage from './pages/user';
import LiveDashboardPage from './pages/live';

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

  public componentDidMount() {
    window.addEventListener('core:setBorder', this.handleSetBorder);
  }

  public componentWillUnmount() {
    window.removeEventListener('core:setBorder', this.handleSetBorder);
  }

  private handleSetBorder = (e: any) => {
    console.log('event?', e.detail);
    this.setState({ isMFBorderVisible: e.detail });
  };

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error);
  }

  public render() {
    const { isMFBorderVisible } = this.state;

    return (
      <div className={clsx(styles.appWrapper, isMFBorderVisible && styles.hasMFBorder)}>
        <BrowserRouter>
          <Route path="/" exact component={HomePage} />
          <Route path="/live" component={LiveDashboardPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/user/:username" component={UserPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
