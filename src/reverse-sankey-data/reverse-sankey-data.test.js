import { reverseSankeyData } from "./reverse-sankey-data";

test("single flow", () => {
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
