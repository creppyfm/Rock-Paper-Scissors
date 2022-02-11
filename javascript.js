// Planning / Pseudocode
// 
// What's the problem? 
//    Need to create a game that ACCEPTS USER INPUT OF ONE OF THREE OPTIONS, EACH OPTION ACCEPTED IN ALL CAPS, LOWERCASE, OR A MIXTURE OF BOTH, 
//    COMPARES THE VALUE OF THE USERS INPUT WITH A RANDOMLY GENERATED COMPUTER VALUE, DETERMINES WHETHER THE USER OR THE COMPUTER HAVE THE 
//    HIGHER VALUE (WIN,) OR IF THEIR VALUES ARE EQUAL (TIE). The gamme must also PRINT RELEVANT STRINGS TO ANNOUNCE WINNER/LOSER/TIE.
//    
//  Pseudocode        
//
//
// let response;


//    function beginGame(let response = prompt("Do you want to play?")) {

//    };
//-----------------------------------------------------------------------------------------------------------------//
// Rock, Paper, Scissors
//-----------------------------------------------------------------------------------------------------------------//


// creating play loop

let compScore = 0;
let playScore = 0;


let play = prompt("Would you like to play?")
play = play.toUpperCase();


function thaGame_R_P_S_() {
    


    for (let a = 0; a < 100000; a++) {                                                                                                                // save this for later maybe?? (let play = prompt("Would you like to play?"); play == 'YES' || play == 'Y'; play++)
        
        if (play == 'YES' || play == 'Y') {  
            console.log("Fantastic! esssketit.\n" + game())


    // creating computer's play

    function computerPlay() {
            let compChoice = ['Rock', 'Paper', 'Scissors'];                                                                                              // creates array that includes our three choices  
            let randNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);                                                                                 // picks a random number between 0 and 2 (inclusive) - (max - min + 1) + min
            let compSelection = compChoice[randNumber];                                                                                                    // creates 'compSelection' using the 'randNumber' function we defined above 
            let computerSelection = compSelection.toUpperCase();                                                                                     // converts compSelection to Uppercase for easier comparison to user input
            return computerSelection;                                                                                                                           //^^ returns the random, capitalized selection from the array 

            };                                                                            



    // creating playerPlay function

        function playerPlay() {                                                 
            let choice = prompt("What's your move?");                                                                                                    // create 'choice' var to accept user input
            let playerSelection = choice.toUpperCase();                                                                                                // copy capitalized 'choice' to playerSelection for easier comparison to cpu input 
            return playerSelection;                                                                                                                      // returns capitalized player input
        }



    // creating 'playRound' function




        function playRound(playerPlay, computerPlay) {                                                                                                        // create 'playRound' function

            if (((playerPlay === 'ROCK') && (computerPlay === 'ROCK')) || ((playerPlay === 'PAPER')                                                                 // checks for ties: compares user/comp functions with all possible results
                && (computerPlay === 'PAPER')) || ((playerPlay === 'SCISSORS') && (computerPlay === 'SCISSORS'))) {                                               // to determine whether or not condition has been met (pP === cP), triggering the
                let tie = ("It's a tie! " +playerPlay+ " is equal to " +computerPlay+"\n Your Score: " +playScore+ " Computer Score: " +compScore);                   
                return (tie);                                                                                                                                       // return statement  

                }   else if ((playerPlay === 'ROCK') && (computerPlay === 'PAPER') || ((playerPlay === 'PAPER')                                                     //  grouped all losing situations to trigger lose string
                        && (computerPlay === 'SCISSORS')) || ((playerPlay === 'SCISSORS') && (computerPlay === 'ROCK'))) {  
                        compScore = ++compScore;                                                                                                                         // adds 1 each time condition is met, starting from 0
                        let cWin = ("You lose " +computerPlay+ " beats " +playerPlay+"\n Your Score: " +playScore+ " Computer Score: " +compScore);
                            return (cWin);                                                                                                                                     // added score variables

                        }   else if ((playerPlay === 'ROCK') && (computerPlay === 'SCISSORS') || ((playerPlay === 'SCISSORS')                                        //  grouped all winning situations to trigger win string
                                && (computerPlay === 'PAPER')) || ((playerPlay === 'PAPER') && (computerPlay === 'ROCK'))) {
                                    playScore = ++playScore;                                                                                                            // adds 1 each time condition is met, starting from 0
                                    let pWin = ("You Win! " +playerPlay+ " beats " +computerPlay+"\n Your Score: " +playScore+ " Computer Score: " +compScore);         // created 'pWin', 'cWin', 'tie', and 'invalid' 
                                    return (pWin);                                                                                                                                                                          
                                    
                                }   else  {
                                    let invalid = ("Please enter a valid choice.");
                                    return (invalid)
                                }
        }                                                                                                                                                              // GOT IT!  // Now just have to account for empty strings and null/undefined      


    // creating the 'game' function


        function game() {
            for (let i = 0; i < 5; i++) {                                                                                                                              // loops input 5 times
                console.log(playRound(playerPlay(), computerPlay()));
            }

        
                if (playScore > compScore) {                                                                                                                            // conditions to determine a winner
                    return ("You have defeated the Computer! Congratulations!\nFinal Score\nYou: " +playScore+ " Computer: " +compScore);                              // returns final determination, and each player's final score

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








//   WHAT IFS BELOW
//
// What if...

    // function playRound(playerSelection, computerSelection) {
       
    //     if ((playerPlay() === computerPlay()) === true) {                                           // WHY ISN'T THE COMPUTER COMPARING THE TWO PROPERTIES? - NEED TO CHANGE FROM === TO 
    //         return ("It's a tie! " +playerPlay()+ " is equal to " +computerPlay());

    //     }   
        
        //  let computerSelection = computerPlay();                   // removed from function
        //  let playerSelection = playerPlay();                       // ^^^


    // }

    // // console.log(playerPlay()+computerPlay());










// console.log(playerPlay()+computerPlay());

//
    // function playRound(playerSelection, computerSelection) {
       
    //     if ((playerPlay() === computerPlay()) === true) {                                           // WHY ISN'T THE COMPUTER COMPARING THE TWO PROPERTIES? - NEED TO CHANGE FROM === TO 
    //         return ("It's a tie! " +playerPlay()+ " is equal to " +computerPlay());

    //     }   
        
    //     // let computerSelection = computerPlay();                   // removed from function
    //     // let playerSelection = playerPlay();                       // ^^^


    // }
