let a = [1, 31, 4, 66, 87]

/*
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}
*/

// ----------foreach loop-------------

// calls a function ,once for each array element

a.forEach((value, index, array) => {
    console.log(value, index, array)
});


