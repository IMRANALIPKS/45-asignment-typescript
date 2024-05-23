/*
24. More Conditional Tests:
You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array
*/
let fruit = "mango";
let color = "Yellow";
let weight = 500;
let list = ["Orange", "Banana", "Cherry", "Lychee"];
let items = "Cherry";
//test 1: equality with string
console.log("Is fruit == mango? I predict True.");
console.log(fruit == "mango");
//test 1: inequality with string
console.log("\nIs fruit !=mango? I predict False");
console.log(fruit != "mango");
//test 2:lower 
console.log("\nIs color == 'Yellow'? I predict True.");
console.log(color == "Yellow");
//test 2: Inequality (case sensitive)
console.log("\nIs color != 'Yellow'? I predict False.");
console.log(color != "Yellow");
//test 3: numbers with equality
console.log("\nIs weight == 500? I predict True.");
console.log(weight == 500);
//test 3:Inequality 
console.log("\nIs weight != 500? I predict False.");
console.log(weight != 500);
//test 3: greater than
console.log("\nIs weight > 200? I predict True.");
console.log(weight > 200);
//test 3: less than
console.log("\nIs weight < 300? I predict False.");
console.log(weight < 300);
//test 3: greathan than or equal to
console.log("\nIs weight >= 500? I predict True.");
console.log(weight >= 500);
//test 3: less than or equal to
console.log("\nIs weight <= 100? I predict False.");
console.log(weight <= 100);
//test 4: and operator
console.log("\nIs color Red and not Orange? I predict False.");
console.log(color.toLowerCase() === "red" && color !== "orange");
//test 4: or operator
console.log("\nIs color Yellow or not Orange? I predict True.");
console.log(color === "Yellow" || color.toLowerCase() !== "orange");
//test 5: Item in an array
console.log("\nIs item in an array? I predict True.");
console.log(list.includes(items));
//test 5: Item not in an array
console.log("\nIs item not in an array? I predict False.");
console.log(!list.includes(items));
