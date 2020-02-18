// 不使用 Promise
// const url = 'http://localhost:8888';
// const xhr = new XMLHttpRequest();
// xhr.open('GET', url, true);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
//       console.log(xhr.responseText);
//     } else if (xhr.status === 404) {
//       console.error('404 not found');
//     }
//   }
// };
// xhr.send(null);

// 使用 Promise
function ajax(url) {
  return new Promise((resolve, reject) => {
    let a = 1;
    a = 2;
    a = 3;
    a = 4;
    a = 5;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          resolve(JSON.parse(xhr.responseText));
        } else if (xhr.status === 404) {
          reject(new Error('404 not found'));
        }
      }
    };
    xhr.send(null);
    a = 6;
  })
}
const url = 'http://localhost:8888';
ajax(url).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

