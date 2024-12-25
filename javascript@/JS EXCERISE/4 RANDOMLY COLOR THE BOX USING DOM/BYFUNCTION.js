console.log("BY FUNCTION")

//write a script that randomly color's the box in the html code.

function randomcolorbox() {  //making a function for genrating a random color 
    const r = Math.floor(0 + Math.random() * 256)  // generating a random number between 0 and 256 for the red
    const g = Math.ceil(0 + Math.random() * 256)   //generating a random number between 0 and 256 for the green .
    const b = Math.floor(0 + Math.random() * 256)  //generating a random number between 0 and 256 for the blue.
    return `rgb(${r},${g},${b})`   //returning the random color in rgb format.by using the templete

}

//Select all the box

const boxes = document.querySelectorAll(".box") // to accsesing all teh boxes

//Making a loop by selecting the all the boxes  and applying the random color function to each box.

boxes.forEach(box => { 
    // box.style.color = randomcolorbox();
    box.style.backgroundColor = randomcolorbox(); //hanging the backgroundColor as per the randomcolorbox generates
});