console.log("ABOUT FUNCTION")

// console.log("hey this is function")
// console.log("hey this is me")
// console.log("hey this is mine")
// console.log("hey this is yours")
console.log("----------------------------------------------------------------")
// this is a who a function is made

function nice(name) {
    console.log("hey this is " + name + "!")
    console.log("hey this is " + name + "!")
    console.log("hey this is " + name + "!")
    console.log("hey this is " + name + "!")
}

nice("function")
console.log("----------------------------------------------------------------")
nice("me")

console.log("----------------------------------------------------------------")

// Sum function

function sum(a, b, c = 3) {
    // console.log(a+b)
    return a + b + c;
}

// sum(3, 5)
result = sum(3, 5)
result1 = sum(233, 53)
result2 = sum(532, 54)
result3 = sum(3424, 5)

console.log("The sum of these numbers is:", result)
console.log("The sum of these numbers is:", result1)
console.log("The sum of these numbers is:", result2)
console.log("The sum of these numbers is:", result3)


console.log("----------------------------------------------------------------")

// about arrow function 
// arrow function is a function that is defined using the arrow operator (=>)

const func1 = (x)=>{
    console.log("i am a arrow function!", x)
}

func1(23)
func1(24)
func1(22)



















































