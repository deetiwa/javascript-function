// Benefits of Using a Function =>Function makes the code reusable. You can declare it once and use it multiple times
//Function makes the program easier as each small task is divided into a function.  and Function increases readability.

//Function Expressions

let x = function(num)            // function is declared inside the variable
{
    return num*num;              // return square of a number 
}
console.log(x(4)) ;
let y = x(3);                    // can be used as variable value for other variables

console.log (y);

//Rest parameter =>The rest parameter is an improved way to handle function parameters, allowing us to more easily handle various inputs as parameters in a function.

function sum (a,b)
{
    return a+b;
}
console.log(sum(1,2));
console.log(sum(3,4,5,6,));    // No error only use two number add 

// example how to use other argument

function add (...input)   // using rest parameter
{
    let sum = 0;
    for (let i of input)
    {
        sum = sum + i;
    }
    return sum;
}
console.log(add(1,2,3));
console.log(add(1,2,3,4,5));
console.log(add(25,26,27,28,29,30));

