/*17. Shrinking Guest List:
You just found out that your new dinner table won’t arrive in time for the dinner, and you have
space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you
pop a name from your list, print a message to that person letting them know you’re sorry you can’t
invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program. 
*/
const guestlist: string [] = ["ali",'burhan','ahsan','danish','imran','farhan']
console.log(`table is not available I can inivite only  person\n`)

//remove all 4 elements
let frienf1 = guestlist.pop();
console.log(`sorry Mr. ${frienf1} you are not invited`);

let frienf2 = guestlist.pop();
console.log(`sorry Mr. ${frienf2} you are not invited`);

let frienf3 = guestlist.pop();
console.log(`sorry Mr. ${frienf3} you are not invited`);

let frienf4 = guestlist.pop();
console.log(`sorry Mr. ${frienf4} you are not invited`);

for (let y=0; y < guestlist.length; y++)
{
    console.log(`Mrs. ${guestlist[y]} you are still inivited!`)
}


