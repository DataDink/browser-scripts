(() => {
  const source = 'https://datadink.github.io/browser-scripts/';
  if ([...document.querySelectorAll(`script[src^="${source}"]`)].length > 1) { return; }
  for (var name of [
    'video-saver'
  ]) {
    var script = document.createElement('script');
    script.setAttribute('src', `${source}/${name}.js`);
    script.setAttribute('type', 'module');
    document.head.appendChild(script);
  }
})();
