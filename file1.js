// JavaScript Functions 

function greet()                  // declaring a function named greet()
{    
console.log("Hello there");
}
greet();                           // function call



//Function with Parameters

function gret(name)                  // (name)=> it is a parameter
 {
    console.log("Hello " + name + ":)"); //prompt() method in JavaScript is used to display a prompt box that prompts the user for the input.
}
let print = prompt("Enter a name: ");       // given argument by user and value stored in a variable
gret(print);                                   // calling function
