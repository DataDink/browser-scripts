(accessor => Object.defineProperty(HTMLElement.prototype, 'toolbar', {
  configurable: false, enumerable: true,
  get: () => {
    if (this[accessor]) { return this[accessor]; }
    const size = '16px';
    var element = this;
    var toolbar = document.createElement('div');
    toolbar.style.width = 'auto';
    toolbar.style.height = size;
    toolbar.style.display = 'flex';
    toolbar.style.position = 'absolutea';
    toolbar.style.flexDirection = 'row';
    toolbar.style.justifyContent = 'flex-start';
    toolbar.style.alignItems = 'flex-start';
    toolbar.style.overflow = 'auto';
    toolbar.style.overflowY = 'hidden';
    toolbar.style.zIndex = Number.MAX_SAFE_INTEGER;
    toolbar.add = function(uri, callback) {
      var button = document.createElement('div');
      button.style.width = size;
      button.style.height = size;
      button.style.backgroundImage = `url("${JSON.stringify(uri)}")`;
      button.style.backgroundPosition = 'center';
      button.style.backgroundSize = 'contain';
      button.addEventListener('click', callback.call(element));
      toolbar.appendChild(button);
    }
    element.parentNode.insertBefore(toolbar, element);
    new MutationObserver(() => {
      if (toolbar.nextSibling === element) { return; }
      if (!element.parentNode) { return toolbar.parentNode?.removeChild(toolbar); }
      element.parentNode.insertBefore(toolbar, element);
    }).observe(document, { childList: true, subtree: true });
    return element[accessor] = toolbar;
  }
}))(Symbol('toolbar'));
