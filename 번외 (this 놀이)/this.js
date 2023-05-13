// const koo = {
//   apple: 3,
//   banana: function () {
//     console.info(this);
//   },
//   //   banana() {
//   //     console.info(this);
//   //   },
// };

// console.info(koo.banana());

// class Apple {
//   constructor() {
//     this.name = 'value';
//   }

//   body() {
//     console.info(this.name);
//   }

//   terran = function () {
//     console.info(this.name);
//   };

//   protoss = () => {
//     console.info(this.name);
//   };
// }

// let abc = new Apple();

// console.info('body', abc.body());
// console.info('terran', abc.terran());
// console.info('protoss', abc.protoss());

// //객체리터럴
// const myObj = {
//   name: 'John',
//   sayName: function () {
//     console.log(this.name);
//   },
// };

// myObj.sayName(); // "John"이 출력됩니다.

// // 일반함수
// class MyClass {
//   myMethod = function () {
//     console.log(this); // undefined (strict mode) or global object (non-strict mode)
//   };
// }

// // 화살표함수
// class MyClass {
//   myMethod = () => {
//     console.log(this); // MyClass { ... }
//   };
// }

// // 함수선언문
// class MyClass {
//   myMethod() {
//     console.log(this); // MyClass { ... }
//   }
// }

// let aaa = new MyClass();

// console.info(aaa.myMethod());

// function Programmer() {
//   this.isSmart = false;

//   this.upgrade = function (version) {
//     this.isSmart = !!version;
//     work();
//   };

//   return this;
// }

// function work() {
//   if (this.isSmart) {
//     window.alert('I can do my work! I am smart!');
//   }
// }

// const programmer = new Programmer();

// programmer.upgrade(1);

const something = {
  age: 10,
  speak() {
    console.log(this.age);
  },
};

const butler = {
  age: 20,
  serve: function (cb) {
    cb();
  },
};

butler.serve(something.speak);
