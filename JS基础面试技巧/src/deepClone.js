
const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'nanjing'
  },
  arr: [1, 2, 3]
};

const obj2 = deepClone(obj1);
obj2.age = 33;
console.log('obj2 = ', obj2);
console.log('obj1 = ', obj1);
/**
 * 深拷贝
 * @param obj 要拷贝的对象
 * @returns {{}}
 */
function deepClone(obj = {}) {
  // 判断 obj 是不是数组或对象,这也是递归的终止条件
  if (typeof obj !== 'object' || typeof obj == null) {
    return obj;
  }

  // 初始化返回值
  let result;
  result = result instanceof Array ? [] : {};
  // if (obj instanceof Array) {
  //   obj = [];
  // } else {
  //   obj = {};
  // }
  // 递归拷贝
  for(key in obj) {
    if(obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
