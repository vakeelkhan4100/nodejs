# 1. Count number of words in a Text after splitting it by any word

-     Hello Wecode Acacdemy
- space se split, 3 words

```
 let str = "Hello Wecode Acacdemy";
 let text = str.split(" ");
 console.log(text.length);

```

# 2. Convert odd position word to lowercase and even position word to uppercase

- Hello WeCode Academy
- hello WECODE academy

```
 let str = "Hello WeCode Academy ";
 let text = str.split(" ");
 let sum = "";
 for (let i = 0; i <= text.length - 1; i++) {
   if (i % 2 === 0) {
     sum = sum + " " + text[i].toLowerCase();
   } else {
     sum = sum + " " + text[i].toUpperCase();
   }
 }
 console.log(sum)

```

# 3. Capitalize each word of the string

- hello wecode academy jhotwara jaipur
- Hello Wecode Academy Jhotwara Jaipur

```
 let str = "hello wecode academy jhotwara jaipur";
 let split = str.split(" ");
 let sum = "";
 for (let i = 0; i <= split.length - 1; i++) {
   sum = sum + " " + split[i][0].toUpperCase() + split[i].slice(1);
 }
 console.log(sum);

```

# 4. Convert an string into 2 halfs and change the position of the other half

- My name is wecode academy
- wecode academy My name is

```
 let str = "My name is wecode academy";
 let first = str.slice(0, 11);
 let second = str.slice(11);
 console.log(second + " " + first);

```

# 5. Take a string and now ask for a character from the user. Now find total count of that character in the string

-     My name is wecode academy;
-     a
-     3

```
 let str = "My name is wecode academy;";
 let len = str.split("");
 console.log(len);
 let count = 0;
 function findcount(str, value) {
   for (let i = 0; i <= len.length; i++) {
     if (len[i] === value) {
       count++;
     }
   }
 }
 findcount(str, "e");
 console.log(count);

```

# 6. Reverse a string

```
 let str = "wecode";
 let split = str.split("");
 let val = "";
 for (let i = split.length - 1; i >= 0; i--) {
 val = val + split[i];
 }
 console.log(val);

```

# 7. Check string is palindrom or not

```
 let str = "abcba";
 check = "";
 for (let x = str.length - 1; x >= 0; x--) {
 check = check + str[x];
 }
 if (str === check) {
 console.log("string is palindrom");
 } else {
 console.log("not");
 }

```

# 8. Remove space from the string and show the output

- My name is wecode
- Mynameiswecode

```

 let str = "My name is wecode";
 let len = str.split(" ");
 add = "";
 for (let i = 0; i <= len.length - 1; i++) {
 add += len[i];
 }
 console.log(add);

```

# 9. Check a word count in the string

- My code is wecode and wecode Jhotwara, Jaipur.
- code
- 3

```
 let str = "My wecode is wecode and wecode Jhotwara, Jaipur";
 let len = str.split(" ");
 console.log();
 let count = 0;
 function findcount(str, value) {
 for (let i = 0; i <= len.length; i++) {
 if (len[i] === value) {
 count++;
 }
 }
 }
 findcount(str, "wecode");
 console.log(count);

```

# 10. Replace a word in string

- My code is wecode and wecode Jhotwara, Jaipur.
- code rodd
- My rodd is werodd and werodd Jhotwara, Jaipur

```
 let str = "My code is wecode and wecode Jhotwara, Jaipur";
 let Replace = str.replace(/code/g, "todd");
 console.log(Replace);

```
