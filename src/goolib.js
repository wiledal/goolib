!function() {
  // Main goolib namespace object
  window.goolib = {};

  if (!window.TweenMax) console.warn("goolib requires TweenMax to properly function!");

  //= include entities/*.js

  goolib.Layer = GoolibLayer;

}();
