var DisplayObject = Class.extend({
  __init: function() {
    var _this = this,
        _x = 0,
        _y = 0,
        _z = 0;

    this._element = document.createElement("div");
    this._element.className = "display-object";

    this.setStyles({
      position: "absolute",
      transform: "translate3d(0,0,0)"
    });

    Object.defineProperty(this, "x", {
      get: function() {
        return _x;
      },
      set: function(value) {
        _x = value;

        var obj = {};
        obj[goolib.transformWithPrefix] = "translate3d("+_x+"px, "+_y+"px, "+_z+"px)";
        _this.setStyles(obj);
      }
    });
    Object.defineProperty(this, "y", {
      get: function() {
        return _y;
      },
      set: function(value) {
        _y = value;
        var obj = {};
        obj[goolib.transformWithPrefix] = "translate3d("+_x+"px, "+_y+"px, "+_z+"px)";
        _this.setStyles(obj);
      }
    });
    Object.defineProperty(this, "z", {
      get: function() {
        return _z;
      },
      set: function(value) {
        _z = value;
        var obj = {};
        obj[goolib.transformWithPrefix] = "translate3d("+_x+"px, "+_y+"px, "+_z+"px)";
        _this.setStyles(obj);
      }
    });

    if (this.init) this.init.apply(this, arguments);
  },

  getElement: function() {
    return this._element;
  },
  getWidth: function() {
    return this._element.offsetWidth;
  },
  getHeight: function() {
    return this._element.offsetHeight;
  },

  setEvents: function(events) {
    for (var key in events) {
      this._element.addEventListener(key, events[key]);
    }
  },
  setStyles: function (styles) {
    for (var key in styles) {
      this._element.style[key] = styles[key];
    }
  },
  setText: function(text) {
    this._element.textContent = text;
  },

  addChild: function(displayObject) {
    try {
      this._element.appendChild(displayObject._element);
    } catch(error) {
      throw("addChild error: DisplayObject.addChild expects another DisplayObject")
    }
  },
  addEventListener: function(evt, cb) {
    this._element.addEventListener(evt, cb);
  },

  removeChild: function(displayObject) {
    this._element.removeChild(displayObject._element);
  },

  dispatchEvent: function(eventName, data, bubbles, cancelable) {
    var evt = new CustomEvent(eventName, {
      detail: data || {},
      bubbles: bubbles || true,
      cancelable: cancelable || false,
    });
    this._element.dispatchEvent(evt);
  }
});

goolib.DisplayObject = DisplayObject;
