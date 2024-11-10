// Attribute method

//hasAttribute- show true or false if the attribute exists in the given element.
document.querySelector(".box").hasAttribute("style") // false
document.querySelector(".box").getAttribute("style") //'display: flex;'
document.querySelector(".box").setAttribute("style","display: inline") //this will change the style = display: flex=>inline in the webpage.
document.querySelector(".box").attributes // {0: class, 1: style, class: class, style: style, length: 2} this will show all the attribute in the  element.
document.querySelector(".box").removeAttribute("style") // this will remove the  style attribute from the element in the web page but you can stil see it in the html page in your editor.

document.designMode = "on" //from this you can change things in the web driectly.















