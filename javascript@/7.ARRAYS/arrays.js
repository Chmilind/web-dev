console.log("About arrays and its basic logic")
console.log("-----------")
console.log("Arrays are a collection of items stored in a single variable.")
console.log("-----------")

let arr = [1, 2, 3, 4, 5, 6]
//index -- 0  1  2  3  4  5

console.log(arr)  // Output: [1, 2, 3, 4, 5, 6]
console.log(arr.length) // 6
console.log(arr[3])
     // arrays are mutabl
console.log(arr[3]=20) //or arr[3] = 4242; 
console.log(arr)   //  [1, 2, 3, 20, 5, 6]

console.log("-----------------")

// -------ARRAY METHODS-------

let a =  [11, 22, 33, 44, 55]   

console.log(a.toString())      // tostring()

console.log(a.join("-"))       //join("-")

console.log(a.pop())     //pop()--remove the last element form the original array the return the value  //[1,2,3,4]

console.log(a.push(9))  //push()
console.log(a)

console.log(a.shift())  // shift()--remove the first element and return it
console.log(a)

console.log(a.unshift(66))  //unshift()--add a element to the beginning retuen the new lenght
console.log(a)

delete a[1]   // delete a[1]-- delete the element at index 1
console.log(a)

let b = [23,3,45,6,77]
b.sort()
console.log(b)

console.log(b.splice(1,2,24,34))   //b.splice(position,no.of element to remove,element to be added) 
console.log(b)

console.log(b.slice(1))   //b,slice()--slice out a piece from an array. It create a new array 
console.log(b.slice(0,3))

console.log(b.reverse())  //b.reverse()--reverse the array






























































