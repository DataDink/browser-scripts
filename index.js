(() => {
  const source = 'https://datadink.github.io/browser-scripts/';
  if (document.querySelector(`script[src^=${source}]`)) { return; }
  for (var name of [
    'video-saver'
  ]) {
    var script = document.createElement('script');
    script.setAttribute('src', `${source}/${name}.js`);
    script.setAttribute('type', 'module');
  }
})();
