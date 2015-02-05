// function DisplayObject() {
//   this._init();
//   if (this.init) this.init();
// }
// DisplayObject.prototype._init = function() {
//   this._element = document.createElement("div");
//   this._element.className = "display-object";
//
//   this.setStyles({
//     position: "absolute"
//   });
// }
// DisplayObject.extend = function () {
//   var newFunc = function(){};
//   newFunc.prototype = Object.create(this.prototype);
//   newFunc.constructor = this.constructor;
//   return newFunc;
// };
// DisplayObject.prototype.getElement = function () {
//   return this._element;
// };
// DisplayObject.prototype.addChild = function (displayObject) {
//   try {
//     this._element.appendChild(displayObject._element);
//   } catch(error) {
//     throw("addChild error: DisplayObject.addChild expects another DisplayObject")
//   }
// };
// DisplayObject.prototype.setEvents = function (events) {
//   for (var key in events) {
//     this._element.addEventListener(key, events[key]);
//   }
// };
// DisplayObject.prototype.setStyles = function (styles) {
//   for (var key in styles) {
//     this._element.style[key] = styles[key];
//   }
// };
// DisplayObject.prototype.getWidth = function () {
//   return this._element.offsetWidth;
// };
// DisplayObject.prototype.getHeight = function () {
//   return this._element.offsetHeight;
// };

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
        _this.setStyles({
          transform: "translate3d("+_x+"px, "+_y+"px, "+_z+"px)"
        })
      }
    });
    Object.defineProperty(this, "y", {
      get: function() {
        return _y;
      },
      set: function(value) {
        _y = value;
        _this.setStyles({
          transform: "translate3d("+_x+"px, "+_y+"px, "+_z+"px)"
        })
      }
    });
    Object.defineProperty(this, "z", {
      get: function() {
        return _z;
      },
      set: function(value) {
        _z = value;
        _this.setStyles({
          transform: "translate3d("+_x+"px, "+_y+"px, "+_z+"px)"
        })
      }
    });

    if (this.init) this.init.apply(this, arguments);
  },

  getElement: function() {
    return this._element;
  },
  getWidth: function () {
    return this._element.offsetWidth;
  },
  getHeight: function () {
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
    this._element.innerText = text;
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
  }
});

goolib.DisplayObject = DisplayObject;
