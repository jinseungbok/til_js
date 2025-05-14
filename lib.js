// 동물
class Animal {
  constructor(eye, nose) {
    this.eye = eye;
    this.nose = nose;
  }
  speak() {
    console.log("소리를 내요");
  }
}
const a = new Animal(2, 1);
a.speak();

console.log(a);
// 강아지
class Dog extends Animal {
  constructor() {
    super(2, 5); // new Animal();
    // new Animal(); 을 실행하는 기능, constructor 실행
    this.name = "강아지";
  }
  speak() {
    console.log("멍멍이라고 소리를 내요");
  }
}

const b = new Dog();
b.speak();
console.log(b);

// 새
class Bird extends Animal {
  constructor() {
    super(2, 1);
    this.name = "이쁜새";
    this.city = "대구";
  }
  speak() {
    console.log("짹짹이라고 소리르 ㄹ내요");
  }
}
const c = new Bird();
c.speak();
console.log(c);
