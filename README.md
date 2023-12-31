- The challenge is to build a set of functions based on Javascript using the Factory Pattern. The required functions are the ones described below:

- A Factory Function called EasterEgg will handle how each one of the other functions will be created and which arguments each one of them will need. The easter eggs function can create a clock, marquee, tic tac toe, and formatter.

- A Loader constructor function, this loader will have a load method, this method will be called every time we want to change the current easter egg. On each change, it will show a loading animation that will last 3 seconds with the frames | / - \ and then present us with the selected option.

- A Clock constructor function, the objects generated by this function will show a real-time clock in the console with the format hh:mm:ss. The console should be cleared on each render so we can see the clock as a single line. When we click on any place of the window, the clock should disappear and the message Let's keep playing! should appear in the console.

  new EasterEgg("clock");

- A TicTacToe constructor function will generate a michi game in the console, giving you the option to play between two players. The initial state will show the board in the console with the player that will go first. To play the player should use a method like easterEgg.snippet.play(1,2) where 1,2 are the coordinates on x and y of the board. Then it will allow the second player to play and will keep going until one of them both win. The function will throw a console.error if the given coordinate is invalid or is already taken. For each turn, the function will evaluate if the currentPlayer is the winner, in that scenario, it will keep track of the winner and if any of the players try to keep playing, the app will keep throwing the message {winner} has won!!! in the console.

  const ttt = new EasterEgg("tic tac toe");
  ttt.snippet.play(1, 2);
  ttt.snippet.play(0, 0);

- A Marquee constructor function will receive a sentence as an argument and based on its length it will show a sentence moving from right to left as in the marquee effect of HTML. After the sentence has passed, the marquee dies and clears the console.

  new Marquee("Codeable for the win!", 40);

- Last but not least, a numberFormatter function that will help us to create functions to give format to numbers based on a base and a collection of suffixes. So we can do something like:

  const formatter = new EasterEgg("number formatter", 1024, ["b", "Kb", "Mb"]);
  formatter.snippet(1000); // 1000b
  formatter.snippet(10000); // 9Kb

  const formatter = new EasterEgg("number formatter", 1000, ["g", "Kg"]);
  formatter.snippet(999); // 999g
  formatter.snippet(2222); // 2Kg
