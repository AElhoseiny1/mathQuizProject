function addUser(){
    console.log("user is added")
    window.localStorage.setItem("player1",document.getElementById("p1").value)
    window.localStorage.setItem("player2",document.getElementById("p2").value)
    window.open("game.html","_self");
 }
 
 
 
 