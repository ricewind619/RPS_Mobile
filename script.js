// Code to write rock paper scissors game
// Delcaring all variables here
let valueOfChoice;
let finalComputerChoice;
let userChoice;
let finalUserChoice;
let userScore = 0;
let computerScore = 0;
let currrentRound = 1;

var user = document.querySelector(".user_choice");
let computer = document.querySelector(".computer_choice");
let board = document.querySelector(".board");
let score = document.querySelector(".score");
var rock_sound = new Audio("rock.mp3");
let rock_src = "rock.mp3";
var paper_sound = new Audio("paper.mp3");
let paper_src = "paper.mp3";
let tunak_src = "tunak.mp3";
var scissors_sound = new Audio("scissors.mp3");
let scissors_src = "scissors.mp3";
var delayInMilliseconds = 5000; 

//autoplay hack
// //background music




//Audio function to pause other audio when new one plays
let audio;

function pauseAudio() {
  // If audio is not undefined and if is playing, pause it
  if (audio && !audio.paused) {
    audio.pause();
    //audio.currentTime = 0; // Rewind track to beginning (is you need this)
  }
}

function playAudio(src) {
  pauseAudio();             // Pause any currently playing
  audio = new Audio();      // Save a reference
  audio.src = src;
  audio.play();
}

document.body.addEventListener('click', function()  {
    score.innerHTML = "TAP ON ICON TO PLAY!"    
    playAudio(tunak_src);
  },{once:true});




 

//Function to choose amongst 3 choices 

function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to get computer choice

function getComputerChoice()

{
    
    valueOfChoice = getRandomInt(1, 3);

    if (valueOfChoice == 1) {
        return "rock";

    }

    else if (valueOfChoice == 2){
        return "paper";
    }

    else {
        return "scissors";
    }
}

// Function to get user choice by GUI
//** REMOVING getUserChoice as it does not make sense */
//function getUserChoiceGUI()

//{

        const rock = document.querySelector(".rock");
        const paper = document.querySelector(".paper");
        const scissors = document.querySelector(".scissors");

        rock.addEventListener('click', () => {
            user.classList.add('pre-animation');            
            setTimeout(function(){
                user.classList.remove('pre-animation')
                user.setAttribute("style", 'font-family: "Rubik Moonrocks", serif');
                user.innerHTML = "you choose ROCK!";
            },1000)
                    
            
            playAudio(rock_src);
            // rock.style.transform = "scale(1.2,1.2)";
            // rock.style.transitionDuration = "0.5s";
            // rock.style.transitionDelay = "0.01s";

            //alert("You choose rock");
            userChoice = "rock"; 
            finalUserChoice = userChoice;
            console.log(userChoice);
            game();


                     

        });

        paper.addEventListener('click', () => {
            user.classList.add('pre-animation');            
            setTimeout(function(){
                user.classList.remove('pre-animation')
                user.setAttribute("style", 'font-family: "Calligraffitti", serif');
                user.innerHTML = "you choose paper!";
            },1000)
            
            playAudio(paper_src);
            //alert("You choose paper");
            userChoice = "paper";
            finalUserChoice = userChoice;
            console.log(userChoice);
            game();
            
        });

        scissors.addEventListener('click', () => {
            user.classList.add('pre-animation');            
            setTimeout(function(){
                user.classList.remove('pre-animation')
                user.setAttribute("style", 'font-family: "MedievalSharp", serif');
                user.innerHTML = "you choose scissors!";
            },1000)
            
            playAudio(scissors_src);
            //alert("You choose scissors");
            userChoice = "scissors";
            finalUserChoice = userChoice;
            console.log(userChoice);
            game();
            
        });

//}\

    //your code to be executed after 1 second
    //getUserChoiceGUI();
 






// Function to Get user choice by PROMPT

// function getUserChoice()
// {

//     userChoice = prompt ("Enter your choice")
        
//     if (userChoice.toLowerCase() == "rock")
//     {
//         alert("You chose rock!");
//     }
//     else if (userChoice.toLowerCase() == "paper")
//     {
//         alert("You chose paper!");
//     }
//     else if (userChoice.toLowerCase() == "scissors")
//     {
//         alert(" You chose scissors!");
//     } 
//     else    
//     {
//         alert (" Wrong response, please try again");
//         getUserChoice();
//     }

// }

// Fuction to find winner or draw
//***comment out for GUI***

function playRound()

{ 
    
    
    if (finalUserChoice == finalComputerChoice){
        board.innerHTML = "Draw game!";
        //alert ("Draw game!");
    }
    else if ((finalUserChoice == "rock" && finalComputerChoice == "scissors")|| 
    (finalUserChoice == "paper" && finalComputerChoice == "rock")||
    (finalUserChoice == "scissors" && finalComputerChoice == "paper"))
    {
        board.innerHTML = "You win round!";
        //alert("User wins round!");
        userScore++;
    }
    else{
        board.innerHTML = "Computer wins round";
        //alert ("Computer wins round");
        computerScore++;
    }

}


//***comment out for GUI***
function game()

{
           
        //Computer chooses after this
        finalComputerChoice = getComputerChoice();
        if (finalComputerChoice == "rock")
        
        {
            computer.classList.add('pre-animation');            
            setTimeout(function(){
                computer.classList.remove('pre-animation')
                computer.setAttribute("style", 'font-family: "Rubik Moonrocks", serif');
                computer.innerHTML = "computer choose rock!";
            },1000)

        }
        else if (finalComputerChoice == "paper")
        {
            computer.classList.add('pre-animation');            
            setTimeout(function(){
                computer.classList.remove('pre-animation')
                computer.setAttribute("style", 'font-family: "Calligraffitti", serif');
                computer.innerHTML = "computer choose paper!";
            },1000)
        }
            else if (finalComputerChoice == "scissors")
        {
                computer.classList.add('pre-animation');            
                setTimeout(function(){
                    computer.classList.remove('pre-animation')
                    computer.setAttribute("style", 'font-family: "MedievalSharp", serif');
                    computer.innerHTML = "computer choose scissors!";
                },1000)
        
        }
        //computer.innerHTML = "Computer chose " + finalComputerChoice; 
        //alert("Computer chose " + " " + finalComputerChoice);
        //User chooses after this
        //getUserChoice();

        //No need for GUI as called based on click
        //finalUserChoice = userChoice.toLowerCase();

        //console.log("User chose " + finalUserChoice);
        //Round is played after this
        playRound();
        //Results displayed after this

        score.innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp SCORES <br>" + 
        " &nbsp &nbsp &nbsp &nbsp &nbsp ROUND" + "&nbsp" + currrentRound + " <br> User" 
        + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" 
        + userScore + "<br>" + "Computer" 
        + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " 
        + computerScore
        //alert( "Scores after round " + currrentRound + " : \n User " + userScore +"\n" + " Computer " + computerScore);
        
        
        if(currrentRound == 5)
              
        {

            if (userScore == computerScore)
            {
                score.innerHTML = "Final result:<br> &nbsp &nbsp &nbsp &nbsp &nbsp Draw!"; 
                //alert("Final result is draw!");
                return
            }

            else if(userScore > computerScore)
            {
                score.innerHTML = "Final result: <br> &nbsp &nbsp &nbsp You WIN!";
                //alert("Final result: User WINS!");
                return
            }

            else {
                score.innerHTML = "&nbsp &nbsp &nbsp Final result:<br> Computer wins!";
                //alert("Final result: Computer wins!");
                return     
            }
        }

        currrentRound++;
    


}

//No need for GUI
//game();

// ***comment out for GUI***
// if (userScore == computerScore){
//     alert("Final result is draw!");
// }

// else if(userScore > computerScore){
//     alert("User WINS!");
// }

// else {
//     alert("Computer wins!");
// }
