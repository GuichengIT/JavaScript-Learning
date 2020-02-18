const div = document.getElementById('div');
// let timer = null;
// div.addEventListener('drag', function (e) {
//   if (timer) {
//     return
//   }
//   timer = setTimeout(() => {
//     console.log(e.offsetY, e.offsetY);
//     timer = null;
//   }, 500);
// });

function throttle (fn, delay=100) {
  let timer = null;
  return function () {
    if (timer) {
      return;
    }
    console.log(arguments);
    timer = setTimeout(() => {
      fn.call(this, arguments[0]);
      timer = null;
    }, delay);
  }
}

div.addEventListener('drag', throttle(function (e) {
  console.log(e)
  console.log(e.offsetX, e.offsetY);
}, 500));