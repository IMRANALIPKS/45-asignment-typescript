/*
29. Favorite Fruit:
Make an array of your favorite fruits, and then write a series of independent if statements that
check for certain fruits in your array.
• Make an array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
is in your array, the if block should print a statement,
such as You really like bananas!
*/
console.log(`\n\t-------ARRAY OF FRUITS--------`)
let favorite_fruits: string[] = ["Mango", "Stawberry", "Chicko"];
let fruit_avaible = "Chicko";

if(favorite_fruits.includes(fruit_avaible))
{
    console.log(`I would like to eat ${fruit_avaible}`)
}
else{
    console.log(`fruits are not available`)
}
