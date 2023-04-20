// Function Return => The return statement can be used to return the value to a function call.
// The return statement denotes that the function has ended. Any code after return is not executed.

// Sum of Two Numbers

function add (a, b)
{
    return a+b;
}
let x = parseFloat(prompt("Enter the first value"));   //The parseFloat() method parses a value as a string and returns the first number.
let y = parseFloat(prompt("Enter the second value"));   // Leading and trailing spaces are ignored.

let result = add(x,y);
console.log("Sum is  " + result);

//Division of Two Numbers

function div (c,d )
{
    return c/d;
}
let num1 = parseInt(prompt("Enter Fisrt Number"));
let num2 = parseInt(prompt("Enter Second number"));

let res = div (num1, num2);
console.log("The Division is " + res);

