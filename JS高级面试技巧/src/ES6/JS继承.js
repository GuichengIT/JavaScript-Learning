// // animal
// function Animal() {
//   this.eat = function() {
//     console.log('animal eat')
//   }
// }
//
// // dog
// function Dog() {
//   this.bark = function() {
//     console.log('dog bark')
//   }
// }
//
// Dog.prototype = new Animal()
// // 哈士奇
// const hashiqi = new Dog()
// hashiqi.eat()
// hashiqi.bark()

// ES6 代码
class Animal {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log('animal eat')
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
  }
  bark() {
    console.log(`${this.name} bark`)
  }
}

const hashiqi = new Dog('hashiqi')
hashiqi.eat()
hashiqi.bark()
