// 1. 3 ki table for, while and do while loop
// 2. 5, 15, 25, 35, 45, 50
// 3. 0510152025
//    30354045
//    505560
//    6570
//    75
// 4. 1 se leke 100 ke bich me jitne even numbe hia vo print krvane hai
// 5. 1 se leke 1000 ke bich me jitne b numbers jo ki 15 && 45 se divisible hai
// vo print krvane hain

// 1. for loop
// for ( let i = 1;; i <= 10; i++) {
//   console.log(i * 3);
// }
// while loop
// let z = 0;
// while (z < 10) {
//   z++;
//   console.log(z * 3);
// }
//do while loop
// let f = 1;
// do {
//   ++f;
//   ++f;
//   console.log(f);
//   f++;
// } while (f <= 30);
// {
// }

// 2;
// let r = 5;
// console.log(r * 1, r * 3, r * 5, r * 7, r * 9, r * 10);
// for (let g = 1; g <= 50; g++) {
//   ++g;
//   ++g;
//   ++g;
//   ++g;
//   console.log(g);
// }

// 4
// let x = 1;
// for (x; x <= 100; x++) {
//   if (x % 2 === 0) {
//     console.log(x);
//   }
// }

// 5.
// let p = 1;
// for (p; p <= 1000; p++) {
//   if (p % 15 === 0 && p % 45 === 0) {
//     console.log(p);
//   }
// }

// for (let p = 1; p <= 5; p++) {
//1     1   2
//2     2   3
//3     3   4
//4     4   5
//5     5   6
//6     6    7

// for (let q = 1; q <= p; q++) {
//1     1   2
//2     2   3
//3     3   4
//4     4   5
//5     5   6

//     document.write(p);
//   }
//   document.write("<br>");
// }

// document.write("<br><br>");

// Q2
// let x = ;
// for (let i = 1; i <= 6; i++) {
//   if (x < 45 || x === 45) {
//     console.log(x);
//     x += 10;
//   } else {
//     console.log(x - 5);
//   }
// }

let a = "japan";
switch (a) {
  case "trigno":
  case "apti":
  case "math":
  case "quant":
    console.log("mathmetics");
    break;
  case " english":
  case "tense":
  case "active":
  case "passive":
    console.log("english");
    break;
  case "true":
    console.log("javascript");
    break;
  case "false":
    console.log("java");
    break;
  case "turkey":
  case "indea":
  case "japan":
    console.log("country");
    break;
  case "rajasthan":
  case "bigest":
    console.log("state");
    break;

  case " delhi":
    console.log("capital");
    break;
  case 18:
    console.log("adult");
    break;
  case 11:
    console.log("minor");
    break;
  default:
    console.log("hello javascript");
    break;
}

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 1) {
    continue;
  }
  if (i % 2 === 0 && i < 40) {
    console.log(i);
  } else {
    break;
  }
}

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 1) {
    continue;
  }
  if (i > 40) {
    break;
  }
  console.log(i);
}
