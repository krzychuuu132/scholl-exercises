import { Calculations } from "./Calculations";

// Testy uruhcamiamy komendą jest w konsoli

test("Nie ma miejsc zerowych", () => {
  const CalculationsInstance = new Calculations();

  CalculationsInstance.calculate(4, 5, 2);
  CalculationsInstance.checkRoot();

  expect(Calculations.solution).toBe("brak rozwiązań");
});

test("Ma 1 miejsce zerowe", () => {
  const CalculationsInstance = new Calculations();

  CalculationsInstance.calculate(1, 2, 1);
  CalculationsInstance.checkRoot();

  expect(Calculations.solution).toBe(1);
});

test("Ma 2 miejsca zerowe", () => {
  const CalculationsInstance = new Calculations();

  CalculationsInstance.calculate(2, 8, -10);
  CalculationsInstance.checkRoot();

  expect(Calculations.solution).toBe(2);
});
