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
  }

  set(options) {
    TweenMax.set(this.el, options);
    return this;
  }
  to(time, options) {
    TweenMax.to(this.el, time, options);
    return this;
  }
  fromTo(time, froptions, toptions) {
    TweenMax.fromTo(this.el, time, froptions, toptions);
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
