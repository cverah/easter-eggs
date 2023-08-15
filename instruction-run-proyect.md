Steps:

- run the index.html
- open console with f11 or anticlick and inspect
- Put the following commands in the console to run

  new EasterEgg("clock");
  (click in the body for finish clock)

  const ttt = new EasterEgg("tic tac toe");
  ttt.snippet.play(1, 2);
  ttt.snippet.play(0, 0);

  new Marquee("Codeable for the win!", 40);

  const formatter = new EasterEgg("number formatter", 1024, ["b", "Kb", "Mb"]);
  formatter.snippet(1000);
  formatter.snippet(10000);

  const formatter = new EasterEgg("number formatter", 1000, ["g", "Kg"]);
  formatter.snippet(999);
  formatter.snippet(2222);
