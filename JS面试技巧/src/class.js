class Student {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
  sayHi() {
    console.log(
      `name: ${this.name} number: ${this.number}`
    );
  }
}

const zhang = new Student('zhangsan', '2020')
zhang.sayHi();