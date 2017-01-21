class MatchObject {
  constructor(v) {
    this._v = v;
    this._ret = null;
    this._resolvable = false;
    this._resolved = false;
  }

  then(next) {
    if (this._resolvable) {
      this._ret = next();
      this._resolved = true;
      this._resolvable = false;
    }
    return this;
  }

  if(matcher) {
    if (
      !this._resolved &&
      matcher(this._v)
    ) {
      this._resolvable = true;
    }
    return this;
  }

  case(val) {
    if (
      !this._resolved &&
      this._v === val
    ) {
      this._resolvable = true;
    }
    return this;
  }

  end() {
    return this._ret;
  }

  instanceof(klass) {
    if (
      !this._resolved &&
      this._v instanceof klass
    ) {
      this._resolvable = true;
    }
    return this;
  }

  default(next) {
    if (this._resolvable) {
      throw new Error("match: Call default without unresolved then");
    }
    if (this._resolved) {
      return this._ret;
    }
    return next();
  }
}

export default function match(v) {
  return new MatchObject(v);
}
