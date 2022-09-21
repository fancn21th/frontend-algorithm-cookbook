import { reverseSankeyData } from "./reverse-sankey-data";

test("sankey is coming", () => {
  const source = [];
  const result = reverseSankeyData(source);
  const expected = [
    {
      foo: 10,
      bar: 20,
      baz: 30,
    },
  ];
  expect(result).toStrictEqual(expected);
});
