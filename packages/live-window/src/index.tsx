import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './App';

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('live-window');
  if (!el) {
    el = document.createElement('div');
    el.id = 'live-window';
    document.body.appendChild(el);
  }

  return el;
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter,
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];
