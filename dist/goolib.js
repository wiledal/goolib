'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function () {
  // Main goolib namespace object
  window.goolib = {};

  if (!window.TweenMax) console.warn("goolib requires TweenMax to properly function!");

  var GoolibLayer = function () {
    function GoolibLayer() {
      _classCallCheck(this, GoolibLayer);

      var options = {};
      var type = 'div';

      if (typeof arguments[0] === 'string') type = arguments[0];
      if (_typeof(arguments[0]) === 'object') options = arguments[0];
      if (_typeof(arguments[1]) === 'object') options = arguments[1];

      this.el = document.createElement(type);
      this.set(options);

      return this;
    }

    _createClass(GoolibLayer, [{
      key: 'set',
      value: function set(options) {
        TweenMax.set(this.el, options);
        return this;
      }
    }, {
      key: 'to',
      value: function to(time, options) {
        TweenMax.to(this.el, time, options);
        return this;
      }
    }, {
      key: 'fromTo',
      value: function fromTo(time, froptions, toptions) {
        TweenMax.fromTo(this.el, time, froptions, toptions);
        return this;
      }
    }, {
      key: 'on',
      value: function on(evt, callback) {
        this.el.addEventListener(evt, callback);
        return this;
      }
    }, {
      key: 'off',
      value: function off(evt, callback) {
        this.el.removeEventListener(evt, callback);
        return this;
      }
    }, {
      key: 'trigger',
      value: function trigger(evt, data) {
        var e = document.createEvent("Event");
        e.initEvent(evt);
        e.data = data;
        this.el.dispatchEvent(e);
        return this;
      }
    }, {
      key: 'addTo',
      value: function addTo(el) {
        if (!el.nodeName) {
          el.el.appendChild(this.el);
        } else {
          el.appendChild(this.el);
        }
        return this;
      }
    }, {
      key: 'addChild',
      value: function addChild(el) {
        if (!el.nodeName) {
          this.el.appendChild(el.el);
        } else {
          this.el.appendChild(el);
        }
        return this;
      }
    }, {
      key: 'text',
      value: function text(_text) {
        this.el.innerText = _text;
        return this;
      }
    }, {
      key: 'html',
      value: function html(_html) {
        this.el.innerHTML = _html;
        return this;
      }
    }]);

    return GoolibLayer;
  }();

  goolib.Layer = GoolibLayer;
}();