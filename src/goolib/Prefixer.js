class GoolibPrefixer {
  static prefix(styles) {
    var s = {};
    for (var key in styles) {
      var isNum = !isNaN(parseFloat(styles[key])) && isFinite(styles[key]);
      var nopx = ['opacity'];

      if (isNum && nopx.indexOf(key) == -1) styles[key] += 'px';
      var capitalKey = key.charAt(0).toUpperCase() + key.slice(1);

      s[`webkit${capitalKey}`] = styles[key];
      s[`moz${capitalKey}`] = styles[key];
      s[`ms${capitalKey}`] = styles[key];
      s[`o${capitalKey}`] = styles[key];
      s[key] = styles[key];
    }
    return s;
  }
}
