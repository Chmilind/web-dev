let a = [1, 31, 4, 66, 87]

/*
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}
*/

// ----------foreach loop-------------
a.forEach((value, index, array) => {     // calls a function ,once for each array element
    console.log(value, index, array)
});

//-----------for..in loop ------------
let obj = {
    a:1,
    b:2,
    c:3,
    d:"milind"
}
                                     // used to get the keys from the array 
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        // console.log(element)
        console.log(key ,element)
    }
}


//------------for..of loop -------------
                                   // used to get the values from an array.
let b =  [1, 2, 3, 4, 5]

for (const element of b) {
    console.log(element)
}