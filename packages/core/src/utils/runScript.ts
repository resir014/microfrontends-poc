async function runScript(url: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;

    const firstScript = document.getElementsByTagName('script')[0];

    if (firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }
  });
}

export default runScript;
