// JavaScript Document
var thing = true;
function clickOff() {
    
        if (thing === true){
    'use strict';
    var change1 = document.getElementById("Title"),
        change2 = document.getElementById("Bkgrnd"),
        change3 = document.getElementById("Menu");
        change4 = document.getElementById("container");
            
    change1.style.backgroundColor = '#999999';
        change1.innerHTML = "DARK RPS";
    change1.style.color = '#333';
    change2.style.backgroundColor = '#000';
    change3.style.backgroundColor = '#300000';
    change4.style.backgroundColor = '#adadad';
        thing = false;
        } else {
            
    var change1 = document.getElementById("Title"),
        change2 = document.getElementById("Bkgrnd"),
        change3 = document.getElementById("Menu");
        change4 = document.getElementById("container");
          
    change1.style.backgroundColor = 'bisque';
    change1.style.color = '#fff';
        change1.innerHTML = "RPS";
    change2.style.backgroundColor = '#104554';
    change3.style.backgroundColor = 'blanchedalmond';
    change4.style.backgroundColor = 'aquamarine';
    
        thing = true;
        }
}

function myFunction() {
    document.getElementById("RPS").innerHTML = "ROCK PAPER SCISSORS";
}


 var win = 0;
    var lose = 0;
    var tied = 0;

function maChoice(a) {
    var computer = Math.floor((Math.random() * 3) + 0);
  //  var computer = ("Rock", "Paper", "Scissors");
   
    document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
    
    document.getElementById("computer").innerHTML = "The Computer Chose " + computer;
        
    if ( computer == 0 ) {
        document.getElementById("computer").innerHTML = "Computer Chooses Rock"
    }
    else if ( computer == 1 ) {
        document.getElementById("computer").innerHTML = "Computer Chooses Paper"
    }
    else if ( computer == 2 ) {
        document.getElementById("computer").innerHTML = "Computer Chooses Scissors"
    }
    if (a == 0) {
        document.getElementById("player").innerHTML = "Rock";
        
        if ( computer == 0 ){
            document.getElementById("result").innerHTML = "TIE"
            tied += 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
         else if ( computer == 1 ){
            document.getElementById("result").innerHTML = "Lose";
             lose += 1;
             document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
        else if ( computer == 2 ){
            
            document.getElementById("result").innerHTML = "Win";
            win += 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
    }   if (a == 1) {
        document.getElementById("player").innerHTML = "Paper";
                if ( computer == 0 ){
            document.getElementById("result").innerHTML = "Win";
                    win+= 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
         else if ( computer == 1 ){
            document.getElementById("result").innerHTML = "TIE";
             tied += 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
        else if ( computer == 2 ){
            document.getElementById("result").innerHTML = "Lose";
            lose += 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
    }   if (a == 2) {
        document.getElementById("player").innerHTML = "Scissors";
                if ( computer == 0 ){
            document.getElementById("result").innerHTML = "Lose";
                    lose += 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
         else if ( computer == 1 ){
            document.getElementById("result").innerHTML = "Win";
             win+= 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
        else if ( computer == 2 ){
            document.getElementById("result").innerHTML = "TIE";
            tied += 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
    }
}
