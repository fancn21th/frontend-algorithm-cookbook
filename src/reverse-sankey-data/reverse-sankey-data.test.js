import { reverseSankeyData } from "./reverse-sankey-data";

// describe("do not consider data is complete", () => {
//   test("single flow with two nodes", () => {
//     const source = [
//       {
//         source: "foo",
//         target: "bar",
//         value: 10,
//       },
//     ];

//     const result = reverseSankeyData(source);

//     console.log({
//       result,
//     });

//     const expected = { 1: { foo: 10 }, 2: { bar: 10 } };

//     expect(result).toStrictEqual(expected);
//   });

//   test("single flow with three nodes in a row", () => {
//     const source = [
//       {
//         source: "foo",
//         target: "bar",
//         value: 10,
//       },
//       {
//         source: "bar",
//         target: "baz",
//         value: 20,
//       },
//     ];

//     const result = reverseSankeyData(source);

//     console.log({
//       result,
//     });

//     // the data of test case is incomplete, some node is missing in level 1 and level 3
//     const expected = { 1: { foo: 10 }, 2: { bar: 30 }, 3: { baz: 20 } };

//     expect(result).toStrictEqual(expected);
//   });

//   test("two flows in fork with four nodes in two rows", () => {
//     const source = [
//       {
//         source: "foo",
//         target: "bar",
//         value: 10,
//       },
//       {
//         source: "bar",
//         target: "baz",
//         value: 20,
//       },
//       {
//         source: "foo",
//         target: "foz",
//         value: 20,
//       },
//     ];

//     const result = reverseSankeyData(source);

//     console.log({
//       result,
//     });

//     // the data of test case is incomplete, some node is missing in level 1 and level 3
//     const expected = {
//       1: { foo: 30 },
//       2: { bar: 30, foz: 20 },
//       3: { baz: 20 },
//     };

//     expect(result).toStrictEqual(expected);
//   });

//   test("two flows in parallel with four nodes in two rows", () => {
//     const source = [
//       {
//         source: "foo",
//         target: "bar",
//         value: 10,
//       },
//       {
//         source: "bar",
//         target: "baz",
//         value: 20,
//       },
//       {
//         source: "foz",
//         target: "coz",
//         value: 30,
//       },
//       {
//         source: "coz",
//         target: "noz",
//         value: 40,
//       },
//     ];

//     const result = reverseSankeyData(source);

//     console.log({
//       result,
//     });

//     // the data of test case is incomplete, some node is missing in level 1 and level 3
//     const expected = {
//       1: { foo: 10, foz: 30 },
//       2: { bar: 30, coz: 70 },
//       3: { baz: 20, noz: 40 },
//     };

//     expect(result).toStrictEqual(expected);
//   });
// });

describe("do consider data is complete", () => {
  test("data is spread in two levels", () => {
    /*
        / b
      a
        \ c
    */

    const source = [
      {
        source: "foo",
        target: "bar",
        value: 10,
      },
      {
        source: "foo",
        target: "baz",
        value: 10,
      },
    ];

    const result = reverseSankeyData(source);

    console.log({
      result,
    });

    const expected = { 1: { foo: 20 }, 2: { bar: 10, baz: 10 } };

    expect(result).toStrictEqual(expected);
  });

  test("data is in a row", () => {
    /*
      a(10) - b(10) - c(10)
    */

    const source = [
      {
        source: "foo",
        target: "bar",
        value: 10,
      },
      {
        source: "bar",
        target: "baz",
        value: 10,
      },
    ];

    const result = reverseSankeyData(source);

    console.log({
      result,
    });

    const expected = { 1: { foo: 10 }, 2: { bar: 10 }, 3: { baz: 10 } };

    expect(result).toStrictEqual(expected);
  });

  test("data is spread in three levels ", () => {
    /*
            / b (10 ) \
      a (20)            d (20)
            \ c (10) / 
    */

    const source = [
      {
        source: "foo",
        target: "bar",
        value: 10,
      },
      {
        source: "bar",
        target: "coo",
        value: 10,
      },
      {
        source: "foo",
        target: "baz",
        value: 10,
      },
      {
        source: "baz",
        target: "coo",
        value: 10,
      },
    ];

    const result = reverseSankeyData(source);

    console.log({
      result,
    });

    const expected = {
      1: { foo: 20 },
      2: { bar: 10, baz: 10 },
      3: { coo: 20 },
    };

    expect(result).toStrictEqual(expected);
  });

  test("data is shuffled in two levels ", () => {
    /*

      a(5|5)\    /c(9)
            \  / 
            \ 
      b(4|6) / \d(11)
    
    */

    const source = [
      {
        source: "a",
        target: "c",
        value: 5,
      },
      {
        source: "a",
        target: "d",
        value: 5,
      },
      {
        source: "b",
        target: "c",
        value: 4,
      },
      {
        source: "b",
        target: "d",
        value: 6,
      },
    ];

    const result = reverseSankeyData(source);

    console.log({
      result,
    });

    const expected = { 1: { a: 10, b: 10 }, 2: { c: 9, d: 11 } };

    expect(result).toStrictEqual(expected);
  });

  test("data is shuffled in three levels ", () => {
    /*

      a(1|2|3)  d(3(1|1|1))  g(6)
              X             X  
      b(1|2|3)  e(6(2|2|2))  h(6)
              X             X 
      c(1|2|3)  f(9(3|3|3))  i(6)
    
    */

    const source = [
      // a -> d,e,f
      {
        source: "a",
        target: "d",
        value: 1,
      },
      {
        source: "a",
        target: "e",
        value: 2,
      },
      {
        source: "a",
        target: "f",
        value: 3,
      },
      // b -> d,e,f
      {
        source: "b",
        target: "d",
        value: 1,
      },
      {
        source: "b",
        target: "e",
        value: 2,
      },
      {
        source: "b",
        target: "f",
        value: 3,
      },
      //c -> d,e,f
      {
        source: "c",
        target: "d",
        value: 1,
      },
      {
        source: "c",
        target: "e",
        value: 2,
      },
      {
        source: "c",
        target: "f",
        value: 3,
      },
      //d -> g,h,i
      {
        source: "d",
        target: "g",
        value: 1,
      },
      {
        source: "d",
        target: "h",
        value: 1,
      },
      {
        source: "d",
        target: "i",
        value: 1,
      },
      //e -> g,h,i
      {
        source: "e",
        target: "g",
        value: 2,
      },
      {
        source: "e",
        target: "h",
        value: 2,
      },
      {
        source: "e",
        target: "i",
        value: 2,
      },
      //f -> g,h,i
      {
        source: "f",
        target: "g",
        value: 3,
      },
      {
        source: "f",
        target: "h",
        value: 3,
      },
      {
        source: "f",
        target: "i",
        value: 3,
      },
    ];

    const result = reverseSankeyData(source);

    console.log({
      result,
    });

    const expected = {
      1: { a: 6, b: 6, c: 6 },
      2: { d: 3, e: 6, f: 9 },
      3: { g: 6, h: 6, i: 6 },
    };

    expect(result).toStrictEqual(expected);
  });
});
