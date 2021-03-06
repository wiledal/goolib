"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function () {
  // Main goolib namespace object
  window.goolib = {};

  var GoolibState = function () {
    function GoolibState(target) {
      _classCallCheck(this, GoolibState);

      this.states = {};
      this.target = target;
      this.currentState = null;

      this.defaultTransitionTime = .5;
    }

    _createClass(GoolibState, [{
      key: "add",
      value: function add(name, state) {
        this.states[name] = state;

        return this;
      }
    }, {
      key: "remove",
      value: function remove(name) {
        delete this.states[name];

        return this;
      }
    }, {
      key: "set",
      value: function set(name) {
        if (!this.states[name]) return console.warn("No state with name " + name);
        if (typeof this.states[name] == "function") this.states[name].call(this.target);
        if (_typeof(this.states[name]) == "object") this.target.set(this.states[name]);

        this.currentState = name;

        return this;
      }
    }, {
      key: "to",
      value: function to(name) {
        var time = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
        var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

        if (time == null) time = this.defaultTransitionTime;

        if (!this.states[name]) return console.warn("No state with name " + name);
        if (typeof this.states[name] == "function") this.states[name].call(this.target);
        if (_typeof(this.states[name]) == "object") this.target.to(time, this.states[name]);

        this.currentState = name;

        return this;
      }
    }]);

    return GoolibState;
  }();

  var GoolibLayer = function () {
    function GoolibLayer() {
      _classCallCheck(this, GoolibLayer);

      var options = {};
      var type = 'div';

      this.state = new GoolibState(this);

      if (typeof arguments[0] === 'string') type = arguments[0];
      if (_typeof(arguments[0]) === 'object') options = arguments[0];
      if (_typeof(arguments[1]) === 'object') options = arguments[1];

      this.el = document.createElement(type);
      this.set({
        transform: "translate3d(0,0,0)",
        backfaceVisibility: "hidden"
      });
      this.set(options);

      return this;
    }

    _createClass(GoolibLayer, [{
      key: "destroy",
      value: function destroy() {
        if (this.el.parentNode) this.el.parentNode.removeChild(this.el);
        return this;
      }
    }, {
      key: "set",
      value: function set(options) {
        var styles = GoolibPrefixer.prefix(options);
        for (var key in styles) {
          this.el.style[key] = styles[key];
        }
        return this;
      }
    }, {
      key: "animate",
      value: function animate(time, keyframes) {
        var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

        if (!this.el.animate) {
          console.warn('WebAnimations not available, using .set() instead.');
          this.el.offsetWidth; // Trigger layout
          this.set({ transitionDuration: time / 1000 + 's' });
          this.set(keyframes[keyframes.length - 1]);
          return this;
        }
        keyframes.forEach(function (k, i) {
          keyframes[i] = GoolibPrefixer.prefix(k);
        });

        options.duration = time;
        options.easing = options.ease || 'ease';

        this.el.animate(keyframes, options);
        return this;
      }
    }, {
      key: "to",
      value: function to(time, options) {
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
    }, {
      key: "fromTo",
      value: function fromTo(time, options, options2) {
        if (!window.TweenMax) {
          console.warn('TweenMax not available, using .animate() instead.');
          this.animate(time * 1000, [options, options2]);
          return this;
        }
        TweenMax.fromTo(this.el, time, options, options2);
        return this;
      }
    }, {
      key: "on",
      value: function on(evt, callback) {
        this.el.addEventListener(evt, callback);
        return this;
      }
    }, {
      key: "off",
      value: function off(evt, callback) {
        this.el.removeEventListener(evt, callback);
        return this;
      }
    }, {
      key: "trigger",
      value: function trigger(evt, data) {
        var e = document.createEvent("Event");
        e.initEvent(evt);
        e.data = data;
        this.el.dispatchEvent(e);
        return this;
      }
    }, {
      key: "addTo",
      value: function addTo(el) {
        if (!el.nodeName) {
          el.el.appendChild(this.el);
        } else {
          el.appendChild(this.el);
        }
        return this;
      }
    }, {
      key: "addChild",
      value: function addChild(el) {
        if (!el.nodeName) {
          this.el.appendChild(el.el);
        } else {
          this.el.appendChild(el);
        }
        return this;
      }
    }, {
      key: "text",
      value: function text(_text) {
        this.el.innerText = _text;
        return this;
      }
    }, {
      key: "html",
      value: function html(_html) {
        this.el.innerHTML = _html;
        return this;
      }
    }]);

    return GoolibLayer;
  }();

  var GoolibPrefixer = function () {
    function GoolibPrefixer() {
      _classCallCheck(this, GoolibPrefixer);
    }

    _createClass(GoolibPrefixer, null, [{
      key: "prefix",
      value: function prefix(styles) {
        var s = {};
        for (var key in styles) {
          var isNum = !isNaN(parseFloat(styles[key])) && isFinite(styles[key]);

          if (isNum) styles[key] += 'px';
          var capitalKey = key.charAt(0).toUpperCase() + key.slice(1);

          s["webkit" + capitalKey] = styles[key];
          s["moz" + capitalKey] = styles[key];
          s["ms" + capitalKey] = styles[key];
          s["o" + capitalKey] = styles[key];
          s[key] = styles[key];
        }
        return s;
      }
    }]);

    return GoolibPrefixer;
  }();

  goolib.shutup = false;
  goolib.Layer = GoolibLayer;
}();