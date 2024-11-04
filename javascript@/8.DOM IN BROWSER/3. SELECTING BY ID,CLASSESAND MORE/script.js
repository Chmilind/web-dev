console.log("Selecting by id , classes and more ..")

let boxes = document.getElementsByClassName("box")  // this will select by the name of the class 
// console.log(boxes) // this show the nimber of boxes

boxes[2].style.backgroundColor = "yellow" //this will change the background color of the  third box to yellow according to the index..

document.getElementById("redbox").style.backgroundColor = "red" //this selector change things by the refernce of the id name of the tags . according to above code it  will change the background color of the box with id redbox to red.

document.querySelector(".box").style.backgroundColor = "green" // this is a css selector  that will select the first element that match the selector . in this case it will select the first box
