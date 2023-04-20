// JavaScript Function.length property the function object in Javascript is used to return the number of parameters required by a function.

//When the number of parameters is zero.

function fun(){}

    console.log("Output of the function is" ,+ fun.length);



function fun1(a){}

    console.log("Outpur of the function is ", + fun1.length);


function fun2(c,b){}

    console.log("output of the function is ", + fun2().length);  //Uncaught TypeError: Cannot read properties of undefined (reading 'length')
