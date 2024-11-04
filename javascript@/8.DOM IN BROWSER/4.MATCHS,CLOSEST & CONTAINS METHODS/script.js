console.log("MATCHS , CLOSEST & CONTAINS METHODS")

let e = document.getElementsByTagName("div") // it will show the div element in the html code containing div  tag in it .
console.log(e) // this wil print the abive output in web console.


//the matches that the  element is a child of the element with id redbox or any other given css selector 
console.log(e[4].matches("#redbox")) //true
console.log(e[3].matches("#redbox")) // false


// it will the  return nearest ancestor of the given css selector 
console.log(e[3].closest(".container"))  //div.container 
console.log(e[3].closest("html"))  //html
console.log(e[3].closest("#redbox"))  //null


// this will return the true or false, if elemB is inside elemA (a descendent of elemA) or whe elemA == elemB
console.log(document.querySelector(".container").contains(e[3])) //true
console.log(document.querySelector(".container").contains(e[0])) // this will also return true  because the div is inside the container div.
console.log(document.querySelector(".container").contains(e[9])) //false
console.log(document.querySelector(".container").contains(document.querySelector("body"))) //this will return false  because the body is not inside the container div. 
console.log(document.querySelector("body").contains(document.querySelector(".container"))) //this will return true because the container is  inside the body. 
