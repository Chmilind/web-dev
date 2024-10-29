/*
Create a faulty calculator using javascript

This faulty calculator does folowing:
--It takes two number as input from the user
--It performs wrong operations as follows-
    + --> -
    * --> +
    - --> /
    / --> **
--It performs wrong operation 10% of the times
*/


let random = Math.random()
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


if (random > 0.1) {
    // Perform correct calculartion
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    // Preform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}






























