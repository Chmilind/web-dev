let button = document.getElementById("btn")

// mouse related events in the following link = https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent

button.addEventListener("click", ()=>{
  // alert("I was clicked.Yayy!!")
  document.querySelector(".box").innerHTML = "<b>Hey yo whatsup how is very thing is going</b>"
})

// Keyboard events in the following link =l https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

button.addEventListener("keydown", (e)=>{
  console.log(e)
}) // these is for when you click on the button and press a key on the keyboard in the console it will show the keys

document.addEventListener("keydown", (e)=>{
  console.log(e)
}) // these is for when you press a key on the keyboard in the console it will show the keys

button.addEventListener("keydown", (e)=>{
  console.log(e.key, e.keyCode)
})  // these is for when you press a key on the keyboard in the console it will show the keys and the key code