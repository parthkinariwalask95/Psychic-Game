// creating varible to hold 27 alphabets character.
var computerguess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var x = document.createElement("IMG");
x.setAttribute("src", "assets/image/smily1.jpg");
x.setAttribute("width", "304");
x.setAttribute("height", "228");

// Creating variables to hold the number of wins, losses,count,and guesstill.
var wins = 0;
var losses = 0;
var count = 9;
var guessstill = [];




// this line for computer choice random one no.
var randomchoice = computerguess[Math.floor(Math.random() * computerguess.length)];
// onkeyup function
document.onkeyup = function (event) {

  var userGuess = event.key;
  //   print the randomchoice
  console.log(randomchoice);

  // if condition
  if (userGuess == randomchoice) {
    wins++;
    document.getElementById("addimage").appendChild(x);
   


      //    print the msg "you won"
      alert("you won");
      count = 9;
      losses = 0;
      guessstill = [];
      randomchoice = computerguess[Math.floor(Math.random() * computerguess.length)];
      console.log(randomchoice);
  
  }
  //    else condition
  else {
    guessstill.push(userGuess);
    count--;
    //    if condition
    if (count == 0) {
      losses++;
      // print the msg "you won"  
      alert("you losse");
      count = 9;
      guessstill = [];
    }
    else {

    }

  }
  // showing the javascript varriables and print on html page.
  document.querySelector('#u1').innerHTML = "User Guess : " + userGuess;
  document.querySelector('#w1').innerHTML = "Win : " + wins;
  document.querySelector('#l1').innerHTML = "Lost :" + losses;
  document.querySelector('#g1').innerHTML = "Guesses Left : " + count;
  document.querySelector('#g2').innerHTML = "Guesses so far: " + guessstill.join(',');

}
// creating myfunction 
// reset button
function myfunction() {
  document.querySelector('#u1').innerHTML = "User Guess : ";
  document.querySelector('#w1').innerHTML = "Win :";
  document.querySelector('#l1').innerHTML = "Lost :";
  document.querySelector('#g1').innerHTML = "Guesses Left :";
  document.querySelector('#g2').innerHTML = "Guesses so far:";
  document.querySelector('#addimage').innerHTML = "";
    


}
