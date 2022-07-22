const even = (items) => items.filter((item) => item % 2 === 0);

const double = (items) => items.map((item) => item * 2);

const filterMappedBigData = (items) => double(even(items));

const reducer = function (acc, cur) {
  if (cur % 2 === 0) {
    acc.push(cur * 2);
  }
  return acc;
};

const reducedBigData = (items) => items.reduce(reducer, []);

export { filterMappedBigData, reducedBigData };
