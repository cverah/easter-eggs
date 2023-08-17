function Marquee() {
  let text = "Cristhian Mario Vera Huamani";
  let inicio = 0;
  let final = 10;
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
  this.loadMarquee = () => {
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

  this.loadMarquee();
}
