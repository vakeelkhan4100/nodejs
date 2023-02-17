// function sum(a, b) {
//   a();
//   return function (a, b, c) {
//     console.log(a + b + c);
//   };
// }
// let ans = sum(function () {
//   console.log("Hello");
// }, 50);
// console.log(ans);
// ans(10, 20, 30);

// 1.
// function sum(fn1, fn2, a, b) {
//   fn1();
//   fn2(a, b);
//   return function () {
//     console.log("Hello");
//   };
// }
// let ask = sum(
//   function () {
//     console.log("hello");
//   },
//   function (a, b) {
//     console.log(a + b);
//   },
//   10,
//   20
// );
// console.log(ask);

// 2.
// function sum(fn1, fn2, a, b, c) {
//   fn1(a, b, c);
//   fn2(a, b);
//   return function (x, y, z) {
//     console.log(x + y + z);
//   };
// }
// let ask = sum(
//   function (a, b, c) {
//     console.log(a * b * c);
//   },
//   function (a, b) {
//     console.log(a + b);
//   },
//   1,
//   2,
//   3
// );
// console.log(ask);
// ask(10, 20, 30);

// 3.
// function sum(fn1, fn2, a, b) {
//   fn1(a, b, fn2);
//   fn2(a, b);
//   return function (x, y, z) {
//     console.log(x + y + z);
//   };
// }
// let ask = sum(
//   function (a, b, fn2) {
//     console.log(a * b);
//     fn2(a, b);
//   },
//   function (a, b) {
//     console.log(a + b);
//   },
//   3,
//   2
// );
// console.log(ask);
// ask(10, 20, 50);

// 4.
// function sum(fn1, fn2, fn3, a) {
//   fn1(a, fn2, fn3);
//   return function (x, y, z) {
//     console.log(x + y + z);
//   };
// }
// let ask = sum(
//   function (a, fn2, fn3) {
//     console.log(a);
//     fn2();
//     fn3(a);
//   },
//   function () {
//     console.log("hello");
//   },

//   function () {
//     console.log("wecode");
//   },
//   10
// );
// console.log(ask);
// ask(10, 20, 50);

// 5
// function sum(fn1, fn2, fn3, fn4) {
//   fn1(fn3, fn2);
//   fn2(fn3, fn4);
//   fn3();
//   fn4();
//   return fn4();
// }
// let ask = sum(
//   function (fn2, fn3) {
//     fn2();
//     fn3();
//   },
//   function (fn3, fn4) {
//     console.log("hello");
//   },
//   function () {
//     console.log("wecode");
//   },
//   function () {
//     console.log("vakeel");
//   }
// );
// console.log(ask);
