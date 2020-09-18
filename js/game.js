const options = "rock,paper,scissors".split(','); // this is the same than=> const options = ["rock", "paper", "scissors"];

function computerPlay(){
    // let variables are better if you're not going to use it again
    // using options constant now we don't need to manually asign the chosen one
    // if use floor is more dificult to reach the upper number
    let computerChoice = options[Math.round(Math.random()*2)];
    return computerChoice;
    // this function do tha same if we do this:
    // return options[Math.round(Math.random()*2)];
}

function userPlay(){
  var userChoice = "";
  while (true){
    userChoice = prompt("choose between rock, paper or scissors").toLowerCase();
    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors"){
      // if it was a good option continue otherwise ask again;
      break;
    }
  }
  
  return userChoice;
}

// to use instead console.log()
function log(msg){
  document.getElementById("console").innerHTML = msg;
}

function play(){
  let userChoice = userPlay();
  let computerChoice = computerPlay();
  document.getElementById("user-play").innerHTML = userChoice;
  document.getElementById("computer-play").innerHTML = computerChoice;
  
  if(userChoice === computerChoice){
    log("It is a tie");
    return; // this line end the function's execution here, so it save resources
  }
    
  // trying to compare userChoice with rock causes an error, because there isn't a variable rock defined
  if(userChoice === "rock"){
    if(computerChoice === "paper"){
      log("You loose! paper beat rock");
      return;
    }
    else{
      log("You won! rock beat scissors");
      return;
    }
  }
  
  if(userChoice === "paper"){
    if(computerChoice === "rock"){
      log("You won! paper beat rock");
      return;
    }else{
      log("You loose! scissors beat paper");
      return;
    }
  }
  
  if(userChoice === "scissors"){
    if(computerChoice === "rock"){
      log("You loose! rock beat scissors");
      return;
    }
    else{
      log("You won! scissors beat paper");
      return;
    }
  }
}

window.onload = function(){
  // this line will auto run the game when the page load process is done
  play();
}

document.getElementById("play-button").addEventListener('click', play, false);
