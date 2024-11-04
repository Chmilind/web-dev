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

cont.firstElementChild.parentElement // it will show the container div ..

document.body.firstElementChild  // it will show the cotainer div

document.body.firstElementChild.childNodes //it will show you -- [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

document.body.firstElementChild.children // this will only show the element inside the dic.container -- [div.box, div.box, div.box, div.box, div.box]
//we can call it sparately by providing  the index like document.body.firstElementChild.children[0]--it will show the first div.box and so on ..

document.body.firstElementChild.children[3].nextElementSibling  // it will show the next div.box like [3]--it is the  4th div.box and the next sibling of it which is the 5th div.box.

document.body.firstElementChild.children[3].previousElementSibling // it will show the pervious div.box like [3]--it will show the  3rd div.box

document.body.firstElementChild.children[3].previousSibling // it will show #text bocz -- in this it is not specifie it as to show the  text or the element so it will show the text of the previous element..

//---Table links---

document.body.children   // [div.container,table.script]
document.body.children[1]  // <table>…</table>
document.body.children[1].rows //[tr, tr]
document.body.children[1].caption //null
document.body.children[1].tHead  //<thead>…</thead>
document.body.children[1].tFoot  //null 
document.body.children[1].tBodies //<tbody>
document.body.children[1].tBody.rows
// -- and so on read the notes --