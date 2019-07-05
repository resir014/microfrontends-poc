import * as singleSpa from 'single-spa';
import matchingPathname from '../utils/matchingPathname';
import runScript from '../utils/runScript';

const loadReactApp = async () => {
  await runScript('http://localhost:3002/static/js/main.js');
  return (window as any).chatWindow;
};

export default function registerChatWindow() {
  singleSpa.registerApplication(
    'chat-window',
    loadReactApp,
    matchingPathname(['/live/motorsport101', '/live']),
  );
}
