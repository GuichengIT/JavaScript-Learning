
// const xhr = new XMLHttpRequest();
// xhr.open('GET', '../data/test.json', false);
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       alert(xhr.responseText);
//     }
//   }
// };
// xhr.send(null);

const xhr = new XMLHttpRequest();
// 常见的login是一个POST的地址
xhr.open('GET', 'http://localhost:8888', false);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      alert(xhr.responseText);
    }
  }
};
// 在POST请求时会发送一些数据给服务器
// const postData = {
//   "name": "zhangsan",
//   "age": 18
// };
// 需要将发送的JS对象变为JSON字符串的格式
xhr.send(null);