export class Car {
  id: number;
  constructor(id?: number) {
    this.id = id;
  }

  // NIESTETY W TYPESCRIPT NIE DA SIĘ PRZECIĄŻAĆ METOD W TEJ SAMEJ KLASIE, PONIEWAŻ
  // KOD TYPESCRIPT JEST KOMPILOWANY DO CZYSTEOG JAVASCRIPT I JS NIE ROZRÓŻNIA TYPÓW

  // drive(a: string) {
  //   console.log(a);
  // }

  // drive(b: number) {
  //   console.log(b);
  // }

  render() {
    console.log("metoda render z klasy Car");
  }
}
