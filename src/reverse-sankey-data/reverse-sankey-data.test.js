import { reverseSankeyData } from "./reverse-sankey-data";

test("single flow with two nodes", () => {
  const source = [
    {
      source: "foo",
      target: "bar",
      value: 10,
    },
  ];

  const result = reverseSankeyData(source);

  console.log({
    result,
  });

  const expected = { 1: { foo: 10 }, 2: { bar: 10 } };

  expect(result).toStrictEqual(expected);
});

test("single flow with three nodes in a row", () => {
  const source = [
    {
      source: "foo",
      target: "bar",
      value: 10,
    },
    {
      source: "bar",
      target: "baz",
      value: 20,
    },
  ];

  const result = reverseSankeyData(source);

  console.log({
    result,
  });

  const expected = { 1: { foo: 10 }, 2: { bar: 30 }, 3: { baz: 20 } };

  expect(result).toStrictEqual(expected);
});
