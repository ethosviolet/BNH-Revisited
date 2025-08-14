
  const options = ["Bear", "Ninja", "Hunter"]; // a constant array of the options for user or computer choice
  
  let winCounter = 0; //Win loss tie counters initialize with starting value 0
  let lossCounter = 0;
  let tieCounter = 0;
  function playGame(fighter) { //Now gameplay is started with a function. Calls to use the functions defined below that call to the buttons in HTML to define the value for fighter.
  const randomIndex = Math.floor(Math.random() * options.length); // math.floor for integer value(Math.random(for random value) * options.length (0-2)
  const computerChoice = options[randomIndex]; // the computer choice is randomly assigned by taking the options array and selecting a random index value using the above formula.
  let result = ""; //initialize result
 if (fighter === computerChoice) {
      result = "You tied!"; // strict equivalence of these two values means a tie
      tieCounter += 1; // Tie counter adds current value + 1
    } else if (
      (fighter === "Bear" && computerChoice === "Ninja") || 
      (fighter === "Ninja" && computerChoice === "Hunter") ||
      (fighter === "Hunter" && computerChoice === "Bear")
    ) {
      result = "You win!";// win condition based on if user chose specific fighter value and the computer chose specific fighter value for 3 win scenarios.
      winCounter += 1; //Win counter adds current value +1
    } else {
      result = "The computer wins!"; //outside of these specific tie and win options any other combination of choices will result in a loss
      lossCounter += 1;} // loss counter adds current value +1
    document.getElementById("result").style.display = "inline-block" //hidden until executed
      document.getElementById("result").innerHTML = `You chose ${fighter} <br> The computer chose ${computerChoice} <br> ${result}`; //populates result of game to html element
     document.getElementById("wins").style.display = "block"// hidden until executed
      document.getElementById("wins").innerHTML = `Your Wins: ${winCounter}` //wins displayed
      document.getElementById("losses").style.display = "block" //hidden until executed
      document.getElementById("losses").innerHTML = `Computer Wins: ${lossCounter}` //losses displayed
      document.getElementById("ties").style.display = "block" //hidden until executed
      document.getElementById("ties").innerHTML = `Ties: ${tieCounter}` //Ties displayed
      document.getElementById("playButton").style.display = "block" //hidden until executed
      document.getElementById("bearBtn").disabled = true; //disables play buttons
      document.getElementById("ninjaBtn").disabled = true;
      document.getElementById("hunterBtn").disabled = true;
  }
  function playAgain() {
    document.getElementById("playButton").style.display = "none" // hides "play Again?" button
     document.getElementById("result").style.display = "none" // hides results display
     document.getElementById("bearBtn").disabled = false; // clicking play again re enables the play buttons
    document.getElementById("ninjaBtn").disabled = false;
    document.getElementById("hunterBtn").disabled = false;
 }
  function UserBear() //fighter values stored in functions that call to the buttons in html
  {playGame("Bear")};
  function UserNinja() 
  {playGame("Ninja")};
  function UserHunter() 
  {playGame("Hunter")}; 