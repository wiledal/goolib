class GoolibLayer {
  constructor(type="div", options={}) {
    this.el = document.createElement(type);
    this.set(options);

    return this;
  }

  set(options) {
    return TweenMax.set(this.el, options);
  }
  to(time, options) {
    return TweenMax.to(this.el, time, options);
  }
  fromTo(time, froptions, toptions) {
    return TweenMax.fromTo(this.el, time, froptions, toptions);
  }

  on(evt, callback) {
    this.el.addEventListener(evt, callback);
  }
  off(evt, callback) {
    this.el.removeEventListener(evt, callback);
  }
  trigger(evt, data) {
    var e = document.createEvent("Event");
    e.initEvent(evt);
    e.data = data;
    this.el.dispatchEvent(e);
  }

  addTo(el) {
    if (!el.nodeName) {
      el.el.appendChild(this.el);
    }else{
      el.appendChild(this.el);
    }
  }
  addChild(el) {
    if (!el.nodeName) {
      this.el.appendChild(el.el);
    }else{
      this.el.appendChild(el);
    }
  }

  text(text) {
    this.el.innerText = text;
  }
  html(html) {
    this.el.innerHTML = html;
  }
}
