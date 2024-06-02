(handler => 
  new MutationObserver(handler)
    .observe(document.body, {
      childList: true,
      subtree: true,
      _: handler([{addedNodes: [...document.querySelectorAll('video')]}])
    })
)(records => {
  for (var record of [...records]) {
    for ( var added of [...record?.addedNodes ?? []]) {
      if (!added?.matches?.call(added, 'video')) { continue; }
      var url = added.getAttribute('src');
      var file = url?.split('/').pop();
      var button = added.parentNode?.insertBefore(document.createElement('a'), added);
      if (!button) { continue; }
      button.style.width = '32px';
      button.style.height = '32px';
      button.style.display = 'block';
      button.style.position = 'absolute';
      button.style.zIndex = '999999999';
      button.innerHTML = '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%"><defs><linearGradient id="P" gradientUnits="userSpaceOnUse"/><radialGradient id="g1" cx="0" cy="0" r="1" href="#P" gradientTransform="matrix(27,0,0,27,32,32)"><stop stop-color="#6c95d2"/><stop offset=".99" stop-color="#1165ce"/><stop offset="1" stop-color="#1165ce"/></radialGradient></defs><style>.a{fill:url(#g1);stroke:#fff;paint-order:stroke fill markers;stroke-miterlimit:100;stroke-width:10}</style><path fill-rule="evenodd" class="a" d="m42 5c2 0 4 0.8 5.4 2.3l9.3 9.3c1.5 1.4 2.3 3.4 2.3 5.4v29.3c0 4.2-3.5 7.7-7.7 7.7h-38.6c-4.2 0-7.7-3.5-7.7-7.7v-38.6c0-4.2 3.5-7.7 7.7-7.7zm-29.2 18.6c0 2.5 2 4.5 4.5 4.5h21.7c2.6 0 4.6-2 4.6-4.5v-6.3c0-2.5-2-4.6-4.6-4.6h-21.7c-2.5 0-4.5 2.1-4.5 4.6zm13.8 14.5c-1.5 1.5-2.3 3.4-2.3 5.5 0 2 0.8 4 2.3 5.4 1.4 1.5 3.4 2.3 5.4 2.3 2.1 0 4.1-0.8 5.5-2.3 1.4-1.4 2.3-3.4 2.3-5.4 0-2.1-0.9-4-2.3-5.5-1.4-1.4-3.4-2.2-5.5-2.2-2 0-4 0.8-5.4 2.2z"/></svg>';
      button.setAttribute('target', '_blank');
      button.setAttribute('download', file);
      button.setAttribute('href', url);
    }
  }
});
