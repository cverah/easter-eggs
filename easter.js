///animacion
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
