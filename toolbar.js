(accessor => Object.defineProperty(HTMLElement.prototype, 'toolbar', {
  configurable: false, enumerable: true,
  get: () => {
    if (this[accessor]) { return this[accessor]; }
    var element = this;
    var toolbar = document.createElement('div');
    toolbar.style.width = 'auto';
    toolbar.style.height = '16px';
    toolbar.style.display = 'flex';
    toolbar.style.position = 'absolute';
    toolbar.style.left = 'auto';
    toolbar.style.top = 'auto';
    toolbar.style.flexDirection = 'row';
    toolbar.style.justifyContent = 'flex-start';
    toolbar.style.alignItems = 'flex-start';
    toolbar.style.overflow = 'auto';
    toolbar.style.overflowY = 'hidden';
    toolbar.style.zIndex = Number.MAX_SAFE_INTEGER;
    element.parentNode.insertBefore(toolbar, element);
    new MutationObserver(() => {
      if (toolbar.nextSibling === element) { return; }
      if (!element.parentNode) { return toolbar.parentNode?.removeChild(toolbar); }
      element.parentNode.insertBefore(toolbar, element);
    }).observe(element, { });
    return element[accessor] = toolbar;
  }
}))(Symbol('toolbar'));
