var player1_score =0
var player2_score = 0
var actual_answer =0

player1 = window.localStorage.getItem("player1");
player2 = window.localStorage.getItem("player2");
var question_turn = player1;
var answer_turn = player2;

 document.addEventListener("DOMContentLoaded", function load(){  
    document.getElementById("player_1").innerHTML = player1;
    document.getElementById("player_2").innerHTML = player2;
    document.getElementById("player1_score").innerHTML = 0;
    document.getElementById("player2_score").innerHTML = 0;
    document.getElementById("QTurn").innerHTML = player1;
    document.getElementById("ATurn").innerHTML = player2
 })

function send(){
    number_1 = document.getElementById("number1").value;
    number_2 = document.getElementById("number2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2)
    question_number = "<h4>" + number_1 + " X " + number_2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check(){
 get_answer = document.getElementById("input_check_box").value
 if(get_answer==actual_answer){
     if(answer_turn==player1){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML = player1_score;
     }
     else{
         player2_score = player2_score+1;
         document.getElementById("player2_score").innerHTML = player2_score;
     }
 }

    if(question_turn==player1){
        question_turn = player2;
        answer_turn = player1;
     
    }
    else{
        question_turn = player1;
        answer_turn= player2;
    
    }
    document.getElementById("QTurn").innerHTML = question_turn;
    document.getElementById("ATurn").innerHTML = answer_turn;
    document.getElementById("output").innerHTML = "<div></div>"
}
