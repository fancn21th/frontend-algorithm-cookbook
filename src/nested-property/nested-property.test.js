import { getNestedPropByPath } from "./nested-property";

const characterA = {
  name: "悟空",
  master: {
    name: "唐僧",
    master: {
      name: "观音",
    },
  },
};

const characterB = {
  name: "唐僧",
  master: {
    name: "观音",
  },
};

test("access nested prop by path, and it works ", () => {
  const path = "master.master.name";
  const result = getNestedPropByPath(path)(characterA);

  expect(result).toBe("观音");
});

test("access nested prop by path, and it fails ", () => {
  const path = "master.master.name";
  const result = getNestedPropByPath(path)(characterB);

  expect(result).toBe(false);
});

test("access nested prop in array by path, and it works ", () => {
  const path = "master.master.name";
  const characters = [characterA, characterB];
  const results = ["观音", false];

  characters.forEach((c, index) => {
    const value = getNestedPropByPath(path)(c);
    expect(value).toBe(results[index]);
  });
});
