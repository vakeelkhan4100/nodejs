// 1. string ko space se split krke length btani ha
// let str = "My name is Wecode Academy";
// console.log(str.split(" ").length);

// 10. "My name is Sajid Khan";
// input me ek word lena hai "is"
// ans: Sajid Khan

// let str = "My name is Wecode Academy";
// let ans = str.split(" ");
// console.log(ans.length);

// let str = "abaBa";
// let strLowerCase = str.toLowerCase();
// let rev = "";
// let strArr = [...strLowerCase];
// for (let i = strArr.length - 1; i >= 0; i--) {
//   rev = rev + strArr[i];
// }
// if (rev === strLowerCase) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// let num = "9581894461";
// let num2 = num.slice(0, 5).padEnd(10, "*");
// let num3 = num.slice(5).padStart(10, "*");
// console.log(num2);
// console.log(num3);

// let num4 = num.slice(0, 3).padEnd(5, "*");
// let num5 = num.slice(5, 8).padEnd(5, "*");
// let num6 = num4.concat(num5);
// console.log(num6);

// let str = "ymedacaA edoceW";
// let rev = "";
// let strArr = [...str];
// for (let i = strArr.length - 1; i >= 0; i--) {
//   rev = rev + strArr[i];
// }
// console.log(rev);

// let str = "sajid";
// let str2 = str.charAt(0).toUpperCase();
// let str3 = str.slice(1);
// console.log(str2, str3);
// console.log(str2.concat(str3));

// let str = "WecoDe ACadeMY";
// let newStr = "";
// for (let val of str) {
//   val === val.toUpperCase()
//     ? (newStr += val.toLowerCase())
//     : (newStr += val.toUpperCase());
// }
// console.log(newStr);

// let str = "my naMe is SaJId";
// let arr = str.split(" ");
// let newStr = "";
// for (let i = 0; i < arr.length; i++) {
//   if (i === 0) {
//     newStr = newStr + arr[i].toLowerCase();
//   } else {
//     newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
//   }
// }
// console.log(newStr);

// let str = "my naMe is SaJId Khan";
// let arr = str.split(" ");
// console.log(arr.length - 1);

// for (let i = 1; i <= 10; i++) {
//   let str = i.toString();
//   if (i === 10) {
//     console.log("0");
//   } else {
//     console.log(str.repeat(11 - i));
//   }
// }

/*
1. let str = "My name is Wecode Academy";
string ko space se split krke length btani hai 

2. String palindrome check ababa, helleh ?

3. 9581894461
95818***
***94461
958*944*

4. Reverse String 
Hello -> olleH
Bye -> eyB

5. Captialize first character 
wecode -> Wecode 
hello -> Hello 

6. String
uppercase ->  lowercase 
lowercase -> uppercase
HeLlo -> hElLO
WECodE -> wecODe

7. Camelize
Hello World -> helloWorld
my name is Sajid -> myNameIsSajid
Wecode Academy -> wecodeAcademy

8. String me kitne space hai vo count krne hain 

9. Using repeat function 
1111111111
222222222
33333333
4444444
555555
66666
7777
888
99
0

10. "My name is Sajid Khan";
input me ek word lena hai "is"
ans: Sajid Khan

Hello Wecode Aacdemy
input: "co"
output: de Academy

11 substring vs slice vs substr 

12. Regex ? Examples

13. match vs search function difference

14. Hello My name is Sajid KHan 
input me ek word lena hai aur vo word string me hai to uski starting
index btani hai. String and input dono prompt se lene hain 

15. ek string leni hai. agar usme string me $, _, number, a-z, A_Z 
ke alawa koi aur character hai to use remove krna hai. Regex use ni krni hai 
We%^%$Cod!@#e -> We$Code */

// 1.string ko space se split krke length btani hai
// let str = "My, name is Wecode ,Academy";
// console.log(str.split(""));

// 2.String palindrome check ababa, helleh ?
// let str = "ababa";
// let strArr = [...str];
// let rev = "";
// for (let i = strArr.length; i >= 0; i--) {
//   rev = rev + strArr[i];

// }
//pending

// 3.
//9581894461
// 95818***
// ***94461
// 958*944*

// let a = "9581894461";
// let sum1 = a.slice(0, 5).padEnd(10, "*");
// let sum2 = a.slice(5).padStart(10, "*");
// console.log(sum1);
// console.log(sum2);
// let a = "9581894461";
// let sum3 = a.slice(0, 3).padEnd(5, "*");
// let sum4 = a.slice(5, 8).padEnd(5, "*");
// let sum5 = sum3.concat(sum4);
// console.log(sum5);

// 4. Reverse String
// Hello -> olleH
// Bye -> eyB

// let a = "leekav";
// rev = "";
// let sum = [...a];
// for (let i = sum.length - 1; i >= 0; i--) {
//   rev = rev + sum[i];
// }
// console.log(rev);

// let str = "ymedacaA edoceW";
// let rev = "";
// let strArr = [...str];
// for (let i = strArr.length - 1; i >= 0; i--) {
//   rev = rev + strArr[i];
// }
// console.log(rev);

// 5.
// let str = "sajit";
// let a1 = str.charAt(0).toUpperCase();
// let a2 = str.slice(1);
// let a3 = a1 + a2;
// console.log(a3);

// 6. String
// uppercase ->  lowercase
// lowercase -> uppercase
// HeLlo -> hElLO
// WECodE -> wecODe
// function declration
// function odd(num) {
//   if (num % 2 === 1) {
//     console.log("0dd");
//   }
// }
// odd(11);

// // function expression
// const sum = function (num1) {
//   if (num1 % 2 === 0) {
//     console.log("even");
//   }
// };
// sum(6);

// function sum(num1, num2) {
//   if (num1 % 2 === 1 && num1 < 100) {
//     return "yes";
//   } else if (num2 % 2 === 0 && num2 > 400) {
//     return "no";
//   } else {
//     return "hello";
//   }
// }
// console.log(sum(10, 500));
