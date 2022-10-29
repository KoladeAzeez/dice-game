let randomNum1 = Math.floor (Math.random() * 6) + 1 ;
let randomImageName = "dice" + randomNum1 + ".png";
let imageSource = "/images/" + randomImageName;

let firstImg = document.querySelectorAll("img")[0];
firstImg.setAttribute("src", imageSource);

let randomNum2 = Math.floor (Math.random() * 6) + 1 ;
let randomImg2 = "dice" + randomNum2 + ".png";
let imageSource2 = "/images/" + randomImg2;

let secondImg = document.querySelectorAll("img")[1];
secondImg.setAttribute("src", imageSource2);

    if (randomNum1 === randomNum2){
        document.querySelector("h1").innerHTML = "🚩 Draw"
    }
    else if (randomNum1 > randomNum2){
         document.querySelector("h1").innerHTML = "Player 1 Wins 🚩"
    }
    else{
        document.querySelector("h1").innerHTML = "Player 2 Wins 🚩"
    }

git