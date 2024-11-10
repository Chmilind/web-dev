
// inner and outer html
//innerHTML--show the text inside the div container .
document.querySelector(".box").innerHTML   //'Hey i am gone'
document.querySelector(".container").innerHTML //this will the div inside the div.container like in this case. ('\n        <div class="box">Hey i am the gone</div>\n)  

//innerText - show the text inside the div container .
document.querySelector(".box").innerText    // 'Hey i am the gone'
document.querySelector(".box").innerText = "i am don"// we can change the text from here.
//---IFTHERE ARE  MULTIPLE ELEMENTS WITH THE SAME CLASS THEN IT WILL SHOW THE TEXT OF THE FIRST ELEMENT ONLY. OR IF YOU SELECT THE PARENT "CONTAINER" THEN IT WILL SHOW ALL THE  TEXT INSIDE THE CONTAINER---

document.querySelector(".box").outerHTML // this will give the  whole div container with the class box like this. ('<div class="box">Hey i am the gone</div>')

//-- tagName/nodeName -- return the tag name of the  element

document.querySelector(".container").tagName
document.querySelector(".container").nodeName
//both the  above will return the tag name of the element which is 'DIV' in this case.
// difference btn them is tagName- is only used for element node and  returns the tag name of the element. while nodeName- is used for all types of nodes and returns

document.querySelector(".container").textContent //'\n        Hey i am the gone\n        Hey i am the gone\n    '

// document.querySelector(".container").hidden = true // it will hidden the element .