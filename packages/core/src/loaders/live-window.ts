import * as singleSpa from 'single-spa';
import matchingPathname from '../utils/matchingPathname';
import runScript from '../utils/runScript';

const loadReactApp = async () => {
  await runScript('http://localhost:3001/static/js/main.js');
  return (window as any).liveModule;
};

export default function registerLiveWindow() {
  singleSpa.registerApplication(
    'live-window',
    loadReactApp,
    matchingPathname(['/user/JimmyBroadbent', '/live', '/about', '/']),
  );
}
