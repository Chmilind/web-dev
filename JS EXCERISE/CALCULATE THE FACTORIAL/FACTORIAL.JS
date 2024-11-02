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

//---------OR----------

function factorial(number) {
    if(number<0) return undefined  //factorial value  is not defined for negative number

    let arr = Array.from(Array(number + 1).keys())  // In this line making a array with the given parameter in factorial == with goes form 1 to number.
    console.log(arr.slice(1,))  // this will give the  array with the value from 1 to number

    let c = arr.slice(1,).reduce((a, b) => {  //slice method  is used to get the value from 1 to number and reduce  method is used to multiply the value of array to a single number.
        return a * b  //gives  the factorial of the number

    })
    return c // return value of the factorial  of the number

}

console.log(factorial(5))

// ------- By  using for loop method -------

function factorialfinderbyforloop(n) {
    if (n < 0) {
        return undefined;  //factorial not defined for the negative number
    }
    let result = 1;   //initialize result to 1
    for (let i = 1; i <= n; i++) {  //Loop from 1 to n
        result *= i;  //Multiply resukt by the current number
    }
    return result;   //Return the final factorial value
}

console.log(factorialfinderbyforloop(4))   //output==24