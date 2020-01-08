class People {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating `);
  }
}

class Student extends People {
  constructor(name, number) {
    super(name);
    this.number = number;
  }
  study() {
    console.log(`${this.name} is studying`);
  }
}

const zhang = new Student('zhangsan', 100);
zhang.study();
zhang.eat();