function Clock() {
  let second = 30;
  let minute = 59;
  let hour = 23;
  let formatsecond;
  let formatminute;
  let formathour;

  function format(format) {
    return format < 10 ? (format = `0${format}`) : format;
  }

  this.runClock = () => {
    this.interval = setInterval(() => {
      console.clear();

      if (second === 60) {
        minute++;
        second = 0;
      }
      if (minute === 60) {
        hour++;

        minute = 0;
      }
      if (hour === 24) {
        hour = 0;
        second = 0;
        minute = 0;
      }
      console.log(`${format(hour)}:${format(minute)}:${format(second)}`);
      second++;
    }, 1000);
  };

  //terminar evento del clock
  document.addEventListener("click", () => {
    // console.log("click");
    clearInterval(this.interval);
    console.clear();
    console.log("Terminado reloj");
  });

  this.runClock();
}

// const clock = new Clock();

//Marquee
function Marquee(word, longitud) {
  const loader = new Loader(word, longitud);
  loader.load(word, longitud);
  loader.whenFinishAnimation = function (word, longitud) {
    let text = word;
    let inicio = 0;
    let final = longitud;
    this.travelText = () => {
      if (inicio === text.length) {
        clearInterval(this.interval);
        console.log("finalizado marquee");
      } else {
        // a = "hola"
        // a.slice(1) --> ola
        console.log(text.slice(inicio));
      }
    };
    this.run = () => {
      this.interval = setInterval(() => {
        console.clear();
        if (final < inicio) {
          console.clear();
          inicio++;
          this.travelText();
        } else {
          console.log(`${" ".repeat(final)}${text}`);
          final--;
        }
      }, 200);
    };
    this.run();
  };
}

//animacion
function Loader(name, ...args) {
  let symbols = ["|", "/", "-", "\\"];
  let i = 0;
  this.travelsymbols = () => {
    console.clear();
    if (i === symbols.length) i = 0;
    console.log(symbols[i]);
    i++;
  };
  this.animate = () => {
    this.interval = setInterval(this.travelsymbols, 200);
  };
  this.load = function (name, ...args) {
    this.animate();
    setTimeout(() => {
      clearInterval(this.interval);
      console.clear();
      this.result = this.whenFinishAnimation(name, ...args);
    }, 3000);
  };
}

// let loader = new Loader();

//factory
function EasterEgg(name, ...args) {
  const loader = new Loader();
  loader.load(name, ...args);
  loader.whenFinishAnimation = function (name, ...args) {
    switch (name) {
      case "clock":
        new Clock();
        break;
      default:
        console.log("no existe ese easter egg");
    }
  };
}
