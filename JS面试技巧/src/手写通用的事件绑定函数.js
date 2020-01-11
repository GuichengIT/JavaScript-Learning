// 通用的事件绑定函数，需要实现普通的事件绑定和事件代理
/**
 *
 * @param elem
 * @param type
 * @param selector
 * @param fn
 * 几个注意点：
 * 1）需要传入四个参数
 * 2）先判断是不是有第四个参数，这个地方实现了类似函数重载的功能
 * 3）
 */
function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector;
    selector = null;
  }
  elem.addEventListener(type, (event) => {
    const target = event.target;
    // 事件代理绑定
    if (selector) {
      console.log(selector);
      if (target.matches(selector)) {
        fn.call(target, event);
      }
    } else {
      fn.call(target, event);
    }
  });
}

const btn = document.getElementById('btn1');
bindEvent(btn, 'click', function(event) {
  console.log(this);
  alert(this.innerHTML);
});

const div = document.getElementById('div');
bindEvent(div, 'click', 'a', function(event) {
  alert(this.innerHTML);
});


