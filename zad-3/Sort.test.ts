import { Sort } from "./Sort";

// Testy uruhcamiamy komendą jest w konsoli

test("Sortowanie ciagu pustego", () => {
  const SortInstance = new Sort();
  const sortedArr = SortInstance.quickSort([]);
  expect(sortedArr).toEqual([]);
});
test("Sortowanie 1-elementowego", () => {
  const SortInstance = new Sort();
  const sortedArr = SortInstance.quickSort([1]);
  expect(sortedArr).toEqual([1]);
});
test("Sortowanie 2-elementowego", () => {
  const SortInstance = new Sort();
  const sortedArr = SortInstance.quickSort([5, 5]);
  expect(sortedArr).toEqual([5, 5]);
});
test("Sortowanie 3-elementowego", () => {
  const SortInstance = new Sort();
  const sortedArr = SortInstance.quickSort([1, 5, 5]);
  expect(sortedArr).toEqual([1, 5, 5]);
});
test("Sortowanie przeciwne do cyfr indeksu", () => {
  const SortInstance = new Sort();
  const sortedArr = SortInstance.quickSort([5, 5, 1, 7, 4]);
  expect(sortedArr).toEqual([1, 4, 5, 5, 7]);
});
test("Sortowanie ciagu nieuporządkowanego złozonego z numeru indeksu", () => {
  const SortInstance = new Sort();
  const sortedArr = SortInstance.quickSort([4, 7, 1, 5, 5]);
  expect(sortedArr).toEqual([1, 4, 5, 5, 7]);
});
