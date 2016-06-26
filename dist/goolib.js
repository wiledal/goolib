"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function () {
  // Main goolib namespace object
  window.goolib = {};

  if (!window.TweenMax) console.warn("goolib requires TweenMax to properly function!");

  var GoolibLayer = function () {
    function GoolibLayer() {
      var type = arguments.length <= 0 || arguments[0] === undefined ? "div" : arguments[0];
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      _classCallCheck(this, GoolibLayer);

      this.el = document.createElement(type);
      this.set(options);

      return this;
    }

    _createClass(GoolibLayer, [{
      key: "set",
      value: function set(options) {
        return TweenMax.set(this.el, options);
      }
    }, {
      key: "to",
      value: function to(time, options) {
        return TweenMax.to(this.el, time, options);
      }
    }, {
      key: "fromTo",
      value: function fromTo(time, froptions, toptions) {
        return TweenMax.fromTo(this.el, time, froptions, toptions);
      }
    }, {
      key: "on",
      value: function on(evt, callback) {
        this.el.addEventListener(evt, callback);
      }
    }, {
      key: "off",
      value: function off(evt, callback) {
        this.el.removeEventListener(evt, callback);
      }
    }, {
      key: "trigger",
      value: function trigger(evt, data) {
        var e = document.createEvent("Event");
        e.initEvent(evt);
        e.data = data;
        this.el.dispatchEvent(e);
      }
    }, {
      key: "addTo",
      value: function addTo(el) {
        if (!el.nodeName) {
          el.el.appendChild(this.el);
        } else {
          el.appendChild(this.el);
        }
      }
    }, {
      key: "addChild",
      value: function addChild(el) {
        if (!el.nodeName) {
          this.el.appendChild(el.el);
        } else {
          this.el.appendChild(el);
        }
      }
    }, {
      key: "text",
      value: function text(_text) {
        this.el.innerText = _text;
      }
    }, {
      key: "html",
      value: function html(_html) {
        this.el.innerHTML = _html;
      }
    }]);

    return GoolibLayer;
  }();

  goolib.Layer = GoolibLayer;
}();