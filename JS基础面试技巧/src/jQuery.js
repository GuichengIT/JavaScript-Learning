class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    const len = result.length;
    for (let i=0; i<len; i++) {
      this[i] = result[i];
      this.length = len;
      this.result = result;
    }
  }
  get(index) {
    return this[index];
  }
  each(fn1) {
    for (let i=0; i<this.length; i++) {
      const elem = this[i];
      fn1(elem);
    }
  }
  on(type, fn) {
    this.each((elem) => {
      elem.addEventListener(type, fn, false);
    })
  }
}