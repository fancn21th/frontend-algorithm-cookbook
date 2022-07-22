import { compose } from "./compose-functions";

const increment = (number) => number + 1;
const double = (number) => number * 2;
const triple = (number) => number * 3;

const pipeline = [increment, increment, double, triple];

test("compose a pipeline function and it works", () => {
  const func = compose(pipeline);
  const result = func(1);
  expect(result).toBe(18);
});
