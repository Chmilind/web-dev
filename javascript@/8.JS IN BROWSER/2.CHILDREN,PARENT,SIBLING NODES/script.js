console.log("ABOUT NODES")

document.body.childNodes[0] // it will show the hollow body tag 
document.body.childNodes[1] // it will show the first div.container
document.body.childNodes[1].childNodes[0] // it will show #text
document.body.childNodes[1].firstChild // it will show #text 
document.body.childNodes[1].lastChild  // it will show #text 

let cont = document.body.childNodes[1]  // making a variable cont to contain the  div.container


cont  //showing

cont.firstChild   // showing #text

cont.lastChild  //  showing #texts

cont.firstElementChild   // showing the first div  box1

cont.lastElementChild // showing the last div  box5

cont.lastElementChild.style.color = "red"  // changing the textcolor of the last div to red

cont.lastElementChild.style.backgroundColor = "yellow" //changing the backgroundcolor to yellow

document.documentElement.parentNode // it will display the document

document.documentElement.parentElement //it will show null 