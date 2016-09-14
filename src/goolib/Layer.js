class GoolibLayer {
  constructor() {
    let options = {};
    let type = 'div';

    this.state = new GoolibState(this);

    if (typeof arguments[0] === 'string') type = arguments[0];
    if (typeof arguments[0] === 'object') options = arguments[0];
    if (typeof arguments[1] === 'object') options = arguments[1];

    this.el = document.createElement(type);
    this.set({
      transform: "translate3d(0,0,0)",
      backfaceVisibility: "hidden"
    });
    this.set(options);

    return this;
  }

  destroy() {
    if (this.el.parentNode) this.el.parentNode.removeChild(this.el);
    return this;
  }

  set(options) {
    var styles = GoolibPrefixer.prefix(options);
    for (var key in styles) {
      this.el.style[key] = styles[key];
    }
    return this;
  }
  animate(time, keyframes, options = {}) {
    if (!this.el.animate) {
      console.warn('WebAnimations not available, using .set() instead.');
      this.el.offsetWidth; // Trigger layout
      this.set({ transitionDuration: time / 1000 + 's' });
      this.set(keyframes[keyframes.length-1]);
      return this;
    }
    keyframes.forEach((k, i) => {
      keyframes[i] = GoolibPrefixer.prefix(k);
    });

    options.duration = time;
    options.easing = options.ease || 'ease';

    this.el.animate(keyframes, options)
    return this;
  }

  to(time, options) {
    if (!window.TweenMax) {
      console.warn('TweenMax not available, using .set() instead.');
      this.el.offsetWidth; // Trigger layout
      this.set({ transitionDuration: time / 1000 + 's' });
      this.set(options);
      return this;
    }
    TweenMax.to(this.el, time, options);
    return this;
  }

  fromTo(time, options, options2) {
    if (!window.TweenMax) {
      console.warn('TweenMax not available, using .animate() instead.');
      this.animate(time * 1000, [
        options,
        options2
      ]);
      return this;
    }
    TweenMax.fromTo(this.el, time, options, options2);
    return this;
  }

  on(evt, callback) {
    this.el.addEventListener(evt, callback);
    return this;
  }
  off(evt, callback) {
    this.el.removeEventListener(evt, callback);
    return this;
  }
  trigger(evt, data) {
    var e = document.createEvent("Event");
    e.initEvent(evt);
    e.data = data;
    this.el.dispatchEvent(e);
    return this;
  }

  addTo(el) {
    if (!el.nodeName) {
      el.el.appendChild(this.el);
    }else{
      el.appendChild(this.el);
    }
    return this;
  }
  addChild(el) {
    if (!el.nodeName) {
      this.el.appendChild(el.el);
    }else{
      this.el.appendChild(el);
    }
    return this;
  }

  text(text) {
    this.el.innerText = text;
    return this;
  }
  html(html) {
    this.el.innerHTML = html;
    return this;
  }
}
