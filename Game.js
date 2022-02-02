var p1=localStorage.getItem("Player1");

var p2=localStorage.getItem("Player2");


var score1=0;
var score2=0;


document.getElementById("starlight").innerHTML="question turn-"+p1;
document.getElementById("celestia").innerHTML="answer turn-"+p2;


function send(){
    var mlp=document.getElementById("q1").value;
    var celestia=document.getElementById("q2").value;
    document.getElementById("display").innerHTML= mlp+" x "+ celestia;
    }


