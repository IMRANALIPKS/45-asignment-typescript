/*
37. Large Shirts:
Modify the make_shirt() function so that shirts are large by default, with a message that reads
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
size with a different message.
*/



console.log("\nsmall and medium size t-shirt print a same message on both;\n but large size print different message for using Function-Method\n")
function message(){
let shirtsize: string[] = ['small','medium','large'] ;
 if(shirtsize[0]='small'){
    console.log(`${shirtsize[0]}, I love typescript`);
}if (shirtsize[1]='medium'){
     console.log(`${shirtsize[1]}, I love typescript`);
}if (shirtsize[2]='large'){
    console.log(`${shirtsize[2]}, I love c++`);
    //return message
}}
let myFunction = message
//console.log(myFunction)

if (message)
{
    myFunction();
}