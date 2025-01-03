// function createCard(title,cName,views, monthsOld,duration,thumbnail){
//     //finish the function 
// }

// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

// script form here

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewStr
  if (views<1000){
    viewStr = views;
  }
  else if (views > 1000000){
    viewStr = views/1000000 + "M";
  }
  else{
    viewStr = views/1000 + "K";
  }
  let html = `<div class="card">

      <div class="image"> 
        <img src="${thumbnail}" alt="Banner">

        <div class="capsula">${duration}</div>

      </div>

      <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} month ago</p>
      </div> 

    </div>`

    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html
}


createCard("Introduction to Frontend | Sigma Web Dev video #3", "CodeWithHarry", 56000000, 7, "10:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")


createCard("Introduction to JAVA | Sigma Web Dev video #4", "CodeWithHarry", 5600, 7, "23:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")