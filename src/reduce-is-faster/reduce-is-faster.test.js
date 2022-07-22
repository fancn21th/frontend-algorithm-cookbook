import { filterMappedBigData, reducedBigData } from "./reduce-is-faster";

const length = 10_000_000;

// https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ...]
const bigData = Array.from({ length }, (_, i) => i + 1);

test("reduce function is faster than map & filter compose", () => {
  console.time("filter and map");
  filterMappedBigData(bigData);
  console.timeEnd("filter and map");

  console.time("reduce");
  reducedBigData(bigData);
  console.timeEnd("reduce");

  return undefined;
});
