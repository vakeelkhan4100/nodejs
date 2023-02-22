# 1. Find max number from array

```
 let arr = [3, 5, 70, 30, 40];
 let max = 0;
 for (let i = 0; i <= arr.length; i++) {
   if (arr[i] < max) {
     max = arr[i];
   }
 }
 console.log(max);
```

# 2. find min number from array

```
 let arr = [20, 30, 5, 40, 15];
 <!-- let min = arr[0]; -->
  console.log(min);
 for (let i = 0; i <= arr.length; i++) {
   if (min >= arr[i]) {
     min = arr[i];
   }
 }
 console.log(min);
```

# 3. Find total duplicate count of a number

```
 const arr = [10, 20, 30, 40, 10, 30, 10, 10, 10, 50, 50];
 let count = 0;
 let dup = +prompt("which number duplicate are to find ?");
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] === dup) {
     count++;
   }
 }
 console.log(count);
```

# 5. find last element of the array

```
  let arr = [1, 2,3,4,5,6, 7, 7, 15, 200]
  let len = arr. length-1
 / console. log(arr [len])
```

# 6. find first element of the array

```
  let arr = [201, 2,3,4, 5, 6, 7, 7, 8, 1
 console. log (arr [0]);

```

# 7. find if a number is present more than 3 times in the array or not ?

```
const arr = [1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 5, 5, 5, 5, 2, 2];
let count = 0;
function countvalue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  if (count > 3) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
countvalue(arr, 5);
// console.log(count);
```

# 8. Find total count of odd numbers in array

```
 let sum = 0
 let arr = [10,21, 2, 2, 12, 31]
 for(let i = 0;i<=arr. length; i++ ){
 if(arr [i1%2===1){
 sum = sum +arr[i]}
 console. log (sum);
```

# 9. Find total count of even numbers in array

```
 let sum = 0
 let arr = [10,21, 2, 2, 12, 31]
 for(let i = 0;i<=arr. length; i++ ){
 if(arr [i]%2===0){
 sum = sum tarr[i]
 }
 console. log (sum);
```
