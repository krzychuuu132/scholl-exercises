import { FilterData } from "./FilterData";

const data = [
  {
    id: 0,
    name: "test",
  },
  {
    id: 1,
    name: "test",
  },
  {
    id: 2,
    name: "test",
  },
  {
    id: 3,
    name: "test",
  },
  {
    id: 4,
    name: "test",
  },
];

const FilterDataInstance = new FilterData(data);

const addedArr = FilterDataInstance.add({ id: 20, name: "dzialaj" });
console.log(addedArr);

const removedArr = FilterDataInstance.delete(20);
console.log(removedArr);

const searchArr = FilterDataInstance.search("te");
console.log(searchArr);
