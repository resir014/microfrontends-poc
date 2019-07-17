import * as React from 'react';

interface MenuProps {
  children: (pathname: string) => React.ReactNode;
}

interface MenuState {
  pathname: string;
}

class Menu extends React.PureComponent<MenuProps, MenuState> {
  public constructor(props: MenuProps) {
    super(props);

    this.state = {
      pathname: window.location.pathname,
    };
  }

  public render() {
    const { children } = this.props;
    const { pathname } = this.state;

    return <ul>{children(pathname)}</ul>;
  }
}

export default Menu;
