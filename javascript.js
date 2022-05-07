//-----------------------------------------------------------------------------------------------------------------//
// Rock, Paper, Scissors
//-----------------------------------------------------------------------------------------------------------------//


// creating play loop

let compScore = 0;
let playScore = 0;


let play = prompt("Would you like to play?")
play = play.toUpperCase();


function thaGame_R_P_S_() {
    


    for (let a = 0; a < 100000; a++) {                                                                                                               
        
        if (play == 'YES' || play == 'Y') {  
            console.log("Fantastic! esssketit.\n" + game())


    // creating computer's play

    function computerPlay() {
            let compChoice = ['Rock', 'Paper', 'Scissors']; 
            let randNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);   
            let compSelection = compChoice[randNumber];   
            let computerSelection = compSelection.toUpperCase(); 
            return computerSelection;  

            };                                                                            



    // creating playerPlay function

        function playerPlay() {                                                 
            let choice = prompt("What's your move?");  
            let playerSelection = choice.toUpperCase();   
            return playerSelection; 
        }



    // creating 'playRound' function




        function playRound(playerPlay, computerPlay) {

            if (((playerPlay === 'ROCK') && (computerPlay === 'ROCK')) || ((playerPlay === 'PAPER')  
                && (computerPlay === 'PAPER')) || ((playerPlay === 'SCISSORS') && (computerPlay === 'SCISSORS'))) {  
                let tie = ("It's a tie! " +playerPlay+ " is equal to " +computerPlay+"\n Your Score: " +playScore+ " Computer Score: " +compScore);                   
                return (tie);   

                }   else if ((playerPlay === 'ROCK') && (computerPlay === 'PAPER') || ((playerPlay === 'PAPER')    
                        && (computerPlay === 'SCISSORS')) || ((playerPlay === 'SCISSORS') && (computerPlay === 'ROCK'))) {  
                        compScore = ++compScore;             
                        let cWin = ("You lose " +computerPlay+ " beats " +playerPlay+"\n Your Score: " +playScore+ " Computer Score: " +compScore);
                            return (cWin); 

                        }   else if ((playerPlay === 'ROCK') && (computerPlay === 'SCISSORS') || ((playerPlay === 'SCISSORS')  
                                && (computerPlay === 'PAPER')) || ((playerPlay === 'PAPER') && (computerPlay === 'ROCK'))) {
                                    playScore = ++playScore;  
                                    let pWin = ("You Win! " +playerPlay+ " beats " +computerPlay+"\n Your Score: " +playScore+ " Computer Score: " +compScore); 
                                    return (pWin);                                                                                                                                                                          
                                    
                                }   else  {
                                    let invalid = ("Please enter a valid choice.");
                                    return (invalid)
                                }
        }                                                            


    // creating the 'game' function


        function game() {
            for (let i = 0; i < 5; i++) { 
                console.log(playRound(playerPlay(), computerPlay()));
            }

        
                if (playScore > compScore) {   
                    return ("You have defeated the Computer! Congratulations!\nFinal Score\nYou: " +playScore+ " Computer: " +compScore);  

                }   else if (playScore < compScore) {
                    return ("The Computer has defeated you. Practice is in order.\nFinal Score\nYou: " +playScore+ " Computer: " +compScore); 

                }   else if (playScore == compScore) {
                    return ("It seems thats you are evenly matched with the machine. Nothing less, nothing more.\nFinal Score\nYou: " +playScore+ " Computer: " +compScore);
                }  
            
                console.log(game())

        }


        }   else if (play == 'NO' || play == 'N') {
            return ("Ok then. Wierd...")
        }   else {
            return ("That.. is not a valid entry.");
        }

    }


        

     
    }
    console.log(thaGame_R_P_S_(play));

