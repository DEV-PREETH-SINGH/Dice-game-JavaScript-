console.log("working")
var a =Math.floor(Math.random() * 6 +1)
var b =Math.floor(Math.random() * 6 +1)
console.log(a)
console.log(b)
// ---------------------------------------------------------------------------------------------------------------------


    if(a==1){
        document.getElementsByTagName("img")[0].setAttribute("src","images/dice1.png")
    }
    if(a==2){
        document.getElementsByTagName("img")[0].setAttribute("src","images/dice2.png")
    }
    if(a==3){
        document.getElementsByTagName("img")[0].setAttribute("src","images/dice3.png")
    }
    if(a==4){
        document.getElementsByTagName("img")[0].setAttribute("src","images/dice4.png")
    }
    if(a==5){
        document.getElementsByTagName("img")[0].setAttribute("src","images/dice5.png")
    }
    if(a==6){
        document.getElementsByTagName("img")[0].setAttribute("src","images/dice6.png")
    }



// -----------------------------------------


if(b==1){
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice1.png")
}
else if(b==2){
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice2.png")
}
else if(b==3){
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice3.png")
}
else if(b==4){
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice4.png")
}
else if(b==5){
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice5.png")
}
else if(b==6){
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice6.png")
}

// ---------------------------------------------------------------------------------------------------------------------


if(a>b){
    document.querySelector("h1").innerHTML="Player 1 WINS"
    // alert("player 1 wins");
}
else if(a<b){
    document.querySelector("h1").innerHTML="Player 2 WINS"
    // alert("player 2 wins");
}
else {
    document.querySelector("h1").innerHTML="Its a DRAW"
    // alert("draw");
    
}

