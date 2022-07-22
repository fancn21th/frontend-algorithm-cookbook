const reducer = function (acc, cur) {
  return cur(acc);
};

export const compose = (fns) => (init) => fns.reduce(reducer, init);
