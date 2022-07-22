import { filterMappedBigData, reducedBigData } from "./reduce-is-faster";

const length = 1_000_000;

// https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ...]
const smallData = Array.from({ length: 4 }, (_, i) => i + 1);
const bigData = Array.from({ length }, (_, i) => i + 1);

test("reduce function is faster than map & filter composed", () => {
  const expected = [4, 8];
  const filterMappedResult = filterMappedBigData(smallData);
  const reducedResult = reducedBigData(smallData);

  expect(filterMappedResult).toStrictEqual(expected);
  expect(reducedResult).toStrictEqual(expected);

  // 以下并非测试而是查看对比时间消耗 暂时被注释

  // console.time("filter and map");
  // filterMappedBigData(bigData);
  // console.timeEnd("filter and map");

  // console.time("reduce");
  // reducedBigData(bigData);
  // console.timeEnd("reduce");
});
