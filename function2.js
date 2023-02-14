//  add, minus, mul, divide ye 4 functions bnane hai using arrow function and also without return

// calculator, function expression me bnana hai. Prompt me tume operation puchna hai. operation jaise add, divide, +, -, plus, minus fir usse 2 numbers puchne hain aur operation kran hai

// function slice, ek string pass krni hai. ek starting indexedDB, 2nd end index, aur fir vo slice krke vo string return krni hai. agar index galat di hai to error print krni hai using console.error

// function repeat, first argument ek string pass krni hai. 2nd argument me number pass krna hai. di gyi string ko 1 se leke number tak repeat krvana hai using loop. repeat function ka use ni krna hai. khud ka repeat function bnana hai

// function concat, 5 string deni hai arugments me aur un 5 string ko concat krke return krna hai using arrow function

// padStart and padEnd function ko khudse bnana hai without using string function.
// function padding(start, end, str, sym, num){

// }
// padding(true, false, "Wecode", "*", 5);
// ***Wecode
// padding(false, true, "Sajid", "**", 5);
// Wecode****

// function printPyramid(str, num, rev) {

// }
// printPyramid("*", 5, false);
// *
// **
// *
// **
// ***

// printPyramid("wecode", 5, true);
// wecodewecodewecodewecodewecode
// wecodewecodewecodewecode
// wecodewecodewecode
// wecodewecode
// wecode

// function game()
//   user se name puchna hai. then user ka mobile number puchan hai, then user se birthyear puchni hai.
//   agar user ki age 18+ ho ri hai to usse 3 question puchne hai. Agar vo 3 question ke answer shi deta hia to Congratulations otherwise Sorry you  have lost the game show krnaa hai using alert box
//   age user ki age 18 se kam hai to message show kro "You are not allowed to play the game."

// 1. add, minus, mul, divide ye 4 functions bnane hai using arrow function and also without return
// const add = (a, b) => a + b;
// console.log(add(100, 200));

// const minus = (a, b) => a - b;
// console.log(minus(20, 30));

// const multiple = (a, b) => a * b;
// console.log(multiple(20, 2));

// const divide = (a, b) => a / b;
// console.log(divide(20, 2));

// 2.calculator, function expression me bnana hai. Prompt me tume operation puchna hai. operation jaise add, divide, +, -, plus, minus fir usse 2 numbers puchne hain aur operation kran hai
// exprestion
// let ask = prompt("what do you want to do?,like add ,minus,divide,multiple");
// let firstValue = Number(prompt("Enter first value"));
// let secondValue = Number(prompt("Enter second value"));
// const calculator = function (operter, num1, num2) {
//   if (operter === "+" || operter === "add") {
//     console.log(num1 + num2);
//   } else if (operter === "-" || operter === "minus") {
//     console.log(num1 - num2);
//   } else if (operter === "*" || operter === "multiple") {
//     console.log(num1 * num2);
//   } else if (operter === "/" || operter === " divide") {
//     console.log(num1 / num2);
//   }
// };
// calculator(ask, firstValue, secondValue);

// 3.function slice, ek string pass krni hai. ek starting indexedDB, 2nd end index, aur fir vo slice krke vo string return krni hai. agar index galat di hai to error print krni hai using console.error
// function indexing(str, num1, num2) {
//   if (str.length > num1 && str.length > num2) {
//     return str.slice(num1, num2);
//   } else {
//     console.error("wrong indexing ");
//   }
// }
// console.log(indexing("vakeel khan mai ", 0, 9));

// 4. function repeat, first argument ek string pass krni hai. 2nd argument me number pass krna hai. di gyi string ko 1 se leke number tak repeat krvana hai using loop. repeat function ka use ni krna hai. khud ka repeat function bnana hai
// function repeat(str, num) {
//   for (let i = 1; i <= num; i++) {
//     document.write(str, "<br>");
//   }
// }
// repeat("vakeel khan", 10);

// 5.function concat, 5 string deni hai arugments me aur un 5 string ko concat krke return krna hai using arrow function
// const sum = (str1, str2, srt3, str4, str5) => {
//   return str1.concat(str2, srt3, str4, str5);
// };
// console.log(sum("vakeel ", "khan ", "mai ", "deshwali ", "karkwal "));

// 6.// padStart and padEnd function ko khudse bnana hai without using string function.
// function padding(start, end, str, sym, num){
// }
// padding(true, false, "Wecode", "*", 5);
// ***Wecode
// padding(false, true, "Sajid", "**", 5);
// Wecode****

// function padding(start, end, str, sym, num) {
//   if (start) {
//     for (let i = 1; i <= num; i++) {
//       document.write(sym);
//     }
//     document.write(str);
//   } else if (end) {
//     document.write(str);
//     for (let i = num; i >= 1; i--) {
//       document.write(sym);
//     }
//   }
// }
// console.log(padding(false, true, "vakeel", "*", 5));

// 7.
// function printPyramid(str, num, rev) {
// }
// printPyramid("*", 5, false);
// *
// **
// *
// **
// ***
// printPyramid("wecode", 5, true);
// wecodewecodewecodewecodewecode
// wecodewecodewecodewecode
// wecodewecodewecode
// wecodewecode
// wecode

// function printPyramid(str, num, rev) {
//   if (rev === false) {
//     for (let i = 1; i <= num; i++) {
//       for (let j = 1; j <= i; j++) {
//         document.write(str);
//       }
//       document.write("<br>");
//     }
//   } else if (rev === true) {
//     for (let i = num; i >= 1; i--) {
//       for (let j = 1; j <= i; j++) {
//         document.write(str);
//       }
//       document.write("<br>");
//     }
//   }
// }
// printPyramid("wecode", 10, true);

// 8.
// function game()
//   user se name puchna hai. then user ka mobile number puchan hai, then user se birthyear puchni hai.
//   agar user ki age 18+ ho ri hai to usse 3 question puchne hai. Agar vo 3 question ke answer shi deta hia to Congratulations otherwise Sorry you  have lost the game show krnaa hai using alert box
//   age user ki age 18 se kam hai to message show kro "You are not allowed to play the game."
// function game() {
//   let name = prompt("what is your name?");
//   let number = Number(prompt("what is your mobile number?"));
//   let birthyear = Number(prompt("what is your birthyear?"));
//   let age = 2023 - birthyear;
//   if (age > 18) {
//     let Q1 = Number(prompt("2+2*2"));
//     let Q2 = Number(prompt("4+5"));
//     let Q3 = Number(prompt("10+2"));
//     if (Q1 == 6 && Q2 == 9 && Q3 == 12) {
//       alert(`Congratulations ${name} for won the game`);
//     } else {
//       alert(`Sorry ${name} you  have lost the game `);
//     }
//     w;
//   } else {
//     alert(`${name}  You are not allowed to play the game.`);
//   }
// }
// game();

// function playGame() {
//   const userName = prompt("Enter your name");
//   const mobileNumber = +prompt("Enter your mobile number");
//   const dateOfBirth = +prompt("Enter your birth year");
//   const currentYear = new Date().getFullYear();
//   const userAge = Math.abs(dateOfBirth - currentYear);
//   if (userAge >= 18) {
//     let flag = false;
//     let Q1 = prompt("What is the capital of india");
//     if (Q1.toLowerCase() === "delhi") {
//       flag = true;
//       Q1 = prompt("What is the capital of rajashthan");
//     }
//     if (Q1.toLowerCase() === "jaipur" && flag) {
//       flag = true;
//       Q1 = +prompt("How much 2 * 2");
//     }
//     if (Q1 === 4 && flag) {
//       console.log(`Congratulation ${userName} for win the game`);
//     } else {
//       console.log(`Sorry ${userName} you  have lost the game`);
//     }
//   } else {
//     console.log("You are not allowed to play the game.");
//   }
// }
// playGame();
