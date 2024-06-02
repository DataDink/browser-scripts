(() => {
  const source = 'https://datadink.github.io/browser-scripts/';
  const queue = Promise.resolve();
  if ([...document.querySelectorAll(`script[src^="${source}"]`)].length > 1) { return; }
  for (var name of [
    'video-saver'
  ]) {
    queue = queue.then(() => fetch(`${source}/${name}.js`))
  }
})();
