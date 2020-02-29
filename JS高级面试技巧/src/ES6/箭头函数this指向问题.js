function f () {
  console.log(this);
  const arr = [ 1, 2, 3 ];
  arr.map(function (item) {
    console.log('普通函数 this ', this);
  })
  arr.map((item) => {
    console.log('箭头函数 this ', this);
  })
}
f.call( { a: 100 } )