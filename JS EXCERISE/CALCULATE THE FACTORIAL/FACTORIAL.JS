/*
Write a program to calculate factorial of a number using reduce and using for loops

6! =6*5*4*3*2*1f

*/


//--- By using reducing method -----

function factorialfinder(n) {
    if (n < 0) {
        return undefined;  //Gives undefined when n is negative . boz factorial is not defined for the negative number.
    }
    return Array.from({ length: n }, (_, i) => i + 1)  //Create a array form the [1....n]
        .reduce((acc, curr) => acc * curr, 1);  // reduce the array to a single value
}

console.log(factorialfinder(10));  //give factorial output==3628800


// ------- By  using for loop method -------

function factorialfinderbyforloop(n) {
    if (n < 0){
        return undefined;  //factorial not defined for the negative number
    }
    let result = 1;   //initialize result to 1
    for (let i = 1; i <= n; i++) {  //Loop from 1 to n
        result *= i;  //Multiply resukt by the current number
    }
    return result;   //Return the final factorial value
}

console.log(factorialfinderbyforloop(4))   //output==24