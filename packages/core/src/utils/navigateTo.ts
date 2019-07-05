export default function navigateTo(url: string) {
  return window.history.pushState(null, null as any, url);
}
