class GoolibState {
  constructor(target) {
    this.states = {};
    this.target = target;
    this.currentState = null;

    this.defaultTransitionTime = .5;
  }

  add(name, state) {
    this.states[name] = state;

    return this;
  }
  remove(name) {
    delete this.states[name];

    return this;
  }
  set(name) {
    if (!this.states[name]) return console.warn("No state with name " + name);
    if (typeof this.states[name] == "function") this.states[name].call(this.target);
    if (typeof this.states[name] == "object") this.target.set(this.states[name]);

    this.currentState = name;

    return this;
  }
  to(name, time = null, options = {}) {
    if (time == null) time = this.defaultTransitionTime;

    if (!this.states[name]) return console.warn("No state with name " + name);
    if (typeof this.states[name] == "function") this.states[name].call(this.target);
    if (typeof this.states[name] == "object") this.target.to(time, this.states[name]);

    this.currentState = name;

    return this;
  }
}
