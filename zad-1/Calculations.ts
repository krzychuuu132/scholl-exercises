export class Calculations {
  static score: number = 0;
  static solution: number | string;

  calculate(b: number, a: number, c: number): number {
    const score = Math.pow(b, 2) - 4 * a * c;
    Calculations.score = score;
    return score;
  }

  checkRoot(): number | string {
    if (Calculations.score > 0) {
      Calculations.solution = 2;
    } else if (Calculations.score === 0) {
      Calculations.solution = 1;
    } else {
      Calculations.solution = "brak rozwiązań";
    }

    return Calculations.solution;
  }
}
