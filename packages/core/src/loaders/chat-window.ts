import * as singleSpa from 'single-spa';
import matchingPathname from '../utils/matchingPathname';
import runScript from '../utils/runScript';

const loadVueApp = async () => {
  await runScript('http://localhost:3002/js/app.js');
  return (window as any).chatWidget;
};

export default function registerChatWidget() {
  singleSpa.registerApplication(
    'chat-widget',
    loadVueApp,
    matchingPathname(['/live/motorsport101', '/live', '/']),
  );
}
