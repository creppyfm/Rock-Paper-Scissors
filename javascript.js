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
        let randNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);             // picks a random number between 0 and 2 (inclusive) - (max - min + 1) + min
        let compChoice = ['Rock', 'Paper', 'Scissors'];                                 // creates array that includes our three choices  
        let compSelection = compChoice[randNumber];                                // creates 'compSelection' using the 'randNumber' function we defined above 
        let computerSelection = compSelection.toUpperCase();                       // converts compSelection to Uppercase for easier comparison to user input
        return computerSelection;                                                  //^^ returns the random, capitalized selection from the array 
        };                                                                            

 console.log(computerPlay());              // prints the function 'computerPlay()' in console

// alert(computerPlay());                  // prints the function 'computerPlay()' in browser prompt

//
//
//
//
//
//
// creating 'playRound' function

















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