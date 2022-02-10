console.log("Hello World!")


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




// creating computer's play

   function computerPlay() {
        let compChoice = ['Rock', 'Paper', 'Scissors'];                                 // creates array that includes our three choices  
        let randNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);             // picks a random number between 0 and 2 (inclusive) - (max - min + 1) + min
        let compSelection = compChoice[randNumber];                                // creates 'compSelection' using the 'randNumber' function we defined above 
        let computerSelection = compSelection.toUpperCase();                       // converts compSelection to Uppercase for easier comparison to user input
        return computerSelection;                                                  //^^ returns the random, capitalized selection from the array 

        };                                                                            




    // alert(computerSelection());                                                        // prints the function 'computerPlay()' in browser prompt

//
//
//
//
//
// creating playerPlay function

    function playerPlay() {
        let choice = prompt("What's your move?");                             // create 'choice' var to accept user input
        let playerSelection = choice.toUpperCase();                           // copy capitalized 'choice' to playerSelection for easier comparison to cpu input 
        return playerSelection;                                               // returns capitalized player input
    }




// creating 'playRound' function

function playRound(playerPlay, computerPlay) {                                                                    // create 'playRound' function
       
    if (((playerPlay === 'ROCK') && (computerPlay === 'ROCK')) || ((playerPlay === 'PAPER')                     // checks for ties: compares user/comp functions with all possible results
        && (computerPlay === 'PAPER')) || ((playerPlay === 'SCISSORS') && (computerPlay === 'SCISSORS'))) {     // to determine whether or not condition has been met (pP === cP), triggering the           
        return ("It's a tie! " +playerPlay+ " is equal to " +computerPlay);                                     // return statement  

        }   else if ((playerPlay === 'ROCK') && (computerPlay === 'PAPER') || ((playerPlay === 'PAPER')                 //  grouped all losing situations to trigger lose string
                && (computerPlay === 'SCISSORS')) || ((playerPlay === 'SCISSORS') && (computerPlay === 'ROCK'))) {
                    return ("You lose " +computerPlay+ " beats " +playerPlay);

                }   else if ((playerPlay === 'ROCK') && (computerPlay === 'SCISSORS') || ((playerPlay === 'SCISSORS')   //  grouped all winning situations to trigger win string
                        && (computerPlay === 'PAPER')) || ((playerPlay === 'PAPER') && (computerPlay === 'ROCK'))) {
                            return ("You Win! " +playerPlay+ " beats " +computerPlay);
                            
                        }   else  {
                            
                        }
}                                                                                               // GOT IT!  // Now just have to account for empty strings and null/undefined      



let computerSelection = computerPlay();                   
let playerSelection = playerPlay();                       



console.log(playerSelection + computerSelection);                                               // TESTING


console.log(playRound(playerSelection,computerSelection));                                      // TESTING        

























//   WHAT IFS BELOW
//
//
//
//
//
//// What if...

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
//
//
//
//
// 
//
//
    // function playRound(playerSelection, computerSelection) {
       
    //     if ((playerPlay() === computerPlay()) === true) {                                           // WHY ISN'T THE COMPUTER COMPARING THE TWO PROPERTIES? - NEED TO CHANGE FROM === TO 
    //         return ("It's a tie! " +playerPlay()+ " is equal to " +computerPlay());

    //     }   
        
    //     // let computerSelection = computerPlay();                   // removed from function
    //     // let playerSelection = playerPlay();                       // ^^^


    // }

    
    

//
//
//
//
//
//
//
//
//
//
// 
//
//
//
//
//
//
//
//
//
//
//
// 
//
//
//
//
//
//
//
//
//
//
//
