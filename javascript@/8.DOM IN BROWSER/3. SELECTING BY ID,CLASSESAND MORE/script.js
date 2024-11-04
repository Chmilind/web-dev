console.log("Selecting by id , classes and more ..")

let boxes = document.getElementsByClassName("box")  // this will select by the name of the class 
// console.log(boxes) // this show the nimber of boxes

boxes[2].style.backgroundColor = "yellow" //this will change the background color of the  third box to yellow according to the index..

document.getElementById("redbox").style.backgroundColor = "red" //this selector change things by the refernce of the id name of the tags . according to above code it  will change the background color of the box with id redbox to red.

document.querySelector(".box").style.backgroundColor = "green" // this is a css selector  that will select the first element that match the selector . in this case it will select the first box --- but in this you can simplly write it and will chage the color  of the first box  of the css selector in this case it is .box.


console.log(document.querySelectorAll(".box"))  //this will show --[div.box, div.box, div.box, div#redbox.box, div.box, div.box, div.box]

//-- to change the color by .quertSelectorAll method you have put "for of" loop  on it -- bocz this opertor only return the node list if put simplly.

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "blue";    // this will change the color of all the boxes  to blue in the which have class as .box  ..

})

//---------//

document.getElementsByTagName("div") // [div.container, div.box, div.box, div.box, div#redbox.box, div.box, div.box, div.box, redbox: div#redbox.box]
//this will show all the div's in the html code 


const up_names = document.getElementsByName("gg_squad")  // first  you have to define a name in the html code  for the input field  and then you can select it by the name in the js code .
console.log(up_names[0].tagName) // this  will show the tag name of the first input field with name gg_squad  ..
console.log(up_names[1].tagName) // this will show the  tag name of the second input field with name gg_squad  ..

