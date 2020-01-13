const input1 = document.getElementById('input')
// let timer = null;
//
// input1.addEventListener('keyup', () => {
//   if (timer) {
//     clearTimeout(timer)
//   }
//   timer = setTimeout(() => {
//     console.log(input.value)
//     timer = null
//   }, 1000)
// })

function debounce(fn, delay=500) {
  let timer = null;
  return function () {
    console.log(timer);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  }
}
input1.addEventListener('keyup', debounce(function () {
  console.log(input1.value);
}, 600));


// let deb =  debounce(function () {
//   console.log(input1.value);
// }, 600);
// input1.addEventListener('keyup', deb);