//------normal method------

let arr = [12, 34, 45, 65, 123]
let newarr = []

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element ** 2)
}

console.log(newarr)

// map method of doing these
// Create  a new array with the results of applying a provided function on every element in this array.


let arr1 = [12, 34, 45, 65, 123]

let newarr1 = arr1.map((element, index, array) => {
    return element ** 2
})

console.log(newarr1)


//------Filter------
// Values taht passes a test , returns a new array with all elements that pass the test implemented by the provided function.

const greaterthaseven = ((element) => {
    if (element > 60) {
        return true
    }
    return false
})

console.log(arr.filter(greaterthaseven))

//------OR------

console.log(arr.filter(element => {
    if (element > 60) {
        return true
    }
    return false
}))


//-------Reduce method---------
// Reduce an array to a single value

let b = [23, 12, 43, 45]

const Reduce = (a, b)=>{
    return a + b
}

console.log(b.reduce(Reduce))

