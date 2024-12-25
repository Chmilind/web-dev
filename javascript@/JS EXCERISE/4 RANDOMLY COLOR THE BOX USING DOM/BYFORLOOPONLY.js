console.log("BY FOR LOOP ONLY")


var boxes = document .querySelectorAll(".box") // this selects all teh elements present in class name box .. and stores it in a varible boxes.

for(let i = 0; i < boxes.length;i++){ // the for loop initiated to iterate over each of the element in the nodelist.
    var box = boxes[i] //the current box element is accessed using ` boxes[i]` and stored in the varible `box`.This allows the loop to work in ine box at a time.


    var randomBackgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16) //Math.random()--generates number btn 0 and 1....#16777215=(white)....*by 16777215 --gives a number in the range of 0 to 16777215.(maximum value for a 24-bit color)

    // box.style.color=randomColor
    box.style.backgroundColor=randomBackgroundColor //this line set the `backgroundcolor` style property of the current `box` to the randomly generated color stored in the `randomBackgroundColor`.

    box.textContent = randomBackgroundColor //Finally, `textContent` will display the #hexcode of the color inside the box .
}


//This will make the box change color randomly .