import formatList from "./format";

test("can format a list", () => {
  const formattedList = formatList(
    "Foo",
    [{ name: "Foo", name: "Bar", name: "Baz" }],
    "name"
  );
  expect(formattedList).toMatchSnapshot();
});
