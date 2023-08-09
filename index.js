var randomnumber = Math.floor((Math.random()*6)+1)

var dicenum = "dice"+randomnumber+".png";
var imgsrc = "./images/"+dicenum;

document.querySelectorAll("img")[0].setAttribute("src",imgsrc);


var randomnumber2 = Math.floor((Math.random()*6)+1)

var dicenum2 = "dice"+randomnumber2+".png";
var imgsrc2 = "./images/"+dicenum2;
document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);



if(randomnumber>randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins 🚩";
}
else if(randomnumber<randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}