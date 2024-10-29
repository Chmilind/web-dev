console.log("About String")

console.log("--------------------------")

let a = "Milind";

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
// console.log(a[6]);

console.log("--------------------------")

// showing the lenght of the string
console.log(a.length)

// -----Template literals-----
// let sentence = `The name "is" Harry's'`

let real_name = "Milind"
let age = "20"

console.log("His name is " + real_name + " and his age is " + age)  //normal method

// Using template literal

console.log(`His name is ${real_name} and is age is ${age}`) 

console.log("--------------------------")


// Escape sequence character
// let name = " adan D\" anflew"
// \n --> nextline
// \t --> tab  
// \r  --> carriage return

let b = "shivam"
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

console.log("--------------------------")

// Slice method

let  c = "Milind";

console.log(c.slice(0, 4)); // mili
console.log(c.slice(5))  // d

console.log("--------------------------")


// replace method

let  d = "Milind is a good boy";
console.log(d)
console.log(d.replace("good", "bad"))

console.log("--------------------------")

// concat method

let  e = "bruzo";
let f  = " is a good boy";
console.log(e.concat(f)) // bruzo is a good boy 
console.log(e + f) // bruzo is a good boy 

console.log("--------------------------")

// removes spaces

let fg = "   Milind kumar         "
console.log(fg.trim())






















































