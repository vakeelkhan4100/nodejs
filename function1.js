/*Ek kam ko bar bar krte hain
//Ek koi bahut bda kaam hai aur use chote chote kaam me batna hai
//Help krni hai kisi ki tab
//Function 3 tarike se bnte hai
//function declaration
function sum(num1, num2) {
  // num1 and num2 are parameter
  console.log(num1 + num2);
}
sum(10, 20); //10 20 argument
sum(100, 200);
sum(50, 90);

//function expression
const add = function (num1, num2) {
  // num1 and num2 are parameter
  console.log(num1 + num2);
};
add(10, 20);
add(100, 200);
add(50, 90);

function plus(num1, num2) {
  if (num1 < 100) {
    return num1 + 100;
  } else if (num2 === 150) {
    return num2 + 500;
  }
  return num1 + num2;
}

let ans = plus(110, 150);
console.log("ans", ans);

num1 && num2
num1 odd && 100 se chota hai to Yes return 
num2 event && 400 se bda hai to No Return krdo 
else Hello return krdo
*/

// 1. Odd/Even function
// function data(num1, num2) {
//   if (num1 % 2 === 1) {
//     return "odd";
//   } else if (num2 % 2 === 0) {
//     return "even";
//   } else {
//     return "no";
//   }
// }
// console.log(data(11, 10));

// 2. printTable function, ek number pass krna hai. Table print krni hai
// 2*1=2
// function sum(a) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(a + "*" + i + "=" + i);
//   }
// }
// sum(20);

// 3. number pass krna hai. 1 to number tak print krna hai
// function fun(A) {
//   for (let i = 1; i <= A; i++) {
//     console.log(i);
//   }
// }
// fun(20);

// 4. function 3 numbers max
// function sum(a, b, c) {
//   let x = Math.max(a, b, c);
//   console.log(x);
// }
// sum(32, 30, 40);

// 5. function, string pass krni hai. agar string ki length 10 se jyada hai
// to Big print, otherwise small print krna hai
// function data(a) {
//   let strlen = [...a];
//   if (strlen.length > 10) {
//     console.log("big");
//   } else {
//     console.log("small");
//   }
// }
// data("sajjit khan mai");

// 6. function, ek value pass krenge. value ki type print krni hai
// function mun(x) {
//   console.log(typeof x);
// }
// mun(true);

// 7. function 2 number lene hai. 2 100
// part 1
// 2, 4,6,8, ...100
// 5, 500
// 5, 10, 15, 500
// function web(p, q) {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i * p, i * q);
//   }
// }
// web(2, 3);
// part 2
// function table(a, b) {
//   for (let val = 1; val <= b; val++) {
//     if (a * val > b) {
//       break;
//     } else {
//       console.log(a * val);
//     }
//   }
// }
// table(5, 200);

// 8. function symbol, 2 number pass krne hai
// symbol +, add two numbers
// symbol -, substract two numbers
// symbol *
// symbol /
// function sum(num1, num2, symbol) {
//   if (symbol === "+") {
//     console.log(num1 + num2);
//   } else if (symbol === "-") {
//     console.log(num1 - num2);
//   } else if (symbol === "*") {
//     console.log(num1 * num2);
//   } else if (symbol === "/") {
//     console.log(num1 / num2);
//   }
// }
// sum(10, 2, "/");

// function sum(num1, num2, num3) {
//   let max = num1;
//   if (num2 > num1) {
//     max = num2;
//   }
//   if (num3 > num2) {
//     max = num3;
//   }
//   console.log(max);
// }
// sum(10, 20, 30);

// const sum = function (num1, num2, num3) {
//   let max = num1;
//   if (num2 > num1) {
//     max = num2;
//   }
//   if (num3 > num2) {
//     max = num3;
//   }
//   console.log(max);
// };
// sum(10, 40, 30);

const sum = (num1, num2, num3) => {
  let max = num1;
  if (num2 > num1) {
    max = num2;
  }
  if (num3 > num2) {
    max = num3;
  }
  console.log(max);
};
sum(10, 50, 30);
