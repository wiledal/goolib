!function() {
  window.goolib = {};


  goolib.getStylePrefix = function(style) {
    var tests = ["webkit", "moz", "ms", "o"];
    if (typeof document.body.style[style] != "undefined") return style;
    for (var i = 0; i < tests.length; i++) {
      if (typeof document.body.style[tests[i]+style.charAt(0).toUpperCase()+style.slice(1)] != "undefined") {
        return tests[i] + style.charAt(0).toUpperCase()+style.slice(1);
      }
    }
    return null;
  }

  goolib.transformWithPrefix = goolib.getStylePrefix("transform");

  //= include inc/prefix.js
  //= include entities/Class.js
  //= include entities/DisplayObject.js


}();
