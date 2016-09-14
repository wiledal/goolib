# goolib
> A library of smart element wrappers for rapidly building rich websites using JavaScript alone

## What?
A library with the purpose of transforming web development to something purely javascript, and "Flash-like" using extended DOM-elements.

## Why?
Because.

## Usage
The main element of `goolib` is the `goolib.Layer`. It's a fully es6 extendable class containing some helper functions for ease of use.

### Examples
The `goolib.Layer` is fully chainable for rapid scaffolding. The example below adds a red box to a scene and then animates it back and forth.

```javascript
var layer = new goolib.Layer({
  position: "absolute",
  top: 100,
  left: 100,
  width: 100,
  height: 100,
  background: "red"
})
  .to(2, {
    x: 100,
    y: 100,
    yoyo: true,
    repeat: -1
  })
  .addTo(document.body);
```
