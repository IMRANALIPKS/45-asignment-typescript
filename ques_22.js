"use strict";
/*
22. Intentional Error:
If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error. Make sure you correct the error
before closing the program.
*/
Object.defineProperty(exports, "__esModule", { value: true });
//undefined array jo array nahi ha wo show karana ha previous kisi arary k ques ma b kia tha just copy that or see pic
let Arrayfruit = ["apple", "banana", "mango", "grapes", "kiwi", "chiko"];
// index                 [            0       1       2          3       4      5        6-undeifined  7 ]
console.log(`Print an array index 0`, Arrayfruit[0]);
console.log(`Print an array index 8`, Arrayfruit[3]); // Intentional error: Arrays are zero-indexed, so index 4 is out of bounds.
console.log(`Print an array index 1`, Arrayfruit[1]); //array index-1  print
console.log(`Print an array index 9`, Arrayfruit[6]);
