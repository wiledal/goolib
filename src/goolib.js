!function() {
  // Main goolib namespace object
  window.goolib = {};

  if (!window.TweenMax) console.warn("goolib requires TweenMax to properly function!");

  //= require goolib/State.js
  //= require goolib/*.js

  goolib.Layer = GoolibLayer;

}();
