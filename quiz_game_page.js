player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;

function Send() {
    n1 = document.getElementById("number_1").value;
    n2 = document.getElementById("number_2").value;
    a1 = parseInt(n1)*parseInt(n2);
    question_word = "<h4>" + n1 + " x " + n2 + "</h4>";
    inputBox = "<br>Answer - <input type='text' id='inputbox1'>"
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_word + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

qt = "player1";
at = "player2";

function check() {
    answer = document.getElementById("inputbox1").value;

    if (answer == a1) {
        if (at == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }

        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

        if (qt == "player1") {
            qt = "player2";
            document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name;
        }
        else {
            qt = "player1";
            document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
        }

        if (at == "player1") {
            at = "player2";
            document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;
        }
        else {
            at = "player1";
            document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name;
        }

        document.getElementById("output").innerHTML = "";
}