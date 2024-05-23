"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
36. T-Shirt:
Write a function called make_shirt() that accepts a size and the text of a message that should
be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the
message printed on it. Call the function.
*/
console.log("---------T-SHIRT----------");
//parameter (size,lable) paramerter of func()
function make_shirt(size, message) {
    //return size + message;
    return (`My shirt size is ${size} and label is ${message}`);
}
let myFunc = make_shirt("'Small-X'", "'~HELLO EVERY ONE!~'");
// HOW TO PRINT ON CONSOLE
console.log(myFunc);
