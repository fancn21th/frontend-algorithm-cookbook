import { getNestedPropByPath } from "./nested-property";

const character = {
  name: "悟空",
  master: {
    name: "唐僧",
    master: {
      name: "观音",
    },
  },
};

test("access nested prop by path, and it works ", () => {
  const path = "master.master.name";
  const result = getNestedPropByPath(path)(character);

  expect(result).toBe("观音");
});

test("access nested prop by path, and it fails ", () => {
  const path = "master.master.master.name";
  const result = getNestedPropByPath(path)(character);

  expect(result).toBe(false);
});
