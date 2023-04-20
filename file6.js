// How to set a default parameter value for a JavaScript function.

var addition = function (num1, num2)
{
    return num1+num2;
}
console.log(addition());

// Note:-This statement would generate an error in some languages. 
//but in JavaScript, it is allowed. So basically, the function is going to addition undefined + undefined.

// pass value of parameter.

var multi = function(num3 = 4, num4 = 5)
{
    return num3 * num4;
}
console.log(multi());

//  other example

var multiply = function(a=4,b=5)
{
    return a*b;
}
console.log(multiply(10,10));         
