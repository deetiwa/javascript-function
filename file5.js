//use of the rest parameter with some other arguments inside a function

function other(a,b,...c)                 // we passed the rest parameter as the third parameter
{
    console.log(`${a}, ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(typeof c);
}
other ('ram','shyam','indore','bhopal','jone');

//  use rest parameter in munber

function number(x,y,...z)
{
    console.log(x+y);
    console.log(x-y);
    console.log(x*y);
    console.log(x/y);
    console.log(x%y);
    console.log("using z");
    console.log(x+z);         //Output => print 10, skip 20 and print rest parameter value
    console.log(y-z);          // Output => Nan, because not perform operation
    console.log(z-y);          // Output => Nan, because not perform operation
    console.log(z);           // Output => print rest value
}
number(10,20,30,40,50,60);

